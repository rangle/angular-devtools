import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoAppComponent } from './demo-app.component';
import { RouterModule } from '@angular/router';
import { initializeMessageBus } from 'ng-devtools-backend';
import { ZippyComponent } from './zippy/zippy.component';
import { ZoneUnawareIFrameMessageBus } from 'src/zone-unaware-iframe-message-bus';
import { HeavyComponent } from './heavy/heavy.component';
import { createCustomElement } from '@angular/elements';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class DemoAppModule {
    constructor(injector) {
        const el = createCustomElement(ZippyComponent, { injector });
        customElements.define('app-zippy', el);
    }
}
DemoAppModule.ɵfac = function DemoAppModule_Factory(t) { return new (t || DemoAppModule)(i0.ɵɵinject(i0.Injector)); };
DemoAppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DemoAppModule });
DemoAppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            RouterModule.forChild([
                {
                    path: '',
                    component: DemoAppComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () => import('./todo/app.module').then((m) => m.AppModule),
                        },
                    ],
                },
            ]),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoAppModule, [{
        type: NgModule,
        args: [{
                declarations: [DemoAppComponent, HeavyComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [DemoAppComponent],
                imports: [
                    RouterModule.forChild([
                        {
                            path: '',
                            component: DemoAppComponent,
                            children: [
                                {
                                    path: '',
                                    loadChildren: () => import('./todo/app.module').then((m) => m.AppModule),
                                },
                            ],
                        },
                    ]),
                ],
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DemoAppModule, { declarations: [DemoAppComponent, HeavyComponent], imports: [i1.RouterModule], exports: [DemoAppComponent] }); })();
initializeMessageBus(new ZoneUnawareIFrameMessageBus('angular-devtools-backend', 'angular-devtools', () => window.parent));
//# sourceMappingURL=demo-app.module.js.map