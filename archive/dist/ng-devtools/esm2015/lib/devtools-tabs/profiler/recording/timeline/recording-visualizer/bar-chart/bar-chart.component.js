import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, animate, transition, stagger, query, animateChild } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tooltip";
function BarChartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function BarChartComponent_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.barClick.emit(ctx_r3.originalData[i_r2]); });
    i0.ɵɵelementStart(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r0.color)("width", bar_r1.value, "%");
    i0.ɵɵproperty("@appear", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", bar_r1.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(bar_r1.label);
} }
export class BarChartComponent {
    constructor() {
        this.barClick = new EventEmitter();
        this.internalData = [];
    }
    set data(nodes) {
        this.originalData = nodes;
        this.internalData = [];
        const max = nodes.reduce((a, c) => Math.max(a, c.value), -Infinity);
        for (const node of nodes) {
            this.internalData.push({
                label: node.label,
                value: (node.value / max) * 100,
            });
        }
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarChartComponent, selectors: [["ng-bar-chart"]], inputs: { data: "data", color: "color" }, outputs: { barClick: "barClick" }, decls: 2, vars: 2, consts: [[1, "wrapper"], ["class", "bar", 3, "backgroundColor", "width", "click", 4, "ngFor", "ngForOf"], [1, "bar", 3, "click"], [3, "matTooltip"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, BarChartComponent_div_1_Template, 3, 7, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@stagger", undefined);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.internalData);
    } }, directives: [i1.NgForOf, i2.MatTooltip], styles: [".bar[_ngcontent-%COMP%]{width:0;margin-bottom:7px;align-items:center;display:flex;padding-top:3px;padding-bottom:3px;opacity:.8;cursor:pointer;transition:opacity .3s ease-out,width .3s ease}.bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px;max-width:calc(100% - 20px);display:inline-block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;opacity:1}.bar[_ngcontent-%COMP%]:hover{opacity:1}.wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:calc(100% - 5px);height:100%;display:block}.dark-theme[_nghost-%COMP%]   .bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#bcc5ce}"], data: { animation: [
            trigger('appear', [transition(':enter', [style({ width: 0 }), animate('.3s ease', style({ width: '*' }))])]),
            trigger('stagger', [transition(':enter', [query(':enter', stagger('.1s', [animateChild()]))])]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarChartComponent, [{
        type: Component,
        args: [{
                selector: 'ng-bar-chart',
                templateUrl: './bar-chart.component.html',
                styleUrls: ['./bar-chart.component.scss'],
                animations: [
                    trigger('appear', [transition(':enter', [style({ width: 0 }), animate('.3s ease', style({ width: '*' }))])]),
                    trigger('stagger', [transition(':enter', [query(':enter', stagger('.1s', [animateChild()]))])]),
                ],
            }]
    }], null, { data: [{
            type: Input
        }], color: [{
            type: Input
        }], barClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9wcm9maWxlci9yZWNvcmRpbmcvdGltZWxpbmUvcmVjb3JkaW5nLXZpc3VhbGl6ZXIvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZGluZy12aXN1YWxpemVyL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7OztJQ0F0Ryw4QkFPQztJQUpDLCtNQUFTLCtDQUE4QixJQUFDO0lBS3hDLCtCQUErQjtJQUFBLFlBQWU7SUFBQSxpQkFBTztJQUN2RCxpQkFBTTs7OztJQUpKLGdEQUErQiw0QkFBQTtJQUovQixtQ0FBTztJQU9ELGVBQXdCO0lBQXhCLHlDQUF3QjtJQUFDLGVBQWU7SUFBZixrQ0FBZTs7QURRbEQsTUFBTSxPQUFPLGlCQUFpQjtJQVQ5QjtRQXNCWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUc5QyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztLQUMzQjtJQWhCQyxJQUFhLElBQUksQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7YUFDaEMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztrRkFYVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtRQ2pCOUIsOEJBQThCO1FBQzVCLGtFQVNNO1FBQ1IsaUJBQU07O1FBWGUsb0NBQVE7UUFHVCxlQUFpQjtRQUFqQiwwQ0FBaUI7a3dCRFN2QjtZQUNWLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEc7dUZBRVUsaUJBQWlCO2NBVDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEc7YUFDRjtnQkFFYyxJQUFJO2tCQUFoQixLQUFLO1lBV0csS0FBSztrQkFBYixLQUFLO1lBQ0ksUUFBUTtrQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgc3RhZ2dlciwgcXVlcnksIGFuaW1hdGVDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWJhci1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FwcGVhcicsIFt0cmFuc2l0aW9uKCc6ZW50ZXInLCBbc3R5bGUoeyB3aWR0aDogMCB9KSwgYW5pbWF0ZSgnLjNzIGVhc2UnLCBzdHlsZSh7IHdpZHRoOiAnKicgfSkpXSldKSxcbiAgICB0cmlnZ2VyKCdzdGFnZ2VyJywgW3RyYW5zaXRpb24oJzplbnRlcicsIFtxdWVyeSgnOmVudGVyJywgc3RhZ2dlcignLjFzJywgW2FuaW1hdGVDaGlsZCgpXSkpXSldKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnRDb21wb25lbnQge1xuICBASW5wdXQoKSBzZXQgZGF0YShub2RlczogRGF0YVtdKSB7XG4gICAgdGhpcy5vcmlnaW5hbERhdGEgPSBub2RlcztcbiAgICB0aGlzLmludGVybmFsRGF0YSA9IFtdO1xuICAgIGNvbnN0IG1heCA9IG5vZGVzLnJlZHVjZSgoYTogbnVtYmVyLCBjKSA9PiBNYXRoLm1heChhLCBjLnZhbHVlKSwgLUluZmluaXR5KTtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxEYXRhLnB1c2goe1xuICAgICAgICBsYWJlbDogbm9kZS5sYWJlbCxcbiAgICAgICAgdmFsdWU6IChub2RlLnZhbHVlIC8gbWF4KSAqIDEwMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBAT3V0cHV0KCkgYmFyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGE+KCk7XG5cbiAgb3JpZ2luYWxEYXRhOiBEYXRhW107XG4gIGludGVybmFsRGF0YTogRGF0YVtdID0gW107XG59XG4iLCI8ZGl2IGNsYXNzPVwid3JhcHBlclwiIEBzdGFnZ2VyPlxuICA8ZGl2XG4gICAgQGFwcGVhclxuICAgICpuZ0Zvcj1cImxldCBiYXIgb2YgaW50ZXJuYWxEYXRhOyBsZXQgaSA9IGluZGV4XCJcbiAgICAoY2xpY2spPVwiYmFyQ2xpY2suZW1pdChvcmlnaW5hbERhdGFbaV0pXCJcbiAgICBjbGFzcz1cImJhclwiXG4gICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiXG4gICAgW3N0eWxlLndpZHRoLiVdPVwiYmFyLnZhbHVlXCJcbiAgPlxuICAgIDxzcGFuIFttYXRUb29sdGlwXT1cImJhci5sYWJlbFwiPnt7IGJhci5sYWJlbCB9fTwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==