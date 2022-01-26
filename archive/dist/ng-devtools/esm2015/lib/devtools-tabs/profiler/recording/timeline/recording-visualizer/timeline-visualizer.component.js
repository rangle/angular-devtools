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
    } }, styles: ["[_nghost-%COMP%]{height:calc(100% - 2 * 60px);display:block;overflow:auto}[_nghost-%COMP%]     .as-split-gutter-icon{display:none}.selected-entry[_ngcontent-%COMP%]{padding:0;height:100%}.selected-entry[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{padding-left:9px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:25px;font-size:11px;font-weight:500;display:flex;align-items:center;justify-content:space-between;height:auto}.selected-entry[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:calc(100% - 40px - 23px);width:calc(100% - 20px);overflow:auto;font-family:Roboto,Helvetica Neue,sans-serif;padding:10px}.entry-statistics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:3px}.entry-statistics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{opacity:.7}.entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8a1882}.txt-total-time[_ngcontent-%COMP%]{font-weight:700}ul[_ngcontent-%COMP%]{list-style-type:square;-webkit-margin-before:0;margin-block-start:0;-webkit-padding-start:20px;padding-inline-start:20px}.dark-theme[_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5cadd3}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtdmlzdWFsaXplci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZGluZy12aXN1YWxpemVyL3RpbWVsaW5lLXZpc3VhbGl6ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3JlY29yZGluZy90aW1lbGluZS9yZWNvcmRpbmctdmlzdWFsaXplci90aW1lbGluZS12aXN1YWxpemVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0lDRXBELDZCQUErRDtJQUM3RCxtREFJQztJQURDLHNQQUF1QztJQUN4QyxpQkFBMkI7SUFDOUIsMEJBQWU7OztJQUpYLGVBQWU7SUFBZixvQ0FBZSwyQ0FBQTs7O0lBS25CLDZCQUE0RDtJQUMxRCw0Q0FBaUU7SUFDbkUsMEJBQWU7OztJQURXLGVBQWU7SUFBZixvQ0FBZTs7OztJQUV6Qyw2QkFBNkQ7SUFDM0QsaURBQWdGO0lBQXhDLG9QQUF1QztJQUFDLGlCQUF5QjtJQUMzRywwQkFBZTs7O0lBRFcsZUFBZTtJQUFmLG9DQUFlOzs7SUFXdkMsMkJBQXFDO0lBQ25DLDJDQUEwRTtJQUM1RSxpQkFBTTs7O0lBRGtCLGVBQTJCO0lBQTNCLGdEQUEyQjs7O0lBSy9DLDBCQUEyQztJQUN6QyxZQUNGO0lBQUEsaUJBQUs7OztJQURILGVBQ0Y7SUFERSxnREFDRjs7O0lBTEosMkJBQXdDO0lBQ3RDLCtCQUE0QjtJQUFBLDZCQUFPO0lBQUEsZ0NBQWdCO0lBQUEsaUJBQVE7SUFBQSxpQkFBTTtJQUNqRSwwQkFBSTtJQUNGLGtHQUVLO0lBQ1AsaUJBQUs7SUFDUCxpQkFBTTs7O0lBSnFCLGVBQWtCO0lBQWxCLGdEQUFrQjs7O0lBYm5ELHdDQUE0RDtJQUMxRCxtQ0FBaUM7SUFDL0IsbUNBQWE7SUFBQSxZQUFpQztJQUFBLGlCQUFjO0lBQzVELG1DQUFrQztJQUNoQywrQkFBNEI7SUFDMUIsNkJBQU87SUFBQSxpQ0FBaUI7SUFBQSxpQkFBUTtJQUFBLDRCQUFNO0lBQUMsWUFBcUM7O0lBQUEsaUJBQU87SUFDckYsaUJBQU07SUFDTiwrRkFFTTtJQUNOLCtGQU9NO0lBQ1IsaUJBQVU7SUFDWixpQkFBVztJQUNiLGlCQUFnQjs7O0lBbEJDLGVBQWlDO0lBQWpDLGlFQUFpQztJQUdILGVBQXFDO0lBQXJDLG9GQUFxQztJQUV4RSxlQUE2QjtJQUE3QixxREFBNkI7SUFHN0IsZUFBZ0M7SUFBaEMsd0RBQWdDOztBREw5QyxNQUFNLE9BQU8sMkJBQTJCO0lBTHhDO1FBZUUsMEJBQXFCLEdBQUcsaUJBQWlCLENBQUM7UUFFMUMsa0JBQWEsR0FBeUMsSUFBSSxDQUFDO1FBQzNELHVCQUFrQixHQUF3QixFQUFFLENBQUM7UUFDN0Msb0JBQWUsR0FBdUIsRUFBRSxDQUFDO0tBUTFDO0lBckJDLElBQWEsaUJBQWlCLENBQUMsSUFBdUI7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFXRCxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQWlCO1FBQzVFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsYUFBZixlQUFlLGNBQWYsZUFBZSxHQUFJLEVBQUUsQ0FBQztJQUMvQyxDQUFDOztzR0FyQlUsMkJBQTJCOzhFQUEzQiwyQkFBMkI7UUN2QnhDLG1DQUEwQztRQUN4Qyx3Q0FBeUI7UUFDdkIsZ0NBQThDO1FBQzVDLDhGQU1lO1FBQ2YsOEZBRWU7UUFDZiw4RkFFZTtRQUNqQiwwQkFBZTtRQUNqQixpQkFBZ0I7UUFDaEIsaUdBb0JnQjtRQUNsQixpQkFBVzs7UUF2Q2MsOEJBQWdCO1FBRXZCLGVBQStCO1FBQS9CLGlEQUErQjtRQUM1QixlQUE4QztRQUE5QyxtRUFBOEM7UUFPOUMsZUFBMkM7UUFBM0MsZ0VBQTJDO1FBRzNDLGVBQTRDO1FBQTVDLGlFQUE0QztRQUt4QixlQUFtQjtRQUFuQix3Q0FBbUI7O3VGREsvQywyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEO2dCQUVjLGlCQUFpQjtrQkFBN0IsS0FBSztZQU1HLEtBQUs7a0JBQWIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTW9kZSB9IGZyb20gJy4uL3RpbWVsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlckZyYW1lIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgQmFyZ3JhcGhOb2RlIH0gZnJvbSAnLi4vcmVjb3JkLWZvcm1hdHRlci9iYXJncmFwaC1mb3JtYXR0ZXInO1xuaW1wb3J0IHsgRmxhbWVncmFwaE5vZGUgfSBmcm9tICcuLi9yZWNvcmQtZm9ybWF0dGVyL2ZsYW1lZ3JhcGgtZm9ybWF0dGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RlZEVudHJ5IHtcbiAgZW50cnk6IEJhcmdyYXBoTm9kZSB8IEZsYW1lZ3JhcGhOb2RlO1xuICBzZWxlY3RlZERpcmVjdGl2ZXM6IFNlbGVjdGVkRGlyZWN0aXZlW107XG4gIHBhcmVudEhpZXJhcmNoeT86IHsgbmFtZTogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RlZERpcmVjdGl2ZSB7XG4gIGRpcmVjdGl2ZTogc3RyaW5nO1xuICBtZXRob2Q6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctdGltZWxpbmUtdmlzdWFsaXplcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS12aXN1YWxpemVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZWxpbmUtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lbGluZVZpc3VhbGl6ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBzZXQgdmlzdWFsaXphdGlvbk1vZGUobW9kZTogVmlzdWFsaXphdGlvbk1vZGUpIHtcbiAgICB0aGlzLl92aXN1YWxpemF0aW9uTW9kZSA9IG1vZGU7XG4gICAgdGhpcy5zZWxlY3RlZEVudHJ5ID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aXZlcyA9IFtdO1xuICAgIHRoaXMucGFyZW50SGllcmFyY2h5ID0gW107XG4gIH1cbiAgQElucHV0KCkgZnJhbWU6IFByb2ZpbGVyRnJhbWU7XG4gIEBJbnB1dCgpIGNoYW5nZURldGVjdGlvbjogYm9vbGVhbjtcblxuICBjbXBWaXN1YWxpemF0aW9uTW9kZXMgPSBWaXN1YWxpemF0aW9uTW9kZTtcblxuICBzZWxlY3RlZEVudHJ5OiBCYXJncmFwaE5vZGUgfCBGbGFtZWdyYXBoTm9kZSB8IG51bGwgPSBudWxsO1xuICBzZWxlY3RlZERpcmVjdGl2ZXM6IFNlbGVjdGVkRGlyZWN0aXZlW10gPSBbXTtcbiAgcGFyZW50SGllcmFyY2h5OiB7IG5hbWU6IHN0cmluZyB9W10gPSBbXTtcbiAgX3Zpc3VhbGl6YXRpb25Nb2RlOiBWaXN1YWxpemF0aW9uTW9kZTtcblxuICBoYW5kbGVOb2RlU2VsZWN0KHsgZW50cnksIHBhcmVudEhpZXJhcmNoeSwgc2VsZWN0ZWREaXJlY3RpdmVzIH06IFNlbGVjdGVkRW50cnkpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkRW50cnkgPSBlbnRyeTtcbiAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aXZlcyA9IHNlbGVjdGVkRGlyZWN0aXZlcztcbiAgICB0aGlzLnBhcmVudEhpZXJhcmNoeSA9IHBhcmVudEhpZXJhcmNoeSA/PyBbXTtcbiAgfVxufVxuIiwiPGFzLXNwbGl0IHVuaXQ9XCJwZXJjZW50XCIgW2d1dHRlclNpemVdPVwiOVwiPlxuICA8YXMtc3BsaXQtYXJlYSBzaXplPVwiNzVcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJfdmlzdWFsaXphdGlvbk1vZGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImNtcFZpc3VhbGl6YXRpb25Nb2Rlcy5GbGFtZUdyYXBoXCI+XG4gICAgICAgIDxuZy1mbGFtZWdyYXBoLXZpc3VhbGl6ZXJcbiAgICAgICAgICBbZnJhbWVdPVwiZnJhbWVcIlxuICAgICAgICAgIFtjaGFuZ2VEZXRlY3Rpb25dPVwiY2hhbmdlRGV0ZWN0aW9uXCJcbiAgICAgICAgICAobm9kZVNlbGVjdCk9XCJoYW5kbGVOb2RlU2VsZWN0KCRldmVudClcIlxuICAgICAgICA+PC9uZy1mbGFtZWdyYXBoLXZpc3VhbGl6ZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImNtcFZpc3VhbGl6YXRpb25Nb2Rlcy5UcmVlTWFwXCI+XG4gICAgICAgIDxuZy10cmVlLW1hcC12aXN1YWxpemVyIFtmcmFtZV09XCJmcmFtZVwiPjwvbmctdHJlZS1tYXAtdmlzdWFsaXplcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiY21wVmlzdWFsaXphdGlvbk1vZGVzLkJhckdyYXBoXCI+XG4gICAgICAgIDxuZy1iYXJncmFwaC12aXN1YWxpemVyIFtmcmFtZV09XCJmcmFtZVwiIChub2RlU2VsZWN0KT1cImhhbmRsZU5vZGVTZWxlY3QoJGV2ZW50KVwiPjwvbmctYmFyZ3JhcGgtdmlzdWFsaXplcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2FzLXNwbGl0LWFyZWE+XG4gIDxhcy1zcGxpdC1hcmVhIHNpemU9XCIyNVwiIG1pblNpemU9XCIxNVwiICpuZ0lmPVwic2VsZWN0ZWRFbnRyeVwiPlxuICAgIDxtYXQtY2FyZCBjbGFzcz1cInNlbGVjdGVkLWVudHJ5XCI+XG4gICAgICA8bWF0LXRvb2xiYXI+e3sgc2VsZWN0ZWRFbnRyeS5sYWJlbCB9fSBkZXRhaWxzPC9tYXQtdG9vbGJhcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZW50cnktc3RhdGlzdGljc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidHh0LXRvdGFsLXRpbWVcIj5cbiAgICAgICAgICA8bGFiZWw+VG90YWwgdGltZSBzcGVudDo8L2xhYmVsPjxzcGFuPiB7eyBzZWxlY3RlZEVudHJ5LnZhbHVlIHwgbnVtYmVyIH19IG1zPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkRW50cnkudmFsdWUgPiAwXCI+XG4gICAgICAgICAgPG5nLWV4ZWN1dGlvbi1kZXRhaWxzIFtkYXRhXT1cInNlbGVjdGVkRGlyZWN0aXZlc1wiPiA8L25nLWV4ZWN1dGlvbi1kZXRhaWxzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInBhcmVudEhpZXJhcmNoeS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInR4dC10b3RhbC10aW1lXCI+PGxhYmVsPlBhcmVudCBIaWVyYXJjaHk8L2xhYmVsPjwvZGl2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcGFyZW50IG9mIHBhcmVudEhpZXJhcmNoeVwiPlxuICAgICAgICAgICAgICB7eyBwYXJlbnQubmFtZSB9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21hdC1jYXJkPlxuICA8L2FzLXNwbGl0LWFyZWE+XG48L2FzLXNwbGl0PlxuIl19