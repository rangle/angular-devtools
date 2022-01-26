import { MessageBus } from './message-bus';
const THROTTLE_METHODS = {
    getLatestComponentExplorerView: 100,
};
// We can't refresh the view until we've received
// a response with the latest nested properties.
const TOPIC_BLOCK_SEQUENCE = {
    getLatestComponentExplorerView: ['getNestedProperties'],
};
const TOPIC_RESPONSE = {
    getNestedProperties: 'nestedProperties',
};
const TOPIC_REQUEST = {
    nestedProperties: 'getNestedProperties',
};
export class PriorityAwareMessageBus extends MessageBus {
    constructor(_bus, _setTimeout = setTimeout) {
        super();
        this._bus = _bus;
        this._setTimeout = _setTimeout;
        this._throttled = {};
        this._inProgress = {};
    }
    on(topic, cb) {
        const self = this;
        return this._bus.on(topic, function () {
            cb.apply(this, arguments);
            self._afterMessage(topic);
        });
    }
    once(topic, cb) {
        const self = this;
        return this._bus.once(topic, function () {
            cb.apply(this, arguments);
            self._afterMessage(topic);
        });
    }
    emit(topic, args) {
        if (this._throttled[topic]) {
            return false;
        }
        if (TOPIC_RESPONSE[topic]) {
            this._inProgress[topic] = true;
        }
        const blockedBy = TOPIC_BLOCK_SEQUENCE[topic];
        if (blockedBy) {
            // The source code here is safe.
            // TypeScript type inference ignores the null check here.
            // tslint:disable-next-line: no-non-null-assertion
            for (const blocker of blockedBy) {
                if (this._inProgress[blocker]) {
                    return false;
                }
            }
        }
        if (THROTTLE_METHODS[topic]) {
            this._throttled[topic] = true;
            this._setTimeout(() => (this._throttled[topic] = false), THROTTLE_METHODS[topic]);
        }
        return this._bus.emit(topic, args);
    }
    destroy() {
        this._bus.destroy();
    }
    _afterMessage(topic) {
        const request = TOPIC_REQUEST[topic];
        if (!request) {
            return;
        }
        if (this._inProgress[request]) {
            this._inProgress[request] = false;
        }
    }
}
//# sourceMappingURL=priority-aware-message-bus.js.map