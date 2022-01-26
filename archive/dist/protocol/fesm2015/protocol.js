var PropType;
(function (PropType) {
    PropType[PropType["Number"] = 0] = "Number";
    PropType[PropType["String"] = 1] = "String";
    PropType[PropType["Null"] = 2] = "Null";
    PropType[PropType["Undefined"] = 3] = "Undefined";
    PropType[PropType["Symbol"] = 4] = "Symbol";
    PropType[PropType["HTMLNode"] = 5] = "HTMLNode";
    PropType[PropType["Boolean"] = 6] = "Boolean";
    PropType[PropType["BigInt"] = 7] = "BigInt";
    PropType[PropType["Function"] = 8] = "Function";
    PropType[PropType["Object"] = 9] = "Object";
    PropType[PropType["Date"] = 10] = "Date";
    PropType[PropType["Array"] = 11] = "Array";
    PropType[PropType["Unknown"] = 12] = "Unknown";
})(PropType || (PropType = {}));
var PropertyQueryTypes;
(function (PropertyQueryTypes) {
    PropertyQueryTypes[PropertyQueryTypes["All"] = 0] = "All";
    PropertyQueryTypes[PropertyQueryTypes["Specified"] = 1] = "Specified";
})(PropertyQueryTypes || (PropertyQueryTypes = {}));

class MessageBus {
}

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
class PriorityAwareMessageBus extends MessageBus {
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

/*
 * Public API Surface of protocol
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MessageBus, PriorityAwareMessageBus, PropType, PropertyQueryTypes };
//# sourceMappingURL=protocol.js.map
