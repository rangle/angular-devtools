import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VisualizationMode } from '../timeline.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/button";
function TimelineControlsComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-select", 6);
    i0.ɵɵlistener("selectionChange", function TimelineControlsComponent_mat_form_field_1_Template_mat_select_selectionChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.changeVisualizationMode.emit($event.value); });
    i0.ɵɵelementStart(2, "mat-option", 7);
    i0.ɵɵtext(3, " Flame graph ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-option", 7);
    i0.ɵɵtext(5, " Tree map ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-option", 7);
    i0.ɵɵtext(7, " Bar chart ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.visualizationMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.flameGraphMode);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.treeMapMode);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.barGraphMode);
} }
function TimelineControlsComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Time spent: ");
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 1, ctx_r1.record == null ? null : ctx_r1.record.duration), " ms");
} }
function TimelineControlsComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Time spent: ");
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("color", ctx_r2.frameColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, ctx_r2.record == null ? null : ctx_r2.record.duration), " ms");
} }
function TimelineControlsComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Frame rate: ");
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("color", ctx_r3.frameColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r3.estimatedFrameRate, " fps");
} }
function TimelineControlsComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Source: ");
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.record == null ? null : ctx_r4.record.source);
} }
function TimelineControlsComponent_mat_checkbox_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 9);
    i0.ɵɵlistener("change", function TimelineControlsComponent_mat_checkbox_7_Template_mat_checkbox_change_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.toggleChangeDetection.emit(!ctx_r9.changeDetection); });
    i0.ɵɵtext(1, " Show only change detection ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r5.changeDetection);
} }
function TimelineControlsComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function TimelineControlsComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.exportProfile.emit(); });
    i0.ɵɵtext(1, "Save Profile");
    i0.ɵɵelementEnd();
} }
export class TimelineControlsComponent {
    constructor() {
        this.changeVisualizationMode = new EventEmitter();
        this.exportProfile = new EventEmitter();
        this.toggleChangeDetection = new EventEmitter();
        this.flameGraphMode = VisualizationMode.FlameGraph;
        this.treeMapMode = VisualizationMode.TreeMap;
        this.barGraphMode = VisualizationMode.BarGraph;
    }
}
TimelineControlsComponent.ɵfac = function TimelineControlsComponent_Factory(t) { return new (t || TimelineControlsComponent)(); };
TimelineControlsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimelineControlsComponent, selectors: [["ng-timeline-controls"]], inputs: { record: "record", estimatedFrameRate: "estimatedFrameRate", frameColor: "frameColor", visualizationMode: "visualizationMode", empty: "empty", changeDetection: "changeDetection" }, outputs: { changeVisualizationMode: "changeVisualizationMode", exportProfile: "exportProfile", toggleChangeDetection: "toggleChangeDetection" }, decls: 9, vars: 11, consts: [[1, "controls"], [4, "ngIf"], [1, "details"], [3, "color", 4, "ngIf"], [3, "checked", "change", 4, "ngIf"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [3, "value", "selectionChange"], [3, "value"], [1, "value"], [3, "checked", "change"], ["mat-stroked-button", "", 3, "click"]], template: function TimelineControlsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TimelineControlsComponent_mat_form_field_1_Template, 8, 4, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, TimelineControlsComponent_label_3_Template, 5, 3, "label", 1);
        i0.ɵɵtemplate(4, TimelineControlsComponent_label_4_Template, 5, 5, "label", 3);
        i0.ɵɵtemplate(5, TimelineControlsComponent_label_5_Template, 4, 3, "label", 3);
        i0.ɵɵtemplate(6, TimelineControlsComponent_label_6_Template, 4, 1, "label", 1);
        i0.ɵɵtemplate(7, TimelineControlsComponent_mat_checkbox_7_Template, 2, 1, "mat-checkbox", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, TimelineControlsComponent_button_8_Template, 2, 0, "button", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("flame-details", ctx.visualizationMode == ctx.flameGraphMode)("bar-details", ctx.visualizationMode == ctx.barGraphMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.estimatedFrameRate >= 60 && ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.estimatedFrameRate < 60 && ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.estimatedFrameRate < 60 && ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.record == null ? null : ctx.record.source) && ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visualizationMode == ctx.flameGraphMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.empty);
    } }, directives: [i1.NgIf, i2.MatFormField, i3.MatSelect, i4.MatOption, i5.MatCheckbox, i6.MatButton], pipes: [i1.DecimalPipe], styles: ["[_nghost-%COMP%] {\n  height: 60px;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  white-space: nowrap;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 5px;\n\n  button {\n    height: 50px;\n    width: 75px;\n    white-space: normal;\n    line-height: 18px;\n  }\n\n  mat-form-field {\n    flex: 0 1 60px;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n\n  ::ng-deep .details {\n    flex: 1 1 150px;\n    display: flex;\n    flex-direction: column;\n    font-weight: 500;\n    -moz-user-select: text;\n    -khtml-user-select: text;\n    -webkit-user-select: text;\n    -ms-user-select: text;\n    user-select: text;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    label {\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .value {\n      color: #8a1882;\n    }\n  }\n\n  .bar-details {\n    min-height: 60px;\n  }\n\n  .flame-details {\n    min-height: 85px;\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .details .value {\n    color: #5cadd3;\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimelineControlsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-timeline-controls',
                templateUrl: './timeline-controls.component.html',
                styleUrls: ['./timeline-controls.component.scss'],
            }]
    }], null, { record: [{
            type: Input
        }], estimatedFrameRate: [{
            type: Input
        }], frameColor: [{
            type: Input
        }], visualizationMode: [{
            type: Input
        }], empty: [{
            type: Input
        }], changeDetection: [{
            type: Input
        }], changeVisualizationMode: [{
            type: Output
        }], exportProfile: [{
            type: Output
        }], toggleChangeDetection: [{
            type: Output
        }] }); })();
//# sourceMappingURL=timeline-controls.component.js.map