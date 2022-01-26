import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ROOT_LEVEL_ELEMENT_LABEL, FlamegraphFormatter, } from '../../record-formatter/flamegraph-formatter/flamegraph-formatter';
import * as i0 from "@angular/core";
import * as i1 from "projects/ng-devtools/src/lib/theme-service";
import * as i2 from "ngx-flamegraph";
const _c0 = function (a0, a1) { return { data: a0, color: a1 }; };
export class FlamegraphVisualizerComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.profilerBars = [];
        this.view = [235, 200];
        this._formatter = new FlamegraphFormatter();
        this._showChangeDetection = false;
        this.nodeSelect = new EventEmitter();
    }
    set frame(frame) {
        this._frame = frame;
        this._selectFrame();
    }
    set changeDetection(changeDetection) {
        this._showChangeDetection = changeDetection;
        this._selectFrame();
    }
    ngOnInit() {
        this._currentThemeSubscription = this.themeService.currentTheme.subscribe((theme) => {
            this.currentTheme = theme;
            this.colors =
                theme === 'dark-theme'
                    ? {
                        hue: [210, 90],
                        saturation: [90, 90],
                        lightness: [25, 25],
                    }
                    : {
                        hue: [50, 15],
                        saturation: [100, 100],
                        lightness: [75, 75],
                    };
            this._selectFrame();
        });
    }
    ngOnDestroy() {
        this._currentThemeSubscription.unsubscribe();
    }
    selectFrame(frame) {
        if (frame.label === ROOT_LEVEL_ELEMENT_LABEL) {
            return;
        }
        const flameGraphNode = frame;
        const directiveData = this.formatEntryData(flameGraphNode);
        this.nodeSelect.emit({
            entry: flameGraphNode,
            selectedDirectives: directiveData,
        });
    }
    formatEntryData(flameGraphNode) {
        const graphData = [];
        flameGraphNode.original.directives.forEach((node) => {
            const changeDetection = node.changeDetection;
            if (changeDetection !== undefined) {
                graphData.push({
                    directive: node.name,
                    method: 'changes',
                    value: parseFloat(changeDetection.toFixed(2)),
                });
            }
            Object.keys(node.lifecycle).forEach((key) => {
                graphData.push({
                    directive: node.name,
                    method: key,
                    value: +node.lifecycle[key].toFixed(2),
                });
            });
        });
        return graphData;
    }
    _selectFrame() {
        this.profilerBars = [this._formatter.formatFrame(this._frame, this._showChangeDetection, this.currentTheme)];
    }
}
FlamegraphVisualizerComponent.ɵfac = function FlamegraphVisualizerComponent_Factory(t) { return new (t || FlamegraphVisualizerComponent)(i0.ɵɵdirectiveInject(i1.ThemeService)); };
FlamegraphVisualizerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FlamegraphVisualizerComponent, selectors: [["ng-flamegraph-visualizer"]], inputs: { frame: "frame", changeDetection: "changeDetection" }, outputs: { nodeSelect: "nodeSelect" }, decls: 2, vars: 4, consts: [[1, "level-profile-wrapper"], ["siblingLayout", "equal", 3, "config", "frameClick"]], template: function FlamegraphVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ngx-flamegraph", 1);
        i0.ɵɵlistener("frameClick", function FlamegraphVisualizerComponent_Template_ngx_flamegraph_frameClick_1_listener($event) { return ctx.selectFrame($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("config", i0.ɵɵpureFunction2(1, _c0, ctx.profilerBars, ctx.colors));
    } }, directives: [i2.NgxFlamegraphComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n\n  .level-profile-wrapper {\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n    overflow-y: auto;\n  }\n\n  ::ng-deep {\n    .ngx-fg-label {\n      color: #000000de;\n      font-weight: 500;\n      font-size: 1em;\n    }\n  }\n\n  .dark-theme-shadowcsshost-no-combinator , .dark-theme -shadowcsshost-no-combinator {\n    .entry-statistics {\n      span {\n        color: #54c9bd;\n      }\n    }\n\n    ::ng-deep {\n      .ngx-fg-rect {\n        stroke: #303030;\n        transition: none;\n      }\n\n      .ngx-fg-label {\n        color: #bcc5ce;\n      }\n\n      .ngx-fg-svg-g {\n        transition: none;\n      }\n    }\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlamegraphVisualizerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-flamegraph-visualizer',
                templateUrl: './flamegraph-visualizer.component.html',
                styleUrls: ['./flamegraph-visualizer.component.scss'],
            }]
    }], function () { return [{ type: i1.ThemeService }]; }, { nodeSelect: [{
            type: Output
        }], frame: [{
            type: Input
        }], changeDetection: [{
            type: Input
        }] }); })();
//# sourceMappingURL=flamegraph-visualizer.component.js.map