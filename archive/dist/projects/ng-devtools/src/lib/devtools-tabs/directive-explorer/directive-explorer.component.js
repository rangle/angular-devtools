import { Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';
import { PropertyQueryTypes, } from 'protocol';
import { ElementPropertyResolver } from './property-resolver/element-property-resolver';
import { DirectiveForestComponent } from './directive-forest/directive-forest.component';
import { constructPathOfKeysToPropertyValue } from './property-resolver/directive-property-resolver';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SplitComponent } from '../../../lib/vendor/angular-split/public_api';
import * as i0 from "@angular/core";
import * as i1 from "../../application-operations";
import * as i2 from "protocol";
import * as i3 from "./property-resolver/element-property-resolver";
import * as i4 from "../../vendor/angular-split/lib/component/split.component";
import * as i5 from "../../vendor/angular-split/lib/directive/splitArea.directive";
import * as i6 from "./directive-forest/directive-forest.component";
import * as i7 from "@angular/common";
import * as i8 from "./property-tab/property-tab.component";
import * as i9 from "./breadcrumbs/breadcrumbs.component";
const _c0 = ["directiveForestSplitArea"];
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
export class DirectiveExplorerComponent {
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
DirectiveExplorerComponent.ɵfac = function DirectiveExplorerComponent_Factory(t) { return new (t || DirectiveExplorerComponent)(i0.ɵɵdirectiveInject(i1.ApplicationOperations), i0.ɵɵdirectiveInject(i2.MessageBus), i0.ɵɵdirectiveInject(i3.ElementPropertyResolver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
DirectiveExplorerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DirectiveExplorerComponent, selectors: [["ng-directive-explorer"]], viewQuery: function DirectiveExplorerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(SplitComponent, 7, ElementRef);
        i0.ɵɵviewQuery(_c0, 7, ElementRef);
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
    } }, directives: [i4.SplitComponent, i5.SplitAreaDirective, i6.DirectiveForestComponent, i7.NgIf, i8.PropertyTabComponent, i9.BreadcrumbsComponent], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n\n  ::ng-deep {\n    as-split-area {\n      overflow-y: hidden;\n    }\n\n    .as-split-gutter-icon {\n      display: none;\n    }\n  }\n}\n\n.property-tab-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n}"] });
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
    }], function () { return [{ type: i1.ApplicationOperations }, { type: i2.MessageBus }, { type: i3.ElementPropertyResolver }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }]; }, { toggleInspector: [{
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
//# sourceMappingURL=directive-explorer.component.js.map