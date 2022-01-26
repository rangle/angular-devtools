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
    } }, directives: [i1.NgIf, i2.MatFormField, i3.MatSelect, i4.MatOption, i5.MatCheckbox, i6.MatButton], pipes: [i1.DecimalPipe], styles: ["[_nghost-%COMP%]{height:60px}.controls[_ngcontent-%COMP%]{display:flex;white-space:nowrap;flex-wrap:wrap;justify-content:center;padding:5px}.controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:50px;width:75px;white-space:normal;line-height:18px}.controls[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:0 1 60px;margin-left:15px;margin-right:15px}.controls[_ngcontent-%COMP%]     .details{flex:1 1 150px;display:flex;flex-direction:column;font-weight:500;-moz-user-select:text;-webkit-user-select:text;user-select:text}.controls[_ngcontent-%COMP%]     .details, .controls[_ngcontent-%COMP%]     .details label{overflow:hidden;text-overflow:ellipsis}.controls[_ngcontent-%COMP%]     .details .value{color:#8a1882}.controls[_ngcontent-%COMP%]   .bar-details[_ngcontent-%COMP%]{min-height:60px}.controls[_ngcontent-%COMP%]   .flame-details[_ngcontent-%COMP%]{min-height:85px}.dark-theme[_nghost-%COMP%]   .details[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .details[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#5cadd3}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3JlY29yZGluZy90aW1lbGluZS90aW1lbGluZS1jb250cm9scy90aW1lbGluZS1jb250cm9scy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3RpbWVsaW5lLWNvbnRyb2xzL3RpbWVsaW5lLWNvbnRyb2xzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7SUNBeEQsc0NBQStCO0lBQzdCLHFDQUE0RztJQUFwRSwrTUFBbUIsaURBQStDLElBQUM7SUFDekcscUNBQXFDO0lBQ25DLDZCQUNGO0lBQUEsaUJBQWE7SUFDYixxQ0FBa0M7SUFDaEMsMEJBQ0Y7SUFBQSxpQkFBYTtJQUNiLHFDQUFtQztJQUNqQywyQkFDRjtJQUFBLGlCQUFhO0lBQ2YsaUJBQWE7SUFDZixpQkFBaUI7OztJQVhILGVBQTJCO0lBQTNCLGdEQUEyQjtJQUN6QixlQUF3QjtJQUF4Qiw2Q0FBd0I7SUFHeEIsZUFBcUI7SUFBckIsMENBQXFCO0lBR3JCLGVBQXNCO0lBQXRCLDJDQUFzQjs7O0lBV3BDLDZCQUFrRDtJQUNoRCw2QkFBWTtJQUFBLCtCQUFvQjtJQUFBLFlBQWtDOztJQUFBLGlCQUFPO0lBQzNFLGlCQUFROzs7SUFEMEIsZUFBa0M7SUFBbEMsNkdBQWtDOzs7SUFHcEUsNkJBQTRFO0lBQzFFLDZCQUFZO0lBQUEsK0JBQW9CO0lBQUEsWUFBa0M7O0lBQUEsaUJBQU87SUFDM0UsaUJBQVE7OztJQUZELDBDQUEwQjtJQUNDLGVBQWtDO0lBQWxDLDZHQUFrQzs7O0lBR3BFLDZCQUE0RTtJQUMxRSw2QkFBWTtJQUFBLCtCQUFvQjtJQUFBLFlBQTRCO0lBQUEsaUJBQU87SUFDckUsaUJBQVE7OztJQUZELDBDQUEwQjtJQUNDLGVBQTRCO0lBQTVCLDREQUE0Qjs7O0lBRzlELDZCQUF3QztJQUN0Qyx5QkFBUTtJQUFBLCtCQUFvQjtJQUFBLFlBQW9CO0lBQUEsaUJBQU87SUFDekQsaUJBQVE7OztJQURzQixlQUFvQjtJQUFwQix5RUFBb0I7Ozs7SUFHbEQsdUNBSUM7SUFEQyx3TEFBVSwwREFBaUQsSUFBQztJQUU1RCw0Q0FDRjtJQUFBLGlCQUFlOzs7SUFKYixnREFBMkI7Ozs7SUFPL0Isa0NBQXlFO0lBQS9CLDJLQUFTLDRCQUFvQixJQUFDO0lBQUMsNEJBQVk7SUFBQSxpQkFBUzs7QURwQ2hHLE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFZWSw0QkFBdUIsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNoRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDekMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU5RCxtQkFBYyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQUM5QyxnQkFBVyxHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUN4QyxpQkFBWSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztLQUMzQzs7a0dBZFkseUJBQXlCOzRFQUF6Qix5QkFBeUI7UUNUdEMsOEJBQXNCO1FBQ3BCLGdHQVlpQjtRQUVqQiw4QkFJQztRQUNDLDhFQUVRO1FBRVIsOEVBRVE7UUFFUiw4RUFFUTtRQUVSLDhFQUVRO1FBRVIsNEZBTWU7UUFDakIsaUJBQU07UUFFTixnRkFBOEY7UUFDaEcsaUJBQU07O1FBN0NhLGVBQVk7UUFBWixpQ0FBWTtRQWdCM0IsZUFBMkQ7UUFBM0QsNEVBQTJELDBEQUFBO1FBR25ELGVBQXdDO1FBQXhDLGlFQUF3QztRQUliLGVBQXVDO1FBQXZDLGdFQUF1QztRQUl2QyxlQUF1QztRQUF2QyxnRUFBdUM7UUFJbEUsZUFBOEI7UUFBOUIsb0ZBQThCO1FBS25DLGVBQXlDO1FBQXpDLGtFQUF5QztRQVFyQyxlQUFZO1FBQVosaUNBQVk7O3VGRHBDVix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEO2dCQUVVLE1BQU07a0JBQWQsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0ksdUJBQXVCO2tCQUFoQyxNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaXN1YWxpemF0aW9uTW9kZSB9IGZyb20gJy4uL3RpbWVsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlckZyYW1lIH0gZnJvbSAncHJvdG9jb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy10aW1lbGluZS1jb250cm9scycsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS1jb250cm9scy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWVsaW5lLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29udHJvbHNDb21wb25lbnQge1xuICBASW5wdXQoKSByZWNvcmQ6IFByb2ZpbGVyRnJhbWUgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGVzdGltYXRlZEZyYW1lUmF0ZTogbnVtYmVyO1xuICBASW5wdXQoKSBmcmFtZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpc3VhbGl6YXRpb25Nb2RlOiBWaXN1YWxpemF0aW9uTW9kZTtcbiAgQElucHV0KCkgZW1wdHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNoYW5nZURldGVjdGlvbjogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGNoYW5nZVZpc3VhbGl6YXRpb25Nb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxWaXN1YWxpemF0aW9uTW9kZT4oKTtcbiAgQE91dHB1dCgpIGV4cG9ydFByb2ZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSB0b2dnbGVDaGFuZ2VEZXRlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZmxhbWVHcmFwaE1vZGUgPSBWaXN1YWxpemF0aW9uTW9kZS5GbGFtZUdyYXBoO1xuICB0cmVlTWFwTW9kZSA9IFZpc3VhbGl6YXRpb25Nb2RlLlRyZWVNYXA7XG4gIGJhckdyYXBoTW9kZSA9IFZpc3VhbGl6YXRpb25Nb2RlLkJhckdyYXBoO1xufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cInJlY29yZFwiPlxuICAgIDxtYXQtc2VsZWN0IFt2YWx1ZV09XCJ2aXN1YWxpemF0aW9uTW9kZVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwidGhpcy5jaGFuZ2VWaXN1YWxpemF0aW9uTW9kZS5lbWl0KCRldmVudC52YWx1ZSlcIj5cbiAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJmbGFtZUdyYXBoTW9kZVwiPlxuICAgICAgICBGbGFtZSBncmFwaFxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInRyZWVNYXBNb2RlXCI+XG4gICAgICAgIFRyZWUgbWFwXG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiYmFyR3JhcGhNb2RlXCI+XG4gICAgICAgIEJhciBjaGFydFxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8ZGl2XG4gICAgY2xhc3M9XCJkZXRhaWxzXCJcbiAgICBbY2xhc3MuZmxhbWUtZGV0YWlsc109XCJ2aXN1YWxpemF0aW9uTW9kZSA9PSBmbGFtZUdyYXBoTW9kZVwiXG4gICAgW2NsYXNzLmJhci1kZXRhaWxzXT1cInZpc3VhbGl6YXRpb25Nb2RlID09IGJhckdyYXBoTW9kZVwiXG4gID5cbiAgICA8bGFiZWwgKm5nSWY9XCJlc3RpbWF0ZWRGcmFtZVJhdGUgPj0gNjAgJiYgcmVjb3JkXCI+XG4gICAgICBUaW1lIHNwZW50OiA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgcmVjb3JkPy5kdXJhdGlvbiB8IG51bWJlciB9fSBtczwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuXG4gICAgPGxhYmVsIFtzdHlsZS5jb2xvcl09XCJmcmFtZUNvbG9yXCIgKm5nSWY9XCJlc3RpbWF0ZWRGcmFtZVJhdGUgPCA2MCAmJiByZWNvcmRcIj5cbiAgICAgIFRpbWUgc3BlbnQ6IDxzcGFuIGNsYXNzPVwidmFsdWVcIj57eyByZWNvcmQ/LmR1cmF0aW9uIHwgbnVtYmVyIH19IG1zPC9zcGFuPlxuICAgIDwvbGFiZWw+XG5cbiAgICA8bGFiZWwgW3N0eWxlLmNvbG9yXT1cImZyYW1lQ29sb3JcIiAqbmdJZj1cImVzdGltYXRlZEZyYW1lUmF0ZSA8IDYwICYmIHJlY29yZFwiPlxuICAgICAgRnJhbWUgcmF0ZTogPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPnt7IGVzdGltYXRlZEZyYW1lUmF0ZSB9fSBmcHM8L3NwYW4+XG4gICAgPC9sYWJlbD5cblxuICAgIDxsYWJlbCAqbmdJZj1cInJlY29yZD8uc291cmNlICYmIHJlY29yZFwiPlxuICAgICAgU291cmNlOiA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgcmVjb3JkPy5zb3VyY2UgfX08L3NwYW4+XG4gICAgPC9sYWJlbD5cblxuICAgIDxtYXQtY2hlY2tib3hcbiAgICAgICpuZ0lmPVwidmlzdWFsaXphdGlvbk1vZGUgPT0gZmxhbWVHcmFwaE1vZGVcIlxuICAgICAgW2NoZWNrZWRdPVwiY2hhbmdlRGV0ZWN0aW9uXCJcbiAgICAgIChjaGFuZ2UpPVwidGhpcy50b2dnbGVDaGFuZ2VEZXRlY3Rpb24uZW1pdCghY2hhbmdlRGV0ZWN0aW9uKVwiXG4gICAgPlxuICAgICAgU2hvdyBvbmx5IGNoYW5nZSBkZXRlY3Rpb25cbiAgICA8L21hdC1jaGVja2JveD5cbiAgPC9kaXY+XG5cbiAgPGJ1dHRvbiAqbmdJZj1cIiFlbXB0eVwiIG1hdC1zdHJva2VkLWJ1dHRvbiAoY2xpY2spPVwiZXhwb3J0UHJvZmlsZS5lbWl0KClcIj5TYXZlIFByb2ZpbGU8L2J1dHRvbj5cbjwvZGl2PlxuIl19