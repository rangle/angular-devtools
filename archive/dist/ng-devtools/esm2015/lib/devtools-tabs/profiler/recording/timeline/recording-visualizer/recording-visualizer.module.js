import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NgxFlamegraphModule } from 'ngx-flamegraph';
import { FlamegraphVisualizerComponent } from './flamegraph-visualizer/flamegraph-visualizer.component';
import { BargraphVisualizerComponent } from './bargraph-visualizer/bargraph-visualizer.component';
import { TreeMapVisualizerComponent } from './tree-map-visualizer/tree-map-visualizer.component';
import { TimelineVisualizerComponent } from './timeline-visualizer.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ExecutionDetailsComponent } from './execution-details/execution-details.component';
import { AngularSplitModule } from '../../../../../vendor/angular-split/lib/module';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../vendor/angular-split/lib/component/split.component";
import * as i2 from "../../../../../vendor/angular-split/lib/directive/splitArea.directive";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/material/toolbar";
export class RecordingVisualizerModule {
}
RecordingVisualizerModule.ɵfac = function RecordingVisualizerModule_Factory(t) { return new (t || RecordingVisualizerModule)(); };
RecordingVisualizerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordingVisualizerModule });
RecordingVisualizerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, NgxFlamegraphModule, MatTooltipModule, MatToolbarModule, MatCardModule, AngularSplitModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordingVisualizerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ExecutionDetailsComponent,
                    BarChartComponent,
                    TimelineVisualizerComponent,
                    FlamegraphVisualizerComponent,
                    TreeMapVisualizerComponent,
                    BargraphVisualizerComponent,
                ],
                imports: [CommonModule, NgxFlamegraphModule, MatTooltipModule, MatToolbarModule, MatCardModule, AngularSplitModule],
                exports: [TimelineVisualizerComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordingVisualizerModule, { declarations: [ExecutionDetailsComponent,
        BarChartComponent,
        TimelineVisualizerComponent,
        FlamegraphVisualizerComponent,
        TreeMapVisualizerComponent,
        BargraphVisualizerComponent], imports: [CommonModule, NgxFlamegraphModule, MatTooltipModule, MatToolbarModule, MatCardModule, AngularSplitModule], exports: [TimelineVisualizerComponent] }); })();
i0.ɵɵsetComponentScope(TimelineVisualizerComponent, [i1.SplitComponent, i2.SplitAreaDirective, i3.NgSwitch, i3.NgSwitchCase, FlamegraphVisualizerComponent,
    TreeMapVisualizerComponent,
    BargraphVisualizerComponent, i3.NgIf, i4.MatCard, i5.MatToolbar, ExecutionDetailsComponent, i3.NgForOf], [i3.DecimalPipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkaW5nLXZpc3VhbGl6ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3JlY29yZGluZy90aW1lbGluZS9yZWNvcmRpbmctdmlzdWFsaXplci9yZWNvcmRpbmctdmlzdWFsaXplci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0FBYzdELE1BQU0sT0FBTyx5QkFBeUI7O2tHQUF6Qix5QkFBeUI7MkVBQXpCLHlCQUF5QjsrRUFIM0IsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixDQUFDO3VGQUd4Ryx5QkFBeUI7Y0FackMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsMkJBQTJCO29CQUMzQiw2QkFBNkI7b0JBQzdCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixDQUFDO2dCQUNuSCxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN2Qzs7d0ZBQ1kseUJBQXlCLG1CQVZsQyx5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IsMEJBQTBCO1FBQzFCLDJCQUEyQixhQUVuQixZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixhQUN4RywyQkFBMkI7dUJBTm5DLDJCQUEyQiwyRUFDM0IsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQkFBMkIsc0NBTDNCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG5pbXBvcnQgeyBOZ3hGbGFtZWdyYXBoTW9kdWxlIH0gZnJvbSAnbmd4LWZsYW1lZ3JhcGgnO1xuXG5pbXBvcnQgeyBGbGFtZWdyYXBoVmlzdWFsaXplckNvbXBvbmVudCB9IGZyb20gJy4vZmxhbWVncmFwaC12aXN1YWxpemVyL2ZsYW1lZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyZ3JhcGhWaXN1YWxpemVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXJncmFwaC12aXN1YWxpemVyL2JhcmdyYXBoLXZpc3VhbGl6ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVNYXBWaXN1YWxpemVyQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLW1hcC12aXN1YWxpemVyL3RyZWUtbWFwLXZpc3VhbGl6ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbWVsaW5lVmlzdWFsaXplckNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtdmlzdWFsaXplci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IEV4ZWN1dGlvbkRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2V4ZWN1dGlvbi1kZXRhaWxzL2V4ZWN1dGlvbi1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmd1bGFyU3BsaXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi92ZW5kb3IvYW5ndWxhci1zcGxpdC9saWIvbW9kdWxlJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRXhlY3V0aW9uRGV0YWlsc0NvbXBvbmVudCxcbiAgICBCYXJDaGFydENvbXBvbmVudCxcbiAgICBUaW1lbGluZVZpc3VhbGl6ZXJDb21wb25lbnQsXG4gICAgRmxhbWVncmFwaFZpc3VhbGl6ZXJDb21wb25lbnQsXG4gICAgVHJlZU1hcFZpc3VhbGl6ZXJDb21wb25lbnQsXG4gICAgQmFyZ3JhcGhWaXN1YWxpemVyQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ3hGbGFtZWdyYXBoTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBBbmd1bGFyU3BsaXRNb2R1bGVdLFxuICBleHBvcnRzOiBbVGltZWxpbmVWaXN1YWxpemVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkaW5nVmlzdWFsaXplck1vZHVsZSB7fVxuIl19