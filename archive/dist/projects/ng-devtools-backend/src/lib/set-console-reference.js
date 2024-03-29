import { arrayEquals } from 'shared-utils';
const CONSOLE_REFERENCE_PREFIX = '$ng';
const CAPACITY = 5;
const nodesForConsoleReference = [];
export const setConsoleReference = (referenceNode) => {
    if (referenceNode.node === null) {
        return;
    }
    _setConsoleReference(referenceNode);
};
const _setConsoleReference = (referenceNode) => {
    prepareCurrentReferencesForInsertion(referenceNode);
    nodesForConsoleReference.unshift(referenceNode);
    assignConsoleReferencesFrom(nodesForConsoleReference);
};
const prepareCurrentReferencesForInsertion = (referenceNode) => {
    const foundIndex = nodesForConsoleReference.findIndex((nodeToLookFor) => arrayEquals(nodeToLookFor.position, referenceNode.position));
    if (foundIndex !== -1) {
        nodesForConsoleReference.splice(foundIndex, 1);
    }
    else if (nodesForConsoleReference.length === CAPACITY) {
        nodesForConsoleReference.pop();
    }
};
const assignConsoleReferencesFrom = (referenceNodes) => {
    referenceNodes.forEach((referenceNode, index) => setDirectiveKey(referenceNode.node, getConsoleReferenceWithIndexOf(index)));
};
const setDirectiveKey = (node, key) => {
    Object.defineProperty(window, key, {
        get: () => {
            if (node === null || node === void 0 ? void 0 : node.component) {
                return node.component.instance;
            }
            if (node === null || node === void 0 ? void 0 : node.nativeElement) {
                return node.nativeElement;
            }
            return node;
        },
        configurable: true,
    });
};
const getConsoleReferenceWithIndexOf = (consoleReferenceIndex) => `${CONSOLE_REFERENCE_PREFIX}${consoleReferenceIndex}`;
//# sourceMappingURL=set-console-reference.js.map