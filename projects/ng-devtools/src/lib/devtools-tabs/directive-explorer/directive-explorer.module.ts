import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { DirectiveExplorerComponent } from './directive-explorer.component';
import { DirectiveForestComponent } from './directive-forest/directive-forest.component';
import { PropertyViewModule } from './property-view/property-view.module';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DirectiveExplorerComponent, DirectiveForestComponent],
  exports: [DirectiveExplorerComponent],
  imports: [MatTreeModule, MatIconModule, CommonModule, PropertyViewModule, FormsModule],
})
export class DirectiveExplorerModule {}
