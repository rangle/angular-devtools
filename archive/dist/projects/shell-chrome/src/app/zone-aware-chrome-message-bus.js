import { ChromeMessageBus } from './chrome-message-bus';
import { MessageBus } from 'protocol';
export class ZoneAwareChromeMessageBus extends MessageBus {
    constructor(port, _ngZone) {
        super();
        this._ngZone = _ngZone;
        this._bus = new ChromeMessageBus(port);
    }
    on(topic, cb) {
        this._bus.on(topic, function () {
            this._ngZone.run(() => cb.apply(null, arguments));
        }.bind(this));
    }
    once(topic, cb) {
        this._bus.once(topic, function () {
            this._ngZone.run(() => cb.apply(null, arguments));
        }.bind(this));
    }
    emit(topic, args) {
        this._ngZone.run(() => this._bus.emit(topic, args));
        return true;
    }
    destroy() {
        this._bus.destroy();
    }
}
//# sourceMappingURL=zone-aware-chrome-message-bus.js.map