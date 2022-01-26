// tslint:disable
import { Component, Input, Output, ChangeDetectionStrategy, ViewChildren, EventEmitter, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { getInputPositiveNumber, getInputBoolean, isUserSizesValid, getAreaMinSize, getAreaMaxSize, getPointFromEvent, getElementPixelSize, getGutterSideAbsorptionCapacity, updateAreaSize, } from '../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["gutterEls"];
function SplitComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2, 3);
    i0.ɵɵlistener("mousedown", function SplitComponent_ng_template_1_div_0_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r7); const index_r1 = i0.ɵɵnextContext().index; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.startDragging($event, index_r1 * 2 + 1, index_r1 + 1); })("touchstart", function SplitComponent_ng_template_1_div_0_Template_div_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r7); const index_r1 = i0.ɵɵnextContext().index; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.startDragging($event, index_r1 * 2 + 1, index_r1 + 1); })("mouseup", function SplitComponent_ng_template_1_div_0_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r7); const index_r1 = i0.ɵɵnextContext().index; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.clickGutter($event, index_r1 + 1); })("touchend", function SplitComponent_ng_template_1_div_0_Template_div_touchend_0_listener($event) { i0.ɵɵrestoreView(_r7); const index_r1 = i0.ɵɵnextContext().index; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.clickGutter($event, index_r1 + 1); });
    i0.ɵɵelement(2, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r1 = i0.ɵɵnextContext().index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("flex-basis", ctx_r3.gutterSize, "px")("order", index_r1 * 2 + 1);
} }
function SplitComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SplitComponent_ng_template_1_div_0_Template, 3, 4, "div", 1);
} if (rf & 2) {
    const last_r2 = ctx.last;
    i0.ɵɵproperty("ngIf", last_r2 === false);
} }
const _c1 = ["*"];
/**
 * angular-split
 *
 *
 *  PERCENT MODE ([unit]="'percent'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |       20                 30                 20                 15                 15      | <-- [size]="x"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |calc(20% - 8px)    calc(30% - 12px)   calc(20% - 8px)    calc(15% - 6px)    calc(15% - 6px)| <-- CSS flex-basis property (with flex-grow&shrink at 0)
 * |     152px              228px              152px              114px              114px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *  flex-basis = calc( { area.size }% - { area.size/100 * nbGutter*gutterSize }px );
 *
 *
 *  PIXEL MODE ([unit]="'pixel'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |      100                250                 *                 150                100      | <-- [size]="y"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |   0 0 100px          0 0 250px           1 1 auto          0 0 150px          0 0 100px   | <-- CSS flex property (flex-grow/flex-shrink/flex-basis)
 * |     100px              250px              200px              150px              100px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *
 */
