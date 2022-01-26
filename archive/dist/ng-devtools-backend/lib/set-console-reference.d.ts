import { ElementPosition } from 'protocol';
import { ComponentTreeNode } from './component-tree';
interface ConsoleReferenceNode {
    node: ComponentTreeNode | null;
    position: ElementPosition;
}
export declare const setConsoleReference: (referenceNode: ConsoleReferenceNode) => void;
export {};
