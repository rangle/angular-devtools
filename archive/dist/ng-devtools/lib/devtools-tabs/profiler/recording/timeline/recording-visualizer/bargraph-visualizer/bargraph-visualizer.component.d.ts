import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { BargraphNode } from '../../record-formatter/bargraph-formatter';
import { ProfilerFrame } from 'protocol';
import { SelectedDirective, SelectedEntry } from '../timeline-visualizer.component';
import { Theme, ThemeService } from '../../../../../../theme-service';
import * as i0 from "@angular/core";
export declare class BargraphVisualizerComponent implements OnInit, OnDestroy {
    themeService: ThemeService;
    barColor: string;
    profileRecords: BargraphNode[];
    nodeSelect: EventEmitter<SelectedEntry>;
    private _formatter;
    private _currentThemeSubscription;
    currentTheme: Theme;
    set frame(data: ProfilerFrame);
    constructor(themeService: ThemeService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    formatEntryData(bargraphNode: BargraphNode): SelectedDirective[];
    selectNode(node: BargraphNode): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BargraphVisualizerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BargraphVisualizerComponent, "ng-bargraph-visualizer", never, { "frame": "frame"; }, { "nodeSelect": "nodeSelect"; }, never, never>;
}
