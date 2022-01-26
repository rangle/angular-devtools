import * as i0 from '@angular/core';
import { Injectable, DefaultIterableDiffer, EventEmitter, Component, Output, Input, ChangeDetectionStrategy, ViewChild, HostListener, ViewChildren, Directive, NgModule, ElementRef, Inject } from '@angular/core';
import { ReplaySubject, BehaviorSubject, merge, Observable, Subject, interval } from 'rxjs';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import * as i2 from 'protocol';
import { PropType, PropertyQueryTypes } from 'protocol';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$4 from '@angular/material/tree';
import { MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { DataSource } from '@angular/cdk/collections';
import { map, share, debounceTime } from 'rxjs/operators';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i4 from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i2$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2$2 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i1$2 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i3$1 from '@angular/cdk/drag-drop';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import * as i2$3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i5 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import * as i9 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i1$3 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as d3 from 'd3';
import * as i13 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i5$1 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as i3$2 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i2$5 from 'ngx-flamegraph';
import { NgxFlamegraphModule } from 'ngx-flamegraph';
import { __decorate } from 'tslib';
import memo from 'memo-decorator';
import * as treemap from 'webtreemap/build/webtreemap';
import * as i5$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i2$6 from '@angular/material/form-field';
import * as i4$1 from '@angular/material/core';
import * as i1$4 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

class ThemeService {
    constructor(_rendererFactory) {
        this._rendererFactory = _rendererFactory;
        this.currentTheme = new ReplaySubject();
        this.renderer = this._rendererFactory.createRenderer(null, null);
        this.toggleDarkMode(this._prefersDarkMode);
    }
    toggleDarkMode(isDark) {
        const removeClass = isDark ? 'light-theme' : 'dark-theme';
        const addClass = !isDark ? 'light-theme' : 'dark-theme';
        this.renderer.removeClass(document.body, removeClass);
        this.renderer.addClass(document.body, addClass);
        this.currentTheme.next(addClass);
    }
    initializeThemeWatcher() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            this.toggleDarkMode(this._prefersDarkMode);
        });
    }
    get _prefersDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(i0.ɵɵinject(i0.RendererFactory2)); };
ThemeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i0.RendererFactory2 }]; }, null); })();

const diff = (differ, a, b) => {
    differ.diff(a);
    differ.diff(b);
    const alreadySet = [];
    const movedItems = [];
    // We first have to set the moved items to their correct positions.
    // Keep in mind that the track by function may not guarantee
    // that we haven't changed any of the items' props.
    differ.forEachMovedItem(record => {
        if (record.currentIndex === null) {
            return;
        }
        if (record.previousIndex === null) {
            return;
        }
        // We want to preserve the reference so that a default
        // track by function used by the CDK, for instance, can
        // recognize that this item's identity hasn't changed.
        // At the same time, since we don't have the guarantee
        // that we haven't already set the previousIndex while
        // iterating, we need to check that. If we have, we assign
        // this array item to a new object. We don't want to risk
        // changing the properties of an object we'll use in the future.
        if (!alreadySet[record.previousIndex]) {
            a[record.currentIndex] = a[record.previousIndex];
        }
        else {
            a[record.currentIndex] = {};
        }
        Object.keys(b[record.currentIndex]).forEach(prop => {
            // TypeScript's type inference didn't follow the check from above.
            if (record.currentIndex === null) {
                return;
            }
            a[record.currentIndex][prop] = b[record.currentIndex][prop];
        });
        if (!alreadySet[record.previousIndex]) {
            // tslint:disable-next-line: no-non-null-assertion
            a[record.previousIndex] = null;
        }
        alreadySet[record.currentIndex] = true;
        movedItems.push(a[record.currentIndex]);
    });
    // Now we can set the new items and remove the deleted ones.
    const newItems = [];
    const removedItems = [];
    differ.forEachAddedItem(record => {
        if (record.currentIndex !== null && record.previousIndex === null) {
            a[record.currentIndex] = record.item;
            alreadySet[record.currentIndex] = true;
            newItems.push(record.item);
        }
    });
    differ.forEachRemovedItem(record => {
        if (record.previousIndex === null) {
            return;
        }
        if (record.currentIndex === null && !alreadySet[record.previousIndex]) {
            // tslint:disable-next-line: no-non-null-assertion
            a[record.previousIndex] = null;
        }
        removedItems.push(record.item);
    });
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === null) {
            a.splice(i, 1);
        }
    }
    return { newItems, removedItems, movedItems };
};

const arrayifyProps = (props, parent = null) => Object.keys(props)
    .map((name) => ({ name, descriptor: props[name], parent }))
    .sort((a, b) => {
    const parsedA = parseInt(a.name, 10);
    const parsedB = parseInt(b.name, 10);
    if (isNaN(parsedA) || isNaN(parsedB)) {
        return a.name > b.name ? 1 : -1;
    }
    return parsedA - parsedB;
});

const trackBy$1 = (_, item) => {
    return `#${item.prop.name}#${item.level}`;
};
class PropertyDataSource extends DataSource {
    constructor(props, _treeFlattener, _treeControl, _entityPosition, _messageBus) {
        super();
        this._treeFlattener = _treeFlattener;
        this._treeControl = _treeControl;
        this._entityPosition = _entityPosition;
        this._messageBus = _messageBus;
        this._data = new BehaviorSubject([]);
        this._subscriptions = [];
        this._expandedData = new BehaviorSubject([]);
        this._differ = new DefaultIterableDiffer(trackBy$1);
        this._data.next(this._treeFlattener.flattenNodes(arrayifyProps(props)));
    }
    get data() {
        return this._data.value;
    }
    get treeControl() {
        return this._treeControl;
    }
    update(props) {
        const newData = this._treeFlattener.flattenNodes(arrayifyProps(props));
        diff(this._differ, this.data, newData);
        this._data.next(this.data);
    }
    connect(collectionViewer) {
        const changed = this._treeControl.expansionModel.changed;
        if (!changed) {
            throw new Error('Unable to subscribe to the expansion model change');
        }
        const s = changed.subscribe((change) => {
            if (change.added) {
                change.added.forEach((node) => this._toggleNode(node, true));
            }
            if (change.removed) {
                change.removed.reverse().forEach((node) => this._toggleNode(node, false));
            }
        });
        this._subscriptions.push(s);
        const changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._data];
        return merge(...changes).pipe(map(() => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this.data, this._treeControl));
            return this._expandedData.value;
        }));
    }
    disconnect() {
        this._subscriptions.forEach((s) => s.unsubscribe());
        this._subscriptions = [];
    }
    _toggleNode(node, expand) {
        const index = this.data.indexOf(node);
        // If we cannot find the current node, or the current node is not expandable
        // or...if it's expandable but it does have a value, or we're collapsing
        // we're not interested in fetching its children.
        if (index < 0 || !node.expandable || node.prop.descriptor.value || !expand) {
            return;
        }
        let parentPath = [];
        let current = node.prop;
        while (current) {
            parentPath.push(current.name);
            if (!current.parent) {
                break;
            }
            current = current.parent;
        }
        parentPath = parentPath.reverse();
        this._messageBus.emit('getNestedProperties', [this._entityPosition, parentPath]);
        this._messageBus.once('nestedProperties', (position, data, _path) => {
            node.prop.descriptor.value = data.props;
            this._treeControl.expand(node);
            const props = arrayifyProps(data.props, node.prop);
            const flatNodes = this._treeFlattener.flattenNodes(props);
            flatNodes.forEach((f) => (f.level += node.level + 1));
            this.data.splice(index + 1, 0, ...flatNodes);
            this._data.next(this.data);
        });
    }
}

const getExpandedDirectiveProperties = (data) => {
    const getChildren = (prop) => {
        if ((prop.type === PropType.Object || prop.type === PropType.Array) && prop.value) {
            return Object.keys(prop.value).map(k => {
                return {
                    name: prop.type === PropType.Array ? parseInt(k, 10) : k,
                    children: getChildren(prop.value[k]),
                };
            });
        }
        return [];
    };
    const getExpandedProperties = (props) => {
        return Object.keys(props).map(name => {
            return {
                name,
                children: getChildren(props[name]),
            };
        });
    };
    const parents = {};
    for (const node of data) {
        let prop = node.prop;
        while (prop.parent) {
            prop = prop.parent;
        }
        parents[prop.name] = prop.descriptor;
    }
    return getExpandedProperties(parents);
};

const expandable$1 = (prop) => {
    if (!prop) {
        return false;
    }
    if (!prop.expandable) {
        return false;
    }
    return !(prop.type !== PropType.Object && prop.type !== PropType.Array);
};
const getDirectiveControls = (dataSource) => {
    const treeControl = dataSource.treeControl;
    return {
        dataSource,
        treeControl,
    };
};
const constructPathOfKeysToPropertyValue = (nodePropToGetKeysFor, keys = []) => {
    keys.unshift(nodePropToGetKeysFor.name);
    const parentNodeProp = nodePropToGetKeysFor.parent;
    if (parentNodeProp) {
        constructPathOfKeysToPropertyValue(parentNodeProp, keys);
    }
    return keys;
};
class DirectivePropertyResolver {
    constructor(_messageBus, _props, _directivePosition) {
        this._messageBus = _messageBus;
        this._props = _props;
        this._directivePosition = _directivePosition;
        this._treeFlattener = new MatTreeFlattener((node, level) => {
            return {
                expandable: expandable$1(node.descriptor),
                prop: node,
                level,
            };
        }, (node) => node.level, (node) => node.expandable, (node) => this._getChildren(node));
        this._treeControl = new FlatTreeControl((node) => node.level, (node) => node.expandable);
        this._initDataSources();
    }
    get directiveInputControls() {
        return getDirectiveControls(this._inputsDataSource);
    }
    get directiveOutputControls() {
        return getDirectiveControls(this._outputsDataSource);
    }
    get directiveStateControls() {
        return getDirectiveControls(this._stateDataSource);
    }
    get directiveProperties() {
        return this._props.props;
    }
    get directivePosition() {
        return this._directivePosition;
    }
    get directiveViewEncapsulation() {
        var _a;
        return (_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.encapsulation;
    }
    get directiveHasOnPushStrategy() {
        var _a;
        return (_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.onPush;
    }
    getExpandedProperties() {
        return [
            ...getExpandedDirectiveProperties(this._inputsDataSource.data),
            ...getExpandedDirectiveProperties(this._outputsDataSource.data),
            ...getExpandedDirectiveProperties(this._stateDataSource.data),
        ];
    }
    updateProperties(newProps) {
        this._props = newProps;
        const { inputProps, outputProps, stateProps } = this._classifyProperties();
        this._inputsDataSource.update(inputProps);
        this._outputsDataSource.update(outputProps);
        this._stateDataSource.update(stateProps);
    }
    updateValue(node, newValue) {
        const directiveId = this._directivePosition;
        const keyPath = constructPathOfKeysToPropertyValue(node.prop);
        this._messageBus.emit('updateState', [{ directiveId, keyPath, newValue }]);
        node.prop.descriptor.value = newValue;
    }
    _getChildren(prop) {
        const descriptor = prop.descriptor;
        if ((descriptor.type === PropType.Object || descriptor.type === PropType.Array) &&
            !(descriptor.value instanceof Observable)) {
            return arrayifyProps(descriptor.value || {}, prop);
        }
        else {
            console.error('Unexpected data type', descriptor, 'in property', prop);
        }
    }
    _initDataSources() {
        const { inputProps, outputProps, stateProps } = this._classifyProperties();
        this._inputsDataSource = this._createDataSourceFromProps(inputProps);
        this._outputsDataSource = this._createDataSourceFromProps(outputProps);
        this._stateDataSource = this._createDataSourceFromProps(stateProps);
    }
    _createDataSourceFromProps(props) {
        return new PropertyDataSource(props, this._treeFlattener, this._treeControl, this._directivePosition, this._messageBus);
    }
    _classifyProperties() {
        var _a, _b;
        const inputLabels = new Set(Object.keys(((_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.inputs) || {}));
        const outputLabels = new Set(Object.keys(((_b = this._props.metadata) === null || _b === void 0 ? void 0 : _b.outputs) || {}));
        const inputProps = {};
        const outputProps = {};
        const stateProps = {};
        let propPointer;
        Object.keys(this.directiveProperties).forEach((propName) => {
            propPointer = inputLabels.has(propName) ? inputProps : outputLabels.has(propName) ? outputProps : stateProps;
            propPointer[propName] = this.directiveProperties[propName];
        });
        return {
            inputProps,
            outputProps,
            stateProps,
        };
    }
}

class ElementPropertyResolver {
    constructor(_messageBus) {
        this._messageBus = _messageBus;
        this._directivePropertiesController = new Map();
    }
    clearProperties() {
        this._directivePropertiesController = new Map();
    }
    setProperties(indexedNode, data) {
        this._flushDeletedProperties(data);
        Object.keys(data).forEach((key) => {
            const controller = this._directivePropertiesController.get(key);
            if (controller) {
                controller.updateProperties(data[key]);
                return;
            }
            const position = {
                element: indexedNode.position,
                directive: undefined,
            };
            if (!indexedNode.component || indexedNode.component.name !== key) {
                position.directive = indexedNode.directives.findIndex((d) => d.name === key);
            }
            this._directivePropertiesController.set(key, new DirectivePropertyResolver(this._messageBus, data[key], position));
        });
    }
    _flushDeletedProperties(data) {
        const currentProps = [...this._directivePropertiesController.keys()];
        const incomingProps = new Set(Object.keys(data));
        for (const prop of currentProps) {
            if (!incomingProps.has(prop)) {
                this._directivePropertiesController.delete(prop);
            }
        }
    }
    getExpandedProperties() {
        const result = {};
        for (const [directive] of this._directivePropertiesController) {
            const controller = this._directivePropertiesController.get(directive);
            if (!controller) {
                console.error('Unable to find nested properties controller for', directive);
                continue;
            }
            result[directive] = controller.getExpandedProperties();
        }
        return result;
    }
    getDirectiveController(directive) {
        return this._directivePropertiesController.get(directive);
    }
}
ElementPropertyResolver.ɵfac = function ElementPropertyResolver_Factory(t) { return new (t || ElementPropertyResolver)(i0.ɵɵinject(i2.MessageBus)); };
ElementPropertyResolver.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ElementPropertyResolver, factory: ElementPropertyResolver.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementPropertyResolver, [{
        type: Injectable
    }], function () { return [{ type: i2.MessageBus }]; }, null); })();

const indexTree = (node, idx, parentPosition = []) => {
    const position = parentPosition.concat([idx]);
    return {
        position,
        element: node.element,
        component: node.component,
        directives: node.directives.map((d, i) => ({ name: d.name, id: d.id })),
        children: node.children.map((n, i) => indexTree(n, i, position)),
    };
};
const indexForest = (forest) => forest.map((n, i) => indexTree(n, i));

const expandable = (node) => !!node.children && node.children.length > 0;
const trackBy = (_, item) => `${item.id}#${item.expandable}`;
const getId = (node) => {
    let prefix = '';
    if (node.component) {
        prefix = node.component.id.toString();
    }
    const dirIds = node.directives
        .map((d) => d.id)
        .sort((a, b) => {
        return a - b;
    });
    return prefix + '-' + dirIds.join('-');
};
class ComponentDataSource extends DataSource {
    constructor(_treeControl) {
        super();
        this._treeControl = _treeControl;
        this._differ = new DefaultIterableDiffer(trackBy);
        this._expandedData = new BehaviorSubject([]);
        this._flattenedData = new BehaviorSubject([]);
        this._nodeToFlat = new WeakMap();
        this._treeFlattener = new MatTreeFlattener((node, level) => {
            if (this._nodeToFlat.has(node)) {
                return this._nodeToFlat.get(node);
            }
            const flatNode = {
                expandable: expandable(node),
                id: getId(node),
                // We can compare the nodes in the navigation functions above
                // based on this identifier directly, since it's a reference type
                // and the reference is preserved after transformation.
                position: node.position,
                name: node.component ? node.component.name : node.element,
                directives: node.directives.map((d) => d.name).join(', '),
                original: node,
                level,
            };
            this._nodeToFlat.set(node, flatNode);
            return flatNode;
        }, (node) => (node ? node.level : -1), (node) => (node ? node.expandable : false), (node) => (node ? node.children : []));
    }
    get data() {
        return this._flattenedData.value;
    }
    get expandedDataValues() {
        return this._expandedData.value;
    }
    getFlatNodeFromIndexedNode(indexedNode) {
        return this._nodeToFlat.get(indexedNode);
    }
    update(forest) {
        if (!forest) {
            return { newItems: [], movedItems: [], removedItems: [] };
        }
        const indexedForest = indexForest(forest);
        const flattenedCollection = this._treeFlattener.flattenNodes(indexedForest);
        this.data.forEach((i) => (i.newItem = false));
        const expandedNodes = {};
        this.data.forEach((item) => {
            expandedNodes[item.id] = this._treeControl.isExpanded(item);
        });
        const { newItems, movedItems, removedItems } = diff(this._differ, this.data, flattenedCollection);
        this._treeControl.dataNodes = this.data;
        this._flattenedData.next(this.data);
        movedItems.forEach((i) => {
            this._nodeToFlat.set(i.original, i);
            if (expandedNodes[i.id]) {
                this._treeControl.expand(i);
            }
        });
        newItems.forEach((i) => (i.newItem = true));
        removedItems.forEach((i) => this._nodeToFlat.delete(i.original));
        return { newItems, movedItems, removedItems };
    }
    connect(collectionViewer) {
        const changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
        return merge(...changes).pipe(map(() => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this.data, this._treeControl));
            return this._expandedData.value;
        }));
    }
    disconnect() { }
}

const isChildOf = (childPosition, parentPosition) => {
    if (childPosition.length <= parentPosition.length) {
        return false;
    }
    for (let i = 0; i < parentPosition.length; i++) {
        if (childPosition[i] !== parentPosition[i]) {
            return false;
        }
    }
    return true;
};
const parentCollapsed = (nodeIdx, all, treeControl) => {
    const node = all[nodeIdx];
    for (let i = nodeIdx - 1; i >= 0; i--) {
        if (isChildOf(node.position, all[i].position) && !treeControl.isExpanded(all[i])) {
            return true;
        }
    }
    return false;
};

// This service is used to notify the CDK virtual scroll parents
// when the tab has changed. Alternatively, we risk to have broken
// layout since the virtual scroll is nested inside of a TabGroup
// which doesn't have consistent dimensions when collapsed and expanded.
class TabUpdate {
    constructor() {
        this._tabUpdate = new Subject();
        this.tabUpdate$ = this._tabUpdate.asObservable().pipe(share());
    }
    notify() {
        this._tabUpdate.next();
    }
}

function FilterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "button", 7);
    i0.ɵɵlistener("click", function FilterComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emitPrevMatched(); });
    i0.ɵɵelementStart(2, "mat-icon", 8);
    i0.ɵɵtext(3, " expand_less ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 7);
    i0.ɵɵlistener("click", function FilterComponent_div_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.emitNextMatched(); });
    i0.ɵɵelementStart(5, "mat-icon", 9);
    i0.ɵɵtext(6, " expand_more ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
class FilterComponent {
    constructor() {
        this.filter = new EventEmitter();
        this.nextMatched = new EventEmitter();
        this.prevMatched = new EventEmitter();
        this.hasMatched = false;
    }
    emitFilter(event) {
        this.filter.emit(event.target.value);
    }
    emitNextMatched() {
        this.nextMatched.emit();
    }
    emitPrevMatched() {
        this.prevMatched.emit();
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng-filter"]], inputs: { hasMatched: "hasMatched" }, outputs: { filter: "filter", nextMatched: "nextMatched", prevMatched: "prevMatched" }, decls: 7, vars: 1, consts: [[1, "filter"], [1, "icon-outer"], ["color", "primary"], ["matInput", "", "placeholder", "Filter components", 1, "filter-input", 3, "input", "keydown.enter", "keydown.shift.enter"], ["filterInput", ""], ["class", "up-down-buttons", 4, "ngIf"], [1, "up-down-buttons"], ["mat-icon-button", "", 3, "click"], [1, "mat-icon-rtl-mirror"], [1, ""]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "mat-icon", 2);
        i0.ɵɵtext(3, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 3, 4);
        i0.ɵɵlistener("input", function FilterComponent_Template_input_input_4_listener($event) { return ctx.emitFilter($event); })("keydown.enter", function FilterComponent_Template_input_keydown_enter_4_listener() { return ctx.emitNextMatched(); })("keydown.shift.enter", function FilterComponent_Template_input_keydown_shift_enter_4_listener() { return ctx.emitPrevMatched(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, FilterComponent_div_6_Template, 7, 0, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.hasMatched);
    } }, directives: [i1.MatCard, i2$1.MatIcon, i1$1.NgIf, i3.MatButton], styles: [".filter[_ngcontent-%COMP%]{display:flex;padding:0;border-radius:0;box-shadow:none!important;border-bottom:1px solid rgba(0,0,0,.12)}.filter[_ngcontent-%COMP%]   .icon-outer[_ngcontent-%COMP%]{display:flex;align-items:center;padding-right:5px;margin-left:5px}.filter[_ngcontent-%COMP%]   .icon-outer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:16px;height:16px;margin:auto;opacity:.7}.filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]{border:none;border-left:1px solid rgba(0,0,0,.12);padding-left:5px;width:100%;font-size:11px;font-family:inherit;font-weight:inherit;height:30px;outline:none;color:rgba(0,0,0,.87)}.up-down-buttons[_ngcontent-%COMP%]{display:flex}.up-down-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:24px;height:24px}[_nghost-%COMP%]     .up-down-buttons .mat-icon-button{line-height:25px}[_nghost-%COMP%]     .up-down-buttons button mat-icon{opacity:.5}.dark-theme[_nghost-%COMP%]   .filter-input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filter-input[_ngcontent-%COMP%]{background-color:#202124;color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'ng-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.scss'],
            }]
    }], null, { filter: [{
            type: Output
        }], nextMatched: [{
            type: Output
        }], prevMatched: [{
            type: Output
        }], hasMatched: [{
            type: Input
        }] }); })();

