import { PropType } from 'protocol';
export const getExpandedDirectiveProperties = (data) => {
    const getChildren = (prop) => {
        if ((prop.type === PropType.Object || prop.type === PropType.Array) && prop.value) {
            return Object.keys(prop.value).map(k => {
                return {
                    name: prop.type === PropType.Array ? parseInt(k, 10) : k,
                    children: getChildren(prop.value[k]),
                };
            });
        }
        return [];
    };
    const getExpandedProperties = (props) => {
        return Object.keys(props).map(name => {
            return {
                name,
                children: getChildren(props[name]),
            };
        });
    };
    const parents = {};
    for (const node of data) {
        let prop = node.prop;
        while (prop.parent) {
            prop = prop.parent;
        }
        parents[prop.name] = prop.descriptor;
    }
    return getExpandedProperties(parents);
};
//# sourceMappingURL=property-expanded-directive-properties.js.map