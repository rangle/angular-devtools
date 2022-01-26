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
    } }, directives: [i2.NgIf, i3.MatAnchor], styles: [".meta-data-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.meta-data-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 11px;\n  height: 22px;\n  line-height: 22px;\n}\n\n.meta-data[_ngcontent-%COMP%] {\n  font-weight: 400;\n}"], changeDetection: 0 });
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
//# sourceMappingURL=component-metadata.component.js.map