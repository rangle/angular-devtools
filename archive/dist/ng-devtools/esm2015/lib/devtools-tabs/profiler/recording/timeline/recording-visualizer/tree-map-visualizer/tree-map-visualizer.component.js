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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tYXAtdmlzdWFsaXplci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZGluZy12aXN1YWxpemVyL3RyZWUtbWFwLXZpc3VhbGl6ZXIvdHJlZS1tYXAtdmlzdWFsaXplci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvcHJvZmlsZXIvcmVjb3JkaW5nL3RpbWVsaW5lL3JlY29yZGluZy12aXN1YWxpemVyL3RyZWUtbWFwLXZpc3VhbGl6ZXIvdHJlZS1tYXAtdmlzdWFsaXplci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBNkIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sS0FBSyxPQUFPLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFlLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFMUYsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFPOUMsTUFBTSxPQUFPLDBCQUEwQjtJQVdyQyxZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVYzQixlQUFVLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBWXBDLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRzlCLG9CQUFlLEdBQW1CLElBQUksY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBTDFFLENBQUM7SUFSdkMsSUFBYSxLQUFLLENBQUMsS0FBb0I7UUFDckMsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQVlELFFBQVE7UUFDTixJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsNEJBQTRCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVPLFdBQVc7UUFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzNELE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QixPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMzRCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDOztvR0E5Q1UsMEJBQTBCOzZFQUExQiwwQkFBMEI7Ozs7OztRQ1p2Qyw0QkFBcUM7O3VGRFl4QiwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEO3lEQUljLEtBQUs7a0JBQWpCLEtBQUs7WUFnQmtDLElBQUk7a0JBQTNDLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgdHJlZW1hcCBmcm9tICd3ZWJ0cmVlbWFwL2J1aWxkL3dlYnRyZWVtYXAnO1xuaW1wb3J0IHsgVHJlZU1hcE5vZGUsIFRyZWVNYXBGb3JtYXR0ZXIgfSBmcm9tICcuLi8uLi9yZWNvcmQtZm9ybWF0dGVyL3RyZWUtbWFwLWZvcm1hdHRlcic7XG5pbXBvcnQgeyBQcm9maWxlckZyYW1lIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXRyZWUtbWFwLXZpc3VhbGl6ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS1tYXAtdmlzdWFsaXplci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUtbWFwLXZpc3VhbGl6ZXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU1hcFZpc3VhbGl6ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Zvcm1hdHRlciA9IG5ldyBUcmVlTWFwRm9ybWF0dGVyKCk7XG5cbiAgQElucHV0KCkgc2V0IGZyYW1lKGZyYW1lOiBQcm9maWxlckZyYW1lKSB7XG4gICAgLy8gZmlyc3QgZWxlbWVudCBpbiBkYXRhIGlzIHRoZSBBcHBsaWNhdGlvbiBub2RlXG4gICAgdGhpcy50cmVlTWFwUmVjb3JkcyA9IHRoaXMuX2Zvcm1hdHRlci5mb3JtYXRGcmFtZShmcmFtZSk7XG4gICAgaWYgKHRoaXMudHJlZSkge1xuICAgICAgdGhpcy5fcmVuZGVyVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgcmVzaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX3Rocm90dGxlZFJlc2l6ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX3Jlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMucmVzaXplJC5uZXh0KCkpKTtcbiAgdHJlZU1hcFJlY29yZHM6IFRyZWVNYXBOb2RlO1xuXG4gIEBWaWV3Q2hpbGQoJ3dlYlRyZWUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0cmVlOiBFbGVtZW50UmVmO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rocm90dGxlZFJlc2l6ZVN1YnNjcmlwdGlvbiA9IHRoaXMucmVzaXplJC5waXBlKGRlYm91bmNlVGltZSgxMDApKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fcmVuZGVyVHJlZSgpKTtcbiAgICB0aGlzLl9yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMudHJlZS5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rocm90dGxlZFJlc2l6ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3Jlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLnRyZWUubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJUcmVlKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZVRyZWUoKTtcbiAgICB0aGlzLl9jcmVhdGVUcmVlKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVUcmVlKCk6IHZvaWQge1xuICAgIEFycmF5LmZyb20odGhpcy50cmVlLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkOiBIVE1MRWxlbWVudCkgPT4gY2hpbGQucmVtb3ZlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlVHJlZSgpOiB2b2lkIHtcbiAgICB0cmVlbWFwLnJlbmRlcih0aGlzLnRyZWUubmF0aXZlRWxlbWVudCwgdGhpcy50cmVlTWFwUmVjb3Jkcywge1xuICAgICAgcGFkZGluZzogWzIwLCA1LCA1LCA1XSxcbiAgICAgIGNhcHRpb246IChub2RlKSA9PiBgJHtub2RlLmlkfTogJHtub2RlLnNpemUudG9GaXhlZCgzKX0gbXNgLFxuICAgICAgc2hvd05vZGU6ICgpID0+IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgI3dlYlRyZWUgY2xhc3M9XCJ3ZWItdHJlZVwiPjwvZGl2PlxuIl19