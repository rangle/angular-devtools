import { ComponentTreeNode } from './../component-tree';
import { ElementPosition, DevToolsNode } from 'protocol';
import { DirectiveInstanceType, ComponentInstanceType } from '../component-tree';
declare type NodeArray = {
    directive: any;
    isComponent: boolean;
}[];
export declare class IdentityTracker {
    private _directiveIdCounter;
    private _currentDirectivePosition;
    private _currentDirectiveId;
    private _isComponent;
    getDirectivePosition(dir: any): ElementPosition | undefined;
    getDirectiveId(dir: any): number | undefined;
    hasDirective(dir: any): boolean;
    index(): {
        newNodes: NodeArray;
        removedNodes: NodeArray;
        indexedForest: IndexedNode[];
        directiveForest: ComponentTreeNode[];
    };
    private _index;
    private _indexNode;
    destroy(): void;
}
export interface IndexedNode extends DevToolsNode<DirectiveInstanceType, ComponentInstanceType> {
    position: ElementPosition;
    children: IndexedNode[];
}
export declare const indexForest: <T extends DevToolsNode<DirectiveInstanceType, ComponentInstanceType>>(forest: T[]) => IndexedNode[];
export {};
