import { ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { TreeMapNode } from '../../record-formatter/tree-map-formatter';
import { ProfilerFrame } from 'protocol';
import * as i0 from "@angular/core";
export declare class TreeMapVisualizerComponent implements OnInit, OnDestroy {
    private _ngZone;
    private _formatter;
    set frame(frame: ProfilerFrame);
    constructor(_ngZone: NgZone);
    private resize$;
    private _throttledResizeSubscription;
    private _resizeObserver;
    treeMapRecords: TreeMapNode;
    tree: ElementRef;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _renderTree;
    private _removeTree;
    private _createTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeMapVisualizerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeMapVisualizerComponent, "ng-tree-map-visualizer", never, { "frame": "frame"; }, {}, never, never>;
}
