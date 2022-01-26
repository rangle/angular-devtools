(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('protocol'), require('semver-dsl'), require('rxjs'), require('shared-utils'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-devtools-backend', ['exports', 'protocol', 'semver-dsl', 'rxjs', 'shared-utils', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-devtools-backend'] = {}, global.protocol, global.semverDsl, global.rxjs, global.sharedUtils, global.rxjs.operators));
}(this, (function (exports, protocol, semverDsl, rxjs, sharedUtils, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var runOutsideAngular = function (f) {
        var w = window;
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
    var componentMetadata = function (instance) { return instance.constructor.ɵcmp; };
    var isCustomElement = function (node) {
        if (typeof customElements === 'undefined') {
            return false;
        }
        if (!(node instanceof HTMLElement)) {
            return false;
        }
        var tagName = node.tagName.toLowerCase();
        return !!customElements.get(tagName);
    };

    var overlay;
    var overlayContent;
    var DEV_TOOLS_HIGHLIGHT_NODE_ID = '____ngDevToolsHighlight';
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
    var findComponentAndHost = function (el) {
        if (!el) {
            return { component: null, host: null };
        }
        while (el) {
            var component = el instanceof HTMLElement && ng.getComponent(el);
            if (component) {
                return { component: component, host: el };
            }
            if (!el.parentElement) {
                break;
            }
            el = el.parentElement;
        }
        return { component: null, host: null };
    };
    // Todo(aleksanderbodurri): this should not be part of the highlighter, move this somewhere else
    var getDirectiveName = function (dir) {
        if (dir) {
            return dir.constructor.name;
        }
        return 'unknown';
    };
    var highlight = function (el) {
        var cmp = findComponentAndHost(el).component;
        var rect = getComponentRect(el);
        init();
        if (rect) {
            var content = [];
            var name = getDirectiveName(cmp);
            if (name) {
                var pre = document.createElement('span');
                pre.style.opacity = '0.6';
                pre.innerText = '<';
                var text = document.createTextNode(name);
                var post = document.createElement('span');
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
        var doc = node.ownerDocument.documentElement;
        var parent = node.parentNode;
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
    function showOverlay(_a, content) {
        var _b = _a.width, width = _b === void 0 ? 0 : _b, _c = _a.height, height = _c === void 0 ? 0 : _c, _d = _a.top, top = _d === void 0 ? 0 : _d, _e = _a.left, left = _e === void 0 ? 0 : _e;
        if (content === void 0) { content = []; }
        overlay.style.width = ~~width + 'px';
        overlay.style.height = ~~height + 'px';
        overlay.style.top = ~~top + 'px';
        overlay.style.left = ~~left + 'px';
        overlayContent.innerHTML = '';
        content.forEach(function (child) { return overlayContent.appendChild(child); });
        document.body.appendChild(overlay);
    }

    var _a$1, _b$1, _c$1;
    var versionElement = document.querySelector('[ng-version]');
    var versionRe = /(\d+\.\d+\.\d+(-(next|rc)\.\d+)?)/;
    var defaultVersion = '0.0.0';
    var version = defaultVersion;
    if (versionElement) {
        version = (_a$1 = versionElement.getAttribute('ng-version')) !== null && _a$1 !== void 0 ? _a$1 : defaultVersion;
        version = (_c$1 = ((_b$1 = version.match(versionRe)) !== null && _b$1 !== void 0 ? _b$1 : [''])[0]) !== null && _c$1 !== void 0 ? _c$1 : defaultVersion;
    }
    var VERSION = version;

    var HEADER_OFFSET = 19;
    var latest = function () {
        HEADER_OFFSET = 20;
    };
    semverDsl.SemVerDSL(VERSION).gte('10.0.0-next.4', latest);
    // In g3 everyone has version 0.0.0, using HEAD from master.
    semverDsl.SemVerDSL(VERSION).eq('0.0.0', latest);
    var TYPE = 1;
    var ELEMENT = 0;
    var LVIEW_TVIEW = 1;
    var METADATA_PROPERTY_NAME = '__ngContext__';
    var isLContainer = function (value) {
        return Array.isArray(value) && value[TYPE] === true;
    };
    var isLView = function (value) {
        return Array.isArray(value) && typeof value[TYPE] === 'object';
    };
    var getLViewFromDirectiveOrElementInstance = function (dir) {
        if (!dir) {
            return null;
        }
        var context = dir[METADATA_PROPERTY_NAME];
        if (!context) {
            return null;
        }
        if (isLView(context)) {
            return context;
        }
        return context.lView;
    };
    var getDirectiveHostElement = function (dir) {
        var ctx = dir[METADATA_PROPERTY_NAME];
        if (ctx[0] !== null) {
            return ctx[0];
        }
        var components = ctx[LVIEW_TVIEW].components;
        if (!components || components.length !== 1) {
            return false;
        }
        return ctx[components[0]][0];
    };
    var getNode = function (lView, data, idx) {
        var directives = [];
        var component = null;
        var tNode = data[idx];
        var node = lView[idx][ELEMENT];
        var elementName = (node.tagName || node.nodeName).toLowerCase();
        for (var i = tNode.directiveStart; i < tNode.directiveEnd; i++) {
            var dir = lView[i];
            var dirMeta = data[i];
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
            directives: directives,
            component: component,
            children: [],
        };
    };
    var extractNodes = function (lViewOrLContainer, nodes) {
        if (nodes === void 0) { nodes = []; }
        if (isLContainer(lViewOrLContainer)) {
            for (var i = 9; i < lViewOrLContainer.length; i++) {
                if (lViewOrLContainer[i]) {
                    extractNodes(lViewOrLContainer[i], nodes);
                }
            }
            return nodes;
        }
        var lView = lViewOrLContainer;
        var tView = lView[LVIEW_TVIEW];
        for (var i = HEADER_OFFSET; i < lView.length; i++) {
            if (lView[i] && tView.data && lView[i][ELEMENT] instanceof Node) {
                var node = getNode(lView, tView.data, i);
                // TODO(mgechev): verify if this won't make us skip projected content.
                if (node.component || node.directives.length) {
                    nodes.push(node);
                    extractNodes(lView[i], node.children);
                }
            }
        }
        return nodes;
    };
    var buildDirectiveTree = function (lView) { return extractNodes(lView); };

    var _a, _b, _c;
    var serializable = (_a = {},
        _a[protocol.PropType.Boolean] = true,
        _a[protocol.PropType.String] = true,
        _a[protocol.PropType.Null] = true,
        _a[protocol.PropType.Number] = true,
        _a[protocol.PropType.Object] = true,
        _a[protocol.PropType.Undefined] = true,
        _a[protocol.PropType.Unknown] = true,
        _a[protocol.PropType.Array] = false,
        _a[protocol.PropType.BigInt] = false,
        _a[protocol.PropType.Function] = false,
        _a[protocol.PropType.HTMLNode] = false,
        _a[protocol.PropType.Symbol] = false,
        _a[protocol.PropType.Date] = false,
        _a);
    var typeToDescriptorPreview = (_b = {},
        _b[protocol.PropType.Array] = function (prop) { return "Array(" + prop.length + ")"; },
        _b[protocol.PropType.BigInt] = function (prop) { return truncate(prop.toString()); },
        _b[protocol.PropType.Boolean] = function (prop) { return truncate(prop.toString()); },
        _b[protocol.PropType.String] = function (prop) { return "\"" + prop + "\""; },
        _b[protocol.PropType.Function] = function (prop) { return prop.name + "(...)"; },
        _b[protocol.PropType.HTMLNode] = function (prop) { return prop.constructor.name; },
        _b[protocol.PropType.Null] = function (_) { return 'null'; },
        _b[protocol.PropType.Number] = function (prop) { return parseInt(prop, 10).toString(); },
        _b[protocol.PropType.Object] = function (prop) { return (Object.keys(prop).length > 0 ? '{...}' : '{}'); },
        _b[protocol.PropType.Symbol] = function (_) { return 'Symbol()'; },
        _b[protocol.PropType.Undefined] = function (_) { return 'undefined'; },
        _b[protocol.PropType.Date] = function (_) { return 'Date()'; },
        _b[protocol.PropType.Unknown] = function (_) { return 'unknown'; },
        _b);
    var ignoreList$1 = new Set([METADATA_PROPERTY_NAME, '__ngSimpleChanges__']);
    var shallowPropTypeToTreeMetaData = (_c = {},
        _c[protocol.PropType.String] = {
            editable: true,
            expandable: false,
        },
        _c[protocol.PropType.BigInt] = {
            editable: false,
            expandable: false,
        },
        _c[protocol.PropType.Boolean] = {
            editable: true,
            expandable: false,
        },
        _c[protocol.PropType.Number] = {
            editable: true,
            expandable: false,
        },
        _c[protocol.PropType.Date] = {
            editable: true,
            expandable: false,
        },
        _c[protocol.PropType.Null] = {
            editable: true,
            expandable: false,
        },
        _c[protocol.PropType.Undefined] = {
            editable: true,
            expandable: false,
        },
        _c[protocol.PropType.Symbol] = {
            editable: false,
            expandable: false,
        },
        _c[protocol.PropType.Function] = {
            editable: false,
            expandable: false,
        },
        _c[protocol.PropType.HTMLNode] = {
            editable: false,
            expandable: false,
        },
        _c[protocol.PropType.Unknown] = {
            editable: false,
            expandable: false,
        },
        _c);
    var createShallowSerializedDescriptor = function (propData) {
        var type = propData.type;
        var shallowSerializedDescriptor = {
            type: type,
            expandable: shallowPropTypeToTreeMetaData[type].expandable,
            editable: shallowPropTypeToTreeMetaData[type].editable,
            preview: typeToDescriptorPreview[propData.type](propData.prop),
        };
        if (propData.prop !== undefined && serializable[type]) {
            shallowSerializedDescriptor.value = propData.prop;
        }
        return shallowSerializedDescriptor;
    };
    var createLevelSerializedDescriptor = function (propData, levelOptions, continuation) {
        var type = propData.type, prop = propData.prop;
        var levelSerializedDescriptor = {
            type: type,
            editable: false,
            expandable: Object.keys(prop).length > 0,
            preview: typeToDescriptorPreview[propData.type](propData.prop),
        };
        if (levelOptions.level !== undefined && levelOptions.currentLevel < levelOptions.level) {
            var value = getLevelDescriptorValue(propData, levelOptions, continuation);
            if (value !== undefined) {
                levelSerializedDescriptor.value = value;
            }
        }
        return levelSerializedDescriptor;
    };
    var createNestedSerializedDescriptor = function (propData, levelOptions, nodes, nestedSerializer) {
        var type = propData.type, prop = propData.prop;
        var nestedSerializedDescriptor = {
            type: type,
            editable: false,
            expandable: Object.keys(prop).length > 0,
            preview: typeToDescriptorPreview[propData.type](propData.prop),
        };
        if (nodes && nodes.length) {
            var value = getNestedDescriptorValue(propData, levelOptions, nodes, nestedSerializer);
            if (value !== undefined) {
                nestedSerializedDescriptor.value = value;
            }
        }
        return nestedSerializedDescriptor;
    };
    var getNestedDescriptorValue = function (propData, levelOptions, nodes, nestedSerializer) {
        var type = propData.type, prop = propData.prop;
        var currentLevel = levelOptions.currentLevel;
        switch (type) {
            case protocol.PropType.Array:
                return nodes.map(function (nestedProp) { return nestedSerializer(prop[nestedProp.name], nestedProp.children, currentLevel + 1); });
            case protocol.PropType.Object:
                return nodes.reduce(function (accumulator, nestedProp) {
                    if (prop.hasOwnProperty(nestedProp.name) &&
                        typeof nestedProp.name === 'string' &&
                        !ignoreList$1.has(nestedProp.name)) {
                        accumulator[nestedProp.name] = nestedSerializer(prop[nestedProp.name], nestedProp.children, currentLevel + 1);
                    }
                    return accumulator;
                }, {});
        }
    };
    var getLevelDescriptorValue = function (propData, levelOptions, continuation) {
        var type = propData.type, prop = propData.prop;
        var currentLevel = levelOptions.currentLevel, level = levelOptions.level;
        switch (type) {
            case protocol.PropType.Array:
                return prop.map(function (nested, idx) { return continuation(nested, idx, currentLevel + 1, level); });
            case protocol.PropType.Object:
                return Object.keys(prop).reduce(function (accumulator, propName) {
                    if (typeof propName === 'string' && !ignoreList$1.has(propName)) {
                        accumulator[propName] = continuation(prop[propName], propName, currentLevel + 1, level);
                    }
                    return accumulator;
                }, {});
        }
    };
    var truncate = function (str, max) {
        if (max === void 0) { max = 20; }
        if (str.length > max) {
            return str.substr(0, max) + '...';
        }
        return str;
    };

    var ignoreList = new Set([METADATA_PROPERTY_NAME, '__ngSimpleChanges__']);
    var commonTypes = {
        boolean: protocol.PropType.Boolean,
        bigint: protocol.PropType.BigInt,
        function: protocol.PropType.Function,
        number: protocol.PropType.Number,
        string: protocol.PropType.String,
        symbol: protocol.PropType.Symbol,
    };
    var MAX_LEVEL = 1;
    var getPropType = function (prop) {
        if (prop === undefined) {
            return protocol.PropType.Undefined;
        }
        if (prop === null) {
            return protocol.PropType.Null;
        }
        if (prop instanceof HTMLElement) {
            return protocol.PropType.HTMLNode;
        }
        var type = typeof prop;
        if (commonTypes[type] !== undefined) {
            return commonTypes[type];
        }
        if (type === 'object') {
            if (Array.isArray(prop)) {
                return protocol.PropType.Array;
            }
            else if (Object.prototype.toString.call(prop) === '[object Date]') {
                return protocol.PropType.Date;
            }
            else if (prop instanceof Node) {
                return protocol.PropType.HTMLNode;
            }
            else {
                return protocol.PropType.Object;
            }
        }
        return protocol.PropType.Unknown;
    };
    var nestedSerializer = function (serializableInstance, nodes, currentLevel, level) {
        if (currentLevel === void 0) { currentLevel = 0; }
        if (level === void 0) { level = MAX_LEVEL; }
        var propData = { prop: serializableInstance, type: getPropType(serializableInstance) };
        var levelOptions = { level: level, currentLevel: currentLevel };
        if (currentLevel < level) {
            return levelSerializer(serializableInstance, undefined, currentLevel, level, nestedSerializerContinuation(nodes, level));
        }
        switch (propData.type) {
            case protocol.PropType.Array:
            case protocol.PropType.Object:
                return createNestedSerializedDescriptor(propData, levelOptions, nodes, nestedSerializer);
            default:
                return createShallowSerializedDescriptor(propData);
        }
    };
    var nestedSerializerContinuation = function (nodes, level) { return function (nestedProp, propName, nestedLevel) {
        var idx = nodes.findIndex(function (v) { return v.name === propName; });
        if (idx < 0) {
            // The property is not specified in the query.
            return nestedSerializer(nestedProp, [], nestedLevel, level);
        }
        return nestedSerializer(nestedProp, nodes[idx].children, nestedLevel, level);
    }; };
    var levelSerializer = function (serializableInstance, _, currentLevel, level, continuation) {
        if (_ === void 0) { _ = undefined; }
        if (currentLevel === void 0) { currentLevel = 0; }
        if (level === void 0) { level = MAX_LEVEL; }
        if (continuation === void 0) { continuation = levelSerializer; }
        var propData = { prop: serializableInstance, type: getPropType(serializableInstance) };
        var levelOptions = { level: level, currentLevel: currentLevel };
        switch (propData.type) {
            case protocol.PropType.Array:
            case protocol.PropType.Object:
                return createLevelSerializedDescriptor(propData, levelOptions, continuation);
            default:
                return createShallowSerializedDescriptor(propData);
        }
    };
    var serializeDirectiveState = function (instance, levels) {
        if (levels === void 0) { levels = MAX_LEVEL; }
        var result = {};
        for (var prop in instance) {
            if (instance.hasOwnProperty(prop) && !ignoreList.has(prop)) {
                result[prop] = levelSerializer(instance[prop], null, 0, levels);
            }
        }
        return result;
    };
    var deeplySerializeSelectedProperties = function (instance, props) {
        var result = {};
        Object.keys(instance).forEach(function (propName) {
            if (ignoreList.has(propName)) {
                return;
            }
            var idx = props.findIndex(function (v) { return v.name === propName; });
            if (idx < 0) {
                result[propName] = levelSerializer(instance[propName]);
            }
            else {
                result[propName] = nestedSerializer(instance[propName], props[idx].children);
            }
        });
        return result;
    };

    var ngDebug = function () { return window.ng; };
    var getLatestComponentState = function (query, directiveForest) {
        // if a directive forest is passed in we don't have to build the forest again.
        directiveForest = directiveForest !== null && directiveForest !== void 0 ? directiveForest : buildDirectiveForest();
        var node = queryDirectiveForest(query.selectedElement, directiveForest);
        if (!node) {
            return;
        }
        var result = {};
        var populateResultSet = function (dir) {
            if (query.propertyQuery.type === protocol.PropertyQueryTypes.All) {
                result[dir.name] = {
                    props: serializeDirectiveState(dir.instance),
                    metadata: getDirectiveMetadata(dir.instance),
                };
            }
            if (query.propertyQuery.type === protocol.PropertyQueryTypes.Specified) {
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
    var getDirectiveMetadata = function (dir) {
        var safelyGrabMetadata = function (key) {
            try {
                return dir.constructor.ɵcmp ? dir.constructor.ɵcmp[key] : dir.constructor.ɵdir[key];
            }
            catch (_a) {
                console.warn("Could not find metadata for key: " + key + " in directive:", dir);
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
    var getRootLViewsHelper = function (element, rootLViews) {
        if (rootLViews === void 0) { rootLViews = new Set(); }
        if (!(element instanceof HTMLElement)) {
            return rootLViews;
        }
        var lView = getLViewFromDirectiveOrElementInstance(element);
        if (lView) {
            rootLViews.add(lView);
            return rootLViews;
        }
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < element.children.length; i++) {
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
    var getRootLViews = function (element) {
        var roots = element.querySelectorAll('[ng-version]');
        return getRootLViewsHelper(element, new Set(Array.from(roots).map(getLViewFromDirectiveOrElementInstance)));
    };
    var buildDirectiveForest = function () {
        var roots = getRootLViews(document.documentElement);
        return Array.prototype.concat.apply([], __spreadArray([], __read(roots)).map(buildDirectiveTree));
    };
    // Based on an ElementID we return a specific component node.
    // If we can't find any, we return null.
    var queryDirectiveForest = function (position, forest) {
        var e_1, _b;
        if (!position.length) {
            return null;
        }
        var node = null;
        try {
            for (var position_1 = __values(position), position_1_1 = position_1.next(); !position_1_1.done; position_1_1 = position_1.next()) {
                var i = position_1_1.value;
                node = forest[i];
                if (!node) {
                    return null;
                }
                forest = node.children;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (position_1_1 && !position_1_1.done && (_b = position_1.return)) _b.call(position_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return node;
    };
    var findNodeInForest = function (position, forest) {
        var foundComponent = queryDirectiveForest(position, forest);
        return foundComponent ? foundComponent.nativeElement : null;
    };
    var findNodeFromSerializedPosition = function (serializedPosition) {
        var position = serializedPosition.split(',').map(function (index) { return parseInt(index, 10); });
        return queryDirectiveForest(position, buildDirectiveForest());
    };
    var updateState = function (updatedStateData) {
        var ngd = ngDebug();
        var node = queryDirectiveForest(updatedStateData.directiveId.element, buildDirectiveForest());
        if (!node) {
            console.warn('Could not update the state of component', updatedStateData, 'because the component was not found');
            return;
        }
        if (updatedStateData.directiveId.directive !== undefined) {
            var directive = node.directives[updatedStateData.directiveId.directive].instance;
            mutateComponentOrDirective(updatedStateData, directive);
            ngd.applyChanges(ngd.getOwningComponent(directive));
            return;
        }
        if (node.component) {
            var comp = node.component.instance;
            mutateComponentOrDirective(updatedStateData, comp);
            ngd.applyChanges(comp);
            return;
        }
    };
    var mutateComponentOrDirective = function (updatedStateData, compOrDirective) {
        var valueKey = updatedStateData.keyPath.pop();
        if (valueKey === undefined) {
            return;
        }
        var parentObjectOfValueToUpdate = compOrDirective;
        updatedStateData.keyPath.forEach(function (key) {
            parentObjectOfValueToUpdate = parentObjectOfValueToUpdate[key];
        });
        parentObjectOfValueToUpdate[valueKey] = updatedStateData.newValue;
    };

    function parseRoutes(router) {
        var _a;
        var rootName = ((_a = router.rootComponentType) === null || _a === void 0 ? void 0 : _a.name) || 'no-name';
        var rootChildren = router.config;
        var root = {
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
        return children.map(function (child) {
            var _a;
            var childName = childRouteName(child);
            var childDescendents = ((_a = child._loadedConfig) === null || _a === void 0 ? void 0 : _a.routes) || child.children;
            // only found in aux routes, otherwise property will be undefined
            var isAuxRoute = !!child.outlet;
            var pathFragment = child.outlet ? "(" + child.outlet + ":" + child.path + ")" : child.path;
            var routeConfig = {
                handler: childName,
                data: [],
                hash: null,
                specificity: null,
                name: childName,
                path: ((parentPath ? parentPath : '') + "/" + pathFragment).split('//').join('/'),
                isAux: isAuxRoute,
                children: [],
            };
            if (childDescendents) {
                routeConfig.children = assignChildrenToParent(routeConfig.path, childDescendents);
            }
            if (child.data) {
                for (var el in child.data) {
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
            return child.path + " [Lazy]";
        }
        else if (child.redirectTo) {
            return child.path + " -> redirecting to -> \"" + child.redirectTo + "\"";
        }
        else {
            return 'no-name-route';
        }
    }

    var IdentityTracker = /** @class */ (function () {
        function IdentityTracker() {
            this._directiveIdCounter = 0;
            this._currentDirectivePosition = new Map();
            this._currentDirectiveId = new Map();
            this._isComponent = new Map();
        }
        IdentityTracker.prototype.getDirectivePosition = function (dir) {
            return this._currentDirectivePosition.get(dir);
        };
        IdentityTracker.prototype.getDirectiveId = function (dir) {
            return this._currentDirectiveId.get(dir);
        };
        IdentityTracker.prototype.hasDirective = function (dir) {
            return this._currentDirectiveId.has(dir);
        };
        IdentityTracker.prototype.index = function () {
            var _this = this;
            var directiveForest = buildDirectiveForest();
            var indexedForest = indexForest(directiveForest);
            var newNodes = [];
            var removedNodes = [];
            var allNodes = new Set();
            indexedForest.forEach(function (root) { return _this._index(root, null, newNodes, allNodes); });
            this._currentDirectiveId.forEach(function (_, dir) {
                if (!allNodes.has(dir)) {
                    removedNodes.push({ directive: dir, isComponent: !!_this._isComponent.get(dir) });
                    // We can't clean these up because during profiling
                    // they might be requested for removed components
                    // this._currentDirectiveId.delete(dir);
                    // this._currentDirectivePosition.delete(dir);
                }
            });
            return { newNodes: newNodes, removedNodes: removedNodes, indexedForest: indexedForest, directiveForest: directiveForest };
        };
        IdentityTracker.prototype._index = function (node, parent, newNodes, allNodes) {
            var _this = this;
            if (node.component) {
                allNodes.add(node.component.instance);
                this._isComponent.set(node.component.instance, true);
                this._indexNode(node.component.instance, node.position, newNodes);
            }
            (node.directives || []).forEach(function (dir) {
                allNodes.add(dir.instance);
                _this._isComponent.set(dir.instance, false);
                _this._indexNode(dir.instance, node.position, newNodes);
            });
            node.children.forEach(function (child) { return _this._index(child, parent, newNodes, allNodes); });
        };
        IdentityTracker.prototype._indexNode = function (directive, position, newNodes) {
            this._currentDirectivePosition.set(directive, position);
            if (!this._currentDirectiveId.has(directive)) {
                newNodes.push({ directive: directive, isComponent: !!this._isComponent.get(directive) });
                this._currentDirectiveId.set(directive, this._directiveIdCounter++);
            }
        };
        IdentityTracker.prototype.destroy = function () {
            this._currentDirectivePosition = new Map();
            this._currentDirectiveId = new Map();
        };
        return IdentityTracker;
    }());
    var indexTree = function (node, idx, parentPosition) {
        if (parentPosition === void 0) { parentPosition = []; }
        var position = parentPosition.concat([idx]);
        return {
            position: position,
            element: node.element,
            component: node.component,
            directives: node.directives.map(function (d) { return (Object.assign({ position: position }, d)); }),
            children: node.children.map(function (n, i) { return indexTree(n, i, position); }),
            nativeElement: node.nativeElement,
        };
    };
    var indexForest = function (forest) { return forest.map(function (n, i) { return indexTree(n, i); }); };

    var hookNames = [
        'OnInit',
        'OnDestroy',
        'OnChanges',
        'DoCheck',
        'AfterContentInit',
        'AfterContentChecked',
        'AfterViewInit',
        'AfterViewChecked',
    ];
    var hookMethodNames = new Set(hookNames.map(function (hook) { return "ng" + hook; }));
    var hookTViewProperties = [
        'preOrderHooks',
        'preOrderCheckHooks',
        'contentHooks',
        'contentCheckHooks',
        'viewHooks',
        'viewCheckHooks',
        'destroyHooks',
    ];
    var getLifeCycleName = function (obj, fn) {
        var e_1, _a, e_2, _b;
        var proto = Object.getPrototypeOf(obj);
        var keys = Object.getOwnPropertyNames(proto);
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var propName = keys_1_1.value;
                // We don't want to touch random get accessors.
                if (!hookMethodNames.has(propName)) {
                    continue;
                }
                if (proto[propName] === fn) {
                    return propName;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var fnName = fn.name;
        if (typeof fnName !== 'string') {
            return 'unknown';
        }
        try {
            for (var hookNames_1 = __values(hookNames), hookNames_1_1 = hookNames_1.next(); !hookNames_1_1.done; hookNames_1_1 = hookNames_1.next()) {
                var hookName = hookNames_1_1.value;
                if (fnName.indexOf(hookName) >= 0) {
                    return "ng" + hookName;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (hookNames_1_1 && !hookNames_1_1.done && (_b = hookNames_1.return)) _b.call(hookNames_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return 'unknown';
    };
    /**
     * This is a temporal "polyfill" until we receive
     * more comprehensive framework debugging APIs.
     */
    var DirectiveForestHooks = /** @class */ (function () {
        function DirectiveForestHooks(config) {
            this._patched = new Map();
            this._undoLifecyclePatch = [];
            this._lastChangeDetection = new Map();
            this._tracker = new IdentityTracker();
            this._forest = [];
            this._indexedForest = [];
            this._inChangeDetection = false;
            this._changeDetection$ = new rxjs.Subject();
            this._hooks = [];
            this._hooks.push(config);
        }
        Object.defineProperty(DirectiveForestHooks.prototype, "changeDetection$", {
            get: function () {
                return this._changeDetection$;
            },
            enumerable: false,
            configurable: true
        });
        DirectiveForestHooks.prototype.getDirectivePosition = function (dir) {
            var result = this._tracker.getDirectivePosition(dir);
            if (result === undefined) {
                console.warn('Unable to find position of', dir);
            }
            return result;
        };
        DirectiveForestHooks.prototype.getDirectiveId = function (dir) {
            var result = this._tracker.getDirectiveId(dir);
            if (result === undefined) {
                console.warn('Unable to find ID of', result);
            }
            return result;
        };
        DirectiveForestHooks.prototype.getIndexedDirectiveForest = function () {
            return this._indexedForest;
        };
        DirectiveForestHooks.prototype.getDirectiveForest = function () {
            return this._forest;
        };
        DirectiveForestHooks.prototype.initialize = function () {
            this.indexForest();
        };
        DirectiveForestHooks.prototype.destroy = function () {
            var e_3, _a;
            this._lastChangeDetection = new Map();
            this._tracker.destroy();
            try {
                for (var _b = __values(this._patched), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), cmp = _d[0], template = _d[1];
                    var meta = componentMetadata(cmp);
                    meta.template = template;
                    meta.tView.template = template;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            this._patched = new Map();
            this._undoLifecyclePatch.forEach(function (p) { return p(); });
            this._undoLifecyclePatch = [];
        };
        DirectiveForestHooks.prototype.indexForest = function () {
            var _this = this;
            var _a = this._tracker.index(), newNodes = _a.newNodes, removedNodes = _a.removedNodes, indexedForest = _a.indexedForest, directiveForest = _a.directiveForest;
            this._indexedForest = indexedForest;
            this._forest = directiveForest;
            newNodes.forEach(function (node) {
                _this._observeLifecycle(node.directive, node.isComponent);
                _this._observeComponent(node.directive);
                _this._fireCreationCallback(node.directive, node.isComponent);
            });
            removedNodes.forEach(function (node) {
                _this._patched.delete(node.directive);
                _this._fireDestroyCallback(node.directive, node.isComponent);
            });
        };
        DirectiveForestHooks.prototype.subscribe = function (config) {
            this._hooks.push(config);
        };
        DirectiveForestHooks.prototype.unsubscribe = function (config) {
            this._hooks.splice(this._hooks.indexOf(config), 1);
        };
        DirectiveForestHooks.prototype._fireCreationCallback = function (component, isComponent) {
            var position = this._tracker.getDirectivePosition(component);
            var id = this._tracker.getDirectiveId(component);
            this._onCreate(component, getDirectiveHostElement(component), id, isComponent, position);
        };
        DirectiveForestHooks.prototype._fireDestroyCallback = function (component, isComponent) {
            var position = this._tracker.getDirectivePosition(component);
            var id = this._tracker.getDirectiveId(component);
            this._onDestroy(component, getDirectiveHostElement(component), id, isComponent, position);
        };
        DirectiveForestHooks.prototype._observeComponent = function (cmp) {
            var declarations = componentMetadata(cmp);
            if (!declarations) {
                return;
            }
            var original = declarations.template;
            var self = this;
            if (original.patched) {
                return;
            }
            declarations.tView.template = function (_, component) {
                if (!self._inChangeDetection) {
                    self._inChangeDetection = true;
                    runOutsideAngular(function () {
                        Promise.resolve().then(function () {
                            self._changeDetection$.next();
                            self._inChangeDetection = false;
                        });
                    });
                }
                var position = self._tracker.getDirectivePosition(component);
                var start = performance.now();
                var id = self._tracker.getDirectiveId(component);
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
        };
        DirectiveForestHooks.prototype._observeLifecycle = function (directive, isComponent) {
            var _this = this;
            var ctx = getLViewFromDirectiveOrElementInstance(directive);
            if (!ctx) {
                return;
            }
            var tview = ctx[1];
            hookTViewProperties.forEach(function (hook) {
                var current = tview[hook];
                if (!Array.isArray(current)) {
                    return;
                }
                current.forEach(function (el, idx) {
                    if (el.patched) {
                        return;
                    }
                    if (typeof el === 'function') {
                        var self_1 = _this;
                        current[idx] = function () {
                            // We currently don't want to notify the consumer
                            // for execution of lifecycle hooks of services and pipes.
                            // These two abstractions don't have `__ngContext__`, and
                            // currently we won't be able to extract the required
                            // metadata by the UI.
                            if (!this[METADATA_PROPERTY_NAME]) {
                                return;
                            }
                            var id = self_1._tracker.getDirectiveId(this);
                            var lifecycleHookName = getLifeCycleName(this, el);
                            var element = getDirectiveHostElement(this);
                            self_1._onLifecycleHookStart(this, lifecycleHookName, element, id, isComponent);
                            var result = el.apply(this, arguments);
                            self_1._onLifecycleHookEnd(this, lifecycleHookName, element, id, isComponent);
                            return result;
                        };
                        current[idx].patched = true;
                        _this._undoLifecyclePatch.push(function () {
                            current[idx] = el;
                        });
                    }
                });
            });
        };
        DirectiveForestHooks.prototype._onCreate = function (_, __, id, ___, position) {
            if (id === undefined || position === undefined) {
                return;
            }
            this._invokeCallback('onCreate', arguments);
        };
        DirectiveForestHooks.prototype._onDestroy = function (_, __, id, ___, position) {
            if (id === undefined || position === undefined) {
                return;
            }
            this._invokeCallback('onDestroy', arguments);
        };
        DirectiveForestHooks.prototype._onChangeDetectionStart = function (_, __, id, position) {
            if (id === undefined || position === undefined) {
                return;
            }
            this._invokeCallback('onChangeDetectionStart', arguments);
        };
        DirectiveForestHooks.prototype._onChangeDetectionEnd = function (_, __, id, position) {
            if (id === undefined || position === undefined) {
                return;
            }
            this._invokeCallback('onChangeDetectionEnd', arguments);
        };
        DirectiveForestHooks.prototype._onLifecycleHookStart = function (_, __, ___, id, ____) {
            if (id === undefined) {
                return;
            }
            this._invokeCallback('onLifecycleHookStart', arguments);
        };
        DirectiveForestHooks.prototype._onLifecycleHookEnd = function (_, __, ___, id, ____) {
            if (id === undefined) {
                return;
            }
            this._invokeCallback('onLifecycleHookEnd', arguments);
        };
        DirectiveForestHooks.prototype._invokeCallback = function (name, args) {
            this._hooks.forEach(function (config) {
                var cb = config[name];
                if (cb) {
                    cb.apply(null, args);
                }
            });
        };
        return DirectiveForestHooks;
    }());

    var markName = function (s, method) { return "\uD83C\uDD70\uFE0F " + s + "#" + method; };
    var supportsPerformance = globalThis.performance && typeof globalThis.performance.getEntriesByName === 'function';
    var recordMark = function (s, method) {
        if (supportsPerformance) {
            performance.mark(markName(s, method) + "_start");
        }
    };
    var endMark = function (nodeName, method) {
        if (supportsPerformance) {
            var name = markName(nodeName, method);
            var start = name + "_start";
            var end = name + "_end";
            if (performance.getEntriesByName(start).length > 0) {
                performance.mark(end);
                performance.measure(name, start, end);
            }
            performance.clearMarks(start);
            performance.clearMarks(end);
            performance.clearMeasures(name);
        }
    };
    var timingAPIFlag = false;
    var enableTimingAPI = function () { return (timingAPIFlag = true); };
    var disableTimingAPI = function () { return (timingAPIFlag = false); };
    var timingAPIEnabled = function () { return timingAPIFlag; };
    var directiveForestHooks;
    var initializeOrGetDirectiveForestHooks = function () {
        if (directiveForestHooks) {
            return directiveForestHooks;
        }
        directiveForestHooks = new DirectiveForestHooks({
            onChangeDetectionStart: function (component) {
                if (!timingAPIEnabled()) {
                    return;
                }
                recordMark(getDirectiveName(component), 'changeDetection');
            },
            onChangeDetectionEnd: function (component) {
                if (!timingAPIEnabled()) {
                    return;
                }
                endMark(getDirectiveName(component), 'changeDetection');
            },
            onLifecycleHookStart: function (component, lifecyle) {
                if (!timingAPIEnabled()) {
                    return;
                }
                recordMark(getDirectiveName(component), lifecyle);
            },
            onLifecycleHookEnd: function (component, lifecyle) {
                if (!timingAPIEnabled()) {
                    return;
                }
                endMark(getDirectiveName(component), lifecyle);
            },
        });
        directiveForestHooks.initialize();
        return directiveForestHooks;
    };

    var inProgress = false;
    var inChangeDetection = false;
    var eventMap;
    var frameDuration = 0;
    var hooks = {};
    var start = function (onFrame) {
        if (inProgress) {
            throw new Error('Recording already in progress');
        }
        eventMap = new Map();
        inProgress = true;
        hooks = getHooks(onFrame);
        initializeOrGetDirectiveForestHooks().subscribe(hooks);
    };
    var stop = function () {
        var directiveForestHooks = initializeOrGetDirectiveForestHooks();
        var result = flushBuffer(directiveForestHooks);
        initializeOrGetDirectiveForestHooks().unsubscribe(hooks);
        hooks = {};
        inProgress = false;
        return result;
    };
    var startEvent = function (map, directive, label) {
        var name = getDirectiveName(directive);
        var key = name + "#" + label;
        map[key] = performance.now();
    };
    var getEventStart = function (map, directive, label) {
        var name = getDirectiveName(directive);
        var key = name + "#" + label;
        return map[key];
    };
    var getHooks = function (onFrame) {
        var timeStartMap = {};
        return {
            // We flush here because it's possible the current node to overwrite
            // an existing removed node.
            onCreate: function (directive, node, _, isComponent, position) {
                eventMap.set(directive, {
                    isElement: isCustomElement(node),
                    name: getDirectiveName(directive),
                    isComponent: isComponent,
                    lifecycle: {},
                });
            },
            onChangeDetectionStart: function (component, node) {
                startEvent(timeStartMap, component, 'changeDetection');
                if (!inChangeDetection) {
                    inChangeDetection = true;
                    var source_1 = getChangeDetectionSource();
                    runOutsideAngular(function () {
                        Promise.resolve().then(function () {
                            inChangeDetection = false;
                            onFrame(flushBuffer(initializeOrGetDirectiveForestHooks(), source_1));
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
            onChangeDetectionEnd: function (component) {
                var profile = eventMap.get(component);
                if (profile) {
                    var current = profile.changeDetection;
                    if (current === undefined) {
                        current = 0;
                    }
                    var startTimestamp = getEventStart(timeStartMap, component, 'changeDetection');
                    if (startTimestamp === undefined) {
                        return;
                    }
                    var duration = performance.now() - startTimestamp;
                    profile.changeDetection = current + duration;
                    frameDuration += duration;
                }
                else {
                    console.warn('Could not find profile for', component);
                }
            },
            onDestroy: function (directive, node, _, isComponent, __) {
                // Make sure we reflect such directives in the report.
                if (!eventMap.has(directive)) {
                    eventMap.set(directive, {
                        isElement: isComponent && isCustomElement(node),
                        name: getDirectiveName(directive),
                        isComponent: isComponent,
                        lifecycle: {},
                    });
                }
            },
            onLifecycleHookStart: function (directive, hookName, node, __, isComponent) {
                startEvent(timeStartMap, directive, hookName);
                if (!eventMap.has(directive)) {
                    eventMap.set(directive, {
                        isElement: isCustomElement(node),
                        name: getDirectiveName(directive),
                        isComponent: isComponent,
                        lifecycle: {},
                    });
                }
            },
            onLifecycleHookEnd: function (directive, hookName, _, __, ___) {
                var dir = eventMap.get(directive);
                var startTimestamp = getEventStart(timeStartMap, directive, hookName);
                if (startTimestamp === undefined) {
                    return;
                }
                if (!dir) {
                    console.warn('Could not find directive in onLifecycleHook callback', directive, hookName);
                    return;
                }
                var duration = performance.now() - startTimestamp;
                dir.lifecycle[hookName] = (dir.lifecycle[hookName] || 0) + duration;
                frameDuration += duration;
            },
        };
    };
    var insertOrMerge = function (lastFrame, profile) {
        var exists = false;
        lastFrame.directives.forEach(function (d) {
            var e_1, _b;
            var _a;
            if (d.name === profile.name) {
                exists = true;
                var current = d.changeDetection;
                if (current === undefined) {
                    current = 0;
                }
                d.changeDetection = current + ((_a = profile.changeDetection) !== null && _a !== void 0 ? _a : 0);
                try {
                    for (var _c = __values(Object.keys(profile.lifecycle)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        if (!d.lifecycle[key]) {
                            d.lifecycle[key] = 0;
                        }
                        d.lifecycle[key] += profile.lifecycle[key];
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
        if (!exists) {
            lastFrame.directives.push(profile);
        }
    };
    var insertElementProfile = function (frames, position, profile) {
        if (!profile) {
            return;
        }
        var original = frames;
        for (var i = 0; i < position.length - 1; i++) {
            var pos = position[i];
            if (!frames[pos]) {
                // TODO(mgechev): consider how to ensure we don't hit this case
                console.warn('Unable to find parent node for', profile, original);
                return;
            }
            frames = frames[pos].children;
        }
        var lastIdx = position[position.length - 1];
        var lastFrame = {
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
    var prepareInitialFrame = function (source, duration) {
        var frame = {
            source: source,
            duration: duration,
            directives: [],
        };
        var directiveForestHooks = initializeOrGetDirectiveForestHooks();
        var directiveForest = directiveForestHooks.getIndexedDirectiveForest();
        var traverse = function (node, children) {
            if (children === void 0) { children = frame.directives; }
            var position;
            if (node.component) {
                position = directiveForestHooks.getDirectivePosition(node.component.instance);
            }
            else {
                position = directiveForestHooks.getDirectivePosition(node.directives[0].instance);
            }
            if (position === undefined) {
                return;
            }
            var directives = node.directives.map(function (d) {
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
            var result = {
                children: [],
                directives: directives,
            };
            children[position[position.length - 1]] = result;
            node.children.forEach(function (n) { return traverse(n, result.children); });
        };
        directiveForest.forEach(function (n) { return traverse(n); });
        return frame;
    };
    var flushBuffer = function (directiveForestHooks, source) {
        if (source === void 0) { source = ''; }
        var items = Array.from(eventMap.keys());
        var positions = [];
        var positionDirective = new Map();
        items.forEach(function (dir) {
            var position = directiveForestHooks.getDirectivePosition(dir);
            if (position === undefined) {
                return;
            }
            positions.push(position);
            positionDirective.set(position, dir);
        });
        positions.sort(lexicographicOrder);
        var result = prepareInitialFrame(source, frameDuration);
        frameDuration = 0;
        positions.forEach(function (position) {
            var dir = positionDirective.get(position);
            insertElementProfile(result.directives, position, eventMap.get(dir));
        });
        eventMap = new Map();
        return result;
    };
    var getChangeDetectionSource = function () {
        var zone = window.Zone;
        if (!zone || !zone.currentTask) {
            return '';
        }
        return zone.currentTask.source;
    };
    var lexicographicOrder = function (a, b) {
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }
        for (var i = 0; i < a.length; i++) {
            if (a[i] < b[i]) {
                return -1;
            }
            if (a[i] > b[i]) {
                return 1;
            }
        }
        return 0;
    };

    var ComponentInspector = /** @class */ (function () {
        function ComponentInspector(componentOptions) {
            if (componentOptions === void 0) { componentOptions = {
                onComponentEnter: function () { },
                onComponentLeave: function () { },
                onComponentSelect: function () { },
            }; }
            this.bindMethods();
            this._onComponentEnter = componentOptions.onComponentEnter;
            this._onComponentSelect = componentOptions.onComponentSelect;
            this._onComponentLeave = componentOptions.onComponentLeave;
        }
        ComponentInspector.prototype.startInspecting = function () {
            window.addEventListener('mouseover', this.elementMouseOver, true);
            window.addEventListener('click', this.elementClick, true);
            window.addEventListener('mouseout', this.cancelEvent, true);
        };
        ComponentInspector.prototype.stopInspecting = function () {
            window.removeEventListener('mouseover', this.elementMouseOver, true);
            window.removeEventListener('click', this.elementClick, true);
            window.removeEventListener('mouseout', this.cancelEvent, true);
        };
        ComponentInspector.prototype.elementClick = function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            if (this._selectedComponent.component && this._selectedComponent.host) {
                this._onComponentSelect(initializeOrGetDirectiveForestHooks().getDirectiveId(this._selectedComponent.component));
            }
        };
        ComponentInspector.prototype.elementMouseOver = function (e) {
            this.cancelEvent(e);
            var el = e.target;
            if (el) {
                this._selectedComponent = findComponentAndHost(el);
            }
            unHighlight();
            if (this._selectedComponent.component && this._selectedComponent.host) {
                highlight(this._selectedComponent.host);
                this._onComponentEnter(initializeOrGetDirectiveForestHooks().getDirectiveId(this._selectedComponent.component));
            }
        };
        ComponentInspector.prototype.cancelEvent = function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
            this._onComponentLeave();
        };
        ComponentInspector.prototype.bindMethods = function () {
            this.startInspecting = this.startInspecting.bind(this);
            this.stopInspecting = this.stopInspecting.bind(this);
            this.elementMouseOver = this.elementMouseOver.bind(this);
            this.elementClick = this.elementClick.bind(this);
            this.cancelEvent = this.cancelEvent.bind(this);
        };
        ComponentInspector.prototype.highlightByPosition = function (position) {
            var forest = initializeOrGetDirectiveForestHooks().getDirectiveForest();
            var elementToHighlight = findNodeInForest(position, forest);
            if (elementToHighlight) {
                highlight(elementToHighlight);
            }
        };
        return ComponentInspector;
    }());

    var CONSOLE_REFERENCE_PREFIX = '$ng';
    var CAPACITY = 5;
    var nodesForConsoleReference = [];
    var setConsoleReference = function (referenceNode) {
        if (referenceNode.node === null) {
            return;
        }
        _setConsoleReference(referenceNode);
    };
    var _setConsoleReference = function (referenceNode) {
        prepareCurrentReferencesForInsertion(referenceNode);
        nodesForConsoleReference.unshift(referenceNode);
        assignConsoleReferencesFrom(nodesForConsoleReference);
    };
    var prepareCurrentReferencesForInsertion = function (referenceNode) {
        var foundIndex = nodesForConsoleReference.findIndex(function (nodeToLookFor) { return sharedUtils.arrayEquals(nodeToLookFor.position, referenceNode.position); });
        if (foundIndex !== -1) {
            nodesForConsoleReference.splice(foundIndex, 1);
        }
        else if (nodesForConsoleReference.length === CAPACITY) {
            nodesForConsoleReference.pop();
        }
    };
    var assignConsoleReferencesFrom = function (referenceNodes) {
        referenceNodes.forEach(function (referenceNode, index) { return setDirectiveKey(referenceNode.node, getConsoleReferenceWithIndexOf(index)); });
    };
    var setDirectiveKey = function (node, key) {
        Object.defineProperty(window, key, {
            get: function () {
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
    var getConsoleReferenceWithIndexOf = function (consoleReferenceIndex) { return "" + CONSOLE_REFERENCE_PREFIX + consoleReferenceIndex; };

    var appIsAngularInDevMode = function () {
        return appIsAngular() && appHasGlobalNgDebugObject();
    };
    var appIsAngularIvy = function () {
        var _a, _b, _c, _d;
        return !!((_d = (_c = (_b = (_a = window).getAllAngularRootElements) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.__ngContext__);
    };
    var appIsAngular = function () {
        return !!getAngularVersion();
    };
    var appIsSupportedAngularVersion = function () {
        var version = getAngularVersion();
        if (!version) {
            return false;
        }
        var major = parseInt(version.toString().split('.')[0], 10);
        return appIsAngular() && (major >= 9 || major === 0);
    };
    var appHasGlobalNgDebugObject = function () {
        return typeof ng !== 'undefined';
    };
    var getAngularVersion = function () {
        var el = document.querySelector('[ng-version]');
        if (!el) {
            return null;
        }
        return el.getAttribute('ng-version');
    };

    var subscribeToClientEvents = function (messageBus) {
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
            runOutsideAngular(function () {
                initializeOrGetDirectiveForestHooks()
                    .changeDetection$.pipe(operators.debounceTime(250))
                    .subscribe(function () { return messageBus.emit('componentTreeDirty'); });
            });
        }
    };
    //
    // Callback Definitions
    //
    var shutdownCallback = function (messageBus) { return function () {
        messageBus.destroy();
    }; };
    var getLatestComponentExplorerViewCallback = function (messageBus) { return function (query) {
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
    }; };
    var checkForAngularCallback = function (messageBus) { return function () { return checkForAngular(messageBus); }; };
    var getRoutesCallback = function (messageBus) { return function () { return getRoutes(messageBus); }; };
    var startProfilingCallback = function (messageBus) { return function () { return start(function (frame) {
        messageBus.emit('sendProfilerChunk', [frame]);
    }); }; };
    var stopProfilingCallback = function (messageBus) { return function () {
        messageBus.emit('profilerResults', [stop()]);
    }; };
    var selectedComponentCallback = function (position) {
        var node = queryDirectiveForest(position, initializeOrGetDirectiveForestHooks().getIndexedDirectiveForest());
        setConsoleReference({ node: node, position: position });
    };
    var getNestedPropertiesCallback = function (messageBus) { return function (position, propPath) {
        var e_1, _c;
        var emitEmpty = function () { return messageBus.emit('nestedProperties', [position, { props: {} }, propPath]); };
        var node = queryDirectiveForest(position.element, initializeOrGetDirectiveForestHooks().getIndexedDirectiveForest());
        if (!node) {
            return emitEmpty();
        }
        var current = position.directive === undefined ? node.component : node.directives[position.directive];
        if (!current) {
            return emitEmpty();
        }
        var data = current.instance;
        try {
            for (var propPath_1 = __values(propPath), propPath_1_1 = propPath_1.next(); !propPath_1_1.done; propPath_1_1 = propPath_1.next()) {
                var prop = propPath_1_1.value;
                data = data[prop];
                if (!data) {
                    console.error('Cannot access the properties', propPath, 'of', node);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (propPath_1_1 && !propPath_1_1.done && (_c = propPath_1.return)) _c.call(propPath_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        messageBus.emit('nestedProperties', [position, { props: serializeDirectiveState(data) }, propPath]);
    }; };
    //
    // Subscribe Helpers
    //
    var getRoutes = function (messageBus) {
        var _a, _b;
        var node = queryDirectiveForest([0], initializeOrGetDirectiveForestHooks().getIndexedDirectiveForest());
        var routes = [];
        if ((_a = node === null || node === void 0 ? void 0 : node.component) === null || _a === void 0 ? void 0 : _a.instance.router) {
            routes = [parseRoutes((_b = node === null || node === void 0 ? void 0 : node.component) === null || _b === void 0 ? void 0 : _b.instance.router)];
        }
        messageBus.emit('updateRouterTree', [routes]);
    };
    var checkForAngular = function (messageBus) {
        var ngVersion = getAngularVersion();
        var appIsIvy = appIsAngularIvy();
        if (!ngVersion) {
            setTimeout(function () { return checkForAngular(messageBus); }, 500);
            return;
        }
        if (appIsIvy) {
            initializeOrGetDirectiveForestHooks();
        }
        messageBus.emit('ngAvailability', [
            { version: ngVersion.toString(), devMode: appIsAngularInDevMode(), ivy: appIsIvy },
        ]);
    };
    var setupInspector = function (messageBus) {
        var inspector = new ComponentInspector({
            onComponentEnter: function (id) {
                messageBus.emit('highlightComponent', [id]);
            },
            onComponentLeave: function () {
                messageBus.emit('removeComponentHighlight');
            },
            onComponentSelect: function (id) {
                messageBus.emit('selectComponent', [id]);
            },
        });
        messageBus.on('inspectorStart', inspector.startInspecting);
        messageBus.on('inspectorEnd', inspector.stopInspecting);
        messageBus.on('createHighlightOverlay', function (position) {
            inspector.highlightByPosition(position);
        });
        messageBus.on('removeHighlightOverlay', unHighlight);
    };
    // Here we drop properties to prepare the tree for serialization.
    // We don't need the component instance, so we just traverse the tree
    // and leave the component name.
    var prepareForestForSerialization = function (roots) {
        return roots.map(function (node) {
            return {
                element: node.element,
                component: node.component
                    ? {
                        name: node.component.name,
                        isElement: node.component.isElement,
                        id: initializeOrGetDirectiveForestHooks().getDirectiveId(node.component.instance),
                    }
                    : null,
                directives: node.directives.map(function (d) { return ({
                    name: d.name,
                    id: initializeOrGetDirectiveForestHooks().getDirectiveId(d.instance),
                }); }),
                children: prepareForestForSerialization(node.children),
            };
        });
    };

    var initializeMessageBus = function (messageBus) {
        subscribeToClientEvents(messageBus);
    };

    /*
     * Public API Surface of ng-devtools-backend
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.findNodeFromSerializedPosition = findNodeFromSerializedPosition;
    exports.initializeMessageBus = initializeMessageBus;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-devtools-backend.umd.js.map
