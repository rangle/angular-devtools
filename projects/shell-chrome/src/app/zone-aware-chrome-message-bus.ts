import { ChromeMessageBus } from './chrome-message-bus';
import { MessageBus, Events, Parameters } from 'protocol';
import { NgZone } from '@angular/core';

export class ZoneAwareChromeMessageBus extends MessageBus<Events> {
  private _bus: ChromeMessageBus;
  constructor(port: chrome.runtime.Port, private _ngZone: NgZone) {
    super();
    this._bus = new ChromeMessageBus(port);
  }

  on<E extends keyof Events>(topic: E, cb: Events[E]): void {
    this._bus.on(topic, function() {
      this._ngZone.run(() => cb.apply(null, arguments));
    }.bind(this));
  }

  once<E extends keyof Events>(topic: E, cb: Events[E]): void {
    this._bus.once(topic, function() {
      this._ngZone.run(() => cb.apply(null, arguments));
    }.bind(this));
  }

  emit<E extends keyof Events>(topic: E, args?: Parameters<Events[E]>): void {
    this._ngZone.run(() => this._bus.emit(topic, args));
  }

  destroy(): void {
    this._bus.destroy();
  }
}
