import { LTreeStrategy } from './ltree';
import { RTreeStrategy } from './render-tree';

export { getLViewFromDirectiveOrElementInstance, getDirectiveHostElement, METADATA_PROPERTY_NAME } from './ltree';

// The order of the strategies matters. Lower indices have higher priority.
const strategies = [new RTreeStrategy(), new LTreeStrategy()];

let strategy: null | RTreeStrategy | LTreeStrategy = null;

const selectStrategy = (element: Element) => {
  for (const s of strategies) {
    if (s.supports(element)) {
      return s;
    }
  }
  return null;
};

export const buildDirectiveTree = (element: Element) => {
  if (!strategy) {
    strategy = selectStrategy(element);
  }
  if (!strategy) {
    console.error('Unable to parse the component tree');
    return [];
  }
  return strategy.build(element);
};
