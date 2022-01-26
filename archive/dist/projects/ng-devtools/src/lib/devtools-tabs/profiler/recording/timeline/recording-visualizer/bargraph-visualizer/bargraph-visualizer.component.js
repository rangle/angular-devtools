import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarGraphFormatter } from '../../record-formatter/bargraph-formatter';
import * as i0 from "@angular/core";
import * as i1 from "projects/ng-devtools/src/lib/theme-service";
import * as i2 from "../bar-chart/bar-chart.component";
export class BargraphVisualizerComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.nodeSelect = new EventEmitter();
        this._formatter = new BarGraphFormatter();
    }
    set frame(data) {
        this.profileRecords = this._formatter.formatFrame(data);
    }
    ngOnInit() {
        this._currentThemeSubscription = this.themeService.currentTheme.subscribe((theme) => {
            this.currentTheme = theme;
            this.barColor = theme === 'dark-theme' ? '#073d69' : '#cfe8fc';
        });
    }
    ngOnDestroy() {
        this._currentThemeSubscription.unsubscribe();
    }
    formatEntryData(bargraphNode) {
        const graphData = [];
        bargraphNode.original.directives.forEach((node) => {
            const { changeDetection } = node;
            if (changeDetection) {
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
    selectNode(node) {
        this.nodeSelect.emit({
            entry: node,
            parentHierarchy: node.parents.map((element) => {
                return { name: element.directives[0].name };
            }),
            selectedDirectives: this.formatEntryData(node),
        });
    }
}
BargraphVisualizerComponent.ɵfac = function BargraphVisualizerComponent_Factory(t) { return new (t || BargraphVisualizerComponent)(i0.ɵɵdirectiveInject(i1.ThemeService)); };
BargraphVisualizerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BargraphVisualizerComponent, selectors: [["ng-bargraph-visualizer"]], inputs: { frame: "frame" }, outputs: { nodeSelect: "nodeSelect" }, decls: 2, vars: 2, consts: [[1, "level-profile-wrapper"], [3, "color", "data", "barClick"]], template: function BargraphVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ng-bar-chart", 1);
        i0.ɵɵlistener("barClick", function BargraphVisualizerComponent_Template_ng_bar_chart_barClick_1_listener($event) { return ctx.selectNode($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.barColor)("data", ctx.profileRecords);
    } }, directives: [i2.BarChartComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  overflow-y: auto;\n}\n\n.level-profile-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BargraphVisualizerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-bargraph-visualizer',
                templateUrl: './bargraph-visualizer.component.html',
                styleUrls: ['./bargraph-visualizer.component.scss'],
            }]
    }], function () { return [{ type: i1.ThemeService }]; }, { nodeSelect: [{
            type: Output
        }], frame: [{
            type: Input
        }] }); })();
//# sourceMappingURL=bargraph-visualizer.component.js.map