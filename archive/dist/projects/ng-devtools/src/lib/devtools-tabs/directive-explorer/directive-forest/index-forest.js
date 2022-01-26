const indexTree = (node, idx, parentPosition = []) => {
    const position = parentPosition.concat([idx]);
    return {
        position,
        element: node.element,
        component: node.component,
        directives: node.directives.map((d, i) => ({ name: d.name, id: d.id })),
        children: node.children.map((n, i) => indexTree(n, i, position)),
    };
};
export const indexForest = (forest) => forest.map((n, i) => indexTree(n, i));
//# sourceMappingURL=index-forest.js.map