import { DevToolsNode, ElementPosition } from 'protocol';
export interface IndexedNode extends DevToolsNode {
    position: ElementPosition;
    children: IndexedNode[];
}
export declare const indexForest: (forest: DevToolsNode[]) => IndexedNode[];
