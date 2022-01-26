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
//# sourceMappingURL=property-view.component.js.map