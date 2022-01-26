import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./property-view/property-view.component";
function PropertyTabBodyComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "ng-property-view", 3);
    i0.ɵɵlistener("inspect", function PropertyTabBodyComponent_ng_container_0_div_1_Template_ng_property_view_inspect_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.inspect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directive_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("directive", directive_r2);
} }
function PropertyTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PropertyTabBodyComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.getCurrentDirectives());
} }
export class PropertyTabBodyComponent {
    constructor() {
        this.inspect = new EventEmitter();
    }
    getCurrentDirectives() {
        if (!this.currentSelectedElement) {
            return;
        }
        const directives = this.currentSelectedElement.directives.map((d) => d.name);
        if (this.currentSelectedElement.component) {
            directives.push(this.currentSelectedElement.component.name);
        }
        return directives;
    }
}
PropertyTabBodyComponent.ɵfac = function PropertyTabBodyComponent_Factory(t) { return new (t || PropertyTabBodyComponent)(); };
PropertyTabBodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyTabBodyComponent, selectors: [["ng-property-tab-body"]], inputs: { currentSelectedElement: "currentSelectedElement" }, outputs: { inspect: "inspect" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "explorer-panel", 4, "ngFor", "ngForOf"], [1, "explorer-panel"], [3, "directive", "inspect"]], template: function PropertyTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.currentSelectedElement);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.PropertyViewComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabBodyComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-tab-body.component.html',
                selector: 'ng-property-tab-body',
                styleUrls: ['./property-tab-body.component.scss'],
            }]
    }], null, { currentSelectedElement: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9wcm9wZXJ0eS10YWIvcHJvcGVydHktdGFiLWJvZHkvcHJvcGVydHktdGFiLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9wcm9wZXJ0eS10YWIvcHJvcGVydHktdGFiLWJvZHkvcHJvcGVydHktdGFiLWJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQ3JFLDhCQUE2RTtJQUMzRSwyQ0FBMkU7SUFBekQseU1BQVcsMkJBQW9CLElBQUM7SUFBeUIsaUJBQW1CO0lBQ2hHLGlCQUFNOzs7SUFEK0MsZUFBdUI7SUFBdkIsd0NBQXVCOzs7SUFGOUUsNkJBQTZDO0lBQzNDLHdGQUVNO0lBQ1IsMEJBQWU7OztJQUhjLGVBQXlCO0lBQXpCLHVEQUF5Qjs7QURTdEQsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU9ZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBNEQsQ0FBQztLQVlsRztJQVZDLG9CQUFvQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFFO1lBQ3pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3RDtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7O2dHQWJVLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDVnJDLDJGQUllOztRQUpBLGlEQUE0Qjs7dUZEVTlCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7Z0JBRVUsc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0ksT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkTm9kZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZS1mb3Jlc3QvaW5kZXgtZm9yZXN0JztcbmltcG9ydCB7IEZsYXROb2RlIH0gZnJvbSAnLi4vLi4vcHJvcGVydHktcmVzb2x2ZXIvZWxlbWVudC1wcm9wZXJ0eS1yZXNvbHZlcic7XG5pbXBvcnQgeyBEaXJlY3RpdmVQb3NpdGlvbiB9IGZyb20gJ3Byb3RvY29sJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9wZXJ0eS10YWItYm9keS5jb21wb25lbnQuaHRtbCcsXG4gIHNlbGVjdG9yOiAnbmctcHJvcGVydHktdGFiLWJvZHknLFxuICBzdHlsZVVybHM6IFsnLi9wcm9wZXJ0eS10YWItYm9keS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVRhYkJvZHlDb21wb25lbnQge1xuICBASW5wdXQoKSBjdXJyZW50U2VsZWN0ZWRFbGVtZW50OiBJbmRleGVkTm9kZSB8IG51bGw7XG4gIEBPdXRwdXQoKSBpbnNwZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IG5vZGU6IEZsYXROb2RlOyBkaXJlY3RpdmVQb3NpdGlvbjogRGlyZWN0aXZlUG9zaXRpb24gfT4oKTtcblxuICBnZXRDdXJyZW50RGlyZWN0aXZlcygpOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRTZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlyZWN0aXZlcyA9IHRoaXMuY3VycmVudFNlbGVjdGVkRWxlbWVudC5kaXJlY3RpdmVzLm1hcCgoZCkgPT4gZC5uYW1lKTtcbiAgICBpZiAodGhpcy5jdXJyZW50U2VsZWN0ZWRFbGVtZW50LmNvbXBvbmVudCkge1xuICAgICAgZGlyZWN0aXZlcy5wdXNoKHRoaXMuY3VycmVudFNlbGVjdGVkRWxlbWVudC5jb21wb25lbnQubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3RpdmVzO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiY3VycmVudFNlbGVjdGVkRWxlbWVudFwiPlxuICA8ZGl2ICpuZ0Zvcj1cImxldCBkaXJlY3RpdmUgb2YgZ2V0Q3VycmVudERpcmVjdGl2ZXMoKVwiIGNsYXNzPVwiZXhwbG9yZXItcGFuZWxcIj5cbiAgICA8bmctcHJvcGVydHktdmlldyAoaW5zcGVjdCk9XCJpbnNwZWN0LmVtaXQoJGV2ZW50KVwiIFtkaXJlY3RpdmVdPVwiZGlyZWN0aXZlXCI+PC9uZy1wcm9wZXJ0eS12aWV3PlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19