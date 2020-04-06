import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IndexedNode } from '../../directive-forest/index-forest';
import { FlatNode } from '../../property-resolver/element-property-resolver';
import { DirectivePosition } from 'protocol';

@Component({
  templateUrl: './property-tab-body.component.html',
  selector: 'ng-property-tab-body',
  styleUrls: ['./property-tab-body.component.scss'],
})
export class PropertyTabBodyComponent {
  @Input() currentSelectedElement: IndexedNode | null;
  @Output() inspectFunction = new EventEmitter<{ node: FlatNode; directivePosition: DirectivePosition }>();

  getCurrentDirectives(): string[] | undefined {
    if (!this.currentSelectedElement) {
      return;
    }
    const directives = this.currentSelectedElement.directives.map((d) => d.name);
    if (this.currentSelectedElement.component) {
      directives.push(this.currentSelectedElement.component.name);
    }
    return directives;
  }
}
