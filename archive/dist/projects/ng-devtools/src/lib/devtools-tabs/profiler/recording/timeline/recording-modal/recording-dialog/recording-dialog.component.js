import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
export class RecordingDialogComponent {
}
RecordingDialogComponent.ɵfac = function RecordingDialogComponent_Factory(t) { return new (t || RecordingDialogComponent)(); };
RecordingDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordingDialogComponent, selectors: [["ng-recording-dialog"]], decls: 2, vars: 0, consts: [[1, "main-wrapper"], ["color", "accent", "mode", "indeterminate"]], template: function RecordingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelement(1, "mat-progress-bar", 1);
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatProgressBar], styles: [".main-wrapper[_ngcontent-%COMP%] {\n  width: 300px;\n  margin-top: 50%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordingDialogComponent, [{
        type: Component,
        args: [{
                selector: 'ng-recording-dialog',
                templateUrl: './recording-dialog.component.html',
                styleUrls: ['./recording-dialog.component.scss'],
            }]
    }], null, null); })();
//# sourceMappingURL=recording-dialog.component.js.map