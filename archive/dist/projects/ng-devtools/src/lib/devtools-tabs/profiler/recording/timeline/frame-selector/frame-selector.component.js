import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "../../../../tab-update";
import * as i2 from "@angular/material/card";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/cdk/scrolling";
import * as i7 from "@angular/common";
const _c0 = ["barContainer"];
function FrameSelectorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function FrameSelectorComponent_div_10_Template_div_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r5); const i_r3 = restoredCtx.index; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.handleFrameSelection(i_r3, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", ctx_r1.selectedFrameIndexes.has(i_r3));
    i0.ɵɵproperty("ngStyle", d_r2.style);
} }
const ITEM_WIDTH = 30;
export class FrameSelectorComponent {
    constructor(_tabUpdate) {
        this._tabUpdate = _tabUpdate;
        this.selectFrames = new EventEmitter();
        this.startFrameIndex = -1;
        this.endFrameIndex = -1;
        this.selectedFrameIndexes = new Set();
    }
    set graphData$(graphData) {
        this._graphData$ = graphData;
        this._graphDataSubscription = this._graphData$.subscribe((items) => setTimeout(() => {
            this.frameCount = items.length;
            this.viewport.scrollToIndex(items.length);
        }));
    }
    get graphData$() {
        return this._graphData$;
    }
    get itemWidth() {
        return ITEM_WIDTH;
    }
    ngOnInit() {
        this._tabUpdateSubscription = this._tabUpdate.tabUpdate$.subscribe(() => {
            if (this.viewport) {
                setTimeout(() => {
                    this.viewport.scrollToIndex(0);
                    this.viewport.checkViewportSize();
                });
            }
        });
    }
    ngOnDestroy() {
        if (this._tabUpdateSubscription) {
            this._tabUpdateSubscription.unsubscribe();
        }
        if (this._graphDataSubscription) {
            this._graphDataSubscription.unsubscribe();
        }
    }
    get selectionLabel() {
        if (this.startFrameIndex === this.endFrameIndex) {
            return `${this.startFrameIndex + 1}`;
        }
        return this._smartJoinIndexLabels([...this.selectedFrameIndexes]);
    }
    _smartJoinIndexLabels(indexArray) {
        const sortedIndexes = indexArray.sort((a, b) => a - b);
        const groups = [];
        let prev = null;
        for (const index of sortedIndexes) {
            // First iteration: create initial group and set prev variable to the first index
            if (prev === null) {
                groups.push([index]);
                prev = index;
                continue;
            }
            // If current index is consecutive with the previous, group them, otherwise start a new group
            if (prev + 1 === index) {
                groups[groups.length - 1].push(index);
            }
            else {
                groups.push([index]);
            }
            prev = index;
        }
        return groups
            .filter((group) => group.length > 0)
            .map((group) => (group.length === 1 ? group[0] + 1 : `${group[0] + 1}-${group[group.length - 1] + 1}`))
            .join(', ');
    }
    move(value) {
        const newVal = this.startFrameIndex + value;
        this.selectedFrameIndexes = new Set([newVal]);
        if (newVal > -1 && newVal < this.frameCount) {
            this._selectFrames({ indexes: this.selectedFrameIndexes });
        }
    }
    _selectFrames({ indexes }) {
        const sortedIndexes = [...indexes].sort((a, b) => a - b);
        this.startFrameIndex = sortedIndexes[0];
        this.endFrameIndex = sortedIndexes[sortedIndexes.length - 1];
        this._ensureVisible(this.startFrameIndex);
        this.selectFrames.emit({ indexes: sortedIndexes });
    }
    handleFrameSelection(idx, event) {
        const { shiftKey, ctrlKey, metaKey } = event;
        if (shiftKey) {
            const [start, end] = [Math.min(this.startFrameIndex, idx), Math.max(this.endFrameIndex, idx)];
            this.selectedFrameIndexes = new Set(Array.from(Array(end - start + 1), (_, index) => index + start));
        }
        else if (ctrlKey || metaKey) {
            if (this.selectedFrameIndexes.has(idx)) {
                if (this.selectedFrameIndexes.size === 1) {
                    return; // prevent deselection when only one frame is selected
                }
                this.selectedFrameIndexes.delete(idx);
            }
            else {
                this.selectedFrameIndexes.add(idx);
            }
        }
        else {
            this.selectedFrameIndexes = new Set([idx]);
        }
        this._selectFrames({ indexes: this.selectedFrameIndexes });
    }
    _ensureVisible(index) {
        if (!this.viewport) {
            return;
        }
        const scrollParent = this.viewport.elementRef.nativeElement;
        // The left most point we see an element
        const left = scrollParent.scrollLeft;
        // That's the right most point we currently see an element.
        const right = left + scrollParent.offsetWidth;
        const itemLeft = index * this.itemWidth;
        if (itemLeft < left) {
            scrollParent.scrollTo({ left: itemLeft });
        }
        else if (right < itemLeft + this.itemWidth) {
            scrollParent.scrollTo({ left: itemLeft - scrollParent.offsetWidth + this.itemWidth });
        }
    }
}
FrameSelectorComponent.ɵfac = function FrameSelectorComponent_Factory(t) { return new (t || FrameSelectorComponent)(i0.ɵɵdirectiveInject(i1.TabUpdate)); };
FrameSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FrameSelectorComponent, selectors: [["ng-frame-selector"]], viewQuery: function FrameSelectorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(CdkVirtualScrollViewport, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.barContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewport = _t.first);
    } }, inputs: { graphData$: "graphData$" }, outputs: { selectFrames: "selectFrames" }, decls: 16, vars: 16, consts: [[1, "bar-graph-container"], [1, "txt-frames", 3, "matTooltip"], ["mat-icon-button", "", 3, "disabled", "click"], ["orientation", "horizontal", 1, "bar-container", 3, "itemSize"], ["barContainer", ""], ["class", "frame-bar", 3, "ngStyle", "selected", "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "frame-bar", 3, "ngStyle", "click"]], template: function FrameSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "p", 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function FrameSelectorComponent_Template_button_click_5_listener() { return ctx.move(-1); });
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "chevron_left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "cdk-virtual-scroll-viewport", 3, 4);
        i0.ɵɵtemplate(10, FrameSelectorComponent_div_10_Template, 1, 3, "div", 5);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 2);
        i0.ɵɵlistener("click", function FrameSelectorComponent_Template_button_click_12_listener() { return ctx.move(1); });
        i0.ɵɵpipe(13, "async");
        i0.ɵɵelementStart(14, "mat-icon");
        i0.ɵɵtext(15, "chevron_right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        let tmp_5_0 = null;
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate2("matTooltip", "", ctx.selectionLabel, " / ", (tmp_0_0 = i0.ɵɵpipeBind1(2, 8, ctx.graphData$)) == null ? null : tmp_0_0.length, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2(" ", ctx.selectionLabel, " / ", (tmp_1_0 = i0.ɵɵpipeBind1(4, 10, ctx.graphData$)) == null ? null : tmp_1_0.length, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.startFrameIndex <= 0 || ctx.selectedFrameIndexes.size > 1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("itemSize", ctx.itemWidth);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkVirtualForOf", i0.ɵɵpipeBind1(11, 12, ctx.graphData$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.endFrameIndex >= ((tmp_5_0 = i0.ɵɵpipeBind1(13, 14, ctx.graphData$)) == null ? null : tmp_5_0.length) - 1 || ctx.selectedFrameIndexes.size > 1);
    } }, directives: [i2.MatCard, i3.MatTooltip, i4.MatButton, i5.MatIcon, i6.CdkVirtualScrollViewport, i6.CdkFixedSizeVirtualScroll, i6.CdkVirtualForOf, i7.NgStyle], pipes: [i7.AsyncPipe], styles: [".bar-graph-container[_ngcontent-%COMP%] {\n  padding: 2px;\n  height: 54px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n\n  .txt-frames {\n    font-weight: 500;\n    line-height: 50px;\n    padding: 0px;\n    margin: 0px 10px;\n    width: 150px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .bar-container {\n    max-width: calc(100vw - 150px);\n    align-items: baseline;\n    overflow-x: auto;\n    width: 100%;\n    height: 100%;\n\n    ::ng-deep .cdk-virtual-scroll-content-wrapper {\n      display: flex;\n    }\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    .frame-bar {\n      margin-left: 2.5px;\n      margin-right: 2.5px;\n      margin-top: 2px;\n\n      &:hover {\n        background-color: #ebf1fb;\n      }\n\n      &.selected {\n        margin-left: 0;\n        margin-right: 0;\n        margin-top: 0;\n        padding-left: 0.5px;\n        padding-right: 0.5px;\n\n        background-color: #cfe8fc;\n        border: 2px solid #cfe8fc;\n      }\n    }\n  }\n\n  button {\n    margin-bottom: 5px;\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .bar-graph-container .bar-container .frame-bar {\n    &:hover {\n      background-color: #262d36;\n    }\n\n    &.selected {\n      background-color: #073d69;\n      border: 2px solid #073d69;\n    }\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FrameSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'ng-frame-selector',
                templateUrl: './frame-selector.component.html',
                styleUrls: ['./frame-selector.component.scss'],
            }]
    }], function () { return [{ type: i1.TabUpdate }]; }, { barContainer: [{
            type: ViewChild,
            args: ['barContainer']
        }], graphData$: [{
            type: Input
        }], selectFrames: [{
            type: Output
        }], viewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }] }); })();
//# sourceMappingURL=frame-selector.component.js.map