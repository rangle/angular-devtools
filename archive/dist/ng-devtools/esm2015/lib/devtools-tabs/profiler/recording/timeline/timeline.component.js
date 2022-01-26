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
    } }, styles: ["[_nghost-%COMP%]{font-size:11px;width:100%;height:100%;display:block}.info[_ngcontent-%COMP%]{margin-top:16px;font-size:1.2em;text-align:center}.hidden[_ngcontent-%COMP%]{visibility:hidden}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3JlY29yZGluZy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHbEYsT0FBTyxFQUE0QixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0lDTDlELHFDQUE0RTs7O0lBRTVFLDRCQUFrRDtJQUFBLCtDQUErQjtJQUFBLGlCQUFJOzs7SUFzQm5GLDRCQUE0QztJQUFBLDRFQUE0RDtJQUFBLGlCQUFJOzs7SUFFNUcsNENBSzBCOzs7SUFIeEIsNERBQXVDLHVCQUFBLDJDQUFBOztBRHJCM0MsTUFBTSxDQUFOLElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtJQUMzQixxRUFBVSxDQUFBO0lBQ1YsK0RBQU8sQ0FBQTtJQUNQLGlFQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQU90QixNQUFNLE9BQU8saUJBQWlCO0lBTDlCO1FBcUJZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuRCxzQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDL0Msb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsVUFBSyxHQUF5QixJQUFJLENBQUM7UUFFM0IsaUJBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUV6QixnQkFBVyxHQUFvQixFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQWMsRUFBRSxDQUFDLENBQUM7UUFDakUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztLQThFbEU7SUF2R0MsSUFBYSxNQUFNLENBQUMsSUFBaUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNsQyxJQUFJLEVBQUUsQ0FBQyxNQUF1QixFQUFRLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELFFBQVEsRUFBRSxHQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQzFCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBYUQsWUFBWSxDQUFDLEVBQUUsT0FBTyxFQUF5QjtRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQWlCO1FBQ2pDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsU0FBQSxDQUFDLEVBQUksVUFBVSxDQUFBLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFO1lBQ25CLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxTQUFTLEdBQUcsRUFBRSxJQUFJLFNBQVMsSUFBSSxFQUFFLEVBQUU7WUFDNUMsT0FBTyxTQUFTLENBQUM7U0FDbEI7YUFBTSxJQUFJLFNBQVMsR0FBRyxFQUFFLElBQUksU0FBUyxJQUFJLEVBQUUsRUFBRTtZQUM1QyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRU8sY0FBYyxDQUFDLE1BQXVCO1FBQzVDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdkMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNuQjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE9BQU87U0FDUjtRQUNELE1BQU0sb0JBQW9CLEdBQUcsVUFBVSxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RyxrRUFBa0U7UUFDbEUsOERBQThEO1FBQzlELHFGQUFxRjtRQUNyRixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sYUFBYTtRQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxLQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEgsTUFBTSxvQkFBb0IsR0FBRyxVQUFVLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTyxhQUFhLENBQ25CLE1BQXFCLEVBQ3JCLG9CQUE0QjtRQUU1QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO1FBQ3RELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTFGLE1BQU0sS0FBSyxHQUFHO1lBQ1osa0JBQWtCLEVBQUUsbUNBQW1DLGVBQWUsSUFBSSxlQUFlLGtCQUFrQixlQUFlLElBQUk7WUFDOUgsTUFBTSxFQUFFLFNBQVM7WUFDakIsV0FBVyxFQUFFLE1BQU07WUFDbkIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFDRixNQUFNLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLGVBQWUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7O2tGQXZHVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtRQ3BCOUIsZ0dBQTRFO1FBRTVFLDhEQUFxRjtRQUVyRiw4QkFBd0M7UUFDdEMsK0NBV0M7UUFIQyx3TEFBc0QscUhBQ3JDLDhCQUEwQixJQURXLHFLQUFBO1FBR3ZELGlCQUF1QjtRQUV4Qiw0Q0FJQztRQURDLDZIQUFnQix3QkFBb0IsSUFBQztRQUN0QyxpQkFBb0I7UUFFckIsOERBQTRHO1FBRTVHLHdHQUswQjtRQUM1QixpQkFBTTs7UUFoQ2UseURBQWdDO1FBRXBDLGVBQStCO1FBQS9CLHdEQUErQjtRQUk1QyxlQUEyQjtRQUEzQix3Q0FBMkI7UUFDM0Isa0NBQWdCLHlCQUFBLDZHQUFBLDRGQUFBLDRDQUFBLHdDQUFBO1FBWWhCLGVBQTJCO1FBQTNCLHdDQUEyQjtRQUMzQiwyQ0FBeUI7UUFJVixlQUF5QjtRQUF6QixrREFBeUI7UUFHdkMsZUFBd0I7UUFBeEIsaURBQXdCOzt1RkRQaEIsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QztnQkFFYyxNQUFNO2tCQUFsQixLQUFLO1lBZUksYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2ZpbGVyRnJhbWUgfSBmcm9tICdwcm90b2NvbCc7XG5pbXBvcnQgeyBHcmFwaE5vZGUgfSBmcm9tICcuL3JlY29yZC1mb3JtYXR0ZXIvcmVjb3JkLWZvcm1hdHRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtZXJnZUZyYW1lcyB9IGZyb20gJy4vcmVjb3JkLWZvcm1hdHRlci9mcmFtZS1tZXJnZXInO1xuXG5leHBvcnQgZW51bSBWaXN1YWxpemF0aW9uTW9kZSB7XG4gIEZsYW1lR3JhcGgsXG4gIFRyZWVNYXAsXG4gIEJhckdyYXBoLFxufVxuXG5jb25zdCBNQVhfSEVJR0hUID0gNTA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXJlY29yZGluZy10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2V0IHN0cmVhbShkYXRhOiBPYnNlcnZhYmxlPFByb2ZpbGVyRnJhbWVbXT4pIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fYWxsUmVjb3JkcyA9IFtdO1xuICAgIHRoaXMuX21heER1cmF0aW9uID0gLUluZmluaXR5O1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGRhdGEuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChmcmFtZXM6IFByb2ZpbGVyRnJhbWVbXSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLl9wcm9jZXNzRnJhbWVzKGZyYW1lcyk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgdGhpcy52aXN1YWxpemluZyA9IHRydWU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIEBPdXRwdXQoKSBleHBvcnRQcm9maWxlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICB2aXN1YWxpemF0aW9uTW9kZSA9IFZpc3VhbGl6YXRpb25Nb2RlLkJhckdyYXBoO1xuICBjaGFuZ2VEZXRlY3Rpb24gPSBmYWxzZTtcbiAgZnJhbWU6IFByb2ZpbGVyRnJhbWUgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9tYXhEdXJhdGlvbiA9IC1JbmZpbml0eTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2FsbFJlY29yZHM6IFByb2ZpbGVyRnJhbWVbXSA9IFtdO1xuICBwcml2YXRlIF9ncmFwaERhdGFTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmFwaE5vZGVbXT4oW10pO1xuICB2aXN1YWxpemluZyA9IGZhbHNlO1xuICBncmFwaERhdGEkID0gdGhpcy5fZ3JhcGhEYXRhU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKHNoYXJlKCkpO1xuXG4gIHNlbGVjdEZyYW1lcyh7IGluZGV4ZXMgfTogeyBpbmRleGVzOiBudW1iZXJbXSB9KTogdm9pZCB7XG4gICAgdGhpcy5mcmFtZSA9IG1lcmdlRnJhbWVzKGluZGV4ZXMubWFwKChpbmRleCkgPT4gdGhpcy5fYWxsUmVjb3Jkc1tpbmRleF0pKTtcbiAgfVxuXG4gIGdldCBoYXNGcmFtZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbFJlY29yZHMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGVzdGltYXRlRnJhbWVSYXRlKHRpbWVTcGVudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5tYXgoTWF0aC5jZWlsKHRpbWVTcGVudCAvIDE2KSAtIDEsIDApO1xuICAgIHJldHVybiBNYXRoLmZsb29yKDYwIC8gMiAqKiBtdWx0aXBsaWVyKTtcbiAgfVxuXG4gIGdldENvbG9yQnlGcmFtZVJhdGUoZnJhbWVyYXRlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChmcmFtZXJhdGUgPj0gNjApIHtcbiAgICAgIHJldHVybiAnIzVjYWRkMyc7XG4gICAgfSBlbHNlIGlmIChmcmFtZXJhdGUgPCA2MCAmJiBmcmFtZXJhdGUgPj0gMzApIHtcbiAgICAgIHJldHVybiAnIzhhMTg4Mic7XG4gICAgfSBlbHNlIGlmIChmcmFtZXJhdGUgPCAzMCAmJiBmcmFtZXJhdGUgPj0gMTUpIHtcbiAgICAgIHJldHVybiAnIzliNDgwNyc7XG4gICAgfVxuICAgIHJldHVybiAnI2NlMjcxZSc7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wcm9jZXNzRnJhbWVzKGZyYW1lczogUHJvZmlsZXJGcmFtZVtdKTogdm9pZCB7XG4gICAgbGV0IHJlZ2VuZXJhdGUgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgICAgaWYgKGZyYW1lLmR1cmF0aW9uID49IHRoaXMuX21heER1cmF0aW9uKSB7XG4gICAgICAgIHJlZ2VuZXJhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWxsUmVjb3Jkcy5wdXNoKGZyYW1lKTtcbiAgICB9XG4gICAgaWYgKHJlZ2VuZXJhdGUpIHtcbiAgICAgIHRoaXMuX2dyYXBoRGF0YVN1YmplY3QubmV4dCh0aGlzLl9nZW5lcmF0ZUJhcnMoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG11bHRpcGxpY2F0aW9uRmFjdG9yID0gcGFyc2VGbG9hdCgoTUFYX0hFSUdIVCAvIHRoaXMuX21heER1cmF0aW9uKS50b0ZpeGVkKDIpKTtcbiAgICBmcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHRoaXMuX2dyYXBoRGF0YVN1YmplY3QudmFsdWUucHVzaCh0aGlzLl9nZXRCYXJTdHlsZXMoZnJhbWUsIG11bHRpcGxpY2F0aW9uRmFjdG9yKSkpO1xuXG4gICAgLy8gV2UgbmVlZCB0byBwYXNzIGEgbmV3IHJlZmVyZW5jZSwgYmVjYXVzZSB0aGUgQ0RLIHZpcnR1YWwgc2Nyb2xsXG4gICAgLy8gaGFzIE9uUHVzaCBzdHJhdGVneSwgc28gaXQgZG9lc24ndCB1cGRhdGUgdGhlIFVJIG90aGVyd2lzZS5cbiAgICAvLyBJZiB0aGlzIHR1cm5zIG91dCBvdCBiZSBhIGJvdHRsZW5lY2ssIHdlIGNhbiBlYXNpbHkgY3JlYXRlIGFuIGltbXV0YWJsZSByZWZlcmVuY2UuXG4gICAgdGhpcy5fZ3JhcGhEYXRhU3ViamVjdC5uZXh0KHRoaXMuX2dyYXBoRGF0YVN1YmplY3QudmFsdWUuc2xpY2UoKSk7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZUJhcnMoKTogR3JhcGhOb2RlW10ge1xuICAgIGNvbnN0IG1heFZhbHVlID0gdGhpcy5fYWxsUmVjb3Jkcy5yZWR1Y2UoKGFjYzogbnVtYmVyLCBmcmFtZTogUHJvZmlsZXJGcmFtZSkgPT4gTWF0aC5tYXgoYWNjLCBmcmFtZS5kdXJhdGlvbiksIDApO1xuICAgIGNvbnN0IG11bHRpcGxpY2F0aW9uRmFjdG9yID0gcGFyc2VGbG9hdCgoTUFYX0hFSUdIVCAvIG1heFZhbHVlKS50b0ZpeGVkKDIpKTtcbiAgICB0aGlzLl9tYXhEdXJhdGlvbiA9IE1hdGgubWF4KHRoaXMuX21heER1cmF0aW9uLCBtYXhWYWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuX2FsbFJlY29yZHMubWFwKChyKSA9PiB0aGlzLl9nZXRCYXJTdHlsZXMociwgbXVsdGlwbGljYXRpb25GYWN0b3IpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEJhclN0eWxlcyhcbiAgICByZWNvcmQ6IFByb2ZpbGVyRnJhbWUsXG4gICAgbXVsdGlwbGljYXRpb25GYWN0b3I6IG51bWJlclxuICApOiB7IHN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9OyB0b29sVGlwOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gcmVjb3JkLmR1cmF0aW9uICogbXVsdGlwbGljYXRpb25GYWN0b3I7XG4gICAgY29uc3QgY29sb3JQZXJjZW50YWdlID0gTWF0aC5tYXgoMTAsIE1hdGgucm91bmQoKGhlaWdodCAvIE1BWF9IRUlHSFQpICogMTAwKSk7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gdGhpcy5nZXRDb2xvckJ5RnJhbWVSYXRlKHRoaXMuZXN0aW1hdGVGcmFtZVJhdGUocmVjb3JkLmR1cmF0aW9uKSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgJHtiYWNrZ3JvdW5kQ29sb3J9ICR7Y29sb3JQZXJjZW50YWdlfSUsIHRyYW5zcGFyZW50ICR7Y29sb3JQZXJjZW50YWdlfSUpYCxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJ21pbi13aWR0aCc6ICcyNXB4JyxcbiAgICAgIHdpZHRoOiAnMjVweCcsXG4gICAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICB9O1xuICAgIGNvbnN0IHRvb2xUaXAgPSBgJHtyZWNvcmQuc291cmNlfSBUaW1lU3BlbnQ6ICR7cmVjb3JkLmR1cmF0aW9uLnRvRml4ZWQoMyl9bXNgO1xuICAgIHJldHVybiB7IHN0eWxlLCB0b29sVGlwIH07XG4gIH1cbn1cbiIsIjxuZy1yZWNvcmRpbmctbW9kYWwgKm5nSWY9XCIhaGFzRnJhbWVzICYmICF2aXN1YWxpemluZ1wiPjwvbmctcmVjb3JkaW5nLW1vZGFsPlxuXG48cCBjbGFzcz1cImluZm9cIiAqbmdJZj1cIiFoYXNGcmFtZXMgJiYgdmlzdWFsaXppbmdcIj5UaGVyZSdzIG5vIGluZm9ybWF0aW9uIHRvIHNob3cuPC9wPlxuXG48ZGl2IHN0eWxlPVwibWFyZ2luOiAxMHB4OyBoZWlnaHQ6IDEwMCVcIj5cbiAgPG5nLXRpbWVsaW5lLWNvbnRyb2xzXG4gICAgW2NsYXNzLmhpZGRlbl09XCIhaGFzRnJhbWVzXCJcbiAgICBbcmVjb3JkXT1cImZyYW1lXCJcbiAgICBbZW1wdHldPVwiIWhhc0ZyYW1lc1wiXG4gICAgW2ZyYW1lQ29sb3JdPVwiZ2V0Q29sb3JCeUZyYW1lUmF0ZShlc3RpbWF0ZUZyYW1lUmF0ZShmcmFtZT8uZHVyYXRpb24pKVwiXG4gICAgW2VzdGltYXRlZEZyYW1lUmF0ZV09XCJlc3RpbWF0ZUZyYW1lUmF0ZShmcmFtZT8uZHVyYXRpb24pXCJcbiAgICBbdmlzdWFsaXphdGlvbk1vZGVdPVwidmlzdWFsaXphdGlvbk1vZGVcIlxuICAgIFtjaGFuZ2VEZXRlY3Rpb25dPVwiY2hhbmdlRGV0ZWN0aW9uXCJcbiAgICAoY2hhbmdlVmlzdWFsaXphdGlvbk1vZGUpPVwidmlzdWFsaXphdGlvbk1vZGUgPSAkZXZlbnRcIlxuICAgIChleHBvcnRQcm9maWxlKT1cImV4cG9ydFByb2ZpbGUuZW1pdCgkZXZlbnQpXCJcbiAgICAodG9nZ2xlQ2hhbmdlRGV0ZWN0aW9uKT1cImNoYW5nZURldGVjdGlvbiA9ICRldmVudFwiXG4gID48L25nLXRpbWVsaW5lLWNvbnRyb2xzPlxuXG4gIDxuZy1mcmFtZS1zZWxlY3RvclxuICAgIFtjbGFzcy5oaWRkZW5dPVwiIWhhc0ZyYW1lc1wiXG4gICAgW2dyYXBoRGF0YSRdPVwiZ3JhcGhEYXRhJFwiXG4gICAgKHNlbGVjdEZyYW1lcyk9XCJzZWxlY3RGcmFtZXMoJGV2ZW50KVwiXG4gID48L25nLWZyYW1lLXNlbGVjdG9yPlxuXG4gIDxwIGNsYXNzPVwiaW5mb1wiICpuZ0lmPVwiaGFzRnJhbWVzICYmICFmcmFtZVwiPlNlbGVjdCBhIGJhciB0byBwcmV2aWV3IGEgcGFydGljdWxhciBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlLjwvcD5cblxuICA8bmctdGltZWxpbmUtdmlzdWFsaXplclxuICAgICpuZ0lmPVwiaGFzRnJhbWVzICYmIGZyYW1lXCJcbiAgICBbdmlzdWFsaXphdGlvbk1vZGVdPVwidmlzdWFsaXphdGlvbk1vZGVcIlxuICAgIFtmcmFtZV09XCJmcmFtZVwiXG4gICAgW2NoYW5nZURldGVjdGlvbl09XCJjaGFuZ2VEZXRlY3Rpb25cIlxuICA+PC9uZy10aW1lbGluZS12aXN1YWxpemVyPlxuPC9kaXY+XG4iXX0=