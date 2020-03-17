import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Descriptor } from 'protocol';
import { SortOptions } from '../property-view.component';

@Component({
  selector: 'ng-property-view-header',
  templateUrl: './property-view-header.component.html',
  styleUrls: ['./property-view-header.component.css'],
})
export class PropertyViewHeaderComponent {
  @Output() copyPropData = new EventEmitter<{ [key: string]: Descriptor }>();
  @Output() sort = new EventEmitter<SortOptions[]>();
  @Input() data;

  cmpSortOptions = SortOptions;

  constructor() {}

  sortProperties(event: MatButtonToggleChange): void {
    this.sort.emit(event.value);
  }
}
