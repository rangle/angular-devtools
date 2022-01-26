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
    } }, directives: [i1.NgIf, i2.MatTree, i2.MatTreeNodeDef, i2.MatTreeNode, i2.MatTreeNodePadding, i3.PropertyPreviewComponent, i4.PropertyEditorComponent, i5.MatIcon], styles: ["[_nghost-%COMP%]{width:100%;display:block;overflow:auto;height:calc(100% - 24px)}[_nghost-%COMP%]   mat-tree[_ngcontent-%COMP%]{display:table}[_nghost-%COMP%]     .mat-tree-node{min-height:20px!important;cursor:default;font-family:Menlo,monospace}[_nghost-%COMP%]     .mat-tree-node .mat-icon{font-size:11px;width:8px;height:16px}.name[_ngcontent-%COMP%]{margin-left:-9px}.non-expandable[_ngcontent-%COMP%]{margin-left:18px}.property-list[_ngcontent-%COMP%]{margin:5px 5px 5px 15px}.property-list[_ngcontent-%COMP%]   mat-tree-node[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#ce271e;font-weight:500}.dark-theme[_nghost-%COMP%]   .property-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .property-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#54c9bd!important}.disabled[_ngcontent-%COMP%], .property-list[_ngcontent-%COMP%]   mat-tree-node.disabled[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#333}.arrow[_ngcontent-%COMP%]{font-family:monospace;font-size:.5em;color:#6e6e6e}.mat-nested-tree-node[_ngcontent-%COMP%], [_nghost-%COMP%]     .mat-tree-node{font-size:.8em}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdmlldy10cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi1ib2R5L3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy1ib2R5L3Byb3BlcnR5LXZpZXctdHJlZS9wcm9wZXJ0eS12aWV3LXRyZWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9wcm9wZXJ0eS10YWIvcHJvcGVydHktdGFiLWJvZHkvcHJvcGVydHktdmlldy9wcm9wZXJ0eS12aWV3LWJvZHkvcHJvcGVydHktdmlldy10cmVlL3Byb3BlcnR5LXZpZXctdHJlZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNHbkUsNkJBQW9FO0lBQ2xFLDhDQUFrRTtJQUE3QywwUUFBVyw0QkFBa0IsSUFBQztJQUFlLGlCQUFzQjtJQUMxRiwwQkFBZTs7O0lBRHVDLGVBQWE7SUFBYiw4QkFBYTs7OztJQUdqRSw2Q0FJQztJQURDLGlVQUEwQztJQUU1QyxpQkFBcUI7OztJQUpuQix1Q0FBc0Isa0ZBQUE7OztJQVA1Qix3Q0FBMkY7SUFDekYsK0JBQWtDO0lBQUMsWUFBcUI7SUFBQSxpQkFBTztJQUFBLHdCQUMvRDtJQUFBLHVIQUVlO0lBQ2Ysc0pBT2M7SUFDaEIsaUJBQWdCOzs7O0lBWnFCLGVBQXFCO0lBQXJCLGtEQUFxQjtJQUN6QyxlQUFzQztJQUF0Qyx3REFBc0MsaUJBQUE7Ozs7SUFhdkQsd0NBQTJHO0lBQ3pHLCtCQUE0QjtJQUF2QixtUkFBc0I7SUFDekIsb0NBQXNDO0lBQ3BDLFlBQ0Y7SUFBQSxpQkFBVztJQUNYLHdCQUNBO0lBQUEsZ0NBQW1CO0lBQUMsWUFBcUI7SUFBQSxpQkFBTztJQUFBLHdCQUNoRDtJQUFBLGdDQUFvQjtJQUNsQixZQUNGO0lBQUEsaUJBQU87SUFDVCxpQkFBTTtJQUNSLGlCQUFnQjs7OztJQVJWLGVBQ0Y7SUFERSwwR0FDRjtJQUVvQixlQUFxQjtJQUFyQixtREFBcUI7SUFFdkMsZUFDRjtJQURFLGdIQUNGOzs7SUF6Qk4sbUNBQTBHO0lBQ3hHLHlHQWFnQjtJQUVoQiwwR0FXZ0I7SUFDbEIsaUJBQVc7OztJQTVCeUMsOENBQXlCLG1DQUFBO0lBZ0JILGVBQWM7SUFBZCxvREFBYzs7QUROeEYsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQVFZLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsSUFBYyxFQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBd0JwRTtJQXRCQyxNQUFNLENBQUMsSUFBYztRQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFjO1FBQ25CLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQy9CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBYyxFQUFFLFFBQWE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSTtZQUNKLFFBQVE7U0FDVCxDQUFDLENBQUM7SUFDTCxDQUFDOztrR0E3QlUseUJBQXlCOzRFQUF6Qix5QkFBeUI7UUNWdEMsb0ZBNEJXOztRQTVCQSxzQ0FBaUI7O3VGRFVmLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQ7Z0JBRVUsVUFBVTtrQkFBbEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9wZXJ0eURhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9wcm9wZXJ0eS1yZXNvbHZlci9wcm9wZXJ0eS1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBGbGF0Tm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3Byb3BlcnR5LXJlc29sdmVyL2VsZW1lbnQtcHJvcGVydHktcmVzb2x2ZXInO1xuaW1wb3J0IHsgRmxhdFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1wcm9wZXJ0eS12aWV3LXRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvcGVydHktdmlldy10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvcGVydHktdmlldy10cmVlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Vmlld1RyZWVDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhU291cmNlOiBQcm9wZXJ0eURhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIHRyZWVDb250cm9sOiBGbGF0VHJlZUNvbnRyb2w8RmxhdE5vZGU+O1xuICBAT3V0cHV0KCkgdXBkYXRlVmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGluc3BlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEZsYXROb2RlKTogYm9vbGVhbiA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgdG9nZ2xlKG5vZGU6IEZsYXROb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSkge1xuICAgICAgdGhpcy50cmVlQ29udHJvbC5jb2xsYXBzZShub2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leHBhbmQobm9kZSk7XG4gIH1cblxuICBleHBhbmQobm9kZTogRmxhdE5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCB7IHByb3AgfSA9IG5vZGU7XG4gICAgaWYgKCFwcm9wLmRlc2NyaXB0b3IuZXhwYW5kYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChub2RlKTtcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZShub2RlOiBGbGF0Tm9kZSwgbmV3VmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUuZW1pdCh7XG4gICAgICBub2RlLFxuICAgICAgbmV3VmFsdWUsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtdHJlZSAqbmdJZj1cInRyZWVDb250cm9sXCIgY2xhc3M9XCJwcm9wZXJ0eS1saXN0XCIgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFt0cmVlQ29udHJvbF09XCJ0cmVlQ29udHJvbFwiPlxuICA8bWF0LXRyZWUtbm9kZSBtYXRUcmVlTm9kZVBhZGRpbmdJbmRlbnQ9XCIxNFwiICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxzcGFuIGNsYXNzPVwibmFtZSBub24tZXhwYW5kYWJsZVwiPiB7eyBub2RlLnByb3AubmFtZSB9fSA8L3NwYW4+OiZuYnNwO1xuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbm9kZS5wcm9wLmRlc2NyaXB0b3IuZWRpdGFibGU7IGVsc2UgZWRpdGFibGVcIj5cbiAgICAgIDxuZy1wcm9wZXJ0eS1wcmV2aWV3IChpbnNwZWN0KT1cImluc3BlY3QuZW1pdChub2RlKVwiIFtub2RlXT1cIm5vZGVcIj48L25nLXByb3BlcnR5LXByZXZpZXc+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNlZGl0YWJsZT5cbiAgICAgIDxuZy1wcm9wZXJ0eS1lZGl0b3JcbiAgICAgICAgW2tleV09XCJub2RlLnByb3AubmFtZVwiXG4gICAgICAgIFtpbml0aWFsVmFsdWVdPVwibm9kZS5wcm9wLmRlc2NyaXB0b3IudmFsdWUgfHwgbm9kZS5wcm9wLmRlc2NyaXB0b3IucHJldmlld1wiXG4gICAgICAgICh1cGRhdGVWYWx1ZSk9XCJoYW5kbGVVcGRhdGUobm9kZSwgJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L25nLXByb3BlcnR5LWVkaXRvcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC10cmVlLW5vZGU+XG5cbiAgPG1hdC10cmVlLW5vZGUgbWF0VHJlZU5vZGVQYWRkaW5nSW5kZW50PVwiMTRcIiAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlKG5vZGUpXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7IHRyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnIH19XG4gICAgICA8L21hdC1pY29uPlxuICAgICAgJm5ic3A7XG4gICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ge3sgbm9kZS5wcm9wLm5hbWUgfX0gPC9zcGFuPjombmJzcDtcbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgdHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICcnIDogbm9kZS5wcm9wLmRlc2NyaXB0b3IucHJldmlldyB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19