function DirectiveForestComponent_ng_container_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DirectiveForestComponent_ng_container_2_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const node_r1 = i0.ɵɵnextContext().$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.treeControl.toggle(node_r1); });
    i0.ɵɵelementStart(1, "mat-icon", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", 15 * node_r1.level + "px");
    i0.ɵɵattribute("aria-label", "toggle " + node_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.treeControl.isExpanded(node_r1) ? "expand_more" : "chevron_right", " ");
} }
function DirectiveForestComponent_ng_container_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("[", node_r1.directives, "]");
} }
function DirectiveForestComponent_ng_container_2_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1, " == $ng0 ");
    i0.ɵɵelementEnd();
} }
const _c0$8 = function (a0, a1, a2, a3) { return { matched: a0, selected: a1, highlighted: a2, "new-node": a3 }; };
function DirectiveForestComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵlistener("click", function DirectiveForestComponent_ng_container_2_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const node_r1 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.selectAndEnsureVisible(node_r1); })("dblclick", function DirectiveForestComponent_ng_container_2_Template_div_dblclick_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const node_r1 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.handleSelectDomElement(node_r1); })("mouseenter", function DirectiveForestComponent_ng_container_2_Template_div_mouseenter_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const node_r1 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.highlightNode(node_r1.position); })("mouseleave", function DirectiveForestComponent_ng_container_2_Template_div_mouseleave_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.removeHighlight(); });
    i0.ɵɵtemplate(2, DirectiveForestComponent_ng_container_2_button_2_Template, 3, 4, "button", 4);
    i0.ɵɵelementStart(3, "span", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, DirectiveForestComponent_ng_container_2_span_5_Template, 2, 1, "span", 6);
    i0.ɵɵtemplate(6, DirectiveForestComponent_ng_container_2_span_6_Template, 2, 0, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("padding-left", 15 + 15 * node_r1.level + "px");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(9, _c0$8, ctx_r0.isMatched(node_r1), ctx_r0.isSelected(node_r1), ctx_r0.isHighlighted(node_r1), node_r1.newItem));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", node_r1.expandable);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("angular-element", ctx_r0.isElement(node_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(node_r1.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", node_r1.directives);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isSelected(node_r1));
} }
class DirectiveForestComponent {
    constructor(_tabUpdate, _messageBus, _cdr) {
        this._tabUpdate = _tabUpdate;
        this._messageBus = _messageBus;
        this._cdr = _cdr;
        this.selectNode = new EventEmitter();
        this.selectDomElement = new EventEmitter();
        this.setParents = new EventEmitter();
        this.highlightComponent = new EventEmitter();
        this.removeComponentHighlight = new EventEmitter();
        this.toggleInspector = new EventEmitter();
        this.filterRegex = new RegExp('.^');
        this.currentlyMatchedIndex = -1;
        this.selectedNode = null;
        this._highlightIDinTreeFromElement = null;
        this.treeControl = new FlatTreeControl((node) => node.level, (node) => node.expandable);
        this.dataSource = new ComponentDataSource(this.treeControl);
        this.itemHeight = 18;
        this._initialized = false;
    }
    set forest(forest) {
        const result = this._updateForest(forest);
        const changed = result.movedItems.length || result.newItems.length || result.removedItems.length;
        if (this.currentSelectedElement && changed) {
            this._reselectNodeOnUpdate();
        }
    }
    set highlightIDinTreeFromElement(id) {
        this._highlightIDinTreeFromElement = id;
        this._cdr.markForCheck();
    }
    ngOnInit() {
        this.subscribeToInspectorEvents();
        this._tabUpdateSubscription = this._tabUpdate.tabUpdate$.subscribe(() => {
            if (this.viewport) {
                setTimeout(() => {
                    this.viewport.scrollToIndex(0);
                    this.viewport.checkViewportSize();
                });
            }
        });
    }
    ngOnDestroy() {
        if (this._tabUpdateSubscription) {
            this._tabUpdateSubscription.unsubscribe();
        }
    }
    subscribeToInspectorEvents() {
        this._messageBus.on('selectComponent', (id) => {
            this.selectNodeByComponentId(id);
            this.toggleInspector.emit();
        });
        this._messageBus.on('highlightComponent', (id) => {
            this.highlightIDinTreeFromElement = id;
        });
        this._messageBus.on('removeComponentHighlight', () => {
            this.highlightIDinTreeFromElement = null;
        });
    }
    selectNodeByComponentId(id) {
        const foundNode = this.dataSource.data.find((node) => { var _a; return ((_a = node.original.component) === null || _a === void 0 ? void 0 : _a.id) === id; });
        if (foundNode) {
            this.handleSelect(foundNode);
        }
    }
    handleSelect(node) {
        this.currentlyMatchedIndex = this.dataSource.data.findIndex((matchedNode) => matchedNode.id === node.id);
        this.selectAndEnsureVisible(node);
    }
    handleSelectDomElement(node) {
        this.selectDomElement.emit(node.original);
    }
    selectAndEnsureVisible(node) {
        this.select(node);
        const scrollParent = this.viewport.elementRef.nativeElement;
        // The top most point we see an element
        const top = scrollParent.scrollTop;
        // That's the bottom most point we currently see an element.
        const parentHeight = scrollParent.offsetHeight;
        const bottom = top + parentHeight;
        const idx = this.dataSource.expandedDataValues.findIndex((el) => el.id === node.id);
        // The node might be hidden.
        if (idx < 0) {
            return;
        }
        const itemTop = idx * this.itemHeight;
        if (itemTop < top) {
            scrollParent.scrollTo({ top: itemTop });
        }
        else if (bottom < itemTop + this.itemHeight) {
            scrollParent.scrollTo({ top: itemTop - parentHeight + this.itemHeight });
        }
    }
    select(node) {
        this.populateParents(node.position);
        this.selectNode.emit(node.original);
        this.selectedNode = node;
    }
    clearSelectedNode() {
        this.selectNode.emit(null);
        this.selectedNode = null;
        this.parents = [];
        this.setParents.emit(null);
    }
    _reselectNodeOnUpdate() {
        const nodeThatStillExists = this.dataSource.getFlatNodeFromIndexedNode(this.currentSelectedElement);
        if (nodeThatStillExists) {
            this.select(nodeThatStillExists);
        }
        else {
            this.clearSelectedNode();
        }
    }
    _updateForest(forest) {
        const result = this.dataSource.update(forest);
        if (!this._initialized && forest && forest.length) {
            this.treeControl.expandAll();
            this._initialized = true;
            result.newItems.forEach((item) => (item.newItem = false));
        }
        // We want to expand them once they are rendered.
        result.newItems.forEach((item) => {
            this.treeControl.expand(item);
        });
        return result;
    }
    populateParents(position) {
        this.parents = position.reduce((nodes, index) => {
            let nodePosition = [index];
            if (nodes.length > 0) {
                nodePosition = nodes[nodes.length - 1].position.concat(index);
            }
            // It's possible selectedNode to be undefined
            // In this case, we don't want to push it to the list
            // of parent nodes. Instead, we want to report a warning.
            const selectedNode = this.dataSource.data.find((item) => item.position.toString() === nodePosition.toString());
            if (selectedNode) {
                nodes.push(selectedNode);
            }
            else {
                console.warn('Cant find node for position', nodePosition);
            }
            return nodes;
        }, []);
        this.setParents.emit(this.parents);
    }
    navigateUp(event) {
        if (this.isEditingDirectiveState(event)) {
            return;
        }
        event.preventDefault();
        const data = this.dataSource.expandedDataValues;
        let prevIdx = data.findIndex((e) => this.selectedNode && e.id === this.selectedNode.id) - 1;
        if (prevIdx < 0) {
            return;
        }
        let prevNode = data[prevIdx];
        const currentNode = data[prevIdx + 1];
        if (prevNode.position.length <= currentNode.position.length) {
            return this.selectAndEnsureVisible(data[prevIdx]);
        }
        while (prevIdx >= 0 && parentCollapsed(prevIdx, data, this.treeControl)) {
            prevIdx--;
            prevNode = data[prevIdx];
        }
        this.selectAndEnsureVisible(data[prevIdx]);
    }
    navigateDown(event) {
        if (this.isEditingDirectiveState(event)) {
            return;
        }
        event.preventDefault();
        const data = this.dataSource.expandedDataValues;
        let idx = data.findIndex((e) => this.selectedNode && e.id === this.selectedNode.id);
        const currentNode = data[idx];
        if (!this.treeControl.isExpanded(currentNode) && currentNode.expandable) {
            for (let i = idx + 1; i < data.length; i++) {
                const node = data[i];
                if (!isChildOf(node.position, currentNode.position)) {
                    idx = i;
                    break;
                }
            }
        }
        else {
            idx++;
        }
        if (idx >= data.length) {
            return;
        }
        this.selectAndEnsureVisible(data[idx]);
    }
    collapseCurrent(event) {
        if (this.isEditingDirectiveState(event)) {
            return;
        }
        if (!this.selectedNode) {
            return;
        }
        this.treeControl.collapse(this.selectedNode);
        event.preventDefault();
    }
    expandCurrent(event) {
        if (this.isEditingDirectiveState(event)) {
            return;
        }
        if (!this.selectedNode) {
            return;
        }
        this.treeControl.expand(this.selectedNode);
        event.preventDefault();
    }
    isEditingDirectiveState(event) {
        return event.target.tagName === 'INPUT' || !this.selectedNode;
    }
    isSelected(node) {
        return !!this.selectedNode && this.selectedNode.id === node.id;
    }
    isMatched(node) {
        return this.filterRegex.test(node.name.toLowerCase()) || this.filterRegex.test(node.directives.toLowerCase());
    }
    handleFilter(filterText) {
        this.currentlyMatchedIndex = -1;
        try {
            this.filterRegex = new RegExp(filterText.toLowerCase() || '.^');
        }
        catch (_a) {
            this.filterRegex = new RegExp('.^');
        }
    }
    _findMatchedNodes() {
        const indexesOfMatchedNodes = [];
        for (let i = 0; i < this.dataSource.data.length; i++) {
            if (this.isMatched(this.dataSource.data[i])) {
                indexesOfMatchedNodes.push(i);
            }
        }
        return indexesOfMatchedNodes;
    }
    get hasMatched() {
        return this._findMatchedNodes().length > 0;
    }
    nextMatched() {
        const indexesOfMatchedNodes = this._findMatchedNodes();
        this.currentlyMatchedIndex = (this.currentlyMatchedIndex + 1) % indexesOfMatchedNodes.length;
        const indexToSelect = indexesOfMatchedNodes[this.currentlyMatchedIndex];
        const nodeToSelect = this.dataSource.data[indexToSelect];
        if (indexToSelect !== undefined) {
            this.treeControl.expand(nodeToSelect);
            this.selectAndEnsureVisible(nodeToSelect);
        }
        const nodeIsVisible = this.dataSource.expandedDataValues.find((node) => node === nodeToSelect);
        if (!nodeIsVisible) {
            this.parents.forEach((parent) => this.treeControl.expand(parent));
        }
    }
    prevMatched() {
        const indexesOfMatchedNodes = this._findMatchedNodes();
        this.currentlyMatchedIndex =
            (this.currentlyMatchedIndex - 1 + indexesOfMatchedNodes.length) % indexesOfMatchedNodes.length;
        const indexToSelect = indexesOfMatchedNodes[this.currentlyMatchedIndex];
        const nodeToSelect = this.dataSource.data[indexToSelect];
        if (indexToSelect !== undefined) {
            this.treeControl.expand(nodeToSelect);
            this.selectAndEnsureVisible(nodeToSelect);
        }
        const nodeIsVisible = this.dataSource.expandedDataValues.find((node) => node === nodeToSelect);
        if (!nodeIsVisible) {
            this.parents.forEach((parent) => this.treeControl.expand(parent));
        }
    }
    highlightNode(position) {
        this._highlightIDinTreeFromElement = null;
        this.highlightComponent.emit(position);
    }
    removeHighlight() {
        this.removeComponentHighlight.emit();
    }
    isHighlighted(node) {
        var _a;
        return !!this._highlightIDinTreeFromElement && this._highlightIDinTreeFromElement === ((_a = node.original.component) === null || _a === void 0 ? void 0 : _a.id);
    }
    isElement(node) {
        return node.original.component && node.original.component.isElement;
    }
}
DirectiveForestComponent.ɵfac = function DirectiveForestComponent_Factory(t) { return new (t || DirectiveForestComponent)(i0.ɵɵdirectiveInject(TabUpdate), i0.ɵɵdirectiveInject(i2.MessageBus), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DirectiveForestComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectiveForestComponent, selectors: [["ng-directive-forest"]], viewQuery: function DirectiveForestComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(CdkVirtualScrollViewport, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewport = _t.first);
    } }, hostBindings: function DirectiveForestComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown.ArrowUp", function DirectiveForestComponent_keydown_ArrowUp_HostBindingHandler($event) { return ctx.navigateUp($event); }, false, i0.ɵɵresolveDocument)("keydown.ArrowDown", function DirectiveForestComponent_keydown_ArrowDown_HostBindingHandler($event) { return ctx.navigateDown($event); }, false, i0.ɵɵresolveDocument)("keydown.ArrowLeft", function DirectiveForestComponent_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.collapseCurrent($event); }, false, i0.ɵɵresolveDocument)("keydown.ArrowRight", function DirectiveForestComponent_keydown_ArrowRight_HostBindingHandler($event) { return ctx.expandCurrent($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { forest: "forest", currentSelectedElement: "currentSelectedElement" }, outputs: { selectNode: "selectNode", selectDomElement: "selectDomElement", setParents: "setParents", highlightComponent: "highlightComponent", removeComponentHighlight: "removeComponentHighlight", toggleInspector: "toggleInspector" }, decls: 3, vars: 3, consts: [[3, "hasMatched", "filter", "nextMatched", "prevMatched"], [1, "tree-wrapper", 3, "itemSize"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "tree-node", 3, "ngClass", "click", "dblclick", "mouseenter", "mouseleave"], [3, "left", "click", 4, "ngIf"], [1, "element-name"], ["class", "dir-names", 4, "ngIf"], ["class", "console-reference", 4, "ngIf"], [3, "click"], [1, "mat-icon-rtl-mirror"], [1, "dir-names"], [1, "console-reference"]], template: function DirectiveForestComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ng-filter", 0);
        i0.ɵɵlistener("filter", function DirectiveForestComponent_Template_ng_filter_filter_0_listener($event) { return ctx.handleFilter($event); })("nextMatched", function DirectiveForestComponent_Template_ng_filter_nextMatched_0_listener() { return ctx.nextMatched(); })("prevMatched", function DirectiveForestComponent_Template_ng_filter_prevMatched_0_listener() { return ctx.prevMatched(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
        i0.ɵɵtemplate(2, DirectiveForestComponent_ng_container_2_Template, 7, 14, "ng-container", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("hasMatched", ctx.hasMatched);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("itemSize", ctx.itemHeight);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.dataSource);
    } }, directives: [FilterComponent, i4.CdkVirtualScrollViewport, i4.CdkFixedSizeVirtualScroll, i4.CdkVirtualForOf, i1$1.NgClass, i1$1.NgIf, i2$1.MatIcon], styles: ["[_nghost-%COMP%]{width:100%;height:100%;overflow:auto}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]{position:relative;color:#8a1882;cursor:default;font-family:Menlo,monospace;font-size:11px;line-height:18px;white-space:nowrap;text-overflow:ellipsis}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{outline:none;border:0;padding:0;position:absolute;background-color:transparent;top:2px}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:.8em;width:16px;height:13px;display:inline-block}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%]{color:#9b4807}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .console-reference[_ngcontent-%COMP%]{color:#748591;padding-left:8px;font-style:italic}[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}[_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%]{background-color:#cfe8fc}@-webkit-keyframes appear{0%{background-color:transparent}50%{background-color:#cfe8fc}to{background-color:transparent}}@keyframes appear{0%{background-color:transparent}50%{background-color:#cfe8fc}to{background-color:transparent}}.new-node[_ngcontent-%COMP%]{-webkit-animation:appear 1.5s;animation:appear 1.5s}.filter[_ngcontent-%COMP%]{display:flex}.filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:auto 12px;opacity:.7}.filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]{border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);width:100%;font-size:2em;font-family:inherit;font-weight:inherit;line-height:1.4em;padding:12px 6px}.up-down-buttons[_ngcontent-%COMP%]{width:20%;display:flex}.tree-wrapper[_ngcontent-%COMP%]{overflow-y:auto;height:calc(100% - 33px)}.angular-element[_ngcontent-%COMP%]{content:\"\";color:#1b1aa5}.angular-element[_ngcontent-%COMP%]:before{content:\"<\"}.angular-element[_ngcontent-%COMP%]:after{content:\"/>\"}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]{color:#5cadd3}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#bcc5ce}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%]{color:#91adcb}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .angular-element[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .angular-element[_ngcontent-%COMP%]{color:#dc8c61}.dark-theme[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover{background-color:#262d36}.dark-theme[_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, .dark-theme[_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%]{background-color:#073d69}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveForestComponent, [{
        type: Component,
        args: [{
                selector: 'ng-directive-forest',
                templateUrl: './directive-forest.component.html',
                styleUrls: ['./directive-forest.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: TabUpdate }, { type: i2.MessageBus }, { type: i0.ChangeDetectorRef }]; }, { forest: [{
            type: Input
        }], currentSelectedElement: [{
            type: Input
        }], selectNode: [{
            type: Output
        }], selectDomElement: [{
            type: Output
        }], setParents: [{
            type: Output
        }], highlightComponent: [{
            type: Output
        }], removeComponentHighlight: [{
            type: Output
        }], toggleInspector: [{
            type: Output
        }], viewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }], navigateUp: [{
            type: HostListener,
            args: ['document:keydown.ArrowUp', ['$event']]
        }], navigateDown: [{
            type: HostListener,
            args: ['document:keydown.ArrowDown', ['$event']]
        }], collapseCurrent: [{
            type: HostListener,
            args: ['document:keydown.ArrowLeft', ['$event']]
        }], expandCurrent: [{
            type: HostListener,
            args: ['document:keydown.ArrowRight', ['$event']]
        }] }); })();

const _c0$7 = ["breadcrumbs"];
function BreadcrumbsComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("mouseover", function BreadcrumbsComponent_button_6_Template_button_mouseover_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const node_r2 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.mouseOverNode.emit(node_r2); })("mouseleave", function BreadcrumbsComponent_button_6_Template_button_mouseleave_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const node_r2 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.mouseLeaveNode.emit(node_r2); })("click", function BreadcrumbsComponent_button_6_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const node_r2 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.handleSelect.emit(node_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const last_r3 = ctx.last;
    i0.ɵɵclassProp("selected", last_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (node_r2.original.component == null ? null : node_r2.original.component.name) || node_r2.original.element, " ");
} }
class BreadcrumbsComponent {
    constructor() {
        this.handleSelect = new EventEmitter();
        this.mouseOverNode = new EventEmitter();
        this.mouseLeaveNode = new EventEmitter();
        this.showScrollLeftButton = false;
        this.showScrollRightButton = false;
        this.updateScrollButtonVisibility$ = new Subject();
    }
    ngOnInit() {
        this.updateScrollButtonVisibility$.pipe(debounceTime(100)).subscribe(() => this.updateScrollButtonVisibility());
    }
    ngAfterViewInit() {
        this.updateScrollButtonVisibility$.next();
    }
    ngOnChanges() {
        this.updateScrollButtonVisibility$.next();
    }
    onResize() {
        this.updateScrollButtonVisibility$.next();
    }
    scroll(pixels) {
        this.breadcrumbsScrollContent.nativeElement.scrollLeft += pixels;
        this.updateScrollButtonVisibility$.next();
    }
    updateScrollButtonVisibility() {
        const { clientWidth, scrollWidth, scrollLeft } = this.breadcrumbsScrollContent.nativeElement;
        this.showScrollLeftButton = scrollLeft > 0;
        this.showScrollRightButton = scrollLeft + clientWidth < scrollWidth;
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["ng-breadcrumbs"]], viewQuery: function BreadcrumbsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$7, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.breadcrumbsScrollContent = _t.first);
    } }, hostBindings: function BreadcrumbsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function BreadcrumbsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { parents: "parents" }, outputs: { handleSelect: "handleSelect", mouseOverNode: "mouseOverNode", mouseLeaveNode: "mouseLeaveNode" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 5, consts: [[1, "breadcrumb-card"], [1, "scroll-button", 3, "click"], [1, "breadcrumbs", 3, "scroll"], ["breadcrumbs", ""], ["mat-button", "", "color", "primary", 3, "selected", "mouseover", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "mouseover", "mouseleave", "click"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function BreadcrumbsComponent_Template_button_click_1_listener() { return ctx.scroll(-100); });
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, " more_horiz ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2, 3);
        i0.ɵɵlistener("scroll", function BreadcrumbsComponent_Template_div_scroll_4_listener() { return ctx.updateScrollButtonVisibility$.next(); });
        i0.ɵɵtemplate(6, BreadcrumbsComponent_button_6_Template, 2, 3, "button", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 1);
        i0.ɵɵlistener("click", function BreadcrumbsComponent_Template_button_click_7_listener() { return ctx.scroll(100); });
        i0.ɵɵelementStart(8, "mat-icon");
        i0.ɵɵtext(9, " more_horiz ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.showScrollLeftButton);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.parents);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.showScrollRightButton);
    } }, directives: [i1.MatCard, i2$1.MatIcon, i1$1.NgForOf, i3.MatButton], styles: [".mat-card.breadcrumb-card[_ngcontent-%COMP%]{padding:0;width:100%;height:24px;display:flex}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%]{height:100%;background-color:#f3f3f3;border:none;cursor:pointer}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button.hidden[_ngcontent-%COMP%]{visibility:hidden}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]{overflow-x:auto;white-space:nowrap;display:inline-block;width:calc(100% - 50px);height:100%;scroll-behavior:smooth}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background-color:#f3f3f3}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{height:20px;line-height:20px;font-size:11px;margin-right:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#8a1882}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%]{background-color:#292a2d;color:#fff}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background-color:#292a2d}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{color:#5caace}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover{background-color:#093e69}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.scss'],
            }]
    }], null, { parents: [{
            type: Input
        }], handleSelect: [{
            type: Output
        }], mouseOverNode: [{
            type: Output
        }], mouseLeaveNode: [{
            type: Output
        }], breadcrumbsScrollContent: [{
            type: ViewChild,
            args: ['breadcrumbs']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();

function getPointFromEvent(event) {
    // TouchEvent
    if (event.changedTouches !== undefined && event.changedTouches.length > 0) {
        return {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY,
        };
    }
    // MouseEvent
    else if (event.clientX !== undefined && event.clientY !== undefined) {
        return {
            x: event.clientX,
            y: event.clientY,
        };
    }
    return null;
}
function getElementPixelSize(elRef, direction) {
    const rect = elRef.nativeElement.getBoundingClientRect();
    return direction === 'horizontal' ? rect.width : rect.height;
}
function getInputBoolean(v) {
    return typeof v === 'boolean' ? v : v === 'false' ? false : true;
}
function getInputPositiveNumber(v, defaultValue) {
    if (v === null || v === undefined)
        return defaultValue;
    v = Number(v);
    return !isNaN(v) && v >= 0 ? v : defaultValue;
}
function isUserSizesValid(unit, sizes) {
    // All sizes have to be not null and total should be 100
    if (unit === 'percent') {
        const total = sizes.reduce((total, s) => (s !== null ? total + s : total), 0);
        return sizes.every((s) => s !== null) && total > 99.9 && total < 100.1;
    }
    // A size at null is mandatory but only one.
    if (unit === 'pixel') {
        return sizes.filter((s) => s === null).length === 1;
    }
}
function getAreaMinSize(a) {
    if (a.size === null) {
        return null;
    }
    if (a.component.lockSize === true) {
        return a.size;
    }
    if (a.component.minSize === null) {
        return null;
    }
    if (a.component.minSize > a.size) {
        return a.size;
    }
    return a.component.minSize;
}
function getAreaMaxSize(a) {
    if (a.size === null) {
        return null;
    }
    if (a.component.lockSize === true) {
        return a.size;
    }
    if (a.component.maxSize === null) {
        return null;
    }
    if (a.component.maxSize < a.size) {
        return a.size;
    }
    return a.component.maxSize;
}
function getGutterSideAbsorptionCapacity(unit, sideAreas, pixels, allAreasSizePixel) {
    return sideAreas.reduce((acc, area) => {
        const res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
        acc.list.push(res);
        acc.remain = res.pixelRemain;
        return acc;
    }, { remain: pixels, list: [] });
}
function getAreaAbsorptionCapacity(unit, areaSnapshot, pixels, allAreasSizePixel) {
    // No pain no gain
    if (pixels === 0) {
        return {
            areaSnapshot,
            pixelAbsorb: 0,
            percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
            pixelRemain: 0,
        };
    }
    // Area start at zero and need to be reduced, not possible
    if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
        return {
            areaSnapshot,
            pixelAbsorb: 0,
            percentAfterAbsorption: 0,
            pixelRemain: pixels,
        };
    }
    if (unit === 'percent') {
        return getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel);
    }
    if (unit === 'pixel') {
        return getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, allAreasSizePixel);
    }
}
function getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel) {
    const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
    const tempPercentSize = (tempPixelSize / allAreasSizePixel) * 100;
    // ENLARGE AREA
    if (pixels > 0) {
        // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
        if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
            // Use area.area.maxSize as newPercentSize and return calculate pixels remaining
            const maxSizePixel = (areaSnapshot.area.maxSize / 100) * allAreasSizePixel;
            return {
                areaSnapshot,
                pixelAbsorb: maxSizePixel,
                percentAfterAbsorption: areaSnapshot.area.maxSize,
                pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel,
            };
        }
        return {
            areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
            pixelRemain: 0,
        };
    }
    // REDUCE AREA
    else if (pixels < 0) {
        // If minSize & newSize smaller than it > absorb to min and return remaining pixels
        if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
            // Use area.area.minSize as newPercentSize and return calculate pixels remaining
            const minSizePixel = (areaSnapshot.area.minSize / 100) * allAreasSizePixel;
            return {
                areaSnapshot,
                pixelAbsorb: minSizePixel,
                percentAfterAbsorption: areaSnapshot.area.minSize,
                pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel,
            };
        }
        // If reduced under zero > return remaining pixels
        else if (tempPercentSize < 0) {
            // Use 0 as newPercentSize and return calculate pixels remaining
            return {
                areaSnapshot,
                pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: 0,
                pixelRemain: pixels + areaSnapshot.sizePixelAtStart,
            };
        }
        return {
            areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: tempPercentSize,
            pixelRemain: 0,
        };
    }
}
function getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, containerSizePixel) {
    const tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
    // ENLARGE AREA
    if (pixels > 0) {
        // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
        if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
            return {
                areaSnapshot,
                pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: -1,
                pixelRemain: tempPixelSize - areaSnapshot.area.maxSize,
            };
        }
        return {
            areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: -1,
            pixelRemain: 0,
        };
    }
    // REDUCE AREA
    else if (pixels < 0) {
        // If minSize & newSize smaller than it > absorb to min and return remaining pixels
        if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
            return {
                areaSnapshot,
                pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
                percentAfterAbsorption: -1,
                pixelRemain: tempPixelSize - areaSnapshot.area.minSize,
            };
        }
        // If reduced under zero > return remaining pixels
        else if (tempPixelSize < 0) {
            return {
                areaSnapshot,
                pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: -1,
                pixelRemain: pixels + areaSnapshot.sizePixelAtStart,
            };
        }
        return {
            areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: -1,
            pixelRemain: 0,
        };
    }
}
function updateAreaSize(unit, item) {
    if (unit === 'percent') {
        item.areaSnapshot.area.size = item.percentAfterAbsorption;
    }
    else if (unit === 'pixel') {
        // Update size except for the wildcard size area
        if (item.areaSnapshot.area.size !== null) {
            item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
        }
    }
}

// tslint:disable
const _c0$6 = ["gutterEls"];
function SplitComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2, 3);
    i0.ɵɵlistener("mousedown", function SplitComponent_ng_template_1_div_0_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r7); const index_r1 = i0.ɵɵnextContext().index; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.startDragging($event, index_r1 * 2 + 1, index_r1 + 1); })("touchstart", function SplitComponent_ng_template_1_div_0_Template_div_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r7); const index_r1 = i0.ɵɵnextContext().index; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.startDragging($event, index_r1 * 2 + 1, index_r1 + 1); })("mouseup", function SplitComponent_ng_template_1_div_0_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r7); const index_r1 = i0.ɵɵnextContext().index; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.clickGutter($event, index_r1 + 1); })("touchend", function SplitComponent_ng_template_1_div_0_Template_div_touchend_0_listener($event) { i0.ɵɵrestoreView(_r7); const index_r1 = i0.ɵɵnextContext().index; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.clickGutter($event, index_r1 + 1); });
    i0.ɵɵelement(2, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r1 = i0.ɵɵnextContext().index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("flex-basis", ctx_r3.gutterSize, "px")("order", index_r1 * 2 + 1);
} }
function SplitComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SplitComponent_ng_template_1_div_0_Template, 3, 4, "div", 1);
} if (rf & 2) {
    const last_r2 = ctx.last;
    i0.ɵɵproperty("ngIf", last_r2 === false);
} }
const _c1$2 = ["*"];
/**
 * angular-split
 *
 *
 *  PERCENT MODE ([unit]="'percent'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |       20                 30                 20                 15                 15      | <-- [size]="x"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |calc(20% - 8px)    calc(30% - 12px)   calc(20% - 8px)    calc(15% - 6px)    calc(15% - 6px)| <-- CSS flex-basis property (with flex-grow&shrink at 0)
 * |     152px              228px              152px              114px              114px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *  flex-basis = calc( { area.size }% - { area.size/100 * nbGutter*gutterSize }px );
 *
 *
 *  PIXEL MODE ([unit]="'pixel'")
 *  ___________________________________________________________________________________________
 * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
 * |-------------------------------------------------------------------------------------------|
 * |      100                250                 *                 150                100      | <-- [size]="y"
 * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
 * |   0 0 100px          0 0 250px           1 1 auto          0 0 150px          0 0 100px   | <-- CSS flex property (flex-grow/flex-shrink/flex-basis)
 * |     100px              250px              200px              150px              100px     | <-- el.getBoundingClientRect().width
 * |___________________________________________________________________________________________|
 *                                                                                 800px         <-- el.getBoundingClientRect().width
 *
 */
