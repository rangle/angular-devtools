import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ComponentDataSource } from './component-data-source';
import { isChildOf, parentCollapsed } from './directive-forest-utils';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "../../tab-update";
import * as i2 from "protocol";
import * as i3 from "./filter/filter.component";
import * as i4 from "@angular/cdk/scrolling";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/icon";
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
const _c0 = function (a0, a1, a2, a3) { return { matched: a0, selected: a1, highlighted: a2, "new-node": a3 }; };
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
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(9, _c0, ctx_r0.isMatched(node_r1), ctx_r0.isSelected(node_r1), ctx_r0.isHighlighted(node_r1), node_r1.newItem));
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
export class DirectiveForestComponent {
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
DirectiveForestComponent.ɵfac = function DirectiveForestComponent_Factory(t) { return new (t || DirectiveForestComponent)(i0.ɵɵdirectiveInject(i1.TabUpdate), i0.ɵɵdirectiveInject(i2.MessageBus), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
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
    } }, directives: [i3.FilterComponent, i4.CdkVirtualScrollViewport, i4.CdkFixedSizeVirtualScroll, i4.CdkVirtualForOf, i5.NgClass, i5.NgIf, i6.MatIcon], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n\n  .tree-node {\n    position: relative;\n    color: #8a1882;\n\n    cursor: default;\n    font-family: Menlo, monospace;\n    font-size: 11px;\n    line-height: 18px;\n\n    white-space: nowrap;\n    text-overflow: ellipsis;\n\n    & > button {\n      outline: none;\n      border: 0;\n      padding: 0;\n      position: absolute;\n      background-color: transparent;\n      top: 2px;\n    }\n\n    .mat-icon {\n      font-size: 0.8em;\n      width: 16px;\n      height: 13px;\n      display: inline-block;\n    }\n\n    .dir-names {\n      color: #9b4807;\n    }\n\n    .console-reference {\n      color: #748591;\n      padding-left: 8px;\n      font-style: italic;\n    }\n\n    &:hover {\n      background-color: #ebf1fb;\n    }\n\n    &.matched {\n      background-color: #ebf1fb;\n\n      &:hover {\n        background-color: #cfe8fc;\n      }\n    }\n\n    &.selected,\n    &.highlighted {\n      background-color: #cfe8fc;\n    }\n  }\n}\n\n@keyframes appear {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: #cfe8fc;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n\n.new-node[_ngcontent-%COMP%] {\n  animation: appear 1.5s;\n}\n\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n\n  .icon {\n    width: 20px;\n    height: 20px;\n    margin: auto 12px;\n    opacity: 0.7;\n  }\n\n  .filter-input {\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n    width: 100%;\n    font-size: 2em;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: 1.4em;\n    padding: 12px 6px;\n  }\n}\n\n.up-down-buttons[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n}\n\n.tree-wrapper[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: calc(100% - 33px);\n}\n\n.angular-element[_ngcontent-%COMP%] {\n  content: '';\n  color: #1b1aa5;\n\n  &::before {\n    content: '<';\n  }\n\n  &::after {\n    content: '/>';\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  .tree-node {\n    color: #5cadd3;\n\n    .mat-icon {\n      color: #bcc5ce;\n    }\n\n    .dir-names {\n      color: #91adcb;\n    }\n\n    .angular-element {\n      color: #dc8c61;\n    }\n\n    &:hover {\n      background-color: #262d36;\n    }\n\n    &.matched {\n      background-color: #262d36;\n\n      &:hover {\n        background-color: #073d69;\n      }\n    }\n\n    &.selected,\n    &.highlighted {\n      background-color: #073d69;\n    }\n  }\n}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DirectiveForestComponent, [{
        type: Component,
        args: [{
                selector: 'ng-directive-forest',
                templateUrl: './directive-forest.component.html',
                styleUrls: ['./directive-forest.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.TabUpdate }, { type: i2.MessageBus }, { type: i0.ChangeDetectorRef }]; }, { forest: [{
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
//# sourceMappingURL=directive-forest.component.js.map