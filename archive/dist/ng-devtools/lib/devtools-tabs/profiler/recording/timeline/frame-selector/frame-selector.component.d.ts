import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { GraphNode } from '../record-formatter/record-formatter';
import { Observable } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { TabUpdate } from '../../../../tab-update';
import * as i0 from "@angular/core";
export declare class FrameSelectorComponent implements OnInit, OnDestroy {
    private _tabUpdate;
    barContainer: ElementRef;
    set graphData$(graphData: Observable<GraphNode[]>);
    get graphData$(): Observable<GraphNode[]>;
    selectFrames: EventEmitter<{
        indexes: number[];
    }>;
    viewport: CdkVirtualScrollViewport;
    startFrameIndex: number;
    endFrameIndex: number;
    selectedFrameIndexes: Set<number>;
    frameCount: number;
    get itemWidth(): number;
    private _graphData$;
    private _graphDataSubscription;
    private _tabUpdateSubscription;
    constructor(_tabUpdate: TabUpdate);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get selectionLabel(): string;
    private _smartJoinIndexLabels;
    move(value: number): void;
    private _selectFrames;
    handleFrameSelection(idx: number, event: MouseEvent): void;
    private _ensureVisible;
    static ɵfac: i0.ɵɵFactoryDeclaration<FrameSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FrameSelectorComponent, "ng-frame-selector", never, { "graphData$": "graphData$"; }, { "selectFrames": "selectFrames"; }, never, never>;
}
