import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MessageBus, Events, DevToolsNode, ElementPosition, DirectivePosition } from 'protocol';
import { IndexedNode } from './directive-forest/index-forest';
import { ApplicationOperations } from '../../application-operations';
import { ElementPropertyResolver } from './property-resolver/element-property-resolver';
import { FlatNode } from './directive-forest/component-data-source';
import { FlatNode as PropertyFlatNode } from './property-resolver/element-property-resolver';
import { DirectiveForestComponent } from './directive-forest/directive-forest.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import * as i0 from "@angular/core";
export declare class DirectiveExplorerComponent implements OnInit, OnDestroy {
    private _appOperations;
    private _messageBus;
    private _propResolver;
    private _cdr;
    private _ngZone;
    toggleInspector: EventEmitter<void>;
    currentSelectedElement: IndexedNode | null;
    forest: DevToolsNode[];
    splitDirection: 'horizontal' | 'vertical';
    splitElementRef: ElementRef;
    directiveForestSplitArea: ElementRef;
    private _resizeObserver;
    private _clickedElement;
    private _refreshRetryTimeout;
    parents: FlatNode[] | null;
    directiveForest: DirectiveForestComponent;
    breadcrumbs: BreadcrumbsComponent;
    constructor(_appOperations: ApplicationOperations, _messageBus: MessageBus<Events>, _propResolver: ElementPropertyResolver, _cdr: ChangeDetectorRef, _ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleNodeSelection(node: IndexedNode | null): void;
    subscribeToBackendEvents(): void;
    refresh(): void;
    viewSource(): void;
    handleSelectDomElement(node: IndexedNode): void;
    highlight(node: FlatNode): void;
    unhighlight(): void;
    private _constructViewQuery;
    private _getPropertyQuery;
    highlightComponent(position: ElementPosition): void;
    removeComponentHighlight(): void;
    handleSelect(node: FlatNode): void;
    handleSetParents(parents: FlatNode[] | null): void;
    inspect({ node, directivePosition }: {
        node: PropertyFlatNode;
        directivePosition: DirectivePosition;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectiveExplorerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DirectiveExplorerComponent, "ng-directive-explorer", never, {}, { "toggleInspector": "toggleInspector"; }, never, never>;
}