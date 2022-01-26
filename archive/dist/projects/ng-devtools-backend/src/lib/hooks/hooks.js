import { componentMetadata, runOutsideAngular } from '../utils';
import { IdentityTracker } from './identity-tracker';
import { getLViewFromDirectiveOrElementInstance, getDirectiveHostElement, METADATA_PROPERTY_NAME, } from '../lview-transform';
import { Subject } from 'rxjs';
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
const hookTViewProperties = [
    'preOrderHooks',
    'preOrderCheckHooks',
    'contentHooks',
    'contentCheckHooks',
    'viewHooks',
    'viewCheckHooks',
    'destroyHooks',
];
const getLifeCycleName = (obj, fn) => {
    const proto = Object.getPrototypeOf(obj);
    const keys = Object.getOwnPropertyNames(proto);
    for (const propName of keys) {
        // We don't want to touch random get accessors.
        if (!hookMethodNames.has(propName)) {
            continue;
        }
        if (proto[propName] === fn) {
            return propName;
        }
    }
    const fnName = fn.name;
    if (typeof fnName !== 'string') {
        return 'unknown';
    }
    for (const hookName of hookNames) {
        if (fnName.indexOf(hookName) >= 0) {
            return `ng${hookName}`;
        }
    }
    return 'unknown';
};
/**
 * This is a temporal "polyfill" until we receive
 * more comprehensive framework debugging APIs.
 */
