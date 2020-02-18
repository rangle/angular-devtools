import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { ProfilerComponent } from './profiler.component';
import { RecordingComponent } from './recording/recording.component';
import { TimelineModule } from './recording/timeline/timeline.module';
import { RecordingDialogComponent } from './recording/recording-dialog/recording-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProfilerComponent, RecordingComponent, RecordingDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatProgressBarModule,
    TimelineModule,
    MatButtonModule,
  ],
  exports: [ProfilerComponent],
})
export class ProfilerModule {}
