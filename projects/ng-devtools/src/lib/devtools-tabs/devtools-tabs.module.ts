import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevToolsTabsComponent } from './devtools-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { DirectiveExplorerModule } from './directive-explorer/directive-explorer.module';
import { ProfilerModule } from './directive-explorer/profiler/profiler.module';
import { SettingsComponent } from './settings/settings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [DevToolsTabsComponent, SettingsComponent],
  imports: [
    MatTabsModule,
    MatIconModule,
    DirectiveExplorerModule,
    ProfilerModule,
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [DevToolsTabsComponent],
})
export class DevToolsTabModule {}
