import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
export class PropertyViewHeaderComponent {
}
PropertyViewHeaderComponent.ɵfac = function PropertyViewHeaderComponent_Factory(t) { return new (t || PropertyViewHeaderComponent)(); };
PropertyViewHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewHeaderComponent, selectors: [["ng-property-view-header"]], inputs: { directive: "directive" }, decls: 2, vars: 1, template: function PropertyViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.directive);
    } }, directives: [i1.MatToolbar], styles: ["mat-toolbar[_ngcontent-%COMP%]{padding-left:9px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:25px;font-size:11px;font-weight:500;display:flex;align-items:center;justify-content:space-between;height:auto}  .mat-button,   .mat-icon-button{height:18px;width:18px;line-height:15px;margin-right:7px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view-header',
                templateUrl: './property-view-header.component.html',
                styleUrls: ['./property-view-header.component.scss'],
            }]
    }], null, { directive: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdmlldy1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9wcm9wZXJ0eS10YWIvcHJvcGVydHktdGFiLWJvZHkvcHJvcGVydHktdmlldy9wcm9wZXJ0eS12aWV3LWhlYWRlci9wcm9wZXJ0eS12aWV3LWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXRhYi9wcm9wZXJ0eS10YWItYm9keS9wcm9wZXJ0eS12aWV3L3Byb3BlcnR5LXZpZXctaGVhZGVyL3Byb3BlcnR5LXZpZXctaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPakQsTUFBTSxPQUFPLDJCQUEyQjs7c0dBQTNCLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FDUHhDLG1DQUFhO1FBQUEsWUFBZTtRQUFBLGlCQUFjOztRQUE3QixlQUFlO1FBQWYsbUNBQWU7O3VGRE9mLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7YUFDckQ7Z0JBRVUsU0FBUztrQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcHJvcGVydHktdmlldy1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvcGVydHktdmlldy1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9wZXJ0eS12aWV3LWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVZpZXdIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkaXJlY3RpdmU6IHN0cmluZztcbn1cbiIsIjxtYXQtdG9vbGJhcj57eyBkaXJlY3RpdmUgfX08L21hdC10b29sYmFyPlxuIl19