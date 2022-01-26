import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoApplicationOperations } from '../demo-application-operations';
import { ApplicationEnvironment, ApplicationOperations } from 'ng-devtools';
import { DemoApplicationEnvironment } from '../demo-application-environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        {
            provide: ApplicationOperations,
            useClass: DemoApplicationOperations,
        },
        {
            provide: ApplicationEnvironment,
            useClass: DemoApplicationEnvironment,
        },
    ], imports: [[
            BrowserAnimationsModule,
            RouterModule.forRoot([
                {
                    path: '',
                    loadChildren: () => import('./devtools-app/devtools-app.module').then((m) => m.DevToolsModule),
                    pathMatch: 'full',
                },
                {
                    path: 'demo-app',
                    loadChildren: () => import('./demo-app/demo-app.module').then((m) => m.DemoAppModule),
                },
            ]),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [AppComponent],
                imports: [
                    BrowserAnimationsModule,
                    RouterModule.forRoot([
                        {
                            path: '',
                            loadChildren: () => import('./devtools-app/devtools-app.module').then((m) => m.DevToolsModule),
                            pathMatch: 'full',
                        },
                        {
                            path: 'demo-app',
                            loadChildren: () => import('./demo-app/demo-app.module').then((m) => m.DemoAppModule),
                        },
                    ]),
                ],
                providers: [
                    {
                        provide: ApplicationOperations,
                        useClass: DemoApplicationOperations,
                    },
                    {
                        provide: ApplicationEnvironment,
                        useClass: DemoApplicationEnvironment,
                    },
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent], imports: [BrowserAnimationsModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map