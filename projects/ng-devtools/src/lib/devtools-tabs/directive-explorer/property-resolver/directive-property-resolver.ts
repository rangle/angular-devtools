import { Descriptor, PropType, MessageBus, Events, Properties, DirectivePosition, NestedProp } from 'protocol';
import { MatTreeFlattener } from '@angular/material/tree';
import { PropertyDataSource } from './property-data-source';
import { FlatTreeControl } from '@angular/cdk/tree';
import { getExpandedDirectiveProperties } from './property-expanded-directive-properties';
import { Observable } from 'rxjs';
import { Property, FlatNode } from './element-property-resolver';

export interface DirectiveTreeData {
  dataSource: PropertyDataSource;
  treeControl: FlatTreeControl<FlatNode>;
}

const expandable = (prop: Descriptor) => {
  if (!prop) {
    return false;
  }
  if (!prop.expandable) {
    return false;
  }
  return !(prop.type !== PropType.Object && prop.type !== PropType.Array);
};

const getDirectiveControls = (
  dataSource: PropertyDataSource
): { dataSource: PropertyDataSource; treeControl: FlatTreeControl<FlatNode> } => {
  const treeControl = dataSource.treeControl;
  return {
    dataSource,
    treeControl,
  };
};

export class DirectivePropertyResolver {
  _treeFlattener = new MatTreeFlattener(
    (node: Property, level: number): FlatNode => {
      return {
        expandable: expandable(node.descriptor),
        prop: node,
        level,
      };
    },
    node => node.level,
    node => node.expandable,
    node => this._getChildren(node)
  );

  _treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  private _inputsDataSource: PropertyDataSource;
  private _outputsDataSource: PropertyDataSource;
  private _stateDataSource: PropertyDataSource;

  constructor(
    private _messageBus: MessageBus<Events>,
    private _props: Properties,
    private _directivePosition: DirectivePosition,
    private _onRequestingNestedProperties: () => void,
    private _onReceivedNestedProperties: () => void
  ) {
    this._initDataSources();
  }

  get directiveInputControls(): DirectiveTreeData {
    return getDirectiveControls(this._inputsDataSource);
  }

  get directiveOutputControls(): DirectiveTreeData {
    return getDirectiveControls(this._outputsDataSource);
  }

  get directiveStateControls(): DirectiveTreeData {
    return getDirectiveControls(this._stateDataSource);
  }

  get directiveProperties(): { [name: string]: Descriptor } {
    return this._props.props;
  }

  getExpandedProperties(): NestedProp[] {
    return [
      ...getExpandedDirectiveProperties(this._inputsDataSource.data),
      ...getExpandedDirectiveProperties(this._outputsDataSource.data),
      ...getExpandedDirectiveProperties(this._stateDataSource.data),
    ];
  }

  updateProperties(newProps: Properties): void {
    this._props = newProps;
    const { inputProps, outputProps, stateProps } = this._sortPropsIntoCategories();

    this._inputsDataSource.update(inputProps);
    this._outputsDataSource.update(outputProps);
    this._stateDataSource.update(stateProps);
  }

  updateValue(node: FlatNode, newValue: any): void {
    const directiveId = this._directivePosition;
    const keyPath = this._constructPathOfKeysToPropertyValue(node.prop);
    this._messageBus.emit('updateState', [{ directiveId, keyPath, newValue }]);
    node.prop.descriptor.value = newValue;
  }

  private _constructPathOfKeysToPropertyValue(nodePropToGetKeysFor: Property, keys: string[] = []): string[] {
    keys.unshift(nodePropToGetKeysFor.name);
    const parentNodeProp = nodePropToGetKeysFor.parent;
    if (parentNodeProp) {
      this._constructPathOfKeysToPropertyValue(parentNodeProp, keys);
    }
    return keys;
  }

  private _getChildren(prop: Property): Property[] | undefined {
    const descriptor = prop.descriptor;
    if (
      (descriptor.type === PropType.Object || descriptor.type === PropType.Array) &&
      !(descriptor.value instanceof Observable)
    ) {
      return Object.keys(descriptor.value || {}).map(name => {
        return {
          name,
          descriptor: descriptor.value ? descriptor.value[name] : null,
          parent: prop,
        };
      });
    } else {
      console.error('Unexpected data type', descriptor, 'in property', prop);
    }
  }

  private _initDataSources(): void {
    const { inputProps, outputProps, stateProps } = this._sortPropsIntoCategories();

    this._inputsDataSource = this._createDataSourceFromProps(inputProps);
    this._outputsDataSource = this._createDataSourceFromProps(outputProps);
    this._stateDataSource = this._createDataSourceFromProps(stateProps);
  }

  private _createDataSourceFromProps(props: { [name: string]: Descriptor }): PropertyDataSource {
    return new PropertyDataSource(
      props,
      this._treeFlattener,
      this._treeControl,
      this._directivePosition,
      this._messageBus,
      this._onRequestingNestedProperties,
      this._onReceivedNestedProperties
    );
  }

  private _sortPropsIntoCategories(): {
    inputProps: { [name: string]: Descriptor };
    outputProps: { [name: string]: Descriptor };
    stateProps: { [name: string]: Descriptor };
  } {
    const inputLabels: string[] = Object.keys(this._props.inputs || {});
    const outputLabels: string[] = Object.keys(this._props.outputs || {});

    const inputProps = {};
    const outputProps = {};
    const stateProps = {};
    let propPointer;

    Object.keys(this.directiveProperties).forEach(propName => {
      propPointer = inputLabels.includes(propName)
        ? inputProps
        : outputLabels.includes(propName)
        ? outputProps
        : stateProps;
      propPointer[propName] = this.directiveProperties[propName];
    });

    return {
      inputProps,
      outputProps,
      stateProps,
    };
  }
}
