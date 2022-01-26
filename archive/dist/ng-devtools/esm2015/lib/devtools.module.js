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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBTzdELE1BQU0sT0FBTyxjQUFjOzs0RUFBZCxjQUFjO2dFQUFkLGNBQWM7b0VBSGhCLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDO3VGQUczRSxjQUFjO2NBTDFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDO2dCQUN0RixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3Qjs7d0ZBQ1ksY0FBYyxtQkFKVixpQkFBaUIsYUFDdEIsWUFBWSxFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixhQUMzRSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGV2VG9vbHNDb21wb25lbnQgfSBmcm9tICcuL2RldnRvb2xzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZXZUb29sc1RhYk1vZHVsZSB9IGZyb20gJy4vZGV2dG9vbHMtdGFicy9kZXZ0b29scy10YWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRGV2VG9vbHNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZXZUb29sc1RhYk1vZHVsZSwgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlXSxcbiAgZXhwb3J0czogW0RldlRvb2xzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRGV2VG9vbHNNb2R1bGUge31cbiJdfQ==