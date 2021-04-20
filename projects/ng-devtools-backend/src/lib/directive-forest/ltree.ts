import { ComponentTreeNode, ComponentInstanceType, DirectiveInstanceType } from '../component-tree';
import { isCustomElement } from '../utils';
import { getDirectiveName } from '../highlighter';
import { SemVerDSL } from 'semver-dsl';
import { VERSION } from '../version';

let HEADER_OFFSET = 19;

const latest = () => {
  HEADER_OFFSET = 20;
};

SemVerDSL(VERSION).gte('10.0.0-next.4', latest);

// In g3 everyone has version 0.0.0, using HEAD from master.
SemVerDSL(VERSION).eq('0.0.0', latest);

const TYPE = 1;
const ELEMENT = 0;
const LVIEW_TVIEW = 1;

export const isLContainer = (value: any): boolean => {
  return Array.isArray(value) && value[TYPE] === true;
};

const isLView = (value: any): boolean => {
  return Array.isArray(value) && typeof value[TYPE] === 'object';
};

export const METADATA_PROPERTY_NAME = '__ngContext__';
export const getLViewFromDirectiveOrElementInstance = (dir: any): null | {} => {
  if (!dir) {
    return null;
  }
  const context = dir[METADATA_PROPERTY_NAME];
  if (!context) {
    return null;
  }
  if (isLView(context)) {
    return context;
  }
  return context.lView;
};

export const getDirectiveHostElement = (dir: any) => {
  if (!dir) {
    return false;
  }
  const ctx = dir[METADATA_PROPERTY_NAME];
  if (ctx[0] !== null) {
    return ctx[0];
  }
  const components = ctx[LVIEW_TVIEW].components;
  if (!components || components.length !== 1) {
    return false;
  }
  return ctx[components[0]][0];
};

export class LTreeStrategy {
  supports(element: Element): boolean {
    return typeof (element as any).__ngContext__ !== 'undefined';
  }

  private _getNode(lView: any, data: any, idx: number): ComponentTreeNode {
    const directives: DirectiveInstanceType[] = [];
    let component: ComponentInstanceType | null = null;
    const tNode = data[idx];
    const node = lView[idx][ELEMENT];
    const element = (node.tagName || node.nodeName).toLowerCase();
    for (let i = tNode.directiveStart; i < tNode.directiveEnd; i++) {
      const instance = lView[i];
      const dirMeta = data[i];
      if (dirMeta && dirMeta.template) {
        component = {
          name: element,
          isElement: isCustomElement(node),
          instance,
        };
      } else if (dirMeta) {
        directives.push({
          name: getDirectiveName(instance),
          instance,
        });
      }
    }
    return {
      nativeElement: lView[idx][ELEMENT],
      children: [],
      element,
      directives,
      component,
    };
  }

  private _extract(lViewOrLContainer: any, nodes: ComponentTreeNode[] = []): ComponentTreeNode[] {
    if (isLContainer(lViewOrLContainer)) {
      for (let i = 9; i < lViewOrLContainer.length; i++) {
        if (lViewOrLContainer[i]) {
          this._extract(lViewOrLContainer[i], nodes);
        }
      }
      return nodes;
    }
    const lView = lViewOrLContainer;
    const tView = lView[LVIEW_TVIEW];
    for (let i = HEADER_OFFSET; i < lView.length; i++) {
      if (lView[i] && tView.data && lView[i][ELEMENT] instanceof Node) {
        const node = this._getNode(lView, tView.data, i);

        // TODO(mgechev): verify if this won't make us skip projected content.
        if (node.component || node.directives.length) {
          nodes.push(node);
          this._extract(lView[i], node.children);
        }
      }
    }
    return nodes;
  }

  build(element: Element, nodes: ComponentTreeNode[] = []): ComponentTreeNode[] {
    return this._extract((element as any).__ngContext__);
  }
}
