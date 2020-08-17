import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevToolsTabsComponent } from './devtools-tabs.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { DirectiveExplorerModule } from './directive-explorer/directive-explorer.module';
import { ProfilerModule } from './profiler/profiler.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TabUpdate } from './tab-update';

@NgModule({
  declarations: [DevToolsTabsComponent],
  imports: [
    MatTabsModule,
    MatIconModule,
    DirectiveExplorerModule,
    ProfilerModule,
    ClipboardModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  providers: [TabUpdate],
  exports: [DevToolsTabsComponent],
})
export class DevToolsTabModule {}
