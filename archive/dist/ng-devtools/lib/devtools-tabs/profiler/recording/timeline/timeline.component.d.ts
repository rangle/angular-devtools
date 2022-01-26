import { EventEmitter, OnDestroy } from '@angular/core';
import { ProfilerFrame } from 'protocol';
import { GraphNode } from './record-formatter/record-formatter';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare enum VisualizationMode {
    FlameGraph = 0,
    TreeMap = 1,
    BarGraph = 2
}
export declare class TimelineComponent implements OnDestroy {
    set stream(data: Observable<ProfilerFrame[]>);
    exportProfile: EventEmitter<void>;
    visualizationMode: VisualizationMode;
    changeDetection: boolean;
    frame: ProfilerFrame | null;
    private _maxDuration;
    private _subscription;
    private _allRecords;
    private _graphDataSubject;
    visualizing: boolean;
    graphData$: Observable<GraphNode[]>;
    selectFrames({ indexes }: {
        indexes: number[];
    }): void;
    get hasFrames(): boolean;
    estimateFrameRate(timeSpent: number): number;
    getColorByFrameRate(framerate: number): string;
    ngOnDestroy(): void;
    private _processFrames;
    private _generateBars;
    private _getBarStyles;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimelineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimelineComponent, "ng-recording-timeline", never, { "stream": "stream"; }, { "exportProfile": "exportProfile"; }, never, never>;
}
