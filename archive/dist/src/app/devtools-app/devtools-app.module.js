import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DevToolsModule as NgDevToolsModule } from 'ng-devtools';
import { DevToolsComponent } from './devtools-app.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class DevToolsModule {
}
DevToolsModule.ɵfac = function DevToolsModule_Factory(t) { return new (t || DevToolsModule)(); };
DevToolsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DevToolsModule });
DevToolsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            NgDevToolsModule,
            CommonModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: DevToolsComponent,
                    pathMatch: 'full',
                },
            ]),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsModule, [{
        type: NgModule,
        args: [{
                declarations: [DevToolsComponent],
                imports: [
                    NgDevToolsModule,
                    CommonModule,
                    RouterModule.forChild([
                        {
                            path: '',
                            component: DevToolsComponent,
                            pathMatch: 'full',
                        },
                    ]),
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DevToolsModule, { declarations: [DevToolsComponent], imports: [NgDevToolsModule,
        CommonModule, i1.RouterModule] }); })();
//# sourceMappingURL=devtools-app.module.js.map