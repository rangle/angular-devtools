import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./recording-dialog/recording-dialog.component";
export class RecordingModalComponent {
}
RecordingModalComponent.ɵfac = function RecordingModalComponent_Factory(t) { return new (t || RecordingModalComponent)(); };
RecordingModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordingModalComponent, selectors: [["ng-recording-modal"]], decls: 2, vars: 0, consts: [["id", "recorder-wrapper"]], template: function RecordingModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelement(1, "ng-recording-dialog");
        i0.ɵɵelementEnd();
    } }, directives: [i1.RecordingDialogComponent], styles: ["@import '../../../../../../../../../node_modules/@angular/cdk/overlay-prebuilt.css';\n\n[_nghost-%COMP%] {\n  overflow: hidden;\n  display: block;\n  width: 100%;\n  height: calc(100% + 24px);\n}\n\n#recorder-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordingModalComponent, [{
        type: Component,
        args: [{
                selector: 'ng-recording-modal',
                templateUrl: './recording-modal.component.html',
                styleUrls: ['./recording-modal.component.scss'],
            }]
    }], null, null); })();
//# sourceMappingURL=recording-modal.component.js.map