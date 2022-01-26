import { FlatNode } from './component-data-source';
import { FlatTreeControl } from '@angular/cdk/tree';
export declare const isChildOf: (childPosition: number[], parentPosition: number[]) => boolean;
export declare const parentCollapsed: (nodeIdx: number, all: FlatNode[], treeControl: FlatTreeControl<FlatNode>) => boolean;
