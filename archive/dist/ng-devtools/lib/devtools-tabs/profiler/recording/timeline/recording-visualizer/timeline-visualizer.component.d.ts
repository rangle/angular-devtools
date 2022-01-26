import { VisualizationMode } from '../timeline.component';
import { ProfilerFrame } from 'protocol';
import { BargraphNode } from '../record-formatter/bargraph-formatter';
import { FlamegraphNode } from '../record-formatter/flamegraph-formatter';
import * as i0 from "@angular/core";
export interface SelectedEntry {
    entry: BargraphNode | FlamegraphNode;
    selectedDirectives: SelectedDirective[];
    parentHierarchy?: {
        name: string;
    }[];
}
export interface SelectedDirective {
    directive: string;
    method: string;
    value: number;
}
export declare class TimelineVisualizerComponent {
    set visualizationMode(mode: VisualizationMode);
    frame: ProfilerFrame;
    changeDetection: boolean;
    cmpVisualizationModes: typeof VisualizationMode;
    selectedEntry: BargraphNode | FlamegraphNode | null;
    selectedDirectives: SelectedDirective[];
    parentHierarchy: {
        name: string;
    }[];
    _visualizationMode: VisualizationMode;
    handleNodeSelect({ entry, parentHierarchy, selectedDirectives }: SelectedEntry): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineVisualizerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineVisualizerComponent, "ng-timeline-visualizer", never, { "visualizationMode": "visualizationMode"; "frame": "frame"; "changeDetection": "changeDetection"; }, {}, never, never>;
}
