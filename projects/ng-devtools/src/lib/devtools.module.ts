import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevToolsComponent } from './devtools.component';
import { DevToolsTabModule } from './devtools-tabs/devtools-tabs.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeDirective } from './theme.directive';

@NgModule({
  declarations: [DevToolsComponent, ThemeDirective],
  imports: [CommonModule, DevToolsTabModule, MatProgressSpinnerModule, MatTooltipModule],
  exports: [DevToolsComponent],
})
export class DevToolsModule {}
