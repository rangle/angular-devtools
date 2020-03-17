import { NgModule } from '@angular/core';
import { PropertyViewModule } from './property-tab-body/property-view/property-view.module';
import { PropertyTabComponent } from './property-tab.component';
import { PropertyTabHeaderComponent } from './property-tab-header/property-tab-header.component';
import { CommonModule } from '@angular/common';
import { PropertyTabBodyComponent } from './property-tab-body/property-tab-body.component';

@NgModule({
  declarations: [PropertyTabComponent, PropertyTabHeaderComponent, PropertyTabBodyComponent],
  imports: [PropertyViewModule, CommonModule],
  exports: [PropertyTabComponent],
})
export class PropertyTabModule {}
