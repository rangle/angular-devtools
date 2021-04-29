import { ɵProfilerEvent } from '@angular/core';
import { ElementPosition, LifecycleProfile } from 'protocol';
import { Subject } from 'rxjs';
import { IdentityTracker, NodeArray } from '../identity-tracker';

type CreationHook = (
  componentOrDirective: any,
  node: Node,
  id: number,
  isComponent: boolean,
  position: ElementPosition
) => void;

type LifecycleStartHook = (
  componentOrDirective: any,
  hook: keyof LifecycleProfile | 'unknown',
  node: Node,
  id: number,
  isComponent: boolean
) => void;

type LifecycleEndHook = (
  componentOrDirective: any,
  hook: keyof LifecycleProfile | 'unknown',
  node: Node,
  id: number,
  isComponent: boolean
) => void;

type ChangeDetectionStartHook = (component: any, node: Node, id: number, position: ElementPosition) => void;

type ChangeDetectionEndHook = (component: any, node: Node, id: number, position: ElementPosition) => void;

type DestroyHook = (
  componentOrDirective: any,
  node: Node,
  id: number,
  isComponent: boolean,
  position: ElementPosition
) => void;

export interface Hooks {
  onCreate: CreationHook;
  onDestroy: DestroyHook;
  onChangeDetectionStart: ChangeDetectionStartHook;
  onChangeDetectionEnd: ChangeDetectionEndHook;
  onLifecycleHookStart: LifecycleStartHook;
  onLifecycleHookEnd: LifecycleEndHook;
}

export const ngProfilerCallbacks: ((event: ɵProfilerEvent, instanceOrLView: {}, hookOrListener: any) => void)[] = [];

/**
 *  Class for profiling angular applications. Handles hook subscriptions and emitting change detection events.
 */
export abstract class Profiler {
  protected _inChangeDetection = false;
  changeDetection$ = new Subject<void>();

  private _hooks: Partial<Hooks>[] = [];

  constructor(config: Partial<Hooks> = {}) {
    this._hooks.push(config);
  }

  abstract destroy(): void;

  abstract onIndexForest(newNodes: NodeArray, removedNodes: NodeArray): void;

  subscribe(config: Partial<Hooks>): void {
    this._hooks.push(config);
  }

  unsubscribe(config: Partial<Hooks>): void {
    this._hooks.splice(this._hooks.indexOf(config), 1);
  }

  protected _onCreate(
    _: any,
    __: Node,
    id: number | undefined,
    ___: boolean,
    position: ElementPosition | undefined
  ): void {
    if (id === undefined || position === undefined) {
      return;
    }
    this._invokeCallback('onCreate', arguments);
  }

  protected _onDestroy(
    _: any,
    __: Node,
    id: number | undefined,
    ___: boolean,
    position: ElementPosition | undefined
  ): void {
    if (id === undefined || position === undefined) {
      return;
    }
    this._invokeCallback('onDestroy', arguments);
  }

  protected _onChangeDetectionStart(
    _: any,
    __: Node,
    id: number | undefined,
    position: ElementPosition | undefined
  ): void {
    if (id === undefined || position === undefined) {
      return;
    }
    this._invokeCallback('onChangeDetectionStart', arguments);
  }

  protected _onChangeDetectionEnd(
    _: any,
    __: Node,
    id: number | undefined,
    position: ElementPosition | undefined
  ): void {
    if (id === undefined || position === undefined) {
      return;
    }
    this._invokeCallback('onChangeDetectionEnd', arguments);
  }

  protected _onLifecycleHookStart(
    _: any,
    __: keyof LifecycleProfile | 'unknown',
    ___: Node,
    id: number | undefined,
    ____: boolean
  ): void {
    if (id === undefined) {
      return;
    }
    this._invokeCallback('onLifecycleHookStart', arguments);
  }

  protected _onLifecycleHookEnd(
    _: any,
    __: keyof LifecycleProfile | 'unknown',
    ___: Node,
    id: number | undefined,
    ____: boolean
  ): void {
    if (id === undefined) {
      return;
    }
    this._invokeCallback('onLifecycleHookEnd', arguments);
  }

  private _invokeCallback(name: keyof Hooks, args: IArguments): void {
    this._hooks.forEach((config) => {
      const cb = config[name];
      if (cb) {
        cb.apply(null, args);
      }
    });
  }
}

const hookNames = [
  'OnInit',
  'OnDestroy',
  'OnChanges',
  'DoCheck',
  'AfterContentInit',
  'AfterContentChecked',
  'AfterViewInit',
  'AfterViewChecked',
];

const hookMethodNames = new Set(hookNames.map((hook) => `ng${hook}`));

export const getLifeCycleName = (obj: {}, fn: any): keyof LifecycleProfile | 'unknown' => {
  const proto = Object.getPrototypeOf(obj);
  const keys = Object.getOwnPropertyNames(proto);
  for (const propName of keys) {
    // We don't want to touch random get accessors.
    if (!hookMethodNames.has(propName)) {
      continue;
    }
    if (proto[propName] === fn) {
      return propName as keyof LifecycleProfile;
    }
  }
  const fnName = fn.name;
  if (typeof fnName !== 'string') {
    return 'unknown';
  }
  for (const hookName of hookNames) {
    if (fnName.indexOf(hookName) >= 0) {
      return `ng${hookName}` as keyof LifecycleProfile;
    }
  }
  return 'unknown';
};
