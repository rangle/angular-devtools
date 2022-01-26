import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../property-resolver/element-property-resolver";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function ComponentMetadataComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1, " View Encapsulation: ");
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const viewEncapsulation_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(viewEncapsulation_r2);
} }
function ComponentMetadataComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1, " Change Detection Strategy: ");
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const changeDetectionStrategy_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(changeDetectionStrategy_r3);
} }
export class ComponentMetadataComponent {
    constructor(_nestedProps) {
        this._nestedProps = _nestedProps;
        this.viewEncapsulationModes = ['Emulated', 'Native', 'None', 'ShadowDom'];
    }
    get controller() {
        if (!this.currentSelectedComponent) {
            return;
        }
        return this._nestedProps.getDirectiveController(this.currentSelectedComponent.name);
    }
    get viewEncapsulation() {
        var _a;
        const encapsulationIndex = (_a = this === null || this === void 0 ? void 0 : this.controller) === null || _a === void 0 ? void 0 : _a.directiveViewEncapsulation;
        if (encapsulationIndex !== undefined) {
            return this.viewEncapsulationModes[encapsulationIndex];
        }
    }
    get changeDetectionStrategy() {
        var _a;
        const onPush = (_a = this === null || this === void 0 ? void 0 : this.controller) === null || _a === void 0 ? void 0 : _a.directiveHasOnPushStrategy;
        return onPush ? 'On Push' : onPush !== undefined ? 'Default' : undefined;
    }
}
ComponentMetadataComponent.ɵfac = function ComponentMetadataComponent_Factory(t) { return new (t || ComponentMetadataComponent)(i0.ɵɵdirectiveInject(i1.ElementPropertyResolver)); };
ComponentMetadataComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentMetadataComponent, selectors: [["ng-component-metadata"]], inputs: { currentSelectedComponent: "currentSelectedComponent" }, decls: 3, vars: 2, consts: [[1, "meta-data-container"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ViewEncapsulation", "target", "_blank", 4, "ngIf"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ChangeDetectionStrategy", "target", "_blank", 4, "ngIf"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ViewEncapsulation", "target", "_blank"], [1, "meta-data"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ChangeDetectionStrategy", "target", "_blank"]], template: function ComponentMetadataComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ComponentMetadataComponent_a_1_Template, 4, 1, "a", 1);
        i0.ɵɵtemplate(2, ComponentMetadataComponent_a_2_Template, 4, 1, "a", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.viewEncapsulation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.changeDetectionStrategy);
    } }, directives: [i2.NgIf, i3.MatAnchor], styles: [".meta-data-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.meta-data-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;font-size:11px;height:22px;line-height:22px}.meta-data[_ngcontent-%COMP%]{font-weight:400}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentMetadataComponent, [{
        type: Component,
        args: [{
                selector: 'ng-component-metadata',
                templateUrl: './component-metadata.component.html',
                styleUrls: ['./component-metadata.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.ElementPropertyResolver }]; }, { currentSelectedComponent: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LW1ldGFkYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi1oZWFkZXIvY29tcG9uZW50LW1ldGFkYXRhL2NvbXBvbmVudC1tZXRhZGF0YS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXRhYi9wcm9wZXJ0eS10YWItaGVhZGVyL2NvbXBvbmVudC1tZXRhZGF0YS9jb21wb25lbnQtbWV0YWRhdGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0N4RSw0QkFNQztJQUNDLHFDQUFvQjtJQUFBLCtCQUF3QjtJQUFBLFlBQXVCO0lBQUEsaUJBQU87SUFDNUUsaUJBQUk7OztJQUQwQyxlQUF1QjtJQUF2QiwwQ0FBdUI7OztJQUVyRSw0QkFNQztJQUNDLDRDQUEyQjtJQUFBLCtCQUF3QjtJQUFBLFlBQTZCO0lBQUEsaUJBQU87SUFDekYsaUJBQUk7OztJQURpRCxlQUE2QjtJQUE3QixnREFBNkI7O0FETnBGLE1BQU0sT0FBTywwQkFBMEI7SUFHckMsWUFBb0IsWUFBcUM7UUFBckMsaUJBQVksR0FBWixZQUFZLENBQXlCO1FBRXpELDJCQUFzQixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFGVCxDQUFDO0lBSTdELElBQUksVUFBVTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsSUFBSSxpQkFBaUI7O1FBQ25CLE1BQU0sa0JBQWtCLEdBQUcsTUFBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsVUFBVSwwQ0FBRSwwQkFBMEIsQ0FBQztRQUN4RSxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVELElBQUksdUJBQXVCOztRQUN6QixNQUFNLE1BQU0sR0FBRyxNQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxVQUFVLDBDQUFFLDBCQUEwQixDQUFDO1FBQzVELE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzNFLENBQUM7O29HQXhCVSwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ1h2Qyw4QkFBaUM7UUFDL0IsdUVBUUk7UUFDSix1RUFRSTtRQUNOLGlCQUFNOztRQWZELGVBQXlCO1FBQXpCLDRDQUF5QjtRQVN6QixlQUErQjtRQUEvQixrREFBK0I7O3VGREZ2QiwwQkFBMEI7Y0FOdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDswRUFFVSx3QkFBd0I7a0JBQWhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlUHJvcGVydHlSZXNvbHZlciB9IGZyb20gJy4uLy4uLy4uL3Byb3BlcnR5LXJlc29sdmVyL2RpcmVjdGl2ZS1wcm9wZXJ0eS1yZXNvbHZlcic7XG5pbXBvcnQgeyBFbGVtZW50UHJvcGVydHlSZXNvbHZlciB9IGZyb20gJy4uLy4uLy4uL3Byb3BlcnR5LXJlc29sdmVyL2VsZW1lbnQtcHJvcGVydHktcmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3Byb3RvY29sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY29tcG9uZW50LW1ldGFkYXRhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudC1tZXRhZGF0YS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBvbmVudC1tZXRhZGF0YS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TWV0YWRhdGFDb21wb25lbnQge1xuICBASW5wdXQoKSBjdXJyZW50U2VsZWN0ZWRDb21wb25lbnQ6IENvbXBvbmVudFR5cGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmVzdGVkUHJvcHM6IEVsZW1lbnRQcm9wZXJ0eVJlc29sdmVyKSB7fVxuXG4gIHZpZXdFbmNhcHN1bGF0aW9uTW9kZXMgPSBbJ0VtdWxhdGVkJywgJ05hdGl2ZScsICdOb25lJywgJ1NoYWRvd0RvbSddO1xuXG4gIGdldCBjb250cm9sbGVyKCk6IERpcmVjdGl2ZVByb3BlcnR5UmVzb2x2ZXIgfCB1bmRlZmluZWQge1xuICAgIGlmICghdGhpcy5jdXJyZW50U2VsZWN0ZWRDb21wb25lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25lc3RlZFByb3BzLmdldERpcmVjdGl2ZUNvbnRyb2xsZXIodGhpcy5jdXJyZW50U2VsZWN0ZWRDb21wb25lbnQubmFtZSk7XG4gIH1cblxuICBnZXQgdmlld0VuY2Fwc3VsYXRpb24oKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBlbmNhcHN1bGF0aW9uSW5kZXggPSB0aGlzPy5jb250cm9sbGVyPy5kaXJlY3RpdmVWaWV3RW5jYXBzdWxhdGlvbjtcbiAgICBpZiAoZW5jYXBzdWxhdGlvbkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdFbmNhcHN1bGF0aW9uTW9kZXNbZW5jYXBzdWxhdGlvbkluZGV4XTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3koKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBvblB1c2ggPSB0aGlzPy5jb250cm9sbGVyPy5kaXJlY3RpdmVIYXNPblB1c2hTdHJhdGVneTtcbiAgICByZXR1cm4gb25QdXNoID8gJ09uIFB1c2gnIDogb25QdXNoICE9PSB1bmRlZmluZWQgPyAnRGVmYXVsdCcgOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJtZXRhLWRhdGEtY29udGFpbmVyXCI+XG4gIDxhXG4gICAgbWF0LWJ1dHRvblxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgKm5nSWY9XCJ2aWV3RW5jYXBzdWxhdGlvbjsgbGV0IHZpZXdFbmNhcHN1bGF0aW9uXCJcbiAgICBocmVmPVwiaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL1ZpZXdFbmNhcHN1bGF0aW9uXCJcbiAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICA+XG4gICAgVmlldyBFbmNhcHN1bGF0aW9uOiA8c3BhbiBjbGFzcz1cIm1ldGEtZGF0YVwiPnt7IHZpZXdFbmNhcHN1bGF0aW9uIH19PC9zcGFuPlxuICA8L2E+XG4gIDxhXG4gICAgbWF0LWJ1dHRvblxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgKm5nSWY9XCJjaGFuZ2VEZXRlY3Rpb25TdHJhdGVneTsgbGV0IGNoYW5nZURldGVjdGlvblN0cmF0ZWd5XCJcbiAgICBocmVmPVwiaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL0NoYW5nZURldGVjdGlvblN0cmF0ZWd5XCJcbiAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICA+XG4gICAgQ2hhbmdlIERldGVjdGlvbiBTdHJhdGVneTogPHNwYW4gY2xhc3M9XCJtZXRhLWRhdGFcIj57eyBjaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9fTwvc3Bhbj5cbiAgPC9hPlxuPC9kaXY+XG4iXX0=