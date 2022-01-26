import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevToolsTabsComponent } from './devtools-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { DirectiveExplorerModule } from './directive-explorer/directive-explorer.module';
import { ProfilerModule } from './profiler/profiler.module';
import { RouterTreeModule } from './router-tree/router-tree.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TabUpdate } from './tab-update';
import * as i0 from "@angular/core";
export class DevToolsTabModule {
}
DevToolsTabModule.ɵfac = function DevToolsTabModule_Factory(t) { return new (t || DevToolsTabModule)(); };
DevToolsTabModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DevToolsTabModule });
DevToolsTabModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TabUpdate], imports: [[
            MatTabsModule,
            MatIconModule,
            DirectiveExplorerModule,
            ProfilerModule,
            RouterTreeModule,
            CommonModule,
            MatMenuModule,
            MatButtonModule,
            MatSlideToggleModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsTabModule, [{
        type: NgModule,
        args: [{
                declarations: [DevToolsTabsComponent],
                imports: [
                    MatTabsModule,
                    MatIconModule,
                    DirectiveExplorerModule,
                    ProfilerModule,
                    RouterTreeModule,
                    CommonModule,
                    MatMenuModule,
                    MatButtonModule,
                    MatSlideToggleModule,
                ],
                providers: [TabUpdate],
                exports: [DevToolsTabsComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DevToolsTabModule, { declarations: [DevToolsTabsComponent], imports: [MatTabsModule,
        MatIconModule,
        DirectiveExplorerModule,
        ProfilerModule,
        RouterTreeModule,
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        MatSlideToggleModule], exports: [DevToolsTabsComponent] }); })();
//# sourceMappingURL=devtools-tabs.module.js.map