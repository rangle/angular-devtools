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
//# sourceMappingURL=timeline.module.js.map