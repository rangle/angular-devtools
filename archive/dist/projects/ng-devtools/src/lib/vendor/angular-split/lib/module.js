// tslint:disable
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitComponent } from './component/split.component';
import { SplitAreaDirective } from './directive/splitArea.directive';
import * as i0 from "@angular/core";
export class AngularSplitModule {
    static forRoot() {
        return {
            ngModule: AngularSplitModule,
            providers: [],
        };
    }
    static forChild() {
        return {
            ngModule: AngularSplitModule,
            providers: [],
        };
    }
}
AngularSplitModule.ɵfac = function AngularSplitModule_Factory(t) { return new (t || AngularSplitModule)(); };
AngularSplitModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AngularSplitModule });
AngularSplitModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularSplitModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SplitComponent, SplitAreaDirective],
                exports: [SplitComponent, SplitAreaDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularSplitModule, { declarations: [SplitComponent, SplitAreaDirective], imports: [CommonModule], exports: [SplitComponent, SplitAreaDirective] }); })();
//# sourceMappingURL=module.js.map