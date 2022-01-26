import { Events, MessageBus, DevToolsNode, DirectiveType, ComponentType } from 'protocol';
import { ComponentTreeNode } from './component-tree';
export declare const subscribeToClientEvents: (messageBus: MessageBus<Events>) => void;
export interface SerializableDirectiveInstanceType extends DirectiveType {
    id: number;
}
export interface SerializableComponentInstanceType extends ComponentType {
    id: number;
}
export interface SerializableComponentTreeNode extends DevToolsNode<SerializableDirectiveInstanceType, SerializableComponentInstanceType> {
    children: SerializableComponentTreeNode[];
}
export declare const prepareForestForSerialization: (roots: ComponentTreeNode[]) => SerializableComponentTreeNode[];
