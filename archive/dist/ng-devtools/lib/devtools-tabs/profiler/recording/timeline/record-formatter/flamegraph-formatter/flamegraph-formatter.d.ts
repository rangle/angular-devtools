import { RecordFormatter } from '../record-formatter';
import { ElementProfile, ProfilerFrame } from 'protocol';
import { Theme } from '../../../../../../theme-service';
export interface FlamegraphNode {
    value: number;
    color?: string;
    children: FlamegraphNode[];
    label: string;
    instances: number;
    original: ElementProfile;
    changeDetected: boolean;
}
export declare const ROOT_LEVEL_ELEMENT_LABEL = "Entire application";
export declare class FlamegraphFormatter extends RecordFormatter<FlamegraphNode> {
    formatFrame(frame: ProfilerFrame, showChangeDetection?: boolean, theme?: Theme): FlamegraphNode;
    addFrame(nodes: FlamegraphNode[], elements: ElementProfile[], showChangeDetection?: boolean, theme?: Theme): number;
}
