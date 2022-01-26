import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MessageBus,
  Events,
  DevToolsNode,
  ComponentExplorerViewQuery,
  ComponentExplorerView,
  ElementPosition,
  PropertyQuery,
  PropertyQueryTypes,
  DirectivePosition,
} from 'protocol';
import { IndexedNode } from './directive-forest/index-forest';
import { ApplicationOperations } from '../../application-operations';
import { ElementPropertyResolver } from './property-resolver/element-property-resolver';
import { FlatNode } from './directive-forest/component-data-source';
import { FlatNode as PropertyFlatNode } from './property-resolver/element-property-resolver';
import { DirectiveForestComponent } from './directive-forest/directive-forest.component';
import { constructPathOfKeysToPropertyValue } from './property-resolver/directive-property-resolver';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SplitComponent } from '../../../lib/vendor/angular-split/public_api';

const sameDirectives = (a: IndexedNode, b: IndexedNode) => {
  if ((a.component && !b.component) || (!a.component && b.component)) {
    return false;
  }
  if (a.component && b.component && a.component.id !== b.component.id) {
    return false;
  }
  const aDirectives = new Set(a.directives.map((d) => d.id));
  for (const dir of b.directives) {
    if (!aDirectives.has(dir.id)) {
      return false;
    }
  }
  return true;
};

@Component({
  selector: 'ng-directive-explorer',
  templateUrl: './directive-explorer.component.html',
  styleUrls: ['./directive-explorer.component.scss'],
  providers: [
    {
      provide: ElementPropertyResolver,
      useClass: ElementPropertyResolver,
    },
  ],
})
export class DirectiveExplorerComponent implements OnInit, OnDestroy {
  @Input() showCommentNodes = false;
  @Output() toggleInspector = new EventEmitter<void>();

  @ViewChild(DirectiveForestComponent) directiveForest: DirectiveForestComponent;
  @ViewChild(BreadcrumbsComponent) breadcrumbs: BreadcrumbsComponent;
  @ViewChild(SplitComponent, { static: true, read: ElementRef }) splitElementRef: ElementRef;
  @ViewChild('directiveForestSplitArea', { static: true, read: ElementRef }) directiveForestSplitArea: ElementRef;

  currentSelectedElement: IndexedNode | null = null;
  forest: DevToolsNode[];
  splitDirection: 'horizontal' | 'vertical' = 'horizontal';
  parents: FlatNode[] | null = null;

  private _resizeObserver = new ResizeObserver((entries) =>
    this._ngZone.run(() => {
      const resizedEntry = entries[0];

      if (resizedEntry.target === this.splitElementRef.nativeElement) {
        this.splitDirection = resizedEntry.contentRect.width <= 500 ? 'vertical' : 'horizontal';
      }

      if (!this.breadcrumbs) {
        return;
      }

      this.breadcrumbs.updateScrollButtonVisibility();
    })
  );

  private _clickedElement: IndexedNode | null = null;
  private _refreshRetryTimeout: any = null;

  constructor(
    private _appOperations: ApplicationOperations,
    private _messageBus: MessageBus<Events>,
    private _propResolver: ElementPropertyResolver,
    private _cdr: ChangeDetectorRef,
    private _ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.subscribeToBackendEvents();
    this.refresh();
    this._resizeObserver.observe(this.splitElementRef.nativeElement);
    this._resizeObserver.observe(this.directiveForestSplitArea.nativeElement);
  }

  ngOnDestroy(): void {
    this._resizeObserver.unobserve(this.splitElementRef.nativeElement);
    this._resizeObserver.unobserve(this.directiveForestSplitArea.nativeElement);
  }

  handleNodeSelection(node: IndexedNode | null): void {
    if (node) {
      // We want to guarantee that we're not reusing any of the previous properties.
      // That's possible if the user has selected an NgForOf and after that
      // they select another NgForOf instance. In this case, we don't want to diff the props
      // we want to render from scratch.
      if (this._clickedElement && !sameDirectives(this._clickedElement, node)) {
        this._propResolver.clearProperties();
      }
      this._clickedElement = node;
      this._messageBus.emit('setSelectedComponent', [node.position]);
      this.refresh();
    } else {
      this._clickedElement = this.currentSelectedElement = null;
    }
  }

  subscribeToBackendEvents(): void {
    this._messageBus.on('latestComponentExplorerView', (view: ComponentExplorerView) => {
      this.forest = view.forest;
      this.currentSelectedElement = this._clickedElement;
      if (view.properties && this.currentSelectedElement) {
        this._propResolver.setProperties(this.currentSelectedElement, view.properties);
      }
    });

    this._messageBus.on('componentTreeDirty', () => this.refresh());
  }

  refresh(): void {
    const success = this._messageBus.emit('getLatestComponentExplorerView', [this._constructViewQuery()]);
    // If the event was not throttled, we no longer need to retry.
    if (success) {
      clearTimeout(this._refreshRetryTimeout);
      this._refreshRetryTimeout = null;
      return;
    }
    // If the event was throttled and we haven't scheduled a retry yet.
    if (!this._refreshRetryTimeout) {
      this._refreshRetryTimeout = setTimeout(() => this.refresh(), 500);
    }
  }

  viewSource(): void {
    if (!this.currentSelectedElement) {
      return;
    }
    this._appOperations.viewSource(this.currentSelectedElement.position);
  }

  handleSelectDomElement(node: IndexedNode): void {
    this._appOperations.selectDomElement(node.position);
  }

  highlight(node: FlatNode): void {
    if (!node.original.component) {
      return;
    }
    this._messageBus.emit('createHighlightOverlay', [node.position]);
  }

  unhighlight(): void {
    this._messageBus.emit('removeHighlightOverlay');
  }

  private _constructViewQuery(): ComponentExplorerViewQuery | undefined {
    if (!this._clickedElement) {
      return;
    }
    return {
      selectedElement: this._clickedElement.position,
      propertyQuery: this._getPropertyQuery(),
    };
  }

  private _getPropertyQuery(): PropertyQuery {
    // Here we handle the case when a given element has already been selected.
    // We check if we're dealing with the same instance (i.e., if we have the same
    // set of directives and component on it), if we do, we want to get the same
    // set of properties which are already expanded.
    if (
      !this._clickedElement ||
      !this.currentSelectedElement ||
      !sameDirectives(this._clickedElement, this.currentSelectedElement)
    ) {
      return {
        type: PropertyQueryTypes.All,
      };
    }
    return {
      type: PropertyQueryTypes.Specified,
      properties: this._propResolver.getExpandedProperties() || {},
    };
  }

  highlightComponent(position: ElementPosition): void {
    this._messageBus.emit('createHighlightOverlay', [position]);
  }

  removeComponentHighlight(): void {
    this._messageBus.emit('removeHighlightOverlay');
  }

  handleSelect(node: FlatNode): void {
    this.directiveForest.handleSelect(node);
  }

  handleSetParents(parents: FlatNode[] | null): void {
    this.parents = parents;
    this._cdr.detectChanges();
  }

  inspect({ node, directivePosition }: { node: PropertyFlatNode; directivePosition: DirectivePosition }): void {
    const objectPath = constructPathOfKeysToPropertyValue(node.prop);
    this._appOperations.inspect(directivePosition, objectPath);
  }
}
