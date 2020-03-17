import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Descriptor, DirectivePosition, Events, MessageBus } from 'protocol';
import { IndexedNode } from '../../../directive-forest/index-forest';
import { PropertyViewBodyComponent } from './property-view-body/property-view-body.component';

export enum SortOptions {
  INPUTS,
  OUTPUTS,
  STATE,
}

@Component({
  selector: 'ng-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
})
export class PropertyViewComponent {
  @Output() copyPropData = new EventEmitter<{ [key: string]: Descriptor }>();
  @Input() data;
  @Input() messageBus: MessageBus<Events>;
  @Input() currentSelectedElement: IndexedNode;

  @ViewChild(PropertyViewBodyComponent) propertyViewBody: PropertyViewBodyComponent;

  currentSort: SortOptions[] = [SortOptions.INPUTS, SortOptions.OUTPUTS, SortOptions.STATE];

  getEntityID(name: string): DirectivePosition {
    const idx: DirectivePosition = {
      element: this.currentSelectedElement.position,
    };
    const cmp = this.currentSelectedElement.component;
    if (cmp && cmp.name === name) {
      return idx;
    }
    idx.directive = this.currentSelectedElement.directives.findIndex(d => d.name === name);
    return idx;
  }

  setSort(sort: SortOptions[]): void {
    this.currentSort = sort;
  }

  get sortedData(): { [prop: string]: Descriptor } {
    const sortedData = {};
    const allowList = this._computeAllowList();
    Object.keys(this.data.value.props).forEach(key => {
      if (allowList.includes(key)) {
        sortedData[key] = this.data.value.props[key];
      }
    });
    return sortedData;
  }

  private _computeAllowList(): string[] {
    const inputList = Object.keys(this.data.value.inputs);
    const outputList = Object.keys(this.data.value.outputs);
    const stateList = Object.keys(this.data.value.props).filter(
      prop => !inputList.includes(prop) && !outputList.includes(prop)
    );
    const propList = {
      [SortOptions.INPUTS]: inputList,
      [SortOptions.OUTPUTS]: outputList,
      [SortOptions.STATE]: stateList,
    };

    return [].concat.apply(
      [],
      this.currentSort.map(sortOption => propList[sortOption])
    );
  }
}
