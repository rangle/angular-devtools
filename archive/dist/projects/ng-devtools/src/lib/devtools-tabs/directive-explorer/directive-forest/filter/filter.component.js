import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
function FilterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "button", 7);
    i0.ɵɵlistener("click", function FilterComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emitPrevMatched(); });
    i0.ɵɵelementStart(2, "mat-icon", 8);
    i0.ɵɵtext(3, " expand_less ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 7);
    i0.ɵɵlistener("click", function FilterComponent_div_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.emitNextMatched(); });
    i0.ɵɵelementStart(5, "mat-icon", 9);
    i0.ɵɵtext(6, " expand_more ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class FilterComponent {
    constructor() {
        this.filter = new EventEmitter();
        this.nextMatched = new EventEmitter();
        this.prevMatched = new EventEmitter();
        this.hasMatched = false;
    }
    emitFilter(event) {
        this.filter.emit(event.target.value);
    }
    emitNextMatched() {
        this.nextMatched.emit();
    }
    emitPrevMatched() {
        this.prevMatched.emit();
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng-filter"]], inputs: { hasMatched: "hasMatched" }, outputs: { filter: "filter", nextMatched: "nextMatched", prevMatched: "prevMatched" }, decls: 7, vars: 1, consts: [[1, "filter"], [1, "icon-outer"], ["color", "primary"], ["matInput", "", "placeholder", "Filter components", 1, "filter-input", 3, "input", "keydown.enter", "keydown.shift.enter"], ["filterInput", ""], ["class", "up-down-buttons", 4, "ngIf"], [1, "up-down-buttons"], ["mat-icon-button", "", 3, "click"], [1, "mat-icon-rtl-mirror"], [1, ""]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "mat-icon", 2);
        i0.ɵɵtext(3, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 3, 4);
        i0.ɵɵlistener("input", function FilterComponent_Template_input_input_4_listener($event) { return ctx.emitFilter($event); })("keydown.enter", function FilterComponent_Template_input_keydown_enter_4_listener() { return ctx.emitNextMatched(); })("keydown.shift.enter", function FilterComponent_Template_input_keydown_shift_enter_4_listener() { return ctx.emitPrevMatched(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, FilterComponent_div_6_Template, 7, 0, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.hasMatched);
    } }, directives: [i1.MatCard, i2.MatIcon, i3.NgIf, i4.MatButton], styles: [".filter[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0px;\n  border-radius: 0px;\n  box-shadow: none !important;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n\n  .icon-outer {\n    display: flex;\n    align-items: center;\n    padding-right: 5px;\n    margin-left: 5px;\n\n    .icon {\n      width: 16px;\n      height: 16px;\n      margin: auto;\n      opacity: 0.7;\n    }\n  }\n\n  .filter-input {\n    border: none;\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\n    padding-left: 5px;\n    width: 100%;\n    font-size: 11px;\n    font-family: inherit;\n    font-weight: inherit;\n    height: 30px;\n    outline: none;\n    color: rgba(0, 0, 0, 0.87);\n  }\n}\n\n.up-down-buttons[_ngcontent-%COMP%] {\n  display: flex;\n\n  button {\n    width: 24px;\n    height: 24px;\n  }\n}\n\n[_nghost-%COMP%] {\n  ::ng-deep {\n    .up-down-buttons {\n      .mat-icon-button {\n        line-height: 25px;\n      }\n\n      button {\n        mat-icon {\n          opacity: 0.5;\n        }\n      }\n    }\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .filter-input {\n    background-color: #242424;\n    color: #ffffff;\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'ng-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.scss'],
            }]
    }], null, { filter: [{
            type: Output
        }], nextMatched: [{
            type: Output
        }], prevMatched: [{
            type: Output
        }], hasMatched: [{
            type: Input
        }] }); })();
//# sourceMappingURL=filter.component.js.map