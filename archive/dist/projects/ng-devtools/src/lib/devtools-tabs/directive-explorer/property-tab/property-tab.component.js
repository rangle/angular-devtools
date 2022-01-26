import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./property-tab-header/property-tab-header.component";
import * as i2 from "./property-tab-body/property-tab-body.component";
export class PropertyTabComponent {
    constructor() {
        this.viewSource = new EventEmitter();
        this.inspect = new EventEmitter();
    }
}
PropertyTabComponent.ɵfac = function PropertyTabComponent_Factory(t) { return new (t || PropertyTabComponent)(); };
PropertyTabComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyTabComponent, selectors: [["ng-property-tab"]], inputs: { currentSelectedElement: "currentSelectedElement" }, outputs: { viewSource: "viewSource", inspect: "inspect" }, decls: 2, vars: 2, consts: [[3, "currentSelectedElement", "viewSource"], [3, "currentSelectedElement", "inspect"]], template: function PropertyTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ng-property-tab-header", 0);
        i0.ɵɵlistener("viewSource", function PropertyTabComponent_Template_ng_property_tab_header_viewSource_0_listener() { return ctx.viewSource.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "ng-property-tab-body", 1);
        i0.ɵɵlistener("inspect", function PropertyTabComponent_Template_ng_property_tab_body_inspect_1_listener($event) { return ctx.inspect.emit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
    } }, directives: [i1.PropertyTabHeaderComponent, i2.PropertyTabBodyComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-tab.component.html',
                selector: 'ng-property-tab',
            }]
    }], null, { currentSelectedElement: [{
            type: Input
        }], viewSource: [{
            type: Output
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=property-tab.component.js.map