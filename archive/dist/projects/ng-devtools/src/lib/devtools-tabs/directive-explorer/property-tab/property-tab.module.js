import { NgModule } from '@angular/core';
import { PropertyViewModule } from './property-tab-body/property-view/property-view.module';
import { PropertyTabComponent } from './property-tab.component';
import { PropertyTabHeaderComponent } from './property-tab-header/property-tab-header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PropertyTabBodyComponent } from './property-tab-body/property-tab-body.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ComponentMetadataComponent } from './property-tab-header/component-metadata/component-metadata.component';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class PropertyTabModule {
}
PropertyTabModule.ɵfac = function PropertyTabModule_Factory(t) { return new (t || PropertyTabModule)(); };
PropertyTabModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PropertyTabModule });
PropertyTabModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PropertyTabComponent,
                    PropertyTabHeaderComponent,
                    PropertyTabBodyComponent,
                    ComponentMetadataComponent,
                ],
                imports: [PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule],
                exports: [PropertyTabComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PropertyTabModule, { declarations: [PropertyTabComponent,
        PropertyTabHeaderComponent,
        PropertyTabBodyComponent,
        ComponentMetadataComponent], imports: [PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule], exports: [PropertyTabComponent] }); })();
//# sourceMappingURL=property-tab.module.js.map