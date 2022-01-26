import { deeplySerializeSelectedProperties, serializeDirectiveState } from './state-serializer/state-serializer';
import { PropertyQueryTypes, } from 'protocol';
import { buildDirectiveTree, getLViewFromDirectiveOrElementInstance } from './lview-transform';
const ngDebug = () => window.ng;
export const getLatestComponentState = (query, directiveForest) => {
    // if a directive forest is passed in we don't have to build the forest again.
    directiveForest = directiveForest !== null && directiveForest !== void 0 ? directiveForest : buildDirectiveForest();
    const node = queryDirectiveForest(query.selectedElement, directiveForest);
    if (!node) {
        return;
    }
    const result = {};
    const populateResultSet = (dir) => {
        if (query.propertyQuery.type === PropertyQueryTypes.All) {
            result[dir.name] = {
                props: serializeDirectiveState(dir.instance),
                metadata: getDirectiveMetadata(dir.instance),
            };
        }
        if (query.propertyQuery.type === PropertyQueryTypes.Specified) {
            result[dir.name] = {
                props: deeplySerializeSelectedProperties(dir.instance, query.propertyQuery.properties[dir.name] || []),
                metadata: getDirectiveMetadata(dir.instance),
            };
        }
    };
    node.directives.forEach(populateResultSet);
    if (node.component) {
        populateResultSet(node.component);
    }
    return result;
};
export const getDirectiveMetadata = (dir) => {
    const safelyGrabMetadata = (key) => {
        try {
            return dir.constructor.ɵcmp ? dir.constructor.ɵcmp[key] : dir.constructor.ɵdir[key];
        }
        catch (_a) {
            console.warn(`Could not find metadata for key: ${key} in directive:`, dir);
            return undefined;
        }
    };
    return {
        inputs: safelyGrabMetadata("inputs" /* INPUTS */),
        outputs: safelyGrabMetadata("outputs" /* OUTPUTS */),
        encapsulation: safelyGrabMetadata("encapsulation" /* ENCAPSULATION */),
        onPush: safelyGrabMetadata("onPush" /* ON_PUSH */),
    };
};
const getRootLViewsHelper = (element, rootLViews = new Set()) => {
    if (!(element instanceof HTMLElement)) {
        return rootLViews;
    }
    const lView = getLViewFromDirectiveOrElementInstance(element);
    if (lView) {
        rootLViews.add(lView);
        return rootLViews;
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < element.children.length; i++) {
        getRootLViewsHelper(element.children[i], rootLViews);
    }
    return rootLViews;
};
// To get all roots, we first get all elements with ng-version attribute.
// This includes all app roots plus Angular Elements.
// We may also have overlays which are on the same level as the top-level
// app. We get these by traversing the DOM starting from the root DOM
// element and stopping once we hit a node which is not HTMLElement or
// has lView data associated with it.
const getRootLViews = (element) => {
    const roots = element.querySelectorAll('[ng-version]');
    return getRootLViewsHelper(element, new Set(Array.from(roots).map(getLViewFromDirectiveOrElementInstance)));
};
export const buildDirectiveForest = () => {
    const roots = getRootLViews(document.documentElement);
    return Array.prototype.concat.apply([], [...roots].map(buildDirectiveTree));
};
// Based on an ElementID we return a specific component node.
// If we can't find any, we return null.
export const queryDirectiveForest = (position, forest) => {
    if (!position.length) {
        return null;
    }
    let node = null;
    for (const i of position) {
        node = forest[i];
        if (!node) {
            return null;
        }
        forest = node.children;
    }
    return node;
};
export const findNodeInForest = (position, forest) => {
    const foundComponent = queryDirectiveForest(position, forest);
    return foundComponent ? foundComponent.nativeElement : null;
};
export const findNodeFromSerializedPosition = (serializedPosition) => {
    const position = serializedPosition.split(',').map((index) => parseInt(index, 10));
    return queryDirectiveForest(position, buildDirectiveForest());
};
export const updateState = (updatedStateData) => {
    const ngd = ngDebug();
    const node = queryDirectiveForest(updatedStateData.directiveId.element, buildDirectiveForest());
    if (!node) {
        console.warn('Could not update the state of component', updatedStateData, 'because the component was not found');
        return;
    }
    if (updatedStateData.directiveId.directive !== undefined) {
        const directive = node.directives[updatedStateData.directiveId.directive].instance;
        mutateComponentOrDirective(updatedStateData, directive);
        ngd.applyChanges(ngd.getOwningComponent(directive));
        return;
    }
    if (node.component) {
        const comp = node.component.instance;
        mutateComponentOrDirective(updatedStateData, comp);
        ngd.applyChanges(comp);
        return;
    }
};
const mutateComponentOrDirective = (updatedStateData, compOrDirective) => {
    const valueKey = updatedStateData.keyPath.pop();
    if (valueKey === undefined) {
        return;
    }
    let parentObjectOfValueToUpdate = compOrDirective;
    updatedStateData.keyPath.forEach((key) => {
        parentObjectOfValueToUpdate = parentObjectOfValueToUpdate[key];
    });
    parentObjectOfValueToUpdate[valueKey] = updatedStateData.newValue;
};
//# sourceMappingURL=component-tree.js.map