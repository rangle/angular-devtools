import { ApplicationEnvironment } from 'ng-devtools';
import { environment } from '../environments/environment';

export class ChromeApplicationEnvironment extends ApplicationEnvironment {
  get environment(): any {
    return environment;
  }
}
