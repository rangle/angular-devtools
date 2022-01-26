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
    } }, directives: [i1.MatCard, i2.MatIcon, i3.NgForOf, i4.MatButton], styles: [".mat-card.breadcrumb-card[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  height: 24px;\n  display: flex;\n\n  .scroll-button {\n    height: 100%;\n    background-color: rgb(243, 243, 243);\n    border: none;\n    cursor: pointer;\n\n    &.hidden {\n      visibility: hidden;\n    }\n  }\n\n  .breadcrumbs {\n    overflow-x: auto;\n    white-space: nowrap;\n    display: inline-block;\n    width: calc(100% - 50px);\n    height: 100%;\n    scroll-behavior: smooth;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    button {\n      &.selected {\n        background-color: rgb(243, 243, 243);\n      }\n    }\n  }\n\n  .mat-button {\n    height: 20px;\n    line-height: 20px;\n    font-size: 11px;\n    margin-right: 5px;\n    width: fit-content;\n    color: #8a1882;\n\n    &:hover {\n      background-color: #ebf1fb;\n    }\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .mat-card {\n    &.breadcrumb-card {\n      .scroll-button {\n        background-color: rgb(41, 42, 45);\n        color: #ffffff;\n      }\n\n      .breadcrumbs {\n        button {\n          &.selected {\n            background-color: rgb(41, 42, 45);\n          }\n        }\n      }\n\n      .mat-button {\n        color: #5caace;\n        &:hover {\n          background-color: #093e69;\n        }\n      }\n    }\n  }\n}"] });
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
//# sourceMappingURL=breadcrumbs.component.js.map