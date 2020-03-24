import { Topic, Events } from './messages';
import { MessageBus } from './message-bus';

type ThrottleTopicDuration = {
  [method in Topic]?: number;
};

type ThrottledTopics = {
  [method in Topic]?: boolean;
};

type TopicsInProgress = {
  [method in Topic]?: boolean;
};

const THROTTLE_METHODS: ThrottleTopicDuration = {
  getLatestComponentExplorerView: 500,
};

type TopicBlockSequence = {
  [method in Topic]?: Topic[];
};

// We can't refresh the view until we've received
// a response with the latest nested properties.
const TOPIC_BLOCK_SEQUENCE: TopicBlockSequence = {
  getLatestComponentExplorerView: ['getNestedProperties'],
};

type TopicSequence = {
  [method in Topic]?: Topic;
};

const TOPIC_RESPONSE: TopicSequence = {
  getNestedProperties: 'nestedProperties',
};

const TOPIC_REQUEST: TopicSequence = {
  nestedProperties: 'getNestedProperties',
};

export class PriorityAwareMessageBus extends MessageBus<Events> {
  private _throttled: ThrottledTopics = {};
  private _inProgress: TopicsInProgress = {};

  constructor(private _bus: MessageBus<Events>) {
    super();
  }

  on<E extends Topic>(topic: E, cb: Events[E]): void {
    const self = this;
    return this._bus.on(topic, function (): void {
      cb.apply(this, arguments);
      self._afterMessage(topic);
    });
  }

  once<E extends Topic>(topic: E, cb: Events[E]): void {
    const self = this;
    return this._bus.once(topic, function (): void {
      cb.apply(this, arguments);
      self._afterMessage(topic);
    });
  }

  emit<E extends Topic>(topic: E, args?: Parameters<Events[E]>): boolean {
    if (this._throttled[topic]) {
      return false;
    }
    if (THROTTLE_METHODS[topic]) {
      this._throttled[topic] = true;
      setTimeout(() => (this._throttled[topic] = false), THROTTLE_METHODS[topic]);
    }
    if (TOPIC_RESPONSE[topic]) {
      this._inProgress[topic] = true;
    }
    const blockedBy = TOPIC_BLOCK_SEQUENCE[topic];
    if (blockedBy) {
      // The source code here is safe.
      // TypeScript type inference ignores the null check here.
      // tslint:disable-next-line: no-non-null-assertion
      for (const blocker of blockedBy!) {
        if (this._inProgress[blocker]) {
          return false;
        }
      }
    }
    return this._bus.emit(topic, args);
  }

  destroy(): void {
    this._bus.destroy();
  }

  private _afterMessage(topic: Topic): void {
    const request = TOPIC_REQUEST[topic];
    if (!request) {
      return;
    }
    if (this._inProgress[request]) {
      this._inProgress[request] = false;
    }
  }
}
