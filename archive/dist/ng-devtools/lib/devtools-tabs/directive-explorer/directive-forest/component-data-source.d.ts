import { DevToolsNode } from 'protocol';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { IndexedNode } from './index-forest';
/** Flat node with expandable and level information */
export interface FlatNode {
    id: string;
    expandable: boolean;
    name: string;
    directives: string;
    position: number[];
    level: number;
    original: IndexedNode;
    newItem?: boolean;
}
export declare class ComponentDataSource extends DataSource<FlatNode> {
    private _treeControl;
    private _differ;
    private _expandedData;
    private _flattenedData;
    private _nodeToFlat;
    private _treeFlattener;
    constructor(_treeControl: FlatTreeControl<FlatNode>);
    get data(): FlatNode[];
    get expandedDataValues(): FlatNode[];
    getFlatNodeFromIndexedNode(indexedNode: IndexedNode): FlatNode | undefined;
    update(forest: DevToolsNode[]): {
        newItems: FlatNode[];
        movedItems: FlatNode[];
        removedItems: FlatNode[];
    };
    connect(collectionViewer: CollectionViewer): Observable<FlatNode[]>;
    disconnect(): void;
}
