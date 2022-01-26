export function parseRoutes(router) {
    var _a;
    const rootName = ((_a = router.rootComponentType) === null || _a === void 0 ? void 0 : _a.name) || 'no-name';
    const rootChildren = router.config;
    const root = {
        handler: rootName,
        name: rootName,
        path: '/',
        children: rootChildren ? assignChildrenToParent(null, rootChildren) : [],
        isAux: false,
        specificity: null,
        data: null,
        hash: null,
    };
    return root;
}
function assignChildrenToParent(parentPath, children) {
    return children.map((child) => {
        var _a;
        const childName = childRouteName(child);
        const childDescendents = ((_a = child._loadedConfig) === null || _a === void 0 ? void 0 : _a.routes) || child.children;
        // only found in aux routes, otherwise property will be undefined
        const isAuxRoute = !!child.outlet;
        const pathFragment = child.outlet ? `(${child.outlet}:${child.path})` : child.path;
        const routeConfig = {
            handler: childName,
            data: [],
            hash: null,
            specificity: null,
            name: childName,
            path: `${parentPath ? parentPath : ''}/${pathFragment}`.split('//').join('/'),
            isAux: isAuxRoute,
            children: [],
        };
        if (childDescendents) {
            routeConfig.children = assignChildrenToParent(routeConfig.path, childDescendents);
        }
        if (child.data) {
            for (const el in child.data) {
                if (child.data.hasOwnProperty(el)) {
                    routeConfig.data.push({
                        key: el,
                        value: child.data[el],
                    });
                }
            }
        }
        return routeConfig;
    });
}
function childRouteName(child) {
    if (child.component) {
        return child.component.name;
    }
    else if (child.loadChildren) {
        return `${child.path} [Lazy]`;
    }
    else if (child.redirectTo) {
        return `${child.path} -> redirecting to -> "${child.redirectTo}"`;
    }
    else {
        return 'no-name-route';
    }
}
//# sourceMappingURL=router-tree.js.map