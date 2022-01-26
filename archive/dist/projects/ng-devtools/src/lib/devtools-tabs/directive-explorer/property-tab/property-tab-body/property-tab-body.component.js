import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./property-view/property-view.component";
function PropertyTabBodyComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "ng-property-view", 3);
    i0.ɵɵlistener("inspect", function PropertyTabBodyComponent_ng_container_0_div_1_Template_ng_property_view_inspect_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.inspect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directive_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("directive", directive_r2);
} }
function PropertyTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PropertyTabBodyComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.getCurrentDirectives());
} }
export class PropertyTabBodyComponent {
    constructor() {
        this.inspect = new EventEmitter();
    }
    getCurrentDirectives() {
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
PropertyTabBodyComponent.ɵfac = function PropertyTabBodyComponent_Factory(t) { return new (t || PropertyTabBodyComponent)(); };
PropertyTabBodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyTabBodyComponent, selectors: [["ng-property-tab-body"]], inputs: { currentSelectedElement: "currentSelectedElement" }, outputs: { inspect: "inspect" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "explorer-panel", 4, "ngFor", "ngForOf"], [1, "explorer-panel"], [3, "directive", "inspect"]], template: function PropertyTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.currentSelectedElement);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.PropertyViewComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabBodyComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-tab-body.component.html',
                selector: 'ng-property-tab-body',
                styleUrls: ['./property-tab-body.component.scss'],
            }]
    }], null, { currentSelectedElement: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=property-tab-body.component.js.map