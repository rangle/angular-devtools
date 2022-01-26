import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProfilerComponent } from './profiler.component';
import { TimelineModule } from './recording/timeline/timeline.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProfilerImportDialogComponent } from './profiler-import-dialog/profiler-import-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class ProfilerModule {
}
ProfilerModule.ɵfac = function ProfilerModule_Factory(t) { return new (t || ProfilerModule)(); };
ProfilerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ProfilerModule });
ProfilerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatDialogModule,
            MatIconModule,
            MatSelectModule,
            FormsModule,
            TimelineModule,
            MatButtonModule,
            MatCardModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilerModule, [{
        type: NgModule,
        args: [{
                declarations: [ProfilerComponent, ProfilerImportDialogComponent],
                imports: [
                    CommonModule,
                    MatDialogModule,
                    MatIconModule,
                    MatSelectModule,
                    FormsModule,
                    TimelineModule,
                    MatButtonModule,
                    MatCardModule,
                ],
                exports: [ProfilerComponent],
                entryComponents: [ProfilerImportDialogComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProfilerModule, { declarations: [ProfilerComponent, ProfilerImportDialogComponent], imports: [CommonModule,
        MatDialogModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        TimelineModule,
        MatButtonModule,
        MatCardModule], exports: [ProfilerComponent] }); })();
//# sourceMappingURL=profiler.module.js.map