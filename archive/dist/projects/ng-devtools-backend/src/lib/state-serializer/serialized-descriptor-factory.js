import { PropType } from 'protocol';
import { METADATA_PROPERTY_NAME } from '../lview-transform';
const serializable = {
    [PropType.Boolean]: true,
    [PropType.String]: true,
    [PropType.Null]: true,
    [PropType.Number]: true,
    [PropType.Object]: true,
    [PropType.Undefined]: true,
    [PropType.Unknown]: true,
    [PropType.Array]: false,
    [PropType.BigInt]: false,
    [PropType.Function]: false,
    [PropType.HTMLNode]: false,
    [PropType.Symbol]: false,
    [PropType.Date]: false,
};
const typeToDescriptorPreview = {
    [PropType.Array]: (prop) => `Array(${prop.length})`,
    [PropType.BigInt]: (prop) => truncate(prop.toString()),
    [PropType.Boolean]: (prop) => truncate(prop.toString()),
    [PropType.String]: (prop) => `"${prop}"`,
    [PropType.Function]: (prop) => `${prop.name}(...)`,
    [PropType.HTMLNode]: (prop) => prop.constructor.name,
    [PropType.Null]: (_) => 'null',
    [PropType.Number]: (prop) => parseInt(prop, 10).toString(),
    [PropType.Object]: (prop) => (Object.keys(prop).length > 0 ? '{...}' : '{}'),
    [PropType.Symbol]: (_) => 'Symbol()',
    [PropType.Undefined]: (_) => 'undefined',
    [PropType.Date]: (_) => 'Date()',
    [PropType.Unknown]: (_) => 'unknown',
};
const ignoreList = new Set([METADATA_PROPERTY_NAME, '__ngSimpleChanges__']);
const shallowPropTypeToTreeMetaData = {
    [PropType.String]: {
        editable: true,
        expandable: false,
    },
    [PropType.BigInt]: {
        editable: false,
        expandable: false,
    },
    [PropType.Boolean]: {
        editable: true,
        expandable: false,
    },
    [PropType.Number]: {
        editable: true,
        expandable: false,
    },
    [PropType.Date]: {
        editable: true,
        expandable: false,
    },
    [PropType.Null]: {
        editable: true,
        expandable: false,
    },
    [PropType.Undefined]: {
        editable: true,
        expandable: false,
    },
    [PropType.Symbol]: {
        editable: false,
        expandable: false,
    },
    [PropType.Function]: {
        editable: false,
        expandable: false,
    },
    [PropType.HTMLNode]: {
        editable: false,
        expandable: false,
    },
    [PropType.Unknown]: {
        editable: false,
        expandable: false,
    },
};
export const createShallowSerializedDescriptor = (propData) => {
    const { type } = propData;
    const shallowSerializedDescriptor = {
        type,
        expandable: shallowPropTypeToTreeMetaData[type].expandable,
        editable: shallowPropTypeToTreeMetaData[type].editable,
        preview: typeToDescriptorPreview[propData.type](propData.prop),
    };
    if (propData.prop !== undefined && serializable[type]) {
        shallowSerializedDescriptor.value = propData.prop;
    }
    return shallowSerializedDescriptor;
};
export const createLevelSerializedDescriptor = (propData, levelOptions, continuation) => {
    const { type, prop } = propData;
    const levelSerializedDescriptor = {
        type,
        editable: false,
        expandable: Object.keys(prop).length > 0,
        preview: typeToDescriptorPreview[propData.type](propData.prop),
    };
    if (levelOptions.level !== undefined && levelOptions.currentLevel < levelOptions.level) {
        const value = getLevelDescriptorValue(propData, levelOptions, continuation);
        if (value !== undefined) {
            levelSerializedDescriptor.value = value;
        }
    }
    return levelSerializedDescriptor;
};
export const createNestedSerializedDescriptor = (propData, levelOptions, nodes, nestedSerializer) => {
    const { type, prop } = propData;
    const nestedSerializedDescriptor = {
        type,
        editable: false,
        expandable: Object.keys(prop).length > 0,
        preview: typeToDescriptorPreview[propData.type](propData.prop),
    };
    if (nodes && nodes.length) {
        const value = getNestedDescriptorValue(propData, levelOptions, nodes, nestedSerializer);
        if (value !== undefined) {
            nestedSerializedDescriptor.value = value;
        }
    }
    return nestedSerializedDescriptor;
};
const getNestedDescriptorValue = (propData, levelOptions, nodes, nestedSerializer) => {
    const { type, prop } = propData;
    const { currentLevel } = levelOptions;
    switch (type) {
        case PropType.Array:
            return nodes.map(nestedProp => nestedSerializer(prop[nestedProp.name], nestedProp.children, currentLevel + 1));
        case PropType.Object:
            return nodes.reduce((accumulator, nestedProp) => {
                if (prop.hasOwnProperty(nestedProp.name) &&
                    typeof nestedProp.name === 'string' &&
                    !ignoreList.has(nestedProp.name)) {
                    accumulator[nestedProp.name] = nestedSerializer(prop[nestedProp.name], nestedProp.children, currentLevel + 1);
                }
                return accumulator;
            }, {});
    }
};
const getLevelDescriptorValue = (propData, levelOptions, continuation) => {
    const { type, prop } = propData;
    const { currentLevel, level } = levelOptions;
    switch (type) {
        case PropType.Array:
            return prop.map((nested, idx) => continuation(nested, idx, currentLevel + 1, level));
        case PropType.Object:
            return Object.keys(prop).reduce((accumulator, propName) => {
                if (typeof propName === 'string' && !ignoreList.has(propName)) {
                    accumulator[propName] = continuation(prop[propName], propName, currentLevel + 1, level);
                }
                return accumulator;
            }, {});
    }
};
const truncate = (str, max = 20) => {
    if (str.length > max) {
        return str.substr(0, max) + '...';
    }
    return str;
};
//# sourceMappingURL=serialized-descriptor-factory.js.map