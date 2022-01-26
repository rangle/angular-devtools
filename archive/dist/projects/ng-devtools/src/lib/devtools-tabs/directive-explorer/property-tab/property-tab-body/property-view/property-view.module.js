import { NgModule } from '@angular/core';
import { PropertyViewBodyComponent } from './property-view-body/property-view-body.component';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PropertyViewHeaderComponent } from './property-view-header/property-view-header.component';
import { PropertyViewComponent } from './property-view.component';
import { PropertyViewTreeComponent } from './property-view-body/property-view-tree/property-view-tree.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PropertyEditorComponent } from './property-view-body/property-view-tree/property-editor/property-editor.component';
import { FormsModule } from '@angular/forms';
import { PropertyPreviewComponent } from './property-view-body/property-view-tree/property-preview/property-preview.component';
import * as i0 from "@angular/core";
export class PropertyViewModule {
}
PropertyViewModule.ɵfac = function PropertyViewModule_Factory(t) { return new (t || PropertyViewModule)(); };
PropertyViewModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PropertyViewModule });
PropertyViewModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatToolbarModule,
            MatIconModule,
            MatTreeModule,
            CommonModule,
            MatExpansionModule,
            DragDropModule,
            FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PropertyViewBodyComponent,
                    PropertyViewHeaderComponent,
                    PropertyViewComponent,
                    PropertyViewTreeComponent,
                    PropertyEditorComponent,
                    PropertyPreviewComponent,
                ],
                imports: [
                    MatToolbarModule,
                    MatIconModule,
                    MatTreeModule,
                    CommonModule,
                    MatExpansionModule,
                    DragDropModule,
                    FormsModule
                ],
                exports: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PropertyViewModule, { declarations: [PropertyViewBodyComponent,
        PropertyViewHeaderComponent,
        PropertyViewComponent,
        PropertyViewTreeComponent,
        PropertyEditorComponent,
        PropertyPreviewComponent], imports: [MatToolbarModule,
        MatIconModule,
        MatTreeModule,
        CommonModule,
        MatExpansionModule,
        DragDropModule,
        FormsModule], exports: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent] }); })();
//# sourceMappingURL=property-view.module.js.map