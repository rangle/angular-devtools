import { EventEmitter } from '@angular/core';
import { DirectivePropertyResolver, DirectiveTreeData } from '../../../property-resolver/directive-property-resolver';
import { ElementPropertyResolver, FlatNode } from '../../../property-resolver/element-property-resolver';
import { DirectivePosition } from 'protocol';
import * as i0 from "@angular/core";
export declare class PropertyViewComponent {
    private _nestedProps;
    directive: string;
    inspect: EventEmitter<{
        node: FlatNode;
        directivePosition: DirectivePosition;
    }>;
    constructor(_nestedProps: ElementPropertyResolver);
    get controller(): DirectivePropertyResolver | undefined;
    get directiveInputControls(): DirectiveTreeData | void;
    get directiveOutputControls(): DirectiveTreeData | void;
    get directiveStateControls(): DirectiveTreeData | void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertyViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertyViewComponent, "ng-property-view", never, { "directive": "directive"; }, { "inspect": "inspect"; }, never, never>;
}
