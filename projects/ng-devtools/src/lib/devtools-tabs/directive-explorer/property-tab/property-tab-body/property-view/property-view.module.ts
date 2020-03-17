import { NgModule } from '@angular/core';
import { PropertyViewBodyComponent } from './property-view-body/property-view-body.component';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { PropertyEditorModule } from './property-view-body/property-editor/property-editor.module';
import { PropertyViewHeaderComponent } from './property-view-header/property-view-header.component';
import { PropertyViewComponent } from './property-view.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent],
  imports: [MatTreeModule, CommonModule, PropertyEditorModule, MatButtonToggleModule, MatButtonModule],
  exports: [PropertyViewBodyComponent, PropertyViewComponent],
})
export class PropertyViewModule {}
