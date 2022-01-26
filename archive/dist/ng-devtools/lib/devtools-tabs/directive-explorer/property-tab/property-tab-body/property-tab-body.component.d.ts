import { EventEmitter } from '@angular/core';
import { IndexedNode } from '../../directive-forest/index-forest';
import { FlatNode } from '../../property-resolver/element-property-resolver';
import { DirectivePosition } from 'protocol';
import * as i0 from "@angular/core";
export declare class PropertyTabBodyComponent {
    currentSelectedElement: IndexedNode | null;
    inspect: EventEmitter<{
        node: FlatNode;
        directivePosition: DirectivePosition;
    }>;
    getCurrentDirectives(): string[] | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertyTabBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertyTabBodyComponent, "ng-property-tab-body", never, { "currentSelectedElement": "currentSelectedElement"; }, { "inspect": "inspect"; }, never, never>;
}
