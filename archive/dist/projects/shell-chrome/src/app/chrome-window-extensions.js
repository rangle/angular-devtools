import { findNodeFromSerializedPosition } from 'ng-devtools-backend';
import { buildDirectiveForest, queryDirectiveForest } from '../../../ng-devtools-backend/src/lib/component-tree';
export const initializeExtendedWindowOperations = () => {
    extendWindowOperations(window, { inspectedApplication: chromeWindowExtensions });
};
const extendWindowOperations = (target, classImpl) => {
    for (const key of Object.keys(classImpl)) {
        if (target[key] != null) {
            console.warn(`A window function or object named ${key} would be overwritten`);
        }
    }
    Object.assign(target, classImpl);
};
const chromeWindowExtensions = {
    findConstructorByPosition: (serializedId) => {
        const node = findNodeFromSerializedPosition(serializedId);
        if (node === null) {
            console.error(`Cannot find element associated with node ${serializedId}`);
            return;
        }
        if (node.component) {
            return node.component.instance.constructor;
        }
        else {
            console.error('This component has no instance and therefore no constructor');
        }
    },
    findDomElementByPosition: (serializedId) => {
        const node = findNodeFromSerializedPosition(serializedId);
        if (node === null) {
            console.error(`Cannot find element associated with node ${serializedId}`);
            return undefined;
        }
        return node.nativeElement;
    },
    findPropertyByPosition: (args) => {
        const { directivePosition, objectPath } = JSON.parse(args);
        const node = queryDirectiveForest(directivePosition.element, buildDirectiveForest());
        if (node === null) {
            console.error(`Cannot find element associated with node ${directivePosition}`);
            return undefined;
        }
        const isDirective = directivePosition.directive !== undefined &&
            node.directives[directivePosition.directive] &&
            typeof node.directives[directivePosition.directive] === 'object';
        if (isDirective) {
            return traverseDirective(node.directives[directivePosition.directive].instance, objectPath);
        }
        if (node.component) {
            return traverseDirective(node.component.instance, objectPath);
        }
    },
};
const traverseDirective = (dir, objectPath) => {
    for (const key of objectPath) {
        if (!dir[key]) {
            return;
        }
        dir = dir[key];
    }
    return dir;
};
//# sourceMappingURL=chrome-window-extensions.js.map