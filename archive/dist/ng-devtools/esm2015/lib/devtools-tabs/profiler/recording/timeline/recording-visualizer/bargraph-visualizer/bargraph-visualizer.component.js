import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BarGraphFormatter } from '../../record-formatter/bargraph-formatter';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../theme-service";
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
    } }, directives: [i2.BarChartComponent], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:flex;-webkit-user-select:text;-moz-user-select:text;user-select:text;overflow-y:auto}.level-profile-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;cursor:pointer}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZGluZy12aXN1YWxpemVyL2JhcmdyYXBoLXZpc3VhbGl6ZXIvYmFyZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZGluZy12aXN1YWxpemVyL2JhcmdyYXBoLXZpc3VhbGl6ZXIvYmFyZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQWdCLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7Ozs7QUFXNUYsTUFBTSxPQUFPLDJCQUEyQjtJQWN0QyxZQUFtQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVZuQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFakQsZUFBVSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQVFHLENBQUM7SUFKakQsSUFBYSxLQUFLLENBQUMsSUFBbUI7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNsRixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWUsQ0FBQyxZQUEwQjtRQUN4QyxNQUFNLFNBQVMsR0FBd0IsRUFBRSxDQUFDO1FBQzFDLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2hELE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNwQixNQUFNLEVBQUUsU0FBUztvQkFDakIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM5QyxDQUFDLENBQUM7YUFDSjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUMxQyxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDcEIsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUN2QyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFrQjtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQixLQUFLLEVBQUUsSUFBSTtZQUNYLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBQ0Ysa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7U0FDL0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7c0dBekRVLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FDWnhDLDhCQUFtQztRQUNqQyx1Q0FBeUY7UUFBM0UsMEhBQVksc0JBQWtCLElBQUM7UUFBNkMsaUJBQWU7UUFDM0csaUJBQU07O1FBRDBDLGVBQWtCO1FBQWxCLG9DQUFrQiw0QkFBQTs7dUZEV3JELDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7K0RBS1csVUFBVTtrQkFBbkIsTUFBTTtZQU1NLEtBQUs7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhcmdyYXBoTm9kZSwgQmFyR3JhcGhGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9yZWNvcmQtZm9ybWF0dGVyL2JhcmdyYXBoLWZvcm1hdHRlcic7XG5pbXBvcnQgeyBQcm9maWxlckZyYW1lIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgU2VsZWN0ZWREaXJlY3RpdmUsIFNlbGVjdGVkRW50cnkgfSBmcm9tICcuLi90aW1lbGluZS12aXN1YWxpemVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUtc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctYmFyZ3JhcGgtdmlzdWFsaXplcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXJncmFwaC12aXN1YWxpemVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFyZ3JhcGgtdmlzdWFsaXplci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCYXJncmFwaFZpc3VhbGl6ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGJhckNvbG9yOiBzdHJpbmc7XG4gIHByb2ZpbGVSZWNvcmRzOiBCYXJncmFwaE5vZGVbXTtcblxuICBAT3V0cHV0KCkgbm9kZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0ZWRFbnRyeT4oKTtcblxuICBwcml2YXRlIF9mb3JtYXR0ZXIgPSBuZXcgQmFyR3JhcGhGb3JtYXR0ZXIoKTtcbiAgcHJpdmF0ZSBfY3VycmVudFRoZW1lU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGN1cnJlbnRUaGVtZTogVGhlbWU7XG5cbiAgQElucHV0KCkgc2V0IGZyYW1lKGRhdGE6IFByb2ZpbGVyRnJhbWUpIHtcbiAgICB0aGlzLnByb2ZpbGVSZWNvcmRzID0gdGhpcy5fZm9ybWF0dGVyLmZvcm1hdEZyYW1lKGRhdGEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRoZW1lU2VydmljZTogVGhlbWVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2N1cnJlbnRUaGVtZVN1YnNjcmlwdGlvbiA9IHRoaXMudGhlbWVTZXJ2aWNlLmN1cnJlbnRUaGVtZS5zdWJzY3JpYmUoKHRoZW1lKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZSA9IHRoZW1lO1xuICAgICAgdGhpcy5iYXJDb2xvciA9IHRoZW1lID09PSAnZGFyay10aGVtZScgPyAnIzA3M2Q2OScgOiAnI2NmZThmYyc7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50VGhlbWVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGZvcm1hdEVudHJ5RGF0YShiYXJncmFwaE5vZGU6IEJhcmdyYXBoTm9kZSk6IFNlbGVjdGVkRGlyZWN0aXZlW10ge1xuICAgIGNvbnN0IGdyYXBoRGF0YTogU2VsZWN0ZWREaXJlY3RpdmVbXSA9IFtdO1xuICAgIGJhcmdyYXBoTm9kZS5vcmlnaW5hbC5kaXJlY3RpdmVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHsgY2hhbmdlRGV0ZWN0aW9uIH0gPSBub2RlO1xuICAgICAgaWYgKGNoYW5nZURldGVjdGlvbikge1xuICAgICAgICBncmFwaERhdGEucHVzaCh7XG4gICAgICAgICAgZGlyZWN0aXZlOiBub2RlLm5hbWUsXG4gICAgICAgICAgbWV0aG9kOiAnY2hhbmdlcycsXG4gICAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoY2hhbmdlRGV0ZWN0aW9uLnRvRml4ZWQoMikpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKG5vZGUubGlmZWN5Y2xlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgZ3JhcGhEYXRhLnB1c2goe1xuICAgICAgICAgIGRpcmVjdGl2ZTogbm9kZS5uYW1lLFxuICAgICAgICAgIG1ldGhvZDoga2V5LFxuICAgICAgICAgIHZhbHVlOiArbm9kZS5saWZlY3ljbGVba2V5XS50b0ZpeGVkKDIpLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBncmFwaERhdGE7XG4gIH1cblxuICBzZWxlY3ROb2RlKG5vZGU6IEJhcmdyYXBoTm9kZSk6IHZvaWQge1xuICAgIHRoaXMubm9kZVNlbGVjdC5lbWl0KHtcbiAgICAgIGVudHJ5OiBub2RlLFxuICAgICAgcGFyZW50SGllcmFyY2h5OiBub2RlLnBhcmVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6IGVsZW1lbnQuZGlyZWN0aXZlc1swXS5uYW1lIH07XG4gICAgICB9KSxcbiAgICAgIHNlbGVjdGVkRGlyZWN0aXZlczogdGhpcy5mb3JtYXRFbnRyeURhdGEobm9kZSksXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJsZXZlbC1wcm9maWxlLXdyYXBwZXJcIj5cbiAgPG5nLWJhci1jaGFydCAoYmFyQ2xpY2spPVwic2VsZWN0Tm9kZSgkZXZlbnQpXCIgW2NvbG9yXT1cImJhckNvbG9yXCIgW2RhdGFdPVwicHJvZmlsZVJlY29yZHNcIj4gPC9uZy1iYXItY2hhcnQ+XG48L2Rpdj5cbiJdfQ==