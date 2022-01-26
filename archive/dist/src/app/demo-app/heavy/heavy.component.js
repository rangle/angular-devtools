import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const fib = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};
export class HeavyComponent {
    constructor() {
        this.state = {
            nested: {
                props: {
                    foo: 1,
                    bar: 2,
                },
            },
        };
    }
    calculate() {
        return fib(15);
    }
}
HeavyComponent.ɵfac = function HeavyComponent_Factory(t) { return new (t || HeavyComponent)(); };
HeavyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeavyComponent, selectors: [["app-heavy"]], decls: 2, vars: 1, template: function HeavyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.calculate());
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeavyComponent, [{
        type: Component,
        args: [{
                selector: 'app-heavy',
                templateUrl: './heavy.component.html',
                styleUrls: ['./heavy.component.scss'],
            }]
    }], null, null); })();
//# sourceMappingURL=heavy.component.js.map