import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ExecutionDetailsComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td", 0);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 1);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 2);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", entry_r1.directive, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", entry_r1.method, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", entry_r1.value, " ms");
} }
export class ExecutionDetailsComponent {
}
ExecutionDetailsComponent.ɵfac = function ExecutionDetailsComponent_Factory(t) { return new (t || ExecutionDetailsComponent)(); };
ExecutionDetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExecutionDetailsComponent, selectors: [["ng-execution-details"]], inputs: { data: "data" }, decls: 10, vars: 1, consts: [[1, "name"], [1, "method"], [1, "value"], [4, "ngFor", "ngForOf"]], template: function ExecutionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table");
        i0.ɵɵelementStart(1, "thead");
        i0.ɵɵelementStart(2, "th", 0);
        i0.ɵɵtext(3, "Directive");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "th", 1);
        i0.ɵɵtext(5, "Method");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "th", 2);
        i0.ɵɵtext(7, "Time");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "tbody");
        i0.ɵɵtemplate(9, ExecutionDetailsComponent_tr_9_Template, 7, 3, "tr", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [i1.NgForOf], styles: ["table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExecutionDetailsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-execution-details',
                templateUrl: './execution-details.component.html',
                styleUrls: ['./execution-details.component.scss'],
            }]
    }], null, { data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=execution-details.component.js.map