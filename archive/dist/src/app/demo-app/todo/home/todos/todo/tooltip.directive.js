import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class TooltipDirective {
    constructor() {
        this.visible = false;
        this.nested = {
            child: {
                grandchild: {
                    prop: 1,
                },
            },
        };
        // setInterval(() => this.nested.child.grandchild.prop++, 500);
    }
    handleClick() {
        this.visible = !this.visible;
        if (this.visible) {
            this.extraProp = true;
        }
        else {
            delete this.extraProp;
        }
        console.log(this);
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(); };
TooltipDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "appTooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function TooltipDirective_click_HostBindingHandler() { return ctx.handleClick(); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[appTooltip]',
            }]
    }], function () { return []; }, { handleClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=tooltip.directive.js.map