export class DirectiveForestHooks {
    constructor(config) {
        this._patched = new Map();
        this._undoLifecyclePatch = [];
        this._lastChangeDetection = new Map();
        this._tracker = new IdentityTracker();
        this._forest = [];
        this._indexedForest = [];
        this._inChangeDetection = false;
        this._changeDetection$ = new Subject();
        this._hooks = [];
        this._hooks.push(config);
    }
    get changeDetection$() {
        return this._changeDetection$;
    }
    getDirectivePosition(dir) {
        const result = this._tracker.getDirectivePosition(dir);
        if (result === undefined) {
            console.warn('Unable to find position of', dir);
        }
        return result;
    }
    getDirectiveId(dir) {
        const result = this._tracker.getDirectiveId(dir);
        if (result === undefined) {
            console.warn('Unable to find ID of', result);
        }
        return result;
    }
    getIndexedDirectiveForest() {
        return this._indexedForest;
    }
    getDirectiveForest() {
        return this._forest;
    }
    initialize() {
        this.indexForest();
    }
    destroy() {
        this._lastChangeDetection = new Map();
        this._tracker.destroy();
        for (const [cmp, template] of this._patched) {
            const meta = componentMetadata(cmp);
            meta.template = template;
            meta.tView.template = template;
        }
        this._patched = new Map();
        this._undoLifecyclePatch.forEach((p) => p());
        this._undoLifecyclePatch = [];
    }
    indexForest() {
        const { newNodes, removedNodes, indexedForest, directiveForest } = this._tracker.index();
        this._indexedForest = indexedForest;
        this._forest = directiveForest;
        newNodes.forEach((node) => {
            this._observeLifecycle(node.directive, node.isComponent);
            this._observeComponent(node.directive);
            this._fireCreationCallback(node.directive, node.isComponent);
        });
        removedNodes.forEach((node) => {
            this._patched.delete(node.directive);
            this._fireDestroyCallback(node.directive, node.isComponent);
        });
    }
    subscribe(config) {
        this._hooks.push(config);
    }
    unsubscribe(config) {
        this._hooks.splice(this._hooks.indexOf(config), 1);
    }
    _fireCreationCallback(component, isComponent) {
        const position = this._tracker.getDirectivePosition(component);
        const id = this._tracker.getDirectiveId(component);
        this._onCreate(component, getDirectiveHostElement(component), id, isComponent, position);
    }
    _fireDestroyCallback(component, isComponent) {
        const position = this._tracker.getDirectivePosition(component);
        const id = this._tracker.getDirectiveId(component);
        this._onDestroy(component, getDirectiveHostElement(component), id, isComponent, position);
    }
    _observeComponent(cmp) {
        const declarations = componentMetadata(cmp);
        if (!declarations) {
            return;
        }
        const original = declarations.template;
        const self = this;
        if (original.patched) {
            return;
        }
        declarations.tView.template = function (_, component) {
            if (!self._inChangeDetection) {
                self._inChangeDetection = true;
                runOutsideAngular(() => {
                    Promise.resolve().then(() => {
                        self._changeDetection$.next();
                        self._inChangeDetection = false;
                    });
                });
            }
            const position = self._tracker.getDirectivePosition(component);
            const start = performance.now();
            const id = self._tracker.getDirectiveId(component);
            self._onChangeDetectionStart(component, getDirectiveHostElement(component), id, position);
            original.apply(this, arguments);
            if (self._tracker.hasDirective(component) && id !== undefined && position !== undefined) {
                self._onChangeDetectionEnd(component, getDirectiveHostElement(component), id, position);
            }
            else {
                self._lastChangeDetection.set(component, performance.now() - start);
            }
        };
        declarations.tView.template.patched = true;
        this._patched.set(cmp, original);
    }
    _observeLifecycle(directive, isComponent) {
        const ctx = getLViewFromDirectiveOrElementInstance(directive);
        if (!ctx) {
            return;
        }
        const tview = ctx[1];
        hookTViewProperties.forEach((hook) => {
            const current = tview[hook];
            if (!Array.isArray(current)) {
                return;
            }
            current.forEach((el, idx) => {
                if (el.patched) {
                    return;
                }
                if (typeof el === 'function') {
                    const self = this;
                    current[idx] = function () {
                        // We currently don't want to notify the consumer
                        // for execution of lifecycle hooks of services and pipes.
                        // These two abstractions don't have `__ngContext__`, and
                        // currently we won't be able to extract the required
                        // metadata by the UI.
                        if (!this[METADATA_PROPERTY_NAME]) {
                            return;
                        }
                        const id = self._tracker.getDirectiveId(this);
                        const lifecycleHookName = getLifeCycleName(this, el);
                        const element = getDirectiveHostElement(this);
                        self._onLifecycleHookStart(this, lifecycleHookName, element, id, isComponent);
                        const result = el.apply(this, arguments);
                        self._onLifecycleHookEnd(this, lifecycleHookName, element, id, isComponent);
                        return result;
                    };
                    current[idx].patched = true;
                    this._undoLifecyclePatch.push(() => {
                        current[idx] = el;
                    });
                }
            });
        });
    }
    _onCreate(_, __, id, ___, position) {
        if (id === undefined || position === undefined) {
            return;
        }
        this._invokeCallback('onCreate', arguments);
    }
    _onDestroy(_, __, id, ___, position) {
        if (id === undefined || position === undefined) {
            return;
        }
        this._invokeCallback('onDestroy', arguments);
    }
    _onChangeDetectionStart(_, __, id, position) {
        if (id === undefined || position === undefined) {
            return;
        }
        this._invokeCallback('onChangeDetectionStart', arguments);
    }
    _onChangeDetectionEnd(_, __, id, position) {
        if (id === undefined || position === undefined) {
            return;
        }
        this._invokeCallback('onChangeDetectionEnd', arguments);
    }
    _onLifecycleHookStart(_, __, ___, id, ____) {
        if (id === undefined) {
            return;
        }
        this._invokeCallback('onLifecycleHookStart', arguments);
    }
    _onLifecycleHookEnd(_, __, ___, id, ____) {
        if (id === undefined) {
            return;
        }
        this._invokeCallback('onLifecycleHookEnd', arguments);
    }
    _invokeCallback(name, args) {
        this._hooks.forEach((config) => {
            const cb = config[name];
            if (cb) {
                cb.apply(null, args);
            }
        });
    }
}
//# sourceMappingURL=hooks.js.map