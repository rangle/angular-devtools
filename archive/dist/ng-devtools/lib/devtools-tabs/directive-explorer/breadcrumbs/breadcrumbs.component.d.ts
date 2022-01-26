import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FlatNode } from '../directive-forest/component-data-source';
import * as i0 from "@angular/core";
export declare class BreadcrumbsComponent implements OnInit, AfterViewInit, OnChanges {
    parents: FlatNode[];
    handleSelect: EventEmitter<any>;
    mouseOverNode: EventEmitter<any>;
    mouseLeaveNode: EventEmitter<any>;
    breadcrumbsScrollContent: ElementRef;
    showScrollLeftButton: boolean;
    showScrollRightButton: boolean;
    updateScrollButtonVisibility$: Subject<void>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    onResize(): void;
    scroll(pixels: number): void;
    updateScrollButtonVisibility(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbsComponent, "ng-breadcrumbs", never, { "parents": "parents"; }, { "handleSelect": "handleSelect"; "mouseOverNode": "mouseOverNode"; "mouseLeaveNode": "mouseLeaveNode"; }, never, never>;
}
