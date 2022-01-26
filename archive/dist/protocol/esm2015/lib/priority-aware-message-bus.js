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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHktYXdhcmUtbWVzc2FnZS1idXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wcm90b2NvbC9zcmMvbGliL3ByaW9yaXR5LWF3YXJlLW1lc3NhZ2UtYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjM0MsTUFBTSxnQkFBZ0IsR0FBMEI7SUFDOUMsOEJBQThCLEVBQUUsR0FBRztDQUNwQyxDQUFDO0FBTUYsaURBQWlEO0FBQ2pELGdEQUFnRDtBQUNoRCxNQUFNLG9CQUFvQixHQUF1QjtJQUMvQyw4QkFBOEIsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0NBQ3hELENBQUM7QUFNRixNQUFNLGNBQWMsR0FBa0I7SUFDcEMsbUJBQW1CLEVBQUUsa0JBQWtCO0NBQ3hDLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBa0I7SUFDbkMsZ0JBQWdCLEVBQUUscUJBQXFCO0NBQ3hDLENBQUM7QUFFRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsVUFBa0I7SUFJN0QsWUFBb0IsSUFBd0IsRUFBVSxjQUFpQyxVQUFVO1FBQy9GLEtBQUssRUFBRSxDQUFDO1FBRFUsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0M7UUFIekYsZUFBVSxHQUFvQixFQUFFLENBQUM7UUFDakMsZ0JBQVcsR0FBcUIsRUFBRSxDQUFDO0lBSTNDLENBQUM7SUFFRCxFQUFFLENBQWtCLEtBQVEsRUFBRSxFQUFhO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBa0IsS0FBUSxFQUFFLEVBQWE7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxDQUFrQixLQUFRLEVBQUUsSUFBNEI7UUFDMUQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNoQztRQUNELE1BQU0sU0FBUyxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksU0FBUyxFQUFFO1lBQ2IsZ0NBQWdDO1lBQ2hDLHlEQUF5RDtZQUN6RCxrREFBa0Q7WUFDbEQsS0FBSyxNQUFNLE9BQU8sSUFBSSxTQUFVLEVBQUU7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDN0IsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtTQUNGO1FBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25GO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxhQUFhLENBQUMsS0FBWTtRQUNoQyxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvcGljLCBFdmVudHMgfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB7IE1lc3NhZ2VCdXMgfSBmcm9tICcuL21lc3NhZ2UtYnVzJztcblxudHlwZSBUaHJvdHRsZVRvcGljRHVyYXRpb24gPSB7XG4gIFttZXRob2QgaW4gVG9waWNdPzogbnVtYmVyO1xufTtcblxudHlwZSBUaHJvdHRsZWRUb3BpY3MgPSB7XG4gIFttZXRob2QgaW4gVG9waWNdPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgVG9waWNzSW5Qcm9ncmVzcyA9IHtcbiAgW21ldGhvZCBpbiBUb3BpY10/OiBib29sZWFuO1xufTtcblxuY29uc3QgVEhST1RUTEVfTUVUSE9EUzogVGhyb3R0bGVUb3BpY0R1cmF0aW9uID0ge1xuICBnZXRMYXRlc3RDb21wb25lbnRFeHBsb3JlclZpZXc6IDEwMCxcbn07XG5cbnR5cGUgVG9waWNCbG9ja1NlcXVlbmNlID0ge1xuICBbbWV0aG9kIGluIFRvcGljXT86IFRvcGljW107XG59O1xuXG4vLyBXZSBjYW4ndCByZWZyZXNoIHRoZSB2aWV3IHVudGlsIHdlJ3ZlIHJlY2VpdmVkXG4vLyBhIHJlc3BvbnNlIHdpdGggdGhlIGxhdGVzdCBuZXN0ZWQgcHJvcGVydGllcy5cbmNvbnN0IFRPUElDX0JMT0NLX1NFUVVFTkNFOiBUb3BpY0Jsb2NrU2VxdWVuY2UgPSB7XG4gIGdldExhdGVzdENvbXBvbmVudEV4cGxvcmVyVmlldzogWydnZXROZXN0ZWRQcm9wZXJ0aWVzJ10sXG59O1xuXG50eXBlIFRvcGljU2VxdWVuY2UgPSB7XG4gIFttZXRob2QgaW4gVG9waWNdPzogVG9waWM7XG59O1xuXG5jb25zdCBUT1BJQ19SRVNQT05TRTogVG9waWNTZXF1ZW5jZSA9IHtcbiAgZ2V0TmVzdGVkUHJvcGVydGllczogJ25lc3RlZFByb3BlcnRpZXMnLFxufTtcblxuY29uc3QgVE9QSUNfUkVRVUVTVDogVG9waWNTZXF1ZW5jZSA9IHtcbiAgbmVzdGVkUHJvcGVydGllczogJ2dldE5lc3RlZFByb3BlcnRpZXMnLFxufTtcblxuZXhwb3J0IGNsYXNzIFByaW9yaXR5QXdhcmVNZXNzYWdlQnVzIGV4dGVuZHMgTWVzc2FnZUJ1czxFdmVudHM+IHtcbiAgcHJpdmF0ZSBfdGhyb3R0bGVkOiBUaHJvdHRsZWRUb3BpY3MgPSB7fTtcbiAgcHJpdmF0ZSBfaW5Qcm9ncmVzczogVG9waWNzSW5Qcm9ncmVzcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2J1czogTWVzc2FnZUJ1czxFdmVudHM+LCBwcml2YXRlIF9zZXRUaW1lb3V0OiB0eXBlb2Ygc2V0VGltZW91dCA9IHNldFRpbWVvdXQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgb248RSBleHRlbmRzIFRvcGljPih0b3BpYzogRSwgY2I6IEV2ZW50c1tFXSk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLl9idXMub24odG9waWMsIGZ1bmN0aW9uICgpOiB2b2lkIHtcbiAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBzZWxmLl9hZnRlck1lc3NhZ2UodG9waWMpO1xuICAgIH0pO1xuICB9XG5cbiAgb25jZTxFIGV4dGVuZHMgVG9waWM+KHRvcGljOiBFLCBjYjogRXZlbnRzW0VdKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuX2J1cy5vbmNlKHRvcGljLCBmdW5jdGlvbiAoKTogdm9pZCB7XG4gICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgc2VsZi5fYWZ0ZXJNZXNzYWdlKHRvcGljKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVtaXQ8RSBleHRlbmRzIFRvcGljPih0b3BpYzogRSwgYXJncz86IFBhcmFtZXRlcnM8RXZlbnRzW0VdPik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl90aHJvdHRsZWRbdG9waWNdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChUT1BJQ19SRVNQT05TRVt0b3BpY10pIHtcbiAgICAgIHRoaXMuX2luUHJvZ3Jlc3NbdG9waWNdID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgYmxvY2tlZEJ5ID0gVE9QSUNfQkxPQ0tfU0VRVUVOQ0VbdG9waWNdO1xuICAgIGlmIChibG9ja2VkQnkpIHtcbiAgICAgIC8vIFRoZSBzb3VyY2UgY29kZSBoZXJlIGlzIHNhZmUuXG4gICAgICAvLyBUeXBlU2NyaXB0IHR5cGUgaW5mZXJlbmNlIGlnbm9yZXMgdGhlIG51bGwgY2hlY2sgaGVyZS5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICBmb3IgKGNvbnN0IGJsb2NrZXIgb2YgYmxvY2tlZEJ5ISkge1xuICAgICAgICBpZiAodGhpcy5faW5Qcm9ncmVzc1tibG9ja2VyXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoVEhST1RUTEVfTUVUSE9EU1t0b3BpY10pIHtcbiAgICAgIHRoaXMuX3Rocm90dGxlZFt0b3BpY10gPSB0cnVlO1xuICAgICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiAodGhpcy5fdGhyb3R0bGVkW3RvcGljXSA9IGZhbHNlKSwgVEhST1RUTEVfTUVUSE9EU1t0b3BpY10pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYnVzLmVtaXQodG9waWMsIGFyZ3MpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9idXMuZGVzdHJveSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWZ0ZXJNZXNzYWdlKHRvcGljOiBUb3BpYyk6IHZvaWQge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBUT1BJQ19SRVFVRVNUW3RvcGljXTtcbiAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luUHJvZ3Jlc3NbcmVxdWVzdF0pIHtcbiAgICAgIHRoaXMuX2luUHJvZ3Jlc3NbcmVxdWVzdF0gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==