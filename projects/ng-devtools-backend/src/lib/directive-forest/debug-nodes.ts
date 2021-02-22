import { ComponentInstanceType, DirectiveInstanceType, ComponentTreeNode } from '../component-tree';
import { getDirectiveName } from '../highlighter';
import { isCustomElement } from '../utils';
import { componentMetadata } from '../utils';


// ng.__ON_CHANGE_DETECTION_START__(callback(component));
// ng.__ON_CHANGE_DETECTION_END__(callback(component));

// if (ngDevMode && ng.__ON_CHANGE_DETECTION_START__) {
//   ng.__ON_CHANGE_DETECTION_START__(...);
// }

const isComponentLContainer = (debug: any) => !!debug.node && !!debug.node.debug;

interface DebugNode {
  children: DebugNode[];
  factories: any[];
  instances: any[];
  lView: { debug: any };
  native: Node | HTMLElement;
}

const findLParent = (debug, node) => {
  const views = debug.childViews ?? debug.views;
  for (const view of views) {
    if (view.host === node.native) {
      return view;
    }
  }
  return debug;
};

const getElementName = (node: Node | HTMLElement) => (node ?? { nodeName: '' }).nodeName.toLowerCase();
export class DebugNodeTreeBuilder {
  supports(lViewOrLContainer: any) {
    const lview = lViewOrLContainer.lView ?? lViewOrLContainer;
    if (!lview.debug || !lview.debug.directives) {
      return false;
    }
    return true;
  }

  build(lViewOrLContainer: any): ComponentTreeNode[] {
    const { debug } = lViewOrLContainer;
    if (!debug) return [];
    if (debug.views) {
      return debug.views.reduce((a, c) => {
        return a.concat(this.build({ debug: c }));
      }, []);
    }
    if (!debug.nodes) {
      return [];
    }
    const result = this._extractFromDebugNodes(debug, debug.nodes);
    return result;
  }

  // <div *ngIf="true">
  // </div>
  // <div>
  //   <bar></bar>
  // </div>
  //
  // [
  //   { element: 'div', directives: [NgForOf] },
  //   { element: 'bar', directives: [Bar] }
  // ]
  private _extractFromDebugNodes(debug: any, nodes: DebugNode[]) {
    const result: ComponentTreeNode[] = [];
    for (const node of nodes) {
      if (node.factories.length) {
        result.push(this._extractFromDebugNode(node.lView.debug, node));
      } else {
        result.push(...this._extractFromDebugNodes(node.lView, node.children));
      }
    }
    return result;
  }

  private _extractFromDebugNode(debug: any, node: DebugNode): ComponentTreeNode {
    const result = {
      children: this._extractFromDebugNodes(debug, node.children),
      component: this._extractComponent(node),
      directives: this._extractDirectives(node),
      element: getElementName(node.native),
      nativeElement: node.native,
    };
    if ((result.directives.length || result.component) && !result.children.length && !node.children.length) {
      result.children = this._extractLNodeChildren(findLParent(debug, node));
    }
    return result;
  }

  private _extractComponent(node: DebugNode): null | ComponentInstanceType {
    const { instances } = node;
    const instance = instances.find((instance) => !!componentMetadata(instance));
    if (!instance) {
      return null;
    }
    return {
      instance,
      isElement: isCustomElement(node.native),
      name: getDirectiveName(instance),
    };
  }

  private _extractDirectives(node: DebugNode): DirectiveInstanceType[] {
    const { instances } = node;
    const directives = instances.filter((instance) => !componentMetadata(instance));
    return directives.map((dir) => {
      return {
        instance: dir,
        name: getDirectiveName(dir),
      };
    });
  }

  private _extractLNodeChildren(debug: any): ComponentTreeNode[] {
    if (debug.views) {
      return this._extractLContainerChildren(debug);
    }
    return this._extractLViewChildren(debug);
  }

  private _extractLContainerChildren(debug: any) {
    const result: ComponentTreeNode[] = [];
    for (const view of debug.views) {
      result.push(...this.build({ debug: view}));
    }
    return result;
  }

  private _extractLViewChildren(debug: any) {
    const children: ComponentTreeNode[] = [];
    let child = debug.childHead;
    while (child) {
      if (!isComponentLContainer(debug) && child.directives.length) {
        children.push(...this.build({ debug: child }));
      }
      child = child.next;
    }
    return children;
  }
}
