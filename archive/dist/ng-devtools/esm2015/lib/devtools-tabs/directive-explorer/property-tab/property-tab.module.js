import { NgModule } from '@angular/core';
import { PropertyViewModule } from './property-tab-body/property-view/property-view.module';
import { PropertyTabComponent } from './property-tab.component';
import { PropertyTabHeaderComponent } from './property-tab-header/property-tab-header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PropertyTabBodyComponent } from './property-tab-body/property-tab-body.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ComponentMetadataComponent } from './property-tab-header/component-metadata/component-metadata.component';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class PropertyTabModule {
}
PropertyTabModule.ɵfac = function PropertyTabModule_Factory(t) { return new (t || PropertyTabModule)(); };
PropertyTabModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PropertyTabModule });
PropertyTabModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PropertyTabComponent,
                    PropertyTabHeaderComponent,
                    PropertyTabBodyComponent,
                    ComponentMetadataComponent,
                ],
                imports: [PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule],
                exports: [PropertyTabComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PropertyTabModule, { declarations: [PropertyTabComponent,
        PropertyTabHeaderComponent,
        PropertyTabBodyComponent,
        ComponentMetadataComponent], imports: [PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule], exports: [PropertyTabComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFZdkQsTUFBTSxPQUFPLGlCQUFpQjs7a0ZBQWpCLGlCQUFpQjttRUFBakIsaUJBQWlCO3VFQUhuQixDQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO3VGQUdwRixpQkFBaUI7Y0FWN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsd0JBQXdCO29CQUN4QiwwQkFBMEI7aUJBQzNCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO2dCQUMvRixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7d0ZBQ1ksaUJBQWlCLG1CQVIxQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QiwwQkFBMEIsYUFFbEIsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLGFBQ3BGLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9wZXJ0eVZpZXdNb2R1bGUgfSBmcm9tICcuL3Byb3BlcnR5LXRhYi1ib2R5L3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvcGVydHlUYWJDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5LXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvcGVydHlUYWJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5LXRhYi1oZWFkZXIvcHJvcGVydHktdGFiLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBQcm9wZXJ0eVRhYkJvZHlDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5LXRhYi1ib2R5L3Byb3BlcnR5LXRhYi1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50TWV0YWRhdGFDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5LXRhYi1oZWFkZXIvY29tcG9uZW50LW1ldGFkYXRhL2NvbXBvbmVudC1tZXRhZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcm9wZXJ0eVRhYkNvbXBvbmVudCxcbiAgICBQcm9wZXJ0eVRhYkhlYWRlckNvbXBvbmVudCxcbiAgICBQcm9wZXJ0eVRhYkJvZHlDb21wb25lbnQsXG4gICAgQ29tcG9uZW50TWV0YWRhdGFDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtQcm9wZXJ0eVZpZXdNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRFeHBhbnNpb25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbUHJvcGVydHlUYWJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVRhYk1vZHVsZSB7fVxuIl19