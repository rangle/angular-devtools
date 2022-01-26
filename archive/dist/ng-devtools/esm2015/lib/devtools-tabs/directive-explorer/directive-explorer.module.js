import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DirectiveExplorerComponent } from './directive-explorer.component';
import { DirectiveForestComponent } from './directive-forest/directive-forest.component';
import { FilterComponent } from './directive-forest/filter/filter.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PropertyTabModule } from './property-tab/property-tab.module';
import { DirectiveForestModule } from './directive-forest/directive-forest.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularSplitModule } from '../../vendor/angular-split/lib/module';
import * as i0 from "@angular/core";
export class DirectiveExplorerModule {
}
DirectiveExplorerModule.ɵfac = function DirectiveExplorerModule_Factory(t) { return new (t || DirectiveExplorerModule)(); };
DirectiveExplorerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DirectiveExplorerModule });
DirectiveExplorerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatTreeModule,
            MatCardModule,
            ScrollingModule,
            MatIconModule,
            CommonModule,
            PropertyTabModule,
            MatButtonModule,
            MatSnackBarModule,
            AngularSplitModule,
            DirectiveForestModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveExplorerModule, [{
        type: NgModule,
        args: [{
                declarations: [DirectiveExplorerComponent, DirectiveForestComponent, FilterComponent],
                exports: [DirectiveExplorerComponent],
                imports: [
                    MatTreeModule,
                    MatCardModule,
                    ScrollingModule,
                    MatIconModule,
                    CommonModule,
                    PropertyTabModule,
                    MatButtonModule,
                    MatSnackBarModule,
                    AngularSplitModule,
                    DirectiveForestModule,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectiveExplorerModule, { declarations: [DirectiveExplorerComponent, DirectiveForestComponent, FilterComponent], imports: [MatTreeModule,
        MatCardModule,
        ScrollingModule,
        MatIconModule,
        CommonModule,
        PropertyTabModule,
        MatButtonModule,
        MatSnackBarModule,
        AngularSplitModule,
        DirectiveForestModule], exports: [DirectiveExplorerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLWV4cGxvcmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvZGlyZWN0aXZlLWV4cGxvcmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFrQjNFLE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7eUVBQXZCLHVCQUF1Qjs2RUFiekI7WUFDUCxhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhO1lBQ2IsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixxQkFBcUI7U0FDdEI7dUZBRVUsdUJBQXVCO2NBaEJuQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsMEJBQTBCLEVBQUUsd0JBQXdCLEVBQUUsZUFBZSxDQUFDO2dCQUNyRixPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDckMsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtpQkFDdEI7YUFDRjs7d0ZBQ1ksdUJBQXVCLG1CQWZuQiwwQkFBMEIsRUFBRSx3QkFBd0IsRUFBRSxlQUFlLGFBR2xGLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZTtRQUNmLGFBQWE7UUFDYixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHFCQUFxQixhQVhiLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5pbXBvcnQgeyBEaXJlY3RpdmVFeHBsb3JlckNvbXBvbmVudCB9IGZyb20gJy4vZGlyZWN0aXZlLWV4cGxvcmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVGb3Jlc3RDb21wb25lbnQgfSBmcm9tICcuL2RpcmVjdGl2ZS1mb3Jlc3QvZGlyZWN0aXZlLWZvcmVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaXJlY3RpdmUtZm9yZXN0L2ZpbHRlci9maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFRyZWVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBQcm9wZXJ0eVRhYk1vZHVsZSB9IGZyb20gJy4vcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi5tb2R1bGUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlRm9yZXN0TW9kdWxlIH0gZnJvbSAnLi9kaXJlY3RpdmUtZm9yZXN0L2RpcmVjdGl2ZS1mb3Jlc3QubW9kdWxlJztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgQW5ndWxhclNwbGl0TW9kdWxlIH0gZnJvbSAnLi4vLi4vdmVuZG9yL2FuZ3VsYXItc3BsaXQvbGliL21vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RpcmVjdGl2ZUV4cGxvcmVyQ29tcG9uZW50LCBEaXJlY3RpdmVGb3Jlc3RDb21wb25lbnQsIEZpbHRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEaXJlY3RpdmVFeHBsb3JlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRUcmVlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgU2Nyb2xsaW5nTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByb3BlcnR5VGFiTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBBbmd1bGFyU3BsaXRNb2R1bGUsXG4gICAgRGlyZWN0aXZlRm9yZXN0TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmVFeHBsb3Jlck1vZHVsZSB7fVxuIl19