class SplitComponent {
    constructor(ngZone, elRef, cdRef, renderer) {
        this.ngZone = ngZone;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this._direction = 'horizontal';
        ////
        this._unit = 'percent';
        ////
        this._gutterSize = 11;
        ////
        this._gutterStep = 1;
        ////
        this._restrictMove = false;
        ////
        this._useTransition = false;
        ////
        this._disabled = false;
        ////
        this._dir = 'ltr';
        ////
        this._gutterDblClickDuration = 0;
        ////
        this.dragStart = new EventEmitter(false);
        this.dragEnd = new EventEmitter(false);
        this.gutterClick = new EventEmitter(false);
        this.gutterDblClick = new EventEmitter(false);
        this.dragProgressSubject = new Subject();
        this.dragProgress$ = this.dragProgressSubject.asObservable();
        ////
        this.isDragging = false;
        this.dragListeners = [];
        this.snapshot = null;
        this.startPoint = null;
        this.endPoint = null;
        this.displayedAreas = [];
        this.hidedAreas = [];
        this._clickTimeout = null;
        // To force adding default class, could be override by user @Input() or not
        this.direction = this._direction;
    }
    set direction(v) {
        this._direction = v === 'vertical' ? 'vertical' : 'horizontal';
        this.renderer.addClass(this.elRef.nativeElement, `as-${this._direction}`);
        this.renderer.removeClass(this.elRef.nativeElement, `as-${this._direction === 'vertical' ? 'horizontal' : 'vertical'}`);
        this.build(false, false);
    }
    get direction() {
        return this._direction;
    }
    set unit(v) {
        this._unit = v === 'pixel' ? 'pixel' : 'percent';
        this.renderer.addClass(this.elRef.nativeElement, `as-${this._unit}`);
        this.renderer.removeClass(this.elRef.nativeElement, `as-${this._unit === 'pixel' ? 'percent' : 'pixel'}`);
        this.build(false, true);
    }
    get unit() {
        return this._unit;
    }
    set gutterSize(v) {
        this._gutterSize = getInputPositiveNumber(v, 11);
        this.build(false, false);
    }
    get gutterSize() {
        return this._gutterSize;
    }
    set gutterStep(v) {
        this._gutterStep = getInputPositiveNumber(v, 1);
    }
    get gutterStep() {
        return this._gutterStep;
    }
    set restrictMove(v) {
        this._restrictMove = getInputBoolean(v);
    }
    get restrictMove() {
        return this._restrictMove;
    }
    set useTransition(v) {
        this._useTransition = getInputBoolean(v);
        if (this._useTransition)
            this.renderer.addClass(this.elRef.nativeElement, 'as-transition');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-transition');
    }
    get useTransition() {
        return this._useTransition;
    }
    set disabled(v) {
        this._disabled = getInputBoolean(v);
        if (this._disabled)
            this.renderer.addClass(this.elRef.nativeElement, 'as-disabled');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-disabled');
    }
    get disabled() {
        return this._disabled;
    }
    set dir(v) {
        this._dir = v === 'rtl' ? 'rtl' : 'ltr';
        this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
    }
    get dir() {
        return this._dir;
    }
    set gutterDblClickDuration(v) {
        this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
    }
    get gutterDblClickDuration() {
        return this._gutterDblClickDuration;
    }
    get transitionEnd() {
        return new Observable((subscriber) => (this.transitionEndSubscriber = subscriber)).pipe(debounceTime(20));
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => {
            // To avoid transition at first rendering
            setTimeout(() => this.renderer.addClass(this.elRef.nativeElement, 'as-init'));
        });
    }
    getNbGutters() {
        return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
    }
    addArea(component) {
        const newArea = {
            component,
            order: 0,
            size: 0,
            minSize: null,
            maxSize: null,
        };
        if (component.visible === true) {
            this.displayedAreas.push(newArea);
            this.build(true, true);
        }
        else {
            this.hidedAreas.push(newArea);
        }
    }
    removeArea(component) {
        if (this.displayedAreas.some((a) => a.component === component)) {
            const area = this.displayedAreas.find((a) => a.component === component);
            this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
            this.build(true, true);
        }
        else if (this.hidedAreas.some((a) => a.component === component)) {
            const area = this.hidedAreas.find((a) => a.component === component);
            this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
        }
    }
    updateArea(component, resetOrders, resetSizes) {
        if (component.visible === true) {
            this.build(resetOrders, resetSizes);
        }
    }
    showArea(component) {
        const area = this.hidedAreas.find((a) => a.component === component);
        if (area === undefined) {
            return;
        }
        const areas = this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
        this.displayedAreas.push(...areas);
        this.build(true, true);
    }
    hideArea(comp) {
        const area = this.displayedAreas.find((a) => a.component === comp);
        if (area === undefined) {
            return;
        }
        const areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
        areas.forEach((area) => {
            area.order = 0;
            area.size = 0;
        });
        this.hidedAreas.push(...areas);
        this.build(true, true);
    }
    getVisibleAreaSizes() {
        return this.displayedAreas.map((a) => (a.size === null ? '*' : a.size));
    }
    setVisibleAreaSizes(sizes) {
        if (sizes.length !== this.displayedAreas.length) {
            return false;
        }
        const formatedSizes = sizes.map((s) => getInputPositiveNumber(s, null));
        const isValid = isUserSizesValid(this.unit, formatedSizes);
        if (isValid === false) {
            return false;
        }
        // @ts-ignore
        this.displayedAreas.forEach((area, i) => (area.component._size = formatedSizes[i]));
        this.build(false, true);
        return true;
    }
    build(resetOrders, resetSizes) {
        this.stopDragging();
        // ¤ AREAS ORDER
        if (resetOrders === true) {
            // If user provided 'order' for each area, use it to sort them.
            if (this.displayedAreas.every((a) => a.component.order !== null)) {
                this.displayedAreas.sort((a, b) => a.component.order - b.component.order);
            }
            // Then set real order with multiples of 2, numbers between will be used by gutters.
            this.displayedAreas.forEach((area, i) => {
                area.order = i * 2;
                area.component.setStyleOrder(area.order);
            });
        }
        // ¤ AREAS SIZE
        if (resetSizes === true) {
            const useUserSizes = isUserSizesValid(this.unit, this.displayedAreas.map((a) => a.component.size));
            switch (this.unit) {
                case 'percent': {
                    const defaultSize = 100 / this.displayedAreas.length;
                    this.displayedAreas.forEach((area) => {
                        area.size = useUserSizes ? area.component.size : defaultSize;
                        area.minSize = getAreaMinSize(area);
                        area.maxSize = getAreaMaxSize(area);
                    });
                    break;
                }
                case 'pixel': {
                    if (useUserSizes) {
                        this.displayedAreas.forEach((area) => {
                            area.size = area.component.size;
                            area.minSize = getAreaMinSize(area);
                            area.maxSize = getAreaMaxSize(area);
                        });
                    }
                    else {
                        const wildcardSizeAreas = this.displayedAreas.filter((a) => a.component.size === null);
                        // No wildcard area > Need to select one arbitrarily > first
                        if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
                            this.displayedAreas.forEach((area, i) => {
                                area.size = i === 0 ? null : area.component.size;
                                area.minSize = i === 0 ? null : getAreaMinSize(area);
                                area.maxSize = i === 0 ? null : getAreaMaxSize(area);
                            });
                        }
                        // More than one wildcard area > Need to keep only one arbitrarly > first
                        else if (wildcardSizeAreas.length > 1) {
                            let alreadyGotOne = false;
                            this.displayedAreas.forEach((area) => {
                                if (area.component.size === null) {
                                    if (alreadyGotOne === false) {
                                        area.size = null;
                                        area.minSize = null;
                                        area.maxSize = null;
                                        alreadyGotOne = true;
                                    }
                                    else {
                                        area.size = 100;
                                        area.minSize = null;
                                        area.maxSize = null;
                                    }
                                }
                                else {
                                    area.size = area.component.size;
                                    area.minSize = getAreaMinSize(area);
                                    area.maxSize = getAreaMaxSize(area);
                                }
                            });
                        }
                    }
                    break;
                }
            }
        }
        this.refreshStyleSizes();
        this.cdRef.markForCheck();
    }
    refreshStyleSizes() {
        ///////////////////////////////////////////
        // PERCENT MODE
        if (this.unit === 'percent') {
            // Only one area > flex-basis 100%
            if (this.displayedAreas.length === 1) {
                this.displayedAreas[0].component.setStyleFlex(0, 0, `100%`, false, false);
            }
            // Multiple areas > use each percent basis
            else {
                const sumGutterSize = this.getNbGutters() * this.gutterSize;
                this.displayedAreas.forEach((area) => {
                    area.component.setStyleFlex(0, 0, `calc( ${area.size}% - ${(area.size / 100) * sumGutterSize}px )`, area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                });
            }
        }
        ///////////////////////////////////////////
        // PIXEL MODE
        else if (this.unit === 'pixel') {
            this.displayedAreas.forEach((area) => {
                // Area with wildcard size
                if (area.size === null) {
                    if (this.displayedAreas.length === 1) {
                        area.component.setStyleFlex(1, 1, `100%`, false, false);
                    }
                    else {
                        area.component.setStyleFlex(1, 1, `auto`, false, false);
                    }
                }
                // Area with pixel size
                else {
                    // Only one area > flex-basis 100%
                    if (this.displayedAreas.length === 1) {
                        area.component.setStyleFlex(0, 0, `100%`, false, false);
                    }
                    // Multiple areas > use each pixel basis
                    else {
                        area.component.setStyleFlex(0, 0, `${area.size}px`, area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                    }
                }
            });
        }
    }
    clickGutter(event, gutterNum) {
        const tempPoint = getPointFromEvent(event);
        // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick
        if (this.startPoint && this.startPoint.x === tempPoint.x && this.startPoint.y === tempPoint.y) {
            // If timeout in progress and new click > clearTimeout & dblClickEvent
            if (this._clickTimeout !== null) {
                window.clearTimeout(this._clickTimeout);
                this._clickTimeout = null;
                this.notify('dblclick', gutterNum);
                this.stopDragging();
            }
            // Else start timeout to call clickEvent at end
            else {
                this._clickTimeout = window.setTimeout(() => {
                    this._clickTimeout = null;
                    this.notify('click', gutterNum);
                    this.stopDragging();
                }, this.gutterDblClickDuration);
            }
        }
    }
    startDragging(event, gutterOrder, gutterNum) {
        event.preventDefault();
        event.stopPropagation();
        this.startPoint = getPointFromEvent(event);
        if (this.startPoint === null || this.disabled === true) {
            return;
        }
        this.snapshot = {
            gutterNum,
            lastSteppedOffset: 0,
            allAreasSizePixel: getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
            allInvolvedAreasSizePercent: 100,
            areasBeforeGutter: [],
            areasAfterGutter: [],
        };
        this.displayedAreas.forEach((area) => {
            const areaSnapshot = {
                area,
                sizePixelAtStart: getElementPixelSize(area.component.elRef, this.direction),
                sizePercentAtStart: (this.unit === 'percent' ? area.size : -1), // If pixel mode, anyway, will not be used.
            };
            if (area.order < gutterOrder) {
                if (this.restrictMove === true) {
                    this.snapshot.areasBeforeGutter = [areaSnapshot];
                }
                else {
                    this.snapshot.areasBeforeGutter.unshift(areaSnapshot);
                }
            }
            else if (area.order > gutterOrder) {
                if (this.restrictMove === true) {
                    if (this.snapshot.areasAfterGutter.length === 0)
                        this.snapshot.areasAfterGutter = [areaSnapshot];
                }
                else {
                    this.snapshot.areasAfterGutter.push(areaSnapshot);
                }
            }
        });
        this.snapshot.allInvolvedAreasSizePercent = [
            ...this.snapshot.areasBeforeGutter,
            ...this.snapshot.areasAfterGutter,
        ].reduce((t, a) => t + a.sizePercentAtStart, 0);
        if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
            return;
        }
        this.dragListeners.push(this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this)));
        this.dragListeners.push(this.renderer.listen('document', 'touchend', this.stopDragging.bind(this)));
        this.dragListeners.push(this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this)));
        this.ngZone.runOutsideAngular(() => {
            this.dragListeners.push(this.renderer.listen('document', 'mousemove', this.dragEvent.bind(this)));
            this.dragListeners.push(this.renderer.listen('document', 'touchmove', this.dragEvent.bind(this)));
        });
        this.displayedAreas.forEach((area) => area.component.lockEvents());
        this.isDragging = true;
        this.renderer.addClass(this.elRef.nativeElement, 'as-dragging');
        this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
        this.notify('start', this.snapshot.gutterNum);
    }
    dragEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this._clickTimeout !== null) {
            window.clearTimeout(this._clickTimeout);
            this._clickTimeout = null;
        }
        if (this.isDragging === false) {
            return;
        }
        this.endPoint = getPointFromEvent(event);
        if (this.endPoint === null) {
            return;
        }
        // Calculate steppedOffset
        let offset = this.direction === 'horizontal' ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;
        if (this.dir === 'rtl') {
            offset = -offset;
        }
        const steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;
        if (steppedOffset === this.snapshot.lastSteppedOffset) {
            return;
        }
        this.snapshot.lastSteppedOffset = steppedOffset;
        // Need to know if each gutter side areas could reacts to steppedOffset
        let areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
        let areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel);
        // Each gutter side areas can't absorb all offset
        if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
            if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) {
            }
            else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
                areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
            }
            else {
                areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
            }
        }
        // Areas before gutter can't absorbs all offset > need to recalculate sizes for areas after gutter.
        else if (areasBefore.remain !== 0) {
            areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
        }
        // Areas after gutter can't absorbs all offset > need to recalculate sizes for areas before gutter.
        else if (areasAfter.remain !== 0) {
            areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
        }
        if (this.unit === 'percent') {
            // Hack because of browser messing up with sizes using calc(X% - Ypx) -> el.getBoundingClientRect()
            // If not there, playing with gutters makes total going down to 99.99875% then 99.99286%, 99.98986%,..
            const all = [...areasBefore.list, ...areasAfter.list];
            const areaToReset = all.find((a) => a.percentAfterAbsorption !== 0 &&
                a.percentAfterAbsorption !== a.areaSnapshot.area.minSize &&
                a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize);
            if (areaToReset) {
                areaToReset.percentAfterAbsorption =
                    this.snapshot.allInvolvedAreasSizePercent -
                        all.filter((a) => a !== areaToReset).reduce((total, a) => total + a.percentAfterAbsorption, 0);
            }
        }
        // Now we know areas could absorb steppedOffset, time to really update sizes
        areasBefore.list.forEach((item) => updateAreaSize(this.unit, item));
        areasAfter.list.forEach((item) => updateAreaSize(this.unit, item));
        this.refreshStyleSizes();
        this.notify('progress', this.snapshot.gutterNum);
    }
    stopDragging(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (this.isDragging === false) {
            return;
        }
        this.displayedAreas.forEach((area) => area.component.unlockEvents());
        while (this.dragListeners.length > 0) {
            const fct = this.dragListeners.pop();
            if (fct)
                fct();
        }
        // Warning: Have to be before "notify('end')"
        // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"
        this.isDragging = false;
        // If moved from starting point, notify end
        if (this.endPoint && (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y)) {
            this.notify('end', this.snapshot.gutterNum);
        }
        this.renderer.removeClass(this.elRef.nativeElement, 'as-dragging');
        this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
        this.snapshot = null;
        // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.startPoint = null;
                this.endPoint = null;
            });
        });
    }
    notify(type, gutterNum) {
        const sizes = this.getVisibleAreaSizes();
        if (type === 'start') {
            this.dragStart.emit({ gutterNum, sizes });
        }
        else if (type === 'end') {
            this.dragEnd.emit({ gutterNum, sizes });
        }
        else if (type === 'click') {
            this.gutterClick.emit({ gutterNum, sizes });
        }
        else if (type === 'dblclick') {
            this.gutterDblClick.emit({ gutterNum, sizes });
        }
        else if (type === 'transitionEnd') {
            if (this.transitionEndSubscriber) {
                this.ngZone.run(() => this.transitionEndSubscriber.next(sizes));
            }
        }
        else if (type === 'progress') {
            // Stay outside zone to allow users do what they want about change detection mechanism.
            this.dragProgressSubject.next({ gutterNum, sizes });
        }
    }
    ngOnDestroy() {
        this.stopDragging();
    }
}
SplitComponent.ɵfac = function SplitComponent_Factory(t) { return new (t || SplitComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
SplitComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SplitComponent, selectors: [["as-split"]], viewQuery: function SplitComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$6, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gutterEls = _t);
    } }, inputs: { direction: "direction", unit: "unit", gutterSize: "gutterSize", gutterStep: "gutterStep", restrictMove: "restrictMove", useTransition: "useTransition", disabled: "disabled", dir: "dir", gutterDblClickDuration: "gutterDblClickDuration" }, outputs: { dragStart: "dragStart", dragEnd: "dragEnd", gutterClick: "gutterClick", gutterDblClick: "gutterDblClick", transitionEnd: "transitionEnd" }, exportAs: ["asSplit"], ngContentSelectors: _c1$2, decls: 2, vars: 1, consts: [["ngFor", "", 3, "ngForOf"], ["class", "as-split-gutter", 3, "flex-basis", "order", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], [1, "as-split-gutter", 3, "mousedown", "touchstart", "mouseup", "touchend"], ["gutterEls", ""], [1, "as-split-gutter-icon"]], template: function SplitComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, SplitComponent_ng_template_1_Template, 1, 1, "ng-template", 0);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.displayedAreas);
    } }, directives: [i1$1.NgForOf, i1$1.NgIf], styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;background-color:transparent}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:50%;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:hidden}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0!important;overflow-x:hidden;overflow-y:hidden}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:ew-resize;height:100%;position:relative;left:5px}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\")}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:last-of-type){margin-right:-9px}.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-left:1px solid #eee}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:ns-resize;width:100%;position:relative;top:5px}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC\")}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:last-of-type){margin-bottom:-9px}.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-top:1px solid #eee}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area, .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%]{transition:flex-basis .3s}.dark-theme.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type), .dark-theme   .as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-left:1px solid #3f3f3f}.dark-theme.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type), .dark-theme   .as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-top:1px solid #3f3f3f}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SplitComponent, [{
        type: Component,
        args: [{
                selector: 'as-split',
                exportAs: 'asSplit',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: [`./split.component.scss`],
                template: ` <ng-content></ng-content>
    <ng-template ngFor [ngForOf]="displayedAreas" let-index="index" let-last="last">
      <div
        *ngIf="last === false"
        #gutterEls
        class="as-split-gutter"
        [style.flex-basis.px]="gutterSize"
        [style.order]="index * 2 + 1"
        (mousedown)="startDragging($event, index * 2 + 1, index + 1)"
        (touchstart)="startDragging($event, index * 2 + 1, index + 1)"
        (mouseup)="clickGutter($event, index + 1)"
        (touchend)="clickGutter($event, index + 1)"
      >
        <div class="as-split-gutter-icon"></div>
      </div>
    </ng-template>`,
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { direction: [{
            type: Input
        }], unit: [{
            type: Input
        }], gutterSize: [{
            type: Input
        }], gutterStep: [{
            type: Input
        }], restrictMove: [{
            type: Input
        }], useTransition: [{
            type: Input
        }], disabled: [{
            type: Input
        }], dir: [{
            type: Input
        }], gutterDblClickDuration: [{
            type: Input
        }], dragStart: [{
            type: Output
        }], dragEnd: [{
            type: Output
        }], gutterClick: [{
            type: Output
        }], gutterDblClick: [{
            type: Output
        }], transitionEnd: [{
            type: Output
        }], gutterEls: [{
            type: ViewChildren,
            args: ['gutterEls']
        }] }); })();

// tslint:disable
class SplitAreaDirective {
    constructor(ngZone, elRef, renderer, split) {
        this.ngZone = ngZone;
        this.elRef = elRef;
        this.renderer = renderer;
        this.split = split;
        this._order = null;
        ////
        this._size = null;
        ////
        this._minSize = null;
        ////
        this._maxSize = null;
        ////
        this._lockSize = false;
        ////
        this._visible = true;
        this.lockListeners = [];
        this.renderer.addClass(this.elRef.nativeElement, 'as-split-area');
    }
    set order(v) {
        this._order = getInputPositiveNumber(v, null);
        this.split.updateArea(this, true, false);
    }
    get order() {
        return this._order;
    }
    set size(v) {
        this._size = getInputPositiveNumber(v, null);
        this.split.updateArea(this, false, true);
    }
    get size() {
        return this._size;
    }
    set minSize(v) {
        this._minSize = getInputPositiveNumber(v, null);
        this.split.updateArea(this, false, true);
    }
    get minSize() {
        return this._minSize;
    }
    set maxSize(v) {
        this._maxSize = getInputPositiveNumber(v, null);
        this.split.updateArea(this, false, true);
    }
    get maxSize() {
        return this._maxSize;
    }
    set lockSize(v) {
        this._lockSize = getInputBoolean(v);
        this.split.updateArea(this, false, true);
    }
    get lockSize() {
        return this._lockSize;
    }
    set visible(v) {
        this._visible = getInputBoolean(v);
        if (this._visible) {
            this.split.showArea(this);
            this.renderer.removeClass(this.elRef.nativeElement, 'as-hidden');
        }
        else {
            this.split.hideArea(this);
            this.renderer.addClass(this.elRef.nativeElement, 'as-hidden');
        }
    }
    get visible() {
        return this._visible;
    }
    ngOnInit() {
        this.split.addArea(this);
        this.ngZone.runOutsideAngular(() => {
            this.transitionListener = this.renderer.listen(this.elRef.nativeElement, 'transitionend', (event) => {
                // Limit only flex-basis transition to trigger the event
                if (event.propertyName === 'flex-basis') {
                    this.split.notify('transitionEnd', -1);
                }
            });
        });
    }
    setStyleOrder(value) {
        this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
    }
    setStyleFlex(grow, shrink, basis, isMin, isMax) {
        // Need 3 separated properties to work on IE11 (https://github.com/angular/flex-layout/issues/323)
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', grow);
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', shrink);
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', basis);
        if (isMin === true)
            this.renderer.addClass(this.elRef.nativeElement, 'as-min');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-min');
        if (isMax === true)
            this.renderer.addClass(this.elRef.nativeElement, 'as-max');
        else
            this.renderer.removeClass(this.elRef.nativeElement, 'as-max');
    }
    lockEvents() {
        this.ngZone.runOutsideAngular(() => {
            this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, 'selectstart', (e) => false));
            this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement, 'dragstart', (e) => false));
        });
    }
    unlockEvents() {
        while (this.lockListeners.length > 0) {
            const fct = this.lockListeners.pop();
            if (fct)
                fct();
        }
    }
    ngOnDestroy() {
        this.unlockEvents();
        if (this.transitionListener) {
            this.transitionListener();
        }
        this.split.removeArea(this);
    }
}
SplitAreaDirective.ɵfac = function SplitAreaDirective_Factory(t) { return new (t || SplitAreaDirective)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(SplitComponent)); };
SplitAreaDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SplitAreaDirective, selectors: [["as-split-area"], ["", "as-split-area", ""]], inputs: { order: "order", size: "size", minSize: "minSize", maxSize: "maxSize", lockSize: "lockSize", visible: "visible" }, exportAs: ["asSplitArea"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SplitAreaDirective, [{
        type: Directive,
        args: [{
                selector: 'as-split-area, [as-split-area]',
                exportAs: 'asSplitArea',
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: SplitComponent }]; }, { order: [{
            type: Input
        }], size: [{
            type: Input
        }], minSize: [{
            type: Input
        }], maxSize: [{
            type: Input
        }], lockSize: [{
            type: Input
        }], visible: [{
            type: Input
        }] }); })();

// tslint:disable
class AngularSplitModule {
    static forRoot() {
        return {
            ngModule: AngularSplitModule,
            providers: [],
        };
    }
    static forChild() {
        return {
            ngModule: AngularSplitModule,
            providers: [],
        };
    }
}
AngularSplitModule.ɵfac = function AngularSplitModule_Factory(t) { return new (t || AngularSplitModule)(); };
AngularSplitModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AngularSplitModule });
AngularSplitModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularSplitModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SplitComponent, SplitAreaDirective],
                exports: [SplitComponent, SplitAreaDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularSplitModule, { declarations: [SplitComponent, SplitAreaDirective], imports: [CommonModule], exports: [SplitComponent, SplitAreaDirective] }); })();

// tslint:disable

class ApplicationOperations {
}

function ComponentMetadataComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1, " View Encapsulation: ");
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const viewEncapsulation_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(viewEncapsulation_r2);
} }
function ComponentMetadataComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1, " Change Detection Strategy: ");
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const changeDetectionStrategy_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(changeDetectionStrategy_r3);
} }
class ComponentMetadataComponent {
    constructor(_nestedProps) {
        this._nestedProps = _nestedProps;
        this.viewEncapsulationModes = ['Emulated', 'Native', 'None', 'ShadowDom'];
    }
    get controller() {
        if (!this.currentSelectedComponent) {
            return;
        }
        return this._nestedProps.getDirectiveController(this.currentSelectedComponent.name);
    }
    get viewEncapsulation() {
        var _a;
        const encapsulationIndex = (_a = this === null || this === void 0 ? void 0 : this.controller) === null || _a === void 0 ? void 0 : _a.directiveViewEncapsulation;
        if (encapsulationIndex !== undefined) {
            return this.viewEncapsulationModes[encapsulationIndex];
        }
    }
    get changeDetectionStrategy() {
        var _a;
        const onPush = (_a = this === null || this === void 0 ? void 0 : this.controller) === null || _a === void 0 ? void 0 : _a.directiveHasOnPushStrategy;
        return onPush ? 'On Push' : onPush !== undefined ? 'Default' : undefined;
    }
}
ComponentMetadataComponent.ɵfac = function ComponentMetadataComponent_Factory(t) { return new (t || ComponentMetadataComponent)(i0.ɵɵdirectiveInject(ElementPropertyResolver)); };
ComponentMetadataComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentMetadataComponent, selectors: [["ng-component-metadata"]], inputs: { currentSelectedComponent: "currentSelectedComponent" }, decls: 3, vars: 2, consts: [[1, "meta-data-container"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ViewEncapsulation", "target", "_blank", 4, "ngIf"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ChangeDetectionStrategy", "target", "_blank", 4, "ngIf"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ViewEncapsulation", "target", "_blank"], [1, "meta-data"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ChangeDetectionStrategy", "target", "_blank"]], template: function ComponentMetadataComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ComponentMetadataComponent_a_1_Template, 4, 1, "a", 1);
        i0.ɵɵtemplate(2, ComponentMetadataComponent_a_2_Template, 4, 1, "a", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.viewEncapsulation);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.changeDetectionStrategy);
    } }, directives: [i1$1.NgIf, i3.MatAnchor], styles: [".meta-data-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.meta-data-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;font-size:11px;height:22px;line-height:22px}.meta-data[_ngcontent-%COMP%]{font-weight:400}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentMetadataComponent, [{
        type: Component,
        args: [{
                selector: 'ng-component-metadata',
                templateUrl: './component-metadata.component.html',
                styleUrls: ['./component-metadata.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: ElementPropertyResolver }]; }, { currentSelectedComponent: [{
            type: Input
        }] }); })();

function PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-accordion", 3);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "mat-expansion-panel", 4);
    i0.ɵɵelementStart(4, "mat-expansion-panel-header", 5);
    i0.ɵɵelementStart(5, "mat-panel-title");
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 8);
    i0.ɵɵlistener("click", function PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template_button_click_9_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.handleViewSource($event); });
    i0.ɵɵelementStart(10, "mat-icon");
    i0.ɵɵtext(11, " code ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "ng-component-metadata", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("hideToggle", true);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.currentSelectedElement.component.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("currentSelectedComponent", ctx_r3.currentSelectedElement.component);
} }
function PropertyTabHeaderComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.currentSelectedElement.element);
} }
function PropertyTabHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template, 13, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, PropertyTabHeaderComponent_ng_container_0_ng_template_2_Template, 3, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.currentSelectedElement.component)("ngIfElse", _r4);
} }
function PropertyTabHeaderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtext(2, "No selected Element");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
class PropertyTabHeaderComponent {
    constructor() {
        this.viewSource = new EventEmitter();
    }
    handleViewSource(event) {
        event.stopPropagation();
        this.viewSource.emit();
    }
}
PropertyTabHeaderComponent.ɵfac = function PropertyTabHeaderComponent_Factory(t) { return new (t || PropertyTabHeaderComponent)(); };
PropertyTabHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyTabHeaderComponent, selectors: [["ng-property-tab-header"]], inputs: { currentSelectedElement: "currentSelectedElement", currentDirectives: "currentDirectives" }, outputs: { viewSource: "viewSource" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["emptyState", ""], ["currentElementIsDOMElement", ""], [1, "property-tab-header"], [3, "hideToggle"], ["collapsedHeight", "32px", "expandedHeight", "32px"], [1, "element-header"], [1, "component-name"], ["mat-icon-button", "", 3, "click"], [3, "currentSelectedComponent"], [1, "element-name"]], template: function PropertyTabHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyTabHeaderComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵtemplate(1, PropertyTabHeaderComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.currentSelectedElement)("ngIfElse", _r1);
    } }, directives: [i1$1.NgIf, i2$2.MatAccordion, i2$2.MatExpansionPanel, i2$2.MatExpansionPanelHeader, i2$2.MatExpansionPanelTitle, i3.MatButton, i2$1.MatIcon, ComponentMetadataComponent], styles: [".element-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;align-items:center;font-size:11px}.element-header[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:25px;width:25px;line-height:25px}.element-header[_ngcontent-%COMP%]   .component-name[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%]   .element-name[_ngcontent-%COMP%]{margin-left:10px;font-weight:700;line-height:25px}  .property-tab-header mat-expansion-panel{border-radius:unset!important}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-header{padding:0}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-header .mat-expansion-panel-header-title{margin-right:0}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-content .mat-expansion-panel-body{padding:0}.dark-theme[_nghost-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{fill:#fff}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabHeaderComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-tab-header.component.html',
                selector: 'ng-property-tab-header',
                styleUrls: ['./property-tab-header.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { currentSelectedElement: [{
            type: Input
        }], currentDirectives: [{
            type: Input
        }], viewSource: [{
            type: Output
        }] }); })();

class PropertyViewHeaderComponent {
}
PropertyViewHeaderComponent.ɵfac = function PropertyViewHeaderComponent_Factory(t) { return new (t || PropertyViewHeaderComponent)(); };
PropertyViewHeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewHeaderComponent, selectors: [["ng-property-view-header"]], inputs: { directive: "directive" }, decls: 2, vars: 1, template: function PropertyViewHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.directive);
    } }, directives: [i1$2.MatToolbar], styles: ["mat-toolbar[_ngcontent-%COMP%]{padding-left:9px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:25px;font-size:11px;font-weight:500;display:flex;align-items:center;justify-content:space-between;height:auto}  .mat-button,   .mat-icon-button{height:18px;width:18px;line-height:15px;margin-right:7px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view-header',
                templateUrl: './property-view-header.component.html',
                styleUrls: ['./property-view-header.component.scss'],
            }]
    }], null, { directive: [{
            type: Input
        }] }); })();

class PropertyPreviewComponent {
    constructor() {
        this.inspect = new EventEmitter();
    }
    get isClickableProp() {
        return this.node.prop.descriptor.type === PropType.Function || this.node.prop.descriptor.type === PropType.HTMLNode;
    }
}
PropertyPreviewComponent.ɵfac = function PropertyPreviewComponent_Factory(t) { return new (t || PropertyPreviewComponent)(); };
PropertyPreviewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyPreviewComponent, selectors: [["ng-property-preview"]], inputs: { node: "node" }, outputs: { inspect: "inspect" }, decls: 2, vars: 3, consts: [[1, "value", 3, "click"]], template: function PropertyPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function PropertyPreviewComponent_Template_span_click_0_listener() { return ctx.isClickableProp && ctx.inspect.emit(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("function", ctx.isClickableProp);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.node.prop.descriptor.preview, "\n");
    } }, styles: [".function[_ngcontent-%COMP%]:hover{background:#4da1ff;color:#fff;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyPreviewComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-preview',
                templateUrl: './property-preview.component.html',
                styleUrls: ['./property-preview.component.scss'],
            }]
    }], null, { node: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();

function PropertyEditorComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.valueToSubmit, " ");
} }
function PropertyEditorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵlistener("mousedown", function PropertyEditorComponent_span_3_Template_input_mousedown_1_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PropertyEditorComponent_span_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.valueToSubmit = $event; })("keydown.enter", function PropertyEditorComponent_span_3_Template_input_keydown_enter_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.accept(); })("keydown.escape", function PropertyEditorComponent_span_3_Template_input_keydown_escape_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.reject(); })("blur", function PropertyEditorComponent_span_3_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onBlur(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.valueToSubmit);
} }
var PropertyEditorState;
(function (PropertyEditorState) {
    PropertyEditorState[PropertyEditorState["Read"] = 0] = "Read";
    PropertyEditorState[PropertyEditorState["Write"] = 1] = "Write";
})(PropertyEditorState || (PropertyEditorState = {}));
const parseValue = (value) => {
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return value.toString();
    }
};
class PropertyEditorComponent {
    constructor(_cd, _elementRef) {
        this._cd = _cd;
        this._elementRef = _elementRef;
        this.updateValue = new EventEmitter();
        this.readState = PropertyEditorState.Read;
        this.writeState = PropertyEditorState.Write;
        this.currentPropertyState = this.readState;
    }
    ngOnInit() {
        this.valueToSubmit = this.initialValue;
    }
    ngAfterViewChecked() {
        if (this.currentPropertyState === this.writeState) {
            this.editor.focus();
        }
    }
    accept() {
        const parsed = parseValue(this.valueToSubmit);
        this.updateValue.emit(parsed);
        this._transition(this.readState);
    }
    reject() {
        this.valueToSubmit = this.initialValue;
        this._transition(this.readState);
    }
    onClick() {
        if (this.currentPropertyState === this.readState) {
            this._transition(this.writeState);
        }
    }
    onBlur() {
        if (this.currentPropertyState === this.writeState) {
            this.accept();
        }
    }
    get editor() {
        return this._elementRef.nativeElement.querySelector('input');
    }
    _transition(state) {
        this.currentPropertyState = state;
        if (this.currentPropertyState === this.writeState) {
            this._cd.detectChanges();
            this.editor.focus();
            this.editor.select();
        }
    }
}
PropertyEditorComponent.ɵfac = function PropertyEditorComponent_Factory(t) { return new (t || PropertyEditorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PropertyEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyEditorComponent, selectors: [["ng-property-editor"]], inputs: { key: "key", initialValue: "initialValue" }, outputs: { updateValue: "updateValue" }, decls: 4, vars: 3, consts: [[1, "editor", 3, "click"], [1, "state-container", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "editable"], ["matInput", "", "type", "text", 1, "editor-input", "editable", 3, "ngModel", "mousedown", "ngModelChange", "keydown.enter", "keydown.escape", "blur"]], template: function PropertyEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PropertyEditorComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtemplate(2, PropertyEditorComponent_span_2_Template, 3, 1, "span", 2);
        i0.ɵɵtemplate(3, PropertyEditorComponent_span_3_Template, 2, 1, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.currentPropertyState);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.readState);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.writeState);
    } }, directives: [i1$1.NgSwitch, i1$1.NgSwitchCase, i2$3.DefaultValueAccessor, i2$3.NgControlStatus, i2$3.NgModel], styles: [".editor[_ngcontent-%COMP%]{cursor:text;border:none;outline:none;min-width:100px;white-space:pre;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.editor-input[_ngcontent-%COMP%]{background-color:#bbddfb;box-shadow:0 0 0 1px rgba(0,0,0,.05)}input[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-family:Menlo,monospace;font-weight:500;font-size:1em;border:none;outline:none}.dark-theme[_nghost-%COMP%]   input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{color:#bcc5ce;background-color:#202124}.dark-theme[_nghost-%COMP%]   .editor-input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .editor-input[_ngcontent-%COMP%]{background-color:#454546;box-shadow:0 0 0 1px hsla(0,0%,64.7%,.05)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyEditorComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-editor.component.html',
                selector: 'ng-property-editor',
                styleUrls: ['./property-editor.component.scss'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], initialValue: [{
            type: Input
        }], updateValue: [{
            type: Output
        }] }); })();

function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng-property-preview", 8);
    i0.ɵɵlistener("inspect", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template_ng_property_preview_inspect_1_listener() { i0.ɵɵrestoreView(_r9); const node_r3 = i0.ɵɵnextContext().$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.inspect.emit(node_r3); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("node", node_r3);
} }
function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng-property-editor", 9);
    i0.ɵɵlistener("updateValue", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template_ng_property_editor_updateValue_0_listener($event) { i0.ɵɵrestoreView(_r13); const node_r3 = i0.ɵɵnextContext().$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.handleUpdate(node_r3, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("key", node_r3.prop.name)("initialValue", node_r3.prop.descriptor.value || node_r3.prop.descriptor.preview);
} }
function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, ":\u00A0 ");
    i0.ɵɵtemplate(4, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(5, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template, 1, 2, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r3.prop.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !node_r3.prop.descriptor.editable)("ngIfElse", _r5);
} }
function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 4);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵlistener("click", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r17); const node_r15 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.toggle(node_r15); });
    i0.ɵɵelementStart(2, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " \u00A0 ");
    i0.ɵɵelementStart(5, "span", 12);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, ":\u00A0 ");
    i0.ɵɵelementStart(8, "span", 13);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r15 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r15) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", node_r15.prop.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r15) ? "" : node_r15.prop.descriptor.preview, " ");
} }
function PropertyViewTreeComponent_mat_tree_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree", 1);
    i0.ɵɵtemplate(1, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_Template, 7, 3, "mat-tree-node", 2);
    i0.ɵɵtemplate(2, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template, 10, 3, "mat-tree-node", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dataSource", ctx_r0.dataSource)("treeControl", ctx_r0.treeControl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r0.hasChild);
} }
class PropertyViewTreeComponent {
    constructor() {
        this.updateValue = new EventEmitter();
        this.inspect = new EventEmitter();
        this.hasChild = (_, node) => node.expandable;
    }
    toggle(node) {
        if (this.treeControl.isExpanded(node)) {
            this.treeControl.collapse(node);
            return;
        }
        this.expand(node);
    }
    expand(node) {
        const { prop } = node;
        if (!prop.descriptor.expandable) {
            return;
        }
        this.treeControl.expand(node);
    }
    handleUpdate(node, newValue) {
        this.updateValue.emit({
            node,
            newValue,
        });
    }
}
PropertyViewTreeComponent.ɵfac = function PropertyViewTreeComponent_Factory(t) { return new (t || PropertyViewTreeComponent)(); };
PropertyViewTreeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewTreeComponent, selectors: [["ng-property-view-tree"]], inputs: { dataSource: "dataSource", treeControl: "treeControl" }, outputs: { updateValue: "updateValue", inspect: "inspect" }, decls: 1, vars: 1, consts: [["class", "property-list", 3, "dataSource", "treeControl", 4, "ngIf"], [1, "property-list", 3, "dataSource", "treeControl"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", ""], [1, "name", "non-expandable"], [4, "ngIf", "ngIfElse"], ["editable", ""], [3, "node", "inspect"], [3, "key", "initialValue", "updateValue"], [3, "click"], [1, "mat-icon-rtl-mirror"], [1, "name"], [1, "value"]], template: function PropertyViewTreeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyViewTreeComponent_mat_tree_0_Template, 3, 3, "mat-tree", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.treeControl);
    } }, directives: [i1$1.NgIf, i2$4.MatTree, i2$4.MatTreeNodeDef, i2$4.MatTreeNode, i2$4.MatTreeNodePadding, PropertyPreviewComponent, PropertyEditorComponent, i2$1.MatIcon], styles: ["[_nghost-%COMP%]{width:100%;display:block;overflow:auto;height:calc(100% - 24px)}[_nghost-%COMP%]   mat-tree[_ngcontent-%COMP%]{display:table}[_nghost-%COMP%]     .mat-tree-node{min-height:20px!important;cursor:default;font-family:Menlo,monospace}[_nghost-%COMP%]     .mat-tree-node .mat-icon{font-size:11px;width:8px;height:16px}.name[_ngcontent-%COMP%]{margin-left:-9px}.non-expandable[_ngcontent-%COMP%]{margin-left:18px}.property-list[_ngcontent-%COMP%]{margin:5px 5px 5px 15px}.property-list[_ngcontent-%COMP%]   mat-tree-node[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#ce271e;font-weight:500}.dark-theme[_nghost-%COMP%]   .property-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .property-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#54c9bd!important}.disabled[_ngcontent-%COMP%], .property-list[_ngcontent-%COMP%]   mat-tree-node.disabled[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#333}.arrow[_ngcontent-%COMP%]{font-family:monospace;font-size:.5em;color:#6e6e6e}.mat-nested-tree-node[_ngcontent-%COMP%], [_nghost-%COMP%]     .mat-tree-node{font-size:.8em}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewTreeComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view-tree',
                templateUrl: './property-view-tree.component.html',
                styleUrls: ['./property-view-tree.component.scss'],
            }]
    }], null, { dataSource: [{
            type: Input
        }], treeControl: [{
            type: Input
        }], updateValue: [{
            type: Output
        }], inspect: [{
            type: Output
        }] }); })();

function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-expansion-panel", 5);
    i0.ɵɵelementStart(1, "mat-expansion-panel-header", 6);
    i0.ɵɵelementStart(2, "mat-panel-title");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ng-property-view-tree", 7);
    i0.ɵɵlistener("updateValue", function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template_ng_property_view_tree_updateValue_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(3); return ctx_r4.updateValue($event); })("inspect", function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template_ng_property_view_tree_inspect_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(3); return ctx_r6.handleInspect($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("expanded", true);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.panels[index_r2].title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r3.panels[index_r2].controls.dataSource)("treeControl", ctx_r3.panels[index_r2].controls.treeControl);
} }
function PropertyViewBodyComponent_mat_accordion_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template, 5, 4, "mat-expansion-panel", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.panels[index_r2].hidden);
} }
function PropertyViewBodyComponent_mat_accordion_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-accordion", 1);
    i0.ɵɵlistener("cdkDropListDropped", function PropertyViewBodyComponent_mat_accordion_0_Template_mat_accordion_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.drop($event); });
    i0.ɵɵtemplate(1, PropertyViewBodyComponent_mat_accordion_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("multi", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.categoryOrder);
} }
class PropertyViewBodyComponent {
    constructor() {
        this.inspect = new EventEmitter();
        this.categoryOrder = [0, 1, 2];
    }
    get panels() {
        return [
            {
                title: '@Inputs',
                hidden: this.directiveInputControls.dataSource.data.length === 0,
                controls: this.directiveInputControls,
            },
            {
                title: '@Outputs',
                hidden: this.directiveOutputControls.dataSource.data.length === 0,
                controls: this.directiveOutputControls,
            },
            {
                title: 'Properties',
                hidden: this.directiveStateControls.dataSource.data.length === 0,
                controls: this.directiveStateControls,
            },
        ];
    }
    get controlsLoaded() {
        return !!this.directiveStateControls && !!this.directiveOutputControls && !!this.directiveInputControls;
    }
    updateValue({ node, newValue }) {
        this.controller.updateValue(node, newValue);
    }
    drop(event) {
        moveItemInArray(this.categoryOrder, event.previousIndex, event.currentIndex);
    }
    handleInspect(node) {
        this.inspect.emit({
            node,
            directivePosition: this.controller.directivePosition,
        });
    }
}
PropertyViewBodyComponent.ɵfac = function PropertyViewBodyComponent_Factory(t) { return new (t || PropertyViewBodyComponent)(); };
PropertyViewBodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewBodyComponent, selectors: [["ng-property-view-body"]], inputs: { controller: "controller", directiveInputControls: "directiveInputControls", directiveOutputControls: "directiveOutputControls", directiveStateControls: "directiveStateControls" }, outputs: { inspect: "inspect" }, decls: 1, vars: 1, consts: [["cdkDropList", "", 3, "multi", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 3, "multi", "cdkDropListDropped"], ["class", "mat-accordion-content", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "mat-accordion-content"], [3, "expanded", 4, "ngIf"], [3, "expanded"], ["collapsedHeight", "25px", "expandedHeight", "25px"], [3, "dataSource", "treeControl", "updateValue", "inspect"]], template: function PropertyViewBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyViewBodyComponent_mat_accordion_0_Template, 2, 2, "mat-accordion", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.controlsLoaded);
    } }, directives: [i1$1.NgIf, i2$2.MatAccordion, i3$1.CdkDropList, i1$1.NgForOf, i3$1.CdkDrag, i2$2.MatExpansionPanel, i2$2.MatExpansionPanelHeader, i2$2.MatExpansionPanelTitle, PropertyViewTreeComponent], styles: ["[_nghost-%COMP%]     mat-expansion-panel{border-radius:unset!important}[_nghost-%COMP%]     .mat-expansion-panel-body{padding:0}[_nghost-%COMP%]     .mat-expansion-panel-spacing{margin:0}[_nghost-%COMP%]     .mat-expansion-panel-header{padding:0 15px}[_nghost-%COMP%]     .mat-expansion-panel-header-title{font-size:.8em;font-family:Menlo,monospace}[_nghost-%COMP%]     .mat-expansion-indicator:after{padding:2.5px;margin-bottom:4.5px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewBodyComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view-body',
                templateUrl: './property-view-body.component.html',
                styleUrls: ['./property-view-body.component.scss'],
            }]
    }], null, { controller: [{
            type: Input
        }], directiveInputControls: [{
            type: Input
        }], directiveOutputControls: [{
            type: Input
        }], directiveStateControls: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();

class PropertyViewComponent {
    constructor(_nestedProps) {
        this._nestedProps = _nestedProps;
        this.inspect = new EventEmitter();
    }
    get controller() {
        return this._nestedProps.getDirectiveController(this.directive);
    }
    get directiveInputControls() {
        var _a;
        return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveInputControls;
    }
    get directiveOutputControls() {
        var _a;
        return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveOutputControls;
    }
    get directiveStateControls() {
        var _a;
        return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveStateControls;
    }
}
PropertyViewComponent.ɵfac = function PropertyViewComponent_Factory(t) { return new (t || PropertyViewComponent)(i0.ɵɵdirectiveInject(ElementPropertyResolver)); };
PropertyViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyViewComponent, selectors: [["ng-property-view"]], inputs: { directive: "directive" }, outputs: { inspect: "inspect" }, decls: 2, vars: 5, consts: [[3, "directive"], [3, "controller", "directiveInputControls", "directiveOutputControls", "directiveStateControls", "inspect"]], template: function PropertyViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "ng-property-view-header", 0);
        i0.ɵɵelementStart(1, "ng-property-view-body", 1);
        i0.ɵɵlistener("inspect", function PropertyViewComponent_Template_ng_property_view_body_inspect_1_listener($event) { return ctx.inspect.emit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("directive", ctx.directive);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("controller", ctx.controller)("directiveInputControls", ctx.directiveInputControls)("directiveOutputControls", ctx.directiveOutputControls)("directiveStateControls", ctx.directiveStateControls);
    } }, directives: [PropertyViewHeaderComponent, PropertyViewBodyComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-view',
                templateUrl: './property-view.component.html',
                styleUrls: ['./property-view.component.scss'],
            }]
    }], function () { return [{ type: ElementPropertyResolver }]; }, { directive: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();

function PropertyTabBodyComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "ng-property-view", 3);
    i0.ɵɵlistener("inspect", function PropertyTabBodyComponent_ng_container_0_div_1_Template_ng_property_view_inspect_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.inspect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const directive_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("directive", directive_r2);
} }
function PropertyTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PropertyTabBodyComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.getCurrentDirectives());
} }
class PropertyTabBodyComponent {
    constructor() {
        this.inspect = new EventEmitter();
    }
    getCurrentDirectives() {
        if (!this.currentSelectedElement) {
            return;
        }
        const directives = this.currentSelectedElement.directives.map((d) => d.name);
        if (this.currentSelectedElement.component) {
            directives.push(this.currentSelectedElement.component.name);
        }
        return directives;
    }
}
PropertyTabBodyComponent.ɵfac = function PropertyTabBodyComponent_Factory(t) { return new (t || PropertyTabBodyComponent)(); };
PropertyTabBodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyTabBodyComponent, selectors: [["ng-property-tab-body"]], inputs: { currentSelectedElement: "currentSelectedElement" }, outputs: { inspect: "inspect" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "explorer-panel", 4, "ngFor", "ngForOf"], [1, "explorer-panel"], [3, "directive", "inspect"]], template: function PropertyTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.currentSelectedElement);
    } }, directives: [i1$1.NgIf, i1$1.NgForOf, PropertyViewComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabBodyComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-tab-body.component.html',
                selector: 'ng-property-tab-body',
                styleUrls: ['./property-tab-body.component.scss'],
            }]
    }], null, { currentSelectedElement: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();

class PropertyTabComponent {
    constructor() {
        this.viewSource = new EventEmitter();
        this.inspect = new EventEmitter();
    }
}
PropertyTabComponent.ɵfac = function PropertyTabComponent_Factory(t) { return new (t || PropertyTabComponent)(); };
PropertyTabComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyTabComponent, selectors: [["ng-property-tab"]], inputs: { currentSelectedElement: "currentSelectedElement" }, outputs: { viewSource: "viewSource", inspect: "inspect" }, decls: 2, vars: 2, consts: [[3, "currentSelectedElement", "viewSource"], [3, "currentSelectedElement", "inspect"]], template: function PropertyTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ng-property-tab-header", 0);
        i0.ɵɵlistener("viewSource", function PropertyTabComponent_Template_ng_property_tab_header_viewSource_0_listener() { return ctx.viewSource.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "ng-property-tab-body", 1);
        i0.ɵɵlistener("inspect", function PropertyTabComponent_Template_ng_property_tab_body_inspect_1_listener($event) { return ctx.inspect.emit($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
    } }, directives: [PropertyTabHeaderComponent, PropertyTabBodyComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-tab.component.html',
                selector: 'ng-property-tab',
            }]
    }], null, { currentSelectedElement: [{
            type: Input
        }], viewSource: [{
            type: Output
        }], inspect: [{
            type: Output
        }] }); })();

