import { ElementProfile, DirectiveProfile, ProfilerFrame } from 'protocol';
export interface TimelineView<T> {
    timeline: AppEntry<T>[];
}
export interface AppEntry<T> {
    app: T[];
    timeSpent: number;
    source: string;
}
export interface GraphNode {
    toolTip: string;
    style: any;
}
export declare abstract class RecordFormatter<T> {
    abstract formatFrame(frame: ProfilerFrame): T;
    abstract addFrame(nodes: T | T[], elements: ElementProfile[]): number | void;
    getLabel(element: ElementProfile): string;
    getValue(element: ElementProfile): number;
    getDirectiveValue(directive: DirectiveProfile): number;
}
