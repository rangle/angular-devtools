import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./property-tab-header/property-tab-header.component";
import * as i2 from "./property-tab-body/property-tab-body.component";
export class PropertyTabComponent {
    constructor() {
        this.viewSource = new EventEmitter();
        this.inspect = new EventEmitter();
    }
}
PropertyTabComponent.ɵfac = function PropertyTabComponent_Factory(t) { return new (t || PropertyTabComponent)(); };
PropertyTabComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyTabComponent, selectors: [["ng-property-tab"]], inputs: { currentSelectedElement: "currentSelectedElement" }, outputs: { viewSource: "viewSource", inspect: "inspect" }, decls: 2, vars: 2, consts: [[3, "currentSelectedElement", "viewSource"], [3, "currentSelectedElement", "inspect"]], template: function PropertyTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ng-property-tab-header", 0);
        i0.ɵɵlistener("viewSource", function PropertyTabComponent_Template_ng_property_tab_header_viewSource_0_listener() { return ctx.viewSource.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "ng-property-tab-body", 1);
        i0.ɵɵlistener("inspect", function PropertyTabComponent_Template_ng_property_tab_body_inspect_1_listener($event) { return ctx.inspect.emit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
    } }, directives: [i1.PropertyTabHeaderComponent, i2.PropertyTabBodyComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-tab.component.html',
                selector: 'ng-property-tab',
            }]
    }], null, { currentSelectedElement: [{
            type: Input
        }], viewSource: [{
            type: Output
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXRhYi9wcm9wZXJ0eS10YWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVN2RSxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBTVksZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUE0RCxDQUFDO0tBQ2xHOzt3RkFKWSxvQkFBb0I7dUVBQXBCLG9CQUFvQjtRQ1RqQyxpREFBMkc7UUFBakMsMkhBQWMscUJBQWlCLElBQUM7UUFDMUcsaUJBQXlCO1FBQ3pCLCtDQUF5RztRQUFuRix5SEFBVyx3QkFBb0IsSUFBQztRQUN0RCxpQkFBdUI7O1FBSEMsbUVBQWlEO1FBRWxCLGVBQWlEO1FBQWpELG1FQUFpRDs7dUZETzNGLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsUUFBUSxFQUFFLGlCQUFpQjthQUM1QjtnQkFFVSxzQkFBc0I7a0JBQTlCLEtBQUs7WUFDSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkTm9kZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS1mb3Jlc3QvaW5kZXgtZm9yZXN0JztcbmltcG9ydCB7IEZsYXROb2RlIH0gZnJvbSAnLi4vcHJvcGVydHktcmVzb2x2ZXIvZWxlbWVudC1wcm9wZXJ0eS1yZXNvbHZlcic7XG5pbXBvcnQgeyBEaXJlY3RpdmVQb3NpdGlvbiB9IGZyb20gJ3Byb3RvY29sJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9wZXJ0eS10YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzZWxlY3RvcjogJ25nLXByb3BlcnR5LXRhYicsXG59KVxuZXhwb3J0IGNsYXNzIFByb3BlcnR5VGFiQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY3VycmVudFNlbGVjdGVkRWxlbWVudDogSW5kZXhlZE5vZGU7XG4gIEBPdXRwdXQoKSB2aWV3U291cmNlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgaW5zcGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBub2RlOiBGbGF0Tm9kZTsgZGlyZWN0aXZlUG9zaXRpb246IERpcmVjdGl2ZVBvc2l0aW9uIH0+KCk7XG59XG4iLCI8bmctcHJvcGVydHktdGFiLWhlYWRlciBbY3VycmVudFNlbGVjdGVkRWxlbWVudF09XCJjdXJyZW50U2VsZWN0ZWRFbGVtZW50XCIgKHZpZXdTb3VyY2UpPVwidmlld1NvdXJjZS5lbWl0KClcIj5cbjwvbmctcHJvcGVydHktdGFiLWhlYWRlcj5cbjxuZy1wcm9wZXJ0eS10YWItYm9keSAoaW5zcGVjdCk9XCJpbnNwZWN0LmVtaXQoJGV2ZW50KVwiIFtjdXJyZW50U2VsZWN0ZWRFbGVtZW50XT1cImN1cnJlbnRTZWxlY3RlZEVsZW1lbnRcIj5cbjwvbmctcHJvcGVydHktdGFiLWJvZHk+XG4iXX0=