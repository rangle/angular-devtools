import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTreeComponent } from './router-tree.component';
import * as i0 from "@angular/core";
export class RouterTreeModule {
}
RouterTreeModule.ɵfac = function RouterTreeModule_Factory(t) { return new (t || RouterTreeModule)(); };
RouterTreeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RouterTreeModule });
RouterTreeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatDialogModule, MatSelectModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouterTreeModule, [{
        type: NgModule,
        args: [{
                declarations: [RouterTreeComponent],
                imports: [CommonModule, MatDialogModule, MatSelectModule],
                exports: [RouterTreeComponent],
                entryComponents: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RouterTreeModule, { declarations: [RouterTreeComponent], imports: [CommonModule, MatDialogModule, MatSelectModule], exports: [RouterTreeComponent] }); })();
//# sourceMappingURL=router-tree.module.js.map