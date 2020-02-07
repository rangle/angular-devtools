import { NgModule } from '@angular/core';
import { DemoAppComponent } from './demo-app.component';
import { RouterModule } from '@angular/router';

import { initialize } from 'ng-devtools-backend';
import { ZippyComponent } from './zippy/zippy.component';
import { ZoneUnawareIFrameMessageBus } from 'src/zone-unaware-iframe-message-bus';

@NgModule({
  declarations: [DemoAppComponent, ZippyComponent],
  exports: [DemoAppComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DemoAppComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./todo/app.module').then(m => m.AppModule),
          },
        ],
      },
    ]),
  ],
})
export class DemoAppModule {}

initialize(new ZoneUnawareIFrameMessageBus('angular-devtools-backend', 'angular-devtools', window.parent));
