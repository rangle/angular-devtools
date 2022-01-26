import { Component, EventEmitter, Input, Output } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/expansion";
import * as i3 from "@angular/cdk/drag-drop";
import * as i4 from "./property-view-tree/property-view-tree.component";
function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-expansion-panel", 5);
    i0.ɵɵelementStart(1, "mat-expansion-panel-header", 6);
    i0.ɵɵelementStart(2, "mat-panel-title");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ng-property-view-tree", 7);
    i0.ɵɵlistener("updateValue", function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template_ng_property_view_tree_updateValue_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(3); return ctx_r4.updateValue($event); })("inspect", function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template_ng_property_view_tree_inspect_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(3); return ctx_r6.handleInspect($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("expanded", true);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.panels[index_r2].title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r3.panels[index_r2].controls.dataSource)("treeControl", ctx_r3.panels[index_r2].controls.treeControl);
} }
function PropertyViewBodyComponent_mat_accordion_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template, 5, 4, "mat-expansion-panel", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.panels[index_r2].hidden);
} }
function PropertyViewBodyComponent_mat_accordion_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-accordion", 1);
    i0.ɵɵlistener("cdkDropListDropped", function PropertyViewBodyComponent_mat_accordion_0_Template_mat_accordion_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.drop($event); });
    i0.ɵɵtemplate(1, PropertyViewBodyComponent_mat_accordion_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("multi", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.categoryOrder);
} }
export class PropertyViewBodyComponent {
    constructor() {
        this.inspect = new EventEmitter();
        this.categoryOrder = [0, 1, 2];
    }
    get panels() {
        return [
            {
                title: '@Inputs',
                hidden: this.directiveInputControls.dataSource.data.length === 0,
                controls: this.directiveInputControls,
            },
            {
                title: '@Outputs',
                hidden: this.directiveOutputControls.dataSource.data.length === 0,
                controls: this.directiveOutputControls,
            },
            {
                title: 'State',
                hidden: this.directiveStateControls.dataSource.data.length === 0,
                controls: this.directiveStateControls,
            },
        ];
    }
    get controlsLoaded() {
        return !!this.directiveStateControls && !!this.directiveOutputControls && !!this.directiveInputControls;
    }
    updateValue({ node, newValue }) {
        this.controller.updateValue(node, newValue);
    }
    drop(event) {
        moveItemInArray(this.categoryOrder, event.previousIndex, event.currentIndex);
    }
    handleInspect(node) {
        this.inspect.emit({
            node,
            directivePosition: this.controller.directivePosition,
        });
    }
}
PropertyViewBodyComponent.ɵfac = function PropertyViewBodyComponent_Factory(t) { return new (t || PropertyViewBodyComponent)(); };
PropertyViewBodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewBodyComponent, selectors: [["ng-property-view-body"]], inputs: { controller: "controller", directiveInputControls: "directiveInputControls", directiveOutputControls: "directiveOutputControls", directiveStateControls: "directiveStateControls" }, outputs: { inspect: "inspect" }, decls: 1, vars: 1, consts: [["cdkDropList", "", 3, "multi", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 3, "multi", "cdkDropListDropped"], ["class", "mat-accordion-content", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "mat-accordion-content"], [3, "expanded", 4, "ngIf"], [3, "expanded"], ["collapsedHeight", "25px", "expandedHeight", "25px"], [3, "dataSource", "treeControl", "updateValue", "inspect"]], template: function PropertyViewBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyViewBodyComponent_mat_accordion_0_Template, 2, 2, "mat-accordion", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.controlsLoaded);
    } }, directives: [i1.NgIf, i2.MatAccordion, i3.CdkDropList, i1.NgForOf, i3.CdkDrag, i2.MatExpansionPanel, i2.MatExpansionPanelHeader, i2.MatExpansionPanelTitle, i4.PropertyViewTreeComponent], styles: ["[_nghost-%COMP%] {\n  ::ng-deep {\n    mat-expansion-panel {\n      border-radius: unset !important;\n    }\n\n    .mat-expansion-panel-body {\n      padding: 0;\n    }\n\n    .mat-expansion-panel-spacing {\n      margin: 0;\n    }\n\n    .mat-expansion-panel-header {\n      padding: 0 15px;\n    }\n\n    .mat-expansion-panel-header-title {\n      font-size: 0.8em;\n      font-family: Menlo, monospace;\n    }\n\n    .mat-expansion-indicator {\n      &::after {\n        padding: 2.5px;\n        margin-bottom: 4.5px;\n      }\n    }\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewBodyComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view-body',
                templateUrl: './property-view-body.component.html',
                styleUrls: ['./property-view-body.component.scss'],
            }]
    }], null, { controller: [{
            type: Input
        }], directiveInputControls: [{
            type: Input
        }], directiveOutputControls: [{
            type: Input
        }], directiveStateControls: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=property-view-body.component.js.map