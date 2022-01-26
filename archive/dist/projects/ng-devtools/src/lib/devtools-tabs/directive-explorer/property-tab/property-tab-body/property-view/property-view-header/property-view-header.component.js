import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
export class PropertyViewHeaderComponent {
}
PropertyViewHeaderComponent.ɵfac = function PropertyViewHeaderComponent_Factory(t) { return new (t || PropertyViewHeaderComponent)(); };
PropertyViewHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewHeaderComponent, selectors: [["ng-property-view-header"]], inputs: { directive: "directive" }, decls: 2, vars: 1, template: function PropertyViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("Properties of ", ctx.directive, " ");
    } }, directives: [i1.MatToolbar], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  padding-left: 9px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: 25px;\n  font-size: 11px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: auto;\n}\n\n  {\n  .mat-button {\n    height: 18px;\n    width: 18px;\n    line-height: 15px;\n    margin-right: 7px;\n  }\n\n  .mat-icon-button {\n    height: 18px;\n    width: 18px;\n    line-height: 15px;\n    margin-right: 7px;\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view-header',
                templateUrl: './property-view-header.component.html',
                styleUrls: ['./property-view-header.component.scss'],
            }]
    }], null, { directive: [{
            type: Input
        }] }); })();
//# sourceMappingURL=property-view-header.component.js.map