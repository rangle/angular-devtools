import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevToolsComponent } from './devtools.component';
import { DevToolsTabModule } from './devtools-tabs/devtools-tabs.module';
import { FormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [DevToolsComponent],
  imports: [CommonModule, DevToolsTabModule, FormsModule, MatProgressSpinnerModule],
  exports: [DevToolsComponent, FormsModule],
})
export class DevToolsModule {}
