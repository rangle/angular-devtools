import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class DirectiveForestModule {
}
DirectiveForestModule.ɵfac = function DirectiveForestModule_Factory(t) { return new (t || DirectiveForestModule)(); };
DirectiveForestModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DirectiveForestModule });
DirectiveForestModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatCardModule, MatButtonModule, MatIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveForestModule, [{
        type: NgModule,
        args: [{
                declarations: [BreadcrumbsComponent],
                imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
                exports: [BreadcrumbsComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectiveForestModule, { declarations: [BreadcrumbsComponent], imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule], exports: [BreadcrumbsComponent] }); })();
//# sourceMappingURL=directive-forest.module.js.map