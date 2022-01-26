import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ExecutionDetailsComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td", 0);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 1);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 2);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", entry_r1.directive, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", entry_r1.method, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", entry_r1.value, " ms");
} }
export class ExecutionDetailsComponent {
}
ExecutionDetailsComponent.ɵfac = function ExecutionDetailsComponent_Factory(t) { return new (t || ExecutionDetailsComponent)(); };
ExecutionDetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExecutionDetailsComponent, selectors: [["ng-execution-details"]], inputs: { data: "data" }, decls: 10, vars: 1, consts: [[1, "name"], [1, "method"], [1, "value"], [4, "ngFor", "ngForOf"]], template: function ExecutionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table");
        i0.ɵɵelementStart(1, "thead");
        i0.ɵɵelementStart(2, "th", 0);
        i0.ɵɵtext(3, "Directive");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "th", 1);
        i0.ɵɵtext(5, "Method");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "th", 2);
        i0.ɵɵtext(7, "Time");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "tbody");
        i0.ɵɵtemplate(9, ExecutionDetailsComponent_tr_9_Template, 7, 3, "tr", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [i1.NgForOf], styles: ["table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;text-align:left;overflow:hidden;text-overflow:ellipsis}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExecutionDetailsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-execution-details',
                templateUrl: './execution-details.component.html',
                styleUrls: ['./execution-details.component.scss'],
            }]
    }], null, { data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0aW9uLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3JlY29yZGluZy90aW1lbGluZS9yZWNvcmRpbmctdmlzdWFsaXplci9leGVjdXRpb24tZGV0YWlscy9leGVjdXRpb24tZGV0YWlscy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZGluZy12aXN1YWxpemVyL2V4ZWN1dGlvbi1kZXRhaWxzL2V4ZWN1dGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDTzdDLDBCQUErQjtJQUM3Qiw2QkFBaUI7SUFDZixZQUNGO0lBQUEsaUJBQUs7SUFDTCw2QkFBbUI7SUFDakIsWUFDRjtJQUFBLGlCQUFLO0lBQ0wsNkJBQWtCO0lBQUEsWUFBb0I7SUFBQSxpQkFBSztJQUM3QyxpQkFBSzs7O0lBTkQsZUFDRjtJQURFLG1EQUNGO0lBRUUsZUFDRjtJQURFLGdEQUNGO0lBQ2tCLGVBQW9CO0lBQXBCLGdEQUFvQjs7QURENUMsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDYnRDLDZCQUFPO1FBQ0wsNkJBQU87UUFDTCw2QkFBaUI7UUFBQSx5QkFBUztRQUFBLGlCQUFLO1FBQy9CLDZCQUFtQjtRQUFBLHNCQUFNO1FBQUEsaUJBQUs7UUFDOUIsNkJBQWtCO1FBQUEsb0JBQUk7UUFBQSxpQkFBSztRQUM3QixpQkFBUTtRQUNSLDZCQUFPO1FBQ0wsd0VBUUs7UUFDUCxpQkFBUTtRQUNWLGlCQUFROztRQVZrQixlQUFPO1FBQVAsa0NBQU87O3VGRE1wQix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEO2dCQUVVLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBHcmFwaE5vZGUge1xuICBkaXJlY3RpdmU6IHN0cmluZztcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWV4ZWN1dGlvbi1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4ZWN1dGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhlY3V0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhlY3V0aW9uRGV0YWlsc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IEdyYXBoTm9kZVtdO1xufVxuIiwiPHRhYmxlPlxuICA8dGhlYWQ+XG4gICAgPHRoIGNsYXNzPVwibmFtZVwiPkRpcmVjdGl2ZTwvdGg+XG4gICAgPHRoIGNsYXNzPVwibWV0aG9kXCI+TWV0aG9kPC90aD5cbiAgICA8dGggY2xhc3M9XCJ2YWx1ZVwiPlRpbWU8L3RoPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBkYXRhXCI+XG4gICAgICA8dGQgY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgIHt7IGVudHJ5LmRpcmVjdGl2ZSB9fVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cIm1ldGhvZFwiPlxuICAgICAgICB7eyBlbnRyeS5tZXRob2QgfX1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJ2YWx1ZVwiPnt7IGVudHJ5LnZhbHVlIH19IG1zPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiJdfQ==