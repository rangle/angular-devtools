import { Component, Input, ViewChild } from '@angular/core';
import * as treemap from 'webtreemap/build/webtreemap';
import { TreeMapFormatter } from '../../record-formatter/tree-map-formatter';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
const _c0 = ["webTree"];
export class TreeMapVisualizerComponent {
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
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tree = _t.first);
    } }, inputs: { frame: "frame" }, decls: 2, vars: 0, consts: [[1, "web-tree"], ["webTree", ""]], template: function TreeMapVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
    } }, styles: [".web-tree[_ngcontent-%COMP%] {\n  height: calc(100% - 25px);\n  width: calc(100% - 25px);\n  margin: auto;\n}\n\n[_nghost-%COMP%] {\n  ::ng-deep {\n    .webtreemap-caption {\n      font-size: 0.9em;\n    }\n  }\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  ::ng-deep {\n    .webtreemap-node {\n      background: #424242;\n    }\n    .webtreemap-node:hover {\n      background: #303030;\n    }\n    .webtreemap-caption {\n      color: #ffffff;\n    }\n  }\n}"] });
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
//# sourceMappingURL=tree-map-visualizer.component.js.map