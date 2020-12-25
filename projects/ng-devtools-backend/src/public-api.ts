/*
 * Public API Surface of ng-devtools-backend
 */

export * from './lib';
export { findNodeFromSerializedPosition, buildDirectiveForest, queryDirectiveForest } from './lib/component-tree';
export { taskDataByFrameId } from './lib/hooks/capture';
