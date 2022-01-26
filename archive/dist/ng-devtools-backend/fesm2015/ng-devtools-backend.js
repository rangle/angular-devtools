import { PropType, PropertyQueryTypes } from 'protocol';
import { SemVerDSL } from 'semver-dsl';
import { Subject } from 'rxjs';
import { arrayEquals } from 'shared-utils';
import { debounceTime } from 'rxjs/operators';

const runOutsideAngular = (f) => {
    const w = window;
    if (!w.Zone || !w.Zone.current) {
        f();
        return;
    }
    if (w.Zone.current._name !== 'angular') {
        w.Zone.current.run(f);
        return;
    }
    w.Zone.current._parent.run(f);
};
const componentMetadata = (instance) => instance.constructor.ɵcmp;
const isCustomElement = (node) => {
    if (typeof customElements === 'undefined') {
        return false;
    }
    if (!(node instanceof HTMLElement)) {
        return false;
    }
    const tagName = node.tagName.toLowerCase();
    return !!customElements.get(tagName);
};

let overlay;
let overlayContent;
const DEV_TOOLS_HIGHLIGHT_NODE_ID = '____ngDevToolsHighlight';
function init() {
    if (overlay) {
        return;
    }
    overlay = document.createElement('div');
    overlay.style.backgroundColor = 'rgba(104, 182, 255, 0.35)';
    overlay.style.position = 'fixed';
    overlay.style.zIndex = '2147483647';
    overlay.style.pointerEvents = 'none';
    overlay.style.display = 'flex';
    overlay.style.borderRadius = '3px';
    overlay.setAttribute('id', DEV_TOOLS_HIGHLIGHT_NODE_ID);
    overlayContent = document.createElement('div');
    overlayContent.style.backgroundColor = 'rgba(104, 182, 255, 0.9)';
    overlayContent.style.position = 'absolute';
    overlayContent.style.bottom = '-23px';
    overlayContent.style.right = '0px';
    overlayContent.style.fontFamily = 'monospace';
    overlayContent.style.fontSize = '11px';
    overlayContent.style.padding = '2px 3px';
    overlayContent.style.borderRadius = '3px';
    overlayContent.style.color = 'white';
    overlay.appendChild(overlayContent);
}
const findComponentAndHost = (el) => {
    if (!el) {
        return { component: null, host: null };
    }
    while (el) {
        const component = el instanceof HTMLElement && ng.getComponent(el);
        if (component) {
            return { component, host: el };
        }
        if (!el.parentElement) {
            break;
        }
        el = el.parentElement;
    }
    return { component: null, host: null };
};
// Todo(aleksanderbodurri): this should not be part of the highlighter, move this somewhere else
const getDirectiveName = (dir) => {
    if (dir) {
        return dir.constructor.name;
    }
    return 'unknown';
};
const highlight = (el) => {
    const cmp = findComponentAndHost(el).component;
    const rect = getComponentRect(el);
    init();
    if (rect) {
        const content = [];
        const name = getDirectiveName(cmp);
        if (name) {
            const pre = document.createElement('span');
            pre.style.opacity = '0.6';
            pre.innerText = '<';
            const text = document.createTextNode(name);
            const post = document.createElement('span');
            post.style.opacity = '0.6';
            post.innerText = '>';
            content.push(pre, text, post);
        }
        showOverlay(rect, content);
    }
};
function unHighlight() {
    if (overlay && overlay.parentNode) {
        document.body.removeChild(overlay);
    }
}
function inDoc(node) {
    if (!node) {
        return false;
    }
    const doc = node.ownerDocument.documentElement;
    const parent = node.parentNode;
    return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}
function getComponentRect(el) {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    if (!inDoc(el)) {
        return;
    }
    return el.getBoundingClientRect();
}
function showOverlay({ width = 0, height = 0, top = 0, left = 0 }, content = []) {
    overlay.style.width = ~~width + 'px';
    overlay.style.height = ~~height + 'px';
    overlay.style.top = ~~top + 'px';
    overlay.style.left = ~~left + 'px';
    overlayContent.innerHTML = '';
    content.forEach((child) => overlayContent.appendChild(child));
    document.body.appendChild(overlay);
}

var _a, _b, _c;
const versionElement = document.querySelector('[ng-version]');
const versionRe = /(\d+\.\d+\.\d+(-(next|rc)\.\d+)?)/;
const defaultVersion = '0.0.0';
let version = defaultVersion;
if (versionElement) {
    version = (_a = versionElement.getAttribute('ng-version')) !== null && _a !== void 0 ? _a : defaultVersion;
    version = (_c = ((_b = version.match(versionRe)) !== null && _b !== void 0 ? _b : [''])[0]) !== null && _c !== void 0 ? _c : defaultVersion;
}
const VERSION = version;

