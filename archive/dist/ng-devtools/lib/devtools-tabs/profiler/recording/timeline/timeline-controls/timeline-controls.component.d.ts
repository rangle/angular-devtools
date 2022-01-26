import { EventEmitter } from '@angular/core';
import { VisualizationMode } from '../timeline.component';
import { ProfilerFrame } from 'protocol';
import * as i0 from "@angular/core";
export declare class TimelineControlsComponent {
    record: ProfilerFrame | undefined;
    estimatedFrameRate: number;
    frameColor: string;
    visualizationMode: VisualizationMode;
    empty: boolean;
    changeDetection: boolean;
    changeVisualizationMode: EventEmitter<VisualizationMode>;
    exportProfile: EventEmitter<void>;
    toggleChangeDetection: EventEmitter<boolean>;
    flameGraphMode: VisualizationMode;
    treeMapMode: VisualizationMode;
    barGraphMode: VisualizationMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineControlsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineControlsComponent, "ng-timeline-controls", never, { "record": "record"; "estimatedFrameRate": "estimatedFrameRate"; "frameColor": "frameColor"; "visualizationMode": "visualizationMode"; "empty": "empty"; "changeDetection": "changeDetection"; }, { "changeVisualizationMode": "changeVisualizationMode"; "exportProfile": "exportProfile"; "toggleChangeDetection": "toggleChangeDetection"; }, never, never>;
}
