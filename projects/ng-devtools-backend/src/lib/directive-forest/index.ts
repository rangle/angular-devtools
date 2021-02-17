import { LViewBuilder } from './lview';
import { DebugNodeTreeBuilder } from './debug-nodes';

export { getLViewFromDirectiveOrElementInstance, getDirectiveHostElement, METADATA_PROPERTY_NAME } from './lview';

const builders = [
  new DebugNodeTreeBuilder(),
  new LViewBuilder()
];

let strategy: null | DebugNodeTreeBuilder | LViewBuilder = null;

const selectStrategy = (lView: any) => {
  for (const builder of builders) {
    if (builder.supports(lView)) {
      return builder;
    }
  }
  return null;
};

export const buildDirectiveTree = (lView: any) => {
  if (!strategy) {
    strategy = selectStrategy(lView);
  }
  if (!strategy) {
    console.error('Unable to parse the component tree');
    return [];
  }
  return strategy.build(lView);
};
