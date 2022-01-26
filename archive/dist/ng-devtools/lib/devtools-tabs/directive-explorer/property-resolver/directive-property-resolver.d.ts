import { Descriptor, MessageBus, Events, Properties, DirectivePosition, NestedProp } from 'protocol';
import { PropertyDataSource } from './property-data-source';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Property, FlatNode } from './element-property-resolver';
import { ViewEncapsulation } from '@angular/core';
export interface DirectiveTreeData {
    dataSource: PropertyDataSource;
    treeControl: FlatTreeControl<FlatNode>;
}
export declare const constructPathOfKeysToPropertyValue: (nodePropToGetKeysFor: Property, keys?: string[]) => string[];
export declare class DirectivePropertyResolver {
    private _messageBus;
    private _props;
    private _directivePosition;
    private _treeFlattener;
    private _treeControl;
    private _inputsDataSource;
    private _outputsDataSource;
    private _stateDataSource;
    constructor(_messageBus: MessageBus<Events>, _props: Properties, _directivePosition: DirectivePosition);
    get directiveInputControls(): DirectiveTreeData;
    get directiveOutputControls(): DirectiveTreeData;
    get directiveStateControls(): DirectiveTreeData;
    get directiveProperties(): {
        [name: string]: Descriptor;
    };
    get directivePosition(): DirectivePosition;
    get directiveViewEncapsulation(): ViewEncapsulation | undefined;
    get directiveHasOnPushStrategy(): boolean | undefined;
    getExpandedProperties(): NestedProp[];
    updateProperties(newProps: Properties): void;
    updateValue(node: FlatNode, newValue: any): void;
    private _getChildren;
    private _initDataSources;
    private _createDataSourceFromProps;
    private _classifyProperties;
}
