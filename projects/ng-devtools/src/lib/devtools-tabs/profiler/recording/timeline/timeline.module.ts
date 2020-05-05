import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { RecordingVisualizerModule } from './recording-visualizer/recording-visualizer.module';
import { MatButtonModule } from '@angular/material/button';
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

@NgModule({
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
    MatDialogModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    NgxFlamegraphModule,
    MatSelectModule,
  ],
  exports: [TimelineComponent],
})
export class TimelineModule {}
