import { PropType } from 'protocol';
import { MatTreeFlattener } from '@angular/material/tree';
import { PropertyDataSource } from './property-data-source';
import { FlatTreeControl } from '@angular/cdk/tree';
import { getExpandedDirectiveProperties } from './property-expanded-directive-properties';
import { Observable } from 'rxjs';
import { arrayifyProps } from './arrayify-props';
const expandable = (prop) => {
    if (!prop) {
        return false;
    }
    if (!prop.expandable) {
        return false;
    }
    return !(prop.type !== PropType.Object && prop.type !== PropType.Array);
};
const getDirectiveControls = (dataSource) => {
    const treeControl = dataSource.treeControl;
    return {
        dataSource,
        treeControl,
    };
};
export const constructPathOfKeysToPropertyValue = (nodePropToGetKeysFor, keys = []) => {
    keys.unshift(nodePropToGetKeysFor.name);
    const parentNodeProp = nodePropToGetKeysFor.parent;
    if (parentNodeProp) {
        constructPathOfKeysToPropertyValue(parentNodeProp, keys);
    }
    return keys;
};
export class DirectivePropertyResolver {
    constructor(_messageBus, _props, _directivePosition) {
        this._messageBus = _messageBus;
        this._props = _props;
        this._directivePosition = _directivePosition;
        this._treeFlattener = new MatTreeFlattener((node, level) => {
            return {
                expandable: expandable(node.descriptor),
                prop: node,
                level,
            };
        }, (node) => node.level, (node) => node.expandable, (node) => this._getChildren(node));
        this._treeControl = new FlatTreeControl((node) => node.level, (node) => node.expandable);
        this._initDataSources();
    }
    get directiveInputControls() {
        return getDirectiveControls(this._inputsDataSource);
    }
    get directiveOutputControls() {
        return getDirectiveControls(this._outputsDataSource);
    }
    get directiveStateControls() {
        return getDirectiveControls(this._stateDataSource);
    }
    get directiveProperties() {
        return this._props.props;
    }
    get directivePosition() {
        return this._directivePosition;
    }
    get directiveViewEncapsulation() {
        var _a;
        return (_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.encapsulation;
    }
    get directiveHasOnPushStrategy() {
        var _a;
        return (_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.onPush;
    }
    getExpandedProperties() {
        return [
            ...getExpandedDirectiveProperties(this._inputsDataSource.data),
            ...getExpandedDirectiveProperties(this._outputsDataSource.data),
            ...getExpandedDirectiveProperties(this._stateDataSource.data),
        ];
    }
    updateProperties(newProps) {
        this._props = newProps;
        const { inputProps, outputProps, stateProps } = this._classifyProperties();
        this._inputsDataSource.update(inputProps);
        this._outputsDataSource.update(outputProps);
        this._stateDataSource.update(stateProps);
    }
    updateValue(node, newValue) {
        const directiveId = this._directivePosition;
        const keyPath = constructPathOfKeysToPropertyValue(node.prop);
        this._messageBus.emit('updateState', [{ directiveId, keyPath, newValue }]);
        node.prop.descriptor.value = newValue;
    }
    _getChildren(prop) {
        const descriptor = prop.descriptor;
        if ((descriptor.type === PropType.Object || descriptor.type === PropType.Array) &&
            !(descriptor.value instanceof Observable)) {
            return arrayifyProps(descriptor.value || {}, prop);
        }
        else {
            console.error('Unexpected data type', descriptor, 'in property', prop);
        }
    }
    _initDataSources() {
        const { inputProps, outputProps, stateProps } = this._classifyProperties();
        this._inputsDataSource = this._createDataSourceFromProps(inputProps);
        this._outputsDataSource = this._createDataSourceFromProps(outputProps);
        this._stateDataSource = this._createDataSourceFromProps(stateProps);
    }
    _createDataSourceFromProps(props) {
        return new PropertyDataSource(props, this._treeFlattener, this._treeControl, this._directivePosition, this._messageBus);
    }
    _classifyProperties() {
        var _a, _b;
        const inputLabels = new Set(Object.keys(((_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.inputs) || {}));
        const outputLabels = new Set(Object.keys(((_b = this._props.metadata) === null || _b === void 0 ? void 0 : _b.outputs) || {}));
        const inputProps = {};
        const outputProps = {};
        const stateProps = {};
        let propPointer;
        Object.keys(this.directiveProperties).forEach((propName) => {
            propPointer = inputLabels.has(propName) ? inputProps : outputLabels.has(propName) ? outputProps : stateProps;
            propPointer[propName] = this.directiveProperties[propName];
        });
        return {
            inputProps,
            outputProps,
            stateProps,
        };
    }
}
//# sourceMappingURL=directive-property-resolver.js.map