const _c0$5 = ["directiveForestSplitArea"];
function DirectiveExplorerComponent_ng_breadcrumbs_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng-breadcrumbs", 11);
    i0.ɵɵlistener("mouseLeaveNode", function DirectiveExplorerComponent_ng_breadcrumbs_7_Template_ng_breadcrumbs_mouseLeaveNode_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.unhighlight(); })("mouseOverNode", function DirectiveExplorerComponent_ng_breadcrumbs_7_Template_ng_breadcrumbs_mouseOverNode_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.highlight($event); })("handleSelect", function DirectiveExplorerComponent_ng_breadcrumbs_7_Template_ng_breadcrumbs_handleSelect_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.handleSelect($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("parents", ctx_r1.parents);
} }
const sameDirectives = (a, b) => {
    if ((a.component && !b.component) || (!a.component && b.component)) {
        return false;
    }
    if (a.component && b.component && a.component.id !== b.component.id) {
        return false;
    }
    const aDirectives = new Set(a.directives.map((d) => d.id));
    for (const dir of b.directives) {
        if (!aDirectives.has(dir.id)) {
            return false;
        }
    }
    return true;
};
class DirectiveExplorerComponent {
    constructor(_appOperations, _messageBus, _propResolver, _cdr, _ngZone) {
        this._appOperations = _appOperations;
        this._messageBus = _messageBus;
        this._propResolver = _propResolver;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.toggleInspector = new EventEmitter();
        this.currentSelectedElement = null;
        this.splitDirection = 'horizontal';
        this._resizeObserver = new ResizeObserver((entries) => this._ngZone.run(() => {
            const resizedEntry = entries[0];
            if (resizedEntry.target === this.splitElementRef.nativeElement) {
                this.splitDirection = resizedEntry.contentRect.width <= 500 ? 'vertical' : 'horizontal';
            }
            if (!this.breadcrumbs) {
                return;
            }
            this.breadcrumbs.updateScrollButtonVisibility();
        }));
        this._clickedElement = null;
        this._refreshRetryTimeout = null;
        this.parents = null;
    }
    ngOnInit() {
        this.subscribeToBackendEvents();
        this.refresh();
        this._resizeObserver.observe(this.splitElementRef.nativeElement);
        this._resizeObserver.observe(this.directiveForestSplitArea.nativeElement);
    }
    ngOnDestroy() {
        this._resizeObserver.unobserve(this.splitElementRef.nativeElement);
        this._resizeObserver.unobserve(this.directiveForestSplitArea.nativeElement);
    }
    handleNodeSelection(node) {
        if (node) {
            // We want to guarantee that we're not reusing any of the previous properties.
            // That's possible if the user has selected an NgForOf and after that
            // they select another NgForOf instance. In this case, we don't want to diff the props
            // we want to render from scratch.
            if (this._clickedElement && !sameDirectives(this._clickedElement, node)) {
                this._propResolver.clearProperties();
            }
            this._clickedElement = node;
            this._messageBus.emit('setSelectedComponent', [node.position]);
            this.refresh();
        }
        else {
            this._clickedElement = this.currentSelectedElement = null;
        }
    }
    subscribeToBackendEvents() {
        this._messageBus.on('latestComponentExplorerView', (view) => {
            this.forest = view.forest;
            this.currentSelectedElement = this._clickedElement;
            if (view.properties && this.currentSelectedElement) {
                this._propResolver.setProperties(this.currentSelectedElement, view.properties);
            }
        });
        this._messageBus.on('componentTreeDirty', () => this.refresh());
    }
    refresh() {
        const success = this._messageBus.emit('getLatestComponentExplorerView', [this._constructViewQuery()]);
        // If the event was not throttled, we no longer need to retry.
        if (success) {
            clearTimeout(this._refreshRetryTimeout);
            this._refreshRetryTimeout = null;
            return;
        }
        // If the event was throttled and we haven't scheduled a retry yet.
        if (!this._refreshRetryTimeout) {
            this._refreshRetryTimeout = setTimeout(() => this.refresh(), 500);
        }
    }
    viewSource() {
        if (!this.currentSelectedElement) {
            return;
        }
        this._appOperations.viewSource(this.currentSelectedElement.position);
    }
    handleSelectDomElement(node) {
        this._appOperations.selectDomElement(node.position);
    }
    highlight(node) {
        if (!node.original.component) {
            return;
        }
        this._messageBus.emit('createHighlightOverlay', [node.position]);
    }
    unhighlight() {
        this._messageBus.emit('removeHighlightOverlay');
    }
    _constructViewQuery() {
        if (!this._clickedElement) {
            return;
        }
        return {
            selectedElement: this._clickedElement.position,
            propertyQuery: this._getPropertyQuery(),
        };
    }
    _getPropertyQuery() {
        // Here we handle the case when a given element has already been selected.
        // We check if we're dealing with the same instance (i.e., if we have the same
        // set of directives and component on it), if we do, we want to get the same
        // set of properties which are already expanded.
        if (!this._clickedElement ||
            !this.currentSelectedElement ||
            !sameDirectives(this._clickedElement, this.currentSelectedElement)) {
            return {
                type: PropertyQueryTypes.All,
            };
        }
        return {
            type: PropertyQueryTypes.Specified,
            properties: this._propResolver.getExpandedProperties() || {},
        };
    }
    highlightComponent(position) {
        this._messageBus.emit('createHighlightOverlay', [position]);
    }
    removeComponentHighlight() {
        this._messageBus.emit('removeHighlightOverlay');
    }
    handleSelect(node) {
        this.directiveForest.handleSelect(node);
    }
    handleSetParents(parents) {
        this.parents = parents;
        this._cdr.detectChanges();
    }
    inspect({ node, directivePosition }) {
        const objectPath = constructPathOfKeysToPropertyValue(node.prop);
        this._appOperations.inspect(directivePosition, objectPath);
    }
}
DirectiveExplorerComponent.ɵfac = function DirectiveExplorerComponent_Factory(t) { return new (t || DirectiveExplorerComponent)(i0.ɵɵdirectiveInject(ApplicationOperations), i0.ɵɵdirectiveInject(i2.MessageBus), i0.ɵɵdirectiveInject(ElementPropertyResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
DirectiveExplorerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectiveExplorerComponent, selectors: [["ng-directive-explorer"]], viewQuery: function DirectiveExplorerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(SplitComponent, 7, ElementRef);
        i0.ɵɵviewQuery(_c0$5, 7, ElementRef);
        i0.ɵɵviewQuery(DirectiveForestComponent, 5);
        i0.ɵɵviewQuery(BreadcrumbsComponent, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splitElementRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.directiveForestSplitArea = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.directiveForest = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.breadcrumbs = _t.first);
    } }, outputs: { toggleInspector: "toggleInspector" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: ElementPropertyResolver,
                useClass: ElementPropertyResolver,
            },
        ])], decls: 11, vars: 8, consts: [["unit", "percent", 3, "direction", "gutterSize"], ["size", "60"], ["directiveForestSplitArea", ""], ["direction", "vertical", "unit", "pixel", 3, "gutterSize", "disabled"], ["size", "*"], [3, "forest", "currentSelectedElement", "selectNode", "selectDomElement", "setParents", "highlightComponent", "removeComponentHighlight", "toggleInspector"], ["size", "22"], [3, "parents", "mouseLeaveNode", "mouseOverNode", "handleSelect", 4, "ngIf"], ["size", "40", "minSize", "25"], [1, "property-tab-wrapper"], [3, "currentSelectedElement", "inspect", "viewSource"], [3, "parents", "mouseLeaveNode", "mouseOverNode", "handleSelect"]], template: function DirectiveExplorerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "as-split", 0);
        i0.ɵɵelementStart(1, "as-split-area", 1, 2);
        i0.ɵɵelementStart(3, "as-split", 3);
        i0.ɵɵelementStart(4, "as-split-area", 4);
        i0.ɵɵelementStart(5, "ng-directive-forest", 5);
        i0.ɵɵlistener("selectNode", function DirectiveExplorerComponent_Template_ng_directive_forest_selectNode_5_listener($event) { return ctx.handleNodeSelection($event); })("selectDomElement", function DirectiveExplorerComponent_Template_ng_directive_forest_selectDomElement_5_listener($event) { return ctx.handleSelectDomElement($event); })("setParents", function DirectiveExplorerComponent_Template_ng_directive_forest_setParents_5_listener($event) { return ctx.handleSetParents($event); })("highlightComponent", function DirectiveExplorerComponent_Template_ng_directive_forest_highlightComponent_5_listener($event) { return ctx.highlightComponent($event); })("removeComponentHighlight", function DirectiveExplorerComponent_Template_ng_directive_forest_removeComponentHighlight_5_listener() { return ctx.removeComponentHighlight(); })("toggleInspector", function DirectiveExplorerComponent_Template_ng_directive_forest_toggleInspector_5_listener() { return ctx.toggleInspector.emit(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "as-split-area", 6);
        i0.ɵɵtemplate(7, DirectiveExplorerComponent_ng_breadcrumbs_7_Template, 1, 1, "ng-breadcrumbs", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "as-split-area", 8);
        i0.ɵɵelementStart(9, "div", 9);
        i0.ɵɵelementStart(10, "ng-property-tab", 10);
        i0.ɵɵlistener("inspect", function DirectiveExplorerComponent_Template_ng_property_tab_inspect_10_listener($event) { return ctx.inspect($event); })("viewSource", function DirectiveExplorerComponent_Template_ng_property_tab_viewSource_10_listener() { return ctx.viewSource(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("direction", ctx.splitDirection)("gutterSize", 9);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("gutterSize", 9)("disabled", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("forest", ctx.forest)("currentSelectedElement", ctx.currentSelectedElement);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.parents);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
    } }, directives: [SplitComponent, SplitAreaDirective, DirectiveForestComponent, i1$1.NgIf, PropertyTabComponent, BreadcrumbsComponent], styles: ["[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]     as-split-area{overflow-y:hidden}[_nghost-%COMP%]     .as-split-gutter-icon{display:none}.property-tab-wrapper[_ngcontent-%COMP%]{overflow:auto;height:100%;width:100%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveExplorerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-directive-explorer',
                templateUrl: './directive-explorer.component.html',
                styleUrls: ['./directive-explorer.component.scss'],
                providers: [
                    {
                        provide: ElementPropertyResolver,
                        useClass: ElementPropertyResolver,
                    },
                ],
            }]
    }], function () { return [{ type: ApplicationOperations }, { type: i2.MessageBus }, { type: ElementPropertyResolver }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { toggleInspector: [{
            type: Output
        }], splitElementRef: [{
            type: ViewChild,
            args: [SplitComponent, { static: true, read: ElementRef }]
        }], directiveForestSplitArea: [{
            type: ViewChild,
            args: ['directiveForestSplitArea', { static: true, read: ElementRef }]
        }], directiveForest: [{
            type: ViewChild,
            args: [DirectiveForestComponent]
        }], breadcrumbs: [{
            type: ViewChild,
            args: [BreadcrumbsComponent]
        }] }); })();

class ApplicationEnvironment {
}

function ProfilerImportDialogComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵtext(2, " Error ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, " Could not process uploaded file. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 4);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 5);
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵtext(10, " Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.data.errorMessage, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mat-dialog-close", false);
} }
function ProfilerImportDialogComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h1", 2);
    i0.ɵɵtext(2, " Warning ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, " The file you are attempting to upload was recorded in a different format than the one supported by your current Angular DevTools version ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, " Current format version: ");
    i0.ɵɵelementStart(8, "span", 7);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11, " Format version of uploaded file: ");
    i0.ɵɵelementStart(12, "span", 8);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15, " Files recorded in older versions may no longer be compatible. Do you wish to continue? ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 5);
    i0.ɵɵelementStart(17, "button", 6);
    i0.ɵɵtext(18, " No Thanks ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 6);
    i0.ɵɵtext(20, " Yes ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.data.profilerVersion);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.data.importedVersion);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("mat-dialog-close", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mat-dialog-close", true);
} }
class ProfilerImportDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
ProfilerImportDialogComponent.ɵfac = function ProfilerImportDialogComponent_Factory(t) { return new (t || ProfilerImportDialogComponent)(i0.ɵɵdirectiveInject(i1$3.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
ProfilerImportDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilerImportDialogComponent, selectors: [["ng-profiler-import-dialog"]], decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "error"], ["mat-dialog-actions", ""], ["mat-flat-button", "", 3, "mat-dialog-close"], [1, "version", "profiler-version"], [1, "version", "imported-version"]], template: function ProfilerImportDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, ProfilerImportDialogComponent_ng_container_1_Template, 11, 2, "ng-container", 1);
        i0.ɵɵtemplate(2, ProfilerImportDialogComponent_ng_container_2_Template, 21, 4, "ng-container", 1);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.data.status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "ERROR");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "INVALID_VERSION");
    } }, directives: [i1$1.NgSwitch, i1$1.NgSwitchCase, i1$3.MatDialogTitle, i1$3.MatDialogContent, i1$3.MatDialogActions, i3.MatButton, i1$3.MatDialogClose], styles: [".version[_ngcontent-%COMP%]{font-weight:400;font-size:16px}.profiler-version[_ngcontent-%COMP%]{color:#388e3c}.error[_ngcontent-%COMP%], .imported-version[_ngcontent-%COMP%]{color:#d32f2f}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilerImportDialogComponent, [{
        type: Component,
        args: [{
                selector: 'ng-profiler-import-dialog',
                templateUrl: './profiler-import-dialog.component.html',
                styleUrls: ['./profiler-import-dialog.component.scss'],
            }]
    }], function () { return [{ type: i1$3.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * @param date to convert to a compact ISO8601 format
 * @return date in a compact ISO8601 format
 */
const toISO8601Compact = (date) => {
    /*
     * @param x an integer to append a leading 0 to if less than 9
     * @return x with a leading 0 appended if less than 9
     */
    function leadZero(x) {
        return (x > 9 ? '' : '0') + x;
    }
    return (date.getFullYear() +
        leadZero(date.getMonth() + 1) +
        leadZero(date.getDate()) +
        'T' +
        leadZero(date.getHours()) +
        leadZero(date.getMinutes()) +
        leadZero(date.getSeconds()));
};

class FileApiService {
    constructor() {
        this.uploadedData = new Subject();
    }
    publishFileUpload(parentEvent) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                this.uploadedData.next(JSON.parse(event.target.result));
            }
            catch (e) {
                this.uploadedData.next({ error: e });
            }
            parentEvent.target.value = '';
        };
        reader.readAsText(parentEvent.target.files[0]);
    }
    saveObjectAsJSON(object) {
        const downloadLink = document.createElement('a');
        downloadLink.download = `NgDevTools-Profile-${toISO8601Compact(new Date())}.json`;
        downloadLink.href = URL.createObjectURL(new Blob([JSON.stringify(object)], { type: 'application/json' }));
        downloadLink.click();
        setTimeout(() => URL.revokeObjectURL(downloadLink.href));
    }
}
FileApiService.ɵfac = function FileApiService_Factory(t) { return new (t || FileApiService)(); };
FileApiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FileApiService, factory: FileApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

const mergeProperty = (mergeInProp, value) => {
    if (mergeInProp === undefined) {
        return value;
    }
    if (value === undefined) {
        return mergeInProp;
    }
    return mergeInProp + value;
};
const mergeDirective = (mergeIn, second) => {
    mergeIn.changeDetection = mergeProperty(mergeIn.changeDetection, second.changeDetection);
    Object.keys(mergeIn.lifecycle).forEach((hook) => {
        mergeIn.lifecycle[hook] = mergeProperty(mergeIn.lifecycle[hook], second.lifecycle[hook]);
    });
};
const mergeDirectives = (mergeIn, second) => {
    for (let i = 0; i < second.length; i++) {
        if (!mergeIn[i]) {
            mergeIn[i] = {
                children: [],
                directives: [],
            };
        }
        second[i].directives.forEach((d, idx) => {
            const mergeInDirective = mergeIn[i].directives[idx];
            if (mergeInDirective && mergeInDirective.name === d.name) {
                mergeDirective(mergeInDirective, d);
            }
            else {
                mergeIn[i].directives.push(d);
            }
        });
        mergeDirectives(mergeIn[i].children, second[i].children);
    }
};
const mergeFrame = (mergeIn, second) => {
    mergeIn.duration += second.duration;
    mergeIn.source = '';
    mergeDirectives(mergeIn.directives, second.directives);
};
const mergeFrames = (frames) => {
    if (!frames || !frames.length) {
        return null;
    }
    const first = JSON.parse(JSON.stringify(frames[0]));
    for (let i = 1; i < frames.length; i++) {
        mergeFrame(first, frames[i]);
    }
    return first;
};

function TimelineComponent_ng_recording_modal_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ng-recording-modal");
} }
function TimelineComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "There's no information to show.");
    i0.ɵɵelementEnd();
} }
function TimelineComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Select a bar to preview a particular change detection cycle.");
    i0.ɵɵelementEnd();
} }
function TimelineComponent_ng_timeline_visualizer_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ng-timeline-visualizer", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("visualizationMode", ctx_r3.visualizationMode)("frame", ctx_r3.frame)("changeDetection", ctx_r3.changeDetection);
} }
var VisualizationMode;
(function (VisualizationMode) {
    VisualizationMode[VisualizationMode["FlameGraph"] = 0] = "FlameGraph";
    VisualizationMode[VisualizationMode["TreeMap"] = 1] = "TreeMap";
    VisualizationMode[VisualizationMode["BarGraph"] = 2] = "BarGraph";
})(VisualizationMode || (VisualizationMode = {}));
const MAX_HEIGHT = 50;
class TimelineComponent {
    constructor() {
        this.exportProfile = new EventEmitter();
        this.visualizationMode = VisualizationMode.BarGraph;
        this.changeDetection = false;
        this.frame = null;
        this._maxDuration = -Infinity;
        this._allRecords = [];
        this._graphDataSubject = new BehaviorSubject([]);
        this.visualizing = false;
        this.graphData$ = this._graphDataSubject.asObservable().pipe(share());
    }
    set stream(data) {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._allRecords = [];
        this._maxDuration = -Infinity;
        this._subscription = data.subscribe({
            next: (frames) => {
                this._processFrames(frames);
            },
            complete: () => {
                this.visualizing = true;
            },
        });
    }
    selectFrames({ indexes }) {
        this.frame = mergeFrames(indexes.map((index) => this._allRecords[index]));
    }
    get hasFrames() {
        return this._allRecords.length > 0;
    }
    estimateFrameRate(timeSpent) {
        const multiplier = Math.max(Math.ceil(timeSpent / 16) - 1, 0);
        return Math.floor(60 / Math.pow(2, multiplier));
    }
    getColorByFrameRate(framerate) {
        if (framerate >= 60) {
            return '#5cadd3';
        }
        else if (framerate < 60 && framerate >= 30) {
            return '#8a1882';
        }
        else if (framerate < 30 && framerate >= 15) {
            return '#9b4807';
        }
        return '#ce271e';
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    _processFrames(frames) {
        let regenerate = false;
        for (const frame of frames) {
            if (frame.duration >= this._maxDuration) {
                regenerate = true;
            }
            this._allRecords.push(frame);
        }
        if (regenerate) {
            this._graphDataSubject.next(this._generateBars());
            return;
        }
        const multiplicationFactor = parseFloat((MAX_HEIGHT / this._maxDuration).toFixed(2));
        frames.forEach((frame) => this._graphDataSubject.value.push(this._getBarStyles(frame, multiplicationFactor)));
        // We need to pass a new reference, because the CDK virtual scroll
        // has OnPush strategy, so it doesn't update the UI otherwise.
        // If this turns out ot be a bottleneck, we can easily create an immutable reference.
        this._graphDataSubject.next(this._graphDataSubject.value.slice());
    }
    _generateBars() {
        const maxValue = this._allRecords.reduce((acc, frame) => Math.max(acc, frame.duration), 0);
        const multiplicationFactor = parseFloat((MAX_HEIGHT / maxValue).toFixed(2));
        this._maxDuration = Math.max(this._maxDuration, maxValue);
        return this._allRecords.map((r) => this._getBarStyles(r, multiplicationFactor));
    }
    _getBarStyles(record, multiplicationFactor) {
        const height = record.duration * multiplicationFactor;
        const colorPercentage = Math.max(10, Math.round((height / MAX_HEIGHT) * 100));
        const backgroundColor = this.getColorByFrameRate(this.estimateFrameRate(record.duration));
        const style = {
            'background-image': `-webkit-linear-gradient(bottom, ${backgroundColor} ${colorPercentage}%, transparent ${colorPercentage}%)`,
            cursor: 'pointer',
            'min-width': '25px',
            width: '25px',
            height: '50px',
        };
        const toolTip = `${record.source} TimeSpent: ${record.duration.toFixed(3)}ms`;
        return { style, toolTip };
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimelineComponent, selectors: [["ng-recording-timeline"]], inputs: { stream: "stream" }, outputs: { exportProfile: "exportProfile" }, decls: 7, vars: 15, consts: [[4, "ngIf"], ["class", "info", 4, "ngIf"], [2, "margin", "10px", "height", "100%"], [3, "record", "empty", "frameColor", "estimatedFrameRate", "visualizationMode", "changeDetection", "changeVisualizationMode", "exportProfile", "toggleChangeDetection"], [3, "graphData$", "selectFrames"], [3, "visualizationMode", "frame", "changeDetection", 4, "ngIf"], [1, "info"], [3, "visualizationMode", "frame", "changeDetection"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TimelineComponent_ng_recording_modal_0_Template, 1, 0, "ng-recording-modal", 0);
        i0.ɵɵtemplate(1, TimelineComponent_p_1_Template, 2, 0, "p", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "ng-timeline-controls", 3);
        i0.ɵɵlistener("changeVisualizationMode", function TimelineComponent_Template_ng_timeline_controls_changeVisualizationMode_3_listener($event) { return ctx.visualizationMode = $event; })("exportProfile", function TimelineComponent_Template_ng_timeline_controls_exportProfile_3_listener($event) { return ctx.exportProfile.emit($event); })("toggleChangeDetection", function TimelineComponent_Template_ng_timeline_controls_toggleChangeDetection_3_listener($event) { return ctx.changeDetection = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ng-frame-selector", 4);
        i0.ɵɵlistener("selectFrames", function TimelineComponent_Template_ng_frame_selector_selectFrames_4_listener($event) { return ctx.selectFrames($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TimelineComponent_p_5_Template, 2, 0, "p", 1);
        i0.ɵɵtemplate(6, TimelineComponent_ng_timeline_visualizer_6_Template, 1, 3, "ng-timeline-visualizer", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.hasFrames && !ctx.visualizing);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hasFrames && ctx.visualizing);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("hidden", !ctx.hasFrames);
        i0.ɵɵproperty("record", ctx.frame)("empty", !ctx.hasFrames)("frameColor", ctx.getColorByFrameRate(ctx.estimateFrameRate(ctx.frame == null ? null : ctx.frame.duration)))("estimatedFrameRate", ctx.estimateFrameRate(ctx.frame == null ? null : ctx.frame.duration))("visualizationMode", ctx.visualizationMode)("changeDetection", ctx.changeDetection);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", !ctx.hasFrames);
        i0.ɵɵproperty("graphData$", ctx.graphData$);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasFrames && !ctx.frame);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasFrames && ctx.frame);
    } }, styles: ["[_nghost-%COMP%]{font-size:11px;width:100%;height:100%;display:block}.info[_ngcontent-%COMP%]{margin-top:16px;font-size:1.2em;text-align:center}.hidden[_ngcontent-%COMP%]{visibility:hidden}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimelineComponent, [{
        type: Component,
        args: [{
                selector: 'ng-recording-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss'],
            }]
    }], null, { stream: [{
            type: Input
        }], exportProfile: [{
            type: Output
        }] }); })();

function ProfilerComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ProfilerComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.startRecording(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, " circle ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProfilerComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function ProfilerComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.stopRecording(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, " circle ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProfilerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function ProfilerComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.discardRecording(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, " not_interested ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function ProfilerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "ng-recording-timeline", 12);
    i0.ɵɵlistener("exportProfile", function ProfilerComponent_div_16_Template_ng_recording_timeline_exportProfile_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.exportProfilerResults(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("stream", ctx_r3.stream);
} }
const SUPPORTED_VERSIONS = [1];
const PROFILER_VERSION = 1;
class ProfilerComponent {
    constructor(_fileApiService, _messageBus, dialog) {
        this._fileApiService = _fileApiService;
        this._messageBus = _messageBus;
        this.dialog = dialog;
        this.state = 'idle';
        this.stream = new Subject();
        // We collect this buffer so we can have it available for export.
        this._buffer = [];
    }
    startRecording() {
        this.state = 'recording';
        this._messageBus.emit('startProfiling');
    }
    stopRecording() {
        this.state = 'visualizing';
        this._messageBus.emit('stopProfiling');
        this.stream.complete();
    }
    ngOnInit() {
        this._messageBus.on('profilerResults', (remainingRecords) => {
            if (remainingRecords.duration > 0 && remainingRecords.source) {
                this.stream.next([remainingRecords]);
                this._buffer.push(remainingRecords);
            }
        });
        this._messageBus.on('sendProfilerChunk', (chunkOfRecords) => {
            this.stream.next([chunkOfRecords]);
            this._buffer.push(chunkOfRecords);
        });
        this._fileUploadSubscription = this._fileApiService.uploadedData.subscribe((importedFile) => {
            if (importedFile.error) {
                console.error('Could not process uploaded file');
                console.error(importedFile.error);
                this.dialog.open(ProfilerImportDialogComponent, {
                    width: '600px',
                    data: { status: 'ERROR', errorMessage: importedFile.error },
                });
                return;
            }
            if (!SUPPORTED_VERSIONS.includes(importedFile.version)) {
                const processDataDialog = this.dialog.open(ProfilerImportDialogComponent, {
                    width: '600px',
                    data: { importedVersion: importedFile.version, profilerVersion: PROFILER_VERSION, status: 'INVALID_VERSION' },
                });
                processDataDialog.afterClosed().subscribe((result) => {
                    if (result) {
                        this.state = 'visualizing';
                        this._buffer = importedFile.buffer;
                        setTimeout(() => this.stream.next(importedFile.buffer));
                    }
                });
            }
            else {
                this.state = 'visualizing';
                this._buffer = importedFile.buffer;
                setTimeout(() => this.stream.next(importedFile.buffer));
            }
        });
    }
    ngOnDestroy() {
        this._fileUploadSubscription.unsubscribe();
    }
    exportProfilerResults() {
        const fileToExport = {
            version: PROFILER_VERSION,
            buffer: this._buffer,
        };
        this._fileApiService.saveObjectAsJSON(fileToExport);
    }
    importProfilerResults(event) {
        this._fileApiService.publishFileUpload(event);
    }
    discardRecording() {
        this.stream = new Subject();
        this.state = 'idle';
        this._buffer = [];
    }
}
ProfilerComponent.ɵfac = function ProfilerComponent_Factory(t) { return new (t || ProfilerComponent)(i0.ɵɵdirectiveInject(FileApiService), i0.ɵɵdirectiveInject(i2.MessageBus), i0.ɵɵdirectiveInject(i1$3.MatDialog)); };
ProfilerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilerComponent, selectors: [["ng-profiler"]], decls: 17, vars: 10, consts: [[1, "profiler-wrapper"], ["mat-icon-button", "", "color", "primary", "class", "profiler-control start-recording-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "profiler-control recording-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "class", "profiler-control discard-button", 3, "click", 4, "ngIf"], [1, "instructions"], ["type", "file", "placeholder", "Upload file", "accept", ".json", 3, "change"], ["id", "profiler-content-wrapper"], ["class", "visualization", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", 1, "profiler-control", "start-recording-button", 3, "click"], ["mat-icon-button", "", 1, "profiler-control", "recording-button", 3, "click"], ["mat-icon-button", "", "color", "primary", 1, "profiler-control", "discard-button", 3, "click"], [1, "visualization"], [3, "stream", "exportProfile"]], template: function ProfilerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-card");
        i0.ɵɵtemplate(2, ProfilerComponent_button_2_Template, 3, 0, "button", 1);
        i0.ɵɵtemplate(3, ProfilerComponent_button_3_Template, 3, 0, "button", 2);
        i0.ɵɵtemplate(4, ProfilerComponent_button_4_Template, 3, 0, "button", 3);
        i0.ɵɵelementStart(5, "p", 4);
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7, " Click the play button to start a new recording, or upload a json file containing profiler data. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "br");
        i0.ɵɵelementStart(9, "span");
        i0.ɵɵelementStart(10, "input", 5);
        i0.ɵɵlistener("change", function ProfilerComponent_Template_input_change_10_listener($event) { return ctx.importProfilerResults($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "p", 4);
        i0.ɵɵtext(12, " Interact to preview change detection. Clicking stop ends this Profiler recording. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "p", 4);
        i0.ɵɵtext(14, " Click Save Profile to save your recording or click refresh to clear the current recording. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 6);
        i0.ɵɵtemplate(16, ProfilerComponent_div_16_Template, 2, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.state === "idle");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.state === "recording");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.state === "visualizing");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hidden", ctx.state !== "idle");
        i0.ɵɵadvance(6);
        i0.ɵɵclassProp("hidden", ctx.state !== "recording");
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("hidden", ctx.state !== "visualizing");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.state !== "idle");
    } }, directives: [i1.MatCard, i1$1.NgIf, i3.MatButton, i2$1.MatIcon, TimelineComponent], styles: [".profiler-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{font-size:1em;width:100%;height:calc(100% - 30px)}.mat-card[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid rgba(0,0,0,.12);height:wrap-content;margin:0!important;padding:5px!important;box-shadow:none!important;border-radius:0}.mat-icon[_ngcontent-%COMP%]{font-size:18px}.profiler-control[_ngcontent-%COMP%]{cursor:pointer}.profiler-control.recording-button[_ngcontent-%COMP%]{color:#d83c34}.instructions[_ngcontent-%COMP%]{margin-bottom:0!important;align-self:center}.instructions.hidden[_ngcontent-%COMP%]{display:none}.instructions[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .instructions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:5px;font-size:1em;cursor:pointer}#profiler-content-wrapper[_ngcontent-%COMP%]{width:100%;position:relative;overflow:hidden}#profiler-content-wrapper[_ngcontent-%COMP%], .recording[_ngcontent-%COMP%]{margin:0;height:calc(100% - 24px)}.visualization[_ngcontent-%COMP%]{margin:0;height:100%}.dark-theme[_nghost-%COMP%]   .profiler-control.recording-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .profiler-control.recording-button[_ngcontent-%COMP%]{color:#ff625a}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-profiler',
                templateUrl: './profiler.component.html',
                styleUrls: ['./profiler.component.scss'],
            }]
    }], function () { return [{ type: FileApiService }, { type: i2.MessageBus }, { type: i1$3.MatDialog }]; }, null); })();

