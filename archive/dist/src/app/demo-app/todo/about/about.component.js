import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AboutComponent {
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutComponent, selectors: [["app-about"]], decls: 7, vars: 0, consts: [[3, "routerLink"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, " About component ");
        i0.ɵɵelementStart(1, "a", 0);
        i0.ɵɵtext(2, "Home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "a", 0);
        i0.ɵɵtext(4, "Home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "a", 0);
        i0.ɵɵtext(6, "Home");
        i0.ɵɵelementEnd();
    } }, directives: [i1.RouterLinkWithHref], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutComponent, [{
        type: Component,
        args: [{
                selector: 'app-about',
                template: `
    About component
    <a [routerLink]="">Home</a>
    <a [routerLink]="">Home</a>
    <a [routerLink]="">Home</a>
  `,
            }]
    }], null, null); })();
//# sourceMappingURL=about.component.js.map