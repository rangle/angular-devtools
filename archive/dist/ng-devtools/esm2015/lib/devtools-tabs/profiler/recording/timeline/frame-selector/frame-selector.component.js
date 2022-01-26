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
    } }, directives: [i2.MatCard, i3.MatTooltip, i4.MatButton, i5.MatIcon, i6.CdkVirtualScrollViewport, i6.CdkFixedSizeVirtualScroll, i6.CdkVirtualForOf, i7.NgStyle], pipes: [i7.AsyncPipe], styles: [".bar-graph-container[_ngcontent-%COMP%]{padding:2px;height:54px;display:flex;align-items:flex-end;justify-content:center;align-items:center;margin-bottom:10px}.bar-graph-container[_ngcontent-%COMP%]   .txt-frames[_ngcontent-%COMP%]{font-weight:500;line-height:50px;padding:0;margin:0 10px;width:150px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]{max-width:calc(100vw - 150px);align-items:baseline;overflow-x:auto;width:100%;height:100%}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{display:flex}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]{margin-left:2.5px;margin-right:2.5px;margin-top:2px}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0;padding-left:.5px;padding-right:.5px;background-color:#cfe8fc;border:2px solid #cfe8fc}.bar-graph-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:5px}.dark-theme[_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover{background-color:#262d36}.dark-theme[_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%]{background-color:#073d69;border:2px solid #073d69}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWUtc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3JlY29yZGluZy90aW1lbGluZS9mcmFtZS1zZWxlY3Rvci9mcmFtZS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL2ZyYW1lLXNlbGVjdG9yL2ZyYW1lLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUdqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lDTTlELDhCQU1DO0lBREMsd1FBQXlDO0lBQzFDLGlCQUFNOzs7OztJQUZMLGlFQUE4QztJQUY5QyxvQ0FBbUI7O0FETHpCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQU90QixNQUFNLE9BQU8sc0JBQXNCO0lBaUNqQyxZQUFvQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBakIvQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBSW5FLG9CQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsa0JBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQix5QkFBb0IsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO0lBV0csQ0FBQztJQS9CN0MsSUFBYSxVQUFVLENBQUMsU0FBa0M7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFT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QVc7Ozs7O1FBeEJhLGVBQXNFO1FBQXRFLDRKQUFzRTtRQUMxRixlQUNGO1FBREUsNklBQ0Y7UUFDMkMsZUFBa0U7UUFBbEUsd0ZBQWtFO1FBSXpDLGVBQXNCO1FBQXRCLHdDQUFzQjtRQUVoRSxlQUF1QjtRQUF2Qix3RUFBdUI7UUFXL0MsZUFBK0Y7UUFBL0YsNktBQStGOzt1RkRSdEYsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs0REFFNEIsWUFBWTtrQkFBdEMsU0FBUzttQkFBQyxjQUFjO1lBQ1osVUFBVTtrQkFBdEIsS0FBSztZQWNJLFlBQVk7a0JBQXJCLE1BQU07WUFFOEIsUUFBUTtrQkFBNUMsU0FBUzttQkFBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JhcGhOb2RlIH0gZnJvbSAnLi4vcmVjb3JkLWZvcm1hdHRlci9yZWNvcmQtZm9ybWF0dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBUYWJVcGRhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi90YWItdXBkYXRlJztcblxuY29uc3QgSVRFTV9XSURUSCA9IDMwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1mcmFtZS1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mcmFtZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZyYW1lLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZyYW1lU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2JhckNvbnRhaW5lcicpIGJhckNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc2V0IGdyYXBoRGF0YSQoZ3JhcGhEYXRhOiBPYnNlcnZhYmxlPEdyYXBoTm9kZVtdPikge1xuICAgIHRoaXMuX2dyYXBoRGF0YSQgPSBncmFwaERhdGE7XG4gICAgdGhpcy5fZ3JhcGhEYXRhU3Vic2NyaXB0aW9uID0gdGhpcy5fZ3JhcGhEYXRhJC5zdWJzY3JpYmUoKGl0ZW1zKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgdGhpcy52aWV3cG9ydC5zY3JvbGxUb0luZGV4KGl0ZW1zLmxlbmd0aCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXQgZ3JhcGhEYXRhJCgpOiBPYnNlcnZhYmxlPEdyYXBoTm9kZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2dyYXBoRGF0YSQ7XG4gIH1cblxuICBAT3V0cHV0KCkgc2VsZWN0RnJhbWVzID0gbmV3IEV2ZW50RW1pdHRlcjx7IGluZGV4ZXM6IG51bWJlcltdIH0+KCk7XG5cbiAgQFZpZXdDaGlsZChDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHZpZXdwb3J0OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG5cbiAgc3RhcnRGcmFtZUluZGV4ID0gLTE7XG4gIGVuZEZyYW1lSW5kZXggPSAtMTtcbiAgc2VsZWN0ZWRGcmFtZUluZGV4ZXMgPSBuZXcgU2V0PG51bWJlcj4oKTtcbiAgZnJhbWVDb3VudDogbnVtYmVyO1xuXG4gIGdldCBpdGVtV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gSVRFTV9XSURUSDtcbiAgfVxuXG4gIHByaXZhdGUgX2dyYXBoRGF0YSQ6IE9ic2VydmFibGU8R3JhcGhOb2RlW10+O1xuICBwcml2YXRlIF9ncmFwaERhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGFiVXBkYXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFiVXBkYXRlOiBUYWJVcGRhdGUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fdGFiVXBkYXRlU3Vic2NyaXB0aW9uID0gdGhpcy5fdGFiVXBkYXRlLnRhYlVwZGF0ZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnZpZXdwb3J0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudmlld3BvcnQuc2Nyb2xsVG9JbmRleCgwKTtcbiAgICAgICAgICB0aGlzLnZpZXdwb3J0LmNoZWNrVmlld3BvcnRTaXplKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RhYlVwZGF0ZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fdGFiVXBkYXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9ncmFwaERhdGFTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2dyYXBoRGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3Rpb25MYWJlbCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnN0YXJ0RnJhbWVJbmRleCA9PT0gdGhpcy5lbmRGcmFtZUluZGV4KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5zdGFydEZyYW1lSW5kZXggKyAxfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NtYXJ0Sm9pbkluZGV4TGFiZWxzKFsuLi50aGlzLnNlbGVjdGVkRnJhbWVJbmRleGVzXSk7XG4gIH1cblxuICBwcml2YXRlIF9zbWFydEpvaW5JbmRleExhYmVscyhpbmRleEFycmF5OiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc29ydGVkSW5kZXhlcyA9IGluZGV4QXJyYXkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXG4gICAgY29uc3QgZ3JvdXBzOiBudW1iZXJbXVtdID0gW107XG4gICAgbGV0IHByZXY6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBzb3J0ZWRJbmRleGVzKSB7XG4gICAgICAvLyBGaXJzdCBpdGVyYXRpb246IGNyZWF0ZSBpbml0aWFsIGdyb3VwIGFuZCBzZXQgcHJldiB2YXJpYWJsZSB0byB0aGUgZmlyc3QgaW5kZXhcbiAgICAgIGlmIChwcmV2ID09PSBudWxsKSB7XG4gICAgICAgIGdyb3Vwcy5wdXNoKFtpbmRleF0pO1xuICAgICAgICBwcmV2ID0gaW5kZXg7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBjdXJyZW50IGluZGV4IGlzIGNvbnNlY3V0aXZlIHdpdGggdGhlIHByZXZpb3VzLCBncm91cCB0aGVtLCBvdGhlcndpc2Ugc3RhcnQgYSBuZXcgZ3JvdXBcbiAgICAgIGlmIChwcmV2ICsgMSA9PT0gaW5kZXgpIHtcbiAgICAgICAgZ3JvdXBzW2dyb3Vwcy5sZW5ndGggLSAxXS5wdXNoKGluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyb3Vwcy5wdXNoKFtpbmRleF0pO1xuICAgICAgfVxuXG4gICAgICBwcmV2ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3Vwc1xuICAgICAgLmZpbHRlcigoZ3JvdXApID0+IGdyb3VwLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChncm91cCkgPT4gKGdyb3VwLmxlbmd0aCA9PT0gMSA/IGdyb3VwWzBdICsgMSA6IGAke2dyb3VwWzBdICsgMX0tJHtncm91cFtncm91cC5sZW5ndGggLSAxXSArIDF9YCkpXG4gICAgICAuam9pbignLCAnKTtcbiAgfVxuXG4gIG1vdmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuc3RhcnRGcmFtZUluZGV4ICsgdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZEZyYW1lSW5kZXhlcyA9IG5ldyBTZXQoW25ld1ZhbF0pO1xuICAgIGlmIChuZXdWYWwgPiAtMSAmJiBuZXdWYWwgPCB0aGlzLmZyYW1lQ291bnQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdEZyYW1lcyh7IGluZGV4ZXM6IHRoaXMuc2VsZWN0ZWRGcmFtZUluZGV4ZXMgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0RnJhbWVzKHsgaW5kZXhlcyB9OiB7IGluZGV4ZXM6IFNldDxudW1iZXI+IH0pOiB2b2lkIHtcbiAgICBjb25zdCBzb3J0ZWRJbmRleGVzID0gWy4uLmluZGV4ZXNdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB0aGlzLnN0YXJ0RnJhbWVJbmRleCA9IHNvcnRlZEluZGV4ZXNbMF07XG4gICAgdGhpcy5lbmRGcmFtZUluZGV4ID0gc29ydGVkSW5kZXhlc1tzb3J0ZWRJbmRleGVzLmxlbmd0aCAtIDFdO1xuICAgIHRoaXMuX2Vuc3VyZVZpc2libGUodGhpcy5zdGFydEZyYW1lSW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0RnJhbWVzLmVtaXQoeyBpbmRleGVzOiBzb3J0ZWRJbmRleGVzIH0pO1xuICB9XG5cbiAgaGFuZGxlRnJhbWVTZWxlY3Rpb24oaWR4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgeyBzaGlmdEtleSwgY3RybEtleSwgbWV0YUtleSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoc2hpZnRLZXkpIHtcbiAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IFtNYXRoLm1pbih0aGlzLnN0YXJ0RnJhbWVJbmRleCwgaWR4KSwgTWF0aC5tYXgodGhpcy5lbmRGcmFtZUluZGV4LCBpZHgpXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFtZUluZGV4ZXMgPSBuZXcgU2V0KEFycmF5LmZyb20oQXJyYXkoZW5kIC0gc3RhcnQgKyAxKSwgKF8sIGluZGV4KSA9PiBpbmRleCArIHN0YXJ0KSk7XG4gICAgfSBlbHNlIGlmIChjdHJsS2V5IHx8IG1ldGFLZXkpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRnJhbWVJbmRleGVzLmhhcyhpZHgpKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRnJhbWVJbmRleGVzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICByZXR1cm47IC8vIHByZXZlbnQgZGVzZWxlY3Rpb24gd2hlbiBvbmx5IG9uZSBmcmFtZSBpcyBzZWxlY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZEZyYW1lSW5kZXhlcy5kZWxldGUoaWR4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGcmFtZUluZGV4ZXMuYWRkKGlkeCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGcmFtZUluZGV4ZXMgPSBuZXcgU2V0KFtpZHhdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWxlY3RGcmFtZXMoeyBpbmRleGVzOiB0aGlzLnNlbGVjdGVkRnJhbWVJbmRleGVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW5zdXJlVmlzaWJsZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnZpZXdwb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbFBhcmVudCA9IHRoaXMudmlld3BvcnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vIFRoZSBsZWZ0IG1vc3QgcG9pbnQgd2Ugc2VlIGFuIGVsZW1lbnRcbiAgICBjb25zdCBsZWZ0ID0gc2Nyb2xsUGFyZW50LnNjcm9sbExlZnQ7XG4gICAgLy8gVGhhdCdzIHRoZSByaWdodCBtb3N0IHBvaW50IHdlIGN1cnJlbnRseSBzZWUgYW4gZWxlbWVudC5cbiAgICBjb25zdCByaWdodCA9IGxlZnQgKyBzY3JvbGxQYXJlbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgaXRlbUxlZnQgPSBpbmRleCAqIHRoaXMuaXRlbVdpZHRoO1xuICAgIGlmIChpdGVtTGVmdCA8IGxlZnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5zY3JvbGxUbyh7IGxlZnQ6IGl0ZW1MZWZ0IH0pO1xuICAgIH0gZWxzZSBpZiAocmlnaHQgPCBpdGVtTGVmdCArIHRoaXMuaXRlbVdpZHRoKSB7XG4gICAgICBzY3JvbGxQYXJlbnQuc2Nyb2xsVG8oeyBsZWZ0OiBpdGVtTGVmdCAtIHNjcm9sbFBhcmVudC5vZmZzZXRXaWR0aCArIHRoaXMuaXRlbVdpZHRoIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiPG1hdC1jYXJkIGNsYXNzPVwiYmFyLWdyYXBoLWNvbnRhaW5lclwiPlxuICA8cCBjbGFzcz1cInR4dC1mcmFtZXNcIiBtYXRUb29sdGlwPVwie3sgc2VsZWN0aW9uTGFiZWwgfX0gLyB7eyAoZ3JhcGhEYXRhJCB8IGFzeW5jKT8ubGVuZ3RoIH19XCI+XG4gICAge3sgc2VsZWN0aW9uTGFiZWwgfX0gLyB7eyAoZ3JhcGhEYXRhJCB8IGFzeW5jKT8ubGVuZ3RoIH19XG4gIDwvcD5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cIm1vdmUoLTEpXCIgW2Rpc2FibGVkXT1cInN0YXJ0RnJhbWVJbmRleCA8PSAwIHx8IHNlbGVjdGVkRnJhbWVJbmRleGVzLnNpemUgPiAxXCI+XG4gICAgPG1hdC1pY29uPmNoZXZyb25fbGVmdDwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuXG4gIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgI2JhckNvbnRhaW5lciBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBbaXRlbVNpemVdPVwiaXRlbVdpZHRoXCIgY2xhc3M9XCJiYXItY29udGFpbmVyXCI+XG4gICAgPGRpdlxuICAgICAgKmNka1ZpcnR1YWxGb3I9XCJsZXQgZCBvZiBncmFwaERhdGEkIHwgYXN5bmM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgW25nU3R5bGVdPVwiZC5zdHlsZVwiXG4gICAgICBjbGFzcz1cImZyYW1lLWJhclwiXG4gICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic2VsZWN0ZWRGcmFtZUluZGV4ZXMuaGFzKGkpXCJcbiAgICAgIChjbGljayk9XCJoYW5kbGVGcmFtZVNlbGVjdGlvbihpLCAkZXZlbnQpXCJcbiAgICA+PC9kaXY+XG4gIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuXG4gIDxidXR0b25cbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICAoY2xpY2spPVwibW92ZSgxKVwiXG4gICAgW2Rpc2FibGVkXT1cImVuZEZyYW1lSW5kZXggPj0gKGdyYXBoRGF0YSQgfCBhc3luYyk/Lmxlbmd0aCAtIDEgfHwgc2VsZWN0ZWRGcmFtZUluZGV4ZXMuc2l6ZSA+IDFcIlxuICA+XG4gICAgPG1hdC1pY29uPmNoZXZyb25fcmlnaHQ8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvbWF0LWNhcmQ+XG4iXX0=