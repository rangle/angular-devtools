import { EventEmitter } from '@angular/core';
import { IndexedNode } from '../directive-forest/index-forest';
import { FlatNode } from '../property-resolver/element-property-resolver';
import { DirectivePosition } from 'protocol';
import * as i0 from "@angular/core";
export declare class PropertyTabComponent {
    currentSelectedElement: IndexedNode;
    viewSource: EventEmitter<void>;
    inspect: EventEmitter<{
        node: FlatNode;
        directivePosition: DirectivePosition;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertyTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertyTabComponent, "ng-property-tab", never, { "currentSelectedElement": "currentSelectedElement"; }, { "viewSource": "viewSource"; "inspect": "inspect"; }, never, never>;
}
