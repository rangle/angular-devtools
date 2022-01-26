import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ROOT_LEVEL_ELEMENT_LABEL, FlamegraphFormatter, } from '../../record-formatter/flamegraph-formatter/flamegraph-formatter';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../theme-service";
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
    } }, directives: [i2.NgxFlamegraphComponent], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:flex;-webkit-user-select:text;-moz-user-select:text;user-select:text}[_nghost-%COMP%]   .level-profile-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;cursor:pointer;overflow-y:auto}[_nghost-%COMP%]     .ngx-fg-label{color:rgba(0,0,0,.8705882352941177);font-weight:500;font-size:1em}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#54c9bd}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-rect, .dark-theme   [_nghost-%COMP%]     .ngx-fg-rect{stroke:#303030;transition:none}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-label, .dark-theme   [_nghost-%COMP%]     .ngx-fg-label{color:#bcc5ce}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-svg-g, .dark-theme   [_nghost-%COMP%]     .ngx-fg-svg-g{transition:none}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWVncmFwaC12aXN1YWxpemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9wcm9maWxlci9yZWNvcmRpbmcvdGltZWxpbmUvcmVjb3JkaW5nLXZpc3VhbGl6ZXIvZmxhbWVncmFwaC12aXN1YWxpemVyL2ZsYW1lZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZGluZy12aXN1YWxpemVyL2ZsYW1lZ3JhcGgtdmlzdWFsaXplci9mbGFtZWdyYXBoLXZpc3VhbGl6ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixtQkFBbUIsR0FDcEIsTUFBTSxrRUFBa0UsQ0FBQzs7Ozs7QUFrQjFFLE1BQU0sT0FBTyw2QkFBNkI7SUF1QnhDLFlBQW1CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBdEI3QyxpQkFBWSxHQUFxQixFQUFFLENBQUM7UUFDcEMsU0FBSSxHQUFxQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUc1QixlQUFVLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3ZDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUszQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFZVCxDQUFDO0lBVmpELElBQWEsS0FBSyxDQUFDLEtBQW9CO1FBQ3JDLElB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SSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDL0csQ0FBQzs7MEdBdEZVLDZCQUE2QjtnRkFBN0IsNkJBQTZCO1FDeEIxQyw4QkFBbUM7UUFDakMseUNBSUM7UUFIQyxrSUFBYyx1QkFBbUIsSUFBQztRQUlwQyxpQkFBaUI7UUFDbkIsaUJBQU07O1FBSkYsZUFBZ0Q7UUFBaEQsaUZBQWdEOzt1RkRxQnZDLDZCQUE2QjtjQUx6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7K0RBWVcsVUFBVTtrQkFBbkIsTUFBTTtZQUVNLEtBQUs7a0JBQWpCLEtBQUs7WUFLTyxlQUFlO2tCQUEzQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEZsYW1lZ3JhcGhOb2RlLFxuICBST09UX0xFVkVMX0VMRU1FTlRfTEFCRUwsXG4gIEZsYW1lZ3JhcGhGb3JtYXR0ZXIsXG59IGZyb20gJy4uLy4uL3JlY29yZC1mb3JtYXR0ZXIvZmxhbWVncmFwaC1mb3JtYXR0ZXIvZmxhbWVncmFwaC1mb3JtYXR0ZXInO1xuaW1wb3J0IHsgQ29sb3IsIFJhd0RhdGEgfSBmcm9tICduZ3gtZmxhbWVncmFwaC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgUHJvZmlsZXJGcmFtZSB9IGZyb20gJ3Byb3RvY29sJztcbmltcG9ydCB7IFNlbGVjdGVkRGlyZWN0aXZlLCBTZWxlY3RlZEVudHJ5IH0gZnJvbSAnLi4vdGltZWxpbmUtdmlzdWFsaXplci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlbWUsIFRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhcGhOb2RlIHtcbiAgZGlyZWN0aXZlOiBzdHJpbmc7XG4gIG1ldGhvZDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1mbGFtZWdyYXBoLXZpc3VhbGl6ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmxhbWVncmFwaC12aXN1YWxpemVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxhbWVncmFwaC12aXN1YWxpemVyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZsYW1lZ3JhcGhWaXN1YWxpemVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcm9maWxlckJhcnM6IEZsYW1lZ3JhcGhOb2RlW10gPSBbXTtcbiAgdmlldzogW251bWJlciwgbnVtYmVyXSA9IFsyMzUsIDIwMF07XG4gIGNvbG9yczogQ29sb3I7XG5cbiAgcHJpdmF0ZSBfZm9ybWF0dGVyID0gbmV3IEZsYW1lZ3JhcGhGb3JtYXR0ZXIoKTtcbiAgcHJpdmF0ZSBfc2hvd0NoYW5nZURldGVjdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9mcmFtZTogUHJvZmlsZXJGcmFtZTtcbiAgcHJpdmF0ZSBfY3VycmVudFRoZW1lU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGN1cnJlbnRUaGVtZTogVGhlbWU7XG5cbiAgQE91dHB1dCgpIG5vZGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdGVkRW50cnk+KCk7XG5cbiAgQElucHV0KCkgc2V0IGZyYW1lKGZyYW1lOiBQcm9maWxlckZyYW1lKSB7XG4gICAgdGhpcy5fZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLl9zZWxlY3RGcmFtZSgpO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGNoYW5nZURldGVjdGlvbihjaGFuZ2VEZXRlY3Rpb246IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Q2hhbmdlRGV0ZWN0aW9uID0gY2hhbmdlRGV0ZWN0aW9uO1xuICAgIHRoaXMuX3NlbGVjdEZyYW1lKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGhlbWVTZXJ2aWNlOiBUaGVtZVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY3VycmVudFRoZW1lU3Vic2NyaXB0aW9uID0gdGhpcy50aGVtZVNlcnZpY2UuY3VycmVudFRoZW1lLnN1YnNjcmliZSgodGhlbWUpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gdGhlbWU7XG4gICAgICB0aGlzLmNvbG9ycyA9XG4gICAgICAgIHRoZW1lID09PSAnZGFyay10aGVtZSdcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgaHVlOiBbMjEwLCA5MF0sXG4gICAgICAgICAgICAgIHNhdHVyYXRpb246IFs5MCwgOTBdLFxuICAgICAgICAgICAgICBsaWdodG5lc3M6IFsyNSwgMjVdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge1xuICAgICAgICAgICAgICBodWU6IFs1MCwgMTVdLFxuICAgICAgICAgICAgICBzYXR1cmF0aW9uOiBbMTAwLCAxMDBdLFxuICAgICAgICAgICAgICBsaWdodG5lc3M6IFs3NSwgNzVdLFxuICAgICAgICAgICAgfTtcbiAgICAgIHRoaXMuX3NlbGVjdEZyYW1lKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50VGhlbWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHNlbGVjdEZyYW1lKGZyYW1lOiBSYXdEYXRhKTogdm9pZCB7XG4gICAgaWYgKGZyYW1lLmxhYmVsID09PSBST09UX0xFVkVMX0VMRU1FTlRfTEFCRUwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmbGFtZUdyYXBoTm9kZSA9IGZyYW1lIGFzIEZsYW1lZ3JhcGhOb2RlO1xuICAgIGNvbnN0IGRpcmVjdGl2ZURhdGEgPSB0aGlzLmZvcm1hdEVudHJ5RGF0YShmbGFtZUdyYXBoTm9kZSk7XG5cbiAgICB0aGlzLm5vZGVTZWxlY3QuZW1pdCh7XG4gICAgICBlbnRyeTogZmxhbWVHcmFwaE5vZGUsXG4gICAgICBzZWxlY3RlZERpcmVjdGl2ZXM6IGRpcmVjdGl2ZURhdGEsXG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXRFbnRyeURhdGEoZmxhbWVHcmFwaE5vZGU6IEZsYW1lZ3JhcGhOb2RlKTogU2VsZWN0ZWREaXJlY3RpdmVbXSB7XG4gICAgY29uc3QgZ3JhcGhEYXRhOiBTZWxlY3RlZERpcmVjdGl2ZVtdID0gW107XG4gICAgZmxhbWVHcmFwaE5vZGUub3JpZ2luYWwuZGlyZWN0aXZlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGFuZ2VEZXRlY3Rpb24gPSBub2RlLmNoYW5nZURldGVjdGlvbjtcbiAgICAgIGlmIChjaGFuZ2VEZXRlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBncmFwaERhdGEucHVzaCh7XG4gICAgICAgICAgZGlyZWN0aXZlOiBub2RlLm5hbWUsXG4gICAgICAgICAgbWV0aG9kOiAnY2hhbmdlcycsXG4gICAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoY2hhbmdlRGV0ZWN0aW9uLnRvRml4ZWQoMikpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKG5vZGUubGlmZWN5Y2xlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgZ3JhcGhEYXRhLnB1c2goe1xuICAgICAgICAgIGRpcmVjdGl2ZTogbm9kZS5uYW1lLFxuICAgICAgICAgIG1ldGhvZDoga2V5LFxuICAgICAgICAgIHZhbHVlOiArbm9kZS5saWZlY3ljbGVba2V5XS50b0ZpeGVkKDIpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBncmFwaERhdGE7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RGcmFtZSgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2ZpbGVyQmFycyA9IFt0aGlzLl9mb3JtYXR0ZXIuZm9ybWF0RnJhbWUodGhpcy5fZnJhbWUsIHRoaXMuX3Nob3dDaGFuZ2VEZXRlY3Rpb24sIHRoaXMuY3VycmVudFRoZW1lKV07XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJsZXZlbC1wcm9maWxlLXdyYXBwZXJcIj5cbiAgPG5neC1mbGFtZWdyYXBoXG4gICAgKGZyYW1lQ2xpY2spPVwic2VsZWN0RnJhbWUoJGV2ZW50KVwiXG4gICAgW2NvbmZpZ109XCJ7IGRhdGE6IHByb2ZpbGVyQmFycywgY29sb3I6IGNvbG9ycyB9XCJcbiAgICBzaWJsaW5nTGF5b3V0PVwiZXF1YWxcIlxuICA+XG4gIDwvbmd4LWZsYW1lZ3JhcGg+XG48L2Rpdj5cbiJdfQ==