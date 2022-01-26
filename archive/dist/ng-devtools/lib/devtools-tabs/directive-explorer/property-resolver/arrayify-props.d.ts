import { Descriptor } from 'protocol';
import { Property } from './element-property-resolver';
export declare const arrayifyProps: (props: {
    [prop: string]: Descriptor;
} | Descriptor[], parent?: Property | null) => Property[];
