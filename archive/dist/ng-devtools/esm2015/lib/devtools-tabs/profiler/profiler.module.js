import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProfilerComponent } from './profiler.component';
import { TimelineModule } from './recording/timeline/timeline.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProfilerImportDialogComponent } from './profiler-import-dialog/profiler-import-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class ProfilerModule {
}
ProfilerModule.ɵfac = function ProfilerModule_Factory(t) { return new (t || ProfilerModule)(); };
ProfilerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ProfilerModule });
ProfilerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatDialogModule,
            MatIconModule,
            MatSelectModule,
            FormsModule,
            TimelineModule,
            MatButtonModule,
            MatCardModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilerModule, [{
        type: NgModule,
        args: [{
                declarations: [ProfilerComponent, ProfilerImportDialogComponent],
                imports: [
                    CommonModule,
                    MatDialogModule,
                    MatIconModule,
                    MatSelectModule,
                    FormsModule,
                    TimelineModule,
                    MatButtonModule,
                    MatCardModule,
                ],
                exports: [ProfilerComponent],
                entryComponents: [ProfilerImportDialogComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProfilerModule, { declarations: [ProfilerComponent, ProfilerImportDialogComponent], imports: [CommonModule,
        MatDialogModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        TimelineModule,
        MatButtonModule,
        MatCardModule], exports: [ProfilerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3Byb2ZpbGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBaUJ2RCxNQUFNLE9BQU8sY0FBYzs7NEVBQWQsY0FBYztnRUFBZCxjQUFjO29FQWJoQjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLGVBQWU7WUFDZixXQUFXO1lBQ1gsY0FBYztZQUNkLGVBQWU7WUFDZixhQUFhO1NBQ2Q7dUZBSVUsY0FBYztjQWYxQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsNkJBQTZCLENBQUM7Z0JBQ2hFLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLGVBQWUsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQ2pEOzt3RkFDWSxjQUFjLG1CQWRWLGlCQUFpQixFQUFFLDZCQUE2QixhQUU3RCxZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixlQUFlO1FBQ2YsV0FBVztRQUNYLGNBQWM7UUFDZCxlQUFlO1FBQ2YsYUFBYSxhQUVMLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUHJvZmlsZXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lbGluZU1vZHVsZSB9IGZyb20gJy4vcmVjb3JkaW5nL3RpbWVsaW5lL3RpbWVsaW5lLm1vZHVsZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgUHJvZmlsZXJJbXBvcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGVyLWltcG9ydC1kaWFsb2cvcHJvZmlsZXItaW1wb3J0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtQcm9maWxlckNvbXBvbmVudCwgUHJvZmlsZXJJbXBvcnREaWFsb2dDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUaW1lbGluZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1Byb2ZpbGVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZmlsZXJJbXBvcnREaWFsb2dDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlck1vZHVsZSB7fVxuIl19