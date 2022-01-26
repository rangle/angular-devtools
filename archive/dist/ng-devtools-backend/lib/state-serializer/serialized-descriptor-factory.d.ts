import { Descriptor, NestedProp, PropType } from 'protocol';
export interface CompositeType {
    type: Extract<PropType, PropType.Array | PropType.Object>;
    prop: any;
}
export interface TerminalType {
    type: Exclude<PropType, PropType.Array | PropType.Object>;
    prop: any;
}
export declare type PropertyData = TerminalType | CompositeType;
export declare type Formatter<Result> = {
    [key in PropType]: (data: any) => Result;
};
interface LevelOptions {
    currentLevel: number;
    level?: number;
}
export declare const createShallowSerializedDescriptor: (propData: TerminalType) => Descriptor;
export declare const createLevelSerializedDescriptor: (propData: CompositeType, levelOptions: LevelOptions, continuation: any) => Descriptor;
export declare const createNestedSerializedDescriptor: (propData: CompositeType, levelOptions: LevelOptions, nodes: NestedProp[], nestedSerializer: any) => Descriptor;
export {};
