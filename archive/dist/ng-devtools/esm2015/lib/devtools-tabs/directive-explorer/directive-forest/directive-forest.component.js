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
    } }, directives: [i3.FilterComponent, i4.CdkVirtualScrollViewport, i4.CdkFixedSizeVirtualScroll, i4.CdkVirtualForOf, i5.NgClass, i5.NgIf, i6.MatIcon], styles: ["[_nghost-%COMP%]{width:100%;height:100%;overflow:auto}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]{position:relative;color:#8a1882;cursor:default;font-family:Menlo,monospace;font-size:11px;line-height:18px;white-space:nowrap;text-overflow:ellipsis}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{outline:none;border:0;padding:0;position:absolute;background-color:transparent;top:2px}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:.8em;width:16px;height:13px;display:inline-block}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%]{color:#9b4807}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .console-reference[_ngcontent-%COMP%]{color:#748591;padding-left:8px;font-style:italic}[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}[_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%]{background-color:#cfe8fc}@-webkit-keyframes appear{0%{background-color:transparent}50%{background-color:#cfe8fc}to{background-color:transparent}}@keyframes appear{0%{background-color:transparent}50%{background-color:#cfe8fc}to{background-color:transparent}}.new-node[_ngcontent-%COMP%]{-webkit-animation:appear 1.5s;animation:appear 1.5s}.filter[_ngcontent-%COMP%]{display:flex}.filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:auto 12px;opacity:.7}.filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]{border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);width:100%;font-size:2em;font-family:inherit;font-weight:inherit;line-height:1.4em;padding:12px 6px}.up-down-buttons[_ngcontent-%COMP%]{width:20%;display:flex}.tree-wrapper[_ngcontent-%COMP%]{overflow-y:auto;height:calc(100% - 33px)}.angular-element[_ngcontent-%COMP%]{content:\"\";color:#1b1aa5}.angular-element[_ngcontent-%COMP%]:before{content:\"<\"}.angular-element[_ngcontent-%COMP%]:after{content:\"/>\"}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]{color:#5cadd3}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#bcc5ce}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%]{color:#91adcb}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .angular-element[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .angular-element[_ngcontent-%COMP%]{color:#dc8c61}.dark-theme[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover{background-color:#262d36}.dark-theme[_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, .dark-theme[_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%]{background-color:#073d69}"], changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLWZvcmVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL2RpcmVjdGl2ZS1mb3Jlc3QvZGlyZWN0aXZlLWZvcmVzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL2RpcmVjdGl2ZS1mb3Jlc3QvZGlyZWN0aXZlLWZvcmVzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQVksTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7O0lDTTVELGlDQUtDO0lBRkMscU9BQVMsa0NBQXdCLElBQUM7SUFHbEMsbUNBQXNDO0lBQ3BDLFlBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFTOzs7O0lBUlAsaURBQXFDO0lBR3JDLHNEQUF5QztJQUd2QyxlQUNGO0lBREUseUdBQ0Y7OztJQUdGLGdDQUFnRDtJQUFBLFlBQXVCO0lBQUEsaUJBQU87OztJQUE5QixlQUF1QjtJQUF2QixtREFBdUI7OztJQUN2RSxnQ0FBeUQ7SUFBQyx5QkFBUTtJQUFBLGlCQUFPOzs7OztJQTNCN0UsNkJBQXVFO0lBQ3JFLDhCQWFDO0lBTEMsbVJBQXNDLDRRQUFBLGdSQUFBLHVNQUFBO0lBTXRDLDhGQVNTO0lBQ1QsK0JBQXFFO0lBQUEsWUFBZTtJQUFBLGlCQUFPO0lBQzNGLDBGQUE4RTtJQUM5RSwwRkFBeUU7SUFDM0UsaUJBQU07SUFDUiwwQkFBZTs7OztJQWhCWCxlQUFrRDtJQUFsRCw4REFBa0Q7SUFYbEQsMkpBS0U7SUFVQyxlQUFxQjtJQUFyQix5Q0FBcUI7SUFRRyxlQUF5QztJQUF6Qyw0REFBeUM7SUFBQyxlQUFlO0lBQWYsa0NBQWU7SUFDN0UsZUFBcUI7SUFBckIseUNBQXFCO0lBQ0ssZUFBc0I7SUFBdEIsaURBQXNCOztBRFI3RCxNQUFNLE9BQU8sd0JBQXdCO0lBMENuQyxZQUNVLFVBQXFCLEVBQ3JCLFdBQStCLEVBQy9CLElBQXVCO1FBRnZCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFNBQUksR0FBSixJQUFJLENBQW1CO1FBbkN2QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDcEQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNuRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDbkQsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDekQsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNwRCxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFJckQsZ0JBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQiwwQkFBcUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUzQixpQkFBWSxHQUFvQixJQUFJLENBQUM7UUFHN0Isa0NBQTZCLEdBQWtCLElBQUksQ0FBQztRQVFuRCxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUN4QyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDcEIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQzFCLENBQUM7UUFDTyxlQUFVLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztJQU0xQixDQUFDO0lBN0NKLElBQWEsTUFBTSxDQUFDLE1BQXNCO1FBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDakcsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQXFCRCxJQUFJLDRCQUE0QixDQUFDLEVBQWlCO1FBQ2hELElBQUksQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBaUJELFFBQVE7UUFDTixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN0RSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsMEJBQTBCO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEVBQVUsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyw0QkFBNEIsR0FBRyxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUU7WUFDbkQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxFQUFVO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLFdBQUMsT0FBQSxDQUFBLE1BQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLDBDQUFFLEVBQUUsTUFBSyxFQUFFLENBQUEsRUFBQSxDQUFDLENBQUM7UUFDMUYsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFjO1FBQ3pCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQXNCLENBQUMsSUFBYztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0JBQXNCLENBQUMsSUFBYztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUM1RCx1Q0FBdUM7UUFDdkMsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUNuQyw0REFBNEQ7UUFDNUQsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUMvQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRiw0QkFBNEI7UUFDNUIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsT0FBTztTQUNSO1FBQ0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNLElBQUksTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsSUFBYztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BHLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFTyxhQUFhLENBQ25CLE1BQXNCO1FBRXRCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsaURBQWlEO1FBQ2pELE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsZUFBZSxDQUFDLFFBQXlCO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQWlCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDbEUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixZQUFZLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvRDtZQUNELDZDQUE2QztZQUM3QyxxREFBcUQ7WUFDckQseURBQXlEO1lBQ3pELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMvRyxJQUFJLFlBQVksRUFBRTtnQkFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELFVBQVUsQ0FBQyxLQUFvQjtRQUM3QixJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPO1NBQ1I7UUFDRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNoRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMzRCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sT0FBTyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkUsT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxZQUFZLENBQUMsS0FBb0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkMsT0FBTztTQUNSO1FBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDaEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQ3ZFLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNuRCxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUNSLE1BQU07aUJBQ1A7YUFDRjtTQUNGO2FBQU07WUFDTCxHQUFHLEVBQUUsQ0FBQztTQUNQO1FBQ0QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdELGVBQWUsQ0FBQyxLQUFvQjtRQUNsQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxhQUFhLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsdUJBQXVCLENBQUMsS0FBb0I7UUFDMUMsT0FBUSxLQUFLLENBQUMsTUFBa0IsQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3RSxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWM7UUFDdkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxTQUFTLENBQUMsSUFBYztRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQUVELFlBQVksQ0FBQyxVQUFrQjtRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFaEMsSUFBSTtZQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQ2pFO1FBQUMsV0FBTTtZQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE1BQU0scUJBQXFCLEdBQWEsRUFBRSxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtTQUNGO1FBQ0QsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUFDO1FBQzdGLE1BQU0sYUFBYSxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0M7UUFDRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLHFCQUFxQjtZQUN4QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUFDLEdBQUcscUJBQXFCLENBQUMsTUFBTSxDQUFDO1FBQ2pHLE1BQU0sYUFBYSxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0M7UUFDRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLFFBQXlCO1FBQ3JDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWM7O1FBQzFCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsSUFBSSxJQUFJLENBQUMsNkJBQTZCLE1BQUssTUFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsMENBQUUsRUFBRSxDQUFBLENBQUM7SUFDcEgsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7O2dHQTlVVSx3QkFBd0I7MkVBQXhCLHdCQUF3Qjt1QkFpQnhCLHdCQUF3Qjs7Ozs7K0hBakJ4QixzQkFBa0IsK0lBQWxCLHdCQUFvQiwrSUFBcEIsMkJBQXVCLGlKQUF2Qix5QkFBcUI7O1FDM0JsQyxvQ0FLQztRQUhDLGdIQUFVLHdCQUFvQixJQUFDLHVHQUNoQixpQkFBYSxJQURHLHVHQUVoQixpQkFBYSxJQUZHO1FBSWpDLGlCQUFZO1FBQ1osc0RBQTBFO1FBQ3hFLDRGQTZCZTtRQUNqQixpQkFBOEI7O1FBckM1QiwyQ0FBeUI7UUFNdUIsZUFBdUI7UUFBdkIseUNBQXVCO1FBQ2hDLGVBQWU7UUFBZixnREFBZTs7dUZEbUIzQyx3QkFBd0I7Y0FOcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtxSEFFYyxNQUFNO2tCQUFsQixLQUFLO1lBT0csc0JBQXNCO2tCQUE5QixLQUFLO1lBRUksVUFBVTtrQkFBbkIsTUFBTTtZQUNHLGdCQUFnQjtrQkFBekIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxrQkFBa0I7a0JBQTNCLE1BQU07WUFDRyx3QkFBd0I7a0JBQWpDLE1BQU07WUFDRyxlQUFlO2tCQUF4QixNQUFNO1lBRThCLFFBQVE7a0JBQTVDLFNBQVM7bUJBQUMsd0JBQXdCO1lBaUtuQyxVQUFVO2tCQURULFlBQVk7bUJBQUMsMEJBQTBCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUF5QnBELFlBQVk7a0JBRFgsWUFBWTttQkFBQyw0QkFBNEIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQTRCdEQsZUFBZTtrQkFEZCxZQUFZO21CQUFDLDRCQUE0QixFQUFFLENBQUMsUUFBUSxDQUFDO1lBYXRELGFBQWE7a0JBRFosWUFBWTttQkFBQyw2QkFBNkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZXZUb29sc05vZGUsIEVsZW1lbnRQb3NpdGlvbiwgRXZlbnRzLCBNZXNzYWdlQnVzIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgRmxhdFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHsgQ29tcG9uZW50RGF0YVNvdXJjZSwgRmxhdE5vZGUgfSBmcm9tICcuL2NvbXBvbmVudC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBpc0NoaWxkT2YsIHBhcmVudENvbGxhcHNlZCB9IGZyb20gJy4vZGlyZWN0aXZlLWZvcmVzdC11dGlscyc7XG5pbXBvcnQgeyBJbmRleGVkTm9kZSB9IGZyb20gJy4vaW5kZXgtZm9yZXN0JztcbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgVGFiVXBkYXRlIH0gZnJvbSAnLi4vLi4vdGFiLXVwZGF0ZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGlyZWN0aXZlLWZvcmVzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXJlY3RpdmUtZm9yZXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlyZWN0aXZlLWZvcmVzdC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlRm9yZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzZXQgZm9yZXN0KGZvcmVzdDogRGV2VG9vbHNOb2RlW10pIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl91cGRhdGVGb3Jlc3QoZm9yZXN0KTtcbiAgICBjb25zdCBjaGFuZ2VkID0gcmVzdWx0Lm1vdmVkSXRlbXMubGVuZ3RoIHx8IHJlc3VsdC5uZXdJdGVtcy5sZW5ndGggfHwgcmVzdWx0LnJlbW92ZWRJdGVtcy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuY3VycmVudFNlbGVjdGVkRWxlbWVudCAmJiBjaGFuZ2VkKSB7XG4gICAgICB0aGlzLl9yZXNlbGVjdE5vZGVPblVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBjdXJyZW50U2VsZWN0ZWRFbGVtZW50OiBJbmRleGVkTm9kZTtcblxuICBAT3V0cHV0KCkgc2VsZWN0Tm9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5kZXhlZE5vZGUgfCBudWxsPigpO1xuICBAT3V0cHV0KCkgc2VsZWN0RG9tRWxlbWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5kZXhlZE5vZGU+KCk7XG4gIEBPdXRwdXQoKSBzZXRQYXJlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxGbGF0Tm9kZVtdIHwgbnVsbD4oKTtcbiAgQE91dHB1dCgpIGhpZ2hsaWdodENvbXBvbmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFBvc2l0aW9uPigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlQ29tcG9uZW50SGlnaGxpZ2h0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgdG9nZ2xlSW5zcGVjdG9yID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB2aWV3cG9ydDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuXG4gIGZpbHRlclJlZ2V4ID0gbmV3IFJlZ0V4cCgnLl4nKTtcbiAgY3VycmVudGx5TWF0Y2hlZEluZGV4ID0gLTE7XG5cbiAgc2VsZWN0ZWROb2RlOiBGbGF0Tm9kZSB8IG51bGwgPSBudWxsO1xuICBwYXJlbnRzOiBGbGF0Tm9kZVtdO1xuXG4gIHByaXZhdGUgX2hpZ2hsaWdodElEaW5UcmVlRnJvbUVsZW1lbnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF90YWJVcGRhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBzZXQgaGlnaGxpZ2h0SURpblRyZWVGcm9tRWxlbWVudChpZDogbnVtYmVyIHwgbnVsbCkge1xuICAgIHRoaXMuX2hpZ2hsaWdodElEaW5UcmVlRnJvbUVsZW1lbnQgPSBpZDtcbiAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWFkb25seSB0cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RmxhdE5vZGU+KFxuICAgIChub2RlKSA9PiBub2RlLmxldmVsLFxuICAgIChub2RlKSA9PiBub2RlLmV4cGFuZGFibGVcbiAgKTtcbiAgcmVhZG9ubHkgZGF0YVNvdXJjZSA9IG5ldyBDb21wb25lbnREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wpO1xuICByZWFkb25seSBpdGVtSGVpZ2h0ID0gMTg7XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90YWJVcGRhdGU6IFRhYlVwZGF0ZSxcbiAgICBwcml2YXRlIF9tZXNzYWdlQnVzOiBNZXNzYWdlQnVzPEV2ZW50cz4sXG4gICAgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVUb0luc3BlY3RvckV2ZW50cygpO1xuICAgIHRoaXMuX3RhYlVwZGF0ZVN1YnNjcmlwdGlvbiA9IHRoaXMuX3RhYlVwZGF0ZS50YWJVcGRhdGUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy52aWV3cG9ydCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnZpZXdwb3J0LnNjcm9sbFRvSW5kZXgoMCk7XG4gICAgICAgICAgdGhpcy52aWV3cG9ydC5jaGVja1ZpZXdwb3J0U2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl90YWJVcGRhdGVTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3RhYlVwZGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN1YnNjcmliZVRvSW5zcGVjdG9yRXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuX21lc3NhZ2VCdXMub24oJ3NlbGVjdENvbXBvbmVudCcsIChpZDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdE5vZGVCeUNvbXBvbmVudElkKGlkKTtcbiAgICAgIHRoaXMudG9nZ2xlSW5zcGVjdG9yLmVtaXQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX21lc3NhZ2VCdXMub24oJ2hpZ2hsaWdodENvbXBvbmVudCcsIChpZDogbnVtYmVyKSA9PiB7XG4gICAgICB0aGlzLmhpZ2hsaWdodElEaW5UcmVlRnJvbUVsZW1lbnQgPSBpZDtcbiAgICB9KTtcblxuICAgIHRoaXMuX21lc3NhZ2VCdXMub24oJ3JlbW92ZUNvbXBvbmVudEhpZ2hsaWdodCcsICgpID0+IHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0SURpblRyZWVGcm9tRWxlbWVudCA9IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3ROb2RlQnlDb21wb25lbnRJZChpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZm91bmROb2RlID0gdGhpcy5kYXRhU291cmNlLmRhdGEuZmluZCgobm9kZSkgPT4gbm9kZS5vcmlnaW5hbC5jb21wb25lbnQ/LmlkID09PSBpZCk7XG4gICAgaWYgKGZvdW5kTm9kZSkge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3QoZm91bmROb2RlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWxlY3Qobm9kZTogRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRseU1hdGNoZWRJbmRleCA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZpbmRJbmRleCgobWF0Y2hlZE5vZGUpID0+IG1hdGNoZWROb2RlLmlkID09PSBub2RlLmlkKTtcbiAgICB0aGlzLnNlbGVjdEFuZEVuc3VyZVZpc2libGUobm9kZSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3REb21FbGVtZW50KG5vZGU6IEZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3REb21FbGVtZW50LmVtaXQobm9kZS5vcmlnaW5hbCk7XG4gIH1cblxuICBzZWxlY3RBbmRFbnN1cmVWaXNpYmxlKG5vZGU6IEZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Qobm9kZSk7XG5cbiAgICBjb25zdCBzY3JvbGxQYXJlbnQgPSB0aGlzLnZpZXdwb3J0LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAvLyBUaGUgdG9wIG1vc3QgcG9pbnQgd2Ugc2VlIGFuIGVsZW1lbnRcbiAgICBjb25zdCB0b3AgPSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wO1xuICAgIC8vIFRoYXQncyB0aGUgYm90dG9tIG1vc3QgcG9pbnQgd2UgY3VycmVudGx5IHNlZSBhbiBlbGVtZW50LlxuICAgIGNvbnN0IHBhcmVudEhlaWdodCA9IHNjcm9sbFBhcmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgcGFyZW50SGVpZ2h0O1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuZGF0YVNvdXJjZS5leHBhbmRlZERhdGFWYWx1ZXMuZmluZEluZGV4KChlbCkgPT4gZWwuaWQgPT09IG5vZGUuaWQpO1xuICAgIC8vIFRoZSBub2RlIG1pZ2h0IGJlIGhpZGRlbi5cbiAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtVG9wID0gaWR4ICogdGhpcy5pdGVtSGVpZ2h0O1xuICAgIGlmIChpdGVtVG9wIDwgdG9wKSB7XG4gICAgICBzY3JvbGxQYXJlbnQuc2Nyb2xsVG8oeyB0b3A6IGl0ZW1Ub3AgfSk7XG4gICAgfSBlbHNlIGlmIChib3R0b20gPCBpdGVtVG9wICsgdGhpcy5pdGVtSGVpZ2h0KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuc2Nyb2xsVG8oeyB0b3A6IGl0ZW1Ub3AgLSBwYXJlbnRIZWlnaHQgKyB0aGlzLml0ZW1IZWlnaHQgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0KG5vZGU6IEZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5wb3B1bGF0ZVBhcmVudHMobm9kZS5wb3NpdGlvbik7XG4gICAgdGhpcy5zZWxlY3ROb2RlLmVtaXQobm9kZS5vcmlnaW5hbCk7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlO1xuICB9XG5cbiAgY2xlYXJTZWxlY3RlZE5vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3ROb2RlLmVtaXQobnVsbCk7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBudWxsO1xuICAgIHRoaXMucGFyZW50cyA9IFtdO1xuICAgIHRoaXMuc2V0UGFyZW50cy5lbWl0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZWxlY3ROb2RlT25VcGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZVRoYXRTdGlsbEV4aXN0cyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRGbGF0Tm9kZUZyb21JbmRleGVkTm9kZSh0aGlzLmN1cnJlbnRTZWxlY3RlZEVsZW1lbnQpO1xuICAgIGlmIChub2RlVGhhdFN0aWxsRXhpc3RzKSB7XG4gICAgICB0aGlzLnNlbGVjdChub2RlVGhhdFN0aWxsRXhpc3RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGVkTm9kZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZvcmVzdChcbiAgICBmb3Jlc3Q6IERldlRvb2xzTm9kZVtdXG4gICk6IHsgbmV3SXRlbXM6IEZsYXROb2RlW107IG1vdmVkSXRlbXM6IEZsYXROb2RlW107IHJlbW92ZWRJdGVtczogRmxhdE5vZGVbXSB9IHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKGZvcmVzdCk7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCAmJiBmb3Jlc3QgJiYgZm9yZXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy50cmVlQ29udHJvbC5leHBhbmRBbGwoKTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHJlc3VsdC5uZXdJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5uZXdJdGVtID0gZmFsc2UpKTtcbiAgICB9XG4gICAgLy8gV2Ugd2FudCB0byBleHBhbmQgdGhlbSBvbmNlIHRoZXkgYXJlIHJlbmRlcmVkLlxuICAgIHJlc3VsdC5uZXdJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcG9wdWxhdGVQYXJlbnRzKHBvc2l0aW9uOiBFbGVtZW50UG9zaXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudHMgPSBwb3NpdGlvbi5yZWR1Y2UoKG5vZGVzOiBGbGF0Tm9kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBsZXQgbm9kZVBvc2l0aW9uID0gW2luZGV4XTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5vZGVQb3NpdGlvbiA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdLnBvc2l0aW9uLmNvbmNhdChpbmRleCk7XG4gICAgICB9XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHNlbGVjdGVkTm9kZSB0byBiZSB1bmRlZmluZWRcbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgd2UgZG9uJ3Qgd2FudCB0byBwdXNoIGl0IHRvIHRoZSBsaXN0XG4gICAgICAvLyBvZiBwYXJlbnQgbm9kZXMuIEluc3RlYWQsIHdlIHdhbnQgdG8gcmVwb3J0IGEgd2FybmluZy5cbiAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZSA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucG9zaXRpb24udG9TdHJpbmcoKSA9PT0gbm9kZVBvc2l0aW9uLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKHNlbGVjdGVkTm9kZSkge1xuICAgICAgICBub2Rlcy5wdXNoKHNlbGVjdGVkTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NhbnQgZmluZCBub2RlIGZvciBwb3NpdGlvbicsIG5vZGVQb3NpdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfSwgW10pO1xuICAgIHRoaXMuc2V0UGFyZW50cy5lbWl0KHRoaXMucGFyZW50cyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLkFycm93VXAnLCBbJyRldmVudCddKVxuICBuYXZpZ2F0ZVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFZGl0aW5nRGlyZWN0aXZlU3RhdGUoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmV4cGFuZGVkRGF0YVZhbHVlcztcbiAgICBsZXQgcHJldklkeCA9IGRhdGEuZmluZEluZGV4KChlKSA9PiB0aGlzLnNlbGVjdGVkTm9kZSAmJiBlLmlkID09PSB0aGlzLnNlbGVjdGVkTm9kZS5pZCkgLSAxO1xuICAgIGlmIChwcmV2SWR4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcHJldk5vZGUgPSBkYXRhW3ByZXZJZHhdO1xuICAgIGNvbnN0IGN1cnJlbnROb2RlID0gZGF0YVtwcmV2SWR4ICsgMV07XG4gICAgaWYgKHByZXZOb2RlLnBvc2l0aW9uLmxlbmd0aCA8PSBjdXJyZW50Tm9kZS5wb3NpdGlvbi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdEFuZEVuc3VyZVZpc2libGUoZGF0YVtwcmV2SWR4XSk7XG4gICAgfVxuICAgIHdoaWxlIChwcmV2SWR4ID49IDAgJiYgcGFyZW50Q29sbGFwc2VkKHByZXZJZHgsIGRhdGEsIHRoaXMudHJlZUNvbnRyb2wpKSB7XG4gICAgICBwcmV2SWR4LS07XG4gICAgICBwcmV2Tm9kZSA9IGRhdGFbcHJldklkeF07XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0QW5kRW5zdXJlVmlzaWJsZShkYXRhW3ByZXZJZHhdKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24uQXJyb3dEb3duJywgWyckZXZlbnQnXSlcbiAgbmF2aWdhdGVEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFZGl0aW5nRGlyZWN0aXZlU3RhdGUoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhU291cmNlLmV4cGFuZGVkRGF0YVZhbHVlcztcbiAgICBsZXQgaWR4ID0gZGF0YS5maW5kSW5kZXgoKGUpID0+IHRoaXMuc2VsZWN0ZWROb2RlICYmIGUuaWQgPT09IHRoaXMuc2VsZWN0ZWROb2RlLmlkKTtcbiAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGRhdGFbaWR4XTtcbiAgICBpZiAoIXRoaXMudHJlZUNvbnRyb2wuaXNFeHBhbmRlZChjdXJyZW50Tm9kZSkgJiYgY3VycmVudE5vZGUuZXhwYW5kYWJsZSkge1xuICAgICAgZm9yIChsZXQgaSA9IGlkeCArIDE7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkYXRhW2ldO1xuICAgICAgICBpZiAoIWlzQ2hpbGRPZihub2RlLnBvc2l0aW9uLCBjdXJyZW50Tm9kZS5wb3NpdGlvbikpIHtcbiAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkeCsrO1xuICAgIH1cbiAgICBpZiAoaWR4ID49IGRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0QW5kRW5zdXJlVmlzaWJsZShkYXRhW2lkeF0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5BcnJvd0xlZnQnLCBbJyRldmVudCddKVxuICBjb2xsYXBzZUN1cnJlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0VkaXRpbmdEaXJlY3RpdmVTdGF0ZShldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5BcnJvd1JpZ2h0JywgWyckZXZlbnQnXSlcbiAgZXhwYW5kQ3VycmVudChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRWRpdGluZ0RpcmVjdGl2ZVN0YXRlKGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaXNFZGl0aW5nRGlyZWN0aXZlU3RhdGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lID09PSAnSU5QVVQnIHx8ICF0aGlzLnNlbGVjdGVkTm9kZTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQobm9kZTogRmxhdE5vZGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnNlbGVjdGVkTm9kZSAmJiB0aGlzLnNlbGVjdGVkTm9kZS5pZCA9PT0gbm9kZS5pZDtcbiAgfVxuXG4gIGlzTWF0Y2hlZChub2RlOiBGbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlclJlZ2V4LnRlc3Qobm9kZS5uYW1lLnRvTG93ZXJDYXNlKCkpIHx8IHRoaXMuZmlsdGVyUmVnZXgudGVzdChub2RlLmRpcmVjdGl2ZXMudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXIoZmlsdGVyVGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50bHlNYXRjaGVkSW5kZXggPSAtMTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmZpbHRlclJlZ2V4ID0gbmV3IFJlZ0V4cChmaWx0ZXJUZXh0LnRvTG93ZXJDYXNlKCkgfHwgJy5eJyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLmZpbHRlclJlZ2V4ID0gbmV3IFJlZ0V4cCgnLl4nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kTWF0Y2hlZE5vZGVzKCk6IG51bWJlcltdIHtcbiAgICBjb25zdCBpbmRleGVzT2ZNYXRjaGVkTm9kZXM6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaXNNYXRjaGVkKHRoaXMuZGF0YVNvdXJjZS5kYXRhW2ldKSkge1xuICAgICAgICBpbmRleGVzT2ZNYXRjaGVkTm9kZXMucHVzaChpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4ZXNPZk1hdGNoZWROb2RlcztcbiAgfVxuXG4gIGdldCBoYXNNYXRjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9maW5kTWF0Y2hlZE5vZGVzKCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIG5leHRNYXRjaGVkKCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ZXNPZk1hdGNoZWROb2RlcyA9IHRoaXMuX2ZpbmRNYXRjaGVkTm9kZXMoKTtcbiAgICB0aGlzLmN1cnJlbnRseU1hdGNoZWRJbmRleCA9ICh0aGlzLmN1cnJlbnRseU1hdGNoZWRJbmRleCArIDEpICUgaW5kZXhlc09mTWF0Y2hlZE5vZGVzLmxlbmd0aDtcbiAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gaW5kZXhlc09mTWF0Y2hlZE5vZGVzW3RoaXMuY3VycmVudGx5TWF0Y2hlZEluZGV4XTtcbiAgICBjb25zdCBub2RlVG9TZWxlY3QgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YVtpbmRleFRvU2VsZWN0XTtcbiAgICBpZiAoaW5kZXhUb1NlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChub2RlVG9TZWxlY3QpO1xuICAgICAgdGhpcy5zZWxlY3RBbmRFbnN1cmVWaXNpYmxlKG5vZGVUb1NlbGVjdCk7XG4gICAgfVxuICAgIGNvbnN0IG5vZGVJc1Zpc2libGUgPSB0aGlzLmRhdGFTb3VyY2UuZXhwYW5kZWREYXRhVmFsdWVzLmZpbmQoKG5vZGUpID0+IG5vZGUgPT09IG5vZGVUb1NlbGVjdCk7XG4gICAgaWYgKCFub2RlSXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocGFyZW50KSA9PiB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChwYXJlbnQpKTtcbiAgICB9XG4gIH1cblxuICBwcmV2TWF0Y2hlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleGVzT2ZNYXRjaGVkTm9kZXMgPSB0aGlzLl9maW5kTWF0Y2hlZE5vZGVzKCk7XG4gICAgdGhpcy5jdXJyZW50bHlNYXRjaGVkSW5kZXggPVxuICAgICAgKHRoaXMuY3VycmVudGx5TWF0Y2hlZEluZGV4IC0gMSArIGluZGV4ZXNPZk1hdGNoZWROb2Rlcy5sZW5ndGgpICUgaW5kZXhlc09mTWF0Y2hlZE5vZGVzLmxlbmd0aDtcbiAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gaW5kZXhlc09mTWF0Y2hlZE5vZGVzW3RoaXMuY3VycmVudGx5TWF0Y2hlZEluZGV4XTtcbiAgICBjb25zdCBub2RlVG9TZWxlY3QgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YVtpbmRleFRvU2VsZWN0XTtcbiAgICBpZiAoaW5kZXhUb1NlbGVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChub2RlVG9TZWxlY3QpO1xuICAgICAgdGhpcy5zZWxlY3RBbmRFbnN1cmVWaXNpYmxlKG5vZGVUb1NlbGVjdCk7XG4gICAgfVxuICAgIGNvbnN0IG5vZGVJc1Zpc2libGUgPSB0aGlzLmRhdGFTb3VyY2UuZXhwYW5kZWREYXRhVmFsdWVzLmZpbmQoKG5vZGUpID0+IG5vZGUgPT09IG5vZGVUb1NlbGVjdCk7XG4gICAgaWYgKCFub2RlSXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocGFyZW50KSA9PiB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChwYXJlbnQpKTtcbiAgICB9XG4gIH1cblxuICBoaWdobGlnaHROb2RlKHBvc2l0aW9uOiBFbGVtZW50UG9zaXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLl9oaWdobGlnaHRJRGluVHJlZUZyb21FbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLmhpZ2hsaWdodENvbXBvbmVudC5lbWl0KHBvc2l0aW9uKTtcbiAgfVxuXG4gIHJlbW92ZUhpZ2hsaWdodCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUNvbXBvbmVudEhpZ2hsaWdodC5lbWl0KCk7XG4gIH1cblxuICBpc0hpZ2hsaWdodGVkKG5vZGU6IEZsYXROb2RlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5faGlnaGxpZ2h0SURpblRyZWVGcm9tRWxlbWVudCAmJiB0aGlzLl9oaWdobGlnaHRJRGluVHJlZUZyb21FbGVtZW50ID09PSBub2RlLm9yaWdpbmFsLmNvbXBvbmVudD8uaWQ7XG4gIH1cblxuICBpc0VsZW1lbnQobm9kZTogRmxhdE5vZGUpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIG5vZGUub3JpZ2luYWwuY29tcG9uZW50ICYmIG5vZGUub3JpZ2luYWwuY29tcG9uZW50LmlzRWxlbWVudDtcbiAgfVxufVxuIiwiPG5nLWZpbHRlclxuICBbaGFzTWF0Y2hlZF09XCJoYXNNYXRjaGVkXCJcbiAgKGZpbHRlcik9XCJoYW5kbGVGaWx0ZXIoJGV2ZW50KVwiXG4gIChuZXh0TWF0Y2hlZCk9XCJuZXh0TWF0Y2hlZCgpXCJcbiAgKHByZXZNYXRjaGVkKT1cInByZXZNYXRjaGVkKClcIlxuPlxuPC9uZy1maWx0ZXI+XG48Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IGNsYXNzPVwidHJlZS13cmFwcGVyXCIgW2l0ZW1TaXplXT1cIml0ZW1IZWlnaHRcIj5cbiAgPG5nLWNvbnRhaW5lciAqY2RrVmlydHVhbEZvcj1cImxldCBub2RlIG9mIGRhdGFTb3VyY2U7IGxldCBpZHggPSBpbmRleFwiPlxuICAgIDxkaXZcbiAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgbWF0Y2hlZDogaXNNYXRjaGVkKG5vZGUpLFxuICAgICAgICBzZWxlY3RlZDogaXNTZWxlY3RlZChub2RlKSxcbiAgICAgICAgaGlnaGxpZ2h0ZWQ6IGlzSGlnaGxpZ2h0ZWQobm9kZSksXG4gICAgICAgICduZXctbm9kZSc6IG5vZGUubmV3SXRlbVxuICAgICAgfVwiXG4gICAgICBjbGFzcz1cInRyZWUtbm9kZVwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0QW5kRW5zdXJlVmlzaWJsZShub2RlKVwiXG4gICAgICAoZGJsY2xpY2spPVwiaGFuZGxlU2VsZWN0RG9tRWxlbWVudChub2RlKVwiXG4gICAgICAobW91c2VlbnRlcik9XCJoaWdobGlnaHROb2RlKG5vZGUucG9zaXRpb24pXCJcbiAgICAgIChtb3VzZWxlYXZlKT1cInJlbW92ZUhpZ2hsaWdodCgpXCJcbiAgICAgIFtzdHlsZS5wYWRkaW5nLWxlZnRdPVwiMTUgKyAxNSAqIG5vZGUubGV2ZWwgKyAncHgnXCJcbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIFtzdHlsZS5sZWZ0XT1cIjE1ICogbm9kZS5sZXZlbCArICdweCdcIlxuICAgICAgICAqbmdJZj1cIm5vZGUuZXhwYW5kYWJsZVwiXG4gICAgICAgIChjbGljayk9XCJ0cmVlQ29udHJvbC50b2dnbGUobm9kZSlcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIid0b2dnbGUgJyArIG5vZGUubmFtZVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAgICB7eyB0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0JyB9fVxuICAgICAgICA8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzcz1cImVsZW1lbnQtbmFtZVwiIFtjbGFzcy5hbmd1bGFyLWVsZW1lbnRdPVwiaXNFbGVtZW50KG5vZGUpXCI+e3sgbm9kZS5uYW1lIH19PC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCJub2RlLmRpcmVjdGl2ZXNcIiBjbGFzcz1cImRpci1uYW1lc1wiPlt7eyBub2RlLmRpcmVjdGl2ZXMgfX1dPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjb25zb2xlLXJlZmVyZW5jZVwiICpuZ0lmPVwiaXNTZWxlY3RlZChub2RlKVwiPiA9PSAkbmcwIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiJdfQ==