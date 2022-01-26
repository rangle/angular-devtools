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
    } }, directives: [i1.NgIf, i2.MatAccordion, i2.MatExpansionPanel, i2.MatExpansionPanelHeader, i2.MatExpansionPanelTitle, i3.MatButton, i4.MatIcon, i5.ComponentMetadataComponent], styles: [".element-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;align-items:center;font-size:11px}.element-header[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:25px;width:25px;line-height:25px}.element-header[_ngcontent-%COMP%]   .component-name[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%]   .element-name[_ngcontent-%COMP%]{margin-left:10px;font-weight:700;line-height:25px}  .property-tab-header mat-expansion-panel{border-radius:unset!important}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-header{padding:0}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-header .mat-expansion-panel-header-title{margin-right:0}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-content .mat-expansion-panel-body{padding:0}.dark-theme[_nghost-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{fill:#fff}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdGFiLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXRhYi9wcm9wZXJ0eS10YWItaGVhZGVyL3Byb3BlcnR5LXRhYi1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9wcm9wZXJ0eS10YWIvcHJvcGVydHktdGFiLWhlYWRlci9wcm9wZXJ0eS10YWItaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0M5Riw2QkFBd0Y7SUFDdEYsd0NBQTJDO0lBQ3pDLDJCQUFLO0lBQ0gsOENBQXlDO0lBQ3ZDLHFEQUF5RTtJQUN2RSx1Q0FBaUI7SUFDZiw4QkFBNEI7SUFDMUIsOEJBQTRCO0lBQUEsWUFBMkM7SUFBQSxpQkFBTTtJQUM3RSxpQ0FBMkQ7SUFBbkMseU9BQWtDO0lBQ3hELGlDQUFVO0lBQ1IsdUJBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFTO0lBQ1gsaUJBQU07SUFDUixpQkFBa0I7SUFDcEIsaUJBQTZCO0lBQzdCLDRDQUE2RztJQUMvRyxpQkFBc0I7SUFDeEIsaUJBQU07SUFDUixpQkFBZ0I7SUFDbEIsMEJBQWU7OztJQWpCWSxlQUFtQjtJQUFuQixpQ0FBbUI7SUFJSixlQUEyQztJQUEzQyxrRUFBMkM7SUFTdEQsZUFBNkQ7SUFBN0Qsa0ZBQTZEOzs7SUFNMUYsOEJBQTRCO0lBQzFCLCtCQUEwQjtJQUFBLFlBQW9DO0lBQUEsaUJBQU07SUFDdEUsaUJBQU07OztJQURzQixlQUFvQztJQUFwQywyREFBb0M7OztJQXhCcEUsNkJBQThEO0lBQzVELDZHQW9CZTtJQUNmLDJJQUljO0lBQ2hCLDBCQUFlOzs7O0lBMUJFLGVBQXdDO0lBQXhDLDhEQUF3QyxpQkFBQTs7O0lBNkJ2RCw4QkFBNEI7SUFDMUIsK0JBQTBCO0lBQUEsbUNBQW1CO0lBQUEsaUJBQU07SUFDckQsaUJBQU07O0FEdkJSLE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFTWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztLQU1qRDtJQUpDLGdCQUFnQixDQUFDLEtBQWlCO1FBQ2hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7O29HQVJVLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDVHZDLDZGQTJCZTtRQUVmLDRIQUljOzs7UUFqQ0MsaURBQThCLGlCQUFBOzt1RkRTaEMsMEJBQTBCO2NBTnRDLFNBQVM7ZUFBQztnQkFDVCxXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztnQkFDbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Z0JBRVUsc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5kZXhlZE5vZGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmUtZm9yZXN0L2luZGV4LWZvcmVzdCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vcHJvcGVydHktdGFiLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHNlbGVjdG9yOiAnbmctcHJvcGVydHktdGFiLWhlYWRlcicsXG4gIHN0eWxlVXJsczogWycuL3Byb3BlcnR5LXRhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb3BlcnR5VGFiSGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY3VycmVudFNlbGVjdGVkRWxlbWVudDogSW5kZXhlZE5vZGU7XG4gIEBJbnB1dCgpIGN1cnJlbnREaXJlY3RpdmVzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcbiAgQE91dHB1dCgpIHZpZXdTb3VyY2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgaGFuZGxlVmlld1NvdXJjZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMudmlld1NvdXJjZS5lbWl0KCk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJjdXJyZW50U2VsZWN0ZWRFbGVtZW50OyBlbHNlIGVtcHR5U3RhdGVcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1cnJlbnRTZWxlY3RlZEVsZW1lbnQuY29tcG9uZW50OyBlbHNlIGN1cnJlbnRFbGVtZW50SXNET01FbGVtZW50XCI+XG4gICAgPG1hdC1hY2NvcmRpb24gY2xhc3M9XCJwcm9wZXJ0eS10YWItaGVhZGVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBbaGlkZVRvZ2dsZV09XCJ0cnVlXCI+XG4gICAgICAgICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIGNvbGxhcHNlZEhlaWdodD1cIjMycHhcIiBleHBhbmRlZEhlaWdodD1cIjMycHhcIj5cbiAgICAgICAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wb25lbnQtbmFtZVwiPnt7IGN1cnJlbnRTZWxlY3RlZEVsZW1lbnQuY29tcG9uZW50Lm5hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiaGFuZGxlVmlld1NvdXJjZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24+XG4gICAgICAgICAgICAgICAgICAgIGNvZGVcbiAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgICAgICA8bmctY29tcG9uZW50LW1ldGFkYXRhIFtjdXJyZW50U2VsZWN0ZWRDb21wb25lbnRdPVwiY3VycmVudFNlbGVjdGVkRWxlbWVudC5jb21wb25lbnRcIj48L25nLWNvbXBvbmVudC1tZXRhZGF0YT5cbiAgICAgICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYXQtYWNjb3JkaW9uPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICNjdXJyZW50RWxlbWVudElzRE9NRWxlbWVudD5cbiAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LW5hbWVcIj57eyBjdXJyZW50U2VsZWN0ZWRFbGVtZW50LmVsZW1lbnQgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2VtcHR5U3RhdGU+XG4gIDxkaXYgY2xhc3M9XCJlbGVtZW50LWhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJlbGVtZW50LW5hbWVcIj5ObyBzZWxlY3RlZCBFbGVtZW50PC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==