const _c0$4 = ["svgContainer"];
const _c1$1 = ["mainGroup"];
class RouterTreeComponent {
    constructor(_messageBus) {
        this._messageBus = _messageBus;
        this._routes = [];
    }
    set routes(routes) {
        this._routes = routes;
        this.render();
    }
    ngAfterViewInit() {
        this._messageBus.emit('getRoutes');
    }
    render() {
        var _a, _b;
        if (this._routes.length === 0 || !this.g) {
            return;
        }
        // cleanup old render
        (_b = (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.remove) === null || _b === void 0 ? void 0 : _b.call(_a);
        d3.select(this.g.nativeElement).selectAll('*').remove();
        this.tree = d3.tree();
        const svg = d3.select(this.svgContainer.nativeElement);
        svg.attr('height', 500).attr('width', 500);
        const g = d3.select(this.g.nativeElement);
        const svgPadding = 20;
        // Compute the new tree layout.
        this.tree.nodeSize([75, 200]);
        const root = this._routes[0];
        const nodes = this.tree(d3.hierarchy(root.children.length === 0 || root.children.length > 1 ? root : root.children[0], (d) => d.children));
        // Define the div for the tooltip
        this.tooltip = d3.select('body').append('div').attr('class', 'tooltip').style('opacity', 0).style('padding', '0');
        g.selectAll('.link')
            .data(nodes.descendants().slice(1))
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('d', (d) => `
            M${d.y},${d.x}
            C${(d.y + d.parent.y) / 2},
              ${d.x} ${(d.y + d.parent.y) / 2},
              ${d.parent.x} ${d.parent.y},
              ${d.parent.x}`);
        // Declare the nodes
        const node = g
            .selectAll('g.node')
            .data(nodes.descendants())
            .enter()
            .append('g')
            .attr('class', 'node')
            .on('mouseover', (n) => {
            const content = `
          <b>Name:</b> ${n.data.name}<br/>
          <b>Path:</b> ${n.data.path}<br/>
          <b>Auxiliary Route:</b> ${n.data.isAux}<br/>
          <b>Specificity:</b> ${n.data.specificity}<br/>
          <b>Handler:</b> ${n.data.handler}<br/>
        `;
            this.tooltip.style('padding', '4px 8px').transition().style('opacity', 0.9);
            this.tooltip
                .html(content)
                .style('left', d3.event.pageX + 8 + 'px')
                .style('top', d3.event.pageY + 8 + 'px');
        })
            .on('mouseout', () => this.tooltip.transition().style('opacity', 0))
            .attr('transform', (d) => `translate(${d.y},${d.x})`);
        node
            .append('circle')
            .attr('class', (d) => (d.data.isAux ? 'node-aux-route' : 'node-route'))
            .attr('r', 6);
        node
            .append('text')
            .attr('dy', (d) => (d.depth === 0 || !d.children ? '0.35em' : '-1.50em'))
            .attr('dx', (d) => {
            if (d.parent && d.children) {
                return 6;
            }
            else if (!d.parent && d.children) {
                return -13;
            }
            else if (d.parent && !d.children) {
                return 13;
            }
        })
            .attr('text-anchor', (d) => (d.children ? 'end' : 'start'))
            .text((d) => {
            const label = d.data.name;
            return label.length > 20 ? label.slice(0, 17) + '...' : label;
        });
        // reset transform
        g.attr('transform', 'translate(0, 0)');
        const svgRect = this.svgContainer.nativeElement.getBoundingClientRect();
        const gElRect = this.g.nativeElement.getBoundingClientRect();
        g.attr('transform', `translate(
        ${svgRect.left - gElRect.left + svgPadding},
        ${svgRect.top - gElRect.top + svgPadding}
      )`);
        const height = gElRect.height + svgPadding * 2;
        const width = gElRect.width + svgPadding * 2;
        svg.attr('height', height).attr('width', width);
    }
}
RouterTreeComponent.ɵfac = function RouterTreeComponent_Factory(t) { return new (t || RouterTreeComponent)(i0.ɵɵdirectiveInject(i2.MessageBus)); };
RouterTreeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RouterTreeComponent, selectors: [["ng-router-tree"]], viewQuery: function RouterTreeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$4, 7);
        i0.ɵɵviewQuery(_c1$1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.svgContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.g = _t.first);
    } }, inputs: { routes: "routes" }, decls: 8, vars: 2, consts: [[1, "router-tree-wrapper"], [1, "no-routes", 3, "hidden"], [1, "svg-container", 3, "hidden"], ["svgContainer", ""], ["mainGroup", ""]], template: function RouterTreeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h1");
        i0.ɵɵtext(3, " There are no routes to display. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(4, "svg", 2, 3);
        i0.ɵɵelement(6, "g", null, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", (ctx.routes == null ? null : ctx.routes.length) !== 0);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("hidden", (ctx.routes == null ? null : ctx.routes.length) === 0);
    } }, styles: [".router-tree-wrapper[_ngcontent-%COMP%]{font-size:1em;width:100%;height:100%;overflow-x:auto}.no-routes[_ngcontent-%COMP%]{padding-top:1rem;text-align:center;color:#b0b0b0}.svg-container[_ngcontent-%COMP%]{max-height:inherit}  .tooltip{position:absolute;background:#ebf1fb;border:0;border-radius:2px;pointer-events:none;font-family:Roboto,Helvetica Neue,sans-serif;font-size:.8rem;line-height:1.25rem}[_nghost-%COMP%]     .link{stroke:#9b9b9b;stroke-width:1px;fill:none}[_nghost-%COMP%]     .node{cursor:pointer}[_nghost-%COMP%]     .node-route{stroke:#f05057;fill:#fff0f0;stroke-width:1px}[_nghost-%COMP%]     .node-route.selected, [_nghost-%COMP%]     .node-route:hover{fill:#f05057}[_nghost-%COMP%]     .node-aux-route{stroke:#2828ab;fill:#ebf2fc;stroke-width:1px}[_nghost-%COMP%]     .node-aux-route.selected, [_nghost-%COMP%]     .node-aux-route:hover{fill:#2828ab}[_nghost-%COMP%]     text{fill:#000;font-weight:300}.dark-theme[_nghost-%COMP%]     .link, .dark-theme   [_nghost-%COMP%]     .link{stroke:#bcc5ce;stroke-width:1px;fill:none}.dark-theme[_nghost-%COMP%]     .node-route, .dark-theme   [_nghost-%COMP%]     .node-route{stroke:#54c9bd;fill:#202124}.dark-theme[_nghost-%COMP%]     .node-route.selected, .dark-theme   [_nghost-%COMP%]     .node-route.selected, .dark-theme[_nghost-%COMP%]     .node-route:hover, .dark-theme   [_nghost-%COMP%]     .node-route:hover{fill:#54c9bd}.dark-theme[_nghost-%COMP%]     .node-aux-route, .dark-theme   [_nghost-%COMP%]     .node-aux-route{stroke:#2828ab;fill:#ebf2fc}.dark-theme[_nghost-%COMP%]     .node-aux-route.selected, .dark-theme   [_nghost-%COMP%]     .node-aux-route.selected, .dark-theme[_nghost-%COMP%]     .node-aux-route:hover, .dark-theme   [_nghost-%COMP%]     .node-aux-route:hover{fill:#2828ab}.dark-theme[_nghost-%COMP%]     text, .dark-theme   [_nghost-%COMP%]     text{fill:#bcc5ce}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouterTreeComponent, [{
        type: Component,
        args: [{
                selector: 'ng-router-tree',
                templateUrl: './router-tree.component.html',
                styleUrls: ['./router-tree.component.scss'],
            }]
    }], function () { return [{ type: i2.MessageBus }]; }, { svgContainer: [{
            type: ViewChild,
            args: ['svgContainer', { static: true }]
        }], g: [{
            type: ViewChild,
            args: ['mainGroup', { static: true }]
        }], routes: [{
            type: Input
        }] }); })();

/// <reference types="resize-observer-browser" />
const _c0$3 = ["navBar"];
function DevToolsTabsComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵlistener("click", function DevToolsTabsComponent_a_12_Template_a_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const tab_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changeTab(tab_r4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r1.activeTab === tab_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tab_r4, " ");
} }
function DevToolsTabsComponent_section_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sha_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" | DevTools SHA: ", sha_r8, " ");
} }
function DevToolsTabsComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 16);
    i0.ɵɵtext(1, " Angular version: ");
    i0.ɵɵelementStart(2, "span", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DevToolsTabsComponent_section_13_ng_container_4_Template, 2, 1, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.angularVersion, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.latestSHA);
} }
const _c1 = function (a0) { return { "inspector-active": a0 }; };
const _c2 = function (a0) { return { hidden: a0 }; };
class DevToolsTabsComponent {
    constructor(tabUpdate, themeService, _messageBus, _applicationEnvironment) {
        this.tabUpdate = tabUpdate;
        this.themeService = themeService;
        this._messageBus = _messageBus;
        this._applicationEnvironment = _applicationEnvironment;
        this.angularVersion = undefined;
        this.activeTab = 'Components';
        this.inspectorRunning = false;
        this.routerTreeEnabled = false;
        this.routes = [];
    }
    ngOnInit() {
        this._currentThemeSubscription = this.themeService.currentTheme.subscribe((theme) => (this.currentTheme = theme));
        this._messageBus.on('updateRouterTree', (routes) => {
            this.routes = routes || [];
        });
    }
    get tabs() {
        const alwaysShown = ['Components', 'Profiler'];
        return this.routes.length === 0 ? alwaysShown : [...alwaysShown, 'Router Tree'];
    }
    ngAfterViewInit() {
        this.navbar.disablePagination = true;
    }
    ngOnDestroy() {
        this._currentThemeSubscription.unsubscribe();
    }
    get latestSHA() {
        return this._applicationEnvironment.environment.process.env.LATEST_SHA;
    }
    changeTab(tab) {
        this.activeTab = tab;
        this.tabUpdate.notify();
        if (tab === 'Router Tree') {
            this._messageBus.emit('getRoutes');
        }
    }
    toggleInspector() {
        this.toggleInspectorState();
        this.emitInspectorEvent();
    }
    emitInspectorEvent() {
        if (this.inspectorRunning) {
            this._messageBus.emit('inspectorStart');
            this.changeTab('Components');
        }
        else {
            this._messageBus.emit('inspectorEnd');
            this._messageBus.emit('removeHighlightOverlay');
        }
    }
    toggleInspectorState() {
        this.inspectorRunning = !this.inspectorRunning;
    }
    refresh() {
        this.directiveExplorer.refresh();
    }
    toggleTimingAPI(change) {
        change.checked ? this._messageBus.emit('enableTimingAPI') : this._messageBus.emit('disableTimingAPI');
    }
}
DevToolsTabsComponent.ɵfac = function DevToolsTabsComponent_Factory(t) { return new (t || DevToolsTabsComponent)(i0.ɵɵdirectiveInject(TabUpdate), i0.ɵɵdirectiveInject(ThemeService), i0.ɵɵdirectiveInject(i2.MessageBus), i0.ɵɵdirectiveInject(ApplicationEnvironment)); };
DevToolsTabsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevToolsTabsComponent, selectors: [["ng-devtools-tabs"]], viewQuery: function DevToolsTabsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(DirectiveExplorerComponent, 5);
        i0.ɵɵviewQuery(_c0$3, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.directiveExplorer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navbar = _t.first);
    } }, inputs: { angularVersion: "angularVersion" }, decls: 26, vars: 18, consts: [["mat-tab-nav-bar", "", 3, "color"], ["navBar", ""], ["id", "nav-buttons"], ["mat-icon-button", "", "color", "primary", 3, "click"], [3, "ngClass"], ["mat-icon-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["class", "mat-tab-link", "mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["id", "app-angular-version", 4, "ngIf"], [1, "tab-content"], [3, "ngClass", "toggleInspector"], [3, "routes", "ngClass"], [1, "options-menu"], ["menu", "matMenu"], [1, "menu-toggle-button", 3, "change", "click"], [1, "menu-toggle-button", 3, "checked", "change", "click"], ["mat-tab-link", "", 1, "mat-tab-link", 3, "active", "click"], ["id", "app-angular-version"], ["id", "version-number"], [4, "ngIf"]], template: function DevToolsTabsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵlistener("click", function DevToolsTabsComponent_Template_button_click_3_listener() { return ctx.toggleInspector(); });
        i0.ɵɵelementStart(4, "mat-icon", 4);
        i0.ɵɵtext(5, " pin_end ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function DevToolsTabsComponent_Template_button_click_6_listener() { return ctx.refresh(); });
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, " refresh ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 5);
        i0.ɵɵelementStart(10, "mat-icon");
        i0.ɵɵtext(11, " settings ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, DevToolsTabsComponent_a_12_Template, 2, 2, "a", 6);
        i0.ɵɵtemplate(13, DevToolsTabsComponent_section_13_Template, 5, 2, "section", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 8);
        i0.ɵɵelementStart(15, "ng-directive-explorer", 9);
        i0.ɵɵlistener("toggleInspector", function DevToolsTabsComponent_Template_ng_directive_explorer_toggleInspector_15_listener() { return ctx.toggleInspector(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "ng-profiler", 4);
        i0.ɵɵelement(17, "ng-router-tree", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-menu", 11, 12);
        i0.ɵɵelementStart(20, "mat-slide-toggle", 13);
        i0.ɵɵlistener("change", function DevToolsTabsComponent_Template_mat_slide_toggle_change_20_listener($event) { return ctx.toggleTimingAPI($event); })("click", function DevToolsTabsComponent_Template_mat_slide_toggle_click_20_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵtext(21, " Enable timing API ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "br");
        i0.ɵɵelement(23, "br");
        i0.ɵɵelementStart(24, "mat-slide-toggle", 14);
        i0.ɵɵlistener("change", function DevToolsTabsComponent_Template_mat_slide_toggle_change_24_listener($event) { return ctx.themeService.toggleDarkMode($event.checked); })("click", function DevToolsTabsComponent_Template_mat_slide_toggle_click_24_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵtext(25, " Dark Mode ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(19);
        i0.ɵɵproperty("color", "accent");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c1, ctx.inspectorRunning));
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("matMenuTriggerFor", _r3);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.angularVersion);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c2, ctx.activeTab !== "Components"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(14, _c2, ctx.activeTab !== "Profiler"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("routes", ctx.routes)("ngClass", i0.ɵɵpureFunction1(16, _c2, ctx.activeTab !== "Router Tree"));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("checked", ctx.currentTheme === "dark-theme");
    } }, directives: [i5.MatTabNav, i3.MatButton, i2$1.MatIcon, i1$1.NgClass, i9.MatMenuTrigger, i1$1.NgForOf, i1$1.NgIf, DirectiveExplorerComponent, ProfilerComponent, RouterTreeComponent, i9.MatMenu, i13.MatSlideToggle, i5.MatTabLink], styles: ["[_nghost-%COMP%]{position:relative;width:100%;height:100%;display:block}.hidden[_ngcontent-%COMP%]{display:none}.tab-content[_ngcontent-%COMP%]{height:calc(100% - 31px)}#nav-buttons[_ngcontent-%COMP%]{display:flex}.inspector-active[_ngcontent-%COMP%]{color:#1a73e8!important}#app-angular-version[_ngcontent-%COMP%]{align-self:center;margin-left:auto;margin-right:8px;font-size:.8em;font-weight:700;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#version-number[_ngcontent-%COMP%]{color:#1b1aa5;cursor:text;-moz-user-select:text;-webkit-user-select:text;user-select:text}button.mat-icon-button[_ngcontent-%COMP%]{height:30px;width:30px;line-height:30px;margin-right:0}mat-icon[_ngcontent-%COMP%]{font-size:16px}.mat-tab-link[_ngcontent-%COMP%]{min-width:unset;line-height:30px;height:30px;font-size:13px;padding:0 10px;opacity:1}  .options-menu{padding:1rem 1.25rem}  body.dark-theme .menu-toggle-button{color:#fff}.menu-toggle-button[_ngcontent-%COMP%]{font-size:.7em;font-weight:500;color:#777}.dark-theme[_nghost-%COMP%]   #version-number[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   #version-number[_ngcontent-%COMP%]{color:#5caace}.dark-theme[_nghost-%COMP%]   .inspector-active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .inspector-active[_ngcontent-%COMP%]{color:#4688f1!important}.light-theme[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}@media only screen and (max-width:700px){#app-angular-version[_ngcontent-%COMP%]{max-width:135px}}@media only screen and (max-width:420px){#app-angular-version[_ngcontent-%COMP%]{display:none}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsTabsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-devtools-tabs',
                templateUrl: './devtools-tabs.component.html',
                styleUrls: ['./devtools-tabs.component.scss'],
            }]
    }], function () { return [{ type: TabUpdate }, { type: ThemeService }, { type: i2.MessageBus }, { type: ApplicationEnvironment }]; }, { angularVersion: [{
            type: Input
        }], directiveExplorer: [{
            type: ViewChild,
            args: [DirectiveExplorerComponent]
        }], navbar: [{
            type: ViewChild,
            args: ['navBar', { static: true }]
        }] }); })();

function DevToolsComponent_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ng-devtools-tabs", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("@enterAnimation", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("angularVersion", ctx_r6.angularVersion);
} }
function DevToolsComponent_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, " Angular Devtools only supports Angular versions 9 and above with ");
    i0.ɵɵelementStart(2, "a", 9);
    i0.ɵɵtext(3, "ivy");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " enabled. ");
    i0.ɵɵelementEnd();
} }
function DevToolsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DevToolsComponent_ng_container_1_ng_container_1_div_1_Template, 2, 2, "div", 4);
    i0.ɵɵtemplate(2, DevToolsComponent_ng_container_1_ng_container_1_ng_template_2_Template, 5, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(3);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.supportedVersion)("ngIfElse", _r7);
} }
function DevToolsComponent_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1, " We detected an application built with production configuration. Angular DevTools only supports development builds. ");
    i0.ɵɵelementEnd();
} }
function DevToolsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DevToolsComponent_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 1);
    i0.ɵɵtemplate(2, DevToolsComponent_ng_container_1_ng_template_2_Template, 2, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.angularIsInDevMode)("ngIfElse", _r4);
} }
function DevToolsComponent_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p", 8);
    i0.ɵɵtext(2, " Angular application not detected. ");
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DevToolsComponent_ng_template_2_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "div", 14);
    i0.ɵɵelementEnd();
} }
function DevToolsComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DevToolsComponent_ng_template_2_ng_template_1_div_0_Template, 2, 0, "div", 12);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r11.angularExists === null);
} }
function DevToolsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DevToolsComponent_ng_template_2_ng_container_0_Template, 5, 0, "ng-container", 1);
    i0.ɵɵtemplate(1, DevToolsComponent_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r10 = i0.ɵɵreference(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.angularExists === false)("ngIfElse", _r10);
} }
class DevToolsComponent {
    constructor(_messageBus, _themeService) {
        this._messageBus = _messageBus;
        this._themeService = _themeService;
        this.angularExists = null;
        this.angularVersion = undefined;
        this.angularIsInDevMode = true;
        this._interval$ = interval(500).subscribe((attempt) => {
            if (attempt === 10) {
                this.angularExists = false;
            }
            this._messageBus.emit('queryNgAvailability');
        });
    }
    ngOnInit() {
        this._themeService.initializeThemeWatcher();
        this._messageBus.once('ngAvailability', ({ version, devMode, ivy }) => {
            this.angularExists = !!version;
            this.angularVersion = version;
            this.angularIsInDevMode = devMode;
            this.ivy = ivy;
            this._interval$.unsubscribe();
        });
    }
    get majorAngularVersion() {
        if (!this.angularVersion) {
            return -1;
        }
        return parseInt(this.angularVersion.toString().split('.')[0], 10);
    }
    get supportedVersion() {
        return (this.majorAngularVersion >= 9 || this.majorAngularVersion === 0) && this.ivy;
    }
    ngOnDestroy() {
        this._interval$.unsubscribe();
    }
}
DevToolsComponent.ɵfac = function DevToolsComponent_Factory(t) { return new (t || DevToolsComponent)(i0.ɵɵdirectiveInject(i2.MessageBus), i0.ɵɵdirectiveInject(ThemeService)); };
DevToolsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevToolsComponent, selectors: [["ng-devtools"]], decls: 4, vars: 2, consts: [[1, "mat-typography", "mat-app-background", 2, "height", "100%"], [4, "ngIf", "ngIfElse"], ["errorOrLoading", ""], ["angularIsInProdMode", ""], ["class", "devtools-wrapper noselect", 4, "ngIf", "ngIfElse"], ["notSupported", ""], [1, "devtools-wrapper", "noselect"], [3, "angularVersion"], [1, "text-message"], ["href", "https://angular.io/guide/ivy", "target", "_blank"], ["loading", ""], ["matTooltip", "You see this message because the app is still loading, or this is not an Angular application", 1, "info-icon"], ["class", "initializing", 4, "ngIf"], [1, "initializing"], [1, "loading"]], template: function DevToolsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DevToolsComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
        i0.ɵɵtemplate(2, DevToolsComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.angularExists === true)("ngIfElse", _r1);
    } }, directives: [i1$1.NgIf, DevToolsTabsComponent, i5$1.MatTooltip], styles: ["@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,.2)}to{box-shadow:0 0 0 35px transparent}}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,.2)}to{box-shadow:0 0 0 35px transparent}}@-webkit-keyframes darkmode-pulse{0%{box-shadow:0 0 0 0 #7e2828}to{box-shadow:0 0 0 35px transparent}}@keyframes darkmode-pulse{0%{box-shadow:0 0 0 0 #7e2828}to{box-shadow:0 0 0 35px transparent}}.devtools-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%;display:block}.dark-theme[_nghost-%COMP%]   .devtools-wrapper[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .devtools-wrapper[_ngcontent-%COMP%]{background:#202124}.dark-theme[_nghost-%COMP%]   .initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{-webkit-animation:darkmode-pulse 1s infinite;animation:darkmode-pulse 1s infinite}.noselect[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.initializing[_ngcontent-%COMP%]{margin:auto;width:125px;height:100%;display:flex;align-items:center}.initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 19.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 250 250%22 style%3D%22enable-background%3Anew 0 0 250 250%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill%3A%23DD0031%3B%7D%09.st1%7Bfill%3A%23C3002F%3B%7D%09.st2%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%3E%09%3Cpolygon class%3D%22st0%22 points%3D%22125%2C30 125%2C30 125%2C30 31.9%2C63.2 46.1%2C186.3 125%2C230 125%2C230 125%2C230 203.9%2C186.3 218.1%2C63.2 %09%22%2F%3E%09%3Cpolygon class%3D%22st1%22 points%3D%22125%2C30 125%2C52.2 125%2C52.1 125%2C153.4 125%2C153.4 125%2C230 125%2C230 203.9%2C186.3 218.1%2C63.2 125%2C30 %09%22%2F%3E%09%3Cpath class%3D%22st2%22 d%3D%22M125%2C52.1L66.8%2C182.6h0h21.7h0l11.7-29.2h49.4l11.7%2C29.2h0h21.7h0L125%2C52.1L125%2C52.1L125%2C52.1L125%2C52.1%09%09L125%2C52.1z M142%2C135.4H108l17-40.9L142%2C135.4z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");border-radius:50%;width:125px;height:125px;float:left;text-align:center;-webkit-animation:pulse 1s infinite;animation:pulse 1s infinite}.text-message[_ngcontent-%COMP%]{font-weight:500;font-size:1.2em;padding:5px;text-align:center}.text-message[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{display:inline-block;font-size:1.2em;border-radius:50%;border:3px solid #111;cursor:pointer;width:16px;transform:scale(.9);height:16px;font-weight:700;text-align:center}"], data: { animation: [
            trigger('enterAnimation', [
                transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))]),
                transition(':leave', [style({ opacity: 1 }), animate('200ms', style({ opacity: 0 }))]),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-devtools',
                templateUrl: './devtools.component.html',
                styleUrls: ['./devtools.component.scss'],
                animations: [
                    trigger('enterAnimation', [
                        transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))]),
                        transition(':leave', [style({ opacity: 1 }), animate('200ms', style({ opacity: 0 }))]),
                    ]),
                ],
            }]
    }], function () { return [{ type: i2.MessageBus }, { type: ThemeService }]; }, null); })();

