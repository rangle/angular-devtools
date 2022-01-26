import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropType } from 'protocol';
import * as i0 from "@angular/core";
export class PropertyPreviewComponent {
    constructor() {
        this.inspect = new EventEmitter();
    }
    get isClickableProp() {
        return this.node.prop.descriptor.type === PropType.Function || this.node.prop.descriptor.type === PropType.HTMLNode;
    }
}
PropertyPreviewComponent.ɵfac = function PropertyPreviewComponent_Factory(t) { return new (t || PropertyPreviewComponent)(); };
PropertyPreviewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyPreviewComponent, selectors: [["ng-property-preview"]], inputs: { node: "node" }, outputs: { inspect: "inspect" }, decls: 2, vars: 3, consts: [[1, "value", 3, "click"]], template: function PropertyPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function PropertyPreviewComponent_Template_span_click_0_listener() { return ctx.isClickableProp && ctx.inspect.emit(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("function", ctx.isClickableProp);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.node.prop.descriptor.preview, "\n");
    } }, styles: [".function[_ngcontent-%COMP%] {\n  &:hover {\n    background: #4da1ff;\n    color: #fff;\n    cursor: pointer;\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyPreviewComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-preview',
                templateUrl: './property-preview.component.html',
                styleUrls: ['./property-preview.component.scss'],
            }]
    }], null, { node: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=property-preview.component.js.map