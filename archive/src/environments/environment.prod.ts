import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Process } from 'ng-devtools';

declare let process: Process;

export const environment = {
  production: true,
  process: {
    env: {
      LATEST_SHA: process.env.LATEST_SHA,
    },
  },
  animationModule: BrowserAnimationsModule,
};
