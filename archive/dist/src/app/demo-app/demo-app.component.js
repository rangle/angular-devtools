import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ZippyComponent } from './zippy/zippy.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./heavy/heavy.component";
const _c0 = ["elementReference"];
export class DemoAppComponent {
    getTitle() {
        if (!this.zippy || !this.zippy.visible) {
            return '► Click to expand';
        }
        return '▼ Click to collapse';
    }
}
DemoAppComponent.ɵfac = function DemoAppComponent_Factory(t) { return new (t || DemoAppComponent)(); };
DemoAppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DemoAppComponent, selectors: [["ng-component"]], viewQuery: function DemoAppComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(ZippyComponent, 5);
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.zippy = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.elementRef = _t.first);
    } }, decls: 7, vars: 1, consts: [[3, "title"], ["elementReference", ""]], template: function DemoAppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "router-outlet");
        i0.ɵɵelementStart(1, "app-zippy", 0);
        i0.ɵɵtext(2, "This is my content");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "app-heavy");
        i0.ɵɵelementStart(4, "div", null, 1);
        i0.ɵɵtext(6, "HTMLElement");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("title", ctx.getTitle());
    } }, directives: [i1.RouterOutlet, i2.HeavyComponent], styles: ["@import 'todomvc-common/base.css';\n@import 'todomvc-app-css/index.css';\n\nbody {\n  max-width: 500px !important;\n}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoAppComponent, [{
        type: Component,
        args: [{
                templateUrl: './demo-app.component.html',
                styleUrls: ['./demo-app.component.scss'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { zippy: [{
            type: ViewChild,
            args: [ZippyComponent]
        }], elementRef: [{
            type: ViewChild,
            args: ['elementReference']
        }] }); })();
//# sourceMappingURL=demo-app.component.js.map