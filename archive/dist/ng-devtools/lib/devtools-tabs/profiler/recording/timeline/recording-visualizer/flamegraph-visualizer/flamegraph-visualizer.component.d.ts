import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FlamegraphNode } from '../../record-formatter/flamegraph-formatter/flamegraph-formatter';
import { Color, RawData } from 'ngx-flamegraph/lib/utils';
import { ProfilerFrame } from 'protocol';
import { SelectedDirective, SelectedEntry } from '../timeline-visualizer.component';
import { Theme, ThemeService } from '../../../../../../theme-service';
import * as i0 from "@angular/core";
export interface GraphNode {
    directive: string;
    method: string;
    value: number;
}
export declare class FlamegraphVisualizerComponent implements OnInit, OnDestroy {
    themeService: ThemeService;
    profilerBars: FlamegraphNode[];
    view: [number, number];
    colors: Color;
    private _formatter;
    private _showChangeDetection;
    private _frame;
    private _currentThemeSubscription;
    currentTheme: Theme;
    nodeSelect: EventEmitter<SelectedEntry>;
    set frame(frame: ProfilerFrame);
    set changeDetection(changeDetection: boolean);
    constructor(themeService: ThemeService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    selectFrame(frame: RawData): void;
    formatEntryData(flameGraphNode: FlamegraphNode): SelectedDirective[];
    private _selectFrame;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlamegraphVisualizerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlamegraphVisualizerComponent, "ng-flamegraph-visualizer", never, { "frame": "frame"; "changeDetection": "changeDetection"; }, { "nodeSelect": "nodeSelect"; }, never, never>;
}
