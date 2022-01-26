import { ApplicationEnvironment } from 'ng-devtools';
import { environment } from './environments/environment';
export class DemoApplicationEnvironment extends ApplicationEnvironment {
    get environment() {
        return environment;
    }
}
//# sourceMappingURL=demo-application-environment.js.map