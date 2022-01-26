import { Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';
import { PropertyQueryTypes, } from 'protocol';
import { ElementPropertyResolver } from './property-resolver/element-property-resolver';
import { DirectiveForestComponent } from './directive-forest/directive-forest.component';
import { constructPathOfKeysToPropertyValue } from './property-resolver/directive-property-resolver';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SplitComponent } from '../../vendor/angular-split/public_api';
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
    } }, directives: [i4.SplitComponent, i5.SplitAreaDirective, i6.DirectiveForestComponent, i7.NgIf, i8.PropertyTabComponent, i9.BreadcrumbsComponent], styles: ["[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]     as-split-area{overflow-y:hidden}[_nghost-%COMP%]     .as-split-gutter-icon{display:none}.property-tab-wrapper[_ngcontent-%COMP%]{overflow:auto;height:100%;width:100%}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLWV4cGxvcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvZGlyZWN0aXZlLWV4cGxvcmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvZGlyZWN0aXZlLWV4cGxvcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFJWixNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFRTCxrQkFBa0IsR0FFbkIsTUFBTSxVQUFVLENBQUM7QUFHbEIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFHeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQ2QvRCwwQ0FNQztJQUxDLG9PQUFnQywrTkFBQSxnT0FBQTtJQU1sQyxpQkFBaUI7OztJQUZmLHdDQUFtQjs7QURXN0IsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFjLEVBQUUsQ0FBYyxFQUFFLEVBQUU7SUFDeEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFT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QUUsQ0FBQyxxQ0FBcUMsQ0FBQztnQkFDbEQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSx1QkFBdUI7d0JBQ2hDLFFBQVEsRUFBRSx1QkFBdUI7cUJBQ2xDO2lCQUNGO2FBQ0Y7NExBRVcsZUFBZTtrQkFBeEIsTUFBTTtZQU13RCxlQUFlO2tCQUE3RSxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNjLHdCQUF3QjtrQkFBbEcsU0FBUzttQkFBQywwQkFBMEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQXVCcEMsZUFBZTtrQkFBbkQsU0FBUzttQkFBQyx3QkFBd0I7WUFDRixXQUFXO2tCQUEzQyxTQUFTO21CQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWVzc2FnZUJ1cyxcbiAgRXZlbnRzLFxuICBEZXZUb29sc05vZGUsXG4gIENvbXBvbmVudEV4cGxvcmVyVmlld1F1ZXJ5LFxuICBDb21wb25lbnRFeHBsb3JlclZpZXcsXG4gIEVsZW1lbnRQb3NpdGlvbixcbiAgUHJvcGVydHlRdWVyeSxcbiAgUHJvcGVydHlRdWVyeVR5cGVzLFxuICBEaXJlY3RpdmVQb3NpdGlvbixcbn0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgSW5kZXhlZE5vZGUgfSBmcm9tICcuL2RpcmVjdGl2ZS1mb3Jlc3QvaW5kZXgtZm9yZXN0JztcbmltcG9ydCB7IEFwcGxpY2F0aW9uT3BlcmF0aW9ucyB9IGZyb20gJy4uLy4uL2FwcGxpY2F0aW9uLW9wZXJhdGlvbnMnO1xuaW1wb3J0IHsgRWxlbWVudFByb3BlcnR5UmVzb2x2ZXIgfSBmcm9tICcuL3Byb3BlcnR5LXJlc29sdmVyL2VsZW1lbnQtcHJvcGVydHktcmVzb2x2ZXInO1xuaW1wb3J0IHsgRmxhdE5vZGUgfSBmcm9tICcuL2RpcmVjdGl2ZS1mb3Jlc3QvY29tcG9uZW50LWRhdGEtc291cmNlJztcbmltcG9ydCB7IEZsYXROb2RlIGFzIFByb3BlcnR5RmxhdE5vZGUgfSBmcm9tICcuL3Byb3BlcnR5LXJlc29sdmVyL2VsZW1lbnQtcHJvcGVydHktcmVzb2x2ZXInO1xuaW1wb3J0IHsgRGlyZWN0aXZlRm9yZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9kaXJlY3RpdmUtZm9yZXN0L2RpcmVjdGl2ZS1mb3Jlc3QuY29tcG9uZW50JztcbmltcG9ydCB7IGNvbnN0cnVjdFBhdGhPZktleXNUb1Byb3BlcnR5VmFsdWUgfSBmcm9tICcuL3Byb3BlcnR5LXJlc29sdmVyL2RpcmVjdGl2ZS1wcm9wZXJ0eS1yZXNvbHZlcic7XG5pbXBvcnQgeyBCcmVhZGNydW1ic0NvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFNwbGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdmVuZG9yL2FuZ3VsYXItc3BsaXQvcHVibGljX2FwaSc7XG5cbmNvbnN0IHNhbWVEaXJlY3RpdmVzID0gKGE6IEluZGV4ZWROb2RlLCBiOiBJbmRleGVkTm9kZSkgPT4ge1xuICBpZiAoKGEuY29tcG9uZW50ICYmICFiLmNvbXBvbmVudCkgfHwgKCFhLmNvbXBvbmVudCAmJiBiLmNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGEuY29tcG9uZW50ICYmIGIuY29tcG9uZW50ICYmIGEuY29tcG9uZW50LmlkICE9PSBiLmNvbXBvbmVudC5pZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhRGlyZWN0aXZlcyA9IG5ldyBTZXQoYS5kaXJlY3RpdmVzLm1hcCgoZCkgPT4gZC5pZCkpO1xuICBmb3IgKGNvbnN0IGRpciBvZiBiLmRpcmVjdGl2ZXMpIHtcbiAgICBpZiAoIWFEaXJlY3RpdmVzLmhhcyhkaXIuaWQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZGlyZWN0aXZlLWV4cGxvcmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpcmVjdGl2ZS1leHBsb3Jlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpcmVjdGl2ZS1leHBsb3Jlci5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBFbGVtZW50UHJvcGVydHlSZXNvbHZlcixcbiAgICAgIHVzZUNsYXNzOiBFbGVtZW50UHJvcGVydHlSZXNvbHZlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmVFeHBsb3JlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIHRvZ2dsZUluc3BlY3RvciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjdXJyZW50U2VsZWN0ZWRFbGVtZW50OiBJbmRleGVkTm9kZSB8IG51bGwgPSBudWxsO1xuICBmb3Jlc3Q6IERldlRvb2xzTm9kZVtdO1xuICBzcGxpdERpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICBAVmlld0NoaWxkKFNwbGl0Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBzcGxpdEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RpcmVjdGl2ZUZvcmVzdFNwbGl0QXJlYScsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGRpcmVjdGl2ZUZvcmVzdFNwbGl0QXJlYTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIF9yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT5cbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRFbnRyeSA9IGVudHJpZXNbMF07XG5cbiAgICAgIGlmIChyZXNpemVkRW50cnkudGFyZ2V0ID09PSB0aGlzLnNwbGl0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc3BsaXREaXJlY3Rpb24gPSByZXNpemVkRW50cnkuY29udGVudFJlY3Qud2lkdGggPD0gNTAwID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmJyZWFkY3J1bWJzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5icmVhZGNydW1icy51cGRhdGVTY3JvbGxCdXR0b25WaXNpYmlsaXR5KCk7XG4gICAgfSlcbiAgKTtcblxuICBwcml2YXRlIF9jbGlja2VkRWxlbWVudDogSW5kZXhlZE5vZGUgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfcmVmcmVzaFJldHJ5VGltZW91dDogYW55ID0gbnVsbDtcblxuICBwYXJlbnRzOiBGbGF0Tm9kZVtdIHwgbnVsbCA9IG51bGw7XG5cbiAgQFZpZXdDaGlsZChEaXJlY3RpdmVGb3Jlc3RDb21wb25lbnQpIGRpcmVjdGl2ZUZvcmVzdDogRGlyZWN0aXZlRm9yZXN0Q29tcG9uZW50O1xuICBAVmlld0NoaWxkKEJyZWFkY3J1bWJzQ29tcG9uZW50KSBicmVhZGNydW1iczogQnJlYWRjcnVtYnNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYXBwT3BlcmF0aW9uczogQXBwbGljYXRpb25PcGVyYXRpb25zLFxuICAgIHByaXZhdGUgX21lc3NhZ2VCdXM6IE1lc3NhZ2VCdXM8RXZlbnRzPixcbiAgICBwcml2YXRlIF9wcm9wUmVzb2x2ZXI6IEVsZW1lbnRQcm9wZXJ0eVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlVG9CYWNrZW5kRXZlbnRzKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5fcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnNwbGl0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZGlyZWN0aXZlRm9yZXN0U3BsaXRBcmVhLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuc3BsaXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3Jlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmRpcmVjdGl2ZUZvcmVzdFNwbGl0QXJlYS5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGhhbmRsZU5vZGVTZWxlY3Rpb24obm9kZTogSW5kZXhlZE5vZGUgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIC8vIFdlIHdhbnQgdG8gZ3VhcmFudGVlIHRoYXQgd2UncmUgbm90IHJldXNpbmcgYW55IG9mIHRoZSBwcmV2aW91cyBwcm9wZXJ0aWVzLlxuICAgICAgLy8gVGhhdCdzIHBvc3NpYmxlIGlmIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCBhbiBOZ0Zvck9mIGFuZCBhZnRlciB0aGF0XG4gICAgICAvLyB0aGV5IHNlbGVjdCBhbm90aGVyIE5nRm9yT2YgaW5zdGFuY2UuIEluIHRoaXMgY2FzZSwgd2UgZG9uJ3Qgd2FudCB0byBkaWZmIHRoZSBwcm9wc1xuICAgICAgLy8gd2Ugd2FudCB0byByZW5kZXIgZnJvbSBzY3JhdGNoLlxuICAgICAgaWYgKHRoaXMuX2NsaWNrZWRFbGVtZW50ICYmICFzYW1lRGlyZWN0aXZlcyh0aGlzLl9jbGlja2VkRWxlbWVudCwgbm9kZSkpIHtcbiAgICAgICAgdGhpcy5fcHJvcFJlc29sdmVyLmNsZWFyUHJvcGVydGllcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xpY2tlZEVsZW1lbnQgPSBub2RlO1xuICAgICAgdGhpcy5fbWVzc2FnZUJ1cy5lbWl0KCdzZXRTZWxlY3RlZENvbXBvbmVudCcsIFtub2RlLnBvc2l0aW9uXSk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2xpY2tlZEVsZW1lbnQgPSB0aGlzLmN1cnJlbnRTZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHN1YnNjcmliZVRvQmFja2VuZEV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLl9tZXNzYWdlQnVzLm9uKCdsYXRlc3RDb21wb25lbnRFeHBsb3JlclZpZXcnLCAodmlldzogQ29tcG9uZW50RXhwbG9yZXJWaWV3KSA9PiB7XG4gICAgICB0aGlzLmZvcmVzdCA9IHZpZXcuZm9yZXN0O1xuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5fY2xpY2tlZEVsZW1lbnQ7XG4gICAgICBpZiAodmlldy5wcm9wZXJ0aWVzICYmIHRoaXMuY3VycmVudFNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9wcm9wUmVzb2x2ZXIuc2V0UHJvcGVydGllcyh0aGlzLmN1cnJlbnRTZWxlY3RlZEVsZW1lbnQsIHZpZXcucHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tZXNzYWdlQnVzLm9uKCdjb21wb25lbnRUcmVlRGlydHknLCAoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSB0aGlzLl9tZXNzYWdlQnVzLmVtaXQoJ2dldExhdGVzdENvbXBvbmVudEV4cGxvcmVyVmlldycsIFt0aGlzLl9jb25zdHJ1Y3RWaWV3UXVlcnkoKV0pO1xuICAgIC8vIElmIHRoZSBldmVudCB3YXMgbm90IHRocm90dGxlZCwgd2Ugbm8gbG9uZ2VyIG5lZWQgdG8gcmV0cnkuXG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZWZyZXNoUmV0cnlUaW1lb3V0KTtcbiAgICAgIHRoaXMuX3JlZnJlc2hSZXRyeVRpbWVvdXQgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgZXZlbnQgd2FzIHRocm90dGxlZCBhbmQgd2UgaGF2ZW4ndCBzY2hlZHVsZWQgYSByZXRyeSB5ZXQuXG4gICAgaWYgKCF0aGlzLl9yZWZyZXNoUmV0cnlUaW1lb3V0KSB7XG4gICAgICB0aGlzLl9yZWZyZXNoUmV0cnlUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlZnJlc2goKSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICB2aWV3U291cmNlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jdXJyZW50U2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2FwcE9wZXJhdGlvbnMudmlld1NvdXJjZSh0aGlzLmN1cnJlbnRTZWxlY3RlZEVsZW1lbnQucG9zaXRpb24pO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0RG9tRWxlbWVudChub2RlOiBJbmRleGVkTm9kZSk6IHZvaWQge1xuICAgIHRoaXMuX2FwcE9wZXJhdGlvbnMuc2VsZWN0RG9tRWxlbWVudChub2RlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGhpZ2hsaWdodChub2RlOiBGbGF0Tm9kZSk6IHZvaWQge1xuICAgIGlmICghbm9kZS5vcmlnaW5hbC5jb21wb25lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWVzc2FnZUJ1cy5lbWl0KCdjcmVhdGVIaWdobGlnaHRPdmVybGF5JywgW25vZGUucG9zaXRpb25dKTtcbiAgfVxuXG4gIHVuaGlnaGxpZ2h0KCk6IHZvaWQge1xuICAgIHRoaXMuX21lc3NhZ2VCdXMuZW1pdCgncmVtb3ZlSGlnaGxpZ2h0T3ZlcmxheScpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3RydWN0Vmlld1F1ZXJ5KCk6IENvbXBvbmVudEV4cGxvcmVyVmlld1F1ZXJ5IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXRoaXMuX2NsaWNrZWRFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZEVsZW1lbnQ6IHRoaXMuX2NsaWNrZWRFbGVtZW50LnBvc2l0aW9uLFxuICAgICAgcHJvcGVydHlRdWVyeTogdGhpcy5fZ2V0UHJvcGVydHlRdWVyeSgpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9wZXJ0eVF1ZXJ5KCk6IFByb3BlcnR5UXVlcnkge1xuICAgIC8vIEhlcmUgd2UgaGFuZGxlIHRoZSBjYXNlIHdoZW4gYSBnaXZlbiBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAgLy8gV2UgY2hlY2sgaWYgd2UncmUgZGVhbGluZyB3aXRoIHRoZSBzYW1lIGluc3RhbmNlIChpLmUuLCBpZiB3ZSBoYXZlIHRoZSBzYW1lXG4gICAgLy8gc2V0IG9mIGRpcmVjdGl2ZXMgYW5kIGNvbXBvbmVudCBvbiBpdCksIGlmIHdlIGRvLCB3ZSB3YW50IHRvIGdldCB0aGUgc2FtZVxuICAgIC8vIHNldCBvZiBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBhbHJlYWR5IGV4cGFuZGVkLlxuICAgIGlmIChcbiAgICAgICF0aGlzLl9jbGlja2VkRWxlbWVudCB8fFxuICAgICAgIXRoaXMuY3VycmVudFNlbGVjdGVkRWxlbWVudCB8fFxuICAgICAgIXNhbWVEaXJlY3RpdmVzKHRoaXMuX2NsaWNrZWRFbGVtZW50LCB0aGlzLmN1cnJlbnRTZWxlY3RlZEVsZW1lbnQpXG4gICAgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBQcm9wZXJ0eVF1ZXJ5VHlwZXMuQWxsLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFByb3BlcnR5UXVlcnlUeXBlcy5TcGVjaWZpZWQsXG4gICAgICBwcm9wZXJ0aWVzOiB0aGlzLl9wcm9wUmVzb2x2ZXIuZ2V0RXhwYW5kZWRQcm9wZXJ0aWVzKCkgfHwge30sXG4gICAgfTtcbiAgfVxuXG4gIGhpZ2hsaWdodENvbXBvbmVudChwb3NpdGlvbjogRWxlbWVudFBvc2l0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5fbWVzc2FnZUJ1cy5lbWl0KCdjcmVhdGVIaWdobGlnaHRPdmVybGF5JywgW3Bvc2l0aW9uXSk7XG4gIH1cblxuICByZW1vdmVDb21wb25lbnRIaWdobGlnaHQoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVzc2FnZUJ1cy5lbWl0KCdyZW1vdmVIaWdobGlnaHRPdmVybGF5Jyk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3Qobm9kZTogRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGl2ZUZvcmVzdC5oYW5kbGVTZWxlY3Qobm9kZSk7XG4gIH1cblxuICBoYW5kbGVTZXRQYXJlbnRzKHBhcmVudHM6IEZsYXROb2RlW10gfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgaW5zcGVjdCh7IG5vZGUsIGRpcmVjdGl2ZVBvc2l0aW9uIH06IHsgbm9kZTogUHJvcGVydHlGbGF0Tm9kZTsgZGlyZWN0aXZlUG9zaXRpb246IERpcmVjdGl2ZVBvc2l0aW9uIH0pOiB2b2lkIHtcbiAgICBjb25zdCBvYmplY3RQYXRoID0gY29uc3RydWN0UGF0aE9mS2V5c1RvUHJvcGVydHlWYWx1ZShub2RlLnByb3ApO1xuICAgIHRoaXMuX2FwcE9wZXJhdGlvbnMuaW5zcGVjdChkaXJlY3RpdmVQb3NpdGlvbiwgb2JqZWN0UGF0aCk7XG4gIH1cbn1cbiIsIjxhcy1zcGxpdCB1bml0PVwicGVyY2VudFwiIFtkaXJlY3Rpb25dPVwic3BsaXREaXJlY3Rpb25cIiBbZ3V0dGVyU2l6ZV09XCI5XCI+XG4gIDxhcy1zcGxpdC1hcmVhICNkaXJlY3RpdmVGb3Jlc3RTcGxpdEFyZWEgc2l6ZT1cIjYwXCI+XG4gICAgPGFzLXNwbGl0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgW2d1dHRlclNpemVdPVwiOVwiIHVuaXQ9XCJwaXhlbFwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+XG4gICAgICA8YXMtc3BsaXQtYXJlYSBzaXplPVwiKlwiPlxuICAgICAgICA8bmctZGlyZWN0aXZlLWZvcmVzdFxuICAgICAgICAgIChzZWxlY3ROb2RlKT1cImhhbmRsZU5vZGVTZWxlY3Rpb24oJGV2ZW50KVwiXG4gICAgICAgICAgKHNlbGVjdERvbUVsZW1lbnQpPVwiaGFuZGxlU2VsZWN0RG9tRWxlbWVudCgkZXZlbnQpXCJcbiAgICAgICAgICAoc2V0UGFyZW50cyk9XCJoYW5kbGVTZXRQYXJlbnRzKCRldmVudClcIlxuICAgICAgICAgIChoaWdobGlnaHRDb21wb25lbnQpPVwiaGlnaGxpZ2h0Q29tcG9uZW50KCRldmVudClcIlxuICAgICAgICAgIChyZW1vdmVDb21wb25lbnRIaWdobGlnaHQpPVwicmVtb3ZlQ29tcG9uZW50SGlnaGxpZ2h0KClcIlxuICAgICAgICAgICh0b2dnbGVJbnNwZWN0b3IpPVwidG9nZ2xlSW5zcGVjdG9yLmVtaXQoKVwiXG4gICAgICAgICAgW2ZvcmVzdF09XCJmb3Jlc3RcIlxuICAgICAgICAgIFtjdXJyZW50U2VsZWN0ZWRFbGVtZW50XT1cImN1cnJlbnRTZWxlY3RlZEVsZW1lbnRcIlxuICAgICAgICA+PC9uZy1kaXJlY3RpdmUtZm9yZXN0PlxuICAgICAgPC9hcy1zcGxpdC1hcmVhPlxuICAgICAgPGFzLXNwbGl0LWFyZWEgc2l6ZT1cIjIyXCI+XG4gICAgICAgIDxuZy1icmVhZGNydW1ic1xuICAgICAgICAgIChtb3VzZUxlYXZlTm9kZSk9XCJ1bmhpZ2hsaWdodCgpXCJcbiAgICAgICAgICAobW91c2VPdmVyTm9kZSk9XCJoaWdobGlnaHQoJGV2ZW50KVwiXG4gICAgICAgICAgKm5nSWY9XCJwYXJlbnRzXCJcbiAgICAgICAgICAoaGFuZGxlU2VsZWN0KT1cImhhbmRsZVNlbGVjdCgkZXZlbnQpXCJcbiAgICAgICAgICBbcGFyZW50c109XCJwYXJlbnRzXCJcbiAgICAgICAgPlxuICAgICAgICA8L25nLWJyZWFkY3J1bWJzPlxuICAgICAgPC9hcy1zcGxpdC1hcmVhPlxuICAgIDwvYXMtc3BsaXQ+XG4gIDwvYXMtc3BsaXQtYXJlYT5cbiAgPGFzLXNwbGl0LWFyZWEgc2l6ZT1cIjQwXCIgbWluU2l6ZT1cIjI1XCI+XG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5LXRhYi13cmFwcGVyXCI+XG4gICAgICA8bmctcHJvcGVydHktdGFiXG4gICAgICAgIFtjdXJyZW50U2VsZWN0ZWRFbGVtZW50XT1cImN1cnJlbnRTZWxlY3RlZEVsZW1lbnRcIlxuICAgICAgICAoaW5zcGVjdCk9XCJpbnNwZWN0KCRldmVudClcIlxuICAgICAgICAodmlld1NvdXJjZSk9XCJ2aWV3U291cmNlKClcIlxuICAgICAgPjwvbmctcHJvcGVydHktdGFiPlxuICAgIDwvZGl2PlxuICA8L2FzLXNwbGl0LWFyZWE+XG48L2FzLXNwbGl0PlxuIl19