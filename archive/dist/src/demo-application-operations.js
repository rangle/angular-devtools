import { ApplicationOperations } from 'ng-devtools';
export class DemoApplicationOperations extends ApplicationOperations {
    viewSource(position) {
        console.warn('viewSource() is not implemented because the demo app runs in an Iframe');
        throw new Error('Not implemented in demo app.');
    }
    selectDomElement(position) {
        console.warn('selectDomElement() is not implemented because the demo app runs in an Iframe');
        throw new Error('Not implemented in demo app.');
    }
    inspect(directivePosition, keyPath) {
        console.warn('inspect() is not implemented because the demo app runs in an Iframe');
        return;
    }
}
//# sourceMappingURL=demo-application-operations.js.map