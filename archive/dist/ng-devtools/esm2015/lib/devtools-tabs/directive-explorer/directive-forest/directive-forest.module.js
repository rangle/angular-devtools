import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class DirectiveForestModule {
}
DirectiveForestModule.ɵfac = function DirectiveForestModule_Factory(t) { return new (t || DirectiveForestModule)(); };
DirectiveForestModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DirectiveForestModule });
DirectiveForestModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatCardModule, MatButtonModule, MatIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveForestModule, [{
        type: NgModule,
        args: [{
                declarations: [BreadcrumbsComponent],
                imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
                exports: [BreadcrumbsComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectiveForestModule, { declarations: [BreadcrumbsComponent], imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule], exports: [BreadcrumbsComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLWZvcmVzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL2RpcmVjdGl2ZS1mb3Jlc3QvZGlyZWN0aXZlLWZvcmVzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFIdkIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7dUZBRzNELHFCQUFxQjtjQUxqQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQztnQkFDdEUsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEM7O3dGQUNZLHFCQUFxQixtQkFKakIsb0JBQW9CLGFBQ3pCLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsYUFDM0Qsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4uL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtCcmVhZGNydW1ic0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtCcmVhZGNydW1ic0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZUZvcmVzdE1vZHVsZSB7fVxuIl19