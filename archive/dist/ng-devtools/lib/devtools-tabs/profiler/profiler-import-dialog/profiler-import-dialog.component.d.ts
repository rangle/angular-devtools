import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
interface DialogData {
    profilerVersion?: number;
    importedVersion?: number;
    errorMessage?: string;
    status: 'ERROR' | 'INVALID_VERSION';
}
export declare class ProfilerImportDialogComponent {
    dialogRef: MatDialogRef<ProfilerImportDialogComponent>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<ProfilerImportDialogComponent>, data: DialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfilerImportDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfilerImportDialogComponent, "ng-profiler-import-dialog", never, {}, {}, never, never>;
}
export {};
