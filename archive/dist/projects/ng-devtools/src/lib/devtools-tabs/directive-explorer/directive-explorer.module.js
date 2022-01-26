import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DirectiveExplorerComponent } from './directive-explorer.component';
import { DirectiveForestComponent } from './directive-forest/directive-forest.component';
import { FilterComponent } from './directive-forest/filter/filter.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PropertyTabModule } from './property-tab/property-tab.module';
import { DirectiveForestModule } from './directive-forest/directive-forest.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularSplitModule } from '../../vendor/angular-split/lib/module';
import * as i0 from "@angular/core";
export class DirectiveExplorerModule {
}
DirectiveExplorerModule.ɵfac = function DirectiveExplorerModule_Factory(t) { return new (t || DirectiveExplorerModule)(); };
DirectiveExplorerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DirectiveExplorerModule });
DirectiveExplorerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatTreeModule,
            MatCardModule,
            ScrollingModule,
            MatIconModule,
            CommonModule,
            PropertyTabModule,
            MatButtonModule,
            MatSnackBarModule,
            AngularSplitModule,
            DirectiveForestModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveExplorerModule, [{
        type: NgModule,
        args: [{
                declarations: [DirectiveExplorerComponent, DirectiveForestComponent, FilterComponent],
                exports: [DirectiveExplorerComponent],
                imports: [
                    MatTreeModule,
                    MatCardModule,
                    ScrollingModule,
                    MatIconModule,
                    CommonModule,
                    PropertyTabModule,
                    MatButtonModule,
                    MatSnackBarModule,
                    AngularSplitModule,
                    DirectiveForestModule,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectiveExplorerModule, { declarations: [DirectiveExplorerComponent, DirectiveForestComponent, FilterComponent], imports: [MatTreeModule,
        MatCardModule,
        ScrollingModule,
        MatIconModule,
        CommonModule,
        PropertyTabModule,
        MatButtonModule,
        MatSnackBarModule,
        AngularSplitModule,
        DirectiveForestModule], exports: [DirectiveExplorerComponent] }); })();
//# sourceMappingURL=directive-explorer.module.js.map