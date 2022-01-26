import { NgModule } from '@angular/core';
import { PropertyViewBodyComponent } from './property-view-body/property-view-body.component';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PropertyViewHeaderComponent } from './property-view-header/property-view-header.component';
import { PropertyViewComponent } from './property-view.component';
import { PropertyViewTreeComponent } from './property-view-body/property-view-tree/property-view-tree.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PropertyEditorComponent } from './property-view-body/property-view-tree/property-editor/property-editor.component';
import { FormsModule } from '@angular/forms';
import { PropertyPreviewComponent } from './property-view-body/property-view-tree/property-preview/property-preview.component';
import * as i0 from "@angular/core";
export class PropertyViewModule {
}
PropertyViewModule.ɵfac = function PropertyViewModule_Factory(t) { return new (t || PropertyViewModule)(); };
PropertyViewModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PropertyViewModule });
PropertyViewModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatToolbarModule,
            MatIconModule,
            MatTreeModule,
            CommonModule,
            MatExpansionModule,
            DragDropModule,
            FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PropertyViewBodyComponent,
                    PropertyViewHeaderComponent,
                    PropertyViewComponent,
                    PropertyViewTreeComponent,
                    PropertyEditorComponent,
                    PropertyPreviewComponent,
                ],
                imports: [
                    MatToolbarModule,
                    MatIconModule,
                    MatTreeModule,
                    CommonModule,
                    MatExpansionModule,
                    DragDropModule,
                    FormsModule
                ],
                exports: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PropertyViewModule, { declarations: [PropertyViewBodyComponent,
        PropertyViewHeaderComponent,
        PropertyViewComponent,
        PropertyViewTreeComponent,
        PropertyEditorComponent,
        PropertyPreviewComponent], imports: [MatToolbarModule,
        MatIconModule,
        MatTreeModule,
        CommonModule,
        MatExpansionModule,
        DragDropModule,
        FormsModule], exports: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktdmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXRhYi9wcm9wZXJ0eS10YWItYm9keS9wcm9wZXJ0eS12aWV3L3Byb3BlcnR5LXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBQzVILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQzs7QUFzQi9ILE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7b0VBQWxCLGtCQUFrQjt3RUFYcEI7WUFDUCxnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGFBQWE7WUFDYixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxXQUFXO1NBQ1o7dUZBR1Usa0JBQWtCO2NBcEI5QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHlCQUF5QjtvQkFDekIsMkJBQTJCO29CQUMzQixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsdUJBQXVCO29CQUN2Qix3QkFBd0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRSxDQUFDLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLHFCQUFxQixDQUFDO2FBQ3pGOzt3RkFDWSxrQkFBa0IsbUJBbEIzQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLHdCQUF3QixhQUd4QixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGFBQWE7UUFDYixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxXQUFXLGFBRUgseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb3BlcnR5Vmlld0JvZHlDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5LXZpZXctYm9keS9wcm9wZXJ0eS12aWV3LWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRUcmVlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQgeyBQcm9wZXJ0eVZpZXdIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5LXZpZXctaGVhZGVyL3Byb3BlcnR5LXZpZXctaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9wZXJ0eVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5LXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFByb3BlcnR5Vmlld1RyZWVDb21wb25lbnQgfSBmcm9tICcuL3Byb3BlcnR5LXZpZXctYm9keS9wcm9wZXJ0eS12aWV3LXRyZWUvcHJvcGVydHktdmlldy10cmVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IFByb3BlcnR5RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS12aWV3LWJvZHkvcHJvcGVydHktdmlldy10cmVlL3Byb3BlcnR5LWVkaXRvci9wcm9wZXJ0eS1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJvcGVydHlQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9wZXJ0eS12aWV3LWJvZHkvcHJvcGVydHktdmlldy10cmVlL3Byb3BlcnR5LXByZXZpZXcvcHJvcGVydHktcHJldmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQcm9wZXJ0eVZpZXdCb2R5Q29tcG9uZW50LFxuICAgIFByb3BlcnR5Vmlld0hlYWRlckNvbXBvbmVudCxcbiAgICBQcm9wZXJ0eVZpZXdDb21wb25lbnQsXG4gICAgUHJvcGVydHlWaWV3VHJlZUNvbXBvbmVudCxcbiAgICBQcm9wZXJ0eUVkaXRvckNvbXBvbmVudCxcbiAgICBQcm9wZXJ0eVByZXZpZXdDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtQcm9wZXJ0eVZpZXdCb2R5Q29tcG9uZW50LCBQcm9wZXJ0eVZpZXdIZWFkZXJDb21wb25lbnQsIFByb3BlcnR5Vmlld0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Vmlld01vZHVsZSB7fVxuIl19