import { Component, ElementRef, Input } from '@angular/core';
import { FlamegraphNode } from '../timeline/format-records';
import { RawData } from 'ngx-flamegraph/lib/utils';

@Component({
  selector: 'ng-recording-visualizer',
  templateUrl: './recording-visualizer.component.html',
  styleUrls: ['./recording-visualizer.component.css'],
})
export class RecordingVisualizerComponent {
  profilerBars: FlamegraphNode[] = [];
  selectedEntry: FlamegraphNode = null;

  // graph options
  gradient = false;
  showLegend = true;
  showLabels = false;
  isDoughnut = false;
  legendPosition = 'bottom';
  graphData = [];
  view: any[] = [200, 200];
  colorScheme = {
    domain: ['#E71D36', '#2EC4B6', '#FF9F1C', '#011627'],
  };

  @Input() set bars(data: FlamegraphNode[]) {
    this.selectedEntry = null;
    this.profilerBars = data;
  }

  constructor(private _el: ElementRef) {}

  selectFrame(frame: RawData): void {
    this.selectedEntry = frame as FlamegraphNode;
    this.renderGraph(this.selectedEntry);
  }

  get availableWidth(): number {
    return this._el.nativeElement.querySelector('.level-profile-wrapper').offsetWidth;
  }

  formatPieChartData(flameGraphNode: FlamegraphNode): { name: string; value: number }[] {
    const graphData: { name: string; value: number }[] = [];
    flameGraphNode.original.directives.forEach(node => {
      graphData.push({
        name: node.name,
        value: node.changeDetection,
      });
      Object.keys(node.lifecycle).forEach(key => {
        graphData.push({
          name: key,
          value: node.lifecycle[key],
        });
      });
    });
    return graphData;
  }

  renderGraph(node: FlamegraphNode): void {
    this.graphData = this.formatPieChartData(node);
  }
}
