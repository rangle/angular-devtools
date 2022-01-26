import { EventEmitter } from '@angular/core';
import { PropertyDataSource } from '../../../../../property-resolver/property-data-source';
import { FlatNode } from '../../../../../property-resolver/element-property-resolver';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from "@angular/core";
export declare class PropertyViewTreeComponent {
    dataSource: PropertyDataSource;
    treeControl: FlatTreeControl<FlatNode>;
    updateValue: EventEmitter<any>;
    inspect: EventEmitter<any>;
    hasChild: (_: number, node: FlatNode) => boolean;
    toggle(node: FlatNode): void;
    expand(node: FlatNode): void;
    handleUpdate(node: FlatNode, newValue: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertyViewTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertyViewTreeComponent, "ng-property-view-tree", never, { "dataSource": "dataSource"; "treeControl": "treeControl"; }, { "updateValue": "updateValue"; "inspect": "inspect"; }, never, never>;
}
