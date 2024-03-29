import { ElementRef, Renderer2, OnInit, OnDestroy, NgZone } from '@angular/core';
import { SplitComponent } from '../component/split.component';
import * as i0 from "@angular/core";
export declare class SplitAreaDirective implements OnInit, OnDestroy {
    private ngZone;
    elRef: ElementRef;
    private renderer;
    private split;
    private _order;
    set order(v: number | null);
    get order(): number | null;
    private _size;
    set size(v: number | null);
    get size(): number | null;
    private _minSize;
    set minSize(v: number | null);
    get minSize(): number | null;
    private _maxSize;
    set maxSize(v: number | null);
    get maxSize(): number | null;
    private _lockSize;
    set lockSize(v: boolean);
    get lockSize(): boolean;
    private _visible;
    set visible(v: boolean);
    get visible(): boolean;
    private transitionListener;
    private readonly lockListeners;
    constructor(ngZone: NgZone, elRef: ElementRef, renderer: Renderer2, split: SplitComponent);
    ngOnInit(): void;
    setStyleOrder(value: number): void;
    setStyleFlex(grow: number, shrink: number, basis: string, isMin: boolean, isMax: boolean): void;
    lockEvents(): void;
    unlockEvents(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitAreaDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SplitAreaDirective, "as-split-area, [as-split-area]", ["asSplitArea"], { "order": "order"; "size": "size"; "minSize": "minSize"; "maxSize": "maxSize"; "lockSize": "lockSize"; "visible": "visible"; }, {}, never>;
}
