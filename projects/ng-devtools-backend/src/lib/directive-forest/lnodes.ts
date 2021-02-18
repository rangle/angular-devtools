import { ComponentInstanceType, DirectiveInstanceType, ComponentTreeNode } from '../component-tree';
import { getDirectiveName } from '../highlighter';
import { isCustomElement } from '../utils';

const isComponentLContainer = (debug: any) => !!debug.node && !!debug.node.debug;

export class DebugNodeTreeBuilder {
  private _lviewComponentMap = new Map<any, ComponentTreeNode>();

  supports(lViewOrLContainer: any) {
    const lview = lViewOrLContainer.lView ?? lViewOrLContainer;
    if (!lview.debug || !lview.debug.directives) {
      return false;
    }
    return true;
  }

  build(lViewOrLContainer: any): ComponentTreeNode[] {
    const { debug } = lViewOrLContainer;
    const result = this._extractFromRootView(debug);
    this._lviewComponentMap = new Map();
    return result;
  }

  private _extractFromRootView(debug: any) {
    const nodes: ComponentTreeNode[] = [];
    let child = debug.childHead;
    while (child) {
      if (!isComponentLContainer(debug) && child.directives.length) {
        nodes.push(this._extractNode(child));
      }
      child = child.next;
    }
    return nodes;
  }

  private _extractComponent(debug: any): ComponentInstanceType | null {
    const component = debug.directives.find((d: any) => d.type === 'component');
    if (!component) {
      return null;
    }
    const node = debug.element ?? { tagName: 'unknown' };
    return {
      instance: component.instance,
      isElement: isCustomElement(node),
      name: (node.tagName || node.nodeName).toLowerCase(),
    };
  }

  private _extractNode(debug: any): ComponentTreeNode {
    const node = debug.node;
    const component = this._extractComponent(debug);
    const result: ComponentTreeNode = {
      component,
      directives: debug.directives
        .filter((d: any) => d.type === 'directive')
        .map((d: any) => {
          return {
            name: getDirectiveName(d.instance),
            instance: d.instance,
          } as DirectiveInstanceType;
        }),
      element: (node.tagName || node.nodeName || 'LContainer').toLowerCase(),
      nativeElement: node,
      children: this._extractChildren(debug),
    };
    return result;
  }

  private _extractChildren(debug: any): ComponentTreeNode[] {
    if (debug.views) {
      return this._extractLContentChildren(debug);
    }
    return this._extractLViewChildren(debug);
  }

  private _extractLContentChildren(debug: any) {
    const result: ComponentTreeNode[] = [];
    for (const view of debug.views) {
      result.push(...this._extractFromRootView(view));
    }
    return result;
  }

  private _extractLViewChildren(debug: any) {
    const children: ComponentTreeNode[] = [];
    let child = debug.childHead;
    while (child) {
      if (!isComponentLContainer(debug) && child.directives.length) {
        children.push(this._extractNode(child));
      }
      child = child.next;
    }
    return children;
  }
}

