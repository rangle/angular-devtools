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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXRyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3JvdXRlci10cmVlL3JvdXRlci10cmVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQVE5RCxNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7c0VBSmxCLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7dUZBSTlDLGdCQUFnQjtjQU41QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLEVBQUU7YUFDcEI7O3dGQUNZLGdCQUFnQixtQkFMWixtQkFBbUIsYUFDeEIsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLGFBQzlDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFJvdXRlclRyZWVDb21wb25lbnQgfSBmcm9tICcuL3JvdXRlci10cmVlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1JvdXRlclRyZWVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXREaWFsb2dNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJUcmVlQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVyVHJlZU1vZHVsZSB7fVxuIl19