export class SplitComponent {
    constructor(ngZone, elRef, cdRef, renderer) {
        this.ngZone = ngZone;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this._direction = 'horizontal';
        ////
        this._unit = 'percent';
        ////
        this._gutterSize = 11;
        ////
        this._gutterStep = 1;
        ////
        this._restrictMove = false;
        ////
        this._useTransition = false;
        ////
        this._disabled = false;
        ////
        this._dir = 'ltr';
        ////
        this._gutterDblClickDuration = 0;
        ////
        this.dragStart = new EventEmitter(false);
        this.dragEnd = new EventEmitter(false);
        this.gutterClick = new EventEmitter(false);
        this.gutterDblClick = new EventEmitter(false);
        this.dragProgressSubject = new Subject();
        this.dragProgress$ = this.dragProgressSubject.asObservable();
        ////
        this.isDragging = false;
        this.dragListeners = [];
        this.snapshot = null;
        this.startPoint = null;
        this.endPoint = null;
        this.displayedAreas = [];
        this.hidedAreas = [];
        this._clickTimeout = null;
        // To force adding default class, could be override by user @Input() or not
        this.direction = this._direction;
    }
    set direction(v) {
        this._direction = v === 'vertical' ? 'vertical' : 'horizontal';
        this.renderer.addClass(this.elRef.nativeElement, `as-${this._direction}`);
        this.renderer.removeClass(this.elRef.nativeElement, `as-${this._direction === 'vertical' ? 'horizontal' : 'vertical'}`);
        this.build(false, false);
    }
    get direction() {
        return this._direction;
    }
    set unit(v) {
        this._unit = v === 'pixel' ? 'pixel' : 'percent';
        this.renderer.addClass(this.elRef.nativeElement, `as-${this._unit}`);
        this.renderer.removeClass(this.elRef.nativeElement, `as-${this._unit === 'pixel' ? 'percent' : 'pixel'}`);
        this.build(false, true);
    }
    get unit() {
        return this._unit;
    }
    set gutterSize(v) {
        this._gutterSize = getInputPositiveNumber(v, 11);
        this.build(false, false);
    }
    get gutterSize() {
        return this._gutterSize;
    }
    set gutterStep(v) {
        this._gutterStep = getInputPositiveNumber(v, 1);
    }
    get gutterStep() {
        return this._gutterStep;
    }
    set restrictMove(v) {
        this._restrictMove = getInputBoolean(v);
    }
    get restrictMove() {
        return this._restrictMove;
    }
    set useTransition(v) {
        this._useTransition = getInputBoolean(v);
        if (this._useTransition)
            this.renderer.addClass(this.elRef.nativeElement, 'as-transition');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-transition');
    }
    get useTransition() {
        return this._useTransition;
    }
    set disabled(v) {
        this._disabled = getInputBoolean(v);
        if (this._disabled)
            this.renderer.addClass(this.elRef.nativeElement, 'as-disabled');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-disabled');
    }
    get disabled() {
        return this._disabled;
    }
    set dir(v) {
        this._dir = v === 'rtl' ? 'rtl' : 'ltr';
        this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
    }
    get dir() {
        return this._dir;
    }
    set gutterDblClickDuration(v) {
        this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
    }
    get gutterDblClickDuration() {
        return this._gutterDblClickDuration;
    }
    get transitionEnd() {
        return new Observable((subscriber) => (this.transitionEndSubscriber = subscriber)).pipe(debounceTime(20));
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => {
            // To avoid transition at first rendering
            setTimeout(() => this.renderer.addClass(this.elRef.nativeElement, 'as-init'));
        });
    }
    getNbGutters() {
        return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
    }
    addArea(component) {
        const newArea = {
            component,
            order: 0,
            size: 0,
            minSize: null,
            maxSize: null,
        };
        if (component.visible === true) {
            this.displayedAreas.push(newArea);
            this.build(true, true);
        }
        else {
            this.hidedAreas.push(newArea);
        }
    }
    removeArea(component) {
        if (this.displayedAreas.some((a) => a.component === component)) {
            const area = this.displayedAreas.find((a) => a.component === component);
            this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
            this.build(true, true);
        }
        else if (this.hidedAreas.some((a) => a.component === component)) {
            const area = this.hidedAreas.find((a) => a.component === component);
            this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
        }
    }
    updateArea(component, resetOrders, resetSizes) {
        if (component.visible === true) {
            this.build(resetOrders, resetSizes);
        }
    }
    showArea(component) {
        const area = this.hidedAreas.find((a) => a.component === component);
        if (area === undefined) {
            return;
        }
        const areas = this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
        this.displayedAreas.push(...areas);
        this.build(true, true);
    }
    hideArea(comp) {
        const area = this.displayedAreas.find((a) => a.component === comp);
        if (area === undefined) {
            return;
        }
        const areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
        areas.forEach((area) => {
            area.order = 0;
            area.size = 0;
        });
        this.hidedAreas.push(...areas);
        this.build(true, true);
    }
    getVisibleAreaSizes() {
        return this.displayedAreas.map((a) => (a.size === null ? '*' : a.size));
    }
    setVisibleAreaSizes(sizes) {
        if (sizes.length !== this.displayedAreas.length) {
            return false;
        }
        const formatedSizes = sizes.map((s) => getInputPositiveNumber(s, null));
        const isValid = isUserSizesValid(this.unit, formatedSizes);
        if (isValid === false) {
            return false;
        }
        // @ts-ignore
        this.displayedAreas.forEach((area, i) => (area.component._size = formatedSizes[i]));
        this.build(false, true);
        return true;
    }
    build(resetOrders, resetSizes) {
        this.stopDragging();
        // ¤ AREAS ORDER
        if (resetOrders === true) {
            // If user provided 'order' for each area, use it to sort them.
            if (this.displayedAreas.every((a) => a.component.order !== null)) {
                this.displayedAreas.sort((a, b) => a.component.order - b.component.order);
            }
            // Then set real order with multiples of 2, numbers between will be used by gutters.
            this.displayedAreas.forEach((area, i) => {
                area.order = i * 2;
                area.component.setStyleOrder(area.order);
            });
        }
        // ¤ AREAS SIZE
        if (resetSizes === true) {
            const useUserSizes = isUserSizesValid(this.unit, this.displayedAreas.map((a) => a.component.size));
            switch (this.unit) {
                case 'percent': {
                    const defaultSize = 100 / this.displayedAreas.length;
                    this.displayedAreas.forEach((area) => {
                        area.size = useUserSizes ? area.component.size : defaultSize;
                        area.minSize = getAreaMinSize(area);
                        area.maxSize = getAreaMaxSize(area);
                    });
                    break;
                }
                case 'pixel': {
                    if (useUserSizes) {
                        this.displayedAreas.forEach((area) => {
                            area.size = area.component.size;
                            area.minSize = getAreaMinSize(area);
                            area.maxSize = getAreaMaxSize(area);
                        });
                    }
                    else {
                        const wildcardSizeAreas = this.displayedAreas.filter((a) => a.component.size === null);
                        // No wildcard area > Need to select one arbitrarily > first
                        if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
                            this.displayedAreas.forEach((area, i) => {
                                area.size = i === 0 ? null : area.component.size;
                                area.minSize = i === 0 ? null : getAreaMinSize(area);
                                area.maxSize = i === 0 ? null : getAreaMaxSize(area);
                            });
                        }
                        // More than one wildcard area > Need to keep only one arbitrarly > first
                        else if (wildcardSizeAreas.length > 1) {
                            let alreadyGotOne = false;
                            this.displayedAreas.forEach((area) => {
                                if (area.component.size === null) {
                                    if (alreadyGotOne === false) {
                                        area.size = null;
                                        area.minSize = null;
                                        area.maxSize = null;
                                        alreadyGotOne = true;
                                    }
                                    else {
                                        area.size = 100;
                                        area.minSize = null;
                                        area.maxSize = null;
                                    }
                                }
                                else {
                                    area.size = area.component.size;
                                    area.minSize = getAreaMinSize(area);
                                    area.maxSize = getAreaMaxSize(area);
                                }
                            });
                        }
                    }
                    break;
                }
            }
        }
        this.refreshStyleSizes();
        this.cdRef.markForCheck();
    }
    refreshStyleSizes() {
        ///////////////////////////////////////////
        // PERCENT MODE
        if (this.unit === 'percent') {
            // Only one area > flex-basis 100%
            if (this.displayedAreas.length === 1) {
                this.displayedAreas[0].component.setStyleFlex(0, 0, `100%`, false, false);
            }
            // Multiple areas > use each percent basis
            else {
                const sumGutterSize = this.getNbGutters() * this.gutterSize;
                this.displayedAreas.forEach((area) => {
                    area.component.setStyleFlex(0, 0, `calc( ${area.size}% - ${(area.size / 100) * sumGutterSize}px )`, area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                });
            }
        }
        ///////////////////////////////////////////
        // PIXEL MODE
        else if (this.unit === 'pixel') {
            this.displayedAreas.forEach((area) => {
                // Area with wildcard size
                if (area.size === null) {
                    if (this.displayedAreas.length === 1) {
                        area.component.setStyleFlex(1, 1, `100%`, false, false);
                    }
                    else {
                        area.component.setStyleFlex(1, 1, `auto`, false, false);
                    }
                }
                // Area with pixel size
                else {
                    // Only one area > flex-basis 100%
                    if (this.displayedAreas.length === 1) {
                        area.component.setStyleFlex(0, 0, `100%`, false, false);
                    }
                    // Multiple areas > use each pixel basis
                    else {
                        area.component.setStyleFlex(0, 0, `${area.size}px`, area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                    }
                }
            });
        }
    }
    clickGutter(event, gutterNum) {
        const tempPoint = getPointFromEvent(event);
        // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick
        if (this.startPoint && this.startPoint.x === tempPoint.x && this.startPoint.y === tempPoint.y) {
            // If timeout in progress and new click > clearTimeout & dblClickEvent
            if (this._clickTimeout !== null) {
                window.clearTimeout(this._clickTimeout);
                this._clickTimeout = null;
                this.notify('dblclick', gutterNum);
                this.stopDragging();
            }
            // Else start timeout to call clickEvent at end
            else {
                this._clickTimeout = window.setTimeout(() => {
                    this._clickTimeout = null;
                    this.notify('click', gutterNum);
                    this.stopDragging();
                }, this.gutterDblClickDuration);
            }
        }
    }
    startDragging(event, gutterOrder, gutterNum) {
        event.preventDefault();
        event.stopPropagation();
        this.startPoint = getPointFromEvent(event);
        if (this.startPoint === null || this.disabled === true) {
            return;
        }
        this.snapshot = {
            gutterNum,
            lastSteppedOffset: 0,
            allAreasSizePixel: getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
            allInvolvedAreasSizePercent: 100,
            areasBeforeGutter: [],
            areasAfterGutter: [],
        };
        this.displayedAreas.forEach((area) => {
            const areaSnapshot = {
                area,
                sizePixelAtStart: getElementPixelSize(area.component.elRef, this.direction),
                sizePercentAtStart: (this.unit === 'percent' ? area.size : -1), // If pixel mode, anyway, will not be used.
            };
            if (area.order < gutterOrder) {
                if (this.restrictMove === true) {
                    this.snapshot.areasBeforeGutter = [areaSnapshot];
                }
                else {
                    this.snapshot.areasBeforeGutter.unshift(areaSnapshot);
                }
            }
            else if (area.order > gutterOrder) {
                if (this.restrictMove === true) {
                    if (this.snapshot.areasAfterGutter.length === 0)
                        this.snapshot.areasAfterGutter = [areaSnapshot];
                }
                else {
                    this.snapshot.areasAfterGutter.push(areaSnapshot);
                }
            }
        });
        this.snapshot.allInvolvedAreasSizePercent = [
            ...this.snapshot.areasBeforeGutter,
            ...this.snapshot.areasAfterGutter,
        ].reduce((t, a) => t + a.sizePercentAtStart, 0);
        if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
            return;
        }
        this.dragListeners.push(this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this)));
        this.dragListeners.push(this.renderer.listen('document', 'touchend', this.stopDragging.bind(this)));
        this.dragListeners.push(this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this)));
        this.ngZone.runOutsideAngular(() => {
            this.dragListeners.push(this.renderer.listen('document', 'mousemove', this.dragEvent.bind(this)));
            this.dragListeners.push(this.renderer.listen('document', 'touchmove', this.dragEvent.bind(this)));
        });
        this.displayedAreas.forEach((area) => area.component.lockEvents());
        this.isDragging = true;
        this.renderer.addClass(this.elRef.nativeElement, 'as-dragging');
        this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
        this.notify('start', this.snapshot.gutterNum);
    }
    dragEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this._clickTimeout !== null) {
            window.clearTimeout(this._clickTimeout);
            this._clickTimeout = null;
        }
        if (this.isDragging === false) {
            return;
        }
        this.endPoint = getPointFromEvent(event);
        if (this.endPoint === null) {
            return;
        }
        // Calculate steppedOffset
        let offset = this.direction === 'horizontal' ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;
        if (this.dir === 'rtl') {
            offset = -offset;
        }
        const steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;
        if (steppedOffset === this.snapshot.lastSteppedOffset) {
            return;
        }
        this.snapshot.lastSteppedOffset = steppedOffset;
        // Need to know if each gutter side areas could reacts to steppedOffset
        let areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
        let areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel);
        // Each gutter side areas can't absorb all offset
        if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
            if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) {
            }
            else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
                areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
            }
            else {
                areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
            }
        }
        // Areas before gutter can't absorbs all offset > need to recalculate sizes for areas after gutter.
        else if (areasBefore.remain !== 0) {
            areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
        }
        // Areas after gutter can't absorbs all offset > need to recalculate sizes for areas before gutter.
        else if (areasAfter.remain !== 0) {
            areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
        }
        if (this.unit === 'percent') {
            // Hack because of browser messing up with sizes using calc(X% - Ypx) -> el.getBoundingClientRect()
            // If not there, playing with gutters makes total going down to 99.99875% then 99.99286%, 99.98986%,..
            const all = [...areasBefore.list, ...areasAfter.list];
            const areaToReset = all.find((a) => a.percentAfterAbsorption !== 0 &&
                a.percentAfterAbsorption !== a.areaSnapshot.area.minSize &&
                a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize);
            if (areaToReset) {
                areaToReset.percentAfterAbsorption =
                    this.snapshot.allInvolvedAreasSizePercent -
                        all.filter((a) => a !== areaToReset).reduce((total, a) => total + a.percentAfterAbsorption, 0);
            }
        }
        // Now we know areas could absorb steppedOffset, time to really update sizes
        areasBefore.list.forEach((item) => updateAreaSize(this.unit, item));
        areasAfter.list.forEach((item) => updateAreaSize(this.unit, item));
        this.refreshStyleSizes();
        this.notify('progress', this.snapshot.gutterNum);
    }
    stopDragging(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (this.isDragging === false) {
            return;
        }
        this.displayedAreas.forEach((area) => area.component.unlockEvents());
        while (this.dragListeners.length > 0) {
            const fct = this.dragListeners.pop();
            if (fct)
                fct();
        }
        // Warning: Have to be before "notify('end')"
        // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"
        this.isDragging = false;
        // If moved from starting point, notify end
        if (this.endPoint && (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y)) {
            this.notify('end', this.snapshot.gutterNum);
        }
        this.renderer.removeClass(this.elRef.nativeElement, 'as-dragging');
        this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
        this.snapshot = null;
        // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.startPoint = null;
                this.endPoint = null;
            });
        });
    }
    notify(type, gutterNum) {
        const sizes = this.getVisibleAreaSizes();
        if (type === 'start') {
            this.dragStart.emit({ gutterNum, sizes });
        }
        else if (type === 'end') {
            this.dragEnd.emit({ gutterNum, sizes });
        }
        else if (type === 'click') {
            this.gutterClick.emit({ gutterNum, sizes });
        }
        else if (type === 'dblclick') {
            this.gutterDblClick.emit({ gutterNum, sizes });
        }
        else if (type === 'transitionEnd') {
            if (this.transitionEndSubscriber) {
                this.ngZone.run(() => this.transitionEndSubscriber.next(sizes));
            }
        }
        else if (type === 'progress') {
            // Stay outside zone to allow users do what they want about change detection mechanism.
            this.dragProgressSubject.next({ gutterNum, sizes });
        }
    }
    ngOnDestroy() {
        this.stopDragging();
    }
}
SplitComponent.ɵfac = function SplitComponent_Factory(t) { return new (t || SplitComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
SplitComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SplitComponent, selectors: [["as-split"]], viewQuery: function SplitComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gutterEls = _t);
    } }, inputs: { direction: "direction", unit: "unit", gutterSize: "gutterSize", gutterStep: "gutterStep", restrictMove: "restrictMove", useTransition: "useTransition", disabled: "disabled", dir: "dir", gutterDblClickDuration: "gutterDblClickDuration" }, outputs: { dragStart: "dragStart", dragEnd: "dragEnd", gutterClick: "gutterClick", gutterDblClick: "gutterDblClick", transitionEnd: "transitionEnd" }, exportAs: ["asSplit"], ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["ngFor", "", 3, "ngForOf"], ["class", "as-split-gutter", 3, "flex-basis", "order", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], [1, "as-split-gutter", 3, "mousedown", "touchstart", "mouseup", "touchend"], ["gutterEls", ""], [1, "as-split-gutter-icon"]], template: function SplitComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, SplitComponent_ng_template_1_Template, 1, 1, "ng-template", 0);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.displayedAreas);
    } }, directives: [i1.NgForOf, i1.NgIf], styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;background-color:transparent}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:50%;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:hidden}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0!important;overflow-x:hidden;overflow-y:hidden}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:ew-resize;height:100%;position:relative;left:5px}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\")}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:last-of-type){margin-right:-9px}.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-left:1px solid #eee}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:ns-resize;width:100%;position:relative;top:5px}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC\")}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:last-of-type){margin-bottom:-9px}.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-top:1px solid #eee}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area, .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%]{transition:flex-basis .3s}.dark-theme.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type), .dark-theme   .as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-left:1px solid #3f3f3f}.dark-theme.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type), .dark-theme   .as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-top:1px solid #3f3f3f}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SplitComponent, [{
        type: Component,
        args: [{
                selector: 'as-split',
                exportAs: 'asSplit',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: [`./split.component.scss`],
                template: ` <ng-content></ng-content>
    <ng-template ngFor [ngForOf]="displayedAreas" let-index="index" let-last="last">
      <div
        *ngIf="last === false"
        #gutterEls
        class="as-split-gutter"
        [style.flex-basis.px]="gutterSize"
        [style.order]="index * 2 + 1"
        (mousedown)="startDragging($event, index * 2 + 1, index + 1)"
        (touchstart)="startDragging($event, index * 2 + 1, index + 1)"
        (mouseup)="clickGutter($event, index + 1)"
        (touchend)="clickGutter($event, index + 1)"
      >
        <div class="as-split-gutter-icon"></div>
      </div>
    </ng-template>`,
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { direction: [{
            type: Input
        }], unit: [{
            type: Input
        }], gutterSize: [{
            type: Input
        }], gutterStep: [{
            type: Input
        }], restrictMove: [{
            type: Input
        }], useTransition: [{
            type: Input
        }], disabled: [{
            type: Input
        }], dir: [{
            type: Input
        }], gutterDblClickDuration: [{
            type: Input
        }], dragStart: [{
            type: Output
        }], dragEnd: [{
            type: Output
        }], gutterClick: [{
            type: Output
        }], gutterDblClick: [{
            type: Output
        }], transitionEnd: [{
            type: Output
        }], gutterEls: [{
            type: ViewChildren,
            args: ['gutterEls']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi92ZW5kb3IvYW5ndWxhci1zcGxpdC9saWIvY29tcG9uZW50L3NwbGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakIsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLHVCQUF1QixFQU92QixZQUFZLEVBRVosWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5QyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLCtCQUErQixFQUMvQixjQUFjLEdBQ2YsTUFBTSxVQUFVLENBQUM7Ozs7OztJQXVDWixpQ0FVQztJQUpDLHVRQUEyQyxDQUFDLEdBQUcsQ0FBQyxhQUFVLENBQUMsS0FBRSw0UEFDakIsQ0FBQyxHQUFHLENBQUMsYUFBVSxDQUFDLEtBREMsc1BBRXRCLENBQUMsS0FGcUIsd1BBR3JCLENBQUMsS0FIb0I7SUFLN0QseUJBQXdDO0lBQzFDLGlCQUFNOzs7O0lBUkoscURBQWtDLDJCQUFBOzs7SUFKcEMsNkVBWU07OztJQVhILHdDQUFvQjs7O0FBdEM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQXdCSCxNQUFNLE9BQU8sY0FBYztJQWdLekIsWUFDVSxNQUFjLEVBQ2QsS0FBaUIsRUFDakIsS0FBd0IsRUFDeEIsUUFBbUI7UUFIbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxL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LGVBQTBCO1FBQTFCLDRDQUEwQjs7dUZBZ0JwQyxjQUFjO2NBdEIxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O21CQWVPO2FBQ2xCOzBJQUljLFNBQVM7a0JBQXJCLEtBQUs7WUFvQk8sSUFBSTtrQkFBaEIsS0FBSztZQWlCTyxVQUFVO2tCQUF0QixLQUFLO1lBY08sVUFBVTtrQkFBdEIsS0FBSztZQVlPLFlBQVk7a0JBQXhCLEtBQUs7WUFZTyxhQUFhO2tCQUF6QixLQUFLO1lBZU8sUUFBUTtrQkFBcEIsS0FBSztZQWVPLEdBQUc7a0JBQWYsS0FBSztZQWNPLHNCQUFzQjtrQkFBbEMsS0FBSztZQVVJLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFHTyxhQUFhO2tCQUExQixNQUFNO1lBb0I0QixTQUFTO2tCQUEzQyxZQUFZO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZVxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJQXJlYSwgSVBvaW50LCBJU3BsaXRTbmFwc2hvdCwgSUFyZWFTbmFwc2hvdCwgSU91dHB1dERhdGEsIElPdXRwdXRBcmVhU2l6ZXMgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3BsaXRBcmVhRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlL3NwbGl0QXJlYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgZ2V0SW5wdXRQb3NpdGl2ZU51bWJlcixcbiAgZ2V0SW5wdXRCb29sZWFuLFxuICBpc1VzZXJTaXplc1ZhbGlkLFxuICBnZXRBcmVhTWluU2l6ZSxcbiAgZ2V0QXJlYU1heFNpemUsXG4gIGdldFBvaW50RnJvbUV2ZW50LFxuICBnZXRFbGVtZW50UGl4ZWxTaXplLFxuICBnZXRHdXR0ZXJTaWRlQWJzb3JwdGlvbkNhcGFjaXR5LFxuICB1cGRhdGVBcmVhU2l6ZSxcbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIGFuZ3VsYXItc3BsaXRcbiAqXG4gKlxuICogIFBFUkNFTlQgTU9ERSAoW3VuaXRdPVwiJ3BlcmNlbnQnXCIpXG4gKiAgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuICogfCAgICAgICBBICAgICAgIFtnMV0gICAgICAgQiAgICAgICBbZzJdICAgICAgIEMgICAgICAgW2czXSAgICAgICBEICAgICAgIFtnNF0gICAgICAgRSAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgICAgICAgMjAgICAgICAgICAgICAgICAgIDMwICAgICAgICAgICAgICAgICAyMCAgICAgICAgICAgICAgICAgMTUgICAgICAgICAgICAgICAgIDE1ICAgICAgfCA8LS0gW3NpemVdPVwieFwiXG4gKiB8ICAgICAgICAgICAgICAgMTBweCAgICAgICAgICAgICAgIDEwcHggICAgICAgICAgICAgICAxMHB4ICAgICAgICAgICAgICAgMTBweCAgICAgICAgICAgICAgIHwgPC0tIFtndXR0ZXJTaXplXT1cIjEwXCJcbiAqIHxjYWxjKDIwJSAtIDhweCkgICAgY2FsYygzMCUgLSAxMnB4KSAgIGNhbGMoMjAlIC0gOHB4KSAgICBjYWxjKDE1JSAtIDZweCkgICAgY2FsYygxNSUgLSA2cHgpfCA8LS0gQ1NTIGZsZXgtYmFzaXMgcHJvcGVydHkgKHdpdGggZmxleC1ncm93JnNocmluayBhdCAwKVxuICogfCAgICAgMTUycHggICAgICAgICAgICAgIDIyOHB4ICAgICAgICAgICAgICAxNTJweCAgICAgICAgICAgICAgMTE0cHggICAgICAgICAgICAgIDExNHB4ICAgICB8IDwtLSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICogfF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX198XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICAgICAgICAgPC0tIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gKiAgZmxleC1iYXNpcyA9IGNhbGMoIHsgYXJlYS5zaXplIH0lIC0geyBhcmVhLnNpemUvMTAwICogbmJHdXR0ZXIqZ3V0dGVyU2l6ZSB9cHggKTtcbiAqXG4gKlxuICogIFBJWEVMIE1PREUgKFt1bml0XT1cIidwaXhlbCdcIilcbiAqICBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXG4gKiB8ICAgICAgIEEgICAgICAgW2cxXSAgICAgICBCICAgICAgIFtnMl0gICAgICAgQyAgICAgICBbZzNdICAgICAgIEQgICAgICAgW2c0XSAgICAgICBFICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgICAgIDEwMCAgICAgICAgICAgICAgICAyNTAgICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgIDE1MCAgICAgICAgICAgICAgICAxMDAgICAgICB8IDwtLSBbc2l6ZV09XCJ5XCJcbiAqIHwgICAgICAgICAgICAgICAxMHB4ICAgICAgICAgICAgICAgMTBweCAgICAgICAgICAgICAgIDEwcHggICAgICAgICAgICAgICAxMHB4ICAgICAgICAgICAgICAgfCA8LS0gW2d1dHRlclNpemVdPVwiMTBcIlxuICogfCAgIDAgMCAxMDBweCAgICAgICAgICAwIDAgMjUwcHggICAgICAgICAgIDEgMSBhdXRvICAgICAgICAgIDAgMCAxNTBweCAgICAgICAgICAwIDAgMTAwcHggICB8IDwtLSBDU1MgZmxleCBwcm9wZXJ0eSAoZmxleC1ncm93L2ZsZXgtc2hyaW5rL2ZsZXgtYmFzaXMpXG4gKiB8ICAgICAxMDBweCAgICAgICAgICAgICAgMjUwcHggICAgICAgICAgICAgIDIwMHB4ICAgICAgICAgICAgICAxNTBweCAgICAgICAgICAgICAgMTAwcHggICAgIHwgPC0tIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gKiB8X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX3xcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggICAgICAgICA8LS0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAqXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXMtc3BsaXQnLFxuICBleHBvcnRBczogJ2FzU3BsaXQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbYC4vc3BsaXQuY29tcG9uZW50LnNjc3NgXSxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJkaXNwbGF5ZWRBcmVhc1wiIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWxhc3Q9XCJsYXN0XCI+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwibGFzdCA9PT0gZmFsc2VcIlxuICAgICAgICAjZ3V0dGVyRWxzXG4gICAgICAgIGNsYXNzPVwiYXMtc3BsaXQtZ3V0dGVyXCJcbiAgICAgICAgW3N0eWxlLmZsZXgtYmFzaXMucHhdPVwiZ3V0dGVyU2l6ZVwiXG4gICAgICAgIFtzdHlsZS5vcmRlcl09XCJpbmRleCAqIDIgKyAxXCJcbiAgICAgICAgKG1vdXNlZG93bik9XCJzdGFydERyYWdnaW5nKCRldmVudCwgaW5kZXggKiAyICsgMSwgaW5kZXggKyAxKVwiXG4gICAgICAgICh0b3VjaHN0YXJ0KT1cInN0YXJ0RHJhZ2dpbmcoJGV2ZW50LCBpbmRleCAqIDIgKyAxLCBpbmRleCArIDEpXCJcbiAgICAgICAgKG1vdXNldXApPVwiY2xpY2tHdXR0ZXIoJGV2ZW50LCBpbmRleCArIDEpXCJcbiAgICAgICAgKHRvdWNoZW5kKT1cImNsaWNrR3V0dGVyKCRldmVudCwgaW5kZXggKyAxKVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcy1zcGxpdC1ndXR0ZXItaWNvblwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2RpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICBASW5wdXQoKSBzZXQgZGlyZWN0aW9uKHY6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcpIHtcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSB2ID09PSAndmVydGljYWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBgYXMtJHt0aGlzLl9kaXJlY3Rpb259YCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIGBhcy0ke3RoaXMuX2RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCd9YFxuICAgICk7XG5cbiAgICB0aGlzLmJ1aWxkKGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBnZXQgZGlyZWN0aW9uKCk6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cblxuICAvLy8vXG5cbiAgcHJpdmF0ZSBfdW5pdDogJ3BlcmNlbnQnIHwgJ3BpeGVsJyA9ICdwZXJjZW50JztcblxuICBASW5wdXQoKSBzZXQgdW5pdCh2OiAncGVyY2VudCcgfCAncGl4ZWwnKSB7XG4gICAgdGhpcy5fdW5pdCA9IHYgPT09ICdwaXhlbCcgPyAncGl4ZWwnIDogJ3BlcmNlbnQnO1xuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIGBhcy0ke3RoaXMuX3VuaXR9YCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIGBhcy0ke3RoaXMuX3VuaXQgPT09ICdwaXhlbCcgPyAncGVyY2VudCcgOiAncGl4ZWwnfWApO1xuXG4gICAgdGhpcy5idWlsZChmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICBnZXQgdW5pdCgpOiAncGVyY2VudCcgfCAncGl4ZWwnIHtcbiAgICByZXR1cm4gdGhpcy5fdW5pdDtcbiAgfVxuXG4gIC8vLy9cblxuICBwcml2YXRlIF9ndXR0ZXJTaXplOiBudW1iZXIgPSAxMTtcblxuICBASW5wdXQoKSBzZXQgZ3V0dGVyU2l6ZSh2OiBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5fZ3V0dGVyU2l6ZSA9IGdldElucHV0UG9zaXRpdmVOdW1iZXIodiwgMTEpO1xuXG4gICAgdGhpcy5idWlsZChmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0IGd1dHRlclNpemUoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlclNpemU7XG4gIH1cblxuICAvLy8vXG5cbiAgcHJpdmF0ZSBfZ3V0dGVyU3RlcDogbnVtYmVyID0gMTtcblxuICBASW5wdXQoKSBzZXQgZ3V0dGVyU3RlcCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9ndXR0ZXJTdGVwID0gZ2V0SW5wdXRQb3NpdGl2ZU51bWJlcih2LCAxKTtcbiAgfVxuXG4gIGdldCBndXR0ZXJTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlclN0ZXA7XG4gIH1cblxuICAvLy8vXG5cbiAgcHJpdmF0ZSBfcmVzdHJpY3RNb3ZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2V0IHJlc3RyaWN0TW92ZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVzdHJpY3RNb3ZlID0gZ2V0SW5wdXRCb29sZWFuKHYpO1xuICB9XG5cbiAgZ2V0IHJlc3RyaWN0TW92ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdHJpY3RNb3ZlO1xuICB9XG5cbiAgLy8vL1xuXG4gIHByaXZhdGUgX3VzZVRyYW5zaXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgdXNlVHJhbnNpdGlvbih2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fdXNlVHJhbnNpdGlvbiA9IGdldElucHV0Qm9vbGVhbih2KTtcblxuICAgIGlmICh0aGlzLl91c2VUcmFuc2l0aW9uKSB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2FzLXRyYW5zaXRpb24nKTtcbiAgICBlbHNlIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnYXMtdHJhbnNpdGlvbicpO1xuICB9XG5cbiAgZ2V0IHVzZVRyYW5zaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZVRyYW5zaXRpb247XG4gIH1cblxuICAvLy8vXG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgZGlzYWJsZWQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gZ2V0SW5wdXRCb29sZWFuKHYpO1xuXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2FzLWRpc2FibGVkJyk7XG4gICAgZWxzZSB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2FzLWRpc2FibGVkJyk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgLy8vL1xuXG4gIHByaXZhdGUgX2RpcjogJ2x0cicgfCAncnRsJyA9ICdsdHInO1xuXG4gIEBJbnB1dCgpIHNldCBkaXIodjogJ2x0cicgfCAncnRsJykge1xuICAgIHRoaXMuX2RpciA9IHYgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RpcicsIHRoaXMuX2Rpcik7XG4gIH1cblxuICBnZXQgZGlyKCk6ICdsdHInIHwgJ3J0bCcge1xuICAgIHJldHVybiB0aGlzLl9kaXI7XG4gIH1cblxuICAvLy8vXG5cbiAgcHJpdmF0ZSBfZ3V0dGVyRGJsQ2xpY2tEdXJhdGlvbjogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKSBzZXQgZ3V0dGVyRGJsQ2xpY2tEdXJhdGlvbih2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9ndXR0ZXJEYmxDbGlja0R1cmF0aW9uID0gZ2V0SW5wdXRQb3NpdGl2ZU51bWJlcih2LCAwKTtcbiAgfVxuXG4gIGdldCBndXR0ZXJEYmxDbGlja0R1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlckRibENsaWNrRHVyYXRpb247XG4gIH1cblxuICAvLy8vXG5cbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SU91dHB1dERhdGE+KGZhbHNlKTtcbiAgQE91dHB1dCgpIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPElPdXRwdXREYXRhPihmYWxzZSk7XG4gIEBPdXRwdXQoKSBndXR0ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8SU91dHB1dERhdGE+KGZhbHNlKTtcbiAgQE91dHB1dCgpIGd1dHRlckRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJT3V0cHV0RGF0YT4oZmFsc2UpO1xuXG4gIHByaXZhdGUgdHJhbnNpdGlvbkVuZFN1YnNjcmliZXI6IFN1YnNjcmliZXI8SU91dHB1dEFyZWFTaXplcz47XG4gIEBPdXRwdXQoKSBnZXQgdHJhbnNpdGlvbkVuZCgpOiBPYnNlcnZhYmxlPElPdXRwdXRBcmVhU2l6ZXM+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXIpID0+ICh0aGlzLnRyYW5zaXRpb25FbmRTdWJzY3JpYmVyID0gc3Vic2NyaWJlcikpLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWU8SU91dHB1dEFyZWFTaXplcz4oMjApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhZ1Byb2dyZXNzU3ViamVjdDogU3ViamVjdDxJT3V0cHV0RGF0YT4gPSBuZXcgU3ViamVjdCgpO1xuICBkcmFnUHJvZ3Jlc3MkOiBPYnNlcnZhYmxlPElPdXRwdXREYXRhPiA9IHRoaXMuZHJhZ1Byb2dyZXNzU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAvLy8vXG5cbiAgcHJpdmF0ZSBpc0RyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ0xpc3RlbmVyczogQXJyYXk8RnVuY3Rpb24+ID0gW107XG4gIHByaXZhdGUgc25hcHNob3Q6IElTcGxpdFNuYXBzaG90IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3RhcnRQb2ludDogSVBvaW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZW5kUG9pbnQ6IElQb2ludCB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyByZWFkb25seSBkaXNwbGF5ZWRBcmVhczogQXJyYXk8SUFyZWE+ID0gW107XG4gIHByaXZhdGUgcmVhZG9ubHkgaGlkZWRBcmVhczogQXJyYXk8SUFyZWE+ID0gW107XG5cbiAgQFZpZXdDaGlsZHJlbignZ3V0dGVyRWxzJykgcHJpdmF0ZSBndXR0ZXJFbHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIC8vIFRvIGZvcmNlIGFkZGluZyBkZWZhdWx0IGNsYXNzLCBjb3VsZCBiZSBvdmVycmlkZSBieSB1c2VyIEBJbnB1dCgpIG9yIG5vdFxuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAvLyBUbyBhdm9pZCB0cmFuc2l0aW9uIGF0IGZpcnN0IHJlbmRlcmluZ1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2FzLWluaXQnKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE5iR3V0dGVycygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZEFyZWFzLmxlbmd0aCA9PT0gMCA/IDAgOiB0aGlzLmRpc3BsYXllZEFyZWFzLmxlbmd0aCAtIDE7XG4gIH1cblxuICBwdWJsaWMgYWRkQXJlYShjb21wb25lbnQ6IFNwbGl0QXJlYURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0FyZWE6IElBcmVhID0ge1xuICAgICAgY29tcG9uZW50LFxuICAgICAgb3JkZXI6IDAsXG4gICAgICBzaXplOiAwLFxuICAgICAgbWluU2l6ZTogbnVsbCxcbiAgICAgIG1heFNpemU6IG51bGwsXG4gICAgfTtcblxuICAgIGlmIChjb21wb25lbnQudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRBcmVhcy5wdXNoKG5ld0FyZWEpO1xuXG4gICAgICB0aGlzLmJ1aWxkKHRydWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVkQXJlYXMucHVzaChuZXdBcmVhKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQXJlYShjb21wb25lbnQ6IFNwbGl0QXJlYURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc3BsYXllZEFyZWFzLnNvbWUoKGEpID0+IGEuY29tcG9uZW50ID09PSBjb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBhcmVhID0gdGhpcy5kaXNwbGF5ZWRBcmVhcy5maW5kKChhKSA9PiBhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KTtcbiAgICAgIHRoaXMuZGlzcGxheWVkQXJlYXMuc3BsaWNlKHRoaXMuZGlzcGxheWVkQXJlYXMuaW5kZXhPZihhcmVhISksIDEpO1xuXG4gICAgICB0aGlzLmJ1aWxkKHRydWUsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oaWRlZEFyZWFzLnNvbWUoKGEpID0+IGEuY29tcG9uZW50ID09PSBjb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBhcmVhID0gdGhpcy5oaWRlZEFyZWFzLmZpbmQoKGEpID0+IGEuY29tcG9uZW50ID09PSBjb21wb25lbnQpO1xuICAgICAgdGhpcy5oaWRlZEFyZWFzLnNwbGljZSh0aGlzLmhpZGVkQXJlYXMuaW5kZXhPZihhcmVhISksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVBcmVhKGNvbXBvbmVudDogU3BsaXRBcmVhRGlyZWN0aXZlLCByZXNldE9yZGVyczogYm9vbGVhbiwgcmVzZXRTaXplczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChjb21wb25lbnQudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5idWlsZChyZXNldE9yZGVycywgcmVzZXRTaXplcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dBcmVhKGNvbXBvbmVudDogU3BsaXRBcmVhRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgY29uc3QgYXJlYSA9IHRoaXMuaGlkZWRBcmVhcy5maW5kKChhKSA9PiBhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KTtcbiAgICBpZiAoYXJlYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXJlYXMgPSB0aGlzLmhpZGVkQXJlYXMuc3BsaWNlKHRoaXMuaGlkZWRBcmVhcy5pbmRleE9mKGFyZWEpLCAxKTtcbiAgICB0aGlzLmRpc3BsYXllZEFyZWFzLnB1c2goLi4uYXJlYXMpO1xuXG4gICAgdGhpcy5idWlsZCh0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlQXJlYShjb21wOiBTcGxpdEFyZWFEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBjb25zdCBhcmVhID0gdGhpcy5kaXNwbGF5ZWRBcmVhcy5maW5kKChhKSA9PiBhLmNvbXBvbmVudCA9PT0gY29tcCk7XG4gICAgaWYgKGFyZWEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZWFzID0gdGhpcy5kaXNwbGF5ZWRBcmVhcy5zcGxpY2UodGhpcy5kaXNwbGF5ZWRBcmVhcy5pbmRleE9mKGFyZWEpLCAxKTtcbiAgICBhcmVhcy5mb3JFYWNoKChhcmVhKSA9PiB7XG4gICAgICBhcmVhLm9yZGVyID0gMDtcbiAgICAgIGFyZWEuc2l6ZSA9IDA7XG4gICAgfSk7XG4gICAgdGhpcy5oaWRlZEFyZWFzLnB1c2goLi4uYXJlYXMpO1xuXG4gICAgdGhpcy5idWlsZCh0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRWaXNpYmxlQXJlYVNpemVzKCk6IElPdXRwdXRBcmVhU2l6ZXMge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXllZEFyZWFzLm1hcCgoYSkgPT4gKGEuc2l6ZSA9PT0gbnVsbCA/ICcqJyA6IGEuc2l6ZSkpO1xuICB9XG5cbiAgcHVibGljIHNldFZpc2libGVBcmVhU2l6ZXMoc2l6ZXM6IElPdXRwdXRBcmVhU2l6ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoc2l6ZXMubGVuZ3RoICE9PSB0aGlzLmRpc3BsYXllZEFyZWFzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdGVkU2l6ZXMgPSBzaXplcy5tYXAoKHMpID0+IGdldElucHV0UG9zaXRpdmVOdW1iZXIocywgbnVsbCkpO1xuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1VzZXJTaXplc1ZhbGlkKHRoaXMudW5pdCwgZm9ybWF0ZWRTaXplcyk7XG5cbiAgICBpZiAoaXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5kaXNwbGF5ZWRBcmVhcy5mb3JFYWNoKChhcmVhLCBpKSA9PiAoYXJlYS5jb21wb25lbnQuX3NpemUgPSBmb3JtYXRlZFNpemVzW2ldKSk7XG5cbiAgICB0aGlzLmJ1aWxkKGZhbHNlLCB0cnVlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGQocmVzZXRPcmRlcnM6IGJvb2xlYW4sIHJlc2V0U2l6ZXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuXG4gICAgLy8gwqQgQVJFQVMgT1JERVJcblxuICAgIGlmIChyZXNldE9yZGVycyA9PT0gdHJ1ZSkge1xuICAgICAgLy8gSWYgdXNlciBwcm92aWRlZCAnb3JkZXInIGZvciBlYWNoIGFyZWEsIHVzZSBpdCB0byBzb3J0IHRoZW0uXG4gICAgICBpZiAodGhpcy5kaXNwbGF5ZWRBcmVhcy5ldmVyeSgoYSkgPT4gYS5jb21wb25lbnQub3JkZXIgIT09IG51bGwpKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkQXJlYXMuc29ydCgoYSwgYikgPT4gPG51bWJlcj5hLmNvbXBvbmVudC5vcmRlciAtIDxudW1iZXI+Yi5jb21wb25lbnQub3JkZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGVuIHNldCByZWFsIG9yZGVyIHdpdGggbXVsdGlwbGVzIG9mIDIsIG51bWJlcnMgYmV0d2VlbiB3aWxsIGJlIHVzZWQgYnkgZ3V0dGVycy5cbiAgICAgIHRoaXMuZGlzcGxheWVkQXJlYXMuZm9yRWFjaCgoYXJlYSwgaSkgPT4ge1xuICAgICAgICBhcmVhLm9yZGVyID0gaSAqIDI7XG4gICAgICAgIGFyZWEuY29tcG9uZW50LnNldFN0eWxlT3JkZXIoYXJlYS5vcmRlcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDCpCBBUkVBUyBTSVpFXG5cbiAgICBpZiAocmVzZXRTaXplcyA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgdXNlVXNlclNpemVzID0gaXNVc2VyU2l6ZXNWYWxpZChcbiAgICAgICAgdGhpcy51bml0LFxuICAgICAgICB0aGlzLmRpc3BsYXllZEFyZWFzLm1hcCgoYSkgPT4gYS5jb21wb25lbnQuc2l6ZSlcbiAgICAgICk7XG5cbiAgICAgIHN3aXRjaCAodGhpcy51bml0KSB7XG4gICAgICAgIGNhc2UgJ3BlcmNlbnQnOiB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdFNpemUgPSAxMDAgLyB0aGlzLmRpc3BsYXllZEFyZWFzLmxlbmd0aDtcblxuICAgICAgICAgIHRoaXMuZGlzcGxheWVkQXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xuICAgICAgICAgICAgYXJlYS5zaXplID0gdXNlVXNlclNpemVzID8gPG51bWJlcj5hcmVhLmNvbXBvbmVudC5zaXplIDogZGVmYXVsdFNpemU7XG4gICAgICAgICAgICBhcmVhLm1pblNpemUgPSBnZXRBcmVhTWluU2l6ZShhcmVhKTtcbiAgICAgICAgICAgIGFyZWEubWF4U2l6ZSA9IGdldEFyZWFNYXhTaXplKGFyZWEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3BpeGVsJzoge1xuICAgICAgICAgIGlmICh1c2VVc2VyU2l6ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xuICAgICAgICAgICAgICBhcmVhLnNpemUgPSBhcmVhLmNvbXBvbmVudC5zaXplO1xuICAgICAgICAgICAgICBhcmVhLm1pblNpemUgPSBnZXRBcmVhTWluU2l6ZShhcmVhKTtcbiAgICAgICAgICAgICAgYXJlYS5tYXhTaXplID0gZ2V0QXJlYU1heFNpemUoYXJlYSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd2lsZGNhcmRTaXplQXJlYXMgPSB0aGlzLmRpc3BsYXllZEFyZWFzLmZpbHRlcigoYSkgPT4gYS5jb21wb25lbnQuc2l6ZSA9PT0gbnVsbCk7XG5cbiAgICAgICAgICAgIC8vIE5vIHdpbGRjYXJkIGFyZWEgPiBOZWVkIHRvIHNlbGVjdCBvbmUgYXJiaXRyYXJpbHkgPiBmaXJzdFxuICAgICAgICAgICAgaWYgKHdpbGRjYXJkU2l6ZUFyZWFzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmRpc3BsYXllZEFyZWFzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRBcmVhcy5mb3JFYWNoKChhcmVhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgYXJlYS5zaXplID0gaSA9PT0gMCA/IG51bGwgOiBhcmVhLmNvbXBvbmVudC5zaXplO1xuICAgICAgICAgICAgICAgIGFyZWEubWluU2l6ZSA9IGkgPT09IDAgPyBudWxsIDogZ2V0QXJlYU1pblNpemUoYXJlYSk7XG4gICAgICAgICAgICAgICAgYXJlYS5tYXhTaXplID0gaSA9PT0gMCA/IG51bGwgOiBnZXRBcmVhTWF4U2l6ZShhcmVhKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNb3JlIHRoYW4gb25lIHdpbGRjYXJkIGFyZWEgPiBOZWVkIHRvIGtlZXAgb25seSBvbmUgYXJiaXRyYXJseSA+IGZpcnN0XG4gICAgICAgICAgICBlbHNlIGlmICh3aWxkY2FyZFNpemVBcmVhcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIGxldCBhbHJlYWR5R290T25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcmVhLmNvbXBvbmVudC5zaXplID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYWxyZWFkeUdvdE9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJlYS5zaXplID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYXJlYS5taW5TaXplID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYXJlYS5tYXhTaXplID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeUdvdE9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcmVhLnNpemUgPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgIGFyZWEubWluU2l6ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGFyZWEubWF4U2l6ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGFyZWEuc2l6ZSA9IGFyZWEuY29tcG9uZW50LnNpemU7XG4gICAgICAgICAgICAgICAgICBhcmVhLm1pblNpemUgPSBnZXRBcmVhTWluU2l6ZShhcmVhKTtcbiAgICAgICAgICAgICAgICAgIGFyZWEubWF4U2l6ZSA9IGdldEFyZWFNYXhTaXplKGFyZWEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZWZyZXNoU3R5bGVTaXplcygpO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hTdHlsZVNpemVzKCk6IHZvaWQge1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQRVJDRU5UIE1PREVcbiAgICBpZiAodGhpcy51bml0ID09PSAncGVyY2VudCcpIHtcbiAgICAgIC8vIE9ubHkgb25lIGFyZWEgPiBmbGV4LWJhc2lzIDEwMCVcbiAgICAgIGlmICh0aGlzLmRpc3BsYXllZEFyZWFzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZEFyZWFzWzBdLmNvbXBvbmVudC5zZXRTdHlsZUZsZXgoMCwgMCwgYDEwMCVgLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgLy8gTXVsdGlwbGUgYXJlYXMgPiB1c2UgZWFjaCBwZXJjZW50IGJhc2lzXG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3VtR3V0dGVyU2l6ZSA9IHRoaXMuZ2V0TmJHdXR0ZXJzKCkgKiB0aGlzLmd1dHRlclNpemUhO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheWVkQXJlYXMuZm9yRWFjaCgoYXJlYSkgPT4ge1xuICAgICAgICAgIGFyZWEuY29tcG9uZW50LnNldFN0eWxlRmxleChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgYGNhbGMoICR7YXJlYS5zaXplfSUgLSAkeyg8bnVtYmVyPmFyZWEuc2l6ZSAvIDEwMCkgKiBzdW1HdXR0ZXJTaXplfXB4IClgLFxuICAgICAgICAgICAgYXJlYS5taW5TaXplICE9PSBudWxsICYmIGFyZWEubWluU2l6ZSA9PT0gYXJlYS5zaXplID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgYXJlYS5tYXhTaXplICE9PSBudWxsICYmIGFyZWEubWF4U2l6ZSA9PT0gYXJlYS5zaXplID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBQSVhFTCBNT0RFXG4gICAgZWxzZSBpZiAodGhpcy51bml0ID09PSAncGl4ZWwnKSB7XG4gICAgICB0aGlzLmRpc3BsYXllZEFyZWFzLmZvckVhY2goKGFyZWEpID0+IHtcbiAgICAgICAgLy8gQXJlYSB3aXRoIHdpbGRjYXJkIHNpemVcbiAgICAgICAgaWYgKGFyZWEuc2l6ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXllZEFyZWFzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgYXJlYS5jb21wb25lbnQuc2V0U3R5bGVGbGV4KDEsIDEsIGAxMDAlYCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJlYS5jb21wb25lbnQuc2V0U3R5bGVGbGV4KDEsIDEsIGBhdXRvYCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXJlYSB3aXRoIHBpeGVsIHNpemVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gT25seSBvbmUgYXJlYSA+IGZsZXgtYmFzaXMgMTAwJVxuICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXllZEFyZWFzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgYXJlYS5jb21wb25lbnQuc2V0U3R5bGVGbGV4KDAsIDAsIGAxMDAlYCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gTXVsdGlwbGUgYXJlYXMgPiB1c2UgZWFjaCBwaXhlbCBiYXNpc1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJlYS5jb21wb25lbnQuc2V0U3R5bGVGbGV4KFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICBgJHthcmVhLnNpemV9cHhgLFxuICAgICAgICAgICAgICBhcmVhLm1pblNpemUgIT09IG51bGwgJiYgYXJlYS5taW5TaXplID09PSBhcmVhLnNpemUgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgIGFyZWEubWF4U2l6ZSAhPT0gbnVsbCAmJiBhcmVhLm1heFNpemUgPT09IGFyZWEuc2l6ZSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9jbGlja1RpbWVvdXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBjbGlja0d1dHRlcihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQsIGd1dHRlck51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdGVtcFBvaW50ID0gZ2V0UG9pbnRGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgLy8gQmUgc3VyZSBtb3VzZXVwL3RvdWNoZW5kIGhhcHBlbmVkIGF0IHNhbWUgcG9pbnQgYXMgbW91c2Vkb3duL3RvdWNoc3RhcnQgdG8gdHJpZ2dlciBjbGljay9kYmxjbGlja1xuICAgIGlmICh0aGlzLnN0YXJ0UG9pbnQgJiYgdGhpcy5zdGFydFBvaW50LnggPT09IHRlbXBQb2ludCEueCAmJiB0aGlzLnN0YXJ0UG9pbnQueSA9PT0gdGVtcFBvaW50IS55KSB7XG4gICAgICAvLyBJZiB0aW1lb3V0IGluIHByb2dyZXNzIGFuZCBuZXcgY2xpY2sgPiBjbGVhclRpbWVvdXQgJiBkYmxDbGlja0V2ZW50XG4gICAgICBpZiAodGhpcy5fY2xpY2tUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fY2xpY2tUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5fY2xpY2tUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub3RpZnkoJ2RibGNsaWNrJywgZ3V0dGVyTnVtKTtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICAgIC8vIEVsc2Ugc3RhcnQgdGltZW91dCB0byBjYWxsIGNsaWNrRXZlbnQgYXQgZW5kXG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2xpY2tUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NsaWNrVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5ub3RpZnkoJ2NsaWNrJywgZ3V0dGVyTnVtKTtcbiAgICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgICB9LCB0aGlzLmd1dHRlckRibENsaWNrRHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGFydERyYWdnaW5nKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCwgZ3V0dGVyT3JkZXI6IG51bWJlciwgZ3V0dGVyTnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5zdGFydFBvaW50ID0gZ2V0UG9pbnRGcm9tRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLnN0YXJ0UG9pbnQgPT09IG51bGwgfHwgdGhpcy5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc25hcHNob3QgPSB7XG4gICAgICBndXR0ZXJOdW0sXG4gICAgICBsYXN0U3RlcHBlZE9mZnNldDogMCxcbiAgICAgIGFsbEFyZWFzU2l6ZVBpeGVsOiBnZXRFbGVtZW50UGl4ZWxTaXplKHRoaXMuZWxSZWYsIHRoaXMuZGlyZWN0aW9uKSAtIHRoaXMuZ2V0TmJHdXR0ZXJzKCkgKiB0aGlzLmd1dHRlclNpemUhLFxuICAgICAgYWxsSW52b2x2ZWRBcmVhc1NpemVQZXJjZW50OiAxMDAsXG4gICAgICBhcmVhc0JlZm9yZUd1dHRlcjogW10sXG4gICAgICBhcmVhc0FmdGVyR3V0dGVyOiBbXSxcbiAgICB9O1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRBcmVhcy5mb3JFYWNoKChhcmVhKSA9PiB7XG4gICAgICBjb25zdCBhcmVhU25hcHNob3Q6IElBcmVhU25hcHNob3QgPSB7XG4gICAgICAgIGFyZWEsXG4gICAgICAgIHNpemVQaXhlbEF0U3RhcnQ6IGdldEVsZW1lbnRQaXhlbFNpemUoYXJlYS5jb21wb25lbnQuZWxSZWYsIHRoaXMuZGlyZWN0aW9uKSxcbiAgICAgICAgc2l6ZVBlcmNlbnRBdFN0YXJ0OiAodGhpcy51bml0ID09PSAncGVyY2VudCcgPyBhcmVhLnNpemUgOiAtMSkgYXMgbnVtYmVyLCAvLyBJZiBwaXhlbCBtb2RlLCBhbnl3YXksIHdpbGwgbm90IGJlIHVzZWQuXG4gICAgICB9O1xuXG4gICAgICBpZiAoYXJlYS5vcmRlciA8IGd1dHRlck9yZGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RyaWN0TW92ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuc25hcHNob3QhLmFyZWFzQmVmb3JlR3V0dGVyID0gW2FyZWFTbmFwc2hvdF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zbmFwc2hvdCEuYXJlYXNCZWZvcmVHdXR0ZXIudW5zaGlmdChhcmVhU25hcHNob3QpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZWEub3JkZXIgPiBndXR0ZXJPcmRlcikge1xuICAgICAgICBpZiAodGhpcy5yZXN0cmljdE1vdmUgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbmFwc2hvdCEuYXJlYXNBZnRlckd1dHRlci5sZW5ndGggPT09IDApIHRoaXMuc25hcHNob3QhLmFyZWFzQWZ0ZXJHdXR0ZXIgPSBbYXJlYVNuYXBzaG90XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNuYXBzaG90IS5hcmVhc0FmdGVyR3V0dGVyLnB1c2goYXJlYVNuYXBzaG90KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zbmFwc2hvdC5hbGxJbnZvbHZlZEFyZWFzU2l6ZVBlcmNlbnQgPSBbXG4gICAgICAuLi50aGlzLnNuYXBzaG90LmFyZWFzQmVmb3JlR3V0dGVyLFxuICAgICAgLi4udGhpcy5zbmFwc2hvdC5hcmVhc0FmdGVyR3V0dGVyLFxuICAgIF0ucmVkdWNlKCh0LCBhKSA9PiB0ICsgYS5zaXplUGVyY2VudEF0U3RhcnQsIDApO1xuXG4gICAgaWYgKHRoaXMuc25hcHNob3QuYXJlYXNCZWZvcmVHdXR0ZXIubGVuZ3RoID09PSAwIHx8IHRoaXMuc25hcHNob3QuYXJlYXNBZnRlckd1dHRlci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdMaXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnbW91c2V1cCcsIHRoaXMuc3RvcERyYWdnaW5nLmJpbmQodGhpcykpKTtcbiAgICB0aGlzLmRyYWdMaXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCB0aGlzLnN0b3BEcmFnZ2luZy5iaW5kKHRoaXMpKSk7XG4gICAgdGhpcy5kcmFnTGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoY2FuY2VsJywgdGhpcy5zdG9wRHJhZ2dpbmcuYmluZCh0aGlzKSkpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5kcmFnTGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ21vdXNlbW92ZScsIHRoaXMuZHJhZ0V2ZW50LmJpbmQodGhpcykpKTtcbiAgICAgIHRoaXMuZHJhZ0xpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaG1vdmUnLCB0aGlzLmRyYWdFdmVudC5iaW5kKHRoaXMpKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpc3BsYXllZEFyZWFzLmZvckVhY2goKGFyZWEpID0+IGFyZWEuY29tcG9uZW50LmxvY2tFdmVudHMoKSk7XG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnYXMtZHJhZ2dpbmcnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZ3V0dGVyRWxzLnRvQXJyYXkoKVt0aGlzLnNuYXBzaG90Lmd1dHRlck51bSAtIDFdLm5hdGl2ZUVsZW1lbnQsICdhcy1kcmFnZ2VkJyk7XG5cbiAgICB0aGlzLm5vdGlmeSgnc3RhcnQnLCB0aGlzLnNuYXBzaG90Lmd1dHRlck51bSk7XG4gIH1cblxuICBwcml2YXRlIGRyYWdFdmVudChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuX2NsaWNrVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9jbGlja1RpbWVvdXQpO1xuICAgICAgdGhpcy5fY2xpY2tUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZW5kUG9pbnQgPSBnZXRQb2ludEZyb21FdmVudChldmVudCk7XG4gICAgaWYgKHRoaXMuZW5kUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgc3RlcHBlZE9mZnNldFxuXG4gICAgbGV0IG9mZnNldCA9XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5zdGFydFBvaW50IS54IC0gdGhpcy5lbmRQb2ludC54IDogdGhpcy5zdGFydFBvaW50IS55IC0gdGhpcy5lbmRQb2ludC55O1xuICAgIGlmICh0aGlzLmRpciA9PT0gJ3J0bCcpIHtcbiAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XG4gICAgfVxuICAgIGNvbnN0IHN0ZXBwZWRPZmZzZXQgPSBNYXRoLnJvdW5kKG9mZnNldCAvIHRoaXMuZ3V0dGVyU3RlcCkgKiB0aGlzLmd1dHRlclN0ZXA7XG5cbiAgICBpZiAoc3RlcHBlZE9mZnNldCA9PT0gdGhpcy5zbmFwc2hvdCEubGFzdFN0ZXBwZWRPZmZzZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNuYXBzaG90IS5sYXN0U3RlcHBlZE9mZnNldCA9IHN0ZXBwZWRPZmZzZXQ7XG5cbiAgICAvLyBOZWVkIHRvIGtub3cgaWYgZWFjaCBndXR0ZXIgc2lkZSBhcmVhcyBjb3VsZCByZWFjdHMgdG8gc3RlcHBlZE9mZnNldFxuXG4gICAgbGV0IGFyZWFzQmVmb3JlID0gZ2V0R3V0dGVyU2lkZUFic29ycHRpb25DYXBhY2l0eShcbiAgICAgIHRoaXMudW5pdCxcbiAgICAgIHRoaXMuc25hcHNob3QhLmFyZWFzQmVmb3JlR3V0dGVyLFxuICAgICAgLXN0ZXBwZWRPZmZzZXQsXG4gICAgICB0aGlzLnNuYXBzaG90IS5hbGxBcmVhc1NpemVQaXhlbFxuICAgICk7XG4gICAgbGV0IGFyZWFzQWZ0ZXIgPSBnZXRHdXR0ZXJTaWRlQWJzb3JwdGlvbkNhcGFjaXR5KFxuICAgICAgdGhpcy51bml0LFxuICAgICAgdGhpcy5zbmFwc2hvdCEuYXJlYXNBZnRlckd1dHRlcixcbiAgICAgIHN0ZXBwZWRPZmZzZXQsXG4gICAgICB0aGlzLnNuYXBzaG90IS5hbGxBcmVhc1NpemVQaXhlbFxuICAgICk7XG5cbiAgICAvLyBFYWNoIGd1dHRlciBzaWRlIGFyZWFzIGNhbid0IGFic29yYiBhbGwgb2Zmc2V0XG4gICAgaWYgKGFyZWFzQmVmb3JlLnJlbWFpbiAhPT0gMCAmJiBhcmVhc0FmdGVyLnJlbWFpbiAhPT0gMCkge1xuICAgICAgaWYgKE1hdGguYWJzKGFyZWFzQmVmb3JlLnJlbWFpbikgPT09IE1hdGguYWJzKGFyZWFzQWZ0ZXIucmVtYWluKSkge1xuICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhhcmVhc0JlZm9yZS5yZW1haW4pID4gTWF0aC5hYnMoYXJlYXNBZnRlci5yZW1haW4pKSB7XG4gICAgICAgIGFyZWFzQWZ0ZXIgPSBnZXRHdXR0ZXJTaWRlQWJzb3JwdGlvbkNhcGFjaXR5KFxuICAgICAgICAgIHRoaXMudW5pdCxcbiAgICAgICAgICB0aGlzLnNuYXBzaG90IS5hcmVhc0FmdGVyR3V0dGVyLFxuICAgICAgICAgIHN0ZXBwZWRPZmZzZXQgKyBhcmVhc0JlZm9yZS5yZW1haW4sXG4gICAgICAgICAgdGhpcy5zbmFwc2hvdCEuYWxsQXJlYXNTaXplUGl4ZWxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZWFzQmVmb3JlID0gZ2V0R3V0dGVyU2lkZUFic29ycHRpb25DYXBhY2l0eShcbiAgICAgICAgICB0aGlzLnVuaXQsXG4gICAgICAgICAgdGhpcy5zbmFwc2hvdCEuYXJlYXNCZWZvcmVHdXR0ZXIsXG4gICAgICAgICAgLShzdGVwcGVkT2Zmc2V0IC0gYXJlYXNBZnRlci5yZW1haW4pLFxuICAgICAgICAgIHRoaXMuc25hcHNob3QhLmFsbEFyZWFzU2l6ZVBpeGVsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFyZWFzIGJlZm9yZSBndXR0ZXIgY2FuJ3QgYWJzb3JicyBhbGwgb2Zmc2V0ID4gbmVlZCB0byByZWNhbGN1bGF0ZSBzaXplcyBmb3IgYXJlYXMgYWZ0ZXIgZ3V0dGVyLlxuICAgIGVsc2UgaWYgKGFyZWFzQmVmb3JlLnJlbWFpbiAhPT0gMCkge1xuICAgICAgYXJlYXNBZnRlciA9IGdldEd1dHRlclNpZGVBYnNvcnB0aW9uQ2FwYWNpdHkoXG4gICAgICAgIHRoaXMudW5pdCxcbiAgICAgICAgdGhpcy5zbmFwc2hvdCEuYXJlYXNBZnRlckd1dHRlcixcbiAgICAgICAgc3RlcHBlZE9mZnNldCArIGFyZWFzQmVmb3JlLnJlbWFpbixcbiAgICAgICAgdGhpcy5zbmFwc2hvdCEuYWxsQXJlYXNTaXplUGl4ZWxcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIEFyZWFzIGFmdGVyIGd1dHRlciBjYW4ndCBhYnNvcmJzIGFsbCBvZmZzZXQgPiBuZWVkIHRvIHJlY2FsY3VsYXRlIHNpemVzIGZvciBhcmVhcyBiZWZvcmUgZ3V0dGVyLlxuICAgIGVsc2UgaWYgKGFyZWFzQWZ0ZXIucmVtYWluICE9PSAwKSB7XG4gICAgICBhcmVhc0JlZm9yZSA9IGdldEd1dHRlclNpZGVBYnNvcnB0aW9uQ2FwYWNpdHkoXG4gICAgICAgIHRoaXMudW5pdCxcbiAgICAgICAgdGhpcy5zbmFwc2hvdCEuYXJlYXNCZWZvcmVHdXR0ZXIsXG4gICAgICAgIC0oc3RlcHBlZE9mZnNldCAtIGFyZWFzQWZ0ZXIucmVtYWluKSxcbiAgICAgICAgdGhpcy5zbmFwc2hvdCEuYWxsQXJlYXNTaXplUGl4ZWxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudW5pdCA9PT0gJ3BlcmNlbnQnKSB7XG4gICAgICAvLyBIYWNrIGJlY2F1c2Ugb2YgYnJvd3NlciBtZXNzaW5nIHVwIHdpdGggc2l6ZXMgdXNpbmcgY2FsYyhYJSAtIFlweCkgLT4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIC8vIElmIG5vdCB0aGVyZSwgcGxheWluZyB3aXRoIGd1dHRlcnMgbWFrZXMgdG90YWwgZ29pbmcgZG93biB0byA5OS45OTg3NSUgdGhlbiA5OS45OTI4NiUsIDk5Ljk4OTg2JSwuLlxuICAgICAgY29uc3QgYWxsID0gWy4uLmFyZWFzQmVmb3JlLmxpc3QsIC4uLmFyZWFzQWZ0ZXIubGlzdF07XG4gICAgICBjb25zdCBhcmVhVG9SZXNldCA9IGFsbC5maW5kKFxuICAgICAgICAoYSkgPT5cbiAgICAgICAgICBhLnBlcmNlbnRBZnRlckFic29ycHRpb24gIT09IDAgJiZcbiAgICAgICAgICBhLnBlcmNlbnRBZnRlckFic29ycHRpb24gIT09IGEuYXJlYVNuYXBzaG90LmFyZWEubWluU2l6ZSAmJlxuICAgICAgICAgIGEucGVyY2VudEFmdGVyQWJzb3JwdGlvbiAhPT0gYS5hcmVhU25hcHNob3QuYXJlYS5tYXhTaXplXG4gICAgICApO1xuXG4gICAgICBpZiAoYXJlYVRvUmVzZXQpIHtcbiAgICAgICAgYXJlYVRvUmVzZXQucGVyY2VudEFmdGVyQWJzb3JwdGlvbiA9XG4gICAgICAgICAgdGhpcy5zbmFwc2hvdCEuYWxsSW52b2x2ZWRBcmVhc1NpemVQZXJjZW50IC1cbiAgICAgICAgICBhbGwuZmlsdGVyKChhKSA9PiBhICE9PSBhcmVhVG9SZXNldCkucmVkdWNlKCh0b3RhbCwgYSkgPT4gdG90YWwgKyBhLnBlcmNlbnRBZnRlckFic29ycHRpb24sIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBrbm93IGFyZWFzIGNvdWxkIGFic29yYiBzdGVwcGVkT2Zmc2V0LCB0aW1lIHRvIHJlYWxseSB1cGRhdGUgc2l6ZXNcblxuICAgIGFyZWFzQmVmb3JlLmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gdXBkYXRlQXJlYVNpemUodGhpcy51bml0LCBpdGVtKSk7XG4gICAgYXJlYXNBZnRlci5saXN0LmZvckVhY2goKGl0ZW0pID0+IHVwZGF0ZUFyZWFTaXplKHRoaXMudW5pdCwgaXRlbSkpO1xuXG4gICAgdGhpcy5yZWZyZXNoU3R5bGVTaXplcygpO1xuICAgIHRoaXMubm90aWZ5KCdwcm9ncmVzcycsIHRoaXMuc25hcHNob3QhLmd1dHRlck51bSk7XG4gIH1cblxuICBwcml2YXRlIHN0b3BEcmFnZ2luZyhldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXllZEFyZWFzLmZvckVhY2goKGFyZWEpID0+IGFyZWEuY29tcG9uZW50LnVubG9ja0V2ZW50cygpKTtcblxuICAgIHdoaWxlICh0aGlzLmRyYWdMaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmN0ID0gdGhpcy5kcmFnTGlzdGVuZXJzLnBvcCgpO1xuICAgICAgaWYgKGZjdCkgZmN0KCk7XG4gICAgfVxuXG4gICAgLy8gV2FybmluZzogSGF2ZSB0byBiZSBiZWZvcmUgXCJub3RpZnkoJ2VuZCcpXCJcbiAgICAvLyBiZWNhdXNlIFwibm90aWZ5KCdlbmQnKVwiXCIgY2FuIGJlIGxpbmtlZCB0byBcIltzaXplXT0neCdcIiA+IFwiYnVpbGQoKVwiID4gXCJzdG9wRHJhZ2dpbmcoKVwiXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG5cbiAgICAvLyBJZiBtb3ZlZCBmcm9tIHN0YXJ0aW5nIHBvaW50LCBub3RpZnkgZW5kXG4gICAgaWYgKHRoaXMuZW5kUG9pbnQgJiYgKHRoaXMuc3RhcnRQb2ludCEueCAhPT0gdGhpcy5lbmRQb2ludC54IHx8IHRoaXMuc3RhcnRQb2ludCEueSAhPT0gdGhpcy5lbmRQb2ludC55KSkge1xuICAgICAgdGhpcy5ub3RpZnkoJ2VuZCcsIHRoaXMuc25hcHNob3QhLmd1dHRlck51bSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdhcy1kcmFnZ2luZycpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ndXR0ZXJFbHMudG9BcnJheSgpW3RoaXMuc25hcHNob3QhLmd1dHRlck51bSAtIDFdLm5hdGl2ZUVsZW1lbnQsICdhcy1kcmFnZ2VkJyk7XG4gICAgdGhpcy5zbmFwc2hvdCA9IG51bGw7XG5cbiAgICAvLyBOZWVkZWQgdG8gbGV0IChjbGljayk9XCJjbGlja0d1dHRlciguLi4pXCIgZXZlbnQgcnVuIGFuZCB2ZXJpZnkgaWYgbW91c2UgbW92ZWQgb3Igbm90XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhcnRQb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5kUG9pbnQgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbm90aWZ5KHR5cGU6ICdzdGFydCcgfCAncHJvZ3Jlc3MnIHwgJ2VuZCcgfCAnY2xpY2snIHwgJ2RibGNsaWNrJyB8ICd0cmFuc2l0aW9uRW5kJywgZ3V0dGVyTnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzaXplcyA9IHRoaXMuZ2V0VmlzaWJsZUFyZWFTaXplcygpO1xuXG4gICAgaWYgKHR5cGUgPT09ICdzdGFydCcpIHtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoeyBndXR0ZXJOdW0sIHNpemVzIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2VuZCcpIHtcbiAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KHsgZ3V0dGVyTnVtLCBzaXplcyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMuZ3V0dGVyQ2xpY2suZW1pdCh7IGd1dHRlck51bSwgc2l6ZXMgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLmd1dHRlckRibENsaWNrLmVtaXQoeyBndXR0ZXJOdW0sIHNpemVzIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RyYW5zaXRpb25FbmQnKSB7XG4gICAgICBpZiAodGhpcy50cmFuc2l0aW9uRW5kU3Vic2NyaWJlcikge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy50cmFuc2l0aW9uRW5kU3Vic2NyaWJlci5uZXh0KHNpemVzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncHJvZ3Jlc3MnKSB7XG4gICAgICAvLyBTdGF5IG91dHNpZGUgem9uZSB0byBhbGxvdyB1c2VycyBkbyB3aGF0IHRoZXkgd2FudCBhYm91dCBjaGFuZ2UgZGV0ZWN0aW9uIG1lY2hhbmlzbS5cbiAgICAgIHRoaXMuZHJhZ1Byb2dyZXNzU3ViamVjdC5uZXh0KHsgZ3V0dGVyTnVtLCBzaXplcyB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgfVxufVxuIl19