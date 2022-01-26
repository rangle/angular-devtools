import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { mergeFrames } from './record-formatter/frame-merger';
import * as i0 from "@angular/core";
function TimelineComponent_ng_recording_modal_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ng-recording-modal");
} }
function TimelineComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "There's no information to show.");
    i0.ɵɵelementEnd();
} }
function TimelineComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Select a bar to preview a particular change detection cycle.");
    i0.ɵɵelementEnd();
} }
function TimelineComponent_ng_timeline_visualizer_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ng-timeline-visualizer", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("visualizationMode", ctx_r3.visualizationMode)("frame", ctx_r3.frame)("changeDetection", ctx_r3.changeDetection);
} }
export var VisualizationMode;
(function (VisualizationMode) {
    VisualizationMode[VisualizationMode["FlameGraph"] = 0] = "FlameGraph";
    VisualizationMode[VisualizationMode["TreeMap"] = 1] = "TreeMap";
    VisualizationMode[VisualizationMode["BarGraph"] = 2] = "BarGraph";
})(VisualizationMode || (VisualizationMode = {}));
const MAX_HEIGHT = 50;
export class TimelineComponent {
    constructor() {
        this.exportProfile = new EventEmitter();
        this.visualizationMode = VisualizationMode.BarGraph;
        this.changeDetection = false;
        this.frame = null;
        this._maxDuration = -Infinity;
        this._allRecords = [];
        this._graphDataSubject = new BehaviorSubject([]);
        this.visualizing = false;
        this.graphData$ = this._graphDataSubject.asObservable().pipe(share());
    }
    set stream(data) {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._allRecords = [];
        this._maxDuration = -Infinity;
        this._subscription = data.subscribe({
            next: (frames) => {
                this._processFrames(frames);
            },
            complete: () => {
                this.visualizing = true;
            },
        });
    }
    selectFrames({ indexes }) {
        this.frame = mergeFrames(indexes.map((index) => this._allRecords[index]));
    }
    get hasFrames() {
        return this._allRecords.length > 0;
    }
    estimateFrameRate(timeSpent) {
        const multiplier = Math.max(Math.ceil(timeSpent / 16) - 1, 0);
        return Math.floor(60 / Math.pow(2, multiplier));
    }
    getColorByFrameRate(framerate) {
        if (framerate >= 60) {
            return '#5cadd3';
        }
        else if (framerate < 60 && framerate >= 30) {
            return '#8a1882';
        }
        else if (framerate < 30 && framerate >= 15) {
            return '#9b4807';
        }
        return '#ce271e';
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    _processFrames(frames) {
        let regenerate = false;
        for (const frame of frames) {
            if (frame.duration >= this._maxDuration) {
                regenerate = true;
            }
            this._allRecords.push(frame);
        }
        if (regenerate) {
            this._graphDataSubject.next(this._generateBars());
            return;
        }
        const multiplicationFactor = parseFloat((MAX_HEIGHT / this._maxDuration).toFixed(2));
        frames.forEach((frame) => this._graphDataSubject.value.push(this._getBarStyles(frame, multiplicationFactor)));
        // We need to pass a new reference, because the CDK virtual scroll
        // has OnPush strategy, so it doesn't update the UI otherwise.
        // If this turns out ot be a bottleneck, we can easily create an immutable reference.
        this._graphDataSubject.next(this._graphDataSubject.value.slice());
    }
    _generateBars() {
        const maxValue = this._allRecords.reduce((acc, frame) => Math.max(acc, frame.duration), 0);
        const multiplicationFactor = parseFloat((MAX_HEIGHT / maxValue).toFixed(2));
        this._maxDuration = Math.max(this._maxDuration, maxValue);
        return this._allRecords.map((r) => this._getBarStyles(r, multiplicationFactor));
    }
    _getBarStyles(record, multiplicationFactor) {
        const height = record.duration * multiplicationFactor;
        const colorPercentage = Math.max(10, Math.round((height / MAX_HEIGHT) * 100));
        const backgroundColor = this.getColorByFrameRate(this.estimateFrameRate(record.duration));
        const style = {
            'background-image': `-webkit-linear-gradient(bottom, ${backgroundColor} ${colorPercentage}%, transparent ${colorPercentage}%)`,
            cursor: 'pointer',
            'min-width': '25px',
            width: '25px',
            height: '50px',
        };
        const toolTip = `${record.source} TimeSpent: ${record.duration.toFixed(3)}ms`;
        return { style, toolTip };
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimelineComponent, selectors: [["ng-recording-timeline"]], inputs: { stream: "stream" }, outputs: { exportProfile: "exportProfile" }, decls: 7, vars: 15, consts: [[4, "ngIf"], ["class", "info", 4, "ngIf"], [2, "margin", "10px", "height", "100%"], [3, "record", "empty", "frameColor", "estimatedFrameRate", "visualizationMode", "changeDetection", "changeVisualizationMode", "exportProfile", "toggleChangeDetection"], [3, "graphData$", "selectFrames"], [3, "visualizationMode", "frame", "changeDetection", 4, "ngIf"], [1, "info"], [3, "visualizationMode", "frame", "changeDetection"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TimelineComponent_ng_recording_modal_0_Template, 1, 0, "ng-recording-modal", 0);
        i0.ɵɵtemplate(1, TimelineComponent_p_1_Template, 2, 0, "p", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "ng-timeline-controls", 3);
        i0.ɵɵlistener("changeVisualizationMode", function TimelineComponent_Template_ng_timeline_controls_changeVisualizationMode_3_listener($event) { return ctx.visualizationMode = $event; })("exportProfile", function TimelineComponent_Template_ng_timeline_controls_exportProfile_3_listener($event) { return ctx.exportProfile.emit($event); })("toggleChangeDetection", function TimelineComponent_Template_ng_timeline_controls_toggleChangeDetection_3_listener($event) { return ctx.changeDetection = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ng-frame-selector", 4);
        i0.ɵɵlistener("selectFrames", function TimelineComponent_Template_ng_frame_selector_selectFrames_4_listener($event) { return ctx.selectFrames($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TimelineComponent_p_5_Template, 2, 0, "p", 1);
        i0.ɵɵtemplate(6, TimelineComponent_ng_timeline_visualizer_6_Template, 1, 3, "ng-timeline-visualizer", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.hasFrames && !ctx.visualizing);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hasFrames && ctx.visualizing);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("hidden", !ctx.hasFrames);
        i0.ɵɵproperty("record", ctx.frame)("empty", !ctx.hasFrames)("frameColor", ctx.getColorByFrameRate(ctx.estimateFrameRate(ctx.frame == null ? null : ctx.frame.duration)))("estimatedFrameRate", ctx.estimateFrameRate(ctx.frame == null ? null : ctx.frame.duration))("visualizationMode", ctx.visualizationMode)("changeDetection", ctx.changeDetection);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.hasFrames);
        i0.ɵɵproperty("graphData$", ctx.graphData$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasFrames && !ctx.frame);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasFrames && ctx.frame);
    } }, styles: ["[_nghost-%COMP%] {\n  font-size: 11px;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 1.2em;\n  text-align: center;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  \n  visibility: hidden;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimelineComponent, [{
        type: Component,
        args: [{
                selector: 'ng-recording-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss'],
            }]
    }], null, { stream: [{
            type: Input
        }], exportProfile: [{
            type: Output
        }] }); })();
//# sourceMappingURL=timeline.component.js.map