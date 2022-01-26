import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/expansion";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "./component-metadata/component-metadata.component";
function PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-accordion", 3);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "mat-expansion-panel", 4);
    i0.ɵɵelementStart(4, "mat-expansion-panel-header", 5);
    i0.ɵɵelementStart(5, "mat-panel-title");
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 8);
    i0.ɵɵlistener("click", function PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.handleViewSource($event); });
    i0.ɵɵelementStart(10, "mat-icon");
    i0.ɵɵtext(11, " code ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "ng-component-metadata", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hideToggle", true);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.currentSelectedElement.component.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("currentSelectedComponent", ctx_r3.currentSelectedElement.component);
} }
function PropertyTabHeaderComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.currentSelectedElement.element);
} }
function PropertyTabHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template, 13, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, PropertyTabHeaderComponent_ng_container_0_ng_template_2_Template, 3, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.currentSelectedElement.component)("ngIfElse", _r4);
} }
function PropertyTabHeaderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtext(2, "No selected Element");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class PropertyTabHeaderComponent {
    constructor() {
        this.viewSource = new EventEmitter();
    }
    handleViewSource(event) {
        event.stopPropagation();
        this.viewSource.emit();
    }
}
PropertyTabHeaderComponent.ɵfac = function PropertyTabHeaderComponent_Factory(t) { return new (t || PropertyTabHeaderComponent)(); };
PropertyTabHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyTabHeaderComponent, selectors: [["ng-property-tab-header"]], inputs: { currentSelectedElement: "currentSelectedElement", currentDirectives: "currentDirectives" }, outputs: { viewSource: "viewSource" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["emptyState", ""], ["currentElementIsDOMElement", ""], [1, "property-tab-header"], [3, "hideToggle"], ["collapsedHeight", "32px", "expandedHeight", "32px"], [1, "element-header"], [1, "component-name"], ["mat-icon-button", "", 3, "click"], [3, "currentSelectedComponent"], [1, "element-name"]], template: function PropertyTabHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyTabHeaderComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵtemplate(1, PropertyTabHeaderComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.currentSelectedElement)("ngIfElse", _r1);
    } }, directives: [i1.NgIf, i2.MatAccordion, i2.MatExpansionPanel, i2.MatExpansionPanelHeader, i2.MatExpansionPanelTitle, i3.MatButton, i4.MatIcon, i5.ComponentMetadataComponent], styles: [".element-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  font-size: 11px;\n\n  .mat-icon-button {\n    height: 25px;\n    width: 25px;\n    line-height: 25px;\n  }\n\n  .component-name {\n    margin-left: 10px;\n    font-weight: 700;\n    line-height: 25px;\n  }\n\n  .element-name {\n    margin-left: 10px;\n    line-height: 25px;\n    font-weight: 700;\n  }\n}\n\n  {\n  .property-tab-header {\n    mat-expansion-panel {\n      border-radius: unset !important;\n    }\n\n    &.mat-accordion {\n      .mat-expansion-panel {\n        .mat-expansion-panel-header {\n          padding: 0;\n\n          .mat-expansion-panel-header-title {\n            margin-right: 0;\n          }\n        }\n\n        .mat-expansion-panel-content {\n          .mat-expansion-panel-body {\n            padding: 0;\n          }\n        }\n      }\n    }\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .mat-icon-button {\n    fill: #fff;\n  }\n}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabHeaderComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-tab-header.component.html',
                selector: 'ng-property-tab-header',
                styleUrls: ['./property-tab-header.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { currentSelectedElement: [{
            type: Input
        }], currentDirectives: [{
            type: Input
        }], viewSource: [{
            type: Output
        }] }); })();
//# sourceMappingURL=property-tab-header.component.js.map