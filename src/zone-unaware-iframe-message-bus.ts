import { IFrameMessageBus } from './iframe-message-bus';
import { Events, MessageBus, Parameters } from 'protocol';

type AnyEventCallback<Ev> = <E extends keyof Ev>(topic: E, args: Parameters<Ev[E]>) => void;

const runOutsideAngular = (f: () => any) => {
  const w = window as any;
  if (!w.Zone || w.Zone.current._name !== 'angular') {
    return;
  }
  w.Zone.current._parent.run(f);
};

export class ZoneUnawareIFrameMessageBus extends MessageBus<Events> {
  private _delegate: IFrameMessageBus;

  constructor(source: string, destination: string, docWindow: () => Window) {
    super();
    this._delegate = new IFrameMessageBus(source, destination, docWindow);
  }

  onAny(cb: AnyEventCallback<Events>): any {
    let result: any;
    runOutsideAngular(() => {
      result = this._delegate.onAny(cb);
    });
    return result;
  }

  on<E extends keyof Events>(topic: E, cb: Events[E]): any {
    let result: any;
    runOutsideAngular(() => {
      result = this._delegate.on(topic, cb);
    });
    return result;
  }

  once<E extends keyof Events>(topic: E, cb: Events[E]): any {
    let result: any;
    runOutsideAngular(() => {
      result = this._delegate.once(topic, cb);
    });
    return result;
  }

  // Need to be run in the zone because otherwise it won't be caught by the
  // listener in the extension.
  emit<E extends keyof Events>(topic: E, args?: Parameters<Events[E]>): boolean {
    return this._delegate.emit(topic, args);
  }

  destroy(): void {
    this._delegate.destroy();
  }
}
