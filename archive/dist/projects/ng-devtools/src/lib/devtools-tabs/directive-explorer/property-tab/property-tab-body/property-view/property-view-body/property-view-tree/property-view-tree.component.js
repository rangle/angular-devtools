import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tree";
import * as i3 from "./property-preview/property-preview.component";
import * as i4 from "./property-editor/property-editor.component";
import * as i5 from "@angular/material/icon";
function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng-property-preview", 8);
    i0.ɵɵlistener("inspect", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template_ng_property_preview_inspect_1_listener() { i0.ɵɵrestoreView(_r9); const node_r3 = i0.ɵɵnextContext().$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.inspect.emit(node_r3); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("node", node_r3);
} }
function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng-property-editor", 9);
    i0.ɵɵlistener("updateValue", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template_ng_property_editor_updateValue_0_listener($event) { i0.ɵɵrestoreView(_r13); const node_r3 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.handleUpdate(node_r3, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("key", node_r3.prop.name)("initialValue", node_r3.prop.descriptor.value || node_r3.prop.descriptor.preview);
} }
function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, ":\u00A0 ");
    i0.ɵɵtemplate(4, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(5, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template, 1, 2, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r3.prop.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !node_r3.prop.descriptor.editable)("ngIfElse", _r5);
} }
function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵlistener("click", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const node_r15 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.toggle(node_r15); });
    i0.ɵɵelementStart(2, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " \u00A0 ");
    i0.ɵɵelementStart(5, "span", 12);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, ":\u00A0 ");
    i0.ɵɵelementStart(8, "span", 13);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r15 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r15) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", node_r15.prop.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r15) ? "" : node_r15.prop.descriptor.preview, " ");
} }
function PropertyViewTreeComponent_mat_tree_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree", 1);
    i0.ɵɵtemplate(1, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_Template, 7, 3, "mat-tree-node", 2);
    i0.ɵɵtemplate(2, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template, 10, 3, "mat-tree-node", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dataSource", ctx_r0.dataSource)("treeControl", ctx_r0.treeControl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r0.hasChild);
} }
export class PropertyViewTreeComponent {
    constructor() {
        this.updateValue = new EventEmitter();
        this.inspect = new EventEmitter();
        this.hasChild = (_, node) => node.expandable;
    }
    toggle(node) {
        if (this.treeControl.isExpanded(node)) {
            this.treeControl.collapse(node);
            return;
        }
        this.expand(node);
    }
    expand(node) {
        const { prop } = node;
        if (!prop.descriptor.expandable) {
            return;
        }
        this.treeControl.expand(node);
    }
    handleUpdate(node, newValue) {
        this.updateValue.emit({
            node,
            newValue,
        });
    }
}
PropertyViewTreeComponent.ɵfac = function PropertyViewTreeComponent_Factory(t) { return new (t || PropertyViewTreeComponent)(); };
PropertyViewTreeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewTreeComponent, selectors: [["ng-property-view-tree"]], inputs: { dataSource: "dataSource", treeControl: "treeControl" }, outputs: { updateValue: "updateValue", inspect: "inspect" }, decls: 1, vars: 1, consts: [["class", "property-list", 3, "dataSource", "treeControl", 4, "ngIf"], [1, "property-list", 3, "dataSource", "treeControl"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", ""], [1, "name", "non-expandable"], [4, "ngIf", "ngIfElse"], ["editable", ""], [3, "node", "inspect"], [3, "key", "initialValue", "updateValue"], [3, "click"], [1, "mat-icon-rtl-mirror"], [1, "name"], [1, "value"]], template: function PropertyViewTreeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyViewTreeComponent_mat_tree_0_Template, 3, 3, "mat-tree", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.treeControl);
    } }, directives: [i1.NgIf, i2.MatTree, i2.MatTreeNodeDef, i2.MatTreeNode, i2.MatTreeNodePadding, i3.PropertyPreviewComponent, i4.PropertyEditorComponent, i5.MatIcon], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: block;\n  overflow: auto;\n  height: calc(100% - 24px);\n\n  mat-tree {\n    display: table;\n  }\n\n  ::ng-deep {\n    .mat-tree-node {\n      min-height: 20px !important;\n      cursor: default;\n      font-family: Menlo, monospace;\n\n      .mat-icon {\n        font-size: 11px;\n        width: 8px;\n        height: 16px;\n      }\n    }\n  }\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-left: -9px;\n}\n\n.non-expandable[_ngcontent-%COMP%] {\n  margin-left: 18px;\n}\n\n.property-list[_ngcontent-%COMP%] {\n  margin: 5px 5px 5px 15px;\n  mat-tree-node {\n    .name {\n      color: #ce271e;\n      font-weight: 500;\n    }\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .property-list {\n    .name {\n      color: #54c9bd !important;\n    }\n  }\n}\n\n.property-list[_ngcontent-%COMP%]   mat-tree-node.disabled[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .disabled[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.5em;\n  color: #6e6e6e;\n}\n\n[_nghost-%COMP%]     .mat-tree-node, .mat-nested-tree-node[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewTreeComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view-tree',
                templateUrl: './property-view-tree.component.html',
                styleUrls: ['./property-view-tree.component.scss'],
            }]
    }], null, { dataSource: [{
            type: Input
        }], treeControl: [{
            type: Input
        }], updateValue: [{
            type: Output
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=property-view-tree.component.js.map