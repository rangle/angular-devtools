import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, merge } from 'rxjs';
import { MatTreeFlattener } from '@angular/material/tree';
import { map } from 'rxjs/operators';
import { DefaultIterableDiffer } from '@angular/core';
import { indexForest } from './index-forest';
import { diff } from '../../diffing';
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
export class ComponentDataSource extends DataSource {
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
//# sourceMappingURL=component-data-source.js.map