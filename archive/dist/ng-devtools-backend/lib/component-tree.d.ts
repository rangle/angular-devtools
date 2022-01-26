import { ComponentExplorerViewQuery, DevToolsNode, DirectiveMetadata, DirectivesProperties, ElementPosition, UpdatedStateData } from 'protocol';
export interface DirectiveInstanceType {
    instance: any;
    name: string;
}
export interface ComponentInstanceType {
    instance: any;
    name: string;
    isElement: boolean;
}
export interface ComponentTreeNode extends DevToolsNode<DirectiveInstanceType, ComponentInstanceType> {
    children: ComponentTreeNode[];
}
export declare const getLatestComponentState: (query: ComponentExplorerViewQuery, directiveForest?: ComponentTreeNode[] | undefined) => DirectivesProperties | undefined;
export declare const getDirectiveMetadata: (dir: any) => DirectiveMetadata;
export declare const buildDirectiveForest: () => ComponentTreeNode[];
export declare const queryDirectiveForest: (position: ElementPosition, forest: ComponentTreeNode[]) => ComponentTreeNode | null;
export declare const findNodeInForest: (position: ElementPosition, forest: ComponentTreeNode[]) => HTMLElement | null;
export declare const findNodeFromSerializedPosition: (serializedPosition: string) => ComponentTreeNode | null;
export declare const updateState: (updatedStateData: UpdatedStateData) => void;
