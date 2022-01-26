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
                title: 'Properties',
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
    } }, directives: [i1.NgIf, i2.MatAccordion, i3.CdkDropList, i1.NgForOf, i3.CdkDrag, i2.MatExpansionPanel, i2.MatExpansionPanelHeader, i2.MatExpansionPanelTitle, i4.PropertyViewTreeComponent], styles: ["[_nghost-%COMP%]     mat-expansion-panel{border-radius:unset!important}[_nghost-%COMP%]     .mat-expansion-panel-body{padding:0}[_nghost-%COMP%]     .mat-expansion-panel-spacing{margin:0}[_nghost-%COMP%]     .mat-expansion-panel-header{padding:0 15px}[_nghost-%COMP%]     .mat-expansion-panel-header-title{font-size:.8em;font-family:Menlo,monospace}[_nghost-%COMP%]     .mat-expansion-indicator:after{padding:2.5px;margin-bottom:4.5px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdmlldy1ib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi1ib2R5L3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy1ib2R5L3Byb3BlcnR5LXZpZXctYm9keS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXRhYi9wcm9wZXJ0eS10YWItYm9keS9wcm9wZXJ0eS12aWV3L3Byb3BlcnR5LXZpZXctYm9keS9wcm9wZXJ0eS12aWV3LWJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU12RSxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0lDSmxFLDhDQUFxRTtJQUNuRSxxREFBeUU7SUFDdkUsdUNBQWlCO0lBQ2YsWUFDRjtJQUFBLGlCQUFrQjtJQUNwQixpQkFBNkI7SUFDN0IsZ0RBS0M7SUFGQyw0UUFBbUMseVBBQUE7SUFFcEMsaUJBQXdCO0lBQzNCLGlCQUFzQjs7OztJQVo2QiwrQkFBaUI7SUFHOUQsZUFDRjtJQURFLDhEQUNGO0lBR0EsZUFBZ0Q7SUFBaEQsd0VBQWdELDZEQUFBOzs7SUFSdEQsOEJBQStFO0lBQzdFLGdJQVlzQjtJQUN4QixpQkFBTTs7OztJQWJrQixlQUEyQjtJQUEzQixzREFBMkI7Ozs7SUFGckQsd0NBQXFHO0lBQTFFLDhPQUFtQztJQUM1RCwwRkFjTTtJQUNSLGlCQUFnQjs7O0lBaEJzRSw0QkFBYztJQUM3QyxlQUFnQjtJQUFoQiw4Q0FBZ0I7O0FEYXZFLE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFXWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQTRELENBQUM7UUFFakcsa0JBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0F3QzNCO0lBdENDLElBQUksTUFBTTtRQUNSLE9BQU87WUFDTDtnQkFDRSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNoRSxRQUFRLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjthQUN0QztZQUNEO2dCQUNFLEtBQUssRUFBRSxVQUFVO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ2pFLFFBQVEsRUFBRSxJQUFJLENBQUMsdUJBQXVCO2FBQ3ZDO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDaEUsUUFBUSxFQUFFLElBQUksQ0FBQyxzQkFBc0I7YUFDdEM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQzFHLENBQUM7SUFFRCxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFxQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQUksQ0FBQyxLQUE0QjtRQUMvQixlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSTtZQUNKLGlCQUFpQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCO1NBQ3JELENBQUMsQ0FBQztJQUNMLENBQUM7O2tHQS9DVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ2R0Qyw4RkFnQmdCOztRQWhCZ0QseUNBQW9COzt1RkRjdkUseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDtnQkFFVSxVQUFVO2tCQUFsQixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0csdUJBQXVCO2tCQUEvQixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBRUksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEaXJlY3RpdmVQcm9wZXJ0eVJlc29sdmVyLFxuICBEaXJlY3RpdmVUcmVlRGF0YSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvcGVydHktcmVzb2x2ZXIvZGlyZWN0aXZlLXByb3BlcnR5LXJlc29sdmVyJztcbmltcG9ydCB7IEZsYXROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvcGVydHktcmVzb2x2ZXIvZWxlbWVudC1wcm9wZXJ0eS1yZXNvbHZlcic7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVQb3NpdGlvbiB9IGZyb20gJ3Byb3RvY29sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcHJvcGVydHktdmlldy1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb3BlcnR5LXZpZXctYm9keS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb3BlcnR5LXZpZXctYm9keS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVZpZXdCb2R5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udHJvbGxlcjogRGlyZWN0aXZlUHJvcGVydHlSZXNvbHZlcjtcbiAgQElucHV0KCkgZGlyZWN0aXZlSW5wdXRDb250cm9sczogRGlyZWN0aXZlVHJlZURhdGE7XG4gIEBJbnB1dCgpIGRpcmVjdGl2ZU91dHB1dENvbnRyb2xzOiBEaXJlY3RpdmVUcmVlRGF0YTtcbiAgQElucHV0KCkgZGlyZWN0aXZlU3RhdGVDb250cm9sczogRGlyZWN0aXZlVHJlZURhdGE7XG5cbiAgQE91dHB1dCgpIGluc3BlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHsgbm9kZTogRmxhdE5vZGU7IGRpcmVjdGl2ZVBvc2l0aW9uOiBEaXJlY3RpdmVQb3NpdGlvbiB9PigpO1xuXG4gIGNhdGVnb3J5T3JkZXIgPSBbMCwgMSwgMl07XG5cbiAgZ2V0IHBhbmVscygpOiB7IHRpdGxlOiBzdHJpbmc7IGhpZGRlbjogYm9vbGVhbjsgY29udHJvbHM6IERpcmVjdGl2ZVRyZWVEYXRhIH1bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdASW5wdXRzJyxcbiAgICAgICAgaGlkZGVuOiB0aGlzLmRpcmVjdGl2ZUlucHV0Q29udHJvbHMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aCA9PT0gMCxcbiAgICAgICAgY29udHJvbHM6IHRoaXMuZGlyZWN0aXZlSW5wdXRDb250cm9scyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQE91dHB1dHMnLFxuICAgICAgICBoaWRkZW46IHRoaXMuZGlyZWN0aXZlT3V0cHV0Q29udHJvbHMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aCA9PT0gMCxcbiAgICAgICAgY29udHJvbHM6IHRoaXMuZGlyZWN0aXZlT3V0cHV0Q29udHJvbHMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1Byb3BlcnRpZXMnLFxuICAgICAgICBoaWRkZW46IHRoaXMuZGlyZWN0aXZlU3RhdGVDb250cm9scy5kYXRhU291cmNlLmRhdGEubGVuZ3RoID09PSAwLFxuICAgICAgICBjb250cm9sczogdGhpcy5kaXJlY3RpdmVTdGF0ZUNvbnRyb2xzLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgZ2V0IGNvbnRyb2xzTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZGlyZWN0aXZlU3RhdGVDb250cm9scyAmJiAhIXRoaXMuZGlyZWN0aXZlT3V0cHV0Q29udHJvbHMgJiYgISF0aGlzLmRpcmVjdGl2ZUlucHV0Q29udHJvbHM7XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh7IG5vZGUsIG5ld1ZhbHVlIH06IHsgbm9kZTogRmxhdE5vZGU7IG5ld1ZhbHVlOiBhbnkgfSk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbGxlci51cGRhdGVWYWx1ZShub2RlLCBuZXdWYWx1ZSk7XG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxhbnksIGFueT4pOiB2b2lkIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5jYXRlZ29yeU9yZGVyLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG5cbiAgaGFuZGxlSW5zcGVjdChub2RlOiBGbGF0Tm9kZSk6IHZvaWQge1xuICAgIHRoaXMuaW5zcGVjdC5lbWl0KHtcbiAgICAgIG5vZGUsXG4gICAgICBkaXJlY3RpdmVQb3NpdGlvbjogdGhpcy5jb250cm9sbGVyLmRpcmVjdGl2ZVBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bWF0LWFjY29yZGlvbiBjZGtEcm9wTGlzdCAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiICpuZ0lmPVwiY29udHJvbHNMb2FkZWRcIiBbbXVsdGldPVwidHJ1ZVwiPlxuICA8ZGl2IGNsYXNzPVwibWF0LWFjY29yZGlvbi1jb250ZW50XCIgKm5nRm9yPVwibGV0IGluZGV4IG9mIGNhdGVnb3J5T3JkZXJcIiBjZGtEcmFnPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsICpuZ0lmPVwiIXBhbmVsc1tpbmRleF0uaGlkZGVuXCIgW2V4cGFuZGVkXT1cInRydWVcIj5cbiAgICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciBjb2xsYXBzZWRIZWlnaHQ9XCIyNXB4XCIgZXhwYW5kZWRIZWlnaHQ9XCIyNXB4XCI+XG4gICAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgICAge3sgcGFuZWxzW2luZGV4XS50aXRsZSB9fVxuICAgICAgICA8L21hdC1wYW5lbC10aXRsZT5cbiAgICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgICA8bmctcHJvcGVydHktdmlldy10cmVlXG4gICAgICAgIFtkYXRhU291cmNlXT1cInBhbmVsc1tpbmRleF0uY29udHJvbHMuZGF0YVNvdXJjZVwiXG4gICAgICAgIFt0cmVlQ29udHJvbF09XCJwYW5lbHNbaW5kZXhdLmNvbnRyb2xzLnRyZWVDb250cm9sXCJcbiAgICAgICAgKHVwZGF0ZVZhbHVlKT1cInVwZGF0ZVZhbHVlKCRldmVudClcIlxuICAgICAgICAoaW5zcGVjdCk9XCJoYW5kbGVJbnNwZWN0KCRldmVudClcIlxuICAgICAgPjwvbmctcHJvcGVydHktdmlldy10cmVlPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbiAgPC9kaXY+XG48L21hdC1hY2NvcmRpb24+XG4iXX0=