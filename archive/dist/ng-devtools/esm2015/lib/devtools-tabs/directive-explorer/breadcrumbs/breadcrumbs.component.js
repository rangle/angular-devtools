import { Component, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
const _c0 = ["breadcrumbs"];
function BreadcrumbsComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("mouseover", function BreadcrumbsComponent_button_6_Template_button_mouseover_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const node_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.mouseOverNode.emit(node_r2); })("mouseleave", function BreadcrumbsComponent_button_6_Template_button_mouseleave_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const node_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.mouseLeaveNode.emit(node_r2); })("click", function BreadcrumbsComponent_button_6_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const node_r2 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.handleSelect.emit(node_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    i0.ɵɵclassProp("selected", last_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (node_r2.original.component == null ? null : node_r2.original.component.name) || node_r2.original.element, " ");
} }
export class BreadcrumbsComponent {
    constructor() {
        this.handleSelect = new EventEmitter();
        this.mouseOverNode = new EventEmitter();
        this.mouseLeaveNode = new EventEmitter();
        this.showScrollLeftButton = false;
        this.showScrollRightButton = false;
        this.updateScrollButtonVisibility$ = new Subject();
    }
    ngOnInit() {
        this.updateScrollButtonVisibility$.pipe(debounceTime(100)).subscribe(() => this.updateScrollButtonVisibility());
    }
    ngAfterViewInit() {
        this.updateScrollButtonVisibility$.next();
    }
    ngOnChanges() {
        this.updateScrollButtonVisibility$.next();
    }
    onResize() {
        this.updateScrollButtonVisibility$.next();
    }
    scroll(pixels) {
        this.breadcrumbsScrollContent.nativeElement.scrollLeft += pixels;
        this.updateScrollButtonVisibility$.next();
    }
    updateScrollButtonVisibility() {
        const { clientWidth, scrollWidth, scrollLeft } = this.breadcrumbsScrollContent.nativeElement;
        this.showScrollLeftButton = scrollLeft > 0;
        this.showScrollRightButton = scrollLeft + clientWidth < scrollWidth;
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["ng-breadcrumbs"]], viewQuery: function BreadcrumbsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.breadcrumbsScrollContent = _t.first);
    } }, hostBindings: function BreadcrumbsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function BreadcrumbsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { parents: "parents" }, outputs: { handleSelect: "handleSelect", mouseOverNode: "mouseOverNode", mouseLeaveNode: "mouseLeaveNode" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 5, consts: [[1, "breadcrumb-card"], [1, "scroll-button", 3, "click"], [1, "breadcrumbs", 3, "scroll"], ["breadcrumbs", ""], ["mat-button", "", "color", "primary", 3, "selected", "mouseover", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "mouseover", "mouseleave", "click"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function BreadcrumbsComponent_Template_button_click_1_listener() { return ctx.scroll(-100); });
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, " more_horiz ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2, 3);
        i0.ɵɵlistener("scroll", function BreadcrumbsComponent_Template_div_scroll_4_listener() { return ctx.updateScrollButtonVisibility$.next(); });
        i0.ɵɵtemplate(6, BreadcrumbsComponent_button_6_Template, 2, 3, "button", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 1);
        i0.ɵɵlistener("click", function BreadcrumbsComponent_Template_button_click_7_listener() { return ctx.scroll(100); });
        i0.ɵɵelementStart(8, "mat-icon");
        i0.ɵɵtext(9, " more_horiz ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.showScrollLeftButton);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.parents);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.showScrollRightButton);
    } }, directives: [i1.MatCard, i2.MatIcon, i3.NgForOf, i4.MatButton], styles: [".mat-card.breadcrumb-card[_ngcontent-%COMP%]{padding:0;width:100%;height:24px;display:flex}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%]{height:100%;background-color:#f3f3f3;border:none;cursor:pointer}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button.hidden[_ngcontent-%COMP%]{visibility:hidden}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]{overflow-x:auto;white-space:nowrap;display:inline-block;width:calc(100% - 50px);height:100%;scroll-behavior:smooth}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background-color:#f3f3f3}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{height:20px;line-height:20px;font-size:11px;margin-right:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#8a1882}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%]{background-color:#292a2d;color:#fff}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background-color:#292a2d}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{color:#5caace}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover{background-color:#093e69}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.scss'],
            }]
    }], null, { parents: [{
            type: Input
        }], handleSelect: [{
            type: Output
        }], mouseOverNode: [{
            type: Output
        }], mouseLeaveNode: [{
            type: Output
        }], breadcrumbsScrollContent: [{
            type: ViewChild,
            args: ['breadcrumbs']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDTDFDLGlDQVFDO0lBTkMsdU9BQWEsa0NBQXdCLElBQUMsNE5BQ3hCLG1DQUF5QixJQURELGtOQUk3QixpQ0FBdUIsSUFKTTtJQU90QyxZQUNGO0lBQUEsaUJBQVM7Ozs7SUFIUCxtQ0FBdUI7SUFFdkIsZUFDRjtJQURFLDBJQUNGOztBREdKLE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFPWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk5Qyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRTlCLGtDQUE2QixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7S0E2QnJEO0lBM0JDLFFBQVE7UUFDTixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBYztRQUNuQixJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUM7UUFDakUsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCw0QkFBNEI7UUFDMUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztRQUM3RixJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsVUFBVSxHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDdEUsQ0FBQzs7d0ZBdkNVLG9CQUFvQjt1RUFBcEIsb0JBQW9COzs7Ozs7eUdBQXBCLG9CQUFnQjs7UUNyQjdCLG1DQUFrQztRQUNoQyxpQ0FBNEY7UUFBdkIsaUdBQVMsWUFBUSxHQUFHLENBQUMsSUFBQztRQUN6RixnQ0FBVTtRQUNSLDRCQUNGO1FBQUEsaUJBQVc7UUFDYixpQkFBUztRQUVULGlDQUFzRjtRQUFoRCxnR0FBVSx3Q0FBb0MsSUFBQztRQUNuRiwyRUFVUztRQUNYLGlCQUFNO1FBRU4saUNBQTRGO1FBQXRCLGlHQUFTLFdBQU8sR0FBRyxDQUFDLElBQUM7UUFDekYsZ0NBQVU7UUFDUiw0QkFDRjtRQUFBLGlCQUFXO1FBQ2IsaUJBQVM7UUFDWCxpQkFBVzs7UUF6QnFCLGVBQXNDO1FBQXRDLG1EQUFzQztRQVEvQyxlQUFZO1FBQVoscUNBQVk7UUFZSCxlQUF1QztRQUF2QyxvREFBdUM7O3VGREExRCxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDO2dCQUVVLE9BQU87a0JBQWYsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUVtQix3QkFBd0I7a0JBQWpELFNBQVM7bUJBQUMsYUFBYTtZQW9CeEIsUUFBUTtrQkFEUCxZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmxhdE5vZGUgfSBmcm9tICcuLi9kaXJlY3RpdmUtZm9yZXN0L2NvbXBvbmVudC1kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHBhcmVudHM6IEZsYXROb2RlW107XG4gIEBPdXRwdXQoKSBoYW5kbGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBtb3VzZU92ZXJOb2RlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbW91c2VMZWF2ZU5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnYnJlYWRjcnVtYnMnKSBicmVhZGNydW1ic1Njcm9sbENvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgc2hvd1Njcm9sbExlZnRCdXR0b24gPSBmYWxzZTtcbiAgc2hvd1Njcm9sbFJpZ2h0QnV0dG9uID0gZmFsc2U7XG5cbiAgdXBkYXRlU2Nyb2xsQnV0dG9uVmlzaWJpbGl0eSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsQnV0dG9uVmlzaWJpbGl0eSQucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU2Nyb2xsQnV0dG9uVmlzaWJpbGl0eSgpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbEJ1dHRvblZpc2liaWxpdHkkLm5leHQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsQnV0dG9uVmlzaWJpbGl0eSQubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2Nyb2xsQnV0dG9uVmlzaWJpbGl0eSQubmV4dCgpO1xuICB9XG5cbiAgc2Nyb2xsKHBpeGVsczogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5icmVhZGNydW1ic1Njcm9sbENvbnRlbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICs9IHBpeGVscztcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbEJ1dHRvblZpc2liaWxpdHkkLm5leHQoKTtcbiAgfVxuXG4gIHVwZGF0ZVNjcm9sbEJ1dHRvblZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIHNjcm9sbExlZnQgfSA9IHRoaXMuYnJlYWRjcnVtYnNTY3JvbGxDb250ZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5zaG93U2Nyb2xsTGVmdEJ1dHRvbiA9IHNjcm9sbExlZnQgPiAwO1xuICAgIHRoaXMuc2hvd1Njcm9sbFJpZ2h0QnV0dG9uID0gc2Nyb2xsTGVmdCArIGNsaWVudFdpZHRoIDwgc2Nyb2xsV2lkdGg7XG4gIH1cbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImJyZWFkY3J1bWItY2FyZFwiPlxuICA8YnV0dG9uIGNsYXNzPVwic2Nyb2xsLWJ1dHRvblwiIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dTY3JvbGxMZWZ0QnV0dG9uXCIgKGNsaWNrKT1cInNjcm9sbCgtMTAwKVwiPlxuICAgIDxtYXQtaWNvbj5cbiAgICAgIG1vcmVfaG9yaXpcbiAgICA8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cblxuICA8ZGl2IGNsYXNzPVwiYnJlYWRjcnVtYnNcIiAjYnJlYWRjcnVtYnMgKHNjcm9sbCk9XCJ1cGRhdGVTY3JvbGxCdXR0b25WaXNpYmlsaXR5JC5uZXh0KClcIj5cbiAgICA8YnV0dG9uXG4gICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiBwYXJlbnRzOyBsZXQgbGFzdCA9IGxhc3RcIlxuICAgICAgKG1vdXNlb3Zlcik9XCJtb3VzZU92ZXJOb2RlLmVtaXQobm9kZSlcIlxuICAgICAgKG1vdXNlbGVhdmUpPVwibW91c2VMZWF2ZU5vZGUuZW1pdChub2RlKVwiXG4gICAgICBtYXQtYnV0dG9uXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgKGNsaWNrKT1cImhhbmRsZVNlbGVjdC5lbWl0KG5vZGUpXCJcbiAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJsYXN0XCJcbiAgICA+XG4gICAgICB7eyBub2RlLm9yaWdpbmFsLmNvbXBvbmVudD8ubmFtZSB8fCBub2RlLm9yaWdpbmFsLmVsZW1lbnQgfX1cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGJ1dHRvbiBjbGFzcz1cInNjcm9sbC1idXR0b25cIiBbY2xhc3MuaGlkZGVuXT1cIiFzaG93U2Nyb2xsUmlnaHRCdXR0b25cIiAoY2xpY2spPVwic2Nyb2xsKDEwMClcIj5cbiAgICA8bWF0LWljb24+XG4gICAgICBtb3JlX2hvcml6XG4gICAgPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L21hdC1jYXJkPlxuIl19