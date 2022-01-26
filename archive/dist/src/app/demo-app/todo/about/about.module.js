import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            RouterModule.forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: AboutComponent,
                },
            ]),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutModule, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule.forChild([
                        {
                            path: '',
                            pathMatch: 'full',
                            component: AboutComponent,
                        },
                    ]),
                ],
                declarations: [AboutComponent],
                exports: [AboutComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AboutModule, { declarations: [AboutComponent], imports: [i1.RouterModule], exports: [AboutComponent] }); })();
//# sourceMappingURL=about.module.js.map