import { ɵProfilerEvent } from '@angular/core';
import { getDirectiveHostElement } from '../../directive-forest';
import { runOutsideAngular } from '../../utils';
import { IdentityTracker, NodeArray } from '../identity-tracker';
import { getLifeCycleName, Hooks, Profiler } from './shared';

type ProfilerCallback = (event: ɵProfilerEvent, instanceOrLView: {}, hookOrListener: any) => void;

/** Implementation of Profiler that utilizes framework APIs fire profiler hooks. */
export class NgProfiler extends Profiler {
  private _tracker = IdentityTracker.getInstance();
  private _callbacks: ProfilerCallback[] = [];
  private _lastDirectiveInstance: {} | null = null;

  constructor(config: Partial<Hooks> = {}) {
    super(config);
    this._setProfilerCallback((event: ɵProfilerEvent, instanceOrLView: {}, hookOrListener: any) => {
      if (this[event] === undefined) {
        return;
      }

      this[event](instanceOrLView, hookOrListener);
    });
    this._initialize();
  }

  private _initialize(): void {
    const ng = (window as any).ng;
    ng.ɵsetProfiler((event: ɵProfilerEvent, instanceOrLView: {}, hookOrListener: any) =>
      this._callbacks.forEach((cb) => cb(event, instanceOrLView, hookOrListener))
    );
  }

  private _setProfilerCallback(callback: ProfilerCallback): void {
    this._callbacks.push(callback);
  }

  destroy(): void {
    this._tracker.destroy();
  }

  onIndexForest(newNodes: NodeArray, removedNodes: NodeArray): void {
    newNodes.forEach((node) => {
      const { directive, isComponent } = node;

      const position = this._tracker.getDirectivePosition(directive);
      const id = this._tracker.getDirectiveId(directive);
      this._onCreate(directive, getDirectiveHostElement(directive), id, isComponent, position);
    });

    removedNodes.forEach((node) => {
      const { directive, isComponent } = node;

      const position = this._tracker.getDirectivePosition(directive);
      const id = this._tracker.getDirectiveId(directive);
      this._onDestroy(directive, getDirectiveHostElement(directive), id, isComponent, position);
    });
  }

  [ɵProfilerEvent.TemplateCreateStart](_directive: any, _hookOrListener: any): void {
    // todo: implement
    return;
  }

  [ɵProfilerEvent.TemplateCreateEnd](_directive: any, _hookOrListener: any): void {
    // todo: implement
    return;
  }

  [ɵProfilerEvent.TemplateUpdateStart](context: any, _hookOrListener: any): void {
    if (!this._inChangeDetection) {
      this._inChangeDetection = true;
      runOutsideAngular(() => {
        Promise.resolve().then(() => {
          this.changeDetection$.next();
          this._inChangeDetection = false;
        });
      });
    }

    const position = this._tracker.getDirectivePosition(context);
    const id = this._tracker.getDirectiveId(context);

    // If we can find the position and the ID we assume that this is a component instance.
    // Alternatively, if we can't find the ID or the position, we assume that this is a
    // context of an embedded view (for example, NgForOfContext, NgIfContext, or a custom one).
    if (position !== undefined && id !== undefined) {
      this._lastDirectiveInstance = context;
    }

    if (id !== undefined && position !== undefined) {
      this._onChangeDetectionStart(context, getDirectiveHostElement(context), id, position);
      return;
    }

    this._onChangeDetectionStart(
      this._lastDirectiveInstance,
      getDirectiveHostElement(this._lastDirectiveInstance),
      this._tracker.getDirectiveId(this._lastDirectiveInstance),
      this._tracker.getDirectivePosition(this._lastDirectiveInstance)
    );
  }

  [ɵProfilerEvent.TemplateUpdateEnd](context: any, _hookOrListener: any): void {
    const position = this._tracker.getDirectivePosition(context);
    const id = this._tracker.getDirectiveId(context);

    if (this._tracker.hasDirective(context) && id !== undefined && position !== undefined) {
      this._onChangeDetectionEnd(context, getDirectiveHostElement(context), id, position);
      return;
    }

    this._onChangeDetectionEnd(
      this._lastDirectiveInstance,
      getDirectiveHostElement(this._lastDirectiveInstance),
      this._tracker.getDirectiveId(this._lastDirectiveInstance),
      this._tracker.getDirectivePosition(this._lastDirectiveInstance)
    );
  }

  [ɵProfilerEvent.LifecycleHookStart](directive: any, hook: any): void {
    const id = this._tracker.getDirectiveId(directive);
    const element = getDirectiveHostElement(directive);
    const lifecycleHookName = getLifeCycleName(directive, hook);
    const isComponent = !!this._tracker.isComponent.get(directive);

    this._onLifecycleHookStart(directive, lifecycleHookName, element, id, isComponent);
  }

  [ɵProfilerEvent.LifecycleHookEnd](directive: any, hook: any): void {
    const id = this._tracker.getDirectiveId(directive);
    const element = getDirectiveHostElement(directive);
    const lifecycleHookName = getLifeCycleName(directive, hook);
    const isComponent = !!this._tracker.isComponent.get(directive);

    this._onLifecycleHookEnd(directive, lifecycleHookName, element, id, isComponent);
  }

  [ɵProfilerEvent.OutputStart](componentOrDirective: any, listener: () => void): void {
    const isComponent = !!this._tracker.isComponent.get(componentOrDirective);
    const node = getDirectiveHostElement(componentOrDirective);
    const id = this._tracker.getDirectiveId(componentOrDirective);
    this._onOutputStart(componentOrDirective, listener.name, node, id, isComponent);
  }

  [ɵProfilerEvent.OutputEnd](componentOrDirective: any, listener: () => void): void {
    const isComponent = !!this._tracker.isComponent.get(componentOrDirective);
    const node = getDirectiveHostElement(componentOrDirective);
    const id = this._tracker.getDirectiveId(componentOrDirective);
    this._onOutputEnd(componentOrDirective, listener.name, node, id, isComponent);
  }
}
