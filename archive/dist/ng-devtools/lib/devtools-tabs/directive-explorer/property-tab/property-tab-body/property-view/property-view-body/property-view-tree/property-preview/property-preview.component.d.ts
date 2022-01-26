import { EventEmitter } from '@angular/core';
import { FlatNode } from '../../../../../../property-resolver/element-property-resolver';
import * as i0 from "@angular/core";
export declare class PropertyPreviewComponent {
    node: FlatNode;
    inspect: EventEmitter<void>;
    get isClickableProp(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertyPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertyPreviewComponent, "ng-property-preview", never, { "node": "node"; }, { "inspect": "inspect"; }, never, never>;
}
