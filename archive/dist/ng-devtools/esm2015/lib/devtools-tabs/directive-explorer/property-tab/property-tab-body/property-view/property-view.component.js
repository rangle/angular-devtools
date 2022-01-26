import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../property-resolver/element-property-resolver";
import * as i2 from "./property-view-header/property-view-header.component";
import * as i3 from "./property-view-body/property-view-body.component";
export class PropertyViewComponent {
    constructor(_nestedProps) {
        this._nestedProps = _nestedProps;
        this.inspect = new EventEmitter();
    }
    get controller() {
        return this._nestedProps.getDirectiveController(this.directive);
    }
    get directiveInputControls() {
        var _a;
        return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveInputControls;
    }
    get directiveOutputControls() {
        var _a;
        return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveOutputControls;
    }
    get directiveStateControls() {
        var _a;
        return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveStateControls;
    }
}
PropertyViewComponent.ɵfac = function PropertyViewComponent_Factory(t) { return new (t || PropertyViewComponent)(i0.ɵɵdirectiveInject(i1.ElementPropertyResolver)); };
PropertyViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewComponent, selectors: [["ng-property-view"]], inputs: { directive: "directive" }, outputs: { inspect: "inspect" }, decls: 2, vars: 5, consts: [[3, "directive"], [3, "controller", "directiveInputControls", "directiveOutputControls", "directiveStateControls", "inspect"]], template: function PropertyViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "ng-property-view-header", 0);
        i0.ɵɵelementStart(1, "ng-property-view-body", 1);
        i0.ɵɵlistener("inspect", function PropertyViewComponent_Template_ng_property_view_body_inspect_1_listener($event) { return ctx.inspect.emit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("directive", ctx.directive);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("controller", ctx.controller)("directiveInputControls", ctx.directiveInputControls)("directiveOutputControls", ctx.directiveOutputControls)("directiveStateControls", ctx.directiveStateControls);
    } }, directives: [i2.PropertyViewHeaderComponent, i3.PropertyViewBodyComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view',
                templateUrl: './property-view.component.html',
                styleUrls: ['./property-view.component.scss'],
            }]
    }], function () { return [{ type: i1.ElementPropertyResolver }]; }, { directive: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXRhYi9wcm9wZXJ0eS10YWItYm9keS9wcm9wZXJ0eS12aWV3L3Byb3BlcnR5LXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9wcm9wZXJ0eS10YWIvcHJvcGVydHktdGFiLWJvZHkvcHJvcGVydHktdmlldy9wcm9wZXJ0eS12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVXZFLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFBb0IsWUFBcUM7UUFBckMsaUJBQVksR0FBWixZQUFZLENBQXlCO1FBRi9DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBNEQsQ0FBQztJQUVyQyxDQUFDO0lBRTdELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUksc0JBQXNCOztRQUN4QixPQUFPLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsc0JBQXNCLENBQUM7SUFDakQsQ0FBQztJQUVELElBQUksdUJBQXVCOztRQUN6QixPQUFPLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsdUJBQXVCLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQUksc0JBQXNCOztRQUN4QixPQUFPLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsc0JBQXNCLENBQUM7SUFDakQsQ0FBQzs7MEZBcEJVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDVmxDLDZDQUEyRTtRQUMzRSxnREFNQztRQURDLDJIQUFXLHdCQUFvQixJQUFDO1FBQ2pDLGlCQUF3Qjs7UUFQQSx5Q0FBdUI7UUFFOUMsZUFBeUI7UUFBekIsMkNBQXlCLHNEQUFBLHdEQUFBLHNEQUFBOzt1RkRRZCxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDOzBFQUVVLFNBQVM7a0JBQWpCLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpcmVjdGl2ZVByb3BlcnR5UmVzb2x2ZXIsIERpcmVjdGl2ZVRyZWVEYXRhIH0gZnJvbSAnLi4vLi4vLi4vcHJvcGVydHktcmVzb2x2ZXIvZGlyZWN0aXZlLXByb3BlcnR5LXJlc29sdmVyJztcbmltcG9ydCB7IEVsZW1lbnRQcm9wZXJ0eVJlc29sdmVyLCBGbGF0Tm9kZSB9IGZyb20gJy4uLy4uLy4uL3Byb3BlcnR5LXJlc29sdmVyL2VsZW1lbnQtcHJvcGVydHktcmVzb2x2ZXInO1xuaW1wb3J0IHsgRGlyZWN0aXZlUG9zaXRpb24gfSBmcm9tICdwcm90b2NvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXByb3BlcnR5LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvcGVydHktdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb3BlcnR5LXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvcGVydHlWaWV3Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlyZWN0aXZlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBpbnNwZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IG5vZGU6IEZsYXROb2RlOyBkaXJlY3RpdmVQb3NpdGlvbjogRGlyZWN0aXZlUG9zaXRpb24gfT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZXN0ZWRQcm9wczogRWxlbWVudFByb3BlcnR5UmVzb2x2ZXIpIHt9XG5cbiAgZ2V0IGNvbnRyb2xsZXIoKTogRGlyZWN0aXZlUHJvcGVydHlSZXNvbHZlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25lc3RlZFByb3BzLmdldERpcmVjdGl2ZUNvbnRyb2xsZXIodGhpcy5kaXJlY3RpdmUpO1xuICB9XG5cbiAgZ2V0IGRpcmVjdGl2ZUlucHV0Q29udHJvbHMoKTogRGlyZWN0aXZlVHJlZURhdGEgfCB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyPy5kaXJlY3RpdmVJbnB1dENvbnRyb2xzO1xuICB9XG5cbiAgZ2V0IGRpcmVjdGl2ZU91dHB1dENvbnRyb2xzKCk6IERpcmVjdGl2ZVRyZWVEYXRhIHwgdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlcj8uZGlyZWN0aXZlT3V0cHV0Q29udHJvbHM7XG4gIH1cblxuICBnZXQgZGlyZWN0aXZlU3RhdGVDb250cm9scygpOiBEaXJlY3RpdmVUcmVlRGF0YSB8IHZvaWQge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXI/LmRpcmVjdGl2ZVN0YXRlQ29udHJvbHM7XG4gIH1cbn1cbiIsIjxuZy1wcm9wZXJ0eS12aWV3LWhlYWRlciBbZGlyZWN0aXZlXT1cImRpcmVjdGl2ZVwiPjwvbmctcHJvcGVydHktdmlldy1oZWFkZXI+XG48bmctcHJvcGVydHktdmlldy1ib2R5XG4gIFtjb250cm9sbGVyXT1cImNvbnRyb2xsZXJcIlxuICBbZGlyZWN0aXZlSW5wdXRDb250cm9sc109XCJkaXJlY3RpdmVJbnB1dENvbnRyb2xzXCJcbiAgW2RpcmVjdGl2ZU91dHB1dENvbnRyb2xzXT1cImRpcmVjdGl2ZU91dHB1dENvbnRyb2xzXCJcbiAgW2RpcmVjdGl2ZVN0YXRlQ29udHJvbHNdPVwiZGlyZWN0aXZlU3RhdGVDb250cm9sc1wiXG4gIChpbnNwZWN0KT1cImluc3BlY3QuZW1pdCgkZXZlbnQpXCJcbj48L25nLXByb3BlcnR5LXZpZXctYm9keT5cbiJdfQ==