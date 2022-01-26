import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class ZippyComponent {
    constructor() {
        this.visible = false;
    }
}
ZippyComponent.ɵfac = function ZippyComponent_Factory(t) { return new (t || ZippyComponent)(); };
ZippyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ZippyComponent, selectors: [["app-zippy"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[3, "click"], [3, "hidden"]], template: function ZippyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "section");
        i0.ɵɵelementStart(1, "header", 0);
        i0.ɵɵlistener("click", function ZippyComponent_Template_header_click_1_listener() { return ctx.visible = !ctx.visible; });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.visible);
    } }, styles: ["[_nghost-%COMP%] {\n  user-select: none;\n}\n\nheader[_ngcontent-%COMP%] {\n  max-width: 120px;\n  border: 1px solid #ccc;\n  padding-left: 10px;\n  padding-right: 10px;\n  cursor: pointer;\n}\n\ndiv[_ngcontent-%COMP%] {\n  max-width: 120px;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZippyComponent, [{
        type: Component,
        args: [{
                selector: 'app-zippy',
                templateUrl: './zippy.component.html',
                styleUrls: ['./zippy.component.scss'],
            }]
    }], null, { title: [{
            type: Input
        }] }); })();
//# sourceMappingURL=zippy.component.js.map