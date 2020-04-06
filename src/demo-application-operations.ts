import { ApplicationOperations } from 'ng-devtools';
import { DirectivePosition, ElementPosition } from 'protocol';

export class DemoApplicationOperations extends ApplicationOperations {
  viewSource(position: ElementPosition): void {
    console.warn('viewSource() is not implemented because the demo app runs in an Iframe');
    throw new Error('Not implemented in demo app.');
  }
  selectDomElement(position: ElementPosition): void {
    console.warn('selectDomElement() is not implemented because the demo app runs in an Iframe');
    throw new Error('Not implemented in demo app.');
  }
  inspectFunction(position: DirectivePosition, keyPath: string[]): void {
    console.warn('inspectFunction() is not implemented because the demo app runs in an Iframe');
    return;
  }
}
