import { ComponentTreeNode } from './../component-tree';
import { ElementPosition, LifecycleProfile } from 'protocol';
import { IndexedNode } from './identity-tracker';
import { Subject } from 'rxjs';
export declare type CreationHook = (componentOrDirective: any, node: Node, id: number, isComponent: boolean, position: ElementPosition) => void;
export declare type LifecycleStartHook = (componentOrDirective: any, hook: keyof LifecycleProfile | 'unknown', node: Node, id: number, isComponent: boolean) => void;
export declare type LifecycleEndHook = (componentOrDirective: any, hook: keyof LifecycleProfile | 'unknown', node: Node, id: number, isComponent: boolean) => void;
export declare type ChangeDetectionStartHook = (component: any, node: Node, id: number, position: ElementPosition) => void;
export declare type ChangeDetectionEndHook = (component: any, node: Node, id: number, position: ElementPosition) => void;
export declare type DestroyHook = (componentOrDirective: any, node: Node, id: number, isComponent: boolean, position: ElementPosition) => void;
export interface Hooks {
    onCreate: CreationHook;
    onDestroy: DestroyHook;
    onChangeDetectionStart: ChangeDetectionStartHook;
    onChangeDetectionEnd: ChangeDetectionEndHook;
    onLifecycleHookStart: LifecycleStartHook;
    onLifecycleHookEnd: LifecycleEndHook;
}
/**
 * This is a temporal "polyfill" until we receive
 * more comprehensive framework debugging APIs.
 */
export declare class DirectiveForestHooks {
    private _patched;
    private _undoLifecyclePatch;
    private _lastChangeDetection;
    private _tracker;
    private _forest;
    private _indexedForest;
    private _inChangeDetection;
    private _changeDetection$;
    private _hooks;
    constructor(config: Partial<Hooks>);
    get changeDetection$(): Subject<void>;
    getDirectivePosition(dir: any): ElementPosition | undefined;
    getDirectiveId(dir: any): number | undefined;
    getIndexedDirectiveForest(): IndexedNode[];
    getDirectiveForest(): ComponentTreeNode[];
    initialize(): void;
    destroy(): void;
    indexForest(): void;
    subscribe(config: Partial<Hooks>): void;
    unsubscribe(config: Partial<Hooks>): void;
    private _fireCreationCallback;
    private _fireDestroyCallback;
    private _observeComponent;
    private _observeLifecycle;
    private _onCreate;
    private _onDestroy;
    private _onChangeDetectionStart;
    private _onChangeDetectionEnd;
    private _onLifecycleHookStart;
    private _onLifecycleHookEnd;
    private _invokeCallback;
}
