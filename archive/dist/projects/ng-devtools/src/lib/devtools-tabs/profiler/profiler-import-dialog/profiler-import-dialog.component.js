import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function ProfilerImportDialogComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵtext(2, " Error ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, " Could not process uploaded file. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 4);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 5);
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵtext(10, " Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.data.errorMessage, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mat-dialog-close", false);
} }
function ProfilerImportDialogComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵtext(2, " Warning ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, " The file you are attempting to upload was recorded in a different format than the one supported by your current Angular DevTools version ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, " Current format version: ");
    i0.ɵɵelementStart(8, "span", 7);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, " Format version of uploaded file: ");
    i0.ɵɵelementStart(12, "span", 8);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15, " Files recorded in older versions may no longer be compatible. Do you wish to continue? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 5);
    i0.ɵɵelementStart(17, "button", 6);
    i0.ɵɵtext(18, " No Thanks ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 6);
    i0.ɵɵtext(20, " Yes ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.data.profilerVersion);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.data.importedVersion);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("mat-dialog-close", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mat-dialog-close", true);
} }
export class ProfilerImportDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
ProfilerImportDialogComponent.ɵfac = function ProfilerImportDialogComponent_Factory(t) { return new (t || ProfilerImportDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
ProfilerImportDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilerImportDialogComponent, selectors: [["ng-profiler-import-dialog"]], decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "error"], ["mat-dialog-actions", ""], ["mat-flat-button", "", 3, "mat-dialog-close"], [1, "version", "profiler-version"], [1, "version", "imported-version"]], template: function ProfilerImportDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ProfilerImportDialogComponent_ng_container_1_Template, 11, 2, "ng-container", 1);
        i0.ɵɵtemplate(2, ProfilerImportDialogComponent_ng_container_2_Template, 21, 4, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.data.status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "ERROR");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "INVALID_VERSION");
    } }, directives: [i2.NgSwitch, i2.NgSwitchCase, i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i3.MatButton, i1.MatDialogClose], styles: [".version[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.profiler-version[_ngcontent-%COMP%] {\n  color: #388e3c;\n}\n\n.imported-version[_ngcontent-%COMP%], .error[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilerImportDialogComponent, [{
        type: Component,
        args: [{
                selector: 'ng-profiler-import-dialog',
                templateUrl: './profiler-import-dialog.component.html',
                styleUrls: ['./profiler-import-dialog.component.scss'],
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=profiler-import-dialog.component.js.map