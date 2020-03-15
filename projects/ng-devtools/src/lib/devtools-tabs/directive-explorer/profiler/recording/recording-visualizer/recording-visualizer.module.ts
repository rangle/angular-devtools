import { NgModule } from '@angular/core';
import { RecordingVisualizerComponent } from './recording-visualizer.component';
import { CommonModule } from '@angular/common';
import { NgxFlamegraphModule } from 'ngx-flamegraph';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [RecordingVisualizerComponent],
  imports: [CommonModule, NgxFlamegraphModule, NgxChartsModule],
  exports: [RecordingVisualizerComponent],
})
export class RecordingVisualizerModule {}
