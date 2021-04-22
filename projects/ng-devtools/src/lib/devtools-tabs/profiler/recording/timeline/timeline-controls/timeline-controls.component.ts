import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VisualizationMode } from '../timeline.component';
import { ProfilerFrame } from 'protocol';

@Component({
  selector: 'ng-timeline-controls',
  templateUrl: './timeline-controls.component.html',
  styleUrls: ['./timeline-controls.component.scss'],
})
export class TimelineControlsComponent {
  @Input() record: ProfilerFrame | undefined;
  @Input() estimatedFrameRate: number;
  @Input() visualizationMode: VisualizationMode;
  @Input() empty: boolean;
  @Input() changeDetection: boolean;
  @Output() changeVisualizationMode = new EventEmitter<VisualizationMode>();
  @Output() exportProfile = new EventEmitter<void>();
  @Output() toggleChangeDetection = new EventEmitter<boolean>();
  @Output() filter = new EventEmitter<string>();

  flameGraphMode = VisualizationMode.FlameGraph;
  treeMapMode = VisualizationMode.TreeMap;
  barGraphMode = VisualizationMode.BarGraph;
}
