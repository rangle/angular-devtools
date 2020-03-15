import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AppEntry, formatFlamegraphRecords, TimelineView } from './format-records';
import { MatSlider, MatSliderChange } from '@angular/material/slider';
import { ProfilerFrame } from 'protocol';

@Component({
  selector: 'ng-recording-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  @Input() set records(data: ProfilerFrame[]) {
    this.profileRecords = formatFlamegraphRecords(data);
    this.renderGraph(this.profileRecords.timeline);
  }

  @Output() exportProfile = new EventEmitter<void>();

  @ViewChild(MatSlider) slider: MatSlider;

  profileRecords: TimelineView = {
    timeline: [],
  };
  currentView = 1;

  view: any[] = [500, 50];
  colorScheme = {
    domain: ['#E71D36', '#2EC4B6', '#FF9F1C', '#011627'],
  };
  graphData = [];

  get recordsView(): AppEntry {
    return this.profileRecords.timeline[this.currentView] || { app: [], timeSpent: 0, source: '' };
  }

  frameRate(timeSpent: number): number {
    const multiplier = Math.max(Math.ceil(timeSpent / 16) - 1, 0);
    return Math.floor(64 / 2 ** multiplier);
  }

  updateView($event: MatSliderChange): void {
    if ($event.value === undefined || $event.value > this.profileRecords.timeline.length) {
      return;
    }
    this.currentView = $event.value;
    this.slider.value = this.currentView;
  }

  move(number: number): void {
    const newVal = this.currentView + number;
    if (newVal > 0 && newVal < this.profileRecords.timeline.length) {
      this.currentView = newVal;
      this.slider.value = this.currentView;
    }
  }

  renderGraph(timeline: AppEntry[]): void {
    const series = timeline.map((node, index) => ({
      name: node.source,
      value: +node.timeSpent.toFixed(2) * 10,
      index,
    }));
    this.graphData = [
      {
        name: 'Profiler Timeline',
        series,
      },
    ];
  }

  selectFrame(data: any): void {
    this.currentView = data.index;
  }
}
