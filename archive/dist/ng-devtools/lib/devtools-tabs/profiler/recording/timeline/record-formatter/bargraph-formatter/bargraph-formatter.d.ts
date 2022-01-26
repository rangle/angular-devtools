import { RecordFormatter } from '../record-formatter';
import { ElementProfile, ProfilerFrame } from 'protocol';
export interface BargraphNode {
    parents: ElementProfile[];
    value: number;
    label: string;
    original: ElementProfile;
}
export declare class BarGraphFormatter extends RecordFormatter<BargraphNode[]> {
    formatFrame(frame: ProfilerFrame): BargraphNode[];
    addFrame(nodes: BargraphNode[], elements: ElementProfile[], parents?: ElementProfile[]): number;
}
