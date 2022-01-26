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
    } }, directives: [i3.NgIf, i4.DevToolsTabsComponent, i5.MatTooltip], styles: ["@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,.2)}to{box-shadow:0 0 0 35px transparent}}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,.2)}to{box-shadow:0 0 0 35px transparent}}@-webkit-keyframes darkmode-pulse{0%{box-shadow:0 0 0 0 #7e2828}to{box-shadow:0 0 0 35px transparent}}@keyframes darkmode-pulse{0%{box-shadow:0 0 0 0 #7e2828}to{box-shadow:0 0 0 35px transparent}}.devtools-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%;display:block}.dark-theme[_nghost-%COMP%]   .devtools-wrapper[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .devtools-wrapper[_ngcontent-%COMP%]{background:#202124}.dark-theme[_nghost-%COMP%]   .initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{-webkit-animation:darkmode-pulse 1s infinite;animation:darkmode-pulse 1s infinite}.noselect[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.initializing[_ngcontent-%COMP%]{margin:auto;width:125px;height:100%;display:flex;align-items:center}.initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 19.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 250 250%22 style%3D%22enable-background%3Anew 0 0 250 250%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill%3A%23DD0031%3B%7D%09.st1%7Bfill%3A%23C3002F%3B%7D%09.st2%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%3E%09%3Cpolygon class%3D%22st0%22 points%3D%22125%2C30 125%2C30 125%2C30 31.9%2C63.2 46.1%2C186.3 125%2C230 125%2C230 125%2C230 203.9%2C186.3 218.1%2C63.2 %09%22%2F%3E%09%3Cpolygon class%3D%22st1%22 points%3D%22125%2C30 125%2C52.2 125%2C52.1 125%2C153.4 125%2C153.4 125%2C230 125%2C230 203.9%2C186.3 218.1%2C63.2 125%2C30 %09%22%2F%3E%09%3Cpath class%3D%22st2%22 d%3D%22M125%2C52.1L66.8%2C182.6h0h21.7h0l11.7-29.2h49.4l11.7%2C29.2h0h21.7h0L125%2C52.1L125%2C52.1L125%2C52.1L125%2C52.1%09%09L125%2C52.1z M142%2C135.4H108l17-40.9L142%2C135.4z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");border-radius:50%;width:125px;height:125px;float:left;text-align:center;-webkit-animation:pulse 1s infinite;animation:pulse 1s infinite}.text-message[_ngcontent-%COMP%]{font-weight:500;font-size:1.2em;padding:5px;text-align:center}.text-message[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{display:inline-block;font-size:1.2em;border-radius:50%;border:3px solid #111;cursor:pointer;width:16px;transform:scale(.9);height:16px;font-weight:700;text-align:center}"], data: { animation: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2dG9vbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7OztJQ0FwRSw4QkFBcUc7SUFDbkcsc0NBQXVFO0lBQ3pFLGlCQUFNOzs7SUFGNkUsMkNBQWlCO0lBQ2hGLGVBQWlDO0lBQWpDLHNEQUFpQzs7O0lBR25ELDRCQUF3QjtJQUN0QixrRkFDQTtJQUFBLDRCQUF1RDtJQUFBLG1CQUFHO0lBQUEsaUJBQUk7SUFBQywwQkFDakU7SUFBQSxpQkFBSTs7O0lBUlIsNkJBQW1FO0lBQ2pFLGdHQUVNO0lBQ04saUpBS2M7SUFDaEIsMEJBQWU7Ozs7SUFUUCxlQUF3QjtJQUF4Qiw4Q0FBd0IsaUJBQUE7OztJQVc5Qiw0QkFBd0I7SUFDdEIsb0lBRUY7SUFBQSxpQkFBSTs7O0lBaEJSLDZCQUFrRTtJQUNoRSxtR0FVZTtJQUNmLGtJQUtjO0lBQ2hCLDBCQUFlOzs7O0lBakJFLGVBQTBCO0lBQTFCLGdEQUEwQixpQkFBQTs7O0lBbUJ6Qyw2QkFBNEQ7SUFDMUQsNEJBQXdCO0lBQ3RCLG1EQUNBO0lBQUEsZ0NBR0c7SUFBQSxpQkFBQztJQUFBLGlCQUNIO0lBQ0gsaUJBQUk7SUFDTiwwQkFBZTs7O0lBRWIsK0JBQXlEO0lBQ3ZELDBCQUEyQjtJQUM3QixpQkFBTTs7O0lBRk4sK0ZB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MkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFO3dCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RGLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkYsQ0FBQztpQkFDSDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZUJ1cywgRXZlbnRzIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3RoZW1lLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1kZXZ0b29scycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXZ0b29scy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RldnRvb2xzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdlbnRlckFuaW1hdGlvbicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtzdHlsZSh7IG9wYWNpdHk6IDAgfSksIGFuaW1hdGUoJzIwMG1zJywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKV0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW3N0eWxlKHsgb3BhY2l0eTogMSB9KSwgYW5pbWF0ZSgnMjAwbXMnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERldlRvb2xzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBhbmd1bGFyRXhpc3RzOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIGFuZ3VsYXJWZXJzaW9uOiBzdHJpbmcgfCBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBhbmd1bGFySXNJbkRldk1vZGUgPSB0cnVlO1xuICBpdnk6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZUJ1czogTWVzc2FnZUJ1czxFdmVudHM+LCBwcml2YXRlIF90aGVtZVNlcnZpY2U6IFRoZW1lU2VydmljZSkge31cblxuICBwcml2YXRlIF9pbnRlcnZhbCQgPSBpbnRlcnZhbCg1MDApLnN1YnNjcmliZSgoYXR0ZW1wdCkgPT4ge1xuICAgIGlmIChhdHRlbXB0ID09PSAxMCkge1xuICAgICAgdGhpcy5hbmd1bGFyRXhpc3RzID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX21lc3NhZ2VCdXMuZW1pdCgncXVlcnlOZ0F2YWlsYWJpbGl0eScpO1xuICB9KTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl90aGVtZVNlcnZpY2UuaW5pdGlhbGl6ZVRoZW1lV2F0Y2hlcigpO1xuXG4gICAgdGhpcy5fbWVzc2FnZUJ1cy5vbmNlKCduZ0F2YWlsYWJpbGl0eScsICh7IHZlcnNpb24sIGRldk1vZGUsIGl2eSB9KSA9PiB7XG4gICAgICB0aGlzLmFuZ3VsYXJFeGlzdHMgPSAhIXZlcnNpb247XG4gICAgICB0aGlzLmFuZ3VsYXJWZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgIHRoaXMuYW5ndWxhcklzSW5EZXZNb2RlID0gZGV2TW9kZTtcbiAgICAgIHRoaXMuaXZ5ID0gaXZ5O1xuICAgICAgdGhpcy5faW50ZXJ2YWwkLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbWFqb3JBbmd1bGFyVmVyc2lvbigpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5hbmd1bGFyVmVyc2lvbikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5hbmd1bGFyVmVyc2lvbi50b1N0cmluZygpLnNwbGl0KCcuJylbMF0sIDEwKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0ZWRWZXJzaW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5tYWpvckFuZ3VsYXJWZXJzaW9uID49IDkgfHwgdGhpcy5tYWpvckFuZ3VsYXJWZXJzaW9uID09PSAwKSAmJiB0aGlzLml2eTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2ludGVydmFsJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibWF0LXR5cG9ncmFwaHkgbWF0LWFwcC1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7XCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJhbmd1bGFyRXhpc3RzID09PSB0cnVlOyBlbHNlIGVycm9yT3JMb2FkaW5nXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFuZ3VsYXJJc0luRGV2TW9kZTsgZWxzZSBhbmd1bGFySXNJblByb2RNb2RlXCI+XG4gICAgICA8ZGl2ICpuZ0lmPVwic3VwcG9ydGVkVmVyc2lvbjsgZWxzZSBub3RTdXBwb3J0ZWRcIiBjbGFzcz1cImRldnRvb2xzLXdyYXBwZXIgbm9zZWxlY3RcIiBbQGVudGVyQW5pbWF0aW9uXT5cbiAgICAgICAgPG5nLWRldnRvb2xzLXRhYnMgW2FuZ3VsYXJWZXJzaW9uXT1cImFuZ3VsYXJWZXJzaW9uXCI+PC9uZy1kZXZ0b29scy10YWJzPlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI25vdFN1cHBvcnRlZD5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW1lc3NhZ2VcIj5cbiAgICAgICAgICBBbmd1bGFyIERldnRvb2xzIG9ubHkgc3VwcG9ydHMgQW5ndWxhciB2ZXJzaW9ucyA5IGFuZCBhYm92ZSB3aXRoXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9pdnlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5pdnk8L2E+IGVuYWJsZWQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNhbmd1bGFySXNJblByb2RNb2RlPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW1lc3NhZ2VcIj5cbiAgICAgICAgV2UgZGV0ZWN0ZWQgYW4gYXBwbGljYXRpb24gYnVpbHQgd2l0aCBwcm9kdWN0aW9uIGNvbmZpZ3VyYXRpb24uIEFuZ3VsYXIgRGV2VG9vbHMgb25seSBzdXBwb3J0cyBkZXZlbG9wbWVudFxuICAgICAgICBidWlsZHMuXG4gICAgICA8L3A+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjZXJyb3JPckxvYWRpbmc+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFuZ3VsYXJFeGlzdHMgPT09IGZhbHNlOyBlbHNlIGxvYWRpbmdcIj5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1tZXNzYWdlXCI+XG4gICAgICAgIEFuZ3VsYXIgYXBwbGljYXRpb24gbm90IGRldGVjdGVkLlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwiaW5mby1pY29uXCJcbiAgICAgICAgICBtYXRUb29sdGlwPVwiWW91IHNlZSB0aGlzIG1lc3NhZ2UgYmVjYXVzZSB0aGUgYXBwIGlzIHN0aWxsIGxvYWRpbmcsIG9yIHRoaXMgaXMgbm90IGFuIEFuZ3VsYXIgYXBwbGljYXRpb25cIlxuICAgICAgICAgID5pPC9zcGFuXG4gICAgICAgID5cbiAgICAgIDwvcD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5pdGlhbGl6aW5nXCIgKm5nSWY9XCJhbmd1bGFyRXhpc3RzID09PSBudWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG4iXX0=