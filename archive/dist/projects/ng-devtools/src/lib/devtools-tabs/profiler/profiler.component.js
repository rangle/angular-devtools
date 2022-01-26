import { Component } from '@angular/core';
import { ProfilerImportDialogComponent } from './profiler-import-dialog/profiler-import-dialog.component';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../file-api-service";
import * as i2 from "protocol";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "./recording/timeline/timeline.component";
function ProfilerComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ProfilerComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.startRecording(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, " circle ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProfilerComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function ProfilerComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.stopRecording(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, " circle ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProfilerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function ProfilerComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.discardRecording(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, " not_interested ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProfilerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "ng-recording-timeline", 12);
    i0.ɵɵlistener("exportProfile", function ProfilerComponent_div_16_Template_ng_recording_timeline_exportProfile_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.exportProfilerResults(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("stream", ctx_r3.stream);
} }
const SUPPORTED_VERSIONS = [1];
const PROFILER_VERSION = 1;
export class ProfilerComponent {
    constructor(_fileApiService, _messageBus, dialog) {
        this._fileApiService = _fileApiService;
        this._messageBus = _messageBus;
        this.dialog = dialog;
        this.state = 'idle';
        this.stream = new Subject();
        // We collect this buffer so we can have it available for export.
        this._buffer = [];
    }
    startRecording() {
        this.state = 'recording';
        this._messageBus.emit('startProfiling');
    }
    stopRecording() {
        this.state = 'visualizing';
        this._messageBus.emit('stopProfiling');
        this.stream.complete();
    }
    ngOnInit() {
        this._messageBus.on('profilerResults', (remainingRecords) => {
            if (remainingRecords.duration > 0 && remainingRecords.source) {
                this.stream.next([remainingRecords]);
                this._buffer.push(remainingRecords);
            }
        });
        this._messageBus.on('sendProfilerChunk', (chunkOfRecords) => {
            this.stream.next([chunkOfRecords]);
            this._buffer.push(chunkOfRecords);
        });
        this._fileUploadSubscription = this._fileApiService.uploadedData.subscribe((importedFile) => {
            if (importedFile.error) {
                console.error('Could not process uploaded file');
                console.error(importedFile.error);
                this.dialog.open(ProfilerImportDialogComponent, {
                    width: '600px',
                    data: { status: 'ERROR', errorMessage: importedFile.error },
                });
                return;
            }
            if (!SUPPORTED_VERSIONS.includes(importedFile.version)) {
                const processDataDialog = this.dialog.open(ProfilerImportDialogComponent, {
                    width: '600px',
                    data: { importedVersion: importedFile.version, profilerVersion: PROFILER_VERSION, status: 'INVALID_VERSION' },
                });
                processDataDialog.afterClosed().subscribe((result) => {
                    if (result) {
                        this.state = 'visualizing';
                        this._buffer = importedFile.buffer;
                        setTimeout(() => this.stream.next(importedFile.buffer));
                    }
                });
            }
            else {
                this.state = 'visualizing';
                this._buffer = importedFile.buffer;
                setTimeout(() => this.stream.next(importedFile.buffer));
            }
        });
    }
    ngOnDestroy() {
        this._fileUploadSubscription.unsubscribe();
    }
    exportProfilerResults() {
        const fileToExport = {
            version: PROFILER_VERSION,
            buffer: this._buffer,
        };
        this._fileApiService.saveObjectAsJSON(fileToExport);
    }
    importProfilerResults(event) {
        this._fileApiService.publishFileUpload(event);
    }
    discardRecording() {
        this.stream = new Subject();
        this.state = 'idle';
        this._buffer = [];
    }
}
ProfilerComponent.ɵfac = function ProfilerComponent_Factory(t) { return new (t || ProfilerComponent)(i0.ɵɵdirectiveInject(i1.FileApiService), i0.ɵɵdirectiveInject(i2.MessageBus), i0.ɵɵdirectiveInject(i3.MatDialog)); };
ProfilerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilerComponent, selectors: [["ng-profiler"]], decls: 17, vars: 10, consts: [[1, "profiler-wrapper"], ["mat-icon-button", "", "color", "primary", "class", "profiler-control start-recording-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "profiler-control recording-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "class", "profiler-control discard-button", 3, "click", 4, "ngIf"], [1, "instructions"], ["type", "file", "placeholder", "Upload file", "accept", ".json", 3, "change"], ["id", "profiler-content-wrapper"], ["class", "visualization", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", 1, "profiler-control", "start-recording-button", 3, "click"], ["mat-icon-button", "", 1, "profiler-control", "recording-button", 3, "click"], ["mat-icon-button", "", "color", "primary", 1, "profiler-control", "discard-button", 3, "click"], [1, "visualization"], [3, "stream", "exportProfile"]], template: function ProfilerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-card");
        i0.ɵɵtemplate(2, ProfilerComponent_button_2_Template, 3, 0, "button", 1);
        i0.ɵɵtemplate(3, ProfilerComponent_button_3_Template, 3, 0, "button", 2);
        i0.ɵɵtemplate(4, ProfilerComponent_button_4_Template, 3, 0, "button", 3);
        i0.ɵɵelementStart(5, "p", 4);
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7, " Click the play button to start a new recording, or upload a json file containing profiler data. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "br");
        i0.ɵɵelementStart(9, "span");
        i0.ɵɵelementStart(10, "input", 5);
        i0.ɵɵlistener("change", function ProfilerComponent_Template_input_change_10_listener($event) { return ctx.importProfilerResults($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "p", 4);
        i0.ɵɵtext(12, " Interact to preview change detection. Clicking stop ends this Profiler recording. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p", 4);
        i0.ɵɵtext(14, " Click Save Profile to save your recording or click refresh to clear the current recording. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 6);
        i0.ɵɵtemplate(16, ProfilerComponent_div_16_Template, 2, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.state === "idle");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.state === "recording");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.state === "visualizing");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", ctx.state !== "idle");
        i0.ɵɵadvance(6);
        i0.ɵɵclassProp("hidden", ctx.state !== "recording");
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("hidden", ctx.state !== "visualizing");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.state !== "idle");
    } }, directives: [i4.MatCard, i5.NgIf, i6.MatButton, i7.MatIcon, i8.TimelineComponent], styles: ["[_nghost-%COMP%], .profiler-wrapper[_ngcontent-%COMP%] {\n  font-size: 1em;\n  width: 100%;\n  height: calc(100% - 30px);\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  height: wrap-content;\n  margin: 0 !important;\n  padding: 5px !important;\n  box-shadow: none !important;\n  border-radius: 0;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.profiler-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n\n  &.recording-button {\n    color: #d83c34;\n  }\n}\n\n.instructions[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n  align-self: center;\n\n  &.hidden {\n    display: none;\n  }\n\n  input,\n  span {\n    margin-top: 5px;\n    font-size: 1em;\n    cursor: pointer;\n  }\n}\n\n#profiler-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.recording[_ngcontent-%COMP%], #profiler-content-wrapper[_ngcontent-%COMP%] {\n  margin: 0;\n  height: calc(100% - 24px);\n}\n\n.visualization[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .profiler-control {\n    &.recording-button {\n      color: #ff625a;\n    }\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-profiler',
                templateUrl: './profiler.component.html',
                styleUrls: ['./profiler.component.scss'],
            }]
    }], function () { return [{ type: i1.FileApiService }, { type: i2.MessageBus }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=profiler.component.js.map