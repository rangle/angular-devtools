import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevToolsComponent } from './devtools.component';
import { DevToolsTabModule } from './devtools-tabs/devtools-tabs.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export class DevToolsModule {
}
DevToolsModule.ɵfac = function DevToolsModule_Factory(t) { return new (t || DevToolsModule)(); };
DevToolsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DevToolsModule });
DevToolsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, DevToolsTabModule, MatProgressSpinnerModule, MatTooltipModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsModule, [{
        type: NgModule,
        args: [{
                declarations: [DevToolsComponent],
                imports: [CommonModule, DevToolsTabModule, MatProgressSpinnerModule, MatTooltipModule],
                exports: [DevToolsComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DevToolsModule, { declarations: [DevToolsComponent], imports: [CommonModule, DevToolsTabModule, MatProgressSpinnerModule, MatTooltipModule], exports: [DevToolsComponent] }); })();
//# sourceMappingURL=devtools.module.js.map