class PropertyViewModule {
}
PropertyViewModule.ɵfac = function PropertyViewModule_Factory(t) { return new (t || PropertyViewModule)(); };
PropertyViewModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PropertyViewModule });
PropertyViewModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatToolbarModule,
            MatIconModule,
            MatTreeModule,
            CommonModule,
            MatExpansionModule,
            DragDropModule,
            FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PropertyViewBodyComponent,
                    PropertyViewHeaderComponent,
                    PropertyViewComponent,
                    PropertyViewTreeComponent,
                    PropertyEditorComponent,
                    PropertyPreviewComponent,
                ],
                imports: [
                    MatToolbarModule,
                    MatIconModule,
                    MatTreeModule,
                    CommonModule,
                    MatExpansionModule,
                    DragDropModule,
                    FormsModule
                ],
                exports: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PropertyViewModule, { declarations: [PropertyViewBodyComponent,
        PropertyViewHeaderComponent,
        PropertyViewComponent,
        PropertyViewTreeComponent,
        PropertyEditorComponent,
        PropertyPreviewComponent], imports: [MatToolbarModule,
        MatIconModule,
        MatTreeModule,
        CommonModule,
        MatExpansionModule,
        DragDropModule,
        FormsModule], exports: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent] }); })();

class PropertyTabModule {
}
PropertyTabModule.ɵfac = function PropertyTabModule_Factory(t) { return new (t || PropertyTabModule)(); };
PropertyTabModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PropertyTabModule });
PropertyTabModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyTabModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PropertyTabComponent,
                    PropertyTabHeaderComponent,
                    PropertyTabBodyComponent,
                    ComponentMetadataComponent,
                ],
                imports: [PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule],
                exports: [PropertyTabComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PropertyTabModule, { declarations: [PropertyTabComponent,
        PropertyTabHeaderComponent,
        PropertyTabBodyComponent,
        ComponentMetadataComponent], imports: [PropertyViewModule, CommonModule, MatButtonModule, MatExpansionModule, MatIconModule], exports: [PropertyTabComponent] }); })();

class DirectiveForestModule {
}
DirectiveForestModule.ɵfac = function DirectiveForestModule_Factory(t) { return new (t || DirectiveForestModule)(); };
DirectiveForestModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DirectiveForestModule });
DirectiveForestModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatCardModule, MatButtonModule, MatIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveForestModule, [{
        type: NgModule,
        args: [{
                declarations: [BreadcrumbsComponent],
                imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
                exports: [BreadcrumbsComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectiveForestModule, { declarations: [BreadcrumbsComponent], imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule], exports: [BreadcrumbsComponent] }); })();

class DirectiveExplorerModule {
}
DirectiveExplorerModule.ɵfac = function DirectiveExplorerModule_Factory(t) { return new (t || DirectiveExplorerModule)(); };
DirectiveExplorerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DirectiveExplorerModule });
DirectiveExplorerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatTreeModule,
            MatCardModule,
            ScrollingModule,
            MatIconModule,
            CommonModule,
            PropertyTabModule,
            MatButtonModule,
            MatSnackBarModule,
            AngularSplitModule,
            DirectiveForestModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveExplorerModule, [{
        type: NgModule,
        args: [{
                declarations: [DirectiveExplorerComponent, DirectiveForestComponent, FilterComponent],
                exports: [DirectiveExplorerComponent],
                imports: [
                    MatTreeModule,
                    MatCardModule,
                    ScrollingModule,
                    MatIconModule,
                    CommonModule,
                    PropertyTabModule,
                    MatButtonModule,
                    MatSnackBarModule,
                    AngularSplitModule,
                    DirectiveForestModule,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectiveExplorerModule, { declarations: [DirectiveExplorerComponent, DirectiveForestComponent, FilterComponent], imports: [MatTreeModule,
        MatCardModule,
        ScrollingModule,
        MatIconModule,
        CommonModule,
        PropertyTabModule,
        MatButtonModule,
        MatSnackBarModule,
        AngularSplitModule,
        DirectiveForestModule], exports: [DirectiveExplorerComponent] }); })();

class RecordFormatter {
    getLabel(element) {
        const name = element.directives
            .filter((d) => d.isComponent)
            .map((c) => c.name)
            .join(', ');
        const attributes = [...new Set(element.directives.filter((d) => !d.isComponent).map((d) => d.name))].join(', ');
        return attributes === '' ? name : `${name}[${attributes}]`;
    }
    getValue(element) {
        let result = 0;
        element.directives.forEach((dir) => {
            result += this.getDirectiveValue(dir);
        });
        return result;
    }
    getDirectiveValue(directive) {
        let result = 0;
        let current = directive.changeDetection;
        if (current === undefined) {
            current = 0;
        }
        result += current;
        Object.keys(directive.lifecycle).forEach((key) => {
            const value = parseFloat(directive.lifecycle[key]);
            if (!isNaN(value)) {
                result += value;
            }
        });
        return result;
    }
}

const ROOT_LEVEL_ELEMENT_LABEL = 'Entire application';
class FlamegraphFormatter extends RecordFormatter {
    formatFrame(frame, showChangeDetection, theme) {
        const result = {
            value: 0,
            label: ROOT_LEVEL_ELEMENT_LABEL,
            children: [],
            instances: 1,
            changeDetected: false,
            original: {
                children: [],
                directives: [],
            },
        };
        if (showChangeDetection) {
            result.color = theme === 'dark-theme' ? CHANGE_DETECTION_COLOR_DARK : CHANGE_DETECTION_COLOR_LIGHT;
        }
        this.addFrame(result.children, frame.directives, showChangeDetection, theme);
        return result;
    }
    addFrame(nodes, elements, showChangeDetection, theme) {
        let timeSpent = 0;
        elements.forEach((element) => {
            // Possibly undefined because of
            // the insertion on the backend.
            if (!element) {
                console.error('Unable to insert undefined element');
                return;
            }
            const changeDetected = didRunChangeDetection(element);
            const node = {
                value: super.getValue(element),
                label: super.getLabel(element),
                children: [],
                instances: 1,
                original: element,
                changeDetected,
            };
            if (showChangeDetection) {
                const CHANGE_DETECTION_COLOR = theme === 'dark-theme' ? CHANGE_DETECTION_COLOR_DARK : CHANGE_DETECTION_COLOR_LIGHT;
                node.color = changeDetected ? CHANGE_DETECTION_COLOR : NO_CHANGE_DETECTION_COLOR;
            }
            timeSpent += this.addFrame(node.children, element.children, showChangeDetection, theme);
            timeSpent += node.value;
            nodes.push(node);
        });
        return timeSpent;
    }
}
const CHANGE_DETECTION_COLOR_LIGHT = '#5cadd3';
const CHANGE_DETECTION_COLOR_DARK = '#073d69';
const NO_CHANGE_DETECTION_COLOR = 'transparent';
const didRunChangeDetection = (profile) => {
    const components = profile.directives.filter((d) => d.isComponent);
    if (!components.length) {
        return false;
    }
    return components.some((c) => c.changeDetection !== undefined);
};

const _c0$2 = function (a0, a1) { return { data: a0, color: a1 }; };
class FlamegraphVisualizerComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.profilerBars = [];
        this.view = [235, 200];
        this._formatter = new FlamegraphFormatter();
        this._showChangeDetection = false;
        this.nodeSelect = new EventEmitter();
    }
    set frame(frame) {
        this._frame = frame;
        this._selectFrame();
    }
    set changeDetection(changeDetection) {
        this._showChangeDetection = changeDetection;
        this._selectFrame();
    }
    ngOnInit() {
        this._currentThemeSubscription = this.themeService.currentTheme.subscribe((theme) => {
            this.currentTheme = theme;
            this.colors =
                theme === 'dark-theme'
                    ? {
                        hue: [210, 90],
                        saturation: [90, 90],
                        lightness: [25, 25],
                    }
                    : {
                        hue: [50, 15],
                        saturation: [100, 100],
                        lightness: [75, 75],
                    };
            this._selectFrame();
        });
    }
    ngOnDestroy() {
        this._currentThemeSubscription.unsubscribe();
    }
    selectFrame(frame) {
        if (frame.label === ROOT_LEVEL_ELEMENT_LABEL) {
            return;
        }
        const flameGraphNode = frame;
        const directiveData = this.formatEntryData(flameGraphNode);
        this.nodeSelect.emit({
            entry: flameGraphNode,
            selectedDirectives: directiveData,
        });
    }
    formatEntryData(flameGraphNode) {
        const graphData = [];
        flameGraphNode.original.directives.forEach((node) => {
            const changeDetection = node.changeDetection;
            if (changeDetection !== undefined) {
                graphData.push({
                    directive: node.name,
                    method: 'changes',
                    value: parseFloat(changeDetection.toFixed(2)),
                });
            }
            Object.keys(node.lifecycle).forEach((key) => {
                graphData.push({
                    directive: node.name,
                    method: key,
                    value: +node.lifecycle[key].toFixed(2),
                });
            });
        });
        return graphData;
    }
    _selectFrame() {
        this.profilerBars = [this._formatter.formatFrame(this._frame, this._showChangeDetection, this.currentTheme)];
    }
}
FlamegraphVisualizerComponent.ɵfac = function FlamegraphVisualizerComponent_Factory(t) { return new (t || FlamegraphVisualizerComponent)(i0.ɵɵdirectiveInject(ThemeService)); };
FlamegraphVisualizerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FlamegraphVisualizerComponent, selectors: [["ng-flamegraph-visualizer"]], inputs: { frame: "frame", changeDetection: "changeDetection" }, outputs: { nodeSelect: "nodeSelect" }, decls: 2, vars: 4, consts: [[1, "level-profile-wrapper"], ["siblingLayout", "equal", 3, "config", "frameClick"]], template: function FlamegraphVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ngx-flamegraph", 1);
        i0.ɵɵlistener("frameClick", function FlamegraphVisualizerComponent_Template_ngx_flamegraph_frameClick_1_listener($event) { return ctx.selectFrame($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("config", i0.ɵɵpureFunction2(1, _c0$2, ctx.profilerBars, ctx.colors));
    } }, directives: [i2$5.NgxFlamegraphComponent], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:flex;-webkit-user-select:text;-moz-user-select:text;user-select:text}[_nghost-%COMP%]   .level-profile-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;cursor:pointer;overflow-y:auto}[_nghost-%COMP%]     .ngx-fg-label{color:rgba(0,0,0,.8705882352941177);font-weight:500;font-size:1em}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#54c9bd}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-rect, .dark-theme   [_nghost-%COMP%]     .ngx-fg-rect{stroke:#303030;transition:none}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-label, .dark-theme   [_nghost-%COMP%]     .ngx-fg-label{color:#bcc5ce}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-svg-g, .dark-theme   [_nghost-%COMP%]     .ngx-fg-svg-g{transition:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FlamegraphVisualizerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-flamegraph-visualizer',
                templateUrl: './flamegraph-visualizer.component.html',
                styleUrls: ['./flamegraph-visualizer.component.scss'],
            }]
    }], function () { return [{ type: ThemeService }]; }, { nodeSelect: [{
            type: Output
        }], frame: [{
            type: Input
        }], changeDetection: [{
            type: Input
        }] }); })();

class BarGraphFormatter extends RecordFormatter {
    formatFrame(frame) {
        const result = [];
        this.addFrame(result, frame.directives);
        return result.filter((element) => element.value > 0).sort((a, b) => b.value - a.value);
    }
    addFrame(nodes, elements, parents = []) {
        let timeSpent = 0;
        elements.forEach((element) => {
            // Possibly undefined because of
            // the insertion on the backend.
            if (!element) {
                console.error('Unable to insert undefined element');
                return;
            }
            timeSpent += this.addFrame(nodes, element.children, parents.concat(element));
            timeSpent += super.getValue(element);
            element.directives.forEach((dir) => {
                const innerNode = {
                    parents,
                    value: super.getDirectiveValue(dir),
                    label: dir.name,
                    original: element,
                };
                nodes.push(innerNode);
            });
        });
        return timeSpent;
    }
}
__decorate([
    memo({ cache: new WeakMap() })
], BarGraphFormatter.prototype, "formatFrame", null);

function BarChartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function BarChartComponent_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.barClick.emit(ctx_r3.originalData[i_r2]); });
    i0.ɵɵelementStart(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bar_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r0.color)("width", bar_r1.value, "%");
    i0.ɵɵproperty("@appear", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", bar_r1.label);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(bar_r1.label);
} }
class BarChartComponent {
    constructor() {
        this.barClick = new EventEmitter();
        this.internalData = [];
    }
    set data(nodes) {
        this.originalData = nodes;
        this.internalData = [];
        const max = nodes.reduce((a, c) => Math.max(a, c.value), -Infinity);
        for (const node of nodes) {
            this.internalData.push({
                label: node.label,
                value: (node.value / max) * 100,
            });
        }
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarChartComponent, selectors: [["ng-bar-chart"]], inputs: { data: "data", color: "color" }, outputs: { barClick: "barClick" }, decls: 2, vars: 2, consts: [[1, "wrapper"], ["class", "bar", 3, "backgroundColor", "width", "click", 4, "ngFor", "ngForOf"], [1, "bar", 3, "click"], [3, "matTooltip"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, BarChartComponent_div_1_Template, 3, 7, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@stagger", undefined);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.internalData);
    } }, directives: [i1$1.NgForOf, i5$1.MatTooltip], styles: [".bar[_ngcontent-%COMP%]{width:0;margin-bottom:7px;align-items:center;display:flex;padding-top:3px;padding-bottom:3px;opacity:.8;cursor:pointer;transition:opacity .3s ease-out,width .3s ease}.bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px;max-width:calc(100% - 20px);display:inline-block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;opacity:1}.bar[_ngcontent-%COMP%]:hover{opacity:1}.wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:calc(100% - 5px);height:100%;display:block}.dark-theme[_nghost-%COMP%]   .bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#bcc5ce}"], data: { animation: [
            trigger('appear', [transition(':enter', [style({ width: 0 }), animate('.3s ease', style({ width: '*' }))])]),
            trigger('stagger', [transition(':enter', [query(':enter', stagger('.1s', [animateChild()]))])]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarChartComponent, [{
        type: Component,
        args: [{
                selector: 'ng-bar-chart',
                templateUrl: './bar-chart.component.html',
                styleUrls: ['./bar-chart.component.scss'],
                animations: [
                    trigger('appear', [transition(':enter', [style({ width: 0 }), animate('.3s ease', style({ width: '*' }))])]),
                    trigger('stagger', [transition(':enter', [query(':enter', stagger('.1s', [animateChild()]))])]),
                ],
            }]
    }], null, { data: [{
            type: Input
        }], color: [{
            type: Input
        }], barClick: [{
            type: Output
        }] }); })();

class BargraphVisualizerComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.nodeSelect = new EventEmitter();
        this._formatter = new BarGraphFormatter();
    }
    set frame(data) {
        this.profileRecords = this._formatter.formatFrame(data);
    }
    ngOnInit() {
        this._currentThemeSubscription = this.themeService.currentTheme.subscribe((theme) => {
            this.currentTheme = theme;
            this.barColor = theme === 'dark-theme' ? '#073d69' : '#cfe8fc';
        });
    }
    ngOnDestroy() {
        this._currentThemeSubscription.unsubscribe();
    }
    formatEntryData(bargraphNode) {
        const graphData = [];
        bargraphNode.original.directives.forEach((node) => {
            const { changeDetection } = node;
            if (changeDetection) {
                graphData.push({
                    directive: node.name,
                    method: 'changes',
                    value: parseFloat(changeDetection.toFixed(2)),
                });
            }
            Object.keys(node.lifecycle).forEach((key) => {
                graphData.push({
                    directive: node.name,
                    method: key,
                    value: +node.lifecycle[key].toFixed(2),
                });
            });
        });
        return graphData;
    }
    selectNode(node) {
        this.nodeSelect.emit({
            entry: node,
            parentHierarchy: node.parents.map((element) => {
                return { name: element.directives[0].name };
            }),
            selectedDirectives: this.formatEntryData(node),
        });
    }
}
BargraphVisualizerComponent.ɵfac = function BargraphVisualizerComponent_Factory(t) { return new (t || BargraphVisualizerComponent)(i0.ɵɵdirectiveInject(ThemeService)); };
BargraphVisualizerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BargraphVisualizerComponent, selectors: [["ng-bargraph-visualizer"]], inputs: { frame: "frame" }, outputs: { nodeSelect: "nodeSelect" }, decls: 2, vars: 2, consts: [[1, "level-profile-wrapper"], [3, "color", "data", "barClick"]], template: function BargraphVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ng-bar-chart", 1);
        i0.ɵɵlistener("barClick", function BargraphVisualizerComponent_Template_ng_bar_chart_barClick_1_listener($event) { return ctx.selectNode($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.barColor)("data", ctx.profileRecords);
    } }, directives: [BarChartComponent], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:flex;-webkit-user-select:text;-moz-user-select:text;user-select:text;overflow-y:auto}.level-profile-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BargraphVisualizerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-bargraph-visualizer',
                templateUrl: './bargraph-visualizer.component.html',
                styleUrls: ['./bargraph-visualizer.component.scss'],
            }]
    }], function () { return [{ type: ThemeService }]; }, { nodeSelect: [{
            type: Output
        }], frame: [{
            type: Input
        }] }); })();

class TreeMapFormatter extends RecordFormatter {
    formatFrame(record) {
        const children = [];
        this.addFrame(children, record.directives);
        const size = children.reduce((accum, curr) => {
            return accum + curr.size;
        }, 0);
        return {
            id: 'Application',
            size,
            value: size,
            children,
            original: null,
        };
    }
    addFrame(nodes, elements, prev = null) {
        elements.forEach((element) => {
            if (!element) {
                console.error('Unable to insert undefined element');
                return;
            }
            const nodeVal = super.getValue(element);
            const node = {
                id: super.getLabel(element),
                size: nodeVal,
                value: nodeVal,
                children: [],
                original: element,
            };
            this.addFrame(node.children, element.children, node);
            if (prev) {
                prev.size += node.size;
            }
            nodes.push(node);
        });
    }
}
__decorate([
    memo({ cache: new WeakMap() })
], TreeMapFormatter.prototype, "formatFrame", null);

const _c0$1 = ["webTree"];
class TreeMapVisualizerComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._formatter = new TreeMapFormatter();
        this.resize$ = new Subject();
        this._resizeObserver = new ResizeObserver(() => this._ngZone.run(() => this.resize$.next()));
    }
    set frame(frame) {
        // first element in data is the Application node
        this.treeMapRecords = this._formatter.formatFrame(frame);
        if (this.tree) {
            this._renderTree();
        }
    }
    ngOnInit() {
        this._throttledResizeSubscription = this.resize$.pipe(debounceTime(100)).subscribe(() => this._renderTree());
        this._resizeObserver.observe(this.tree.nativeElement);
    }
    ngOnDestroy() {
        this._throttledResizeSubscription.unsubscribe();
        this._resizeObserver.unobserve(this.tree.nativeElement);
    }
    _renderTree() {
        this._removeTree();
        this._createTree();
    }
    _removeTree() {
        Array.from(this.tree.nativeElement.children).forEach((child) => child.remove());
    }
    _createTree() {
        treemap.render(this.tree.nativeElement, this.treeMapRecords, {
            padding: [20, 5, 5, 5],
            caption: (node) => `${node.id}: ${node.size.toFixed(3)} ms`,
            showNode: () => true,
        });
    }
}
TreeMapVisualizerComponent.ɵfac = function TreeMapVisualizerComponent_Factory(t) { return new (t || TreeMapVisualizerComponent)(i0.ɵɵdirectiveInject(i0.NgZone)); };
TreeMapVisualizerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeMapVisualizerComponent, selectors: [["ng-tree-map-visualizer"]], viewQuery: function TreeMapVisualizerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tree = _t.first);
    } }, inputs: { frame: "frame" }, decls: 2, vars: 0, consts: [[1, "web-tree"], ["webTree", ""]], template: function TreeMapVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
    } }, styles: [".web-tree[_ngcontent-%COMP%]{height:calc(100% - 25px);width:calc(100% - 25px);margin:auto}[_nghost-%COMP%]     .webtreemap-caption{font-size:.9em}.dark-theme[_nghost-%COMP%]     .webtreemap-node, .dark-theme   [_nghost-%COMP%]     .webtreemap-node{background:#424242}.dark-theme[_nghost-%COMP%]     .webtreemap-node:hover, .dark-theme   [_nghost-%COMP%]     .webtreemap-node:hover{background:#303030}.dark-theme[_nghost-%COMP%]     .webtreemap-caption, .dark-theme   [_nghost-%COMP%]     .webtreemap-caption{color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeMapVisualizerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-tree-map-visualizer',
                templateUrl: './tree-map-visualizer.component.html',
                styleUrls: ['./tree-map-visualizer.component.scss'],
            }]
    }], function () { return [{ type: i0.NgZone }]; }, { frame: [{
            type: Input
        }], tree: [{
            type: ViewChild,
            args: ['webTree', { static: true }]
        }] }); })();

function TimelineVisualizerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng-flamegraph-visualizer", 5);
    i0.ɵɵlistener("nodeSelect", function TimelineVisualizerComponent_ng_container_3_Template_ng_flamegraph_visualizer_nodeSelect_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.handleNodeSelect($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("frame", ctx_r0.frame)("changeDetection", ctx_r0.changeDetection);
} }
function TimelineVisualizerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "ng-tree-map-visualizer", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("frame", ctx_r1.frame);
} }
function TimelineVisualizerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng-bargraph-visualizer", 7);
    i0.ɵɵlistener("nodeSelect", function TimelineVisualizerComponent_ng_container_5_Template_ng_bargraph_visualizer_nodeSelect_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.handleNodeSelect($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("frame", ctx_r2.frame);
} }
function TimelineVisualizerComponent_as_split_area_6_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "ng-execution-details", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("data", ctx_r8.selectedDirectives);
} }
function TimelineVisualizerComponent_as_split_area_6_div_12_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const parent_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", parent_r11.name, " ");
} }
function TimelineVisualizerComponent_as_split_area_6_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3, "Parent Hierarchy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul");
    i0.ɵɵtemplate(5, TimelineVisualizerComponent_as_split_area_6_div_12_li_5_Template, 2, 1, "li", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r9.parentHierarchy);
} }
function TimelineVisualizerComponent_as_split_area_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "as-split-area", 8);
    i0.ɵɵelementStart(1, "mat-card", 9);
    i0.ɵɵelementStart(2, "mat-toolbar");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "section", 10);
    i0.ɵɵelementStart(5, "div", 11);
    i0.ɵɵelementStart(6, "label");
    i0.ɵɵtext(7, "Total time spent:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, TimelineVisualizerComponent_as_split_area_6_div_11_Template, 2, 1, "div", 12);
    i0.ɵɵtemplate(12, TimelineVisualizerComponent_as_split_area_6_div_12_Template, 6, 1, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r3.selectedEntry.label, " details");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 4, ctx_r3.selectedEntry.value), " ms");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedEntry.value > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.parentHierarchy.length > 0);
} }
class TimelineVisualizerComponent {
    constructor() {
        this.cmpVisualizationModes = VisualizationMode;
        this.selectedEntry = null;
        this.selectedDirectives = [];
        this.parentHierarchy = [];
    }
    set visualizationMode(mode) {
        this._visualizationMode = mode;
        this.selectedEntry = null;
        this.selectedDirectives = [];
        this.parentHierarchy = [];
    }
    handleNodeSelect({ entry, parentHierarchy, selectedDirectives }) {
        this.selectedEntry = entry;
        this.selectedDirectives = selectedDirectives;
        this.parentHierarchy = parentHierarchy !== null && parentHierarchy !== void 0 ? parentHierarchy : [];
    }
}
TimelineVisualizerComponent.ɵfac = function TimelineVisualizerComponent_Factory(t) { return new (t || TimelineVisualizerComponent)(); };
TimelineVisualizerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimelineVisualizerComponent, selectors: [["ng-timeline-visualizer"]], inputs: { visualizationMode: "visualizationMode", frame: "frame", changeDetection: "changeDetection" }, decls: 7, vars: 6, consts: [["unit", "percent", 3, "gutterSize"], ["size", "75"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["size", "25", "minSize", "15", 4, "ngIf"], [3, "frame", "changeDetection", "nodeSelect"], [3, "frame"], [3, "frame", "nodeSelect"], ["size", "25", "minSize", "15"], [1, "selected-entry"], [1, "entry-statistics"], [1, "txt-total-time"], [4, "ngIf"], [3, "data"], [4, "ngFor", "ngForOf"]], template: function TimelineVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "as-split", 0);
        i0.ɵɵelementStart(1, "as-split-area", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TimelineVisualizerComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
        i0.ɵɵtemplate(4, TimelineVisualizerComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        i0.ɵɵtemplate(5, TimelineVisualizerComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, TimelineVisualizerComponent_as_split_area_6_Template, 13, 6, "as-split-area", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("gutterSize", 9);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitch", ctx._visualizationMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.FlameGraph);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.TreeMap);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.BarGraph);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectedEntry);
    } }, styles: ["[_nghost-%COMP%]{height:calc(100% - 2 * 60px);display:block;overflow:auto}[_nghost-%COMP%]     .as-split-gutter-icon{display:none}.selected-entry[_ngcontent-%COMP%]{padding:0;height:100%}.selected-entry[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{padding-left:9px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:25px;font-size:11px;font-weight:500;display:flex;align-items:center;justify-content:space-between;height:auto}.selected-entry[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:calc(100% - 40px - 23px);width:calc(100% - 20px);overflow:auto;font-family:Roboto,Helvetica Neue,sans-serif;padding:10px}.entry-statistics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:3px}.entry-statistics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{opacity:.7}.entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8a1882}.txt-total-time[_ngcontent-%COMP%]{font-weight:700}ul[_ngcontent-%COMP%]{list-style-type:square;-webkit-margin-before:0;margin-block-start:0;-webkit-padding-start:20px;padding-inline-start:20px}.dark-theme[_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5cadd3}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimelineVisualizerComponent, [{
        type: Component,
        args: [{
                selector: 'ng-timeline-visualizer',
                templateUrl: './timeline-visualizer.component.html',
                styleUrls: ['./timeline-visualizer.component.scss'],
            }]
    }], null, { visualizationMode: [{
            type: Input
        }], frame: [{
            type: Input
        }], changeDetection: [{
            type: Input
        }] }); })();

function ExecutionDetailsComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td", 0);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 1);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 2);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", entry_r1.directive, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", entry_r1.method, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", entry_r1.value, " ms");
} }
class ExecutionDetailsComponent {
}
ExecutionDetailsComponent.ɵfac = function ExecutionDetailsComponent_Factory(t) { return new (t || ExecutionDetailsComponent)(); };
ExecutionDetailsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExecutionDetailsComponent, selectors: [["ng-execution-details"]], inputs: { data: "data" }, decls: 10, vars: 1, consts: [[1, "name"], [1, "method"], [1, "value"], [4, "ngFor", "ngForOf"]], template: function ExecutionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table");
        i0.ɵɵelementStart(1, "thead");
        i0.ɵɵelementStart(2, "th", 0);
        i0.ɵɵtext(3, "Directive");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "th", 1);
        i0.ɵɵtext(5, "Method");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "th", 2);
        i0.ɵɵtext(7, "Time");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "tbody");
        i0.ɵɵtemplate(9, ExecutionDetailsComponent_tr_9_Template, 7, 3, "tr", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [i1$1.NgForOf], styles: ["table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;text-align:left;overflow:hidden;text-overflow:ellipsis}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExecutionDetailsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-execution-details',
                templateUrl: './execution-details.component.html',
                styleUrls: ['./execution-details.component.scss'],
            }]
    }], null, { data: [{
            type: Input
        }] }); })();

class RecordingVisualizerModule {
}
RecordingVisualizerModule.ɵfac = function RecordingVisualizerModule_Factory(t) { return new (t || RecordingVisualizerModule)(); };
RecordingVisualizerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordingVisualizerModule });
RecordingVisualizerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, NgxFlamegraphModule, MatTooltipModule, MatToolbarModule, MatCardModule, AngularSplitModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordingVisualizerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ExecutionDetailsComponent,
                    BarChartComponent,
                    TimelineVisualizerComponent,
                    FlamegraphVisualizerComponent,
                    TreeMapVisualizerComponent,
                    BargraphVisualizerComponent,
                ],
                imports: [CommonModule, NgxFlamegraphModule, MatTooltipModule, MatToolbarModule, MatCardModule, AngularSplitModule],
                exports: [TimelineVisualizerComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordingVisualizerModule, { declarations: [ExecutionDetailsComponent,
        BarChartComponent,
        TimelineVisualizerComponent,
        FlamegraphVisualizerComponent,
        TreeMapVisualizerComponent,
        BargraphVisualizerComponent], imports: [CommonModule, NgxFlamegraphModule, MatTooltipModule, MatToolbarModule, MatCardModule, AngularSplitModule], exports: [TimelineVisualizerComponent] }); })();
i0.ɵɵsetComponentScope(TimelineVisualizerComponent, [SplitComponent, SplitAreaDirective, i1$1.NgSwitch, i1$1.NgSwitchCase, FlamegraphVisualizerComponent,
    TreeMapVisualizerComponent,
    BargraphVisualizerComponent, i1$1.NgIf, i1.MatCard, i1$2.MatToolbar, ExecutionDetailsComponent, i1$1.NgForOf], [i1$1.DecimalPipe]);

const _c0 = ["barContainer"];
function FrameSelectorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function FrameSelectorComponent_div_10_Template_div_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r5); const i_r3 = restoredCtx.index; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.handleFrameSelection(i_r3, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", ctx_r1.selectedFrameIndexes.has(i_r3));
    i0.ɵɵproperty("ngStyle", d_r2.style);
} }
const ITEM_WIDTH = 30;
class FrameSelectorComponent {
    constructor(_tabUpdate) {
        this._tabUpdate = _tabUpdate;
        this.selectFrames = new EventEmitter();
        this.startFrameIndex = -1;
        this.endFrameIndex = -1;
        this.selectedFrameIndexes = new Set();
    }
    set graphData$(graphData) {
        this._graphData$ = graphData;
        this._graphDataSubscription = this._graphData$.subscribe((items) => setTimeout(() => {
            this.frameCount = items.length;
            this.viewport.scrollToIndex(items.length);
        }));
    }
    get graphData$() {
        return this._graphData$;
    }
    get itemWidth() {
        return ITEM_WIDTH;
    }
    ngOnInit() {
        this._tabUpdateSubscription = this._tabUpdate.tabUpdate$.subscribe(() => {
            if (this.viewport) {
                setTimeout(() => {
                    this.viewport.scrollToIndex(0);
                    this.viewport.checkViewportSize();
                });
            }
        });
    }
    ngOnDestroy() {
        if (this._tabUpdateSubscription) {
            this._tabUpdateSubscription.unsubscribe();
        }
        if (this._graphDataSubscription) {
            this._graphDataSubscription.unsubscribe();
        }
    }
    get selectionLabel() {
        if (this.startFrameIndex === this.endFrameIndex) {
            return `${this.startFrameIndex + 1}`;
        }
        return this._smartJoinIndexLabels([...this.selectedFrameIndexes]);
    }
    _smartJoinIndexLabels(indexArray) {
        const sortedIndexes = indexArray.sort((a, b) => a - b);
        const groups = [];
        let prev = null;
        for (const index of sortedIndexes) {
            // First iteration: create initial group and set prev variable to the first index
            if (prev === null) {
                groups.push([index]);
                prev = index;
                continue;
            }
            // If current index is consecutive with the previous, group them, otherwise start a new group
            if (prev + 1 === index) {
                groups[groups.length - 1].push(index);
            }
            else {
                groups.push([index]);
            }
            prev = index;
        }
        return groups
            .filter((group) => group.length > 0)
            .map((group) => (group.length === 1 ? group[0] + 1 : `${group[0] + 1}-${group[group.length - 1] + 1}`))
            .join(', ');
    }
    move(value) {
        const newVal = this.startFrameIndex + value;
        this.selectedFrameIndexes = new Set([newVal]);
        if (newVal > -1 && newVal < this.frameCount) {
            this._selectFrames({ indexes: this.selectedFrameIndexes });
        }
    }
    _selectFrames({ indexes }) {
        const sortedIndexes = [...indexes].sort((a, b) => a - b);
        this.startFrameIndex = sortedIndexes[0];
        this.endFrameIndex = sortedIndexes[sortedIndexes.length - 1];
        this._ensureVisible(this.startFrameIndex);
        this.selectFrames.emit({ indexes: sortedIndexes });
    }
    handleFrameSelection(idx, event) {
        const { shiftKey, ctrlKey, metaKey } = event;
        if (shiftKey) {
            const [start, end] = [Math.min(this.startFrameIndex, idx), Math.max(this.endFrameIndex, idx)];
            this.selectedFrameIndexes = new Set(Array.from(Array(end - start + 1), (_, index) => index + start));
        }
        else if (ctrlKey || metaKey) {
            if (this.selectedFrameIndexes.has(idx)) {
                if (this.selectedFrameIndexes.size === 1) {
                    return; // prevent deselection when only one frame is selected
                }
                this.selectedFrameIndexes.delete(idx);
            }
            else {
                this.selectedFrameIndexes.add(idx);
            }
        }
        else {
            this.selectedFrameIndexes = new Set([idx]);
        }
        this._selectFrames({ indexes: this.selectedFrameIndexes });
    }
    _ensureVisible(index) {
        if (!this.viewport) {
            return;
        }
        const scrollParent = this.viewport.elementRef.nativeElement;
        // The left most point we see an element
        const left = scrollParent.scrollLeft;
        // That's the right most point we currently see an element.
        const right = left + scrollParent.offsetWidth;
        const itemLeft = index * this.itemWidth;
        if (itemLeft < left) {
            scrollParent.scrollTo({ left: itemLeft });
        }
        else if (right < itemLeft + this.itemWidth) {
            scrollParent.scrollTo({ left: itemLeft - scrollParent.offsetWidth + this.itemWidth });
        }
    }
}
FrameSelectorComponent.ɵfac = function FrameSelectorComponent_Factory(t) { return new (t || FrameSelectorComponent)(i0.ɵɵdirectiveInject(TabUpdate)); };
FrameSelectorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FrameSelectorComponent, selectors: [["ng-frame-selector"]], viewQuery: function FrameSelectorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(CdkVirtualScrollViewport, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.barContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewport = _t.first);
    } }, inputs: { graphData$: "graphData$" }, outputs: { selectFrames: "selectFrames" }, decls: 16, vars: 16, consts: [[1, "bar-graph-container"], [1, "txt-frames", 3, "matTooltip"], ["mat-icon-button", "", 3, "disabled", "click"], ["orientation", "horizontal", 1, "bar-container", 3, "itemSize"], ["barContainer", ""], ["class", "frame-bar", 3, "ngStyle", "selected", "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "frame-bar", 3, "ngStyle", "click"]], template: function FrameSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "p", 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function FrameSelectorComponent_Template_button_click_5_listener() { return ctx.move(-1); });
        i0.ɵɵelementStart(6, "mat-icon");
        i0.ɵɵtext(7, "chevron_left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "cdk-virtual-scroll-viewport", 3, 4);
        i0.ɵɵtemplate(10, FrameSelectorComponent_div_10_Template, 1, 3, "div", 5);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 2);
        i0.ɵɵlistener("click", function FrameSelectorComponent_Template_button_click_12_listener() { return ctx.move(1); });
        i0.ɵɵpipe(13, "async");
        i0.ɵɵelementStart(14, "mat-icon");
        i0.ɵɵtext(15, "chevron_right");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        let tmp_0_0 = null;
        let tmp_1_0 = null;
        let tmp_5_0 = null;
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate2("matTooltip", "", ctx.selectionLabel, " / ", (tmp_0_0 = i0.ɵɵpipeBind1(2, 8, ctx.graphData$)) == null ? null : tmp_0_0.length, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2(" ", ctx.selectionLabel, " / ", (tmp_1_0 = i0.ɵɵpipeBind1(4, 10, ctx.graphData$)) == null ? null : tmp_1_0.length, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.startFrameIndex <= 0 || ctx.selectedFrameIndexes.size > 1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("itemSize", ctx.itemWidth);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkVirtualForOf", i0.ɵɵpipeBind1(11, 12, ctx.graphData$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.endFrameIndex >= ((tmp_5_0 = i0.ɵɵpipeBind1(13, 14, ctx.graphData$)) == null ? null : tmp_5_0.length) - 1 || ctx.selectedFrameIndexes.size > 1);
    } }, directives: [i1.MatCard, i5$1.MatTooltip, i3.MatButton, i2$1.MatIcon, i4.CdkVirtualScrollViewport, i4.CdkFixedSizeVirtualScroll, i4.CdkVirtualForOf, i1$1.NgStyle], pipes: [i1$1.AsyncPipe], styles: [".bar-graph-container[_ngcontent-%COMP%]{padding:2px;height:54px;display:flex;align-items:flex-end;justify-content:center;align-items:center;margin-bottom:10px}.bar-graph-container[_ngcontent-%COMP%]   .txt-frames[_ngcontent-%COMP%]{font-weight:500;line-height:50px;padding:0;margin:0 10px;width:150px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]{max-width:calc(100vw - 150px);align-items:baseline;overflow-x:auto;width:100%;height:100%}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{display:flex}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]{margin-left:2.5px;margin-right:2.5px;margin-top:2px}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0;padding-left:.5px;padding-right:.5px;background-color:#cfe8fc;border:2px solid #cfe8fc}.bar-graph-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:5px}.dark-theme[_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover{background-color:#262d36}.dark-theme[_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%]{background-color:#073d69;border:2px solid #073d69}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FrameSelectorComponent, [{
        type: Component,
        args: [{
                selector: 'ng-frame-selector',
                templateUrl: './frame-selector.component.html',
                styleUrls: ['./frame-selector.component.scss'],
            }]
    }], function () { return [{ type: TabUpdate }]; }, { barContainer: [{
            type: ViewChild,
            args: ['barContainer']
        }], graphData$: [{
            type: Input
        }], selectFrames: [{
            type: Output
        }], viewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }] }); })();

function TimelineControlsComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "mat-select", 6);
    i0.ɵɵlistener("selectionChange", function TimelineControlsComponent_mat_form_field_1_Template_mat_select_selectionChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.changeVisualizationMode.emit($event.value); });
    i0.ɵɵelementStart(2, "mat-option", 7);
    i0.ɵɵtext(3, " Flame graph ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-option", 7);
    i0.ɵɵtext(5, " Tree map ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-option", 7);
    i0.ɵɵtext(7, " Bar chart ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.visualizationMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.flameGraphMode);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.treeMapMode);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.barGraphMode);
} }
function TimelineControlsComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Time spent: ");
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 1, ctx_r1.record == null ? null : ctx_r1.record.duration), " ms");
} }
function TimelineControlsComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Time spent: ");
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("color", ctx_r2.frameColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, ctx_r2.record == null ? null : ctx_r2.record.duration), " ms");
} }
function TimelineControlsComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Frame rate: ");
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("color", ctx_r3.frameColor);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r3.estimatedFrameRate, " fps");
} }
function TimelineControlsComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1, " Source: ");
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.record == null ? null : ctx_r4.record.source);
} }
function TimelineControlsComponent_mat_checkbox_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-checkbox", 9);
    i0.ɵɵlistener("change", function TimelineControlsComponent_mat_checkbox_7_Template_mat_checkbox_change_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.toggleChangeDetection.emit(!ctx_r9.changeDetection); });
    i0.ɵɵtext(1, " Show only change detection ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r5.changeDetection);
} }
function TimelineControlsComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function TimelineControlsComponent_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.exportProfile.emit(); });
    i0.ɵɵtext(1, "Save Profile");
    i0.ɵɵelementEnd();
} }
class TimelineControlsComponent {
    constructor() {
        this.changeVisualizationMode = new EventEmitter();
        this.exportProfile = new EventEmitter();
        this.toggleChangeDetection = new EventEmitter();
        this.flameGraphMode = VisualizationMode.FlameGraph;
        this.treeMapMode = VisualizationMode.TreeMap;
        this.barGraphMode = VisualizationMode.BarGraph;
    }
}
TimelineControlsComponent.ɵfac = function TimelineControlsComponent_Factory(t) { return new (t || TimelineControlsComponent)(); };
TimelineControlsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimelineControlsComponent, selectors: [["ng-timeline-controls"]], inputs: { record: "record", estimatedFrameRate: "estimatedFrameRate", frameColor: "frameColor", visualizationMode: "visualizationMode", empty: "empty", changeDetection: "changeDetection" }, outputs: { changeVisualizationMode: "changeVisualizationMode", exportProfile: "exportProfile", toggleChangeDetection: "toggleChangeDetection" }, decls: 9, vars: 11, consts: [[1, "controls"], [4, "ngIf"], [1, "details"], [3, "color", 4, "ngIf"], [3, "checked", "change", 4, "ngIf"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [3, "value", "selectionChange"], [3, "value"], [1, "value"], [3, "checked", "change"], ["mat-stroked-button", "", 3, "click"]], template: function TimelineControlsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TimelineControlsComponent_mat_form_field_1_Template, 8, 4, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, TimelineControlsComponent_label_3_Template, 5, 3, "label", 1);
        i0.ɵɵtemplate(4, TimelineControlsComponent_label_4_Template, 5, 5, "label", 3);
        i0.ɵɵtemplate(5, TimelineControlsComponent_label_5_Template, 4, 3, "label", 3);
        i0.ɵɵtemplate(6, TimelineControlsComponent_label_6_Template, 4, 1, "label", 1);
        i0.ɵɵtemplate(7, TimelineControlsComponent_mat_checkbox_7_Template, 2, 1, "mat-checkbox", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, TimelineControlsComponent_button_8_Template, 2, 0, "button", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("flame-details", ctx.visualizationMode == ctx.flameGraphMode)("bar-details", ctx.visualizationMode == ctx.barGraphMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.estimatedFrameRate >= 60 && ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.estimatedFrameRate < 60 && ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.estimatedFrameRate < 60 && ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.record == null ? null : ctx.record.source) && ctx.record);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.visualizationMode == ctx.flameGraphMode);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.empty);
    } }, directives: [i1$1.NgIf, i2$6.MatFormField, i3$2.MatSelect, i4$1.MatOption, i5$2.MatCheckbox, i3.MatButton], pipes: [i1$1.DecimalPipe], styles: ["[_nghost-%COMP%]{height:60px}.controls[_ngcontent-%COMP%]{display:flex;white-space:nowrap;flex-wrap:wrap;justify-content:center;padding:5px}.controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:50px;width:75px;white-space:normal;line-height:18px}.controls[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:0 1 60px;margin-left:15px;margin-right:15px}.controls[_ngcontent-%COMP%]     .details{flex:1 1 150px;display:flex;flex-direction:column;font-weight:500;-moz-user-select:text;-webkit-user-select:text;user-select:text}.controls[_ngcontent-%COMP%]     .details, .controls[_ngcontent-%COMP%]     .details label{overflow:hidden;text-overflow:ellipsis}.controls[_ngcontent-%COMP%]     .details .value{color:#8a1882}.controls[_ngcontent-%COMP%]   .bar-details[_ngcontent-%COMP%]{min-height:60px}.controls[_ngcontent-%COMP%]   .flame-details[_ngcontent-%COMP%]{min-height:85px}.dark-theme[_nghost-%COMP%]   .details[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .details[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#5cadd3}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimelineControlsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-timeline-controls',
                templateUrl: './timeline-controls.component.html',
                styleUrls: ['./timeline-controls.component.scss'],
            }]
    }], null, { record: [{
            type: Input
        }], estimatedFrameRate: [{
            type: Input
        }], frameColor: [{
            type: Input
        }], visualizationMode: [{
            type: Input
        }], empty: [{
            type: Input
        }], changeDetection: [{
            type: Input
        }], changeVisualizationMode: [{
            type: Output
        }], exportProfile: [{
            type: Output
        }], toggleChangeDetection: [{
            type: Output
        }] }); })();

class RecordingDialogComponent {
}
RecordingDialogComponent.ɵfac = function RecordingDialogComponent_Factory(t) { return new (t || RecordingDialogComponent)(); };
RecordingDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordingDialogComponent, selectors: [["ng-recording-dialog"]], decls: 2, vars: 0, consts: [[1, "main-wrapper"], ["color", "accent", "mode", "indeterminate"]], template: function RecordingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelement(1, "mat-progress-bar", 1);
        i0.ɵɵelementEnd();
    } }, directives: [i1$4.MatProgressBar], styles: [".main-wrapper[_ngcontent-%COMP%]{width:300px;margin-top:50%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordingDialogComponent, [{
        type: Component,
        args: [{
                selector: 'ng-recording-dialog',
                templateUrl: './recording-dialog.component.html',
                styleUrls: ['./recording-dialog.component.scss'],
            }]
    }], null, null); })();

class RecordingModalComponent {
}
RecordingModalComponent.ɵfac = function RecordingModalComponent_Factory(t) { return new (t || RecordingModalComponent)(); };
RecordingModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordingModalComponent, selectors: [["ng-recording-modal"]], decls: 2, vars: 0, consts: [["id", "recorder-wrapper"]], template: function RecordingModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelement(1, "ng-recording-dialog");
        i0.ɵɵelementEnd();
    } }, directives: [RecordingDialogComponent], styles: ["@import \"../../../../../../../../../node_modules/@angular/cdk/overlay-prebuilt.css\";[_nghost-%COMP%]{overflow:hidden;display:block;width:100%;height:calc(100% + 24px)}#recorder-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%;display:flex;justify-content:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordingModalComponent, [{
        type: Component,
        args: [{
                selector: 'ng-recording-modal',
                templateUrl: './recording-modal.component.html',
                styleUrls: ['./recording-modal.component.scss'],
            }]
    }], null, null); })();

class TimelineModule {
}
TimelineModule.ɵfac = function TimelineModule_Factory(t) { return new (t || TimelineModule)(); };
TimelineModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TimelineModule });
TimelineModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            ScrollingModule,
            CommonModule,
            FormsModule,
            RecordingVisualizerModule,
            MatCheckboxModule,
            MatDialogModule,
            MatProgressBarModule,
            MatButtonModule,
            MatTooltipModule,
            MatIconModule,
            MatCardModule,
            NgxFlamegraphModule,
            MatSelectModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimelineModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TimelineComponent,
                    RecordingDialogComponent,
                    RecordingModalComponent,
                    FrameSelectorComponent,
                    TimelineControlsComponent,
                ],
                imports: [
                    ScrollingModule,
                    CommonModule,
                    FormsModule,
                    RecordingVisualizerModule,
                    MatCheckboxModule,
                    MatDialogModule,
                    MatProgressBarModule,
                    MatButtonModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatCardModule,
                    NgxFlamegraphModule,
                    MatSelectModule,
                ],
                exports: [TimelineComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TimelineModule, { declarations: [TimelineComponent,
        RecordingDialogComponent,
        RecordingModalComponent,
        FrameSelectorComponent,
        TimelineControlsComponent], imports: [ScrollingModule,
        CommonModule,
        FormsModule,
        RecordingVisualizerModule,
        MatCheckboxModule,
        MatDialogModule,
        MatProgressBarModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatCardModule,
        NgxFlamegraphModule,
        MatSelectModule], exports: [TimelineComponent] }); })();
i0.ɵɵsetComponentScope(TimelineComponent, [i1$1.NgIf, RecordingModalComponent,
    TimelineControlsComponent,
    FrameSelectorComponent, TimelineVisualizerComponent], []);

class ProfilerModule {
}
ProfilerModule.ɵfac = function ProfilerModule_Factory(t) { return new (t || ProfilerModule)(); };
ProfilerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ProfilerModule });
ProfilerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatDialogModule,
            MatIconModule,
            MatSelectModule,
            FormsModule,
            TimelineModule,
            MatButtonModule,
            MatCardModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilerModule, [{
        type: NgModule,
        args: [{
                declarations: [ProfilerComponent, ProfilerImportDialogComponent],
                imports: [
                    CommonModule,
                    MatDialogModule,
                    MatIconModule,
                    MatSelectModule,
                    FormsModule,
                    TimelineModule,
                    MatButtonModule,
                    MatCardModule,
                ],
                exports: [ProfilerComponent],
                entryComponents: [ProfilerImportDialogComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProfilerModule, { declarations: [ProfilerComponent, ProfilerImportDialogComponent], imports: [CommonModule,
        MatDialogModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        TimelineModule,
        MatButtonModule,
        MatCardModule], exports: [ProfilerComponent] }); })();

class RouterTreeModule {
}
RouterTreeModule.ɵfac = function RouterTreeModule_Factory(t) { return new (t || RouterTreeModule)(); };
RouterTreeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RouterTreeModule });
RouterTreeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatDialogModule, MatSelectModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouterTreeModule, [{
        type: NgModule,
        args: [{
                declarations: [RouterTreeComponent],
                imports: [CommonModule, MatDialogModule, MatSelectModule],
                exports: [RouterTreeComponent],
                entryComponents: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RouterTreeModule, { declarations: [RouterTreeComponent], imports: [CommonModule, MatDialogModule, MatSelectModule], exports: [RouterTreeComponent] }); })();

class DevToolsTabModule {
}
DevToolsTabModule.ɵfac = function DevToolsTabModule_Factory(t) { return new (t || DevToolsTabModule)(); };
DevToolsTabModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DevToolsTabModule });
DevToolsTabModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TabUpdate], imports: [[
            MatTabsModule,
            MatIconModule,
            DirectiveExplorerModule,
            ProfilerModule,
            RouterTreeModule,
            CommonModule,
            MatMenuModule,
            MatButtonModule,
            MatSlideToggleModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsTabModule, [{
        type: NgModule,
        args: [{
                declarations: [DevToolsTabsComponent],
                imports: [
                    MatTabsModule,
                    MatIconModule,
                    DirectiveExplorerModule,
                    ProfilerModule,
                    RouterTreeModule,
                    CommonModule,
                    MatMenuModule,
                    MatButtonModule,
                    MatSlideToggleModule,
                ],
                providers: [TabUpdate],
                exports: [DevToolsTabsComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DevToolsTabModule, { declarations: [DevToolsTabsComponent], imports: [MatTabsModule,
        MatIconModule,
        DirectiveExplorerModule,
        ProfilerModule,
        RouterTreeModule,
        CommonModule,
        MatMenuModule,
        MatButtonModule,
        MatSlideToggleModule], exports: [DevToolsTabsComponent] }); })();

class DevToolsModule {
}
DevToolsModule.ɵfac = function DevToolsModule_Factory(t) { return new (t || DevToolsModule)(); };
DevToolsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DevToolsModule });
DevToolsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, DevToolsTabModule, MatProgressSpinnerModule, MatTooltipModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsModule, [{
        type: NgModule,
        args: [{
                declarations: [DevToolsComponent],
                imports: [CommonModule, DevToolsTabModule, MatProgressSpinnerModule, MatTooltipModule],
                exports: [DevToolsComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DevToolsModule, { declarations: [DevToolsComponent], imports: [CommonModule, DevToolsTabModule, MatProgressSpinnerModule, MatTooltipModule], exports: [DevToolsComponent] }); })();

/*
 * Public API Surface of ng-devtools
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ApplicationEnvironment, ApplicationOperations, DevToolsComponent, DevToolsModule };
//# sourceMappingURL=ng-devtools.js.map
