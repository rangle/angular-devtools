import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApplicationEnvironment, ApplicationOperations, DevToolsModule } from 'ng-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChromeApplicationOperations } from './chrome-application-operations';
import { ChromeApplicationEnvironment } from './chrome-application-environment';
import * as i0 from "@angular/core";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        {
            provide: ApplicationOperations,
            useClass: ChromeApplicationOperations,
        },
        {
            provide: ApplicationEnvironment,
            useClass: ChromeApplicationEnvironment,
        },
    ], imports: [[BrowserAnimationsModule, DevToolsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [AppComponent],
                imports: [BrowserAnimationsModule, DevToolsModule],
                bootstrap: [AppComponent],
                providers: [
                    {
                        provide: ApplicationOperations,
                        useClass: ChromeApplicationOperations,
                    },
                    {
                        provide: ApplicationEnvironment,
                        useClass: ChromeApplicationEnvironment,
                    },
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent], imports: [BrowserAnimationsModule, DevToolsModule] }); })();
//# sourceMappingURL=app.module.js.map