let HEADER_OFFSET = 19;
const latest = () => {
    HEADER_OFFSET = 20;
};
SemVerDSL(VERSION).gte('10.0.0-next.4', latest);
// In g3 everyone has version 0.0.0, using HEAD from master.
SemVerDSL(VERSION).eq('0.0.0', latest);
const TYPE = 1;
const ELEMENT = 0;
const LVIEW_TVIEW = 1;
const METADATA_PROPERTY_NAME = '__ngContext__';
const isLContainer = (value) => {
    return Array.isArray(value) && value[TYPE] === true;
};
const isLView = (value) => {
    return Array.isArray(value) && typeof value[TYPE] === 'object';
};
const getLViewFromDirectiveOrElementInstance = (dir) => {
    if (!dir) {
        return null;
    }
    const context = dir[METADATA_PROPERTY_NAME];
    if (!context) {
        return null;
    }
    if (isLView(context)) {
        return context;
    }
    return context.lView;
};
const getDirectiveHostElement = (dir) => {
    const ctx = dir[METADATA_PROPERTY_NAME];
    if (ctx[0] !== null) {
        return ctx[0];
    }
    const components = ctx[LVIEW_TVIEW].components;
    if (!components || components.length !== 1) {
        return false;
    }
    return ctx[components[0]][0];
};
const getNode = (lView, data, idx) => {
    const directives = [];
    let component = null;
    const tNode = data[idx];
    const node = lView[idx][ELEMENT];
    const elementName = (node.tagName || node.nodeName).toLowerCase();
    for (let i = tNode.directiveStart; i < tNode.directiveEnd; i++) {
        const dir = lView[i];
        const dirMeta = data[i];
        if (dirMeta && dirMeta.template) {
            component = {
                name: elementName,
                instance: dir,
                isElement: isCustomElement(node),
            };
        }
        else if (dirMeta) {
            directives.push({
                name: getDirectiveName(dir),
                instance: dir,
            });
        }
    }
    return {
        element: elementName,
        nativeElement: lView[idx][ELEMENT],
        directives,
        component,
        children: [],
    };
};
const extractNodes = (lViewOrLContainer, nodes = []) => {
    if (isLContainer(lViewOrLContainer)) {
        for (let i = 9; i < lViewOrLContainer.length; i++) {
            if (lViewOrLContainer[i]) {
                extractNodes(lViewOrLContainer[i], nodes);
            }
        }
        return nodes;
    }
    const lView = lViewOrLContainer;
    const tView = lView[LVIEW_TVIEW];
    for (let i = HEADER_OFFSET; i < lView.length; i++) {
        if (lView[i] && tView.data && lView[i][ELEMENT] instanceof Node) {
            const node = getNode(lView, tView.data, i);
            // TODO(mgechev): verify if this won't make us skip projected content.
            if (node.component || node.directives.length) {
                nodes.push(node);
                extractNodes(lView[i], node.children);
            }
        }
    }
    return nodes;
};
const buildDirectiveTree = (lView) => extractNodes(lView);

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
const ignoreList$1 = new Set([METADATA_PROPERTY_NAME, '__ngSimpleChanges__']);
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
const createShallowSerializedDescriptor = (propData) => {
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
const createLevelSerializedDescriptor = (propData, levelOptions, continuation) => {
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
const createNestedSerializedDescriptor = (propData, levelOptions, nodes, nestedSerializer) => {
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
                    !ignoreList$1.has(nestedProp.name)) {
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
                if (typeof propName === 'string' && !ignoreList$1.has(propName)) {
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

const ignoreList = new Set([METADATA_PROPERTY_NAME, '__ngSimpleChanges__']);
const commonTypes = {
    boolean: PropType.Boolean,
    bigint: PropType.BigInt,
    function: PropType.Function,
    number: PropType.Number,
    string: PropType.String,
    symbol: PropType.Symbol,
};
const MAX_LEVEL = 1;
const getPropType = (prop) => {
    if (prop === undefined) {
        return PropType.Undefined;
    }
    if (prop === null) {
        return PropType.Null;
    }
    if (prop instanceof HTMLElement) {
        return PropType.HTMLNode;
    }
    const type = typeof prop;
    if (commonTypes[type] !== undefined) {
        return commonTypes[type];
    }
    if (type === 'object') {
        if (Array.isArray(prop)) {
            return PropType.Array;
        }
        else if (Object.prototype.toString.call(prop) === '[object Date]') {
            return PropType.Date;
        }
        else if (prop instanceof Node) {
            return PropType.HTMLNode;
        }
        else {
            return PropType.Object;
        }
    }
    return PropType.Unknown;
};
const nestedSerializer = (serializableInstance, nodes, currentLevel = 0, level = MAX_LEVEL) => {
    const propData = { prop: serializableInstance, type: getPropType(serializableInstance) };
    const levelOptions = { level, currentLevel };
    if (currentLevel < level) {
        return levelSerializer(serializableInstance, undefined, currentLevel, level, nestedSerializerContinuation(nodes, level));
    }
    switch (propData.type) {
        case PropType.Array:
        case PropType.Object:
            return createNestedSerializedDescriptor(propData, levelOptions, nodes, nestedSerializer);
        default:
            return createShallowSerializedDescriptor(propData);
    }
};
const nestedSerializerContinuation = (nodes, level) => (nestedProp, propName, nestedLevel) => {
    const idx = nodes.findIndex(v => v.name === propName);
    if (idx < 0) {
        // The property is not specified in the query.
        return nestedSerializer(nestedProp, [], nestedLevel, level);
    }
    return nestedSerializer(nestedProp, nodes[idx].children, nestedLevel, level);
};
const levelSerializer = (serializableInstance, _ = undefined, currentLevel = 0, level = MAX_LEVEL, continuation = levelSerializer) => {
    const propData = { prop: serializableInstance, type: getPropType(serializableInstance) };
    const levelOptions = { level, currentLevel };
    switch (propData.type) {
        case PropType.Array:
        case PropType.Object:
            return createLevelSerializedDescriptor(propData, levelOptions, continuation);
        default:
            return createShallowSerializedDescriptor(propData);
    }
};
const serializeDirectiveState = (instance, levels = MAX_LEVEL) => {
    const result = {};
    for (const prop in instance) {
        if (instance.hasOwnProperty(prop) && !ignoreList.has(prop)) {
            result[prop] = levelSerializer(instance[prop], null, 0, levels);
        }
    }
    return result;
};
const deeplySerializeSelectedProperties = (instance, props) => {
    const result = {};
    Object.keys(instance).forEach(propName => {
        if (ignoreList.has(propName)) {
            return;
        }
        const idx = props.findIndex(v => v.name === propName);
        if (idx < 0) {
            result[propName] = levelSerializer(instance[propName]);
        }
        else {
            result[propName] = nestedSerializer(instance[propName], props[idx].children);
        }
    });
    return result;
};

const ngDebug = () => window.ng;
const getLatestComponentState = (query, directiveForest) => {
    // if a directive forest is passed in we don't have to build the forest again.
    directiveForest = directiveForest !== null && directiveForest !== void 0 ? directiveForest : buildDirectiveForest();
    const node = queryDirectiveForest(query.selectedElement, directiveForest);
    if (!node) {
        return;
    }
    const result = {};
    const populateResultSet = (dir) => {
        if (query.propertyQuery.type === PropertyQueryTypes.All) {
            result[dir.name] = {
                props: serializeDirectiveState(dir.instance),
                metadata: getDirectiveMetadata(dir.instance),
            };
        }
        if (query.propertyQuery.type === PropertyQueryTypes.Specified) {
            result[dir.name] = {
                props: deeplySerializeSelectedProperties(dir.instance, query.propertyQuery.properties[dir.name] || []),
                metadata: getDirectiveMetadata(dir.instance),
            };
        }
    };
    node.directives.forEach(populateResultSet);
    if (node.component) {
        populateResultSet(node.component);
    }
    return result;
};
const getDirectiveMetadata = (dir) => {
    const safelyGrabMetadata = (key) => {
        try {
            return dir.constructor.ɵcmp ? dir.constructor.ɵcmp[key] : dir.constructor.ɵdir[key];
        }
        catch (_a) {
            console.warn(`Could not find metadata for key: ${key} in directive:`, dir);
            return undefined;
        }
    };
    return {
        inputs: safelyGrabMetadata("inputs" /* INPUTS */),
        outputs: safelyGrabMetadata("outputs" /* OUTPUTS */),
        encapsulation: safelyGrabMetadata("encapsulation" /* ENCAPSULATION */),
        onPush: safelyGrabMetadata("onPush" /* ON_PUSH */),
    };
};
const getRootLViewsHelper = (element, rootLViews = new Set()) => {
    if (!(element instanceof HTMLElement)) {
        return rootLViews;
    }
    const lView = getLViewFromDirectiveOrElementInstance(element);
    if (lView) {
        rootLViews.add(lView);
        return rootLViews;
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < element.children.length; i++) {
        getRootLViewsHelper(element.children[i], rootLViews);
    }
    return rootLViews;
};
// To get all roots, we first get all elements with ng-version attribute.
// This includes all app roots plus Angular Elements.
// We may also have overlays which are on the same level as the top-level
// app. We get these by traversing the DOM starting from the root DOM
// element and stopping once we hit a node which is not HTMLElement or
// has lView data associated with it.
const getRootLViews = (element) => {
    const roots = element.querySelectorAll('[ng-version]');
    return getRootLViewsHelper(element, new Set(Array.from(roots).map(getLViewFromDirectiveOrElementInstance)));
};
const buildDirectiveForest = () => {
    const roots = getRootLViews(document.documentElement);
    return Array.prototype.concat.apply([], [...roots].map(buildDirectiveTree));
};
// Based on an ElementID we return a specific component node.
// If we can't find any, we return null.
const queryDirectiveForest = (position, forest) => {
    if (!position.length) {
        return null;
    }
    let node = null;
    for (const i of position) {
        node = forest[i];
        if (!node) {
            return null;
        }
        forest = node.children;
    }
    return node;
};
const findNodeInForest = (position, forest) => {
    const foundComponent = queryDirectiveForest(position, forest);
    return foundComponent ? foundComponent.nativeElement : null;
};
const findNodeFromSerializedPosition = (serializedPosition) => {
    const position = serializedPosition.split(',').map((index) => parseInt(index, 10));
    return queryDirectiveForest(position, buildDirectiveForest());
};
const updateState = (updatedStateData) => {
    const ngd = ngDebug();
    const node = queryDirectiveForest(updatedStateData.directiveId.element, buildDirectiveForest());
    if (!node) {
        console.warn('Could not update the state of component', updatedStateData, 'because the component was not found');
        return;
    }
    if (updatedStateData.directiveId.directive !== undefined) {
        const directive = node.directives[updatedStateData.directiveId.directive].instance;
        mutateComponentOrDirective(updatedStateData, directive);
        ngd.applyChanges(ngd.getOwningComponent(directive));
        return;
    }
    if (node.component) {
        const comp = node.component.instance;
        mutateComponentOrDirective(updatedStateData, comp);
        ngd.applyChanges(comp);
        return;
    }
};
const mutateComponentOrDirective = (updatedStateData, compOrDirective) => {
    const valueKey = updatedStateData.keyPath.pop();
    if (valueKey === undefined) {
        return;
    }
    let parentObjectOfValueToUpdate = compOrDirective;
    updatedStateData.keyPath.forEach((key) => {
        parentObjectOfValueToUpdate = parentObjectOfValueToUpdate[key];
    });
    parentObjectOfValueToUpdate[valueKey] = updatedStateData.newValue;
};

function parseRoutes(router) {
    var _a;
    const rootName = ((_a = router.rootComponentType) === null || _a === void 0 ? void 0 : _a.name) || 'no-name';
    const rootChildren = router.config;
    const root = {
        handler: rootName,
        name: rootName,
        path: '/',
        children: rootChildren ? assignChildrenToParent(null, rootChildren) : [],
        isAux: false,
        specificity: null,
        data: null,
        hash: null,
    };
    return root;
}
function assignChildrenToParent(parentPath, children) {
    return children.map((child) => {
        var _a;
        const childName = childRouteName(child);
        const childDescendents = ((_a = child._loadedConfig) === null || _a === void 0 ? void 0 : _a.routes) || child.children;
        // only found in aux routes, otherwise property will be undefined
        const isAuxRoute = !!child.outlet;
        const pathFragment = child.outlet ? `(${child.outlet}:${child.path})` : child.path;
        const routeConfig = {
            handler: childName,
            data: [],
            hash: null,
            specificity: null,
            name: childName,
            path: `${parentPath ? parentPath : ''}/${pathFragment}`.split('//').join('/'),
            isAux: isAuxRoute,
            children: [],
        };
        if (childDescendents) {
            routeConfig.children = assignChildrenToParent(routeConfig.path, childDescendents);
        }
        if (child.data) {
            for (const el in child.data) {
                if (child.data.hasOwnProperty(el)) {
                    routeConfig.data.push({
                        key: el,
                        value: child.data[el],
                    });
                }
            }
        }
        return routeConfig;
    });
}
function childRouteName(child) {
    if (child.component) {
        return child.component.name;
    }
    else if (child.loadChildren) {
        return `${child.path} [Lazy]`;
    }
    else if (child.redirectTo) {
        return `${child.path} -> redirecting to -> "${child.redirectTo}"`;
    }
    else {
        return 'no-name-route';
    }
}

class IdentityTracker {
    constructor() {
        this._directiveIdCounter = 0;
        this._currentDirectivePosition = new Map();
        this._currentDirectiveId = new Map();
        this._isComponent = new Map();
    }
    getDirectivePosition(dir) {
        return this._currentDirectivePosition.get(dir);
    }
    getDirectiveId(dir) {
        return this._currentDirectiveId.get(dir);
    }
    hasDirective(dir) {
        return this._currentDirectiveId.has(dir);
    }
    index() {
        const directiveForest = buildDirectiveForest();
        const indexedForest = indexForest(directiveForest);
        const newNodes = [];
        const removedNodes = [];
        const allNodes = new Set();
        indexedForest.forEach((root) => this._index(root, null, newNodes, allNodes));
        this._currentDirectiveId.forEach((_, dir) => {
            if (!allNodes.has(dir)) {
                removedNodes.push({ directive: dir, isComponent: !!this._isComponent.get(dir) });
                // We can't clean these up because during profiling
                // they might be requested for removed components
                // this._currentDirectiveId.delete(dir);
                // this._currentDirectivePosition.delete(dir);
            }
        });
        return { newNodes, removedNodes, indexedForest, directiveForest };
    }
    _index(node, parent, newNodes, allNodes) {
        if (node.component) {
            allNodes.add(node.component.instance);
            this._isComponent.set(node.component.instance, true);
            this._indexNode(node.component.instance, node.position, newNodes);
        }
        (node.directives || []).forEach((dir) => {
            allNodes.add(dir.instance);
            this._isComponent.set(dir.instance, false);
            this._indexNode(dir.instance, node.position, newNodes);
        });
        node.children.forEach((child) => this._index(child, parent, newNodes, allNodes));
    }
    _indexNode(directive, position, newNodes) {
        this._currentDirectivePosition.set(directive, position);
        if (!this._currentDirectiveId.has(directive)) {
            newNodes.push({ directive, isComponent: !!this._isComponent.get(directive) });
            this._currentDirectiveId.set(directive, this._directiveIdCounter++);
        }
    }
    destroy() {
        this._currentDirectivePosition = new Map();
        this._currentDirectiveId = new Map();
    }
}
const indexTree = (node, idx, parentPosition = []) => {
    const position = parentPosition.concat([idx]);
    return {
        position,
        element: node.element,
        component: node.component,
        directives: node.directives.map((d) => (Object.assign({ position }, d))),
        children: node.children.map((n, i) => indexTree(n, i, position)),
        nativeElement: node.nativeElement,
    };
};
const indexForest = (forest) => forest.map((n, i) => indexTree(n, i));

const hookNames = [
    'OnInit',
    'OnDestroy',
    'OnChanges',
    'DoCheck',
    'AfterContentInit',
    'AfterContentChecked',
    'AfterViewInit',
    'AfterViewChecked',
];
const hookMethodNames = new Set(hookNames.map((hook) => `ng${hook}`));
const hookTViewProperties = [
    'preOrderHooks',
    'preOrderCheckHooks',
    'contentHooks',
    'contentCheckHooks',
    'viewHooks',
    'viewCheckHooks',
    'destroyHooks',
];
const getLifeCycleName = (obj, fn) => {
    const proto = Object.getPrototypeOf(obj);
    const keys = Object.getOwnPropertyNames(proto);
    for (const propName of keys) {
        // We don't want to touch random get accessors.
        if (!hookMethodNames.has(propName)) {
            continue;
        }
        if (proto[propName] === fn) {
            return propName;
        }
    }
    const fnName = fn.name;
    if (typeof fnName !== 'string') {
        return 'unknown';
    }
    for (const hookName of hookNames) {
        if (fnName.indexOf(hookName) >= 0) {
            return `ng${hookName}`;
        }
    }
    return 'unknown';
};
/**
 * This is a temporal "polyfill" until we receive
 * more comprehensive framework debugging APIs.
 */
class DirectiveForestHooks {
    constructor(config) {
        this._patched = new Map();
        this._undoLifecyclePatch = [];
        this._lastChangeDetection = new Map();
        this._tracker = new IdentityTracker();
        this._forest = [];
        this._indexedForest = [];
        this._inChangeDetection = false;
        this._changeDetection$ = new Subject();
        this._hooks = [];
        this._hooks.push(config);
    }
    get changeDetection$() {
        return this._changeDetection$;
    }
    getDirectivePosition(dir) {
        const result = this._tracker.getDirectivePosition(dir);
        if (result === undefined) {
            console.warn('Unable to find position of', dir);
        }
        return result;
    }
    getDirectiveId(dir) {
        const result = this._tracker.getDirectiveId(dir);
        if (result === undefined) {
            console.warn('Unable to find ID of', result);
        }
        return result;
    }
    getIndexedDirectiveForest() {
        return this._indexedForest;
    }
    getDirectiveForest() {
        return this._forest;
    }
    initialize() {
        this.indexForest();
    }
    destroy() {
        this._lastChangeDetection = new Map();
        this._tracker.destroy();
        for (const [cmp, template] of this._patched) {
            const meta = componentMetadata(cmp);
            meta.template = template;
            meta.tView.template = template;
        }
        this._patched = new Map();
        this._undoLifecyclePatch.forEach((p) => p());
        this._undoLifecyclePatch = [];
    }
    indexForest() {
        const { newNodes, removedNodes, indexedForest, directiveForest } = this._tracker.index();
        this._indexedForest = indexedForest;
        this._forest = directiveForest;
        newNodes.forEach((node) => {
            this._observeLifecycle(node.directive, node.isComponent);
            this._observeComponent(node.directive);
            this._fireCreationCallback(node.directive, node.isComponent);
        });
        removedNodes.forEach((node) => {
            this._patched.delete(node.directive);
            this._fireDestroyCallback(node.directive, node.isComponent);
        });
    }
    subscribe(config) {
        this._hooks.push(config);
    }
    unsubscribe(config) {
        this._hooks.splice(this._hooks.indexOf(config), 1);
    }
    _fireCreationCallback(component, isComponent) {
        const position = this._tracker.getDirectivePosition(component);
        const id = this._tracker.getDirectiveId(component);
        this._onCreate(component, getDirectiveHostElement(component), id, isComponent, position);
    }
    _fireDestroyCallback(component, isComponent) {
        const position = this._tracker.getDirectivePosition(component);
        const id = this._tracker.getDirectiveId(component);
        this._onDestroy(component, getDirectiveHostElement(component), id, isComponent, position);
    }
    _observeComponent(cmp) {
        const declarations = componentMetadata(cmp);
        if (!declarations) {
            return;
        }
        const original = declarations.template;
        const self = this;
        if (original.patched) {
            return;
        }
        declarations.tView.template = function (_, component) {
            if (!self._inChangeDetection) {
                self._inChangeDetection = true;
                runOutsideAngular(() => {
                    Promise.resolve().then(() => {
                        self._changeDetection$.next();
                        self._inChangeDetection = false;
                    });
                });
            }
            const position = self._tracker.getDirectivePosition(component);
            const start = performance.now();
            const id = self._tracker.getDirectiveId(component);
            self._onChangeDetectionStart(component, getDirectiveHostElement(component), id, position);
            original.apply(this, arguments);
            if (self._tracker.hasDirective(component) && id !== undefined && position !== undefined) {
                self._onChangeDetectionEnd(component, getDirectiveHostElement(component), id, position);
            }
            else {
                self._lastChangeDetection.set(component, performance.now() - start);
            }
        };
        declarations.tView.template.patched = true;
        this._patched.set(cmp, original);
    }
    _observeLifecycle(directive, isComponent) {
        const ctx = getLViewFromDirectiveOrElementInstance(directive);
        if (!ctx) {
            return;
        }
        const tview = ctx[1];
        hookTViewProperties.forEach((hook) => {
            const current = tview[hook];
            if (!Array.isArray(current)) {
                return;
            }
            current.forEach((el, idx) => {
                if (el.patched) {
                    return;
                }
                if (typeof el === 'function') {
                    const self = this;
                    current[idx] = function () {
                        // We currently don't want to notify the consumer
                        // for execution of lifecycle hooks of services and pipes.
                        // These two abstractions don't have `__ngContext__`, and
                        // currently we won't be able to extract the required
                        // metadata by the UI.
                        if (!this[METADATA_PROPERTY_NAME]) {
                            return;
                        }
                        const id = self._tracker.getDirectiveId(this);
                        const lifecycleHookName = getLifeCycleName(this, el);
                        const element = getDirectiveHostElement(this);
                        self._onLifecycleHookStart(this, lifecycleHookName, element, id, isComponent);
                        const result = el.apply(this, arguments);
                        self._onLifecycleHookEnd(this, lifecycleHookName, element, id, isComponent);
                        return result;
                    };
                    current[idx].patched = true;
                    this._undoLifecyclePatch.push(() => {
                        current[idx] = el;
                    });
                }
            });
        });
    }
    _onCreate(_, __, id, ___, position) {
        if (id === undefined || position === undefined) {
            return;
        }
        this._invokeCallback('onCreate', arguments);
    }
    _onDestroy(_, __, id, ___, position) {
        if (id === undefined || position === undefined) {
            return;
        }
        this._invokeCallback('onDestroy', arguments);
    }
    _onChangeDetectionStart(_, __, id, position) {
        if (id === undefined || position === undefined) {
            return;
        }
        this._invokeCallback('onChangeDetectionStart', arguments);
    }
    _onChangeDetectionEnd(_, __, id, position) {
        if (id === undefined || position === undefined) {
            return;
        }
        this._invokeCallback('onChangeDetectionEnd', arguments);
    }
    _onLifecycleHookStart(_, __, ___, id, ____) {
        if (id === undefined) {
            return;
        }
        this._invokeCallback('onLifecycleHookStart', arguments);
    }
    _onLifecycleHookEnd(_, __, ___, id, ____) {
        if (id === undefined) {
            return;
        }
        this._invokeCallback('onLifecycleHookEnd', arguments);
    }
    _invokeCallback(name, args) {
        this._hooks.forEach((config) => {
            const cb = config[name];
            if (cb) {
                cb.apply(null, args);
            }
        });
    }
}

const markName = (s, method) => `🅰️ ${s}#${method}`;
const supportsPerformance = globalThis.performance && typeof globalThis.performance.getEntriesByName === 'function';
const recordMark = (s, method) => {
    if (supportsPerformance) {
        performance.mark(`${markName(s, method)}_start`);
    }
};
const endMark = (nodeName, method) => {
    if (supportsPerformance) {
        const name = markName(nodeName, method);
        const start = `${name}_start`;
        const end = `${name}_end`;
        if (performance.getEntriesByName(start).length > 0) {
            performance.mark(end);
            performance.measure(name, start, end);
        }
        performance.clearMarks(start);
        performance.clearMarks(end);
        performance.clearMeasures(name);
    }
};
let timingAPIFlag = false;
const enableTimingAPI = () => (timingAPIFlag = true);
const disableTimingAPI = () => (timingAPIFlag = false);
const timingAPIEnabled = () => timingAPIFlag;
let directiveForestHooks;
const initializeOrGetDirectiveForestHooks = () => {
    if (directiveForestHooks) {
        return directiveForestHooks;
    }
    directiveForestHooks = new DirectiveForestHooks({
        onChangeDetectionStart(component) {
            if (!timingAPIEnabled()) {
                return;
            }
            recordMark(getDirectiveName(component), 'changeDetection');
        },
        onChangeDetectionEnd(component) {
            if (!timingAPIEnabled()) {
                return;
            }
            endMark(getDirectiveName(component), 'changeDetection');
        },
        onLifecycleHookStart(component, lifecyle) {
            if (!timingAPIEnabled()) {
                return;
            }
            recordMark(getDirectiveName(component), lifecyle);
        },
        onLifecycleHookEnd(component, lifecyle) {
            if (!timingAPIEnabled()) {
                return;
            }
            endMark(getDirectiveName(component), lifecyle);
        },
    });
    directiveForestHooks.initialize();
    return directiveForestHooks;
};

let inProgress = false;
let inChangeDetection = false;
let eventMap;
let frameDuration = 0;
let hooks = {};
const start = (onFrame) => {
    if (inProgress) {
        throw new Error('Recording already in progress');
    }
    eventMap = new Map();
    inProgress = true;
    hooks = getHooks(onFrame);
    initializeOrGetDirectiveForestHooks().subscribe(hooks);
};
const stop = () => {
    const directiveForestHooks = initializeOrGetDirectiveForestHooks();
    const result = flushBuffer(directiveForestHooks);
    initializeOrGetDirectiveForestHooks().unsubscribe(hooks);
    hooks = {};
    inProgress = false;
    return result;
};
const startEvent = (map, directive, label) => {
    const name = getDirectiveName(directive);
    const key = `${name}#${label}`;
    map[key] = performance.now();
};
const getEventStart = (map, directive, label) => {
    const name = getDirectiveName(directive);
    const key = `${name}#${label}`;
    return map[key];
};
const getHooks = (onFrame) => {
    const timeStartMap = {};
    return {
        // We flush here because it's possible the current node to overwrite
        // an existing removed node.
        onCreate(directive, node, _, isComponent, position) {
            eventMap.set(directive, {
                isElement: isCustomElement(node),
                name: getDirectiveName(directive),
                isComponent,
                lifecycle: {},
            });
        },
        onChangeDetectionStart(component, node) {
            startEvent(timeStartMap, component, 'changeDetection');
            if (!inChangeDetection) {
                inChangeDetection = true;
                const source = getChangeDetectionSource();
                runOutsideAngular(() => {
                    Promise.resolve().then(() => {
                        inChangeDetection = false;
                        onFrame(flushBuffer(initializeOrGetDirectiveForestHooks(), source));
                    });
                });
            }
            if (!eventMap.has(component)) {
                eventMap.set(component, {
                    isElement: isCustomElement(node),
                    name: getDirectiveName(component),
                    isComponent: true,
                    changeDetection: 0,
                    lifecycle: {},
                });
            }
        },
        onChangeDetectionEnd(component) {
            const profile = eventMap.get(component);
            if (profile) {
                let current = profile.changeDetection;
                if (current === undefined) {
                    current = 0;
                }
                const startTimestamp = getEventStart(timeStartMap, component, 'changeDetection');
                if (startTimestamp === undefined) {
                    return;
                }
                const duration = performance.now() - startTimestamp;
                profile.changeDetection = current + duration;
                frameDuration += duration;
            }
            else {
                console.warn('Could not find profile for', component);
            }
        },
        onDestroy(directive, node, _, isComponent, __) {
            // Make sure we reflect such directives in the report.
            if (!eventMap.has(directive)) {
                eventMap.set(directive, {
                    isElement: isComponent && isCustomElement(node),
                    name: getDirectiveName(directive),
                    isComponent,
                    lifecycle: {},
                });
            }
        },
        onLifecycleHookStart(directive, hookName, node, __, isComponent) {
            startEvent(timeStartMap, directive, hookName);
            if (!eventMap.has(directive)) {
                eventMap.set(directive, {
                    isElement: isCustomElement(node),
                    name: getDirectiveName(directive),
                    isComponent,
                    lifecycle: {},
                });
            }
        },
        onLifecycleHookEnd(directive, hookName, _, __, ___) {
            const dir = eventMap.get(directive);
            const startTimestamp = getEventStart(timeStartMap, directive, hookName);
            if (startTimestamp === undefined) {
                return;
            }
            if (!dir) {
                console.warn('Could not find directive in onLifecycleHook callback', directive, hookName);
                return;
            }
            const duration = performance.now() - startTimestamp;
            dir.lifecycle[hookName] = (dir.lifecycle[hookName] || 0) + duration;
            frameDuration += duration;
        },
    };
};
const insertOrMerge = (lastFrame, profile) => {
    let exists = false;
    lastFrame.directives.forEach((d) => {
        var _a;
        if (d.name === profile.name) {
            exists = true;
            let current = d.changeDetection;
            if (current === undefined) {
                current = 0;
            }
            d.changeDetection = current + ((_a = profile.changeDetection) !== null && _a !== void 0 ? _a : 0);
            for (const key of Object.keys(profile.lifecycle)) {
                if (!d.lifecycle[key]) {
                    d.lifecycle[key] = 0;
                }
                d.lifecycle[key] += profile.lifecycle[key];
            }
        }
    });
    if (!exists) {
        lastFrame.directives.push(profile);
    }
};
const insertElementProfile = (frames, position, profile) => {
    if (!profile) {
        return;
    }
    const original = frames;
    for (let i = 0; i < position.length - 1; i++) {
        const pos = position[i];
        if (!frames[pos]) {
            // TODO(mgechev): consider how to ensure we don't hit this case
            console.warn('Unable to find parent node for', profile, original);
            return;
        }
        frames = frames[pos].children;
    }
    const lastIdx = position[position.length - 1];
    let lastFrame = {
        children: [],
        directives: [],
    };
    if (frames[lastIdx]) {
        lastFrame = frames[lastIdx];
    }
    else {
        frames[lastIdx] = lastFrame;
    }
    insertOrMerge(lastFrame, profile);
};
const prepareInitialFrame = (source, duration) => {
    const frame = {
        source,
        duration,
        directives: [],
    };
    const directiveForestHooks = initializeOrGetDirectiveForestHooks();
    const directiveForest = directiveForestHooks.getIndexedDirectiveForest();
    const traverse = (node, children = frame.directives) => {
        let position;
        if (node.component) {
            position = directiveForestHooks.getDirectivePosition(node.component.instance);
        }
        else {
            position = directiveForestHooks.getDirectivePosition(node.directives[0].instance);
        }
        if (position === undefined) {
            return;
        }
        const directives = node.directives.map((d) => {
            return {
                isComponent: false,
                isElement: false,
                name: getDirectiveName(d.instance),
                lifecycle: {},
            };
        });
        if (node.component) {
            directives.push({
                isElement: node.component.isElement,
                isComponent: true,
                lifecycle: {},
                name: getDirectiveName(node.component.instance),
            });
        }
        const result = {
            children: [],
            directives,
        };
        children[position[position.length - 1]] = result;
        node.children.forEach((n) => traverse(n, result.children));
    };
    directiveForest.forEach((n) => traverse(n));
    return frame;
};
const flushBuffer = (directiveForestHooks, source = '') => {
    const items = Array.from(eventMap.keys());
    const positions = [];
    const positionDirective = new Map();
    items.forEach((dir) => {
        const position = directiveForestHooks.getDirectivePosition(dir);
        if (position === undefined) {
            return;
        }
        positions.push(position);
        positionDirective.set(position, dir);
    });
    positions.sort(lexicographicOrder);
    const result = prepareInitialFrame(source, frameDuration);
    frameDuration = 0;
    positions.forEach((position) => {
        const dir = positionDirective.get(position);
        insertElementProfile(result.directives, position, eventMap.get(dir));
    });
    eventMap = new Map();
    return result;
};
const getChangeDetectionSource = () => {
    const zone = window.Zone;
    if (!zone || !zone.currentTask) {
        return '';
    }
    return zone.currentTask.source;
};
const lexicographicOrder = (a, b) => {
    if (a.length < b.length) {
        return -1;
    }
    if (a.length > b.length) {
        return 1;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            return -1;
        }
        if (a[i] > b[i]) {
            return 1;
        }
    }
    return 0;
};

class ComponentInspector {
    constructor(componentOptions = {
        onComponentEnter: () => { },
        onComponentLeave: () => { },
        onComponentSelect: () => { },
    }) {
        this.bindMethods();
        this._onComponentEnter = componentOptions.onComponentEnter;
        this._onComponentSelect = componentOptions.onComponentSelect;
        this._onComponentLeave = componentOptions.onComponentLeave;
    }
    startInspecting() {
        window.addEventListener('mouseover', this.elementMouseOver, true);
        window.addEventListener('click', this.elementClick, true);
        window.addEventListener('mouseout', this.cancelEvent, true);
    }
    stopInspecting() {
        window.removeEventListener('mouseover', this.elementMouseOver, true);
        window.removeEventListener('click', this.elementClick, true);
        window.removeEventListener('mouseout', this.cancelEvent, true);
    }
    elementClick(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if (this._selectedComponent.component && this._selectedComponent.host) {
            this._onComponentSelect(initializeOrGetDirectiveForestHooks().getDirectiveId(this._selectedComponent.component));
        }
    }
    elementMouseOver(e) {
        this.cancelEvent(e);
        const el = e.target;
        if (el) {
            this._selectedComponent = findComponentAndHost(el);
        }
        unHighlight();
        if (this._selectedComponent.component && this._selectedComponent.host) {
            highlight(this._selectedComponent.host);
            this._onComponentEnter(initializeOrGetDirectiveForestHooks().getDirectiveId(this._selectedComponent.component));
        }
    }
    cancelEvent(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        this._onComponentLeave();
    }
    bindMethods() {
        this.startInspecting = this.startInspecting.bind(this);
        this.stopInspecting = this.stopInspecting.bind(this);
        this.elementMouseOver = this.elementMouseOver.bind(this);
        this.elementClick = this.elementClick.bind(this);
        this.cancelEvent = this.cancelEvent.bind(this);
    }
    highlightByPosition(position) {
        const forest = initializeOrGetDirectiveForestHooks().getDirectiveForest();
        const elementToHighlight = findNodeInForest(position, forest);
        if (elementToHighlight) {
            highlight(elementToHighlight);
        }
    }
}

const CONSOLE_REFERENCE_PREFIX = '$ng';
const CAPACITY = 5;
const nodesForConsoleReference = [];
const setConsoleReference = (referenceNode) => {
    if (referenceNode.node === null) {
        return;
    }
    _setConsoleReference(referenceNode);
};
const _setConsoleReference = (referenceNode) => {
    prepareCurrentReferencesForInsertion(referenceNode);
    nodesForConsoleReference.unshift(referenceNode);
    assignConsoleReferencesFrom(nodesForConsoleReference);
};
const prepareCurrentReferencesForInsertion = (referenceNode) => {
    const foundIndex = nodesForConsoleReference.findIndex((nodeToLookFor) => arrayEquals(nodeToLookFor.position, referenceNode.position));
    if (foundIndex !== -1) {
        nodesForConsoleReference.splice(foundIndex, 1);
    }
    else if (nodesForConsoleReference.length === CAPACITY) {
        nodesForConsoleReference.pop();
    }
};
const assignConsoleReferencesFrom = (referenceNodes) => {
    referenceNodes.forEach((referenceNode, index) => setDirectiveKey(referenceNode.node, getConsoleReferenceWithIndexOf(index)));
};
const setDirectiveKey = (node, key) => {
    Object.defineProperty(window, key, {
        get: () => {
            if (node === null || node === void 0 ? void 0 : node.component) {
                return node.component.instance;
            }
            if (node === null || node === void 0 ? void 0 : node.nativeElement) {
                return node.nativeElement;
            }
            return node;
        },
        configurable: true,
    });
};
const getConsoleReferenceWithIndexOf = (consoleReferenceIndex) => `${CONSOLE_REFERENCE_PREFIX}${consoleReferenceIndex}`;

const appIsAngularInDevMode = () => {
    return appIsAngular() && appHasGlobalNgDebugObject();
};
const appIsAngularIvy = () => {
    var _a, _b, _c, _d;
    return !!((_d = (_c = (_b = (_a = window).getAllAngularRootElements) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.__ngContext__);
};
const appIsAngular = () => {
    return !!getAngularVersion();
};
const appIsSupportedAngularVersion = () => {
    const version = getAngularVersion();
    if (!version) {
        return false;
    }
    const major = parseInt(version.toString().split('.')[0], 10);
    return appIsAngular() && (major >= 9 || major === 0);
};
const appHasGlobalNgDebugObject = () => {
    return typeof ng !== 'undefined';
};
const getAngularVersion = () => {
    const el = document.querySelector('[ng-version]');
    if (!el) {
        return null;
    }
    return el.getAttribute('ng-version');
};

const subscribeToClientEvents = (messageBus) => {
    messageBus.on('shutdown', shutdownCallback(messageBus));
    messageBus.on('getLatestComponentExplorerView', getLatestComponentExplorerViewCallback(messageBus));
    messageBus.on('queryNgAvailability', checkForAngularCallback(messageBus));
    messageBus.on('startProfiling', startProfilingCallback(messageBus));
    messageBus.on('stopProfiling', stopProfilingCallback(messageBus));
    messageBus.on('setSelectedComponent', selectedComponentCallback);
    messageBus.on('getNestedProperties', getNestedPropertiesCallback(messageBus));
    messageBus.on('getRoutes', getRoutesCallback(messageBus));
    messageBus.on('updateState', updateState);
    messageBus.on('enableTimingAPI', enableTimingAPI);
    messageBus.on('disableTimingAPI', disableTimingAPI);
    if (appIsAngularInDevMode() && appIsSupportedAngularVersion() && appIsAngularIvy()) {
        setupInspector(messageBus);
        // Often websites have `scroll` event listener which triggers
        // Angular's change detection. We don't want to constantly send
        // update requests, instead we want to request an update at most
        // every 250ms
        runOutsideAngular(() => {
            initializeOrGetDirectiveForestHooks()
                .changeDetection$.pipe(debounceTime(250))
                .subscribe(() => messageBus.emit('componentTreeDirty'));
        });
    }
};
//
// Callback Definitions
//
const shutdownCallback = (messageBus) => () => {
    messageBus.destroy();
};
const getLatestComponentExplorerViewCallback = (messageBus) => (query) => {
    // We want to force re-indexing of the component tree.
    // Pressing the refresh button means the user saw stuck UI.
    initializeOrGetDirectiveForestHooks().indexForest();
    if (!query) {
        messageBus.emit('latestComponentExplorerView', [
            {
                forest: prepareForestForSerialization(initializeOrGetDirectiveForestHooks().getIndexedDirectiveForest()),
            },
        ]);
        return;
    }
    messageBus.emit('latestComponentExplorerView', [
        {
            forest: prepareForestForSerialization(initializeOrGetDirectiveForestHooks().getIndexedDirectiveForest()),
            properties: getLatestComponentState(query, initializeOrGetDirectiveForestHooks().getDirectiveForest()),
        },
    ]);
};
const checkForAngularCallback = (messageBus) => () => checkForAngular(messageBus);
const getRoutesCallback = (messageBus) => () => getRoutes(messageBus);
const startProfilingCallback = (messageBus) => () => start((frame) => {
    messageBus.emit('sendProfilerChunk', [frame]);
});
const stopProfilingCallback = (messageBus) => () => {
    messageBus.emit('profilerResults', [stop()]);
};
const selectedComponentCallback = (position) => {
    const node = queryDirectiveForest(position, initializeOrGetDirectiveForestHooks().getIndexedDirectiveForest());
    setConsoleReference({ node, position });
};
const getNestedPropertiesCallback = (messageBus) => (position, propPath) => {
    const emitEmpty = () => messageBus.emit('nestedProperties', [position, { props: {} }, propPath]);
    const node = queryDirectiveForest(position.element, initializeOrGetDirectiveForestHooks().getIndexedDirectiveForest());
    if (!node) {
        return emitEmpty();
    }
    const current = position.directive === undefined ? node.component : node.directives[position.directive];
    if (!current) {
        return emitEmpty();
    }
    let data = current.instance;
    for (const prop of propPath) {
        data = data[prop];
        if (!data) {
            console.error('Cannot access the properties', propPath, 'of', node);
        }
    }
    messageBus.emit('nestedProperties', [position, { props: serializeDirectiveState(data) }, propPath]);
};
//
// Subscribe Helpers
//
const getRoutes = (messageBus) => {
    var _a, _b;
    const node = queryDirectiveForest([0], initializeOrGetDirectiveForestHooks().getIndexedDirectiveForest());
    let routes = [];
    if ((_a = node === null || node === void 0 ? void 0 : node.component) === null || _a === void 0 ? void 0 : _a.instance.router) {
        routes = [parseRoutes((_b = node === null || node === void 0 ? void 0 : node.component) === null || _b === void 0 ? void 0 : _b.instance.router)];
    }
    messageBus.emit('updateRouterTree', [routes]);
};
const checkForAngular = (messageBus) => {
    const ngVersion = getAngularVersion();
    const appIsIvy = appIsAngularIvy();
    if (!ngVersion) {
        setTimeout(() => checkForAngular(messageBus), 500);
        return;
    }
    if (appIsIvy) {
        initializeOrGetDirectiveForestHooks();
    }
    messageBus.emit('ngAvailability', [
        { version: ngVersion.toString(), devMode: appIsAngularInDevMode(), ivy: appIsIvy },
    ]);
};
const setupInspector = (messageBus) => {
    const inspector = new ComponentInspector({
        onComponentEnter: (id) => {
            messageBus.emit('highlightComponent', [id]);
        },
        onComponentLeave: () => {
            messageBus.emit('removeComponentHighlight');
        },
        onComponentSelect: (id) => {
            messageBus.emit('selectComponent', [id]);
        },
    });
    messageBus.on('inspectorStart', inspector.startInspecting);
    messageBus.on('inspectorEnd', inspector.stopInspecting);
    messageBus.on('createHighlightOverlay', (position) => {
        inspector.highlightByPosition(position);
    });
    messageBus.on('removeHighlightOverlay', unHighlight);
};
// Here we drop properties to prepare the tree for serialization.
// We don't need the component instance, so we just traverse the tree
// and leave the component name.
const prepareForestForSerialization = (roots) => {
    return roots.map((node) => {
        return {
            element: node.element,
            component: node.component
                ? {
                    name: node.component.name,
                    isElement: node.component.isElement,
                    id: initializeOrGetDirectiveForestHooks().getDirectiveId(node.component.instance),
                }
                : null,
            directives: node.directives.map((d) => ({
                name: d.name,
                id: initializeOrGetDirectiveForestHooks().getDirectiveId(d.instance),
            })),
            children: prepareForestForSerialization(node.children),
        };
    });
};

const initializeMessageBus = (messageBus) => {
    subscribeToClientEvents(messageBus);
};

/*
 * Public API Surface of ng-devtools-backend
 */

/**
 * Generated bundle index. Do not edit.
 */

export { findNodeFromSerializedPosition, initializeMessageBus };
//# sourceMappingURL=ng-devtools-backend.js.map
