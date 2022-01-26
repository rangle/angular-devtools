import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { RecordingVisualizerModule } from './recording-visualizer/recording-visualizer.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { NgxFlamegraphModule } from 'ngx-flamegraph';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FrameSelectorComponent } from './frame-selector/frame-selector.component';
import { TimelineControlsComponent } from './timeline-controls/timeline-controls.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RecordingDialogComponent } from './recording-modal/recording-dialog/recording-dialog.component';
import { RecordingModalComponent } from './recording-modal/recording-modal.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./recording-visualizer/timeline-visualizer.component";
export class TimelineModule {
}
TimelineModule.ɵfac = function TimelineModule_Factory(t) { return new (t || TimelineModule)(); };
TimelineModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TimelineModule });
TimelineModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            ScrollingModule,
            CommonModule,
            FormsModule,
            RecordingVisualizerModule,
            MatCheckboxModule,
            MatDialogModule,
            MatProgressBarModule,
            MatButtonModule,
            MatTooltipModule,
            MatIconModule,
            MatCardModule,
            NgxFlamegraphModule,
            MatSelectModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimelineModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TimelineComponent,
                    RecordingDialogComponent,
                    RecordingModalComponent,
                    FrameSelectorComponent,
                    TimelineControlsComponent,
                ],
                imports: [
                    ScrollingModule,
                    CommonModule,
                    FormsModule,
                    RecordingVisualizerModule,
                    MatCheckboxModule,
                    MatDialogModule,
                    MatProgressBarModule,
                    MatButtonModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatCardModule,
                    NgxFlamegraphModule,
                    MatSelectModule,
                ],
                exports: [TimelineComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TimelineModule, { declarations: [TimelineComponent,
        RecordingDialogComponent,
        RecordingModalComponent,
        FrameSelectorComponent,
        TimelineControlsComponent], imports: [ScrollingModule,
        CommonModule,
        FormsModule,
        RecordingVisualizerModule,
        MatCheckboxModule,
        MatDialogModule,
        MatProgressBarModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatCardModule,
        NgxFlamegraphModule,
        MatSelectModule], exports: [TimelineComponent] }); })();
i0.ɵɵsetComponentScope(TimelineComponent, [i1.NgIf, RecordingModalComponent,
    TimelineControlsComponent,
    FrameSelectorComponent, i2.TimelineVisualizerComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3JlY29yZGluZy90aW1lbGluZS90aW1lbGluZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDekcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBMkIzRCxNQUFNLE9BQU8sY0FBYzs7NEVBQWQsY0FBYztnRUFBZCxjQUFjO29FQWpCaEI7WUFDUCxlQUFlO1lBQ2YsWUFBWTtZQUNaLFdBQVc7WUFDWCx5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixlQUFlO1NBQ2hCO3VGQUdVLGNBQWM7Y0F6QjFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO29CQUNqQix3QkFBd0I7b0JBQ3hCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0Qix5QkFBeUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLFlBQVk7b0JBQ1osV0FBVztvQkFDWCx5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3Qjs7d0ZBQ1ksY0FBYyxtQkF2QnZCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0Qix5QkFBeUIsYUFHekIsZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZSxhQUVQLGlCQUFpQjt1QkFyQnpCLGlCQUFpQixZQUVqQix1QkFBdUI7SUFFdkIseUJBQXlCO0lBRHpCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGltZWxpbmVDb21wb25lbnQgfSBmcm9tICcuL3RpbWVsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWNvcmRpbmdWaXN1YWxpemVyTW9kdWxlIH0gZnJvbSAnLi9yZWNvcmRpbmctdmlzdWFsaXplci9yZWNvcmRpbmctdmlzdWFsaXplci5tb2R1bGUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hGbGFtZWdyYXBoTW9kdWxlIH0gZnJvbSAnbmd4LWZsYW1lZ3JhcGgnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEZyYW1lU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1lLXNlbGVjdG9yL2ZyYW1lLXNlbGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lbGluZUNvbnRyb2xzQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1jb250cm9scy90aW1lbGluZS1jb250cm9scy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBSZWNvcmRpbmdEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3JlY29yZGluZy1tb2RhbC9yZWNvcmRpbmctZGlhbG9nL3JlY29yZGluZy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFJlY29yZGluZ01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9yZWNvcmRpbmctbW9kYWwvcmVjb3JkaW5nLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUaW1lbGluZUNvbXBvbmVudCxcbiAgICBSZWNvcmRpbmdEaWFsb2dDb21wb25lbnQsXG4gICAgUmVjb3JkaW5nTW9kYWxDb21wb25lbnQsXG4gICAgRnJhbWVTZWxlY3RvckNvbXBvbmVudCxcbiAgICBUaW1lbGluZUNvbnRyb2xzQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgU2Nyb2xsaW5nTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWNvcmRpbmdWaXN1YWxpemVyTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTmd4RmxhbWVncmFwaE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtUaW1lbGluZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lTW9kdWxlIHt9XG4iXX0=