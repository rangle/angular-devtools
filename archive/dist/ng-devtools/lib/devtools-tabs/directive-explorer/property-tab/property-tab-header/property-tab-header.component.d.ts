import { EventEmitter } from '@angular/core';
import { IndexedNode } from '../../directive-forest/index-forest';
import * as i0 from "@angular/core";
export declare class PropertyTabHeaderComponent {
    currentSelectedElement: IndexedNode;
    currentDirectives: string[] | undefined;
    viewSource: EventEmitter<void>;
    handleViewSource(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertyTabHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertyTabHeaderComponent, "ng-property-tab-header", never, { "currentSelectedElement": "currentSelectedElement"; "currentDirectives": "currentDirectives"; }, { "viewSource": "viewSource"; }, never, never>;
}
