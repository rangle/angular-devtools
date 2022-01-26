import { IFrameMessageBus } from './iframe-message-bus';
import { MessageBus } from 'protocol';
const runOutsideAngular = (f) => {
    const w = window;
    if (!w.Zone || w.Zone.current._name !== 'angular') {
        f();
        return;
    }
    w.Zone.current._parent.run(f);
};
export class ZoneUnawareIFrameMessageBus extends MessageBus {
    constructor(source, destination, docWindow) {
        super();
        this._delegate = new IFrameMessageBus(source, destination, docWindow);
    }
    onAny(cb) {
        let result;
        runOutsideAngular(() => {
            result = this._delegate.onAny(cb);
        });
        return result;
    }
    on(topic, cb) {
        let result;
        runOutsideAngular(() => {
            result = this._delegate.on(topic, cb);
        });
        return result;
    }
    once(topic, cb) {
        let result;
        runOutsideAngular(() => {
            result = this._delegate.once(topic, cb);
        });
        return result;
    }
    // Need to be run in the zone because otherwise it won't be caught by the
    // listener in the extension.
    emit(topic, args) {
        return this._delegate.emit(topic, args);
    }
    destroy() {
        this._delegate.destroy();
    }
}
//# sourceMappingURL=zone-unaware-iframe-message-bus.js.map