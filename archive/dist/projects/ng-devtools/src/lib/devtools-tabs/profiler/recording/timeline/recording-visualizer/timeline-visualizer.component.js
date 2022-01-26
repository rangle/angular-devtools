import { Component, Input } from '@angular/core';
import { VisualizationMode } from '../timeline.component';
import * as i0 from "@angular/core";
function TimelineVisualizerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng-flamegraph-visualizer", 5);
    i0.ɵɵlistener("nodeSelect", function TimelineVisualizerComponent_ng_container_3_Template_ng_flamegraph_visualizer_nodeSelect_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.handleNodeSelect($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("frame", ctx_r0.frame)("changeDetection", ctx_r0.changeDetection);
} }
function TimelineVisualizerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "ng-tree-map-visualizer", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("frame", ctx_r1.frame);
} }
function TimelineVisualizerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng-bargraph-visualizer", 7);
    i0.ɵɵlistener("nodeSelect", function TimelineVisualizerComponent_ng_container_5_Template_ng_bargraph_visualizer_nodeSelect_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.handleNodeSelect($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("frame", ctx_r2.frame);
} }
function TimelineVisualizerComponent_as_split_area_6_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "ng-execution-details", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("data", ctx_r8.selectedDirectives);
} }
function TimelineVisualizerComponent_as_split_area_6_div_12_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const parent_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", parent_r11.name, " ");
} }
function TimelineVisualizerComponent_as_split_area_6_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3, "Parent Hierarchy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul");
    i0.ɵɵtemplate(5, TimelineVisualizerComponent_as_split_area_6_div_12_li_5_Template, 2, 1, "li", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r9.parentHierarchy);
} }
function TimelineVisualizerComponent_as_split_area_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "as-split-area", 8);
    i0.ɵɵelementStart(1, "mat-card", 9);
    i0.ɵɵelementStart(2, "mat-toolbar");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "section", 10);
    i0.ɵɵelementStart(5, "div", 11);
    i0.ɵɵelementStart(6, "label");
    i0.ɵɵtext(7, "Total time spent:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, TimelineVisualizerComponent_as_split_area_6_div_11_Template, 2, 1, "div", 12);
    i0.ɵɵtemplate(12, TimelineVisualizerComponent_as_split_area_6_div_12_Template, 6, 1, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r3.selectedEntry.label, " details");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 4, ctx_r3.selectedEntry.value), " ms");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedEntry.value > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.parentHierarchy.length > 0);
} }
export class TimelineVisualizerComponent {
    constructor() {
        this.cmpVisualizationModes = VisualizationMode;
        this.selectedEntry = null;
        this.selectedDirectives = [];
        this.parentHierarchy = [];
    }
    set visualizationMode(mode) {
        this._visualizationMode = mode;
        this.selectedEntry = null;
        this.selectedDirectives = [];
        this.parentHierarchy = [];
    }
    handleNodeSelect({ entry, parentHierarchy, selectedDirectives }) {
        this.selectedEntry = entry;
        this.selectedDirectives = selectedDirectives;
        this.parentHierarchy = parentHierarchy !== null && parentHierarchy !== void 0 ? parentHierarchy : [];
    }
}
TimelineVisualizerComponent.ɵfac = function TimelineVisualizerComponent_Factory(t) { return new (t || TimelineVisualizerComponent)(); };
TimelineVisualizerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimelineVisualizerComponent, selectors: [["ng-timeline-visualizer"]], inputs: { visualizationMode: "visualizationMode", frame: "frame", changeDetection: "changeDetection" }, decls: 7, vars: 6, consts: [["unit", "percent", 3, "gutterSize"], ["size", "75"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["size", "25", "minSize", "15", 4, "ngIf"], [3, "frame", "changeDetection", "nodeSelect"], [3, "frame"], [3, "frame", "nodeSelect"], ["size", "25", "minSize", "15"], [1, "selected-entry"], [1, "entry-statistics"], [1, "txt-total-time"], [4, "ngIf"], [3, "data"], [4, "ngFor", "ngForOf"]], template: function TimelineVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "as-split", 0);
        i0.ɵɵelementStart(1, "as-split-area", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TimelineVisualizerComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
        i0.ɵɵtemplate(4, TimelineVisualizerComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        i0.ɵɵtemplate(5, TimelineVisualizerComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, TimelineVisualizerComponent_as_split_area_6_Template, 13, 6, "as-split-area", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("gutterSize", 9);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitch", ctx._visualizationMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.FlameGraph);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.TreeMap);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.BarGraph);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectedEntry);
    } }, styles: ["[_nghost-%COMP%] {\n  height: calc(100% - 2 * 60px);\n  display: block;\n  overflow: auto;\n\n  ::ng-deep {\n    .as-split-gutter-icon {\n      display: none;\n    }\n  }\n}\n\n.selected-entry[_ngcontent-%COMP%] {\n  padding: 0px;\n  height: 100%;\n\n  mat-toolbar {\n    padding-left: 9px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    line-height: 25px;\n    font-size: 11px;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: auto;\n  }\n\n  section {\n    height: calc(100% - 40px - 23px);\n    width: calc(100% - 20px);\n    overflow: auto;\n    font-family: Roboto, 'Helvetica Neue', sans-serif;\n    padding: 10px;\n  }\n}\n\n.entry-statistics[_ngcontent-%COMP%] {\n  div {\n    padding: 3px;\n\n    label {\n      opacity: 0.7;\n    }\n  }\n\n  span {\n    color: #8a1882;\n  }\n}\n\n.txt-total-time[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: square;\n  margin-block-start: 0px;\n  padding-inline-start: 20px;\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .entry-statistics {\n    span {\n      color: #5cadd3;\n    }\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimelineVisualizerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-timeline-visualizer',
                templateUrl: './timeline-visualizer.component.html',
                styleUrls: ['./timeline-visualizer.component.scss'],
            }]
    }], null, { visualizationMode: [{
            type: Input
        }], frame: [{
            type: Input
        }], changeDetection: [{
            type: Input
        }] }); })();
//# sourceMappingURL=timeline-visualizer.component.js.map