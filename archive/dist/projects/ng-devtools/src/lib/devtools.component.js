import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "protocol";
import * as i2 from "./theme-service";
import * as i3 from "@angular/common";
import * as i4 from "./devtools-tabs/devtools-tabs.component";
import * as i5 from "@angular/material/tooltip";
function DevToolsComponent_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ng-devtools-tabs", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("@enterAnimation", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("angularVersion", ctx_r6.angularVersion);
} }
function DevToolsComponent_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, " Angular Devtools only supports Angular versions 9 and above with ");
    i0.ɵɵelementStart(2, "a", 9);
    i0.ɵɵtext(3, "ivy");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " enabled. ");
    i0.ɵɵelementEnd();
} }
function DevToolsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DevToolsComponent_ng_container_1_ng_container_1_div_1_Template, 2, 2, "div", 4);
    i0.ɵɵtemplate(2, DevToolsComponent_ng_container_1_ng_container_1_ng_template_2_Template, 5, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(3);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.supportedVersion)("ngIfElse", _r7);
} }
function DevToolsComponent_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, " We detected an application built with production configuration. Angular DevTools only supports development builds. ");
    i0.ɵɵelementEnd();
} }
function DevToolsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DevToolsComponent_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 1);
    i0.ɵɵtemplate(2, DevToolsComponent_ng_container_1_ng_template_2_Template, 2, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.angularIsInDevMode)("ngIfElse", _r4);
} }
function DevToolsComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 8);
    i0.ɵɵtext(2, " Angular application not detected. ");
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DevToolsComponent_ng_template_2_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "div", 14);
    i0.ɵɵelementEnd();
} }
function DevToolsComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DevToolsComponent_ng_template_2_ng_template_1_div_0_Template, 2, 0, "div", 12);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r11.angularExists === null);
} }
function DevToolsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DevToolsComponent_ng_template_2_ng_container_0_Template, 5, 0, "ng-container", 1);
    i0.ɵɵtemplate(1, DevToolsComponent_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r10 = i0.ɵɵreference(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.angularExists === false)("ngIfElse", _r10);
} }
export class DevToolsComponent {
    constructor(_messageBus, _themeService) {
        this._messageBus = _messageBus;
        this._themeService = _themeService;
        this.angularExists = null;
        this.angularVersion = undefined;
        this.angularIsInDevMode = true;
        this._interval$ = interval(500).subscribe((attempt) => {
            if (attempt === 10) {
                this.angularExists = false;
            }
            this._messageBus.emit('queryNgAvailability');
        });
    }
    ngOnInit() {
        this._themeService.initializeThemeWatcher();
        this._messageBus.once('ngAvailability', ({ version, devMode, ivy }) => {
            this.angularExists = !!version;
            this.angularVersion = version;
            this.angularIsInDevMode = devMode;
            this.ivy = ivy;
            this._interval$.unsubscribe();
        });
    }
    get majorAngularVersion() {
        if (!this.angularVersion) {
            return -1;
        }
        return parseInt(this.angularVersion.toString().split('.')[0], 10);
    }
    get supportedVersion() {
        return (this.majorAngularVersion >= 9 || this.majorAngularVersion === 0) && this.ivy;
    }
    ngOnDestroy() {
        this._interval$.unsubscribe();
    }
}
DevToolsComponent.ɵfac = function DevToolsComponent_Factory(t) { return new (t || DevToolsComponent)(i0.ɵɵdirectiveInject(i1.MessageBus), i0.ɵɵdirectiveInject(i2.ThemeService)); };
DevToolsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevToolsComponent, selectors: [["ng-devtools"]], decls: 4, vars: 2, consts: [[1, "mat-typography", "mat-app-background", 2, "height", "100%"], [4, "ngIf", "ngIfElse"], ["errorOrLoading", ""], ["angularIsInProdMode", ""], ["class", "devtools-wrapper noselect", 4, "ngIf", "ngIfElse"], ["notSupported", ""], [1, "devtools-wrapper", "noselect"], [3, "angularVersion"], [1, "text-message"], ["href", "https://angular.io/guide/ivy", "target", "_blank"], ["loading", ""], ["matTooltip", "You see this message because the app is still loading, or this is not an Angular application", 1, "info-icon"], ["class", "initializing", 4, "ngIf"], [1, "initializing"], [1, "loading"]], template: function DevToolsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DevToolsComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
        i0.ɵɵtemplate(2, DevToolsComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.angularExists === true)("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i4.DevToolsTabsComponent, i5.MatTooltip], styles: ["@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);\n  }\n  100% {\n    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes darkmode-pulse {\n  0% {\n    box-shadow: 0 0 0 0px rgb(126, 40, 40);\n  }\n  100% {\n    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);\n  }\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.devtools-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .devtools-wrapper {\n    background: #242424;\n  }\n\n  .initializing {\n    .loading {\n      animation: darkmode-pulse 1s infinite;\n    }\n  }\n}\n\n.noselect[_ngcontent-%COMP%] {\n  user-select: none;\n}\n\n.initializing[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 125px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  .loading {\n    background: url('./images/angular.svg');\n    border-radius: 50%;\n    width: 125px;\n    height: 125px;\n    float: left;\n    text-align: center;\n    animation: pulse 1s infinite;\n  }\n}\n\n.text-message[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.2em;\n  padding: 5px;\n  text-align: center;\n\n  .info-icon {\n    display: inline-block;\n    font-size: 1.2em;\n    border-radius: 50%;\n    border: solid 3px rgb(17, 17, 17);\n    cursor: pointer;\n    width: 16px;\n    transform: scale(0.9);\n    height: 16px;\n    font-weight: bold;\n    text-align: center;\n  }\n}"], data: { animation: [
            trigger('enterAnimation', [
                transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))]),
                transition(':leave', [style({ opacity: 1 }), animate('200ms', style({ opacity: 0 }))]),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-devtools',
                templateUrl: './devtools.component.html',
                styleUrls: ['./devtools.component.scss'],
                animations: [
                    trigger('enterAnimation', [
                        transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))]),
                        transition(':leave', [style({ opacity: 1 }), animate('200ms', style({ opacity: 0 }))]),
                    ]),
                ],
            }]
    }], function () { return [{ type: i1.MessageBus }, { type: i2.ThemeService }]; }, null); })();
//# sourceMappingURL=devtools.component.js.map