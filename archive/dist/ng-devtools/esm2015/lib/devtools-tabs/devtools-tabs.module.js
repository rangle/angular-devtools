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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMtdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGV2dG9vbHMtdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN6RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQWtCekMsTUFBTSxPQUFPLGlCQUFpQjs7a0ZBQWpCLGlCQUFpQjttRUFBakIsaUJBQWlCO3dFQUhqQixDQUFDLFNBQVMsQ0FBQyxZQVhiO1lBQ1AsYUFBYTtZQUNiLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7WUFDZixvQkFBb0I7U0FDckI7dUZBSVUsaUJBQWlCO2NBaEI3QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGFBQWE7b0JBQ2IsdUJBQXVCO29CQUN2QixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixhQUFhO29CQUNiLGVBQWU7b0JBQ2Ysb0JBQW9CO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ2pDOzt3RkFDWSxpQkFBaUIsbUJBZmIscUJBQXFCLGFBRWxDLGFBQWE7UUFDYixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYixlQUFlO1FBQ2Ysb0JBQW9CLGFBR1oscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZXZUb29sc1RhYnNDb21wb25lbnQgfSBmcm9tICcuL2RldnRvb2xzLXRhYnMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBEaXJlY3RpdmVFeHBsb3Jlck1vZHVsZSB9IGZyb20gJy4vZGlyZWN0aXZlLWV4cGxvcmVyL2RpcmVjdGl2ZS1leHBsb3Jlci5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZmlsZXJNb2R1bGUgfSBmcm9tICcuL3Byb2ZpbGVyL3Byb2ZpbGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0ZXJUcmVlTW9kdWxlIH0gZnJvbSAnLi9yb3V0ZXItdHJlZS9yb3V0ZXItdHJlZS5tb2R1bGUnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7IFRhYlVwZGF0ZSB9IGZyb20gJy4vdGFiLXVwZGF0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RldlRvb2xzVGFic0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgRGlyZWN0aXZlRXhwbG9yZXJNb2R1bGUsXG4gICAgUHJvZmlsZXJNb2R1bGUsXG4gICAgUm91dGVyVHJlZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1RhYlVwZGF0ZV0sXG4gIGV4cG9ydHM6IFtEZXZUb29sc1RhYnNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBEZXZUb29sc1RhYk1vZHVsZSB7fVxuIl19