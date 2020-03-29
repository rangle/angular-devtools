import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-property-view-header',
  templateUrl: './property-view-header.component.html',
  styleUrls: ['./property-view-header.component.scss'],
})
export class PropertyViewHeaderComponent {
  @Input() directive: string;
  @Output() copyPropData = new EventEmitter<string>();
}
