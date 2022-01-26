import { ChangeDetectorRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { DevToolsNode, ElementPosition, Events, MessageBus } from 'protocol';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ComponentDataSource, FlatNode } from './component-data-source';
import { IndexedNode } from './index-forest';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { TabUpdate } from '../../tab-update';
import * as i0 from "@angular/core";
export declare class DirectiveForestComponent implements OnInit, OnDestroy {
    private _tabUpdate;
    private _messageBus;
    private _cdr;
    set forest(forest: DevToolsNode[]);
    currentSelectedElement: IndexedNode;
    selectNode: EventEmitter<IndexedNode | null>;
    selectDomElement: EventEmitter<IndexedNode>;
    setParents: EventEmitter<FlatNode[] | null>;
    highlightComponent: EventEmitter<ElementPosition>;
    removeComponentHighlight: EventEmitter<void>;
    toggleInspector: EventEmitter<void>;
    viewport: CdkVirtualScrollViewport;
    filterRegex: RegExp;
    currentlyMatchedIndex: number;
    selectedNode: FlatNode | null;
    parents: FlatNode[];
    private _highlightIDinTreeFromElement;
    private _tabUpdateSubscription;
    set highlightIDinTreeFromElement(id: number | null);
    readonly treeControl: FlatTreeControl<FlatNode, FlatNode>;
    readonly dataSource: ComponentDataSource;
    readonly itemHeight = 18;
    private _initialized;
    constructor(_tabUpdate: TabUpdate, _messageBus: MessageBus<Events>, _cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    subscribeToInspectorEvents(): void;
    selectNodeByComponentId(id: number): void;
    handleSelect(node: FlatNode): void;
    handleSelectDomElement(node: FlatNode): void;
    selectAndEnsureVisible(node: FlatNode): void;
    select(node: FlatNode): void;
    clearSelectedNode(): void;
    private _reselectNodeOnUpdate;
    private _updateForest;
    populateParents(position: ElementPosition): void;
    navigateUp(event: KeyboardEvent): void;
    navigateDown(event: KeyboardEvent): void;
    collapseCurrent(event: KeyboardEvent): void;
    expandCurrent(event: KeyboardEvent): void;
    isEditingDirectiveState(event: KeyboardEvent): boolean;
    isSelected(node: FlatNode): boolean;
    isMatched(node: FlatNode): boolean;
    handleFilter(filterText: string): void;
    private _findMatchedNodes;
    get hasMatched(): boolean;
    nextMatched(): void;
    prevMatched(): void;
    highlightNode(position: ElementPosition): void;
    removeHighlight(): void;
    isHighlighted(node: FlatNode): boolean;
    isElement(node: FlatNode): boolean | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectiveForestComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DirectiveForestComponent, "ng-directive-forest", never, { "forest": "forest"; "currentSelectedElement": "currentSelectedElement"; }, { "selectNode": "selectNode"; "selectDomElement": "selectDomElement"; "setParents": "setParents"; "highlightComponent": "highlightComponent"; "removeComponentHighlight": "removeComponentHighlight"; "toggleInspector": "toggleInspector"; }, never, never>;
}