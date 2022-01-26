import { RecordFormatter } from '../record-formatter';
import { ElementProfile, ProfilerFrame } from 'protocol';
export interface TreeMapNode {
    id: string;
    value: number;
    size: number;
    children: TreeMapNode[];
    original: ElementProfile | null;
}
export declare class TreeMapFormatter extends RecordFormatter<TreeMapNode> {
    formatFrame(record: ProfilerFrame): TreeMapNode;
    addFrame(nodes: TreeMapNode[], elements: ElementProfile[], prev?: TreeMapNode | null): void;
}
