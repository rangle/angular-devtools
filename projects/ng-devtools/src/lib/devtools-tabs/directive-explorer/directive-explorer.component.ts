import { Component, Input, OnInit, ViewChildren, QueryList } from '@angular/core';
import {
  MessageBus,
  Events,
  Node,
  DirectivesProperties,
  DirectiveID,
  ComponentExplorerViewQuery,
  ComponentExplorerView, ComponentExplorerViewProperties,
} from 'protocol';
import { IndexedNode } from './directive-forest/index-forest';
import { PropertyViewComponent } from './property-view/property-view.component';

@Component({
  selector: 'ng-directive-explorer',
  templateUrl: './directive-explorer.component.html',
  styleUrls: ['./directive-explorer.component.css'],
})
export class DirectiveExplorerComponent implements OnInit {
  @Input() messageBus: MessageBus<Events>;

  @ViewChildren(PropertyViewComponent) propertyViews: QueryList<PropertyViewComponent>;

  // The original data we pass to the property viewer.
  // Later, the property viewer may request more nested properties
  // from the backend.
  directivesData: DirectivesProperties | null = null;
  currentSelectedElement: IndexedNode;
  forest: Node[];

  handleNodeSelection(node: IndexedNode): void {
    this.currentSelectedElement = node;
    this.messageBus.emit('getElementDirectivesProperties', [node.id]);
    this.messageBus.emit('setSelectedComponent', [node.id]);
  }

  ngOnInit(): void {
    this.subscribeToBackendEvents();

    // Only one refresh per 50ms.
    let buffering = false;
    this.messageBus.on('componentTreeDirty', () => {
      if (buffering) {
        return;
      }
      buffering = true;
      setTimeout(() => {
        buffering = false;
        this.refresh();
      }, 50);
    });
    this.refresh();
  }

  subscribeToBackendEvents(): void {
    this.messageBus.on('elementDirectivesProperties', (data: DirectivesProperties) => {
      this.directivesData = data;
    });
    this.messageBus.on('latestComponentExplorerView', (view: ComponentExplorerView) => {
      this.forest = view.forest;
      this.directivesData = view.properties;
    });
  }

  refresh(): void {
    this.messageBus.emit('getLatestComponentExplorerView', [this._constructViewQuery()]);
  }

  getEntityID(name: string): DirectiveID {
    const idx: DirectiveID = {
      element: this.currentSelectedElement.id,
    };
    const cmp = this.currentSelectedElement.component;
    if (cmp && cmp.name === name) {
      return idx;
    }
    idx.directive = this.currentSelectedElement.directives.findIndex(d => d.name === name);
    return idx;
  }

  nameTracking(_: number, item: {key: string}): string {
    return item.key;
  }

  private _constructViewQuery(): ComponentExplorerViewQuery {
    if (!this.currentSelectedElement) {
      return { selectedElement: null, expandedProperties: null };
    }
    return {
      selectedElement: this.currentSelectedElement.id,
      // We get the latest query for the properties.
      // The directive may have extended the properties
      // with nested ones which were dynamically requested
      // during the lifecycle of the app.
      expandedProperties: this._latestDirectiveData(),
    };
  }

  private _latestDirectiveData(): ComponentExplorerViewProperties {
    const result = {};
    this.propertyViews.toArray().forEach(view => {
      result[view.name] = view.getExpandedProperties();
    });
    return result;
  }
}

