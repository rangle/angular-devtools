import { Route } from 'protocol';
import { Router, Routes, Route as AngularRoute } from '@angular/router';
import { IndexedNode } from './hooks/identity-tracker';
import { queryDirectiveForest } from './component-tree';

export function parseRoutes(router: Router): Route {
  const rootName = (router as any).rootComponentType?.name || 'no-name';
  const rootChildren = router.config;

  const root: Route = {
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

function assignChildrenToParent(parentPath: string | null, children: Routes): Route[] {
  return children.map((child: AngularRoute) => {
    const childName = childRouteName(child);
    const childDescendents: [any] = (child as any)._loadedConfig?.routes || child.children;

    // only found in aux routes, otherwise property will be undefined
    const isAuxRoute = !!child.outlet;

    const pathFragment = child.outlet ? `(${child.outlet}:${child.path})` : child.path;

    const routeConfig: Route = {
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

function childRouteName(child: AngularRoute): string {
  if (child.component) {
    return child.component.name;
  } else if (child.loadChildren) {
    return `${child.path} [Lazy]`;
  } else if (child.redirectTo) {
    return `${child.path} -> redirecting to -> "${child.redirectTo}"`;
  } else {
    return 'no-name-route';
  }
}

interface FindRouterStrategy {
  find(forest: IndexedNode[]): Router | false;
}

class FindFromRootComponentRouter implements FindRouterStrategy {
  find(forest: IndexedNode[]): Router | false {
    return queryDirectiveForest([0], forest)?.component?.instance?.router ?? false;
  }
}

class FindFromRouterLinkWithHref implements FindRouterStrategy {
  find(forest: IndexedNode[]): Router | false {
    for (const indexedNode of forest) {
      const routerLinkWithHref = indexedNode.directives.find((nodeToFind) => nodeToFind.name === 'RouterLinkWithHref');
      if (routerLinkWithHref) {
        return routerLinkWithHref.instance?.router ?? false;
      }

      const router = this.find(indexedNode.children);
      if (router) {
        return router;
      }
    }

    return false;
  }
}

// Order determines which strategy is attempted first
const findRouterStrategies: FindRouterStrategy[] = [
  new FindFromRootComponentRouter(),
  new FindFromRouterLinkWithHref(),
];

/**
 *
 * @param forest directive forest to search for router instance
 * @returns router instance if it can be found with a FindRouterStrategy, returns false otherwise
 */
export const findRouter = (forest: IndexedNode[]): Router | false => {
  for (const strategy of findRouterStrategies) {
    const router = strategy.find(forest);
    if (router) {
      return router;
    }
  }

  return false;
};
