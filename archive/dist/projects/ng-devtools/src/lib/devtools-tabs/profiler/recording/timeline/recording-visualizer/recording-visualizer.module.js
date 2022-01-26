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
import { AngularSplitModule } from 'projects/ng-devtools/src/lib/vendor/angular-split/lib/module';
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
//# sourceMappingURL=recording-visualizer.module.js.map