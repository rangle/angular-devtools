import { buildDirectiveForest } from '../component-tree';
export class IdentityTracker {
    constructor() {
        this._directiveIdCounter = 0;
        this._currentDirectivePosition = new Map();
        this._currentDirectiveId = new Map();
        this._isComponent = new Map();
    }
    getDirectivePosition(dir) {
        return this._currentDirectivePosition.get(dir);
    }
    getDirectiveId(dir) {
        return this._currentDirectiveId.get(dir);
    }
    hasDirective(dir) {
        return this._currentDirectiveId.has(dir);
    }
    index() {
        const directiveForest = buildDirectiveForest();
        const indexedForest = indexForest(directiveForest);
        const newNodes = [];
        const removedNodes = [];
        const allNodes = new Set();
        indexedForest.forEach((root) => this._index(root, null, newNodes, allNodes));
        this._currentDirectiveId.forEach((_, dir) => {
            if (!allNodes.has(dir)) {
                removedNodes.push({ directive: dir, isComponent: !!this._isComponent.get(dir) });
                // We can't clean these up because during profiling
                // they might be requested for removed components
                // this._currentDirectiveId.delete(dir);
                // this._currentDirectivePosition.delete(dir);
            }
        });
        return { newNodes, removedNodes, indexedForest, directiveForest };
    }
    _index(node, parent, newNodes, allNodes) {
        if (node.component) {
            allNodes.add(node.component.instance);
            this._isComponent.set(node.component.instance, true);
            this._indexNode(node.component.instance, node.position, newNodes);
        }
        (node.directives || []).forEach((dir) => {
            allNodes.add(dir.instance);
            this._isComponent.set(dir.instance, false);
            this._indexNode(dir.instance, node.position, newNodes);
        });
        node.children.forEach((child) => this._index(child, parent, newNodes, allNodes));
    }
    _indexNode(directive, position, newNodes) {
        this._currentDirectivePosition.set(directive, position);
        if (!this._currentDirectiveId.has(directive)) {
            newNodes.push({ directive, isComponent: !!this._isComponent.get(directive) });
            this._currentDirectiveId.set(directive, this._directiveIdCounter++);
        }
    }
    destroy() {
        this._currentDirectivePosition = new Map();
        this._currentDirectiveId = new Map();
    }
}
const indexTree = (node, idx, parentPosition = []) => {
    const position = parentPosition.concat([idx]);
    return {
        position,
        element: node.element,
        component: node.component,
        directives: node.directives.map((d) => (Object.assign({ position }, d))),
        children: node.children.map((n, i) => indexTree(n, i, position)),
        nativeElement: node.nativeElement,
    };
};
export const indexForest = (forest) => forest.map((n, i) => indexTree(n, i));
//# sourceMappingURL=identity-tracker.js.map