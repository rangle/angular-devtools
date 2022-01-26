import { DirectivePropertyResolver } from '../../../property-resolver/directive-property-resolver';
import { ElementPropertyResolver } from '../../../property-resolver/element-property-resolver';
import { ComponentType } from 'protocol';
import * as i0 from "@angular/core";
export declare class ComponentMetadataComponent {
    private _nestedProps;
    currentSelectedComponent: ComponentType;
    constructor(_nestedProps: ElementPropertyResolver);
    viewEncapsulationModes: string[];
    get controller(): DirectivePropertyResolver | undefined;
    get viewEncapsulation(): string | undefined;
    get changeDetectionStrategy(): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentMetadataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentMetadataComponent, "ng-component-metadata", never, { "currentSelectedComponent": "currentSelectedComponent"; }, {}, never, never>;
}
