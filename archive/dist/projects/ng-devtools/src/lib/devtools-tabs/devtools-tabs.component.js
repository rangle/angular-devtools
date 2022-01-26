/// <reference types="resize-observer-browser" />
/// <reference types="resize-observer-browser" />
import { Component, Input, ViewChild } from '@angular/core';
import { DirectiveExplorerComponent } from './directive-explorer/directive-explorer.component';
import * as i0 from "@angular/core";
import * as i1 from "./tab-update";
import * as i2 from "../theme-service";
import * as i3 from "protocol";
import * as i4 from "../application-environment";
import * as i5 from "@angular/material/tabs";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/menu";
import * as i9 from "@angular/common";
import * as i10 from "./directive-explorer/directive-explorer.component";
import * as i11 from "./profiler/profiler.component";
import * as i12 from "./router-tree/router-tree.component";
import * as i13 from "@angular/material/slide-toggle";
const _c0 = ["navBar"];
function DevToolsTabsComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵlistener("click", function DevToolsTabsComponent_a_12_Template_a_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const tab_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changeTab(tab_r4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r1.activeTab === tab_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tab_r4, " ");
} }
function DevToolsTabsComponent_section_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sha_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" | DevTools SHA: ", sha_r8, " ");
} }
function DevToolsTabsComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 16);
    i0.ɵɵtext(1, " Angular version: ");
    i0.ɵɵelementStart(2, "span", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DevToolsTabsComponent_section_13_ng_container_4_Template, 2, 1, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.angularVersion, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.latestSHA);
} }
const _c1 = function (a0) { return { hidden: a0 }; };
export class DevToolsTabsComponent {
    constructor(tabUpdate, themeService, _messageBus, _applicationEnvironment) {
        this.tabUpdate = tabUpdate;
        this.themeService = themeService;
        this._messageBus = _messageBus;
        this._applicationEnvironment = _applicationEnvironment;
        this.angularVersion = undefined;
        this.activeTab = 'Components';
        this.inspectorRunning = false;
        this.routerTreeEnabled = false;
        this.routes = [];
    }
    ngOnInit() {
        this._currentThemeSubscription = this.themeService.currentTheme.subscribe((theme) => (this.currentTheme = theme));
        this._messageBus.on('updateRouterTree', (routes) => {
            this.routes = routes || [];
        });
    }
    get tabs() {
        const alwaysShown = ['Components', 'Profiler'];
        return this.routes.length === 0 ? alwaysShown : [...alwaysShown, 'Router Tree'];
    }
    ngAfterViewInit() {
        this.navbar.disablePagination = true;
    }
    ngOnDestroy() {
        this._currentThemeSubscription.unsubscribe();
    }
    get latestSHA() {
        return this._applicationEnvironment.environment.process.env.LATEST_SHA;
    }
    changeTab(tab) {
        this.activeTab = tab;
        this.tabUpdate.notify();
        if (tab === 'Router Tree') {
            this._messageBus.emit('getRoutes');
        }
    }
    toggleInspector() {
        this.toggleInspectorState();
        this.emitInspectorEvent();
    }
    emitInspectorEvent() {
        if (this.inspectorRunning) {
            this._messageBus.emit('inspectorStart');
            this.changeTab('Components');
        }
        else {
            this._messageBus.emit('inspectorEnd');
            this._messageBus.emit('removeHighlightOverlay');
        }
    }
    toggleInspectorState() {
        this.inspectorRunning = !this.inspectorRunning;
    }
    refresh() {
        this.directiveExplorer.refresh();
    }
    toggleTimingAPI(change) {
        change.checked ? this._messageBus.emit('enableTimingAPI') : this._messageBus.emit('disableTimingAPI');
    }
}
DevToolsTabsComponent.ɵfac = function DevToolsTabsComponent_Factory(t) { return new (t || DevToolsTabsComponent)(i0.ɵɵdirectiveInject(i1.TabUpdate), i0.ɵɵdirectiveInject(i2.ThemeService), i0.ɵɵdirectiveInject(i3.MessageBus), i0.ɵɵdirectiveInject(i4.ApplicationEnvironment)); };
DevToolsTabsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevToolsTabsComponent, selectors: [["ng-devtools-tabs"]], viewQuery: function DevToolsTabsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(DirectiveExplorerComponent, 5);
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.directiveExplorer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navbar = _t.first);
    } }, inputs: { angularVersion: "angularVersion" }, decls: 26, vars: 15, consts: [["mat-tab-nav-bar", "", 3, "color"], ["navBar", ""], ["id", "nav-buttons"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["class", "mat-tab-link", "mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["id", "app-angular-version", 4, "ngIf"], [1, "tab-content"], [3, "ngClass", "toggleInspector"], [3, "ngClass"], [3, "routes", "ngClass"], [1, "options-menu"], ["menu", "matMenu"], [1, "menu-toggle-button", 3, "change", "click"], [1, "menu-toggle-button", 3, "checked", "change", "click"], ["mat-tab-link", "", 1, "mat-tab-link", 3, "active", "click"], ["id", "app-angular-version"], ["id", "version-number"], [4, "ngIf"]], template: function DevToolsTabsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵlistener("click", function DevToolsTabsComponent_Template_button_click_3_listener() { return ctx.toggleInspector(); });
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5, " drag_indicator ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function DevToolsTabsComponent_Template_button_click_6_listener() { return ctx.refresh(); });
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, " refresh ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 4);
        i0.ɵɵelementStart(10, "mat-icon");
        i0.ɵɵtext(11, " settings ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, DevToolsTabsComponent_a_12_Template, 2, 2, "a", 5);
        i0.ɵɵtemplate(13, DevToolsTabsComponent_section_13_Template, 5, 2, "section", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 7);
        i0.ɵɵelementStart(15, "ng-directive-explorer", 8);
        i0.ɵɵlistener("toggleInspector", function DevToolsTabsComponent_Template_ng_directive_explorer_toggleInspector_15_listener() { return ctx.toggleInspector(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "ng-profiler", 9);
        i0.ɵɵelement(17, "ng-router-tree", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-menu", 11, 12);
        i0.ɵɵelementStart(20, "mat-slide-toggle", 13);
        i0.ɵɵlistener("change", function DevToolsTabsComponent_Template_mat_slide_toggle_change_20_listener($event) { return ctx.toggleTimingAPI($event); })("click", function DevToolsTabsComponent_Template_mat_slide_toggle_click_20_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵtext(21, " Enable timing API ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "br");
        i0.ɵɵelement(23, "br");
        i0.ɵɵelementStart(24, "mat-slide-toggle", 14);
        i0.ɵɵlistener("change", function DevToolsTabsComponent_Template_mat_slide_toggle_change_24_listener($event) { return ctx.themeService.toggleDarkMode($event.checked); })("click", function DevToolsTabsComponent_Template_mat_slide_toggle_click_24_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵtext(25, " Dark Mode ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(19);
        i0.ɵɵproperty("color", "accent");
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matMenuTriggerFor", _r3);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.angularVersion);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1, ctx.activeTab !== "Components"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c1, ctx.activeTab !== "Profiler"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("routes", ctx.routes)("ngClass", i0.ɵɵpureFunction1(13, _c1, ctx.activeTab !== "Router Tree"));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("checked", ctx.currentTheme === "dark-theme");
    } }, directives: [i5.MatTabNav, i6.MatButton, i7.MatIcon, i8.MatMenuTrigger, i9.NgForOf, i9.NgIf, i10.DirectiveExplorerComponent, i9.NgClass, i11.ProfilerComponent, i12.RouterTreeComponent, i8.MatMenu, i13.MatSlideToggle, i5.MatTabLink], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  height: calc(100% - 31px);\n}\n\n#nav-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#app-angular-version[_ngcontent-%COMP%] {\n  align-self: center;\n  margin-left: auto;\n  margin-right: 8px;\n  font-size: 0.8em;\n  font-weight: bold;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n#version-number[_ngcontent-%COMP%] {\n  color: #1b1aa5;\n  cursor: text;\n  -moz-user-select: text;\n  -khtml-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n\nbutton.mat-icon-button[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  line-height: 30px;\n  margin-right: 5px;\n}\n\n.mat-tab-link[_ngcontent-%COMP%] {\n  min-width: unset;\n  line-height: 30px;\n  height: 30px;\n  font-size: 13px;\n  padding: 0px 10px;\n}\n\n  {\n  .options-menu {\n    padding: 1rem 1.25rem;\n  }\n\n  body.dark-theme .menu-toggle-button {\n    color: white;\n  }\n}\n\n.menu-toggle-button[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  font-weight: 500;\n  color: #777;\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  #version-number {\n    color: #5caace;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  #app-angular-version[_ngcontent-%COMP%] {\n    max-width: 135px;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  #app-angular-version[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsTabsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-devtools-tabs',
                templateUrl: './devtools-tabs.component.html',
                styleUrls: ['./devtools-tabs.component.scss'],
            }]
    }], function () { return [{ type: i1.TabUpdate }, { type: i2.ThemeService }, { type: i3.MessageBus }, { type: i4.ApplicationEnvironment }]; }, { angularVersion: [{
            type: Input
        }], directiveExplorer: [{
            type: ViewChild,
            args: [DirectiveExplorerComponent]
        }], navbar: [{
            type: ViewChild,
            args: ['navBar', { static: true }]
        }] }); })();
//# sourceMappingURL=devtools-tabs.component.js.map