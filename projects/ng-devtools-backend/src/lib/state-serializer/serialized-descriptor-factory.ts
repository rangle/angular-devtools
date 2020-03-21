import { Descriptor, NestedProp, PropType } from 'protocol';
import { METADATA_PROPERTY_NAME } from '../lview-transform';

interface PropData {
  type: PropType;
  prop: any;
}

interface LevelOptions {
  currentLevel: number;
  level?: number;
}

interface CommonTypeCases {
  arrayCase?: () => any;
  bigIntCase?: () => any;
  booleanCase?: () => any;
  stringCase?: () => any;
  dateCase?: () => any;
  functionCase?: () => any;
  htmlElementCase?: () => any;
  nullCase?: () => any;
  numberCase?: () => any;
  objectCase?: () => any;
  symbolCase?: () => any;
  undefinedCase?: () => any;
  unknownCase?: () => any;
}

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

export const createShallowSerializedDescriptor = (propData: PropData): Descriptor => {
  const { type } = propData;

  const shallowSerializedDescriptor: Descriptor = {
    type,
    expandable: shallowPropTypeToTreeMetaData[type].expandable,
    editable: shallowPropTypeToTreeMetaData[type].editable,
    preview: getDescriptorPreview(propData),
  };

  const value = getShallowDescriptorValue(propData);
  if (value !== undefined) {
    shallowSerializedDescriptor.value = value;
  }

  return shallowSerializedDescriptor;
};

export const createLevelSerializedDescriptor = (
  propData: PropData,
  levelOptions: LevelOptions,
  continuation: any
): Descriptor => {
  const { type, prop } = propData;

  const levelSerializedDescriptor: Descriptor = {
    type,
    editable: false,
    expandable: Object.keys(prop).length > 0,
    preview: getDescriptorPreview(propData),
  };

  if (levelOptions.level !== undefined && levelOptions.currentLevel < levelOptions.level) {
    const value = getLevelDescriptorValue(propData, levelOptions, continuation);
    if (value !== undefined) {
      levelSerializedDescriptor.value = value;
    }
  }

  return levelSerializedDescriptor;
};

export const createNestedSerializedDescriptor = (
  propData: PropData,
  levelOptions: LevelOptions,
  nodes: NestedProp[],
  nestedSerializer: any
): Descriptor => {
  const { type, prop } = propData;

  const nestedSerializedDescriptor: Descriptor = {
    type,
    editable: false,
    expandable: Object.keys(prop).length > 0,
    preview: getDescriptorPreview(propData),
  };

  if (nodes && nodes.length) {
    const value = getNestedDescriptorValue(propData, levelOptions, nodes, nestedSerializer);
    if (value !== undefined) {
      nestedSerializedDescriptor.value = value;
    }
  }
  return nestedSerializedDescriptor;
};

const getDataByType = (type: PropType, valueByType: CommonTypeCases, defaultValue?: any) => {
  let res;
  if (type === PropType.Array) {
    res = valueByType.arrayCase?.();
  } else if (type === PropType.BigInt) {
    res = valueByType.bigIntCase?.();
  } else if (type === PropType.Boolean) {
    res = valueByType.booleanCase?.();
  } else if (type === PropType.String) {
    res = valueByType.stringCase?.();
  } else if (type === PropType.Function) {
    res = valueByType.functionCase?.();
  } else if (type === PropType.Date) {
    res = valueByType.dateCase?.();
  } else if (type === PropType.HTMLNode) {
    res = valueByType.htmlElementCase?.();
  } else if (type === PropType.Null) {
    res = valueByType.nullCase?.();
  } else if (type === PropType.Number) {
    res = valueByType.numberCase?.();
  } else if (type === PropType.Object) {
    res = valueByType.objectCase?.();
  } else if (type === PropType.Symbol) {
    res = valueByType.symbolCase?.();
  } else if (type === PropType.Undefined) {
    res = valueByType.undefinedCase?.();
  } else if (type === PropType.Unknown) {
    res = valueByType.unknownCase?.();
  }
  return res ? res : defaultValue;
};

const getDescriptorPreview = (propData: PropData) => {
  const { type, prop } = propData;

  return getDataByType(
    type,
    {
      arrayCase: () => `Array(${prop.length})`,
      bigIntCase: () => truncate(prop.toString()),
      booleanCase: () => truncate(prop.toString()),
      stringCase: () => `"${prop}"`,
      functionCase: () => `${prop.name}(...)`,
      htmlElementCase: () => prop.constructor.name,
      nullCase: () => 'null',
      numberCase: () => parseInt(prop, 10).toString(),
      objectCase: () => (Object.keys(prop).length > 0 ? '{...}' : '{}'),
      symbolCase: () => 'Symbol()',
      undefinedCase: () => 'undefined',
      unknownCase: () => 'unknown',
    },
    ''
  );
};

const getShallowDescriptorValue = (propData: PropData) => {
  const { type, prop } = propData;

  return getDataByType(
    type,
    {
      bigIntCase: () => prop,
      booleanCase: () => prop,
      stringCase: () => prop,
      dateCase: () => prop,
      numberCase: () => prop,
    },
    undefined
  );
};

const getNestedDescriptorValue = (
  propData: PropData,
  levelOptions: LevelOptions,
  nodes: NestedProp[],
  nestedSerializer: any
) => {
  const { type, prop } = propData;
  const { currentLevel } = levelOptions;

  return getDataByType(type, {
    arrayCase: () =>
      nodes.map(nestedProp => nestedSerializer(prop[nestedProp.name], nestedProp.children, currentLevel + 1)),
    objectCase: () =>
      nodes.reduce((accumulator, nestedProp) => {
        if (
          prop.hasOwnProperty(nestedProp.name) &&
          typeof nestedProp.name === 'string' &&
          !ignoreList.has(nestedProp.name)
        ) {
          accumulator[nestedProp.name] = nestedSerializer(prop[nestedProp.name], nestedProp.children, currentLevel + 1);
        }
        return accumulator;
      }, {}),
  });
};

const getLevelDescriptorValue = (propData: PropData, levelOptions: LevelOptions, continuation: any) => {
  const { type, prop } = propData;
  const { currentLevel, level } = levelOptions;

  return getDataByType(type, {
    arrayCase: () => prop.map((nested: any, idx: number) => continuation(nested, idx, currentLevel + 1, level)),
    objectCase: () =>
      Object.keys(prop).reduce((accumulator, propName) => {
        if (typeof propName === 'string' && !ignoreList.has(propName)) {
          accumulator[propName] = continuation(prop[propName], propName, currentLevel + 1, level);
        }
        return accumulator;
      }, {}),
  });
};

const truncate = (str: string, max = 20): string => {
  if (str.length > max) {
    return str.substr(0, max) + '...';
  }
  return str;
};
