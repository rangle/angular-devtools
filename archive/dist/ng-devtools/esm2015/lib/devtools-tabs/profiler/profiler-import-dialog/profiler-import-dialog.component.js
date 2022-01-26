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
    } }, directives: [i2.NgSwitch, i2.NgSwitchCase, i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i3.MatButton, i1.MatDialogClose], styles: [".version[_ngcontent-%COMP%]{font-weight:400;font-size:16px}.profiler-version[_ngcontent-%COMP%]{color:#388e3c}.error[_ngcontent-%COMP%], .imported-version[_ngcontent-%COMP%]{color:#d32f2f}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZXItaW1wb3J0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcHJvZmlsZXItaW1wb3J0LWRpYWxvZy9wcm9maWxlci1pbXBvcnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9wcm9maWxlci9wcm9maWxlci1pbXBvcnQtZGlhbG9nL3Byb2ZpbGVyLWltcG9ydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0lDQXZFLDZCQUFzQztJQUNwQyw2QkFBcUI7SUFDbkIsdUJBQ0Y7SUFBQSxpQkFBSztJQUNMLDhCQUF3QjtJQUN0Qix5QkFBRztJQUNELGtEQUNGO0lBQUEsaUJBQUk7SUFDSiw0QkFBaUI7SUFDZixZQUNGO0lBQUEsaUJBQUk7SUFDTixpQkFBTTtJQUNOLDhCQUF3QjtJQUN0QixpQ0FBbUQ7SUFDakQsd0JBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFNO0lBQ1IsMEJBQWU7OztJQVJULGVBQ0Y7SUFERSx5REFDRjtJQUd3QixlQUEwQjtJQUExQix3Q0FBMEI7OztJQUt0RCw2QkFBZ0Q7SUFDOUMsNkJBQXFCO0lBQ25CLHlCQUNGO0lBQUEsaUJBQUs7SUFDTCw4QkFBd0I7SUFDdEIseUJBQUc7SUFDRCwwSkFFRjtJQUFBLGlCQUFJO0lBQ0oseUJBQUc7SUFDRCx5Q0FBd0I7SUFBQSwrQkFBdUM7SUFBQSxZQUEwQjtJQUFBLGlCQUFPO0lBQ2xHLGlCQUFJO0lBRUosMEJBQUc7SUFDRCxtREFBaUM7SUFBQSxnQ0FBdUM7SUFBQSxhQUEwQjtJQUFBLGlCQUFPO0lBQzNHLGlCQUFJO0lBQ0osMEJBQUc7SUFDRCx5R0FDRjtJQUFBLGlCQUFJO0lBQ04saUJBQU07SUFDTiwrQkFBd0I7SUFDdEIsa0NBQW1EO0lBQ2pELDRCQUNGO0lBQUEsaUJBQVM7SUFDVCxrQ0FBa0Q7SUFDaEQsc0JBQ0Y7SUFBQSxpQkFBUztJQUNYLGlCQUFNO0lBQ1IsMEJBQWU7OztJQWxCc0QsZUFBMEI7SUFBMUIsaURBQTBCO0lBSWpCLGVBQTBCO0lBQTFCLGlEQUEwQjtJQU81RSxlQUEwQjtJQUExQix3Q0FBMEI7SUFHMUIsZUFBeUI7SUFBekIsdUNBQXlCOztBRDVCdkQsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QyxZQUNTLFNBQXNELEVBQzdCLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQTZDO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQVk7SUFDL0MsQ0FBQzs7MEdBSk8sNkJBQTZCLDhEQUc5QixlQUFlO2dGQUhkLDZCQUE2QjtRQ2YxQyxnQ0FBdUM7UUFDckMsaUdBaUJlO1FBQ2YsaUdBNEJlO1FBQ2pCLDBCQUFlOztRQWhERCwwQ0FBd0I7UUFDckIsZUFBcUI7UUFBckIsc0NBQXFCO1FBa0JyQixlQUErQjtRQUEvQixnREFBK0I7O3VGREpuQyw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2FBQ3ZEOztzQkFJSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIHByb2ZpbGVyVmVyc2lvbj86IG51bWJlcjtcbiAgaW1wb3J0ZWRWZXJzaW9uPzogbnVtYmVyO1xuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG4gIHN0YXR1czogJ0VSUk9SJyB8ICdJTlZBTElEX1ZFUlNJT04nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1wcm9maWxlci1pbXBvcnQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGVyLWltcG9ydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlci1pbXBvcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVySW1wb3J0RGlhbG9nQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFByb2ZpbGVySW1wb3J0RGlhbG9nQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGFcbiAgKSB7fVxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZGF0YS5zdGF0dXNcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0VSUk9SJ1wiPlxuICAgIDxoMSBtYXQtZGlhbG9nLXRpdGxlPlxuICAgICAgRXJyb3JcbiAgICA8L2gxPlxuICAgIDxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICAgICAgPHA+XG4gICAgICAgIENvdWxkIG5vdCBwcm9jZXNzIHVwbG9hZGVkIGZpbGUuXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzcz1cImVycm9yXCI+XG4gICAgICAgIHt7IGRhdGEuZXJyb3JNZXNzYWdlIH19XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJmYWxzZVwiPlxuICAgICAgICBDbG9zZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInSU5WQUxJRF9WRVJTSU9OJ1wiPlxuICAgIDxoMSBtYXQtZGlhbG9nLXRpdGxlPlxuICAgICAgV2FybmluZ1xuICAgIDwvaDE+XG4gICAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIGZpbGUgeW91IGFyZSBhdHRlbXB0aW5nIHRvIHVwbG9hZCB3YXMgcmVjb3JkZWQgaW4gYSBkaWZmZXJlbnQgZm9ybWF0IHRoYW4gdGhlIG9uZSBzdXBwb3J0ZWQgYnkgeW91ciBjdXJyZW50XG4gICAgICAgIEFuZ3VsYXIgRGV2VG9vbHMgdmVyc2lvblxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEN1cnJlbnQgZm9ybWF0IHZlcnNpb246IDxzcGFuIGNsYXNzPVwidmVyc2lvbiBwcm9maWxlci12ZXJzaW9uXCI+e3sgZGF0YS5wcm9maWxlclZlcnNpb24gfX08L3NwYW4+XG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICBGb3JtYXQgdmVyc2lvbiBvZiB1cGxvYWRlZCBmaWxlOiA8c3BhbiBjbGFzcz1cInZlcnNpb24gaW1wb3J0ZWQtdmVyc2lvblwiPnt7IGRhdGEuaW1wb3J0ZWRWZXJzaW9uIH19PC9zcGFuPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEZpbGVzIHJlY29yZGVkIGluIG9sZGVyIHZlcnNpb25zIG1heSBubyBsb25nZXIgYmUgY29tcGF0aWJsZS4gRG8geW91IHdpc2ggdG8gY29udGludWU/XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJmYWxzZVwiPlxuICAgICAgICBObyBUaGFua3NcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwidHJ1ZVwiPlxuICAgICAgICBZZXNcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19