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
    } }, directives: [i4.MatCard, i5.NgIf, i6.MatButton, i7.MatIcon, i8.TimelineComponent], styles: [".profiler-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{font-size:1em;width:100%;height:calc(100% - 30px)}.mat-card[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid rgba(0,0,0,.12);height:wrap-content;margin:0!important;padding:5px!important;box-shadow:none!important;border-radius:0}.mat-icon[_ngcontent-%COMP%]{font-size:18px}.profiler-control[_ngcontent-%COMP%]{cursor:pointer}.profiler-control.recording-button[_ngcontent-%COMP%]{color:#d83c34}.instructions[_ngcontent-%COMP%]{margin-bottom:0!important;align-self:center}.instructions.hidden[_ngcontent-%COMP%]{display:none}.instructions[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .instructions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:5px;font-size:1em;cursor:pointer}#profiler-content-wrapper[_ngcontent-%COMP%]{width:100%;position:relative;overflow:hidden}#profiler-content-wrapper[_ngcontent-%COMP%], .recording[_ngcontent-%COMP%]{margin:0;height:calc(100% - 24px)}.visualization[_ngcontent-%COMP%]{margin:0;height:100%}.dark-theme[_nghost-%COMP%]   .profiler-control.recording-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .profiler-control.recording-button[_ngcontent-%COMP%]{color:#ff625a}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-profiler',
                templateUrl: './profiler.component.html',
                styleUrls: ['./profiler.component.scss'],
            }]
    }], function () { return [{ type: i1.FileApiService }, { type: i2.MessageBus }, { type: i3.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL3Byb2ZpbGVyL3Byb2ZpbGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9wcm9maWxlci9wcm9maWxlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUk3RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O0lDSHpDLGlDQU1DO0lBRkMsNExBQTBCO0lBRzFCLGdDQUFVO0lBQUMsd0JBQU87SUFBQSxpQkFBVztJQUMvQixpQkFBUzs7OztJQUNULGlDQUtDO0lBRkMsMkxBQXlCO0lBR3pCLGdDQUFVO0lBQUMsd0JBQU87SUFBQSxpQkFBVztJQUMvQixpQkFBUzs7OztJQUNULGtDQU1DO0lBRkMsOExBQTRCO0lBRzVCLGdDQUFVO0lBQUMsZ0NBQWU7SUFBQSxpQkFBVztJQUN2QyxpQkFBUzs7OztJQWdCVCwrQkFBb0Q7SUFDbEQsaURBQW1GO0lBQTFDLG1PQUF5QztJQUFFLGlCQUF3QjtJQUM5RyxpQkFBTTs7O0lBRG1CLGVBQWlCO0lBQWpCLHNDQUFpQjs7QURuQzlDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQU8zQixNQUFNLE9BQU8saUJBQWlCO0lBUzVCLFlBQ1UsZUFBK0IsRUFDL0IsV0FBK0IsRUFDaEMsTUFBaUI7UUFGaEIsb0JBQWUsR0FBZixlQUFlLENBQWdC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QXBGLHNHQUFVLGlDQUE2QixJQUFDO1FBQTNELGlCQUF1RztRQUN6RyxpQkFBTztRQUNULGlCQUFJO1FBQ0osNkJBQStEO1FBQzdELG9HQUNGO1FBQUEsaUJBQUk7UUFDSiw2QkFBaUU7UUFDL0QsNkdBQ0Y7UUFBQSxpQkFBSTtRQUNOLGlCQUFXO1FBQ1gsK0JBQW1DO1FBQ2pDLG9FQUVNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUExQ0MsZUFBc0I7UUFBdEIsMkNBQXNCO1FBUXRCLGVBQTJCO1FBQTNCLGdEQUEyQjtRQVMzQixlQUE2QjtRQUE3QixrREFBNkI7UUFNUixlQUFpQztRQUFqQyw4Q0FBaUM7UUFPakMsZUFBc0M7UUFBdEMsbURBQXNDO1FBR3RDLGVBQXdDO1FBQXhDLHFEQUF3QztRQUtwQyxlQUFzQjtRQUF0QiwyQ0FBc0I7O3VGRDFCekMsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlQnVzLCBFdmVudHMsIFByb2ZpbGVyRnJhbWUgfSBmcm9tICdwcm90b2NvbCc7XG5pbXBvcnQgeyBGaWxlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL2ZpbGUtYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IFByb2ZpbGVySW1wb3J0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlci1pbXBvcnQtZGlhbG9nL3Byb2ZpbGVyLWltcG9ydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG50eXBlIFN0YXRlID0gJ2lkbGUnIHwgJ3JlY29yZGluZycgfCAndmlzdWFsaXppbmcnO1xuXG5jb25zdCBTVVBQT1JURURfVkVSU0lPTlMgPSBbMV07XG5jb25zdCBQUk9GSUxFUl9WRVJTSU9OID0gMTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcHJvZmlsZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGU6IFN0YXRlID0gJ2lkbGUnO1xuICBzdHJlYW0gPSBuZXcgU3ViamVjdDxQcm9maWxlckZyYW1lW10+KCk7XG5cbiAgcHJpdmF0ZSBfZmlsZVVwbG9hZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIFdlIGNvbGxlY3QgdGhpcyBidWZmZXIgc28gd2UgY2FuIGhhdmUgaXQgYXZhaWxhYmxlIGZvciBleHBvcnQuXG4gIHByaXZhdGUgX2J1ZmZlcjogUHJvZmlsZXJGcmFtZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZmlsZUFwaVNlcnZpY2U6IEZpbGVBcGlTZXJ2aWNlLFxuICAgIHByaXZhdGUgX21lc3NhZ2VCdXM6IE1lc3NhZ2VCdXM8RXZlbnRzPixcbiAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2dcbiAgKSB7fVxuXG4gIHN0YXJ0UmVjb3JkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSAncmVjb3JkaW5nJztcbiAgICB0aGlzLl9tZXNzYWdlQnVzLmVtaXQoJ3N0YXJ0UHJvZmlsaW5nJyk7XG4gIH1cblxuICBzdG9wUmVjb3JkaW5nKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSAndmlzdWFsaXppbmcnO1xuICAgIHRoaXMuX21lc3NhZ2VCdXMuZW1pdCgnc3RvcFByb2ZpbGluZycpO1xuICAgIHRoaXMuc3RyZWFtLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9tZXNzYWdlQnVzLm9uKCdwcm9maWxlclJlc3VsdHMnLCAocmVtYWluaW5nUmVjb3JkcykgPT4ge1xuICAgICAgaWYgKHJlbWFpbmluZ1JlY29yZHMuZHVyYXRpb24gPiAwICYmIHJlbWFpbmluZ1JlY29yZHMuc291cmNlKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLm5leHQoW3JlbWFpbmluZ1JlY29yZHNdKTtcbiAgICAgICAgdGhpcy5fYnVmZmVyLnB1c2gocmVtYWluaW5nUmVjb3Jkcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tZXNzYWdlQnVzLm9uKCdzZW5kUHJvZmlsZXJDaHVuaycsIChjaHVua09mUmVjb3JkczogUHJvZmlsZXJGcmFtZSkgPT4ge1xuICAgICAgdGhpcy5zdHJlYW0ubmV4dChbY2h1bmtPZlJlY29yZHNdKTtcbiAgICAgIHRoaXMuX2J1ZmZlci5wdXNoKGNodW5rT2ZSZWNvcmRzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ZpbGVVcGxvYWRTdWJzY3JpcHRpb24gPSB0aGlzLl9maWxlQXBpU2VydmljZS51cGxvYWRlZERhdGEuc3Vic2NyaWJlKChpbXBvcnRlZEZpbGUpID0+IHtcbiAgICAgIGlmIChpbXBvcnRlZEZpbGUuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ291bGQgbm90IHByb2Nlc3MgdXBsb2FkZWQgZmlsZScpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGltcG9ydGVkRmlsZS5lcnJvcik7XG4gICAgICAgIHRoaXMuZGlhbG9nLm9wZW4oUHJvZmlsZXJJbXBvcnREaWFsb2dDb21wb25lbnQsIHtcbiAgICAgICAgICB3aWR0aDogJzYwMHB4JyxcbiAgICAgICAgICBkYXRhOiB7IHN0YXR1czogJ0VSUk9SJywgZXJyb3JNZXNzYWdlOiBpbXBvcnRlZEZpbGUuZXJyb3IgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIVNVUFBPUlRFRF9WRVJTSU9OUy5pbmNsdWRlcyhpbXBvcnRlZEZpbGUudmVyc2lvbikpIHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc0RhdGFEaWFsb2cgPSB0aGlzLmRpYWxvZy5vcGVuKFByb2ZpbGVySW1wb3J0RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICAgICAgd2lkdGg6ICc2MDBweCcsXG4gICAgICAgICAgZGF0YTogeyBpbXBvcnRlZFZlcnNpb246IGltcG9ydGVkRmlsZS52ZXJzaW9uLCBwcm9maWxlclZlcnNpb246IFBST0ZJTEVSX1ZFUlNJT04sIHN0YXR1czogJ0lOVkFMSURfVkVSU0lPTicgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvY2Vzc0RhdGFEaWFsb2cuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAndmlzdWFsaXppbmcnO1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyID0gaW1wb3J0ZWRGaWxlLmJ1ZmZlcjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zdHJlYW0ubmV4dChpbXBvcnRlZEZpbGUuYnVmZmVyKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAndmlzdWFsaXppbmcnO1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBpbXBvcnRlZEZpbGUuYnVmZmVyO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RyZWFtLm5leHQoaW1wb3J0ZWRGaWxlLmJ1ZmZlcikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZmlsZVVwbG9hZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZXhwb3J0UHJvZmlsZXJSZXN1bHRzKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVUb0V4cG9ydCA9IHtcbiAgICAgIHZlcnNpb246IFBST0ZJTEVSX1ZFUlNJT04sXG4gICAgICBidWZmZXI6IHRoaXMuX2J1ZmZlcixcbiAgICB9O1xuICAgIHRoaXMuX2ZpbGVBcGlTZXJ2aWNlLnNhdmVPYmplY3RBc0pTT04oZmlsZVRvRXhwb3J0KTtcbiAgfVxuXG4gIGltcG9ydFByb2ZpbGVyUmVzdWx0cyhldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2ZpbGVBcGlTZXJ2aWNlLnB1Ymxpc2hGaWxlVXBsb2FkKGV2ZW50KTtcbiAgfVxuXG4gIGRpc2NhcmRSZWNvcmRpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5zdHJlYW0gPSBuZXcgU3ViamVjdDxQcm9maWxlckZyYW1lW10+KCk7XG4gICAgdGhpcy5zdGF0ZSA9ICdpZGxlJztcbiAgICB0aGlzLl9idWZmZXIgPSBbXTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInByb2ZpbGVyLXdyYXBwZXJcIj5cbiAgPG1hdC1jYXJkPlxuICAgIDxidXR0b25cbiAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICpuZ0lmPVwic3RhdGUgPT09ICdpZGxlJ1wiXG4gICAgICAoY2xpY2spPVwic3RhcnRSZWNvcmRpbmcoKVwiXG4gICAgICBjbGFzcz1cInByb2ZpbGVyLWNvbnRyb2wgc3RhcnQtcmVjb3JkaW5nLWJ1dHRvblwiXG4gICAgPlxuICAgICAgPG1hdC1pY29uPiBjaXJjbGUgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICpuZ0lmPVwic3RhdGUgPT09ICdyZWNvcmRpbmcnXCJcbiAgICAgIChjbGljayk9XCJzdG9wUmVjb3JkaW5nKClcIlxuICAgICAgY2xhc3M9XCJwcm9maWxlci1jb250cm9sIHJlY29yZGluZy1idXR0b25cIlxuICAgID5cbiAgICAgIDxtYXQtaWNvbj4gY2lyY2xlIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgKm5nSWY9XCJzdGF0ZSA9PT0gJ3Zpc3VhbGl6aW5nJ1wiXG4gICAgICAoY2xpY2spPVwiZGlzY2FyZFJlY29yZGluZygpXCJcbiAgICAgIGNsYXNzPVwicHJvZmlsZXItY29udHJvbCBkaXNjYXJkLWJ1dHRvblwiXG4gICAgPlxuICAgICAgPG1hdC1pY29uPiBub3RfaW50ZXJlc3RlZCA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25zXCIgW2NsYXNzLmhpZGRlbl09XCJzdGF0ZSAhPT0gJ2lkbGUnXCI+XG4gICAgICA8c3Bhbj4gQ2xpY2sgdGhlIHBsYXkgYnV0dG9uIHRvIHN0YXJ0IGEgbmV3IHJlY29yZGluZywgb3IgdXBsb2FkIGEganNvbiBmaWxlIGNvbnRhaW5pbmcgcHJvZmlsZXIgZGF0YS4gPC9zcGFuPlxuICAgICAgPGJyIC8+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJpbXBvcnRQcm9maWxlclJlc3VsdHMoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGZpbGVcIiBhY2NlcHQ9XCIuanNvblwiIC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzPVwiaW5zdHJ1Y3Rpb25zXCIgW2NsYXNzLmhpZGRlbl09XCJzdGF0ZSAhPT0gJ3JlY29yZGluZydcIj5cbiAgICAgIEludGVyYWN0IHRvIHByZXZpZXcgY2hhbmdlIGRldGVjdGlvbi4gQ2xpY2tpbmcgc3RvcCBlbmRzIHRoaXMgUHJvZmlsZXIgcmVjb3JkaW5nLlxuICAgIDwvcD5cbiAgICA8cCBjbGFzcz1cImluc3RydWN0aW9uc1wiIFtjbGFzcy5oaWRkZW5dPVwic3RhdGUgIT09ICd2aXN1YWxpemluZydcIj5cbiAgICAgIENsaWNrIFNhdmUgUHJvZmlsZSB0byBzYXZlIHlvdXIgcmVjb3JkaW5nIG9yIGNsaWNrIHJlZnJlc2ggdG8gY2xlYXIgdGhlIGN1cnJlbnQgcmVjb3JkaW5nLlxuICAgIDwvcD5cbiAgPC9tYXQtY2FyZD5cbiAgPGRpdiBpZD1cInByb2ZpbGVyLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ2aXN1YWxpemF0aW9uXCIgKm5nSWY9XCJzdGF0ZSAhPT0gJ2lkbGUnXCI+XG4gICAgICA8bmctcmVjb3JkaW5nLXRpbWVsaW5lIFtzdHJlYW1dPVwic3RyZWFtXCIgKGV4cG9ydFByb2ZpbGUpPVwiZXhwb3J0UHJvZmlsZXJSZXN1bHRzKClcIj4gPC9uZy1yZWNvcmRpbmctdGltZWxpbmU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=