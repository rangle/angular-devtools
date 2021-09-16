import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DirectivePropertyResolver } from '../property-resolver/directive-property-resolver';
import { ElementPropertyResolver } from '../property-resolver/element-property-resolver';
import { ComponentType } from 'protocol';

@Component({
  selector: 'ng-component-metadata',
  templateUrl: './component-metadata.component.html',
  styleUrls: ['./component-metadata.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentMetadataComponent {
  @Input() currentSelectedComponent: ComponentType;

  constructor(private _nestedProps: ElementPropertyResolver) {}

  viewEncapsulationModes = ['Emulated', 'Native', 'None', 'ShadowDom'];

  get controller(): DirectivePropertyResolver | undefined {
    if (!this.currentSelectedComponent) {
      return;
    }
    return this._nestedProps.getDirectiveController(this.currentSelectedComponent.name);
  }

  get viewEncapsulation(): string | undefined {
    const encapsulationIndex = this?.controller?.directiveViewEncapsulation;
    if (encapsulationIndex !== undefined) {
      return this.viewEncapsulationModes[encapsulationIndex];
    }
  }

  get changeDetectionStrategy(): string | undefined {
    const onPush = this?.controller?.directiveHasOnPushStrategy;
    return onPush ? 'OnPush' : onPush !== undefined ? 'Default' : undefined;
  }
}
