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
import * as i8 from "@angular/common";
import * as i9 from "@angular/material/menu";
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
const _c1 = function (a0) { return { "inspector-active": a0 }; };
const _c2 = function (a0) { return { hidden: a0 }; };
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
    } }, inputs: { angularVersion: "angularVersion" }, decls: 26, vars: 18, consts: [["mat-tab-nav-bar", "", 3, "color"], ["navBar", ""], ["id", "nav-buttons"], ["mat-icon-button", "", "color", "primary", 3, "click"], [3, "ngClass"], ["mat-icon-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["class", "mat-tab-link", "mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["id", "app-angular-version", 4, "ngIf"], [1, "tab-content"], [3, "ngClass", "toggleInspector"], [3, "routes", "ngClass"], [1, "options-menu"], ["menu", "matMenu"], [1, "menu-toggle-button", 3, "change", "click"], [1, "menu-toggle-button", 3, "checked", "change", "click"], ["mat-tab-link", "", 1, "mat-tab-link", 3, "active", "click"], ["id", "app-angular-version"], ["id", "version-number"], [4, "ngIf"]], template: function DevToolsTabsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵlistener("click", function DevToolsTabsComponent_Template_button_click_3_listener() { return ctx.toggleInspector(); });
        i0.ɵɵelementStart(4, "mat-icon", 4);
        i0.ɵɵtext(5, " pin_end ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function DevToolsTabsComponent_Template_button_click_6_listener() { return ctx.refresh(); });
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, " refresh ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 5);
        i0.ɵɵelementStart(10, "mat-icon");
        i0.ɵɵtext(11, " settings ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, DevToolsTabsComponent_a_12_Template, 2, 2, "a", 6);
        i0.ɵɵtemplate(13, DevToolsTabsComponent_section_13_Template, 5, 2, "section", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 8);
        i0.ɵɵelementStart(15, "ng-directive-explorer", 9);
        i0.ɵɵlistener("toggleInspector", function DevToolsTabsComponent_Template_ng_directive_explorer_toggleInspector_15_listener() { return ctx.toggleInspector(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "ng-profiler", 4);
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
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c1, ctx.inspectorRunning));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("matMenuTriggerFor", _r3);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.angularVersion);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c2, ctx.activeTab !== "Components"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(14, _c2, ctx.activeTab !== "Profiler"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("routes", ctx.routes)("ngClass", i0.ɵɵpureFunction1(16, _c2, ctx.activeTab !== "Router Tree"));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("checked", ctx.currentTheme === "dark-theme");
    } }, directives: [i5.MatTabNav, i6.MatButton, i7.MatIcon, i8.NgClass, i9.MatMenuTrigger, i8.NgForOf, i8.NgIf, i10.DirectiveExplorerComponent, i11.ProfilerComponent, i12.RouterTreeComponent, i9.MatMenu, i13.MatSlideToggle, i5.MatTabLink], styles: ["[_nghost-%COMP%]{position:relative;width:100%;height:100%;display:block}.hidden[_ngcontent-%COMP%]{display:none}.tab-content[_ngcontent-%COMP%]{height:calc(100% - 31px)}#nav-buttons[_ngcontent-%COMP%]{display:flex}.inspector-active[_ngcontent-%COMP%]{color:#1a73e8!important}#app-angular-version[_ngcontent-%COMP%]{align-self:center;margin-left:auto;margin-right:8px;font-size:.8em;font-weight:700;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#version-number[_ngcontent-%COMP%]{color:#1b1aa5;cursor:text;-moz-user-select:text;-webkit-user-select:text;user-select:text}button.mat-icon-button[_ngcontent-%COMP%]{height:30px;width:30px;line-height:30px;margin-right:0}mat-icon[_ngcontent-%COMP%]{font-size:16px}.mat-tab-link[_ngcontent-%COMP%]{min-width:unset;line-height:30px;height:30px;font-size:13px;padding:0 10px;opacity:1}  .options-menu{padding:1rem 1.25rem}  body.dark-theme .menu-toggle-button{color:#fff}.menu-toggle-button[_ngcontent-%COMP%]{font-size:.7em;font-weight:500;color:#777}.dark-theme[_nghost-%COMP%]   #version-number[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   #version-number[_ngcontent-%COMP%]{color:#5caace}.dark-theme[_nghost-%COMP%]   .inspector-active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .inspector-active[_ngcontent-%COMP%]{color:#4688f1!important}.light-theme[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}@media only screen and (max-width:700px){#app-angular-version[_ngcontent-%COMP%]{max-width:135px}}@media only screen and (max-width:420px){#app-angular-version[_ngcontent-%COMP%]{display:none}}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGV2dG9vbHMtdGFicy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGV2dG9vbHMtdGFicy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFBakQsaURBQWlEO0FBQ2pELE9BQU8sRUFBaUIsU0FBUyxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNlN0YsNkJBQW9IO0lBQXRELGtQQUF3QjtJQUNwRixZQUNGO0lBQUEsaUJBQUk7Ozs7SUFGbUYsb0RBQTRCO0lBQ2pILGVBQ0Y7SUFERSx1Q0FDRjs7O0lBTUUsNkJBQXlDO0lBQUMsWUFBMEI7SUFBQSwwQkFBZTs7O0lBQXpDLGVBQTBCO0lBQTFCLHVEQUEwQjs7O0lBTHRFLG1DQUF5RDtJQUN2RCxrQ0FDQTtJQUFBLGdDQUEwQjtJQUN4QixZQUNGO0lBQUEsaUJBQU87SUFDUCxvR0FBbUY7SUFDckYsaUJBQVU7OztJQUhOLGVBQ0Y7SUFERSxzREFDRjtJQUNlLGVBQWlCO0lBQWpCLHVDQUFpQjs7OztBRFZwQyxNQUFNLE9BQU8scUJBQXFCO0lBZWhDLFlBQ1MsU0FBb0IsRUFDcEIsWUFBMEIsRUFDekIsV0FBK0IsRUFDL0IsdUJBQStDO1FBSGhELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUFsQmhELG1CQUFjLEdBQXVCLFNBQVMsQ0FBQztRQUl4RCxjQUFTLEdBQThDLFlBQVksQ0FBQztRQUVwRSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBSzFCLFdBQU0sR0FBWSxFQUFFLENBQUM7SUFPbEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVsSCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixNQUFNLFdBQVcsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUN6RSxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQThDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsSUFBSSxHQUFHLEtBQUssYUFBYSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBNEI7UUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4RyxDQUFDOzswRkFoRlUscUJBQXFCO3dFQUFyQixxQkFBcUI7dUJBRXJCLDBCQUEwQjs7Ozs7OztRQ2xCdkMsaUNBQWdEO1FBQzlDLDhCQUFzQjtRQUNwQixpQ0FBb0U7UUFBNUIsa0dBQVMscUJBQWlCLElBQUM7UUFDakUsbUNBQStEO1FBQzdELHlCQUNGO1FBQUEsaUJBQVc7UUFDYixpQkFBUztRQUNULGlDQUE0RDtRQUFwQixrR0FBUyxhQUFTLElBQUM7UUFDekQsZ0NBQVU7UUFDUix5QkFDRjtRQUFBLGlCQUFXO1FBQ2IsaUJBQVM7UUFDVCxpQ0FBbUU7UUFDakUsaUNBQVU7UUFDUiwyQkFDRjtRQUFBLGlCQUFXO1FBQ2IsaUJBQVM7UUFDWCxpQkFBTTtRQUNOLG9FQUVJO1FBQ0osZ0ZBTVU7UUFDWixpQkFBTTtRQUVOLCtCQUF5QjtRQUN2QixpREFHQztRQURDLHNJQUFtQixxQkFBaUIsSUFBQztRQUN0QyxpQkFBd0I7UUFDekIsa0NBQTRFO1FBQzVFLHNDQUF1RztRQUN6RyxpQkFBTTtRQUVOLHlDQUErQztRQUM3Qyw2Q0FBbUg7UUFBakcscUhBQVUsMkJBQXVCLElBQUMsc0dBQXFDLHdCQUF3QixJQUE3RDtRQUNsRCxvQ0FDRjtRQUFBLGlCQUFtQjtRQUNuQixzQkFBTTtRQUNOLHNCQUFNO1FBQ04sNkNBS0M7UUFIQyxxSEFBVSwrQ0FBMkMsSUFBQyxzR0FFN0Msd0JBQXdCLElBRnFCO1FBSXRELDRCQUNGO1FBQUEsaUJBQW1CO1FBQ3JCLGlCQUFXOzs7UUFyRGtCLGdDQUFrQjtRQUcvQixlQUFvRDtRQUFwRCwyRUFBb0Q7UUFTeEIsZUFBMEI7UUFBMUIsdUNBQTBCO1FBTWYsZUFBTztRQUFQLGtDQUFPO1FBR2xELGVBQW9CO1FBQXBCLHlDQUFvQjtRQVc1QixlQUFrRDtRQUFsRCxxRkFBa0Q7UUFHdkMsZUFBZ0Q7UUFBaEQsbUZBQWdEO1FBQzdDLGVBQWlCO1FBQWpCLG1DQUFpQix5RUFBQTtRQVUvQixlQUF5QztRQUF6QywyREFBeUM7O3VGRDlCaEMscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QztxSkFFVSxjQUFjO2tCQUF0QixLQUFLO1lBQ2lDLGlCQUFpQjtrQkFBdkQsU0FBUzttQkFBQywwQkFBMEI7WUFDRSxNQUFNO2tCQUE1QyxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInJlc2l6ZS1vYnNlcnZlci1icm93c2VyXCIgLz5cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50cywgTWVzc2FnZUJ1cywgUm91dGUgfSBmcm9tICdwcm90b2NvbCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVFeHBsb3JlckNvbXBvbmVudCB9IGZyb20gJy4vZGlyZWN0aXZlLWV4cGxvcmVyL2RpcmVjdGl2ZS1leHBsb3Jlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25FbnZpcm9ubWVudCB9IGZyb20gJy4uL2FwcGxpY2F0aW9uLWVudmlyb25tZW50JztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7IFRhYlVwZGF0ZSB9IGZyb20gJy4vdGFiLXVwZGF0ZSc7XG5pbXBvcnQgeyBUaGVtZSwgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vdGhlbWUtc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hdFRhYk5hdiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kZXZ0b29scy10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldnRvb2xzLXRhYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXZ0b29scy10YWJzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERldlRvb2xzVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgYW5ndWxhclZlcnNpb246IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgQFZpZXdDaGlsZChEaXJlY3RpdmVFeHBsb3JlckNvbXBvbmVudCkgZGlyZWN0aXZlRXhwbG9yZXI6IERpcmVjdGl2ZUV4cGxvcmVyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCduYXZCYXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZiYXI6IE1hdFRhYk5hdjtcblxuICBhY3RpdmVUYWI6ICdDb21wb25lbnRzJyB8ICdQcm9maWxlcicgfCAnUm91dGVyIFRyZWUnID0gJ0NvbXBvbmVudHMnO1xuXG4gIGluc3BlY3RvclJ1bm5pbmcgPSBmYWxzZTtcbiAgcm91dGVyVHJlZUVuYWJsZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9jdXJyZW50VGhlbWVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgY3VycmVudFRoZW1lOiBUaGVtZTtcblxuICByb3V0ZXM6IFJvdXRlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGFiVXBkYXRlOiBUYWJVcGRhdGUsXG4gICAgcHVibGljIHRoZW1lU2VydmljZTogVGhlbWVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX21lc3NhZ2VCdXM6IE1lc3NhZ2VCdXM8RXZlbnRzPixcbiAgICBwcml2YXRlIF9hcHBsaWNhdGlvbkVudmlyb25tZW50OiBBcHBsaWNhdGlvbkVudmlyb25tZW50XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50VGhlbWVTdWJzY3JpcHRpb24gPSB0aGlzLnRoZW1lU2VydmljZS5jdXJyZW50VGhlbWUuc3Vic2NyaWJlKCh0aGVtZSkgPT4gKHRoaXMuY3VycmVudFRoZW1lID0gdGhlbWUpKTtcblxuICAgIHRoaXMuX21lc3NhZ2VCdXMub24oJ3VwZGF0ZVJvdXRlclRyZWUnLCAocm91dGVzKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlcyA9IHJvdXRlcyB8fCBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB0YWJzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBhbHdheXNTaG93biA9IFsnQ29tcG9uZW50cycsICdQcm9maWxlciddO1xuICAgIHJldHVybiB0aGlzLnJvdXRlcy5sZW5ndGggPT09IDAgPyBhbHdheXNTaG93biA6IFsuLi5hbHdheXNTaG93biwgJ1JvdXRlciBUcmVlJ107XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uYXZiYXIuZGlzYWJsZVBhZ2luYXRpb24gPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY3VycmVudFRoZW1lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXQgbGF0ZXN0U0hBKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGxpY2F0aW9uRW52aXJvbm1lbnQuZW52aXJvbm1lbnQucHJvY2Vzcy5lbnYuTEFURVNUX1NIQTtcbiAgfVxuXG4gIGNoYW5nZVRhYih0YWI6ICdQcm9maWxlcicgfCAnQ29tcG9uZW50cycgfCAnUm91dGVyIFRyZWUnKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XG4gICAgdGhpcy50YWJVcGRhdGUubm90aWZ5KCk7XG4gICAgaWYgKHRhYiA9PT0gJ1JvdXRlciBUcmVlJykge1xuICAgICAgdGhpcy5fbWVzc2FnZUJ1cy5lbWl0KCdnZXRSb3V0ZXMnKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVJbnNwZWN0b3IoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVJbnNwZWN0b3JTdGF0ZSgpO1xuICAgIHRoaXMuZW1pdEluc3BlY3RvckV2ZW50KCk7XG4gIH1cblxuICBlbWl0SW5zcGVjdG9yRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5zcGVjdG9yUnVubmluZykge1xuICAgICAgdGhpcy5fbWVzc2FnZUJ1cy5lbWl0KCdpbnNwZWN0b3JTdGFydCcpO1xuICAgICAgdGhpcy5jaGFuZ2VUYWIoJ0NvbXBvbmVudHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWVzc2FnZUJ1cy5lbWl0KCdpbnNwZWN0b3JFbmQnKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VCdXMuZW1pdCgncmVtb3ZlSGlnaGxpZ2h0T3ZlcmxheScpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUluc3BlY3RvclN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zcGVjdG9yUnVubmluZyA9ICF0aGlzLmluc3BlY3RvclJ1bm5pbmc7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aXZlRXhwbG9yZXIucmVmcmVzaCgpO1xuICB9XG5cbiAgdG9nZ2xlVGltaW5nQVBJKGNoYW5nZTogTWF0U2xpZGVUb2dnbGVDaGFuZ2UpOiB2b2lkIHtcbiAgICBjaGFuZ2UuY2hlY2tlZCA/IHRoaXMuX21lc3NhZ2VCdXMuZW1pdCgnZW5hYmxlVGltaW5nQVBJJykgOiB0aGlzLl9tZXNzYWdlQnVzLmVtaXQoJ2Rpc2FibGVUaW1pbmdBUEknKTtcbiAgfVxufVxuIiwiPG5hdiAjbmF2QmFyIG1hdC10YWItbmF2LWJhciBbY29sb3JdPVwiJ2FjY2VudCdcIj5cbiAgPGRpdiBpZD1cIm5hdi1idXR0b25zXCI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInRvZ2dsZUluc3BlY3RvcigpXCI+XG4gICAgICA8bWF0LWljb24gW25nQ2xhc3NdPVwieyAnaW5zcGVjdG9yLWFjdGl2ZSc6IGluc3BlY3RvclJ1bm5pbmcgfVwiPlxuICAgICAgICBwaW5fZW5kXG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJyZWZyZXNoKClcIj5cbiAgICAgIDxtYXQtaWNvbj5cbiAgICAgICAgcmVmcmVzaFxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxuICAgICAgPG1hdC1pY29uPlxuICAgICAgICBzZXR0aW5nc1xuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxhIGNsYXNzPVwibWF0LXRhYi1saW5rXCIgbWF0LXRhYi1saW5rICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFic1wiIChjbGljayk9XCJjaGFuZ2VUYWIodGFiKVwiIFthY3RpdmVdPVwiYWN0aXZlVGFiID09PSB0YWJcIj5cbiAgICB7eyB0YWIgfX1cbiAgPC9hPlxuICA8c2VjdGlvbiAqbmdJZj1cImFuZ3VsYXJWZXJzaW9uXCIgaWQ9XCJhcHAtYW5ndWxhci12ZXJzaW9uXCI+XG4gICAgQW5ndWxhciB2ZXJzaW9uOlxuICAgIDxzcGFuIGlkPVwidmVyc2lvbi1udW1iZXJcIj5cbiAgICAgIHt7IGFuZ3VsYXJWZXJzaW9uIH19XG4gICAgPC9zcGFuPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsYXRlc3RTSEE7IGxldCBzaGFcIj4gfCBEZXZUb29scyBTSEE6IHt7IHNoYSB9fSA8L25nLWNvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxuPC9uYXY+XG5cbjxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICA8bmctZGlyZWN0aXZlLWV4cGxvcmVyXG4gICAgW25nQ2xhc3NdPVwieyBoaWRkZW46IGFjdGl2ZVRhYiAhPT0gJ0NvbXBvbmVudHMnIH1cIlxuICAgICh0b2dnbGVJbnNwZWN0b3IpPVwidG9nZ2xlSW5zcGVjdG9yKClcIlxuICA+PC9uZy1kaXJlY3RpdmUtZXhwbG9yZXI+XG4gIDxuZy1wcm9maWxlciBbbmdDbGFzc109XCJ7IGhpZGRlbjogYWN0aXZlVGFiICE9PSAnUHJvZmlsZXInIH1cIj48L25nLXByb2ZpbGVyPlxuICA8bmctcm91dGVyLXRyZWUgW3JvdXRlc109XCJyb3V0ZXNcIiBbbmdDbGFzc109XCJ7IGhpZGRlbjogYWN0aXZlVGFiICE9PSAnUm91dGVyIFRyZWUnIH1cIj48L25nLXJvdXRlci10cmVlPlxuPC9kaXY+XG5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIiBjbGFzcz1cIm9wdGlvbnMtbWVudVwiPlxuICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cInRvZ2dsZVRpbWluZ0FQSSgkZXZlbnQpXCIgY2xhc3M9XCJtZW51LXRvZ2dsZS1idXR0b25cIiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgRW5hYmxlIHRpbWluZyBBUElcbiAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICA8YnIgLz5cbiAgPGJyIC8+XG4gIDxtYXQtc2xpZGUtdG9nZ2xlXG4gICAgW2NoZWNrZWRdPVwiY3VycmVudFRoZW1lID09PSAnZGFyay10aGVtZSdcIlxuICAgIChjaGFuZ2UpPVwidGhlbWVTZXJ2aWNlLnRvZ2dsZURhcmtNb2RlKCRldmVudC5jaGVja2VkKVwiXG4gICAgY2xhc3M9XCJtZW51LXRvZ2dsZS1idXR0b25cIlxuICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICA+XG4gICAgRGFyayBNb2RlXG4gIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbjwvbWF0LW1lbnU+XG4iXX0=