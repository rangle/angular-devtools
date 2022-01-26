export const isChildOf = (childPosition, parentPosition) => {
    if (childPosition.length <= parentPosition.length) {
        return false;
    }
    for (let i = 0; i < parentPosition.length; i++) {
        if (childPosition[i] !== parentPosition[i]) {
            return false;
        }
    }
    return true;
};
export const parentCollapsed = (nodeIdx, all, treeControl) => {
    const node = all[nodeIdx];
    for (let i = nodeIdx - 1; i >= 0; i--) {
        if (isChildOf(node.position, all[i].position) && !treeControl.isExpanded(all[i])) {
            return true;
        }
    }
    return false;
};
//# sourceMappingURL=directive-forest-utils.js.map