import { Descriptor, NestedProp } from 'protocol';
export declare const nestedSerializer: (serializableInstance: any, nodes: NestedProp[], currentLevel?: number, level?: number) => Descriptor;
export declare const levelSerializer: any;
export declare const serializeDirectiveState: (instance: object, levels?: number) => {
    [key: string]: Descriptor;
};
export declare const deeplySerializeSelectedProperties: (instance: any, props: NestedProp[]) => {
    [name: string]: Descriptor;
};
