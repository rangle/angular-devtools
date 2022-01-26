import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, animate, transition, stagger, query, animateChild } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tooltip";
function BarChartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function BarChartComponent_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.barClick.emit(ctx_r3.originalData[i_r2]); });
    i0.ɵɵelementStart(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r0.color)("width", bar_r1.value, "%");
    i0.ɵɵproperty("@appear", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", bar_r1.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(bar_r1.label);
} }
export class BarChartComponent {
    constructor() {
        this.barClick = new EventEmitter();
        this.internalData = [];
    }
    set data(nodes) {
        this.originalData = nodes;
        this.internalData = [];
        const max = nodes.reduce((a, c) => Math.max(a, c.value), -Infinity);
        for (const node of nodes) {
            this.internalData.push({
                label: node.label,
                value: (node.value / max) * 100,
            });
        }
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarChartComponent, selectors: [["ng-bar-chart"]], inputs: { data: "data", color: "color" }, outputs: { barClick: "barClick" }, decls: 2, vars: 2, consts: [[1, "wrapper"], ["class", "bar", 3, "backgroundColor", "width", "click", 4, "ngFor", "ngForOf"], [1, "bar", 3, "click"], [3, "matTooltip"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, BarChartComponent_div_1_Template, 3, 7, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@stagger", undefined);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.internalData);
    } }, directives: [i1.NgForOf, i2.MatTooltip], styles: [".bar[_ngcontent-%COMP%] {\n  width: 0%;\n  margin-bottom: 7px;\n  align-items: center;\n  display: flex;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  opacity: 0.8;\n  cursor: pointer;\n  transition: opacity 0.3s ease-out, width 0.3s ease;\n}\n\n.bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  max-width: calc(100% - 20px);\n  display: inline-block;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  opacity: 1;\n}\n\n.bar[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n[_nghost-%COMP%], .wrapper[_ngcontent-%COMP%] {\n  width: calc(100% - 5px);\n  height: 100%;\n  display: block;\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .bar span {\n    color: #bcc5ce;\n  }\n}"], data: { animation: [
            trigger('appear', [transition(':enter', [style({ width: 0 }), animate('.3s ease', style({ width: '*' }))])]),
            trigger('stagger', [transition(':enter', [query(':enter', stagger('.1s', [animateChild()]))])]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarChartComponent, [{
        type: Component,
        args: [{
                selector: 'ng-bar-chart',
                templateUrl: './bar-chart.component.html',
                styleUrls: ['./bar-chart.component.scss'],
                animations: [
                    trigger('appear', [transition(':enter', [style({ width: 0 }), animate('.3s ease', style({ width: '*' }))])]),
                    trigger('stagger', [transition(':enter', [query(':enter', stagger('.1s', [animateChild()]))])]),
                ],
            }]
    }], null, { data: [{
            type: Input
        }], color: [{
            type: Input
        }], barClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=bar-chart.component.js.map