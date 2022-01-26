(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/animations'), require('protocol'), require('@angular/common'), require('@angular/material/tree'), require('@angular/cdk/collections'), require('rxjs/operators'), require('@angular/cdk/tree'), require('@angular/cdk/scrolling'), require('@angular/material/card'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/material/expansion'), require('@angular/material/toolbar'), require('@angular/cdk/drag-drop'), require('@angular/forms'), require('@angular/material/tabs'), require('@angular/material/menu'), require('@angular/material/dialog'), require('d3'), require('@angular/material/slide-toggle'), require('@angular/material/tooltip'), require('@angular/material/snack-bar'), require('@angular/material/select'), require('ngx-flamegraph'), require('memo-decorator'), require('webtreemap/build/webtreemap'), require('@angular/material/checkbox'), require('@angular/material/form-field'), require('@angular/material/core'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner')) :
    typeof define === 'function' && define.amd ? define('ng-devtools', ['exports', '@angular/core', 'rxjs', '@angular/animations', 'protocol', '@angular/common', '@angular/material/tree', '@angular/cdk/collections', 'rxjs/operators', '@angular/cdk/tree', '@angular/cdk/scrolling', '@angular/material/card', '@angular/material/icon', '@angular/material/button', '@angular/material/expansion', '@angular/material/toolbar', '@angular/cdk/drag-drop', '@angular/forms', '@angular/material/tabs', '@angular/material/menu', '@angular/material/dialog', 'd3', '@angular/material/slide-toggle', '@angular/material/tooltip', '@angular/material/snack-bar', '@angular/material/select', 'ngx-flamegraph', 'memo-decorator', 'webtreemap/build/webtreemap', '@angular/material/checkbox', '@angular/material/form-field', '@angular/material/core', '@angular/material/progress-bar', '@angular/material/progress-spinner'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-devtools'] = {}, global.ng.core, global.rxjs, global.ng.animations, global.i2, global.ng.common, global.ng.material.tree, global.ng.cdk.collections, global.rxjs.operators, global.ng.cdk.tree, global.ng.cdk.scrolling, global.ng.material.card, global.ng.material.icon, global.ng.material.button, global.ng.material.expansion, global.ng.material.toolbar, global.ng.cdk.dragDrop, global.ng.forms, global.ng.material.tabs, global.ng.material.menu, global.ng.material.dialog, global.d3, global.ng.material.slideToggle, global.ng.material.tooltip, global.ng.material.snackBar, global.ng.material.select, global.i2$5, global.memo, global.treemap, global.ng.material.checkbox, global.ng.material.formField, global.ng.material.core, global.ng.material.progressBar, global.ng.material.progressSpinner));
}(this, (function (exports, i0, rxjs, animations, i2, i1$1, i2$1, collections, operators, tree, i4, i1, i2$2, i3, i2$3, i1$2, i3$1, i2$4, i5, i9, i1$3, d3, i13, i5$1, snackBar, i3$2, i2$5, memo, treemap, i5$2, i2$6, i4$1, i1$4, progressSpinner) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i2__namespace$4 = /*#__PURE__*/_interopNamespace(i2$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$3);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i2__namespace$3 = /*#__PURE__*/_interopNamespace(i2$4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var d3__namespace = /*#__PURE__*/_interopNamespace(d3);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i2__namespace$5 = /*#__PURE__*/_interopNamespace(i2$5);
    var memo__default = /*#__PURE__*/_interopDefaultLegacy(memo);
    var treemap__namespace = /*#__PURE__*/_interopNamespace(treemap);
    var i5__namespace$2 = /*#__PURE__*/_interopNamespace(i5$2);
    var i2__namespace$6 = /*#__PURE__*/_interopNamespace(i2$6);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i1__namespace$4 = /*#__PURE__*/_interopNamespace(i1$4);

    var ThemeService = /** @class */ (function () {
        function ThemeService(_rendererFactory) {
            this._rendererFactory = _rendererFactory;
            this.currentTheme = new rxjs.ReplaySubject();
            this.renderer = this._rendererFactory.createRenderer(null, null);
            this.toggleDarkMode(this._prefersDarkMode);
        }
        ThemeService.prototype.toggleDarkMode = function (isDark) {
            var removeClass = isDark ? 'light-theme' : 'dark-theme';
            var addClass = !isDark ? 'light-theme' : 'dark-theme';
            this.renderer.removeClass(document.body, removeClass);
            this.renderer.addClass(document.body, addClass);
            this.currentTheme.next(addClass);
        };
        ThemeService.prototype.initializeThemeWatcher = function () {
            var _this = this;
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
                _this.toggleDarkMode(_this._prefersDarkMode);
            });
        };
        Object.defineProperty(ThemeService.prototype, "_prefersDarkMode", {
            get: function () {
                return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            },
            enumerable: false,
            configurable: true
        });
        return ThemeService;
    }());
    ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(i0__namespace.ɵɵinject(i0__namespace.RendererFactory2)); };
    ThemeService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ThemeService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i0__namespace.RendererFactory2 }]; }, null);
    })();

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

    var diff = function (differ, a, b) {
        differ.diff(a);
        differ.diff(b);
        var alreadySet = [];
        var movedItems = [];
        // We first have to set the moved items to their correct positions.
        // Keep in mind that the track by function may not guarantee
        // that we haven't changed any of the items' props.
        differ.forEachMovedItem(function (record) {
            if (record.currentIndex === null) {
                return;
            }
            if (record.previousIndex === null) {
                return;
            }
            // We want to preserve the reference so that a default
            // track by function used by the CDK, for instance, can
            // recognize that this item's identity hasn't changed.
            // At the same time, since we don't have the guarantee
            // that we haven't already set the previousIndex while
            // iterating, we need to check that. If we have, we assign
            // this array item to a new object. We don't want to risk
            // changing the properties of an object we'll use in the future.
            if (!alreadySet[record.previousIndex]) {
                a[record.currentIndex] = a[record.previousIndex];
            }
            else {
                a[record.currentIndex] = {};
            }
            Object.keys(b[record.currentIndex]).forEach(function (prop) {
                // TypeScript's type inference didn't follow the check from above.
                if (record.currentIndex === null) {
                    return;
                }
                a[record.currentIndex][prop] = b[record.currentIndex][prop];
            });
            if (!alreadySet[record.previousIndex]) {
                // tslint:disable-next-line: no-non-null-assertion
                a[record.previousIndex] = null;
            }
            alreadySet[record.currentIndex] = true;
            movedItems.push(a[record.currentIndex]);
        });
        // Now we can set the new items and remove the deleted ones.
        var newItems = [];
        var removedItems = [];
        differ.forEachAddedItem(function (record) {
            if (record.currentIndex !== null && record.previousIndex === null) {
                a[record.currentIndex] = record.item;
                alreadySet[record.currentIndex] = true;
                newItems.push(record.item);
            }
        });
        differ.forEachRemovedItem(function (record) {
            if (record.previousIndex === null) {
                return;
            }
            if (record.currentIndex === null && !alreadySet[record.previousIndex]) {
                // tslint:disable-next-line: no-non-null-assertion
                a[record.previousIndex] = null;
            }
            removedItems.push(record.item);
        });
        for (var i = a.length - 1; i >= 0; i--) {
            if (a[i] === null) {
                a.splice(i, 1);
            }
        }
        return { newItems: newItems, removedItems: removedItems, movedItems: movedItems };
    };

    var arrayifyProps = function (props, parent) {
        if (parent === void 0) { parent = null; }
        return Object.keys(props)
            .map(function (name) { return ({ name: name, descriptor: props[name], parent: parent }); })
            .sort(function (a, b) {
            var parsedA = parseInt(a.name, 10);
            var parsedB = parseInt(b.name, 10);
            if (isNaN(parsedA) || isNaN(parsedB)) {
                return a.name > b.name ? 1 : -1;
            }
            return parsedA - parsedB;
        });
    };

    var trackBy$1 = function (_, item) {
        return "#" + item.prop.name + "#" + item.level;
    };
    var PropertyDataSource = /** @class */ (function (_super) {
        __extends(PropertyDataSource, _super);
        function PropertyDataSource(props, _treeFlattener, _treeControl, _entityPosition, _messageBus) {
            var _this = _super.call(this) || this;
            _this._treeFlattener = _treeFlattener;
            _this._treeControl = _treeControl;
            _this._entityPosition = _entityPosition;
            _this._messageBus = _messageBus;
            _this._data = new rxjs.BehaviorSubject([]);
            _this._subscriptions = [];
            _this._expandedData = new rxjs.BehaviorSubject([]);
            _this._differ = new i0.DefaultIterableDiffer(trackBy$1);
            _this._data.next(_this._treeFlattener.flattenNodes(arrayifyProps(props)));
            return _this;
        }
        Object.defineProperty(PropertyDataSource.prototype, "data", {
            get: function () {
                return this._data.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PropertyDataSource.prototype, "treeControl", {
            get: function () {
                return this._treeControl;
            },
            enumerable: false,
            configurable: true
        });
        PropertyDataSource.prototype.update = function (props) {
            var newData = this._treeFlattener.flattenNodes(arrayifyProps(props));
            diff(this._differ, this.data, newData);
            this._data.next(this.data);
        };
        PropertyDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            var changed = this._treeControl.expansionModel.changed;
            if (!changed) {
                throw new Error('Unable to subscribe to the expansion model change');
            }
            var s = changed.subscribe(function (change) {
                if (change.added) {
                    change.added.forEach(function (node) { return _this._toggleNode(node, true); });
                }
                if (change.removed) {
                    change.removed.reverse().forEach(function (node) { return _this._toggleNode(node, false); });
                }
            });
            this._subscriptions.push(s);
            var changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._data];
            return rxjs.merge.apply(void 0, __spreadArray([], __read(changes))).pipe(operators.map(function () {
                _this._expandedData.next(_this._treeFlattener.expandFlattenedNodes(_this.data, _this._treeControl));
                return _this._expandedData.value;
            }));
        };
        PropertyDataSource.prototype.disconnect = function () {
            this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
            this._subscriptions = [];
        };
        PropertyDataSource.prototype._toggleNode = function (node, expand) {
            var _this = this;
            var index = this.data.indexOf(node);
            // If we cannot find the current node, or the current node is not expandable
            // or...if it's expandable but it does have a value, or we're collapsing
            // we're not interested in fetching its children.
            if (index < 0 || !node.expandable || node.prop.descriptor.value || !expand) {
                return;
            }
            var parentPath = [];
            var current = node.prop;
            while (current) {
                parentPath.push(current.name);
                if (!current.parent) {
                    break;
                }
                current = current.parent;
            }
            parentPath = parentPath.reverse();
            this._messageBus.emit('getNestedProperties', [this._entityPosition, parentPath]);
            this._messageBus.once('nestedProperties', function (position, data, _path) {
                var _a;
                node.prop.descriptor.value = data.props;
                _this._treeControl.expand(node);
                var props = arrayifyProps(data.props, node.prop);
                var flatNodes = _this._treeFlattener.flattenNodes(props);
                flatNodes.forEach(function (f) { return (f.level += node.level + 1); });
                (_a = _this.data).splice.apply(_a, __spreadArray([index + 1, 0], __read(flatNodes)));
                _this._data.next(_this.data);
            });
        };
        return PropertyDataSource;
    }(collections.DataSource));

    var getExpandedDirectiveProperties = function (data) {
        var e_1, _a;
        var getChildren = function (prop) {
            if ((prop.type === i2.PropType.Object || prop.type === i2.PropType.Array) && prop.value) {
                return Object.keys(prop.value).map(function (k) {
                    return {
                        name: prop.type === i2.PropType.Array ? parseInt(k, 10) : k,
                        children: getChildren(prop.value[k]),
                    };
                });
            }
            return [];
        };
        var getExpandedProperties = function (props) {
            return Object.keys(props).map(function (name) {
                return {
                    name: name,
                    children: getChildren(props[name]),
                };
            });
        };
        var parents = {};
        try {
            for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var node = data_1_1.value;
                var prop = node.prop;
                while (prop.parent) {
                    prop = prop.parent;
                }
                parents[prop.name] = prop.descriptor;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return getExpandedProperties(parents);
    };

    var expandable$1 = function (prop) {
        if (!prop) {
            return false;
        }
        if (!prop.expandable) {
            return false;
        }
        return !(prop.type !== i2.PropType.Object && prop.type !== i2.PropType.Array);
    };
    var getDirectiveControls = function (dataSource) {
        var treeControl = dataSource.treeControl;
        return {
            dataSource: dataSource,
            treeControl: treeControl,
        };
    };
    var constructPathOfKeysToPropertyValue = function (nodePropToGetKeysFor, keys) {
        if (keys === void 0) { keys = []; }
        keys.unshift(nodePropToGetKeysFor.name);
        var parentNodeProp = nodePropToGetKeysFor.parent;
        if (parentNodeProp) {
            constructPathOfKeysToPropertyValue(parentNodeProp, keys);
        }
        return keys;
    };
    var DirectivePropertyResolver = /** @class */ (function () {
        function DirectivePropertyResolver(_messageBus, _props, _directivePosition) {
            var _this = this;
            this._messageBus = _messageBus;
            this._props = _props;
            this._directivePosition = _directivePosition;
            this._treeFlattener = new i2$1.MatTreeFlattener(function (node, level) {
                return {
                    expandable: expandable$1(node.descriptor),
                    prop: node,
                    level: level,
                };
            }, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return _this._getChildren(node); });
            this._treeControl = new tree.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this._initDataSources();
        }
        Object.defineProperty(DirectivePropertyResolver.prototype, "directiveInputControls", {
            get: function () {
                return getDirectiveControls(this._inputsDataSource);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectivePropertyResolver.prototype, "directiveOutputControls", {
            get: function () {
                return getDirectiveControls(this._outputsDataSource);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectivePropertyResolver.prototype, "directiveStateControls", {
            get: function () {
                return getDirectiveControls(this._stateDataSource);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectivePropertyResolver.prototype, "directiveProperties", {
            get: function () {
                return this._props.props;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectivePropertyResolver.prototype, "directivePosition", {
            get: function () {
                return this._directivePosition;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectivePropertyResolver.prototype, "directiveViewEncapsulation", {
            get: function () {
                var _a;
                return (_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.encapsulation;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectivePropertyResolver.prototype, "directiveHasOnPushStrategy", {
            get: function () {
                var _a;
                return (_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.onPush;
            },
            enumerable: false,
            configurable: true
        });
        DirectivePropertyResolver.prototype.getExpandedProperties = function () {
            return __spreadArray(__spreadArray(__spreadArray([], __read(getExpandedDirectiveProperties(this._inputsDataSource.data))), __read(getExpandedDirectiveProperties(this._outputsDataSource.data))), __read(getExpandedDirectiveProperties(this._stateDataSource.data)));
        };
        DirectivePropertyResolver.prototype.updateProperties = function (newProps) {
            this._props = newProps;
            var _c = this._classifyProperties(), inputProps = _c.inputProps, outputProps = _c.outputProps, stateProps = _c.stateProps;
            this._inputsDataSource.update(inputProps);
            this._outputsDataSource.update(outputProps);
            this._stateDataSource.update(stateProps);
        };
        DirectivePropertyResolver.prototype.updateValue = function (node, newValue) {
            var directiveId = this._directivePosition;
            var keyPath = constructPathOfKeysToPropertyValue(node.prop);
            this._messageBus.emit('updateState', [{ directiveId: directiveId, keyPath: keyPath, newValue: newValue }]);
            node.prop.descriptor.value = newValue;
        };
        DirectivePropertyResolver.prototype._getChildren = function (prop) {
            var descriptor = prop.descriptor;
            if ((descriptor.type === i2.PropType.Object || descriptor.type === i2.PropType.Array) &&
                !(descriptor.value instanceof rxjs.Observable)) {
                return arrayifyProps(descriptor.value || {}, prop);
            }
            else {
                console.error('Unexpected data type', descriptor, 'in property', prop);
            }
        };
        DirectivePropertyResolver.prototype._initDataSources = function () {
            var _c = this._classifyProperties(), inputProps = _c.inputProps, outputProps = _c.outputProps, stateProps = _c.stateProps;
            this._inputsDataSource = this._createDataSourceFromProps(inputProps);
            this._outputsDataSource = this._createDataSourceFromProps(outputProps);
            this._stateDataSource = this._createDataSourceFromProps(stateProps);
        };
        DirectivePropertyResolver.prototype._createDataSourceFromProps = function (props) {
            return new PropertyDataSource(props, this._treeFlattener, this._treeControl, this._directivePosition, this._messageBus);
        };
        DirectivePropertyResolver.prototype._classifyProperties = function () {
            var _this = this;
            var _a, _b;
            var inputLabels = new Set(Object.keys(((_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.inputs) || {}));
            var outputLabels = new Set(Object.keys(((_b = this._props.metadata) === null || _b === void 0 ? void 0 : _b.outputs) || {}));
            var inputProps = {};
            var outputProps = {};
            var stateProps = {};
            var propPointer;
            Object.keys(this.directiveProperties).forEach(function (propName) {
                propPointer = inputLabels.has(propName) ? inputProps : outputLabels.has(propName) ? outputProps : stateProps;
                propPointer[propName] = _this.directiveProperties[propName];
            });
            return {
                inputProps: inputProps,
                outputProps: outputProps,
                stateProps: stateProps,
            };
        };
        return DirectivePropertyResolver;
    }());

    var ElementPropertyResolver = /** @class */ (function () {
        function ElementPropertyResolver(_messageBus) {
            this._messageBus = _messageBus;
            this._directivePropertiesController = new Map();
        }
        ElementPropertyResolver.prototype.clearProperties = function () {
            this._directivePropertiesController = new Map();
        };
        ElementPropertyResolver.prototype.setProperties = function (indexedNode, data) {
            var _this = this;
            this._flushDeletedProperties(data);
            Object.keys(data).forEach(function (key) {
                var controller = _this._directivePropertiesController.get(key);
                if (controller) {
                    controller.updateProperties(data[key]);
                    return;
                }
                var position = {
                    element: indexedNode.position,
                    directive: undefined,
                };
                if (!indexedNode.component || indexedNode.component.name !== key) {
                    position.directive = indexedNode.directives.findIndex(function (d) { return d.name === key; });
                }
                _this._directivePropertiesController.set(key, new DirectivePropertyResolver(_this._messageBus, data[key], position));
            });
        };
        ElementPropertyResolver.prototype._flushDeletedProperties = function (data) {
            var e_1, _a;
            var currentProps = __spreadArray([], __read(this._directivePropertiesController.keys()));
            var incomingProps = new Set(Object.keys(data));
            try {
                for (var currentProps_1 = __values(currentProps), currentProps_1_1 = currentProps_1.next(); !currentProps_1_1.done; currentProps_1_1 = currentProps_1.next()) {
                    var prop = currentProps_1_1.value;
                    if (!incomingProps.has(prop)) {
                        this._directivePropertiesController.delete(prop);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (currentProps_1_1 && !currentProps_1_1.done && (_a = currentProps_1.return)) _a.call(currentProps_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        ElementPropertyResolver.prototype.getExpandedProperties = function () {
            var e_2, _a;
            var result = {};
            try {
                for (var _b = __values(this._directivePropertiesController), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 1), directive = _d[0];
                    var controller = this._directivePropertiesController.get(directive);
                    if (!controller) {
                        console.error('Unable to find nested properties controller for', directive);
                        continue;
                    }
                    result[directive] = controller.getExpandedProperties();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return result;
        };
        ElementPropertyResolver.prototype.getDirectiveController = function (directive) {
            return this._directivePropertiesController.get(directive);
        };
        return ElementPropertyResolver;
    }());
    ElementPropertyResolver.ɵfac = function ElementPropertyResolver_Factory(t) { return new (t || ElementPropertyResolver)(i0__namespace.ɵɵinject(i2__namespace.MessageBus)); };
    ElementPropertyResolver.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ElementPropertyResolver, factory: ElementPropertyResolver.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ElementPropertyResolver, [{
                type: i0.Injectable
            }], function () { return [{ type: i2__namespace.MessageBus }]; }, null);
    })();

    var indexTree = function (node, idx, parentPosition) {
        if (parentPosition === void 0) { parentPosition = []; }
        var position = parentPosition.concat([idx]);
        return {
            position: position,
            element: node.element,
            component: node.component,
            directives: node.directives.map(function (d, i) { return ({ name: d.name, id: d.id }); }),
            children: node.children.map(function (n, i) { return indexTree(n, i, position); }),
        };
    };
    var indexForest = function (forest) { return forest.map(function (n, i) { return indexTree(n, i); }); };

    var expandable = function (node) { return !!node.children && node.children.length > 0; };
    var trackBy = function (_, item) { return item.id + "#" + item.expandable; };
    var getId = function (node) {
        var prefix = '';
        if (node.component) {
            prefix = node.component.id.toString();
        }
        var dirIds = node.directives
            .map(function (d) { return d.id; })
            .sort(function (a, b) {
            return a - b;
        });
        return prefix + '-' + dirIds.join('-');
    };
    var ComponentDataSource = /** @class */ (function (_super) {
        __extends(ComponentDataSource, _super);
        function ComponentDataSource(_treeControl) {
            var _this = _super.call(this) || this;
            _this._treeControl = _treeControl;
            _this._differ = new i0.DefaultIterableDiffer(trackBy);
            _this._expandedData = new rxjs.BehaviorSubject([]);
            _this._flattenedData = new rxjs.BehaviorSubject([]);
            _this._nodeToFlat = new WeakMap();
            _this._treeFlattener = new i2$1.MatTreeFlattener(function (node, level) {
                if (_this._nodeToFlat.has(node)) {
                    return _this._nodeToFlat.get(node);
                }
                var flatNode = {
                    expandable: expandable(node),
                    id: getId(node),
                    // We can compare the nodes in the navigation functions above
                    // based on this identifier directly, since it's a reference type
                    // and the reference is preserved after transformation.
                    position: node.position,
                    name: node.component ? node.component.name : node.element,
                    directives: node.directives.map(function (d) { return d.name; }).join(', '),
                    original: node,
                    level: level,
                };
                _this._nodeToFlat.set(node, flatNode);
                return flatNode;
            }, function (node) { return (node ? node.level : -1); }, function (node) { return (node ? node.expandable : false); }, function (node) { return (node ? node.children : []); });
            return _this;
        }
        Object.defineProperty(ComponentDataSource.prototype, "data", {
            get: function () {
                return this._flattenedData.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ComponentDataSource.prototype, "expandedDataValues", {
            get: function () {
                return this._expandedData.value;
            },
            enumerable: false,
            configurable: true
        });
        ComponentDataSource.prototype.getFlatNodeFromIndexedNode = function (indexedNode) {
            return this._nodeToFlat.get(indexedNode);
        };
        ComponentDataSource.prototype.update = function (forest) {
            var _this = this;
            if (!forest) {
                return { newItems: [], movedItems: [], removedItems: [] };
            }
            var indexedForest = indexForest(forest);
            var flattenedCollection = this._treeFlattener.flattenNodes(indexedForest);
            this.data.forEach(function (i) { return (i.newItem = false); });
            var expandedNodes = {};
            this.data.forEach(function (item) {
                expandedNodes[item.id] = _this._treeControl.isExpanded(item);
            });
            var _a = diff(this._differ, this.data, flattenedCollection), newItems = _a.newItems, movedItems = _a.movedItems, removedItems = _a.removedItems;
            this._treeControl.dataNodes = this.data;
            this._flattenedData.next(this.data);
            movedItems.forEach(function (i) {
                _this._nodeToFlat.set(i.original, i);
                if (expandedNodes[i.id]) {
                    _this._treeControl.expand(i);
                }
            });
            newItems.forEach(function (i) { return (i.newItem = true); });
            removedItems.forEach(function (i) { return _this._nodeToFlat.delete(i.original); });
            return { newItems: newItems, movedItems: movedItems, removedItems: removedItems };
        };
        ComponentDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            var changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
            return rxjs.merge.apply(void 0, __spreadArray([], __read(changes))).pipe(operators.map(function () {
                _this._expandedData.next(_this._treeFlattener.expandFlattenedNodes(_this.data, _this._treeControl));
                return _this._expandedData.value;
            }));
        };
        ComponentDataSource.prototype.disconnect = function () { };
        return ComponentDataSource;
    }(collections.DataSource));

    var isChildOf = function (childPosition, parentPosition) {
        if (childPosition.length <= parentPosition.length) {
            return false;
        }
        for (var i = 0; i < parentPosition.length; i++) {
            if (childPosition[i] !== parentPosition[i]) {
                return false;
            }
        }
        return true;
    };
    var parentCollapsed = function (nodeIdx, all, treeControl) {
        var node = all[nodeIdx];
        for (var i = nodeIdx - 1; i >= 0; i--) {
            if (isChildOf(node.position, all[i].position) && !treeControl.isExpanded(all[i])) {
                return true;
            }
        }
        return false;
    };

    // This service is used to notify the CDK virtual scroll parents
    // when the tab has changed. Alternatively, we risk to have broken
    // layout since the virtual scroll is nested inside of a TabGroup
    // which doesn't have consistent dimensions when collapsed and expanded.
    var TabUpdate = /** @class */ (function () {
        function TabUpdate() {
            this._tabUpdate = new rxjs.Subject();
            this.tabUpdate$ = this._tabUpdate.asObservable().pipe(operators.share());
        }
        TabUpdate.prototype.notify = function () {
            this._tabUpdate.next();
        };
        return TabUpdate;
    }());

    function FilterComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 6);
            i0__namespace.ɵɵelementStart(1, "button", 7);
            i0__namespace.ɵɵlistener("click", function FilterComponent_div_6_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.emitPrevMatched(); });
            i0__namespace.ɵɵelementStart(2, "mat-icon", 8);
            i0__namespace.ɵɵtext(3, " expand_less ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "button", 7);
            i0__namespace.ɵɵlistener("click", function FilterComponent_div_6_Template_button_click_4_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.emitNextMatched(); });
            i0__namespace.ɵɵelementStart(5, "mat-icon", 9);
            i0__namespace.ɵɵtext(6, " expand_more ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    var FilterComponent = /** @class */ (function () {
        function FilterComponent() {
            this.filter = new i0.EventEmitter();
            this.nextMatched = new i0.EventEmitter();
            this.prevMatched = new i0.EventEmitter();
            this.hasMatched = false;
        }
        FilterComponent.prototype.emitFilter = function (event) {
            this.filter.emit(event.target.value);
        };
        FilterComponent.prototype.emitNextMatched = function () {
            this.nextMatched.emit();
        };
        FilterComponent.prototype.emitPrevMatched = function () {
            this.prevMatched.emit();
        };
        return FilterComponent;
    }());
    FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
    FilterComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng-filter"]], inputs: { hasMatched: "hasMatched" }, outputs: { filter: "filter", nextMatched: "nextMatched", prevMatched: "prevMatched" }, decls: 7, vars: 1, consts: [[1, "filter"], [1, "icon-outer"], ["color", "primary"], ["matInput", "", "placeholder", "Filter components", 1, "filter-input", 3, "input", "keydown.enter", "keydown.shift.enter"], ["filterInput", ""], ["class", "up-down-buttons", 4, "ngIf"], [1, "up-down-buttons"], ["mat-icon-button", "", 3, "click"], [1, "mat-icon-rtl-mirror"], [1, ""]], template: function FilterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "mat-icon", 2);
                i0__namespace.ɵɵtext(3, "search");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "input", 3, 4);
                i0__namespace.ɵɵlistener("input", function FilterComponent_Template_input_input_4_listener($event) { return ctx.emitFilter($event); })("keydown.enter", function FilterComponent_Template_input_keydown_enter_4_listener() { return ctx.emitNextMatched(); })("keydown.shift.enter", function FilterComponent_Template_input_keydown_shift_enter_4_listener() { return ctx.emitPrevMatched(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(6, FilterComponent_div_6_Template, 7, 0, "div", 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵproperty("ngIf", ctx.hasMatched);
            }
        }, directives: [i1__namespace.MatCard, i2__namespace$1.MatIcon, i1__namespace$1.NgIf, i3__namespace.MatButton], styles: [".filter[_ngcontent-%COMP%]{display:flex;padding:0;border-radius:0;box-shadow:none!important;border-bottom:1px solid rgba(0,0,0,.12)}.filter[_ngcontent-%COMP%]   .icon-outer[_ngcontent-%COMP%]{display:flex;align-items:center;padding-right:5px;margin-left:5px}.filter[_ngcontent-%COMP%]   .icon-outer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:16px;height:16px;margin:auto;opacity:.7}.filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]{border:none;border-left:1px solid rgba(0,0,0,.12);padding-left:5px;width:100%;font-size:11px;font-family:inherit;font-weight:inherit;height:30px;outline:none;color:rgba(0,0,0,.87)}.up-down-buttons[_ngcontent-%COMP%]{display:flex}.up-down-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:24px;height:24px}[_nghost-%COMP%]     .up-down-buttons .mat-icon-button{line-height:25px}[_nghost-%COMP%]     .up-down-buttons button mat-icon{opacity:.5}.dark-theme[_nghost-%COMP%]   .filter-input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filter-input[_ngcontent-%COMP%]{background-color:#202124;color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FilterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-filter',
                        templateUrl: './filter.component.html',
                        styleUrls: ['./filter.component.scss'],
                    }]
            }], null, { filter: [{
                    type: i0.Output
                }], nextMatched: [{
                    type: i0.Output
                }], prevMatched: [{
                    type: i0.Output
                }], hasMatched: [{
                    type: i0.Input
                }] });
    })();

    function DirectiveForestComponent_ng_container_2_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 8);
            i0__namespace.ɵɵlistener("click", function DirectiveForestComponent_ng_container_2_button_2_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r8_1); var node_r1 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.treeControl.toggle(node_r1); });
            i0__namespace.ɵɵelementStart(1, "mat-icon", 9);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r1 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("left", 15 * node_r1.level + "px");
            i0__namespace.ɵɵattribute("aria-label", "toggle " + node_r1.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r3.treeControl.isExpanded(node_r1) ? "expand_more" : "chevron_right", " ");
        }
    }
    function DirectiveForestComponent_ng_container_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span", 10);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r1 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1("[", node_r1.directives, "]");
        }
    }
    function DirectiveForestComponent_ng_container_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span", 11);
            i0__namespace.ɵɵtext(1, " == $ng0 ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    var _c0$8 = function (a0, a1, a2, a3) { return { matched: a0, selected: a1, highlighted: a2, "new-node": a3 }; };
    function DirectiveForestComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "div", 3);
            i0__namespace.ɵɵlistener("click", function DirectiveForestComponent_ng_container_2_Template_div_click_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r12_1); var node_r1 = restoredCtx.$implicit; var ctx_r11 = i0__namespace.ɵɵnextContext(); return ctx_r11.selectAndEnsureVisible(node_r1); })("dblclick", function DirectiveForestComponent_ng_container_2_Template_div_dblclick_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r12_1); var node_r1 = restoredCtx.$implicit; var ctx_r13 = i0__namespace.ɵɵnextContext(); return ctx_r13.handleSelectDomElement(node_r1); })("mouseenter", function DirectiveForestComponent_ng_container_2_Template_div_mouseenter_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r12_1); var node_r1 = restoredCtx.$implicit; var ctx_r14 = i0__namespace.ɵɵnextContext(); return ctx_r14.highlightNode(node_r1.position); })("mouseleave", function DirectiveForestComponent_ng_container_2_Template_div_mouseleave_1_listener() { i0__namespace.ɵɵrestoreView(_r12_1); var ctx_r15 = i0__namespace.ɵɵnextContext(); return ctx_r15.removeHighlight(); });
            i0__namespace.ɵɵtemplate(2, DirectiveForestComponent_ng_container_2_button_2_Template, 3, 4, "button", 4);
            i0__namespace.ɵɵelementStart(3, "span", 5);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(5, DirectiveForestComponent_ng_container_2_span_5_Template, 2, 1, "span", 6);
            i0__namespace.ɵɵtemplate(6, DirectiveForestComponent_ng_container_2_span_6_Template, 2, 0, "span", 7);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var node_r1 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵstyleProp("padding-left", 15 + 15 * node_r1.level + "px");
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction4(9, _c0$8, ctx_r0.isMatched(node_r1), ctx_r0.isSelected(node_r1), ctx_r0.isHighlighted(node_r1), node_r1.newItem));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", node_r1.expandable);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵclassProp("angular-element", ctx_r0.isElement(node_r1));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(node_r1.name);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", node_r1.directives);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isSelected(node_r1));
        }
    }
    var DirectiveForestComponent = /** @class */ (function () {
        function DirectiveForestComponent(_tabUpdate, _messageBus, _cdr) {
            this._tabUpdate = _tabUpdate;
            this._messageBus = _messageBus;
            this._cdr = _cdr;
            this.selectNode = new i0.EventEmitter();
            this.selectDomElement = new i0.EventEmitter();
            this.setParents = new i0.EventEmitter();
            this.highlightComponent = new i0.EventEmitter();
            this.removeComponentHighlight = new i0.EventEmitter();
            this.toggleInspector = new i0.EventEmitter();
            this.filterRegex = new RegExp('.^');
            this.currentlyMatchedIndex = -1;
            this.selectedNode = null;
            this._highlightIDinTreeFromElement = null;
            this.treeControl = new tree.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.dataSource = new ComponentDataSource(this.treeControl);
            this.itemHeight = 18;
            this._initialized = false;
        }
        Object.defineProperty(DirectiveForestComponent.prototype, "forest", {
            set: function (forest) {
                var result = this._updateForest(forest);
                var changed = result.movedItems.length || result.newItems.length || result.removedItems.length;
                if (this.currentSelectedElement && changed) {
                    this._reselectNodeOnUpdate();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DirectiveForestComponent.prototype, "highlightIDinTreeFromElement", {
            set: function (id) {
                this._highlightIDinTreeFromElement = id;
                this._cdr.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        DirectiveForestComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscribeToInspectorEvents();
            this._tabUpdateSubscription = this._tabUpdate.tabUpdate$.subscribe(function () {
                if (_this.viewport) {
                    setTimeout(function () {
                        _this.viewport.scrollToIndex(0);
                        _this.viewport.checkViewportSize();
                    });
                }
            });
        };
        DirectiveForestComponent.prototype.ngOnDestroy = function () {
            if (this._tabUpdateSubscription) {
                this._tabUpdateSubscription.unsubscribe();
            }
        };
        DirectiveForestComponent.prototype.subscribeToInspectorEvents = function () {
            var _this = this;
            this._messageBus.on('selectComponent', function (id) {
                _this.selectNodeByComponentId(id);
                _this.toggleInspector.emit();
            });
            this._messageBus.on('highlightComponent', function (id) {
                _this.highlightIDinTreeFromElement = id;
            });
            this._messageBus.on('removeComponentHighlight', function () {
                _this.highlightIDinTreeFromElement = null;
            });
        };
        DirectiveForestComponent.prototype.selectNodeByComponentId = function (id) {
            var foundNode = this.dataSource.data.find(function (node) { var _a; return ((_a = node.original.component) === null || _a === void 0 ? void 0 : _a.id) === id; });
            if (foundNode) {
                this.handleSelect(foundNode);
            }
        };
        DirectiveForestComponent.prototype.handleSelect = function (node) {
            this.currentlyMatchedIndex = this.dataSource.data.findIndex(function (matchedNode) { return matchedNode.id === node.id; });
            this.selectAndEnsureVisible(node);
        };
        DirectiveForestComponent.prototype.handleSelectDomElement = function (node) {
            this.selectDomElement.emit(node.original);
        };
        DirectiveForestComponent.prototype.selectAndEnsureVisible = function (node) {
            this.select(node);
            var scrollParent = this.viewport.elementRef.nativeElement;
            // The top most point we see an element
            var top = scrollParent.scrollTop;
            // That's the bottom most point we currently see an element.
            var parentHeight = scrollParent.offsetHeight;
            var bottom = top + parentHeight;
            var idx = this.dataSource.expandedDataValues.findIndex(function (el) { return el.id === node.id; });
            // The node might be hidden.
            if (idx < 0) {
                return;
            }
            var itemTop = idx * this.itemHeight;
            if (itemTop < top) {
                scrollParent.scrollTo({ top: itemTop });
            }
            else if (bottom < itemTop + this.itemHeight) {
                scrollParent.scrollTo({ top: itemTop - parentHeight + this.itemHeight });
            }
        };
        DirectiveForestComponent.prototype.select = function (node) {
            this.populateParents(node.position);
            this.selectNode.emit(node.original);
            this.selectedNode = node;
        };
        DirectiveForestComponent.prototype.clearSelectedNode = function () {
            this.selectNode.emit(null);
            this.selectedNode = null;
            this.parents = [];
            this.setParents.emit(null);
        };
        DirectiveForestComponent.prototype._reselectNodeOnUpdate = function () {
            var nodeThatStillExists = this.dataSource.getFlatNodeFromIndexedNode(this.currentSelectedElement);
            if (nodeThatStillExists) {
                this.select(nodeThatStillExists);
            }
            else {
                this.clearSelectedNode();
            }
        };
        DirectiveForestComponent.prototype._updateForest = function (forest) {
            var _this = this;
            var result = this.dataSource.update(forest);
            if (!this._initialized && forest && forest.length) {
                this.treeControl.expandAll();
                this._initialized = true;
                result.newItems.forEach(function (item) { return (item.newItem = false); });
            }
            // We want to expand them once they are rendered.
            result.newItems.forEach(function (item) {
                _this.treeControl.expand(item);
            });
            return result;
        };
        DirectiveForestComponent.prototype.populateParents = function (position) {
            var _this = this;
            this.parents = position.reduce(function (nodes, index) {
                var nodePosition = [index];
                if (nodes.length > 0) {
                    nodePosition = nodes[nodes.length - 1].position.concat(index);
                }
                // It's possible selectedNode to be undefined
                // In this case, we don't want to push it to the list
                // of parent nodes. Instead, we want to report a warning.
                var selectedNode = _this.dataSource.data.find(function (item) { return item.position.toString() === nodePosition.toString(); });
                if (selectedNode) {
                    nodes.push(selectedNode);
                }
                else {
                    console.warn('Cant find node for position', nodePosition);
                }
                return nodes;
            }, []);
            this.setParents.emit(this.parents);
        };
        DirectiveForestComponent.prototype.navigateUp = function (event) {
            var _this = this;
            if (this.isEditingDirectiveState(event)) {
                return;
            }
            event.preventDefault();
            var data = this.dataSource.expandedDataValues;
            var prevIdx = data.findIndex(function (e) { return _this.selectedNode && e.id === _this.selectedNode.id; }) - 1;
            if (prevIdx < 0) {
                return;
            }
            var prevNode = data[prevIdx];
            var currentNode = data[prevIdx + 1];
            if (prevNode.position.length <= currentNode.position.length) {
                return this.selectAndEnsureVisible(data[prevIdx]);
            }
            while (prevIdx >= 0 && parentCollapsed(prevIdx, data, this.treeControl)) {
                prevIdx--;
                prevNode = data[prevIdx];
            }
            this.selectAndEnsureVisible(data[prevIdx]);
        };
        DirectiveForestComponent.prototype.navigateDown = function (event) {
            var _this = this;
            if (this.isEditingDirectiveState(event)) {
                return;
            }
            event.preventDefault();
            var data = this.dataSource.expandedDataValues;
            var idx = data.findIndex(function (e) { return _this.selectedNode && e.id === _this.selectedNode.id; });
            var currentNode = data[idx];
            if (!this.treeControl.isExpanded(currentNode) && currentNode.expandable) {
                for (var i = idx + 1; i < data.length; i++) {
                    var node = data[i];
                    if (!isChildOf(node.position, currentNode.position)) {
                        idx = i;
                        break;
                    }
                }
            }
            else {
                idx++;
            }
            if (idx >= data.length) {
                return;
            }
            this.selectAndEnsureVisible(data[idx]);
        };
        DirectiveForestComponent.prototype.collapseCurrent = function (event) {
            if (this.isEditingDirectiveState(event)) {
                return;
            }
            if (!this.selectedNode) {
                return;
            }
            this.treeControl.collapse(this.selectedNode);
            event.preventDefault();
        };
        DirectiveForestComponent.prototype.expandCurrent = function (event) {
            if (this.isEditingDirectiveState(event)) {
                return;
            }
            if (!this.selectedNode) {
                return;
            }
            this.treeControl.expand(this.selectedNode);
            event.preventDefault();
        };
        DirectiveForestComponent.prototype.isEditingDirectiveState = function (event) {
            return event.target.tagName === 'INPUT' || !this.selectedNode;
        };
        DirectiveForestComponent.prototype.isSelected = function (node) {
            return !!this.selectedNode && this.selectedNode.id === node.id;
        };
        DirectiveForestComponent.prototype.isMatched = function (node) {
            return this.filterRegex.test(node.name.toLowerCase()) || this.filterRegex.test(node.directives.toLowerCase());
        };
        DirectiveForestComponent.prototype.handleFilter = function (filterText) {
            this.currentlyMatchedIndex = -1;
            try {
                this.filterRegex = new RegExp(filterText.toLowerCase() || '.^');
            }
            catch (_a) {
                this.filterRegex = new RegExp('.^');
            }
        };
        DirectiveForestComponent.prototype._findMatchedNodes = function () {
            var indexesOfMatchedNodes = [];
            for (var i = 0; i < this.dataSource.data.length; i++) {
                if (this.isMatched(this.dataSource.data[i])) {
                    indexesOfMatchedNodes.push(i);
                }
            }
            return indexesOfMatchedNodes;
        };
        Object.defineProperty(DirectiveForestComponent.prototype, "hasMatched", {
            get: function () {
                return this._findMatchedNodes().length > 0;
            },
            enumerable: false,
            configurable: true
        });
        DirectiveForestComponent.prototype.nextMatched = function () {
            var _this = this;
            var indexesOfMatchedNodes = this._findMatchedNodes();
            this.currentlyMatchedIndex = (this.currentlyMatchedIndex + 1) % indexesOfMatchedNodes.length;
            var indexToSelect = indexesOfMatchedNodes[this.currentlyMatchedIndex];
            var nodeToSelect = this.dataSource.data[indexToSelect];
            if (indexToSelect !== undefined) {
                this.treeControl.expand(nodeToSelect);
                this.selectAndEnsureVisible(nodeToSelect);
            }
            var nodeIsVisible = this.dataSource.expandedDataValues.find(function (node) { return node === nodeToSelect; });
            if (!nodeIsVisible) {
                this.parents.forEach(function (parent) { return _this.treeControl.expand(parent); });
            }
        };
        DirectiveForestComponent.prototype.prevMatched = function () {
            var _this = this;
            var indexesOfMatchedNodes = this._findMatchedNodes();
            this.currentlyMatchedIndex =
                (this.currentlyMatchedIndex - 1 + indexesOfMatchedNodes.length) % indexesOfMatchedNodes.length;
            var indexToSelect = indexesOfMatchedNodes[this.currentlyMatchedIndex];
            var nodeToSelect = this.dataSource.data[indexToSelect];
            if (indexToSelect !== undefined) {
                this.treeControl.expand(nodeToSelect);
                this.selectAndEnsureVisible(nodeToSelect);
            }
            var nodeIsVisible = this.dataSource.expandedDataValues.find(function (node) { return node === nodeToSelect; });
            if (!nodeIsVisible) {
                this.parents.forEach(function (parent) { return _this.treeControl.expand(parent); });
            }
        };
        DirectiveForestComponent.prototype.highlightNode = function (position) {
            this._highlightIDinTreeFromElement = null;
            this.highlightComponent.emit(position);
        };
        DirectiveForestComponent.prototype.removeHighlight = function () {
            this.removeComponentHighlight.emit();
        };
        DirectiveForestComponent.prototype.isHighlighted = function (node) {
            var _a;
            return !!this._highlightIDinTreeFromElement && this._highlightIDinTreeFromElement === ((_a = node.original.component) === null || _a === void 0 ? void 0 : _a.id);
        };
        DirectiveForestComponent.prototype.isElement = function (node) {
            return node.original.component && node.original.component.isElement;
        };
        return DirectiveForestComponent;
    }());
    DirectiveForestComponent.ɵfac = function DirectiveForestComponent_Factory(t) { return new (t || DirectiveForestComponent)(i0__namespace.ɵɵdirectiveInject(TabUpdate), i0__namespace.ɵɵdirectiveInject(i2__namespace.MessageBus), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    DirectiveForestComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DirectiveForestComponent, selectors: [["ng-directive-forest"]], viewQuery: function DirectiveForestComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(i4.CdkVirtualScrollViewport, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.viewport = _t.first);
            }
        }, hostBindings: function DirectiveForestComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("keydown.ArrowUp", function DirectiveForestComponent_keydown_ArrowUp_HostBindingHandler($event) { return ctx.navigateUp($event); }, false, i0__namespace.ɵɵresolveDocument)("keydown.ArrowDown", function DirectiveForestComponent_keydown_ArrowDown_HostBindingHandler($event) { return ctx.navigateDown($event); }, false, i0__namespace.ɵɵresolveDocument)("keydown.ArrowLeft", function DirectiveForestComponent_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.collapseCurrent($event); }, false, i0__namespace.ɵɵresolveDocument)("keydown.ArrowRight", function DirectiveForestComponent_keydown_ArrowRight_HostBindingHandler($event) { return ctx.expandCurrent($event); }, false, i0__namespace.ɵɵresolveDocument);
            }
        }, inputs: { forest: "forest", currentSelectedElement: "currentSelectedElement" }, outputs: { selectNode: "selectNode", selectDomElement: "selectDomElement", setParents: "setParents", highlightComponent: "highlightComponent", removeComponentHighlight: "removeComponentHighlight", toggleInspector: "toggleInspector" }, decls: 3, vars: 3, consts: [[3, "hasMatched", "filter", "nextMatched", "prevMatched"], [1, "tree-wrapper", 3, "itemSize"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "tree-node", 3, "ngClass", "click", "dblclick", "mouseenter", "mouseleave"], [3, "left", "click", 4, "ngIf"], [1, "element-name"], ["class", "dir-names", 4, "ngIf"], ["class", "console-reference", 4, "ngIf"], [3, "click"], [1, "mat-icon-rtl-mirror"], [1, "dir-names"], [1, "console-reference"]], template: function DirectiveForestComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "ng-filter", 0);
                i0__namespace.ɵɵlistener("filter", function DirectiveForestComponent_Template_ng_filter_filter_0_listener($event) { return ctx.handleFilter($event); })("nextMatched", function DirectiveForestComponent_Template_ng_filter_nextMatched_0_listener() { return ctx.nextMatched(); })("prevMatched", function DirectiveForestComponent_Template_ng_filter_prevMatched_0_listener() { return ctx.prevMatched(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(1, "cdk-virtual-scroll-viewport", 1);
                i0__namespace.ɵɵtemplate(2, DirectiveForestComponent_ng_container_2_Template, 7, 14, "ng-container", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("hasMatched", ctx.hasMatched);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("itemSize", ctx.itemHeight);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", ctx.dataSource);
            }
        }, directives: [FilterComponent, i4__namespace.CdkVirtualScrollViewport, i4__namespace.CdkFixedSizeVirtualScroll, i4__namespace.CdkVirtualForOf, i1__namespace$1.NgClass, i1__namespace$1.NgIf, i2__namespace$1.MatIcon], styles: ["[_nghost-%COMP%]{width:100%;height:100%;overflow:auto}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]{position:relative;color:#8a1882;cursor:default;font-family:Menlo,monospace;font-size:11px;line-height:18px;white-space:nowrap;text-overflow:ellipsis}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{outline:none;border:0;padding:0;position:absolute;background-color:transparent;top:2px}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:.8em;width:16px;height:13px;display:inline-block}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%]{color:#9b4807}[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .console-reference[_ngcontent-%COMP%]{color:#748591;padding-left:8px;font-style:italic}[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}[_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%]{background-color:#cfe8fc}@-webkit-keyframes appear{0%{background-color:transparent}50%{background-color:#cfe8fc}to{background-color:transparent}}@keyframes appear{0%{background-color:transparent}50%{background-color:#cfe8fc}to{background-color:transparent}}.new-node[_ngcontent-%COMP%]{-webkit-animation:appear 1.5s;animation:appear 1.5s}.filter[_ngcontent-%COMP%]{display:flex}.filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:auto 12px;opacity:.7}.filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]{border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);width:100%;font-size:2em;font-family:inherit;font-weight:inherit;line-height:1.4em;padding:12px 6px}.up-down-buttons[_ngcontent-%COMP%]{width:20%;display:flex}.tree-wrapper[_ngcontent-%COMP%]{overflow-y:auto;height:calc(100% - 33px)}.angular-element[_ngcontent-%COMP%]{content:\"\";color:#1b1aa5}.angular-element[_ngcontent-%COMP%]:before{content:\"<\"}.angular-element[_ngcontent-%COMP%]:after{content:\"/>\"}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]{color:#5cadd3}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#bcc5ce}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .dir-names[_ngcontent-%COMP%]{color:#91adcb}.dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .angular-element[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]   .angular-element[_ngcontent-%COMP%]{color:#dc8c61}.dark-theme[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .tree-node[_ngcontent-%COMP%]:hover{background-color:#262d36}.dark-theme[_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.highlighted[_ngcontent-%COMP%], .dark-theme[_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .tree-node.matched[_ngcontent-%COMP%]:hover, .dark-theme[_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .tree-node.selected[_ngcontent-%COMP%]{background-color:#073d69}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DirectiveForestComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-directive-forest',
                        templateUrl: './directive-forest.component.html',
                        styleUrls: ['./directive-forest.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: TabUpdate }, { type: i2__namespace.MessageBus }, { type: i0__namespace.ChangeDetectorRef }]; }, { forest: [{
                    type: i0.Input
                }], currentSelectedElement: [{
                    type: i0.Input
                }], selectNode: [{
                    type: i0.Output
                }], selectDomElement: [{
                    type: i0.Output
                }], setParents: [{
                    type: i0.Output
                }], highlightComponent: [{
                    type: i0.Output
                }], removeComponentHighlight: [{
                    type: i0.Output
                }], toggleInspector: [{
                    type: i0.Output
                }], viewport: [{
                    type: i0.ViewChild,
                    args: [i4.CdkVirtualScrollViewport]
                }], navigateUp: [{
                    type: i0.HostListener,
                    args: ['document:keydown.ArrowUp', ['$event']]
                }], navigateDown: [{
                    type: i0.HostListener,
                    args: ['document:keydown.ArrowDown', ['$event']]
                }], collapseCurrent: [{
                    type: i0.HostListener,
                    args: ['document:keydown.ArrowLeft', ['$event']]
                }], expandCurrent: [{
                    type: i0.HostListener,
                    args: ['document:keydown.ArrowRight', ['$event']]
                }] });
    })();

    var _c0$7 = ["breadcrumbs"];
    function BreadcrumbsComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 5);
            i0__namespace.ɵɵlistener("mouseover", function BreadcrumbsComponent_button_6_Template_button_mouseover_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var node_r2 = restoredCtx.$implicit; var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.mouseOverNode.emit(node_r2); })("mouseleave", function BreadcrumbsComponent_button_6_Template_button_mouseleave_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var node_r2 = restoredCtx.$implicit; var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.mouseLeaveNode.emit(node_r2); })("click", function BreadcrumbsComponent_button_6_Template_button_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var node_r2 = restoredCtx.$implicit; var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.handleSelect.emit(node_r2); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            var last_r3 = ctx.last;
            i0__namespace.ɵɵclassProp("selected", last_r3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", (node_r2.original.component == null ? null : node_r2.original.component.name) || node_r2.original.element, " ");
        }
    }
    var BreadcrumbsComponent = /** @class */ (function () {
        function BreadcrumbsComponent() {
            this.handleSelect = new i0.EventEmitter();
            this.mouseOverNode = new i0.EventEmitter();
            this.mouseLeaveNode = new i0.EventEmitter();
            this.showScrollLeftButton = false;
            this.showScrollRightButton = false;
            this.updateScrollButtonVisibility$ = new rxjs.Subject();
        }
        BreadcrumbsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.updateScrollButtonVisibility$.pipe(operators.debounceTime(100)).subscribe(function () { return _this.updateScrollButtonVisibility(); });
        };
        BreadcrumbsComponent.prototype.ngAfterViewInit = function () {
            this.updateScrollButtonVisibility$.next();
        };
        BreadcrumbsComponent.prototype.ngOnChanges = function () {
            this.updateScrollButtonVisibility$.next();
        };
        BreadcrumbsComponent.prototype.onResize = function () {
            this.updateScrollButtonVisibility$.next();
        };
        BreadcrumbsComponent.prototype.scroll = function (pixels) {
            this.breadcrumbsScrollContent.nativeElement.scrollLeft += pixels;
            this.updateScrollButtonVisibility$.next();
        };
        BreadcrumbsComponent.prototype.updateScrollButtonVisibility = function () {
            var _a = this.breadcrumbsScrollContent.nativeElement, clientWidth = _a.clientWidth, scrollWidth = _a.scrollWidth, scrollLeft = _a.scrollLeft;
            this.showScrollLeftButton = scrollLeft > 0;
            this.showScrollRightButton = scrollLeft + clientWidth < scrollWidth;
        };
        return BreadcrumbsComponent;
    }());
    BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
    BreadcrumbsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["ng-breadcrumbs"]], viewQuery: function BreadcrumbsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$7, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.breadcrumbsScrollContent = _t.first);
            }
        }, hostBindings: function BreadcrumbsComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("resize", function BreadcrumbsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0__namespace.ɵɵresolveWindow);
            }
        }, inputs: { parents: "parents" }, outputs: { handleSelect: "handleSelect", mouseOverNode: "mouseOverNode", mouseLeaveNode: "mouseLeaveNode" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 10, vars: 5, consts: [[1, "breadcrumb-card"], [1, "scroll-button", 3, "click"], [1, "breadcrumbs", 3, "scroll"], ["breadcrumbs", ""], ["mat-button", "", "color", "primary", 3, "selected", "mouseover", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "mouseover", "mouseleave", "click"]], template: function BreadcrumbsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵlistener("click", function BreadcrumbsComponent_Template_button_click_1_listener() { return ctx.scroll(-100); });
                i0__namespace.ɵɵelementStart(2, "mat-icon");
                i0__namespace.ɵɵtext(3, " more_horiz ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 2, 3);
                i0__namespace.ɵɵlistener("scroll", function BreadcrumbsComponent_Template_div_scroll_4_listener() { return ctx.updateScrollButtonVisibility$.next(); });
                i0__namespace.ɵɵtemplate(6, BreadcrumbsComponent_button_6_Template, 2, 3, "button", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "button", 1);
                i0__namespace.ɵɵlistener("click", function BreadcrumbsComponent_Template_button_click_7_listener() { return ctx.scroll(100); });
                i0__namespace.ɵɵelementStart(8, "mat-icon");
                i0__namespace.ɵɵtext(9, " more_horiz ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("hidden", !ctx.showScrollLeftButton);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngForOf", ctx.parents);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("hidden", !ctx.showScrollRightButton);
            }
        }, directives: [i1__namespace.MatCard, i2__namespace$1.MatIcon, i1__namespace$1.NgForOf, i3__namespace.MatButton], styles: [".mat-card.breadcrumb-card[_ngcontent-%COMP%]{padding:0;width:100%;height:24px;display:flex}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%]{height:100%;background-color:#f3f3f3;border:none;cursor:pointer}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button.hidden[_ngcontent-%COMP%]{visibility:hidden}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]{overflow-x:auto;white-space:nowrap;display:inline-block;width:calc(100% - 50px);height:100%;scroll-behavior:smooth}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background-color:#f3f3f3}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{height:20px;line-height:20px;font-size:11px;margin-right:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#8a1882}.mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .scroll-button[_ngcontent-%COMP%]{background-color:#292a2d;color:#fff}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]{background-color:#292a2d}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]{color:#5caace}.dark-theme[_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .mat-card.breadcrumb-card[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]:hover{background-color:#093e69}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BreadcrumbsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-breadcrumbs',
                        templateUrl: './breadcrumbs.component.html',
                        styleUrls: ['./breadcrumbs.component.scss'],
                    }]
            }], null, { parents: [{
                    type: i0.Input
                }], handleSelect: [{
                    type: i0.Output
                }], mouseOverNode: [{
                    type: i0.Output
                }], mouseLeaveNode: [{
                    type: i0.Output
                }], breadcrumbsScrollContent: [{
                    type: i0.ViewChild,
                    args: ['breadcrumbs']
                }], onResize: [{
                    type: i0.HostListener,
                    args: ['window:resize', ['$event']]
                }] });
    })();

    function getPointFromEvent(event) {
        // TouchEvent
        if (event.changedTouches !== undefined && event.changedTouches.length > 0) {
            return {
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY,
            };
        }
        // MouseEvent
        else if (event.clientX !== undefined && event.clientY !== undefined) {
            return {
                x: event.clientX,
                y: event.clientY,
            };
        }
        return null;
    }
    function getElementPixelSize(elRef, direction) {
        var rect = elRef.nativeElement.getBoundingClientRect();
        return direction === 'horizontal' ? rect.width : rect.height;
    }
    function getInputBoolean(v) {
        return typeof v === 'boolean' ? v : v === 'false' ? false : true;
    }
    function getInputPositiveNumber(v, defaultValue) {
        if (v === null || v === undefined)
            return defaultValue;
        v = Number(v);
        return !isNaN(v) && v >= 0 ? v : defaultValue;
    }
    function isUserSizesValid(unit, sizes) {
        // All sizes have to be not null and total should be 100
        if (unit === 'percent') {
            var total = sizes.reduce(function (total, s) { return (s !== null ? total + s : total); }, 0);
            return sizes.every(function (s) { return s !== null; }) && total > 99.9 && total < 100.1;
        }
        // A size at null is mandatory but only one.
        if (unit === 'pixel') {
            return sizes.filter(function (s) { return s === null; }).length === 1;
        }
    }
    function getAreaMinSize(a) {
        if (a.size === null) {
            return null;
        }
        if (a.component.lockSize === true) {
            return a.size;
        }
        if (a.component.minSize === null) {
            return null;
        }
        if (a.component.minSize > a.size) {
            return a.size;
        }
        return a.component.minSize;
    }
    function getAreaMaxSize(a) {
        if (a.size === null) {
            return null;
        }
        if (a.component.lockSize === true) {
            return a.size;
        }
        if (a.component.maxSize === null) {
            return null;
        }
        if (a.component.maxSize < a.size) {
            return a.size;
        }
        return a.component.maxSize;
    }
    function getGutterSideAbsorptionCapacity(unit, sideAreas, pixels, allAreasSizePixel) {
        return sideAreas.reduce(function (acc, area) {
            var res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
            acc.list.push(res);
            acc.remain = res.pixelRemain;
            return acc;
        }, { remain: pixels, list: [] });
    }
    function getAreaAbsorptionCapacity(unit, areaSnapshot, pixels, allAreasSizePixel) {
        // No pain no gain
        if (pixels === 0) {
            return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: 0,
                percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
                pixelRemain: 0,
            };
        }
        // Area start at zero and need to be reduced, not possible
        if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
            return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: 0,
                percentAfterAbsorption: 0,
                pixelRemain: pixels,
            };
        }
        if (unit === 'percent') {
            return getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel);
        }
        if (unit === 'pixel') {
            return getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, allAreasSizePixel);
        }
    }
    function getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel) {
        var tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
        var tempPercentSize = (tempPixelSize / allAreasSizePixel) * 100;
        // ENLARGE AREA
        if (pixels > 0) {
            // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
            if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
                // Use area.area.maxSize as newPercentSize and return calculate pixels remaining
                var maxSizePixel = (areaSnapshot.area.maxSize / 100) * allAreasSizePixel;
                return {
                    areaSnapshot: areaSnapshot,
                    pixelAbsorb: maxSizePixel,
                    percentAfterAbsorption: areaSnapshot.area.maxSize,
                    pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel,
                };
            }
            return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: pixels,
                percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
                pixelRemain: 0,
            };
        }
        // REDUCE AREA
        else if (pixels < 0) {
            // If minSize & newSize smaller than it > absorb to min and return remaining pixels
            if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
                // Use area.area.minSize as newPercentSize and return calculate pixels remaining
                var minSizePixel = (areaSnapshot.area.minSize / 100) * allAreasSizePixel;
                return {
                    areaSnapshot: areaSnapshot,
                    pixelAbsorb: minSizePixel,
                    percentAfterAbsorption: areaSnapshot.area.minSize,
                    pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel,
                };
            }
            // If reduced under zero > return remaining pixels
            else if (tempPercentSize < 0) {
                // Use 0 as newPercentSize and return calculate pixels remaining
                return {
                    areaSnapshot: areaSnapshot,
                    pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                    percentAfterAbsorption: 0,
                    pixelRemain: pixels + areaSnapshot.sizePixelAtStart,
                };
            }
            return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: pixels,
                percentAfterAbsorption: tempPercentSize,
                pixelRemain: 0,
            };
        }
    }
    function getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, containerSizePixel) {
        var tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
        // ENLARGE AREA
        if (pixels > 0) {
            // If maxSize & newSize bigger than it > absorb to max and return remaining pixels
            if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
                return {
                    areaSnapshot: areaSnapshot,
                    pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
                    percentAfterAbsorption: -1,
                    pixelRemain: tempPixelSize - areaSnapshot.area.maxSize,
                };
            }
            return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: pixels,
                percentAfterAbsorption: -1,
                pixelRemain: 0,
            };
        }
        // REDUCE AREA
        else if (pixels < 0) {
            // If minSize & newSize smaller than it > absorb to min and return remaining pixels
            if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
                return {
                    areaSnapshot: areaSnapshot,
                    pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
                    percentAfterAbsorption: -1,
                    pixelRemain: tempPixelSize - areaSnapshot.area.minSize,
                };
            }
            // If reduced under zero > return remaining pixels
            else if (tempPixelSize < 0) {
                return {
                    areaSnapshot: areaSnapshot,
                    pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                    percentAfterAbsorption: -1,
                    pixelRemain: pixels + areaSnapshot.sizePixelAtStart,
                };
            }
            return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: pixels,
                percentAfterAbsorption: -1,
                pixelRemain: 0,
            };
        }
    }
    function updateAreaSize(unit, item) {
        if (unit === 'percent') {
            item.areaSnapshot.area.size = item.percentAfterAbsorption;
        }
        else if (unit === 'pixel') {
            // Update size except for the wildcard size area
            if (item.areaSnapshot.area.size !== null) {
                item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
            }
        }
    }

    var _c0$6 = ["gutterEls"];
    function SplitComponent_ng_template_1_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 2, 3);
            i0__namespace.ɵɵlistener("mousedown", function SplitComponent_ng_template_1_div_0_Template_div_mousedown_0_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var index_r1 = i0__namespace.ɵɵnextContext().index; var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.startDragging($event, index_r1 * 2 + 1, index_r1 + 1); })("touchstart", function SplitComponent_ng_template_1_div_0_Template_div_touchstart_0_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var index_r1 = i0__namespace.ɵɵnextContext().index; var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.startDragging($event, index_r1 * 2 + 1, index_r1 + 1); })("mouseup", function SplitComponent_ng_template_1_div_0_Template_div_mouseup_0_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var index_r1 = i0__namespace.ɵɵnextContext().index; var ctx_r10 = i0__namespace.ɵɵnextContext(); return ctx_r10.clickGutter($event, index_r1 + 1); })("touchend", function SplitComponent_ng_template_1_div_0_Template_div_touchend_0_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var index_r1 = i0__namespace.ɵɵnextContext().index; var ctx_r12 = i0__namespace.ɵɵnextContext(); return ctx_r12.clickGutter($event, index_r1 + 1); });
            i0__namespace.ɵɵelement(2, "div", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var index_r1 = i0__namespace.ɵɵnextContext().index;
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("flex-basis", ctx_r3.gutterSize, "px")("order", index_r1 * 2 + 1);
        }
    }
    function SplitComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, SplitComponent_ng_template_1_div_0_Template, 3, 4, "div", 1);
        }
        if (rf & 2) {
            var last_r2 = ctx.last;
            i0__namespace.ɵɵproperty("ngIf", last_r2 === false);
        }
    }
    var _c1$2 = ["*"];
    /**
     * angular-split
     *
     *
     *  PERCENT MODE ([unit]="'percent'")
     *  ___________________________________________________________________________________________
     * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
     * |-------------------------------------------------------------------------------------------|
     * |       20                 30                 20                 15                 15      | <-- [size]="x"
     * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
     * |calc(20% - 8px)    calc(30% - 12px)   calc(20% - 8px)    calc(15% - 6px)    calc(15% - 6px)| <-- CSS flex-basis property (with flex-grow&shrink at 0)
     * |     152px              228px              152px              114px              114px     | <-- el.getBoundingClientRect().width
     * |___________________________________________________________________________________________|
     *                                                                                 800px         <-- el.getBoundingClientRect().width
     *  flex-basis = calc( { area.size }% - { area.size/100 * nbGutter*gutterSize }px );
     *
     *
     *  PIXEL MODE ([unit]="'pixel'")
     *  ___________________________________________________________________________________________
     * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
     * |-------------------------------------------------------------------------------------------|
     * |      100                250                 *                 150                100      | <-- [size]="y"
     * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
     * |   0 0 100px          0 0 250px           1 1 auto          0 0 150px          0 0 100px   | <-- CSS flex property (flex-grow/flex-shrink/flex-basis)
     * |     100px              250px              200px              150px              100px     | <-- el.getBoundingClientRect().width
     * |___________________________________________________________________________________________|
     *                                                                                 800px         <-- el.getBoundingClientRect().width
     *
     */
    var SplitComponent = /** @class */ (function () {
        function SplitComponent(ngZone, elRef, cdRef, renderer) {
            this.ngZone = ngZone;
            this.elRef = elRef;
            this.cdRef = cdRef;
            this.renderer = renderer;
            this._direction = 'horizontal';
            ////
            this._unit = 'percent';
            ////
            this._gutterSize = 11;
            ////
            this._gutterStep = 1;
            ////
            this._restrictMove = false;
            ////
            this._useTransition = false;
            ////
            this._disabled = false;
            ////
            this._dir = 'ltr';
            ////
            this._gutterDblClickDuration = 0;
            ////
            this.dragStart = new i0.EventEmitter(false);
            this.dragEnd = new i0.EventEmitter(false);
            this.gutterClick = new i0.EventEmitter(false);
            this.gutterDblClick = new i0.EventEmitter(false);
            this.dragProgressSubject = new rxjs.Subject();
            this.dragProgress$ = this.dragProgressSubject.asObservable();
            ////
            this.isDragging = false;
            this.dragListeners = [];
            this.snapshot = null;
            this.startPoint = null;
            this.endPoint = null;
            this.displayedAreas = [];
            this.hidedAreas = [];
            this._clickTimeout = null;
            // To force adding default class, could be override by user @Input() or not
            this.direction = this._direction;
        }
        Object.defineProperty(SplitComponent.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            set: function (v) {
                this._direction = v === 'vertical' ? 'vertical' : 'horizontal';
                this.renderer.addClass(this.elRef.nativeElement, "as-" + this._direction);
                this.renderer.removeClass(this.elRef.nativeElement, "as-" + (this._direction === 'vertical' ? 'horizontal' : 'vertical'));
                this.build(false, false);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "unit", {
            get: function () {
                return this._unit;
            },
            set: function (v) {
                this._unit = v === 'pixel' ? 'pixel' : 'percent';
                this.renderer.addClass(this.elRef.nativeElement, "as-" + this._unit);
                this.renderer.removeClass(this.elRef.nativeElement, "as-" + (this._unit === 'pixel' ? 'percent' : 'pixel'));
                this.build(false, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "gutterSize", {
            get: function () {
                return this._gutterSize;
            },
            set: function (v) {
                this._gutterSize = getInputPositiveNumber(v, 11);
                this.build(false, false);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "gutterStep", {
            get: function () {
                return this._gutterStep;
            },
            set: function (v) {
                this._gutterStep = getInputPositiveNumber(v, 1);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "restrictMove", {
            get: function () {
                return this._restrictMove;
            },
            set: function (v) {
                this._restrictMove = getInputBoolean(v);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "useTransition", {
            get: function () {
                return this._useTransition;
            },
            set: function (v) {
                this._useTransition = getInputBoolean(v);
                if (this._useTransition)
                    this.renderer.addClass(this.elRef.nativeElement, 'as-transition');
                else
                    this.renderer.removeClass(this.elRef.nativeElement, 'as-transition');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (v) {
                this._disabled = getInputBoolean(v);
                if (this._disabled)
                    this.renderer.addClass(this.elRef.nativeElement, 'as-disabled');
                else
                    this.renderer.removeClass(this.elRef.nativeElement, 'as-disabled');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "dir", {
            get: function () {
                return this._dir;
            },
            set: function (v) {
                this._dir = v === 'rtl' ? 'rtl' : 'ltr';
                this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "gutterDblClickDuration", {
            get: function () {
                return this._gutterDblClickDuration;
            },
            set: function (v) {
                this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitComponent.prototype, "transitionEnd", {
            get: function () {
                var _this = this;
                return new rxjs.Observable(function (subscriber) { return (_this.transitionEndSubscriber = subscriber); }).pipe(operators.debounceTime(20));
            },
            enumerable: false,
            configurable: true
        });
        SplitComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                // To avoid transition at first rendering
                setTimeout(function () { return _this.renderer.addClass(_this.elRef.nativeElement, 'as-init'); });
            });
        };
        SplitComponent.prototype.getNbGutters = function () {
            return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
        };
        SplitComponent.prototype.addArea = function (component) {
            var newArea = {
                component: component,
                order: 0,
                size: 0,
                minSize: null,
                maxSize: null,
            };
            if (component.visible === true) {
                this.displayedAreas.push(newArea);
                this.build(true, true);
            }
            else {
                this.hidedAreas.push(newArea);
            }
        };
        SplitComponent.prototype.removeArea = function (component) {
            if (this.displayedAreas.some(function (a) { return a.component === component; })) {
                var area = this.displayedAreas.find(function (a) { return a.component === component; });
                this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
                this.build(true, true);
            }
            else if (this.hidedAreas.some(function (a) { return a.component === component; })) {
                var area = this.hidedAreas.find(function (a) { return a.component === component; });
                this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
            }
        };
        SplitComponent.prototype.updateArea = function (component, resetOrders, resetSizes) {
            if (component.visible === true) {
                this.build(resetOrders, resetSizes);
            }
        };
        SplitComponent.prototype.showArea = function (component) {
            var _a;
            var area = this.hidedAreas.find(function (a) { return a.component === component; });
            if (area === undefined) {
                return;
            }
            var areas = this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);
            (_a = this.displayedAreas).push.apply(_a, __spreadArray([], __read(areas)));
            this.build(true, true);
        };
        SplitComponent.prototype.hideArea = function (comp) {
            var _a;
            var area = this.displayedAreas.find(function (a) { return a.component === comp; });
            if (area === undefined) {
                return;
            }
            var areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
            areas.forEach(function (area) {
                area.order = 0;
                area.size = 0;
            });
            (_a = this.hidedAreas).push.apply(_a, __spreadArray([], __read(areas)));
            this.build(true, true);
        };
        SplitComponent.prototype.getVisibleAreaSizes = function () {
            return this.displayedAreas.map(function (a) { return (a.size === null ? '*' : a.size); });
        };
        SplitComponent.prototype.setVisibleAreaSizes = function (sizes) {
            if (sizes.length !== this.displayedAreas.length) {
                return false;
            }
            var formatedSizes = sizes.map(function (s) { return getInputPositiveNumber(s, null); });
            var isValid = isUserSizesValid(this.unit, formatedSizes);
            if (isValid === false) {
                return false;
            }
            // @ts-ignore
            this.displayedAreas.forEach(function (area, i) { return (area.component._size = formatedSizes[i]); });
            this.build(false, true);
            return true;
        };
        SplitComponent.prototype.build = function (resetOrders, resetSizes) {
            this.stopDragging();
            // ¤ AREAS ORDER
            if (resetOrders === true) {
                // If user provided 'order' for each area, use it to sort them.
                if (this.displayedAreas.every(function (a) { return a.component.order !== null; })) {
                    this.displayedAreas.sort(function (a, b) { return a.component.order - b.component.order; });
                }
                // Then set real order with multiples of 2, numbers between will be used by gutters.
                this.displayedAreas.forEach(function (area, i) {
                    area.order = i * 2;
                    area.component.setStyleOrder(area.order);
                });
            }
            // ¤ AREAS SIZE
            if (resetSizes === true) {
                var useUserSizes_1 = isUserSizesValid(this.unit, this.displayedAreas.map(function (a) { return a.component.size; }));
                switch (this.unit) {
                    case 'percent': {
                        var defaultSize_1 = 100 / this.displayedAreas.length;
                        this.displayedAreas.forEach(function (area) {
                            area.size = useUserSizes_1 ? area.component.size : defaultSize_1;
                            area.minSize = getAreaMinSize(area);
                            area.maxSize = getAreaMaxSize(area);
                        });
                        break;
                    }
                    case 'pixel': {
                        if (useUserSizes_1) {
                            this.displayedAreas.forEach(function (area) {
                                area.size = area.component.size;
                                area.minSize = getAreaMinSize(area);
                                area.maxSize = getAreaMaxSize(area);
                            });
                        }
                        else {
                            var wildcardSizeAreas = this.displayedAreas.filter(function (a) { return a.component.size === null; });
                            // No wildcard area > Need to select one arbitrarily > first
                            if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
                                this.displayedAreas.forEach(function (area, i) {
                                    area.size = i === 0 ? null : area.component.size;
                                    area.minSize = i === 0 ? null : getAreaMinSize(area);
                                    area.maxSize = i === 0 ? null : getAreaMaxSize(area);
                                });
                            }
                            // More than one wildcard area > Need to keep only one arbitrarly > first
                            else if (wildcardSizeAreas.length > 1) {
                                var alreadyGotOne_1 = false;
                                this.displayedAreas.forEach(function (area) {
                                    if (area.component.size === null) {
                                        if (alreadyGotOne_1 === false) {
                                            area.size = null;
                                            area.minSize = null;
                                            area.maxSize = null;
                                            alreadyGotOne_1 = true;
                                        }
                                        else {
                                            area.size = 100;
                                            area.minSize = null;
                                            area.maxSize = null;
                                        }
                                    }
                                    else {
                                        area.size = area.component.size;
                                        area.minSize = getAreaMinSize(area);
                                        area.maxSize = getAreaMaxSize(area);
                                    }
                                });
                            }
                        }
                        break;
                    }
                }
            }
            this.refreshStyleSizes();
            this.cdRef.markForCheck();
        };
        SplitComponent.prototype.refreshStyleSizes = function () {
            var _this = this;
            ///////////////////////////////////////////
            // PERCENT MODE
            if (this.unit === 'percent') {
                // Only one area > flex-basis 100%
                if (this.displayedAreas.length === 1) {
                    this.displayedAreas[0].component.setStyleFlex(0, 0, "100%", false, false);
                }
                // Multiple areas > use each percent basis
                else {
                    var sumGutterSize_1 = this.getNbGutters() * this.gutterSize;
                    this.displayedAreas.forEach(function (area) {
                        area.component.setStyleFlex(0, 0, "calc( " + area.size + "% - " + (area.size / 100) * sumGutterSize_1 + "px )", area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                    });
                }
            }
            ///////////////////////////////////////////
            // PIXEL MODE
            else if (this.unit === 'pixel') {
                this.displayedAreas.forEach(function (area) {
                    // Area with wildcard size
                    if (area.size === null) {
                        if (_this.displayedAreas.length === 1) {
                            area.component.setStyleFlex(1, 1, "100%", false, false);
                        }
                        else {
                            area.component.setStyleFlex(1, 1, "auto", false, false);
                        }
                    }
                    // Area with pixel size
                    else {
                        // Only one area > flex-basis 100%
                        if (_this.displayedAreas.length === 1) {
                            area.component.setStyleFlex(0, 0, "100%", false, false);
                        }
                        // Multiple areas > use each pixel basis
                        else {
                            area.component.setStyleFlex(0, 0, area.size + "px", area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                        }
                    }
                });
            }
        };
        SplitComponent.prototype.clickGutter = function (event, gutterNum) {
            var _this = this;
            var tempPoint = getPointFromEvent(event);
            // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick
            if (this.startPoint && this.startPoint.x === tempPoint.x && this.startPoint.y === tempPoint.y) {
                // If timeout in progress and new click > clearTimeout & dblClickEvent
                if (this._clickTimeout !== null) {
                    window.clearTimeout(this._clickTimeout);
                    this._clickTimeout = null;
                    this.notify('dblclick', gutterNum);
                    this.stopDragging();
                }
                // Else start timeout to call clickEvent at end
                else {
                    this._clickTimeout = window.setTimeout(function () {
                        _this._clickTimeout = null;
                        _this.notify('click', gutterNum);
                        _this.stopDragging();
                    }, this.gutterDblClickDuration);
                }
            }
        };
        SplitComponent.prototype.startDragging = function (event, gutterOrder, gutterNum) {
            var _this = this;
            event.preventDefault();
            event.stopPropagation();
            this.startPoint = getPointFromEvent(event);
            if (this.startPoint === null || this.disabled === true) {
                return;
            }
            this.snapshot = {
                gutterNum: gutterNum,
                lastSteppedOffset: 0,
                allAreasSizePixel: getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
                allInvolvedAreasSizePercent: 100,
                areasBeforeGutter: [],
                areasAfterGutter: [],
            };
            this.displayedAreas.forEach(function (area) {
                var areaSnapshot = {
                    area: area,
                    sizePixelAtStart: getElementPixelSize(area.component.elRef, _this.direction),
                    sizePercentAtStart: (_this.unit === 'percent' ? area.size : -1), // If pixel mode, anyway, will not be used.
                };
                if (area.order < gutterOrder) {
                    if (_this.restrictMove === true) {
                        _this.snapshot.areasBeforeGutter = [areaSnapshot];
                    }
                    else {
                        _this.snapshot.areasBeforeGutter.unshift(areaSnapshot);
                    }
                }
                else if (area.order > gutterOrder) {
                    if (_this.restrictMove === true) {
                        if (_this.snapshot.areasAfterGutter.length === 0)
                            _this.snapshot.areasAfterGutter = [areaSnapshot];
                    }
                    else {
                        _this.snapshot.areasAfterGutter.push(areaSnapshot);
                    }
                }
            });
            this.snapshot.allInvolvedAreasSizePercent = __spreadArray(__spreadArray([], __read(this.snapshot.areasBeforeGutter)), __read(this.snapshot.areasAfterGutter)).reduce(function (t, a) { return t + a.sizePercentAtStart; }, 0);
            if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
                return;
            }
            this.dragListeners.push(this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this)));
            this.dragListeners.push(this.renderer.listen('document', 'touchend', this.stopDragging.bind(this)));
            this.dragListeners.push(this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this)));
            this.ngZone.runOutsideAngular(function () {
                _this.dragListeners.push(_this.renderer.listen('document', 'mousemove', _this.dragEvent.bind(_this)));
                _this.dragListeners.push(_this.renderer.listen('document', 'touchmove', _this.dragEvent.bind(_this)));
            });
            this.displayedAreas.forEach(function (area) { return area.component.lockEvents(); });
            this.isDragging = true;
            this.renderer.addClass(this.elRef.nativeElement, 'as-dragging');
            this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
            this.notify('start', this.snapshot.gutterNum);
        };
        SplitComponent.prototype.dragEvent = function (event) {
            var _this = this;
            event.preventDefault();
            event.stopPropagation();
            if (this._clickTimeout !== null) {
                window.clearTimeout(this._clickTimeout);
                this._clickTimeout = null;
            }
            if (this.isDragging === false) {
                return;
            }
            this.endPoint = getPointFromEvent(event);
            if (this.endPoint === null) {
                return;
            }
            // Calculate steppedOffset
            var offset = this.direction === 'horizontal' ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;
            if (this.dir === 'rtl') {
                offset = -offset;
            }
            var steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;
            if (steppedOffset === this.snapshot.lastSteppedOffset) {
                return;
            }
            this.snapshot.lastSteppedOffset = steppedOffset;
            // Need to know if each gutter side areas could reacts to steppedOffset
            var areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
            var areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel);
            // Each gutter side areas can't absorb all offset
            if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
                if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) {
                }
                else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
                    areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
                }
                else {
                    areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
                }
            }
            // Areas before gutter can't absorbs all offset > need to recalculate sizes for areas after gutter.
            else if (areasBefore.remain !== 0) {
                areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
            }
            // Areas after gutter can't absorbs all offset > need to recalculate sizes for areas before gutter.
            else if (areasAfter.remain !== 0) {
                areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
            }
            if (this.unit === 'percent') {
                // Hack because of browser messing up with sizes using calc(X% - Ypx) -> el.getBoundingClientRect()
                // If not there, playing with gutters makes total going down to 99.99875% then 99.99286%, 99.98986%,..
                var all = __spreadArray(__spreadArray([], __read(areasBefore.list)), __read(areasAfter.list));
                var areaToReset_1 = all.find(function (a) { return a.percentAfterAbsorption !== 0 &&
                    a.percentAfterAbsorption !== a.areaSnapshot.area.minSize &&
                    a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize; });
                if (areaToReset_1) {
                    areaToReset_1.percentAfterAbsorption =
                        this.snapshot.allInvolvedAreasSizePercent -
                            all.filter(function (a) { return a !== areaToReset_1; }).reduce(function (total, a) { return total + a.percentAfterAbsorption; }, 0);
                }
            }
            // Now we know areas could absorb steppedOffset, time to really update sizes
            areasBefore.list.forEach(function (item) { return updateAreaSize(_this.unit, item); });
            areasAfter.list.forEach(function (item) { return updateAreaSize(_this.unit, item); });
            this.refreshStyleSizes();
            this.notify('progress', this.snapshot.gutterNum);
        };
        SplitComponent.prototype.stopDragging = function (event) {
            var _this = this;
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isDragging === false) {
                return;
            }
            this.displayedAreas.forEach(function (area) { return area.component.unlockEvents(); });
            while (this.dragListeners.length > 0) {
                var fct = this.dragListeners.pop();
                if (fct)
                    fct();
            }
            // Warning: Have to be before "notify('end')"
            // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"
            this.isDragging = false;
            // If moved from starting point, notify end
            if (this.endPoint && (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y)) {
                this.notify('end', this.snapshot.gutterNum);
            }
            this.renderer.removeClass(this.elRef.nativeElement, 'as-dragging');
            this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
            this.snapshot = null;
            // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not
            this.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.startPoint = null;
                    _this.endPoint = null;
                });
            });
        };
        SplitComponent.prototype.notify = function (type, gutterNum) {
            var _this = this;
            var sizes = this.getVisibleAreaSizes();
            if (type === 'start') {
                this.dragStart.emit({ gutterNum: gutterNum, sizes: sizes });
            }
            else if (type === 'end') {
                this.dragEnd.emit({ gutterNum: gutterNum, sizes: sizes });
            }
            else if (type === 'click') {
                this.gutterClick.emit({ gutterNum: gutterNum, sizes: sizes });
            }
            else if (type === 'dblclick') {
                this.gutterDblClick.emit({ gutterNum: gutterNum, sizes: sizes });
            }
            else if (type === 'transitionEnd') {
                if (this.transitionEndSubscriber) {
                    this.ngZone.run(function () { return _this.transitionEndSubscriber.next(sizes); });
                }
            }
            else if (type === 'progress') {
                // Stay outside zone to allow users do what they want about change detection mechanism.
                this.dragProgressSubject.next({ gutterNum: gutterNum, sizes: sizes });
            }
        };
        SplitComponent.prototype.ngOnDestroy = function () {
            this.stopDragging();
        };
        return SplitComponent;
    }());
    SplitComponent.ɵfac = function SplitComponent_Factory(t) { return new (t || SplitComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2)); };
    SplitComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SplitComponent, selectors: [["as-split"]], viewQuery: function SplitComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$6, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.gutterEls = _t);
            }
        }, inputs: { direction: "direction", unit: "unit", gutterSize: "gutterSize", gutterStep: "gutterStep", restrictMove: "restrictMove", useTransition: "useTransition", disabled: "disabled", dir: "dir", gutterDblClickDuration: "gutterDblClickDuration" }, outputs: { dragStart: "dragStart", dragEnd: "dragEnd", gutterClick: "gutterClick", gutterDblClick: "gutterDblClick", transitionEnd: "transitionEnd" }, exportAs: ["asSplit"], ngContentSelectors: _c1$2, decls: 2, vars: 1, consts: [["ngFor", "", 3, "ngForOf"], ["class", "as-split-gutter", 3, "flex-basis", "order", "mousedown", "touchstart", "mouseup", "touchend", 4, "ngIf"], [1, "as-split-gutter", 3, "mousedown", "touchstart", "mouseup", "touchend"], ["gutterEls", ""], [1, "as-split-gutter-icon"]], template: function SplitComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵprojection(0);
                i0__namespace.ɵɵtemplate(1, SplitComponent_ng_template_1_Template, 1, 1, "ng-template", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.displayedAreas);
            }
        }, directives: [i1__namespace$1.NgForOf, i1__namespace$1.NgIf], styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;background-color:transparent}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:50%;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:hidden}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0!important;overflow-x:hidden;overflow-y:hidden}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:ew-resize;height:100%;position:relative;left:5px}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\")}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:last-of-type){margin-right:-9px}.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-left:1px solid #eee}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:ns-resize;width:100%;position:relative;top:5px}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC\")}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:last-of-type){margin-bottom:-9px}.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-top:1px solid #eee}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area, .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%]{transition:flex-basis .3s}.dark-theme.as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type), .dark-theme   .as-horizontal[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-left:1px solid #3f3f3f}.dark-theme.as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type), .dark-theme   .as-vertical[_nghost-%COMP%]    >.as-split-area:not(:first-of-type){border-top:1px solid #3f3f3f}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SplitComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'as-split',
                        exportAs: 'asSplit',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styleUrls: ["./split.component.scss"],
                        template: " <ng-content></ng-content>\n    <ng-template ngFor [ngForOf]=\"displayedAreas\" let-index=\"index\" let-last=\"last\">\n      <div\n        *ngIf=\"last === false\"\n        #gutterEls\n        class=\"as-split-gutter\"\n        [style.flex-basis.px]=\"gutterSize\"\n        [style.order]=\"index * 2 + 1\"\n        (mousedown)=\"startDragging($event, index * 2 + 1, index + 1)\"\n        (touchstart)=\"startDragging($event, index * 2 + 1, index + 1)\"\n        (mouseup)=\"clickGutter($event, index + 1)\"\n        (touchend)=\"clickGutter($event, index + 1)\"\n      >\n        <div class=\"as-split-gutter-icon\"></div>\n      </div>\n    </ng-template>",
                    }]
            }], function () { return [{ type: i0__namespace.NgZone }, { type: i0__namespace.ElementRef }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.Renderer2 }]; }, { direction: [{
                    type: i0.Input
                }], unit: [{
                    type: i0.Input
                }], gutterSize: [{
                    type: i0.Input
                }], gutterStep: [{
                    type: i0.Input
                }], restrictMove: [{
                    type: i0.Input
                }], useTransition: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], dir: [{
                    type: i0.Input
                }], gutterDblClickDuration: [{
                    type: i0.Input
                }], dragStart: [{
                    type: i0.Output
                }], dragEnd: [{
                    type: i0.Output
                }], gutterClick: [{
                    type: i0.Output
                }], gutterDblClick: [{
                    type: i0.Output
                }], transitionEnd: [{
                    type: i0.Output
                }], gutterEls: [{
                    type: i0.ViewChildren,
                    args: ['gutterEls']
                }] });
    })();

    // tslint:disable
    var SplitAreaDirective = /** @class */ (function () {
        function SplitAreaDirective(ngZone, elRef, renderer, split) {
            this.ngZone = ngZone;
            this.elRef = elRef;
            this.renderer = renderer;
            this.split = split;
            this._order = null;
            ////
            this._size = null;
            ////
            this._minSize = null;
            ////
            this._maxSize = null;
            ////
            this._lockSize = false;
            ////
            this._visible = true;
            this.lockListeners = [];
            this.renderer.addClass(this.elRef.nativeElement, 'as-split-area');
        }
        Object.defineProperty(SplitAreaDirective.prototype, "order", {
            get: function () {
                return this._order;
            },
            set: function (v) {
                this._order = getInputPositiveNumber(v, null);
                this.split.updateArea(this, true, false);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitAreaDirective.prototype, "size", {
            get: function () {
                return this._size;
            },
            set: function (v) {
                this._size = getInputPositiveNumber(v, null);
                this.split.updateArea(this, false, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitAreaDirective.prototype, "minSize", {
            get: function () {
                return this._minSize;
            },
            set: function (v) {
                this._minSize = getInputPositiveNumber(v, null);
                this.split.updateArea(this, false, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitAreaDirective.prototype, "maxSize", {
            get: function () {
                return this._maxSize;
            },
            set: function (v) {
                this._maxSize = getInputPositiveNumber(v, null);
                this.split.updateArea(this, false, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitAreaDirective.prototype, "lockSize", {
            get: function () {
                return this._lockSize;
            },
            set: function (v) {
                this._lockSize = getInputBoolean(v);
                this.split.updateArea(this, false, true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SplitAreaDirective.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (v) {
                this._visible = getInputBoolean(v);
                if (this._visible) {
                    this.split.showArea(this);
                    this.renderer.removeClass(this.elRef.nativeElement, 'as-hidden');
                }
                else {
                    this.split.hideArea(this);
                    this.renderer.addClass(this.elRef.nativeElement, 'as-hidden');
                }
            },
            enumerable: false,
            configurable: true
        });
        SplitAreaDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.split.addArea(this);
            this.ngZone.runOutsideAngular(function () {
                _this.transitionListener = _this.renderer.listen(_this.elRef.nativeElement, 'transitionend', function (event) {
                    // Limit only flex-basis transition to trigger the event
                    if (event.propertyName === 'flex-basis') {
                        _this.split.notify('transitionEnd', -1);
                    }
                });
            });
        };
        SplitAreaDirective.prototype.setStyleOrder = function (value) {
            this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
        };
        SplitAreaDirective.prototype.setStyleFlex = function (grow, shrink, basis, isMin, isMax) {
            // Need 3 separated properties to work on IE11 (https://github.com/angular/flex-layout/issues/323)
            this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', grow);
            this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', shrink);
            this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', basis);
            if (isMin === true)
                this.renderer.addClass(this.elRef.nativeElement, 'as-min');
            else
                this.renderer.removeClass(this.elRef.nativeElement, 'as-min');
            if (isMax === true)
                this.renderer.addClass(this.elRef.nativeElement, 'as-max');
            else
                this.renderer.removeClass(this.elRef.nativeElement, 'as-max');
        };
        SplitAreaDirective.prototype.lockEvents = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                _this.lockListeners.push(_this.renderer.listen(_this.elRef.nativeElement, 'selectstart', function (e) { return false; }));
                _this.lockListeners.push(_this.renderer.listen(_this.elRef.nativeElement, 'dragstart', function (e) { return false; }));
            });
        };
        SplitAreaDirective.prototype.unlockEvents = function () {
            while (this.lockListeners.length > 0) {
                var fct = this.lockListeners.pop();
                if (fct)
                    fct();
            }
        };
        SplitAreaDirective.prototype.ngOnDestroy = function () {
            this.unlockEvents();
            if (this.transitionListener) {
                this.transitionListener();
            }
            this.split.removeArea(this);
        };
        return SplitAreaDirective;
    }());
    SplitAreaDirective.ɵfac = function SplitAreaDirective_Factory(t) { return new (t || SplitAreaDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.Renderer2), i0__namespace.ɵɵdirectiveInject(SplitComponent)); };
    SplitAreaDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: SplitAreaDirective, selectors: [["as-split-area"], ["", "as-split-area", ""]], inputs: { order: "order", size: "size", minSize: "minSize", maxSize: "maxSize", lockSize: "lockSize", visible: "visible" }, exportAs: ["asSplitArea"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SplitAreaDirective, [{
                type: i0.Directive,
                args: [{
                        selector: 'as-split-area, [as-split-area]',
                        exportAs: 'asSplitArea',
                    }]
            }], function () { return [{ type: i0__namespace.NgZone }, { type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }, { type: SplitComponent }]; }, { order: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], minSize: [{
                    type: i0.Input
                }], maxSize: [{
                    type: i0.Input
                }], lockSize: [{
                    type: i0.Input
                }], visible: [{
                    type: i0.Input
                }] });
    })();

    // tslint:disable
    var AngularSplitModule = /** @class */ (function () {
        function AngularSplitModule() {
        }
        AngularSplitModule.forRoot = function () {
            return {
                ngModule: AngularSplitModule,
                providers: [],
            };
        };
        AngularSplitModule.forChild = function () {
            return {
                ngModule: AngularSplitModule,
                providers: [],
            };
        };
        return AngularSplitModule;
    }());
    AngularSplitModule.ɵfac = function AngularSplitModule_Factory(t) { return new (t || AngularSplitModule)(); };
    AngularSplitModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: AngularSplitModule });
    AngularSplitModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AngularSplitModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule],
                        declarations: [SplitComponent, SplitAreaDirective],
                        exports: [SplitComponent, SplitAreaDirective],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(AngularSplitModule, { declarations: [SplitComponent, SplitAreaDirective], imports: [i1$1.CommonModule], exports: [SplitComponent, SplitAreaDirective] }); })();

    // tslint:disable

    var ApplicationOperations = /** @class */ (function () {
        function ApplicationOperations() {
        }
        return ApplicationOperations;
    }());

    function ComponentMetadataComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "a", 3);
            i0__namespace.ɵɵtext(1, " View Encapsulation: ");
            i0__namespace.ɵɵelementStart(2, "span", 4);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var viewEncapsulation_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(viewEncapsulation_r2);
        }
    }
    function ComponentMetadataComponent_a_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "a", 5);
            i0__namespace.ɵɵtext(1, " Change Detection Strategy: ");
            i0__namespace.ɵɵelementStart(2, "span", 4);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var changeDetectionStrategy_r3 = ctx.$implicit;
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(changeDetectionStrategy_r3);
        }
    }
    var ComponentMetadataComponent = /** @class */ (function () {
        function ComponentMetadataComponent(_nestedProps) {
            this._nestedProps = _nestedProps;
            this.viewEncapsulationModes = ['Emulated', 'Native', 'None', 'ShadowDom'];
        }
        Object.defineProperty(ComponentMetadataComponent.prototype, "controller", {
            get: function () {
                if (!this.currentSelectedComponent) {
                    return;
                }
                return this._nestedProps.getDirectiveController(this.currentSelectedComponent.name);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ComponentMetadataComponent.prototype, "viewEncapsulation", {
            get: function () {
                var _a;
                var encapsulationIndex = (_a = this === null || this === void 0 ? void 0 : this.controller) === null || _a === void 0 ? void 0 : _a.directiveViewEncapsulation;
                if (encapsulationIndex !== undefined) {
                    return this.viewEncapsulationModes[encapsulationIndex];
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ComponentMetadataComponent.prototype, "changeDetectionStrategy", {
            get: function () {
                var _a;
                var onPush = (_a = this === null || this === void 0 ? void 0 : this.controller) === null || _a === void 0 ? void 0 : _a.directiveHasOnPushStrategy;
                return onPush ? 'On Push' : onPush !== undefined ? 'Default' : undefined;
            },
            enumerable: false,
            configurable: true
        });
        return ComponentMetadataComponent;
    }());
    ComponentMetadataComponent.ɵfac = function ComponentMetadataComponent_Factory(t) { return new (t || ComponentMetadataComponent)(i0__namespace.ɵɵdirectiveInject(ElementPropertyResolver)); };
    ComponentMetadataComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ComponentMetadataComponent, selectors: [["ng-component-metadata"]], inputs: { currentSelectedComponent: "currentSelectedComponent" }, decls: 3, vars: 2, consts: [[1, "meta-data-container"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ViewEncapsulation", "target", "_blank", 4, "ngIf"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ChangeDetectionStrategy", "target", "_blank", 4, "ngIf"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ViewEncapsulation", "target", "_blank"], [1, "meta-data"], ["mat-button", "", "color", "primary", "href", "https://angular.io/api/core/ChangeDetectionStrategy", "target", "_blank"]], template: function ComponentMetadataComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, ComponentMetadataComponent_a_1_Template, 4, 1, "a", 1);
                i0__namespace.ɵɵtemplate(2, ComponentMetadataComponent_a_2_Template, 4, 1, "a", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.viewEncapsulation);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.changeDetectionStrategy);
            }
        }, directives: [i1__namespace$1.NgIf, i3__namespace.MatAnchor], styles: [".meta-data-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.meta-data-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;font-size:11px;height:22px;line-height:22px}.meta-data[_ngcontent-%COMP%]{font-weight:400}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ComponentMetadataComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-component-metadata',
                        templateUrl: './component-metadata.component.html',
                        styleUrls: ['./component-metadata.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: ElementPropertyResolver }]; }, { currentSelectedComponent: [{
                    type: i0.Input
                }] });
    })();

    function PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "mat-accordion", 3);
            i0__namespace.ɵɵelementStart(2, "div");
            i0__namespace.ɵɵelementStart(3, "mat-expansion-panel", 4);
            i0__namespace.ɵɵelementStart(4, "mat-expansion-panel-header", 5);
            i0__namespace.ɵɵelementStart(5, "mat-panel-title");
            i0__namespace.ɵɵelementStart(6, "div", 6);
            i0__namespace.ɵɵelementStart(7, "div", 7);
            i0__namespace.ɵɵtext(8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "button", 8);
            i0__namespace.ɵɵlistener("click", function PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template_button_click_9_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(2); return ctx_r6.handleViewSource($event); });
            i0__namespace.ɵɵelementStart(10, "mat-icon");
            i0__namespace.ɵɵtext(11, " code ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(12, "ng-component-metadata", 9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("hideToggle", true);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵtextInterpolate(ctx_r3.currentSelectedElement.component.name);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("currentSelectedComponent", ctx_r3.currentSelectedElement.component);
        }
    }
    function PropertyTabHeaderComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 6);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(ctx_r5.currentSelectedElement.element);
        }
    }
    function PropertyTabHeaderComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, PropertyTabHeaderComponent_ng_container_0_ng_container_1_Template, 13, 3, "ng-container", 0);
            i0__namespace.ɵɵtemplate(2, PropertyTabHeaderComponent_ng_container_0_ng_template_2_Template, 3, 1, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r4 = i0__namespace.ɵɵreference(3);
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.currentSelectedElement.component)("ngIfElse", _r4);
        }
    }
    function PropertyTabHeaderComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 6);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵtext(2, "No selected Element");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    var PropertyTabHeaderComponent = /** @class */ (function () {
        function PropertyTabHeaderComponent() {
            this.viewSource = new i0.EventEmitter();
        }
        PropertyTabHeaderComponent.prototype.handleViewSource = function (event) {
            event.stopPropagation();
            this.viewSource.emit();
        };
        return PropertyTabHeaderComponent;
    }());
    PropertyTabHeaderComponent.ɵfac = function PropertyTabHeaderComponent_Factory(t) { return new (t || PropertyTabHeaderComponent)(); };
    PropertyTabHeaderComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyTabHeaderComponent, selectors: [["ng-property-tab-header"]], inputs: { currentSelectedElement: "currentSelectedElement", currentDirectives: "currentDirectives" }, outputs: { viewSource: "viewSource" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["emptyState", ""], ["currentElementIsDOMElement", ""], [1, "property-tab-header"], [3, "hideToggle"], ["collapsedHeight", "32px", "expandedHeight", "32px"], [1, "element-header"], [1, "component-name"], ["mat-icon-button", "", 3, "click"], [3, "currentSelectedComponent"], [1, "element-name"]], template: function PropertyTabHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, PropertyTabHeaderComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
                i0__namespace.ɵɵtemplate(1, PropertyTabHeaderComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.currentSelectedElement)("ngIfElse", _r1);
            }
        }, directives: [i1__namespace$1.NgIf, i2__namespace$2.MatAccordion, i2__namespace$2.MatExpansionPanel, i2__namespace$2.MatExpansionPanelHeader, i2__namespace$2.MatExpansionPanelTitle, i3__namespace.MatButton, i2__namespace$1.MatIcon, ComponentMetadataComponent], styles: [".element-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;align-items:center;font-size:11px}.element-header[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:25px;width:25px;line-height:25px}.element-header[_ngcontent-%COMP%]   .component-name[_ngcontent-%COMP%], .element-header[_ngcontent-%COMP%]   .element-name[_ngcontent-%COMP%]{margin-left:10px;font-weight:700;line-height:25px}  .property-tab-header mat-expansion-panel{border-radius:unset!important}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-header{padding:0}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-header .mat-expansion-panel-header-title{margin-right:0}  .property-tab-header.mat-accordion .mat-expansion-panel .mat-expansion-panel-content .mat-expansion-panel-body{padding:0}.dark-theme[_nghost-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{fill:#fff}"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyTabHeaderComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './property-tab-header.component.html',
                        selector: 'ng-property-tab-header',
                        styleUrls: ['./property-tab-header.component.scss'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, { currentSelectedElement: [{
                    type: i0.Input
                }], currentDirectives: [{
                    type: i0.Input
                }], viewSource: [{
                    type: i0.Output
                }] });
    })();

    var PropertyViewHeaderComponent = /** @class */ (function () {
        function PropertyViewHeaderComponent() {
        }
        return PropertyViewHeaderComponent;
    }());
    PropertyViewHeaderComponent.ɵfac = function PropertyViewHeaderComponent_Factory(t) { return new (t || PropertyViewHeaderComponent)(); };
    PropertyViewHeaderComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyViewHeaderComponent, selectors: [["ng-property-view-header"]], inputs: { directive: "directive" }, decls: 2, vars: 1, template: function PropertyViewHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-toolbar");
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.directive);
            }
        }, directives: [i1__namespace$2.MatToolbar], styles: ["mat-toolbar[_ngcontent-%COMP%]{padding-left:9px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:25px;font-size:11px;font-weight:500;display:flex;align-items:center;justify-content:space-between;height:auto}  .mat-button,   .mat-icon-button{height:18px;width:18px;line-height:15px;margin-right:7px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyViewHeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-property-view-header',
                        templateUrl: './property-view-header.component.html',
                        styleUrls: ['./property-view-header.component.scss'],
                    }]
            }], null, { directive: [{
                    type: i0.Input
                }] });
    })();

    var PropertyPreviewComponent = /** @class */ (function () {
        function PropertyPreviewComponent() {
            this.inspect = new i0.EventEmitter();
        }
        Object.defineProperty(PropertyPreviewComponent.prototype, "isClickableProp", {
            get: function () {
                return this.node.prop.descriptor.type === i2.PropType.Function || this.node.prop.descriptor.type === i2.PropType.HTMLNode;
            },
            enumerable: false,
            configurable: true
        });
        return PropertyPreviewComponent;
    }());
    PropertyPreviewComponent.ɵfac = function PropertyPreviewComponent_Factory(t) { return new (t || PropertyPreviewComponent)(); };
    PropertyPreviewComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyPreviewComponent, selectors: [["ng-property-preview"]], inputs: { node: "node" }, outputs: { inspect: "inspect" }, decls: 2, vars: 3, consts: [[1, "value", 3, "click"]], template: function PropertyPreviewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "span", 0);
                i0__namespace.ɵɵlistener("click", function PropertyPreviewComponent_Template_span_click_0_listener() { return ctx.isClickableProp && ctx.inspect.emit(); });
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("function", ctx.isClickableProp);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.node.prop.descriptor.preview, "\n");
            }
        }, styles: [".function[_ngcontent-%COMP%]:hover{background:#4da1ff;color:#fff;cursor:pointer}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyPreviewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-property-preview',
                        templateUrl: './property-preview.component.html',
                        styleUrls: ['./property-preview.component.scss'],
                    }]
            }], null, { node: [{
                    type: i0.Input
                }], inspect: [{
                    type: i0.Output
                }] });
    })();

    function PropertyEditorComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "span", 3);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.valueToSubmit, " ");
        }
    }
    function PropertyEditorComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "span");
            i0__namespace.ɵɵelementStart(1, "input", 4);
            i0__namespace.ɵɵlistener("mousedown", function PropertyEditorComponent_span_3_Template_input_mousedown_1_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PropertyEditorComponent_span_3_Template_input_ngModelChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.valueToSubmit = $event; })("keydown.enter", function PropertyEditorComponent_span_3_Template_input_keydown_enter_1_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.accept(); })("keydown.escape", function PropertyEditorComponent_span_3_Template_input_keydown_escape_1_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.reject(); })("blur", function PropertyEditorComponent_span_3_Template_input_blur_1_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.onBlur(); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngModel", ctx_r1.valueToSubmit);
        }
    }
    var PropertyEditorState;
    (function (PropertyEditorState) {
        PropertyEditorState[PropertyEditorState["Read"] = 0] = "Read";
        PropertyEditorState[PropertyEditorState["Write"] = 1] = "Write";
    })(PropertyEditorState || (PropertyEditorState = {}));
    var parseValue = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (_a) {
            return value.toString();
        }
    };
    var PropertyEditorComponent = /** @class */ (function () {
        function PropertyEditorComponent(_cd, _elementRef) {
            this._cd = _cd;
            this._elementRef = _elementRef;
            this.updateValue = new i0.EventEmitter();
            this.readState = PropertyEditorState.Read;
            this.writeState = PropertyEditorState.Write;
            this.currentPropertyState = this.readState;
        }
        PropertyEditorComponent.prototype.ngOnInit = function () {
            this.valueToSubmit = this.initialValue;
        };
        PropertyEditorComponent.prototype.ngAfterViewChecked = function () {
            if (this.currentPropertyState === this.writeState) {
                this.editor.focus();
            }
        };
        PropertyEditorComponent.prototype.accept = function () {
            var parsed = parseValue(this.valueToSubmit);
            this.updateValue.emit(parsed);
            this._transition(this.readState);
        };
        PropertyEditorComponent.prototype.reject = function () {
            this.valueToSubmit = this.initialValue;
            this._transition(this.readState);
        };
        PropertyEditorComponent.prototype.onClick = function () {
            if (this.currentPropertyState === this.readState) {
                this._transition(this.writeState);
            }
        };
        PropertyEditorComponent.prototype.onBlur = function () {
            if (this.currentPropertyState === this.writeState) {
                this.accept();
            }
        };
        Object.defineProperty(PropertyEditorComponent.prototype, "editor", {
            get: function () {
                return this._elementRef.nativeElement.querySelector('input');
            },
            enumerable: false,
            configurable: true
        });
        PropertyEditorComponent.prototype._transition = function (state) {
            this.currentPropertyState = state;
            if (this.currentPropertyState === this.writeState) {
                this._cd.detectChanges();
                this.editor.focus();
                this.editor.select();
            }
        };
        return PropertyEditorComponent;
    }());
    PropertyEditorComponent.ɵfac = function PropertyEditorComponent_Factory(t) { return new (t || PropertyEditorComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    PropertyEditorComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyEditorComponent, selectors: [["ng-property-editor"]], inputs: { key: "key", initialValue: "initialValue" }, outputs: { updateValue: "updateValue" }, decls: 4, vars: 3, consts: [[1, "editor", 3, "click"], [1, "state-container", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "editable"], ["matInput", "", "type", "text", 1, "editor-input", "editable", 3, "ngModel", "mousedown", "ngModelChange", "keydown.enter", "keydown.escape", "blur"]], template: function PropertyEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵlistener("click", function PropertyEditorComponent_Template_div_click_0_listener() { return ctx.onClick(); });
                i0__namespace.ɵɵelementStart(1, "span", 1);
                i0__namespace.ɵɵtemplate(2, PropertyEditorComponent_span_2_Template, 3, 1, "span", 2);
                i0__namespace.ɵɵtemplate(3, PropertyEditorComponent_span_3_Template, 2, 1, "span", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitch", ctx.currentPropertyState);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", ctx.readState);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", ctx.writeState);
            }
        }, directives: [i1__namespace$1.NgSwitch, i1__namespace$1.NgSwitchCase, i2__namespace$3.DefaultValueAccessor, i2__namespace$3.NgControlStatus, i2__namespace$3.NgModel], styles: [".editor[_ngcontent-%COMP%]{cursor:text;border:none;outline:none;min-width:100px;white-space:pre;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.editor-input[_ngcontent-%COMP%]{background-color:#bbddfb;box-shadow:0 0 0 1px rgba(0,0,0,.05)}input[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-family:Menlo,monospace;font-weight:500;font-size:1em;border:none;outline:none}.dark-theme[_nghost-%COMP%]   input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{color:#bcc5ce;background-color:#202124}.dark-theme[_nghost-%COMP%]   .editor-input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .editor-input[_ngcontent-%COMP%]{background-color:#454546;box-shadow:0 0 0 1px hsla(0,0%,64.7%,.05)}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyEditorComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './property-editor.component.html',
                        selector: 'ng-property-editor',
                        styleUrls: ['./property-editor.component.scss'],
                    }]
            }], function () { return [{ type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.ElementRef }]; }, { key: [{
                    type: i0.Input
                }], initialValue: [{
                    type: i0.Input
                }], updateValue: [{
                    type: i0.Output
                }] });
    })();

    function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "ng-property-preview", 8);
            i0__namespace.ɵɵlistener("inspect", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template_ng_property_preview_inspect_1_listener() { i0__namespace.ɵɵrestoreView(_r9_1); var node_r3 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r7 = i0__namespace.ɵɵnextContext(2); return ctx_r7.inspect.emit(node_r3); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var node_r3 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("node", node_r3);
        }
    }
    function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "ng-property-editor", 9);
            i0__namespace.ɵɵlistener("updateValue", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template_ng_property_editor_updateValue_0_listener($event) { i0__namespace.ɵɵrestoreView(_r13_1); var node_r3 = i0__namespace.ɵɵnextContext().$implicit; var ctx_r11 = i0__namespace.ɵɵnextContext(2); return ctx_r11.handleUpdate(node_r3, $event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵproperty("key", node_r3.prop.name)("initialValue", node_r3.prop.descriptor.value || node_r3.prop.descriptor.preview);
        }
    }
    function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 4);
            i0__namespace.ɵɵelementStart(1, "span", 5);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(3, ":\u00A0 ");
            i0__namespace.ɵɵtemplate(4, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_container_4_Template, 2, 1, "ng-container", 6);
            i0__namespace.ɵɵtemplate(5, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_ng_template_5_Template, 1, 2, "ng-template", null, 7, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var _r5 = i0__namespace.ɵɵreference(6);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r3.prop.name, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", !node_r3.prop.descriptor.editable)("ngIfElse", _r5);
        }
    }
    function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-tree-node", 4);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵlistener("click", function PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template_div_click_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r17_1); var node_r15 = restoredCtx.$implicit; var ctx_r16 = i0__namespace.ɵɵnextContext(2); return ctx_r16.toggle(node_r15); });
            i0__namespace.ɵɵelementStart(2, "mat-icon", 11);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4, " \u00A0 ");
            i0__namespace.ɵɵelementStart(5, "span", 12);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(7, ":\u00A0 ");
            i0__namespace.ɵɵelementStart(8, "span", 13);
            i0__namespace.ɵɵtext(9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r15 = ctx.$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r15) ? "expand_more" : "chevron_right", " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", node_r15.prop.name, " ");
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r15) ? "" : node_r15.prop.descriptor.preview, " ");
        }
    }
    function PropertyViewTreeComponent_mat_tree_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-tree", 1);
            i0__namespace.ɵɵtemplate(1, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_1_Template, 7, 3, "mat-tree-node", 2);
            i0__namespace.ɵɵtemplate(2, PropertyViewTreeComponent_mat_tree_0_mat_tree_node_2_Template, 10, 3, "mat-tree-node", 3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("dataSource", ctx_r0.dataSource)("treeControl", ctx_r0.treeControl);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("matTreeNodeDefWhen", ctx_r0.hasChild);
        }
    }
    var PropertyViewTreeComponent = /** @class */ (function () {
        function PropertyViewTreeComponent() {
            this.updateValue = new i0.EventEmitter();
            this.inspect = new i0.EventEmitter();
            this.hasChild = function (_, node) { return node.expandable; };
        }
        PropertyViewTreeComponent.prototype.toggle = function (node) {
            if (this.treeControl.isExpanded(node)) {
                this.treeControl.collapse(node);
                return;
            }
            this.expand(node);
        };
        PropertyViewTreeComponent.prototype.expand = function (node) {
            var prop = node.prop;
            if (!prop.descriptor.expandable) {
                return;
            }
            this.treeControl.expand(node);
        };
        PropertyViewTreeComponent.prototype.handleUpdate = function (node, newValue) {
            this.updateValue.emit({
                node: node,
                newValue: newValue,
            });
        };
        return PropertyViewTreeComponent;
    }());
    PropertyViewTreeComponent.ɵfac = function PropertyViewTreeComponent_Factory(t) { return new (t || PropertyViewTreeComponent)(); };
    PropertyViewTreeComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyViewTreeComponent, selectors: [["ng-property-view-tree"]], inputs: { dataSource: "dataSource", treeControl: "treeControl" }, outputs: { updateValue: "updateValue", inspect: "inspect" }, decls: 1, vars: 1, consts: [["class", "property-list", 3, "dataSource", "treeControl", 4, "ngIf"], [1, "property-list", 3, "dataSource", "treeControl"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePaddingIndent", "14", "matTreeNodePadding", ""], [1, "name", "non-expandable"], [4, "ngIf", "ngIfElse"], ["editable", ""], [3, "node", "inspect"], [3, "key", "initialValue", "updateValue"], [3, "click"], [1, "mat-icon-rtl-mirror"], [1, "name"], [1, "value"]], template: function PropertyViewTreeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, PropertyViewTreeComponent_mat_tree_0_Template, 3, 3, "mat-tree", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.treeControl);
            }
        }, directives: [i1__namespace$1.NgIf, i2__namespace$4.MatTree, i2__namespace$4.MatTreeNodeDef, i2__namespace$4.MatTreeNode, i2__namespace$4.MatTreeNodePadding, PropertyPreviewComponent, PropertyEditorComponent, i2__namespace$1.MatIcon], styles: ["[_nghost-%COMP%]{width:100%;display:block;overflow:auto;height:calc(100% - 24px)}[_nghost-%COMP%]   mat-tree[_ngcontent-%COMP%]{display:table}[_nghost-%COMP%]     .mat-tree-node{min-height:20px!important;cursor:default;font-family:Menlo,monospace}[_nghost-%COMP%]     .mat-tree-node .mat-icon{font-size:11px;width:8px;height:16px}.name[_ngcontent-%COMP%]{margin-left:-9px}.non-expandable[_ngcontent-%COMP%]{margin-left:18px}.property-list[_ngcontent-%COMP%]{margin:5px 5px 5px 15px}.property-list[_ngcontent-%COMP%]   mat-tree-node[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#ce271e;font-weight:500}.dark-theme[_nghost-%COMP%]   .property-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .property-list[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#54c9bd!important}.disabled[_ngcontent-%COMP%], .property-list[_ngcontent-%COMP%]   mat-tree-node.disabled[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#333}.arrow[_ngcontent-%COMP%]{font-family:monospace;font-size:.5em;color:#6e6e6e}.mat-nested-tree-node[_ngcontent-%COMP%], [_nghost-%COMP%]     .mat-tree-node{font-size:.8em}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyViewTreeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-property-view-tree',
                        templateUrl: './property-view-tree.component.html',
                        styleUrls: ['./property-view-tree.component.scss'],
                    }]
            }], null, { dataSource: [{
                    type: i0.Input
                }], treeControl: [{
                    type: i0.Input
                }], updateValue: [{
                    type: i0.Output
                }], inspect: [{
                    type: i0.Output
                }] });
    })();

    function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-expansion-panel", 5);
            i0__namespace.ɵɵelementStart(1, "mat-expansion-panel-header", 6);
            i0__namespace.ɵɵelementStart(2, "mat-panel-title");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "ng-property-view-tree", 7);
            i0__namespace.ɵɵlistener("updateValue", function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template_ng_property_view_tree_updateValue_4_listener($event) { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(3); return ctx_r4.updateValue($event); })("inspect", function PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template_ng_property_view_tree_inspect_4_listener($event) { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r6 = i0__namespace.ɵɵnextContext(3); return ctx_r6.handleInspect($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var index_r2 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("expanded", true);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r3.panels[index_r2].title, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("dataSource", ctx_r3.panels[index_r2].controls.dataSource)("treeControl", ctx_r3.panels[index_r2].controls.treeControl);
        }
    }
    function PropertyViewBodyComponent_mat_accordion_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵtemplate(1, PropertyViewBodyComponent_mat_accordion_0_div_1_mat_expansion_panel_1_Template, 5, 4, "mat-expansion-panel", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var index_r2 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r1.panels[index_r2].hidden);
        }
    }
    function PropertyViewBodyComponent_mat_accordion_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-accordion", 1);
            i0__namespace.ɵɵlistener("cdkDropListDropped", function PropertyViewBodyComponent_mat_accordion_0_Template_mat_accordion_cdkDropListDropped_0_listener($event) { i0__namespace.ɵɵrestoreView(_r9_1); var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.drop($event); });
            i0__namespace.ɵɵtemplate(1, PropertyViewBodyComponent_mat_accordion_0_div_1_Template, 2, 1, "div", 2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("multi", true);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.categoryOrder);
        }
    }
    var PropertyViewBodyComponent = /** @class */ (function () {
        function PropertyViewBodyComponent() {
            this.inspect = new i0.EventEmitter();
            this.categoryOrder = [0, 1, 2];
        }
        Object.defineProperty(PropertyViewBodyComponent.prototype, "panels", {
            get: function () {
                return [
                    {
                        title: '@Inputs',
                        hidden: this.directiveInputControls.dataSource.data.length === 0,
                        controls: this.directiveInputControls,
                    },
                    {
                        title: '@Outputs',
                        hidden: this.directiveOutputControls.dataSource.data.length === 0,
                        controls: this.directiveOutputControls,
                    },
                    {
                        title: 'Properties',
                        hidden: this.directiveStateControls.dataSource.data.length === 0,
                        controls: this.directiveStateControls,
                    },
                ];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PropertyViewBodyComponent.prototype, "controlsLoaded", {
            get: function () {
                return !!this.directiveStateControls && !!this.directiveOutputControls && !!this.directiveInputControls;
            },
            enumerable: false,
            configurable: true
        });
        PropertyViewBodyComponent.prototype.updateValue = function (_a) {
            var node = _a.node, newValue = _a.newValue;
            this.controller.updateValue(node, newValue);
        };
        PropertyViewBodyComponent.prototype.drop = function (event) {
            i3$1.moveItemInArray(this.categoryOrder, event.previousIndex, event.currentIndex);
        };
        PropertyViewBodyComponent.prototype.handleInspect = function (node) {
            this.inspect.emit({
                node: node,
                directivePosition: this.controller.directivePosition,
            });
        };
        return PropertyViewBodyComponent;
    }());
    PropertyViewBodyComponent.ɵfac = function PropertyViewBodyComponent_Factory(t) { return new (t || PropertyViewBodyComponent)(); };
    PropertyViewBodyComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyViewBodyComponent, selectors: [["ng-property-view-body"]], inputs: { controller: "controller", directiveInputControls: "directiveInputControls", directiveOutputControls: "directiveOutputControls", directiveStateControls: "directiveStateControls" }, outputs: { inspect: "inspect" }, decls: 1, vars: 1, consts: [["cdkDropList", "", 3, "multi", "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 3, "multi", "cdkDropListDropped"], ["class", "mat-accordion-content", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "mat-accordion-content"], [3, "expanded", 4, "ngIf"], [3, "expanded"], ["collapsedHeight", "25px", "expandedHeight", "25px"], [3, "dataSource", "treeControl", "updateValue", "inspect"]], template: function PropertyViewBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, PropertyViewBodyComponent_mat_accordion_0_Template, 2, 2, "mat-accordion", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.controlsLoaded);
            }
        }, directives: [i1__namespace$1.NgIf, i2__namespace$2.MatAccordion, i3__namespace$1.CdkDropList, i1__namespace$1.NgForOf, i3__namespace$1.CdkDrag, i2__namespace$2.MatExpansionPanel, i2__namespace$2.MatExpansionPanelHeader, i2__namespace$2.MatExpansionPanelTitle, PropertyViewTreeComponent], styles: ["[_nghost-%COMP%]     mat-expansion-panel{border-radius:unset!important}[_nghost-%COMP%]     .mat-expansion-panel-body{padding:0}[_nghost-%COMP%]     .mat-expansion-panel-spacing{margin:0}[_nghost-%COMP%]     .mat-expansion-panel-header{padding:0 15px}[_nghost-%COMP%]     .mat-expansion-panel-header-title{font-size:.8em;font-family:Menlo,monospace}[_nghost-%COMP%]     .mat-expansion-indicator:after{padding:2.5px;margin-bottom:4.5px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyViewBodyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-property-view-body',
                        templateUrl: './property-view-body.component.html',
                        styleUrls: ['./property-view-body.component.scss'],
                    }]
            }], null, { controller: [{
                    type: i0.Input
                }], directiveInputControls: [{
                    type: i0.Input
                }], directiveOutputControls: [{
                    type: i0.Input
                }], directiveStateControls: [{
                    type: i0.Input
                }], inspect: [{
                    type: i0.Output
                }] });
    })();

    var PropertyViewComponent = /** @class */ (function () {
        function PropertyViewComponent(_nestedProps) {
            this._nestedProps = _nestedProps;
            this.inspect = new i0.EventEmitter();
        }
        Object.defineProperty(PropertyViewComponent.prototype, "controller", {
            get: function () {
                return this._nestedProps.getDirectiveController(this.directive);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PropertyViewComponent.prototype, "directiveInputControls", {
            get: function () {
                var _a;
                return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveInputControls;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PropertyViewComponent.prototype, "directiveOutputControls", {
            get: function () {
                var _a;
                return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveOutputControls;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PropertyViewComponent.prototype, "directiveStateControls", {
            get: function () {
                var _a;
                return (_a = this.controller) === null || _a === void 0 ? void 0 : _a.directiveStateControls;
            },
            enumerable: false,
            configurable: true
        });
        return PropertyViewComponent;
    }());
    PropertyViewComponent.ɵfac = function PropertyViewComponent_Factory(t) { return new (t || PropertyViewComponent)(i0__namespace.ɵɵdirectiveInject(ElementPropertyResolver)); };
    PropertyViewComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyViewComponent, selectors: [["ng-property-view"]], inputs: { directive: "directive" }, outputs: { inspect: "inspect" }, decls: 2, vars: 5, consts: [[3, "directive"], [3, "controller", "directiveInputControls", "directiveOutputControls", "directiveStateControls", "inspect"]], template: function PropertyViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "ng-property-view-header", 0);
                i0__namespace.ɵɵelementStart(1, "ng-property-view-body", 1);
                i0__namespace.ɵɵlistener("inspect", function PropertyViewComponent_Template_ng_property_view_body_inspect_1_listener($event) { return ctx.inspect.emit($event); });
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("directive", ctx.directive);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("controller", ctx.controller)("directiveInputControls", ctx.directiveInputControls)("directiveOutputControls", ctx.directiveOutputControls)("directiveStateControls", ctx.directiveStateControls);
            }
        }, directives: [PropertyViewHeaderComponent, PropertyViewBodyComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-property-view',
                        templateUrl: './property-view.component.html',
                        styleUrls: ['./property-view.component.scss'],
                    }]
            }], function () { return [{ type: ElementPropertyResolver }]; }, { directive: [{
                    type: i0.Input
                }], inspect: [{
                    type: i0.Output
                }] });
    })();

    function PropertyTabBodyComponent_ng_container_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelementStart(1, "ng-property-view", 3);
            i0__namespace.ɵɵlistener("inspect", function PropertyTabBodyComponent_ng_container_0_div_1_Template_ng_property_view_inspect_1_listener($event) { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(2); return ctx_r3.inspect.emit($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var directive_r2 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("directive", directive_r2);
        }
    }
    function PropertyTabBodyComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, PropertyTabBodyComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.getCurrentDirectives());
        }
    }
    var PropertyTabBodyComponent = /** @class */ (function () {
        function PropertyTabBodyComponent() {
            this.inspect = new i0.EventEmitter();
        }
        PropertyTabBodyComponent.prototype.getCurrentDirectives = function () {
            if (!this.currentSelectedElement) {
                return;
            }
            var directives = this.currentSelectedElement.directives.map(function (d) { return d.name; });
            if (this.currentSelectedElement.component) {
                directives.push(this.currentSelectedElement.component.name);
            }
            return directives;
        };
        return PropertyTabBodyComponent;
    }());
    PropertyTabBodyComponent.ɵfac = function PropertyTabBodyComponent_Factory(t) { return new (t || PropertyTabBodyComponent)(); };
    PropertyTabBodyComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyTabBodyComponent, selectors: [["ng-property-tab-body"]], inputs: { currentSelectedElement: "currentSelectedElement" }, outputs: { inspect: "inspect" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "explorer-panel", 4, "ngFor", "ngForOf"], [1, "explorer-panel"], [3, "directive", "inspect"]], template: function PropertyTabBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, PropertyTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.currentSelectedElement);
            }
        }, directives: [i1__namespace$1.NgIf, i1__namespace$1.NgForOf, PropertyViewComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyTabBodyComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './property-tab-body.component.html',
                        selector: 'ng-property-tab-body',
                        styleUrls: ['./property-tab-body.component.scss'],
                    }]
            }], null, { currentSelectedElement: [{
                    type: i0.Input
                }], inspect: [{
                    type: i0.Output
                }] });
    })();

    var PropertyTabComponent = /** @class */ (function () {
        function PropertyTabComponent() {
            this.viewSource = new i0.EventEmitter();
            this.inspect = new i0.EventEmitter();
        }
        return PropertyTabComponent;
    }());
    PropertyTabComponent.ɵfac = function PropertyTabComponent_Factory(t) { return new (t || PropertyTabComponent)(); };
    PropertyTabComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PropertyTabComponent, selectors: [["ng-property-tab"]], inputs: { currentSelectedElement: "currentSelectedElement" }, outputs: { viewSource: "viewSource", inspect: "inspect" }, decls: 2, vars: 2, consts: [[3, "currentSelectedElement", "viewSource"], [3, "currentSelectedElement", "inspect"]], template: function PropertyTabComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "ng-property-tab-header", 0);
                i0__namespace.ɵɵlistener("viewSource", function PropertyTabComponent_Template_ng_property_tab_header_viewSource_0_listener() { return ctx.viewSource.emit(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(1, "ng-property-tab-body", 1);
                i0__namespace.ɵɵlistener("inspect", function PropertyTabComponent_Template_ng_property_tab_body_inspect_1_listener($event) { return ctx.inspect.emit($event); });
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
            }
        }, directives: [PropertyTabHeaderComponent, PropertyTabBodyComponent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyTabComponent, [{
                type: i0.Component,
                args: [{
                        templateUrl: './property-tab.component.html',
                        selector: 'ng-property-tab',
                    }]
            }], null, { currentSelectedElement: [{
                    type: i0.Input
                }], viewSource: [{
                    type: i0.Output
                }], inspect: [{
                    type: i0.Output
                }] });
    })();

    var _c0$5 = ["directiveForestSplitArea"];
    function DirectiveExplorerComponent_ng_breadcrumbs_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "ng-breadcrumbs", 11);
            i0__namespace.ɵɵlistener("mouseLeaveNode", function DirectiveExplorerComponent_ng_breadcrumbs_7_Template_ng_breadcrumbs_mouseLeaveNode_0_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.unhighlight(); })("mouseOverNode", function DirectiveExplorerComponent_ng_breadcrumbs_7_Template_ng_breadcrumbs_mouseOverNode_0_listener($event) { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.highlight($event); })("handleSelect", function DirectiveExplorerComponent_ng_breadcrumbs_7_Template_ng_breadcrumbs_handleSelect_0_listener($event) { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.handleSelect($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("parents", ctx_r1.parents);
        }
    }
    var sameDirectives = function (a, b) {
        var e_1, _a;
        if ((a.component && !b.component) || (!a.component && b.component)) {
            return false;
        }
        if (a.component && b.component && a.component.id !== b.component.id) {
            return false;
        }
        var aDirectives = new Set(a.directives.map(function (d) { return d.id; }));
        try {
            for (var _b = __values(b.directives), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dir = _c.value;
                if (!aDirectives.has(dir.id)) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
    };
    var DirectiveExplorerComponent = /** @class */ (function () {
        function DirectiveExplorerComponent(_appOperations, _messageBus, _propResolver, _cdr, _ngZone) {
            var _this = this;
            this._appOperations = _appOperations;
            this._messageBus = _messageBus;
            this._propResolver = _propResolver;
            this._cdr = _cdr;
            this._ngZone = _ngZone;
            this.toggleInspector = new i0.EventEmitter();
            this.currentSelectedElement = null;
            this.splitDirection = 'horizontal';
            this._resizeObserver = new ResizeObserver(function (entries) { return _this._ngZone.run(function () {
                var resizedEntry = entries[0];
                if (resizedEntry.target === _this.splitElementRef.nativeElement) {
                    _this.splitDirection = resizedEntry.contentRect.width <= 500 ? 'vertical' : 'horizontal';
                }
                if (!_this.breadcrumbs) {
                    return;
                }
                _this.breadcrumbs.updateScrollButtonVisibility();
            }); });
            this._clickedElement = null;
            this._refreshRetryTimeout = null;
            this.parents = null;
        }
        DirectiveExplorerComponent.prototype.ngOnInit = function () {
            this.subscribeToBackendEvents();
            this.refresh();
            this._resizeObserver.observe(this.splitElementRef.nativeElement);
            this._resizeObserver.observe(this.directiveForestSplitArea.nativeElement);
        };
        DirectiveExplorerComponent.prototype.ngOnDestroy = function () {
            this._resizeObserver.unobserve(this.splitElementRef.nativeElement);
            this._resizeObserver.unobserve(this.directiveForestSplitArea.nativeElement);
        };
        DirectiveExplorerComponent.prototype.handleNodeSelection = function (node) {
            if (node) {
                // We want to guarantee that we're not reusing any of the previous properties.
                // That's possible if the user has selected an NgForOf and after that
                // they select another NgForOf instance. In this case, we don't want to diff the props
                // we want to render from scratch.
                if (this._clickedElement && !sameDirectives(this._clickedElement, node)) {
                    this._propResolver.clearProperties();
                }
                this._clickedElement = node;
                this._messageBus.emit('setSelectedComponent', [node.position]);
                this.refresh();
            }
            else {
                this._clickedElement = this.currentSelectedElement = null;
            }
        };
        DirectiveExplorerComponent.prototype.subscribeToBackendEvents = function () {
            var _this = this;
            this._messageBus.on('latestComponentExplorerView', function (view) {
                _this.forest = view.forest;
                _this.currentSelectedElement = _this._clickedElement;
                if (view.properties && _this.currentSelectedElement) {
                    _this._propResolver.setProperties(_this.currentSelectedElement, view.properties);
                }
            });
            this._messageBus.on('componentTreeDirty', function () { return _this.refresh(); });
        };
        DirectiveExplorerComponent.prototype.refresh = function () {
            var _this = this;
            var success = this._messageBus.emit('getLatestComponentExplorerView', [this._constructViewQuery()]);
            // If the event was not throttled, we no longer need to retry.
            if (success) {
                clearTimeout(this._refreshRetryTimeout);
                this._refreshRetryTimeout = null;
                return;
            }
            // If the event was throttled and we haven't scheduled a retry yet.
            if (!this._refreshRetryTimeout) {
                this._refreshRetryTimeout = setTimeout(function () { return _this.refresh(); }, 500);
            }
        };
        DirectiveExplorerComponent.prototype.viewSource = function () {
            if (!this.currentSelectedElement) {
                return;
            }
            this._appOperations.viewSource(this.currentSelectedElement.position);
        };
        DirectiveExplorerComponent.prototype.handleSelectDomElement = function (node) {
            this._appOperations.selectDomElement(node.position);
        };
        DirectiveExplorerComponent.prototype.highlight = function (node) {
            if (!node.original.component) {
                return;
            }
            this._messageBus.emit('createHighlightOverlay', [node.position]);
        };
        DirectiveExplorerComponent.prototype.unhighlight = function () {
            this._messageBus.emit('removeHighlightOverlay');
        };
        DirectiveExplorerComponent.prototype._constructViewQuery = function () {
            if (!this._clickedElement) {
                return;
            }
            return {
                selectedElement: this._clickedElement.position,
                propertyQuery: this._getPropertyQuery(),
            };
        };
        DirectiveExplorerComponent.prototype._getPropertyQuery = function () {
            // Here we handle the case when a given element has already been selected.
            // We check if we're dealing with the same instance (i.e., if we have the same
            // set of directives and component on it), if we do, we want to get the same
            // set of properties which are already expanded.
            if (!this._clickedElement ||
                !this.currentSelectedElement ||
                !sameDirectives(this._clickedElement, this.currentSelectedElement)) {
                return {
                    type: i2.PropertyQueryTypes.All,
                };
            }
            return {
                type: i2.PropertyQueryTypes.Specified,
                properties: this._propResolver.getExpandedProperties() || {},
            };
        };
        DirectiveExplorerComponent.prototype.highlightComponent = function (position) {
            this._messageBus.emit('createHighlightOverlay', [position]);
        };
        DirectiveExplorerComponent.prototype.removeComponentHighlight = function () {
            this._messageBus.emit('removeHighlightOverlay');
        };
        DirectiveExplorerComponent.prototype.handleSelect = function (node) {
            this.directiveForest.handleSelect(node);
        };
        DirectiveExplorerComponent.prototype.handleSetParents = function (parents) {
            this.parents = parents;
            this._cdr.detectChanges();
        };
        DirectiveExplorerComponent.prototype.inspect = function (_a) {
            var node = _a.node, directivePosition = _a.directivePosition;
            var objectPath = constructPathOfKeysToPropertyValue(node.prop);
            this._appOperations.inspect(directivePosition, objectPath);
        };
        return DirectiveExplorerComponent;
    }());
    DirectiveExplorerComponent.ɵfac = function DirectiveExplorerComponent_Factory(t) { return new (t || DirectiveExplorerComponent)(i0__namespace.ɵɵdirectiveInject(ApplicationOperations), i0__namespace.ɵɵdirectiveInject(i2__namespace.MessageBus), i0__namespace.ɵɵdirectiveInject(ElementPropertyResolver), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone)); };
    DirectiveExplorerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DirectiveExplorerComponent, selectors: [["ng-directive-explorer"]], viewQuery: function DirectiveExplorerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(SplitComponent, 7, i0.ElementRef);
                i0__namespace.ɵɵviewQuery(_c0$5, 7, i0.ElementRef);
                i0__namespace.ɵɵviewQuery(DirectiveForestComponent, 5);
                i0__namespace.ɵɵviewQuery(BreadcrumbsComponent, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.splitElementRef = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.directiveForestSplitArea = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.directiveForest = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.breadcrumbs = _t.first);
            }
        }, outputs: { toggleInspector: "toggleInspector" }, features: [i0__namespace.ɵɵProvidersFeature([
                {
                    provide: ElementPropertyResolver,
                    useClass: ElementPropertyResolver,
                },
            ])], decls: 11, vars: 8, consts: [["unit", "percent", 3, "direction", "gutterSize"], ["size", "60"], ["directiveForestSplitArea", ""], ["direction", "vertical", "unit", "pixel", 3, "gutterSize", "disabled"], ["size", "*"], [3, "forest", "currentSelectedElement", "selectNode", "selectDomElement", "setParents", "highlightComponent", "removeComponentHighlight", "toggleInspector"], ["size", "22"], [3, "parents", "mouseLeaveNode", "mouseOverNode", "handleSelect", 4, "ngIf"], ["size", "40", "minSize", "25"], [1, "property-tab-wrapper"], [3, "currentSelectedElement", "inspect", "viewSource"], [3, "parents", "mouseLeaveNode", "mouseOverNode", "handleSelect"]], template: function DirectiveExplorerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "as-split", 0);
                i0__namespace.ɵɵelementStart(1, "as-split-area", 1, 2);
                i0__namespace.ɵɵelementStart(3, "as-split", 3);
                i0__namespace.ɵɵelementStart(4, "as-split-area", 4);
                i0__namespace.ɵɵelementStart(5, "ng-directive-forest", 5);
                i0__namespace.ɵɵlistener("selectNode", function DirectiveExplorerComponent_Template_ng_directive_forest_selectNode_5_listener($event) { return ctx.handleNodeSelection($event); })("selectDomElement", function DirectiveExplorerComponent_Template_ng_directive_forest_selectDomElement_5_listener($event) { return ctx.handleSelectDomElement($event); })("setParents", function DirectiveExplorerComponent_Template_ng_directive_forest_setParents_5_listener($event) { return ctx.handleSetParents($event); })("highlightComponent", function DirectiveExplorerComponent_Template_ng_directive_forest_highlightComponent_5_listener($event) { return ctx.highlightComponent($event); })("removeComponentHighlight", function DirectiveExplorerComponent_Template_ng_directive_forest_removeComponentHighlight_5_listener() { return ctx.removeComponentHighlight(); })("toggleInspector", function DirectiveExplorerComponent_Template_ng_directive_forest_toggleInspector_5_listener() { return ctx.toggleInspector.emit(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "as-split-area", 6);
                i0__namespace.ɵɵtemplate(7, DirectiveExplorerComponent_ng_breadcrumbs_7_Template, 1, 1, "ng-breadcrumbs", 7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "as-split-area", 8);
                i0__namespace.ɵɵelementStart(9, "div", 9);
                i0__namespace.ɵɵelementStart(10, "ng-property-tab", 10);
                i0__namespace.ɵɵlistener("inspect", function DirectiveExplorerComponent_Template_ng_property_tab_inspect_10_listener($event) { return ctx.inspect($event); })("viewSource", function DirectiveExplorerComponent_Template_ng_property_tab_viewSource_10_listener() { return ctx.viewSource(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("direction", ctx.splitDirection)("gutterSize", 9);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("gutterSize", 9)("disabled", true);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("forest", ctx.forest)("currentSelectedElement", ctx.currentSelectedElement);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.parents);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("currentSelectedElement", ctx.currentSelectedElement);
            }
        }, directives: [SplitComponent, SplitAreaDirective, DirectiveForestComponent, i1__namespace$1.NgIf, PropertyTabComponent, BreadcrumbsComponent], styles: ["[_nghost-%COMP%]{height:100%}[_nghost-%COMP%]     as-split-area{overflow-y:hidden}[_nghost-%COMP%]     .as-split-gutter-icon{display:none}.property-tab-wrapper[_ngcontent-%COMP%]{overflow:auto;height:100%;width:100%}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DirectiveExplorerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-directive-explorer',
                        templateUrl: './directive-explorer.component.html',
                        styleUrls: ['./directive-explorer.component.scss'],
                        providers: [
                            {
                                provide: ElementPropertyResolver,
                                useClass: ElementPropertyResolver,
                            },
                        ],
                    }]
            }], function () { return [{ type: ApplicationOperations }, { type: i2__namespace.MessageBus }, { type: ElementPropertyResolver }, { type: i0__namespace.ChangeDetectorRef }, { type: i0__namespace.NgZone }]; }, { toggleInspector: [{
                    type: i0.Output
                }], splitElementRef: [{
                    type: i0.ViewChild,
                    args: [SplitComponent, { static: true, read: i0.ElementRef }]
                }], directiveForestSplitArea: [{
                    type: i0.ViewChild,
                    args: ['directiveForestSplitArea', { static: true, read: i0.ElementRef }]
                }], directiveForest: [{
                    type: i0.ViewChild,
                    args: [DirectiveForestComponent]
                }], breadcrumbs: [{
                    type: i0.ViewChild,
                    args: [BreadcrumbsComponent]
                }] });
    })();

    var ApplicationEnvironment = /** @class */ (function () {
        function ApplicationEnvironment() {
        }
        return ApplicationEnvironment;
    }());

    function ProfilerImportDialogComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "h1", 2);
            i0__namespace.ɵɵtext(2, " Error ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div", 3);
            i0__namespace.ɵɵelementStart(4, "p");
            i0__namespace.ɵɵtext(5, " Could not process uploaded file. ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "p", 4);
            i0__namespace.ɵɵtext(7);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "div", 5);
            i0__namespace.ɵɵelementStart(9, "button", 6);
            i0__namespace.ɵɵtext(10, " Close ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(7);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.data.errorMessage, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("mat-dialog-close", false);
        }
    }
    function ProfilerImportDialogComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "h1", 2);
            i0__namespace.ɵɵtext(2, " Warning ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div", 3);
            i0__namespace.ɵɵelementStart(4, "p");
            i0__namespace.ɵɵtext(5, " The file you are attempting to upload was recorded in a different format than the one supported by your current Angular DevTools version ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "p");
            i0__namespace.ɵɵtext(7, " Current format version: ");
            i0__namespace.ɵɵelementStart(8, "span", 7);
            i0__namespace.ɵɵtext(9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "p");
            i0__namespace.ɵɵtext(11, " Format version of uploaded file: ");
            i0__namespace.ɵɵelementStart(12, "span", 8);
            i0__namespace.ɵɵtext(13);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(14, "p");
            i0__namespace.ɵɵtext(15, " Files recorded in older versions may no longer be compatible. Do you wish to continue? ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(16, "div", 5);
            i0__namespace.ɵɵelementStart(17, "button", 6);
            i0__namespace.ɵɵtext(18, " No Thanks ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(19, "button", 6);
            i0__namespace.ɵɵtext(20, " Yes ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(9);
            i0__namespace.ɵɵtextInterpolate(ctx_r1.data.profilerVersion);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(ctx_r1.data.importedVersion);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("mat-dialog-close", false);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("mat-dialog-close", true);
        }
    }
    var ProfilerImportDialogComponent = /** @class */ (function () {
        function ProfilerImportDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        return ProfilerImportDialogComponent;
    }());
    ProfilerImportDialogComponent.ɵfac = function ProfilerImportDialogComponent_Factory(t) { return new (t || ProfilerImportDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$3.MatDialogRef), i0__namespace.ɵɵdirectiveInject(i1$3.MAT_DIALOG_DATA)); };
    ProfilerImportDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ProfilerImportDialogComponent, selectors: [["ng-profiler-import-dialog"]], decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "error"], ["mat-dialog-actions", ""], ["mat-flat-button", "", 3, "mat-dialog-close"], [1, "version", "profiler-version"], [1, "version", "imported-version"]], template: function ProfilerImportDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementContainerStart(0, 0);
                i0__namespace.ɵɵtemplate(1, ProfilerImportDialogComponent_ng_container_1_Template, 11, 2, "ng-container", 1);
                i0__namespace.ɵɵtemplate(2, ProfilerImportDialogComponent_ng_container_2_Template, 21, 4, "ng-container", 1);
                i0__namespace.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngSwitch", ctx.data.status);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", "ERROR");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", "INVALID_VERSION");
            }
        }, directives: [i1__namespace$1.NgSwitch, i1__namespace$1.NgSwitchCase, i1__namespace$3.MatDialogTitle, i1__namespace$3.MatDialogContent, i1__namespace$3.MatDialogActions, i3__namespace.MatButton, i1__namespace$3.MatDialogClose], styles: [".version[_ngcontent-%COMP%]{font-weight:400;font-size:16px}.profiler-version[_ngcontent-%COMP%]{color:#388e3c}.error[_ngcontent-%COMP%], .imported-version[_ngcontent-%COMP%]{color:#d32f2f}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProfilerImportDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-profiler-import-dialog',
                        templateUrl: './profiler-import-dialog.component.html',
                        styleUrls: ['./profiler-import-dialog.component.scss'],
                    }]
            }], function () {
            return [{ type: i1__namespace$3.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$3.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    // Copyright (c) 2020 The Chromium Authors. All rights reserved.
    // Use of this source code is governed by a BSD-style license that can be
    // found in the LICENSE file.
    /*
     * @param date to convert to a compact ISO8601 format
     * @return date in a compact ISO8601 format
     */
    var toISO8601Compact = function (date) {
        /*
         * @param x an integer to append a leading 0 to if less than 9
         * @return x with a leading 0 appended if less than 9
         */
        function leadZero(x) {
            return (x > 9 ? '' : '0') + x;
        }
        return (date.getFullYear() +
            leadZero(date.getMonth() + 1) +
            leadZero(date.getDate()) +
            'T' +
            leadZero(date.getHours()) +
            leadZero(date.getMinutes()) +
            leadZero(date.getSeconds()));
    };

    var FileApiService = /** @class */ (function () {
        function FileApiService() {
            this.uploadedData = new rxjs.Subject();
        }
        FileApiService.prototype.publishFileUpload = function (parentEvent) {
            var _this = this;
            var reader = new FileReader();
            reader.onload = function (event) {
                try {
                    _this.uploadedData.next(JSON.parse(event.target.result));
                }
                catch (e) {
                    _this.uploadedData.next({ error: e });
                }
                parentEvent.target.value = '';
            };
            reader.readAsText(parentEvent.target.files[0]);
        };
        FileApiService.prototype.saveObjectAsJSON = function (object) {
            var downloadLink = document.createElement('a');
            downloadLink.download = "NgDevTools-Profile-" + toISO8601Compact(new Date()) + ".json";
            downloadLink.href = URL.createObjectURL(new Blob([JSON.stringify(object)], { type: 'application/json' }));
            downloadLink.click();
            setTimeout(function () { return URL.revokeObjectURL(downloadLink.href); });
        };
        return FileApiService;
    }());
    FileApiService.ɵfac = function FileApiService_Factory(t) { return new (t || FileApiService)(); };
    FileApiService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FileApiService, factory: FileApiService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FileApiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], null, null);
    })();

    var mergeProperty = function (mergeInProp, value) {
        if (mergeInProp === undefined) {
            return value;
        }
        if (value === undefined) {
            return mergeInProp;
        }
        return mergeInProp + value;
    };
    var mergeDirective = function (mergeIn, second) {
        mergeIn.changeDetection = mergeProperty(mergeIn.changeDetection, second.changeDetection);
        Object.keys(mergeIn.lifecycle).forEach(function (hook) {
            mergeIn.lifecycle[hook] = mergeProperty(mergeIn.lifecycle[hook], second.lifecycle[hook]);
        });
    };
    var mergeDirectives = function (mergeIn, second) {
        var _loop_1 = function (i) {
            if (!mergeIn[i]) {
                mergeIn[i] = {
                    children: [],
                    directives: [],
                };
            }
            second[i].directives.forEach(function (d, idx) {
                var mergeInDirective = mergeIn[i].directives[idx];
                if (mergeInDirective && mergeInDirective.name === d.name) {
                    mergeDirective(mergeInDirective, d);
                }
                else {
                    mergeIn[i].directives.push(d);
                }
            });
            mergeDirectives(mergeIn[i].children, second[i].children);
        };
        for (var i = 0; i < second.length; i++) {
            _loop_1(i);
        }
    };
    var mergeFrame = function (mergeIn, second) {
        mergeIn.duration += second.duration;
        mergeIn.source = '';
        mergeDirectives(mergeIn.directives, second.directives);
    };
    var mergeFrames = function (frames) {
        if (!frames || !frames.length) {
            return null;
        }
        var first = JSON.parse(JSON.stringify(frames[0]));
        for (var i = 1; i < frames.length; i++) {
            mergeFrame(first, frames[i]);
        }
        return first;
    };

    function TimelineComponent_ng_recording_modal_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "ng-recording-modal");
        }
    }
    function TimelineComponent_p_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 6);
            i0__namespace.ɵɵtext(1, "There's no information to show.");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function TimelineComponent_p_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 6);
            i0__namespace.ɵɵtext(1, "Select a bar to preview a particular change detection cycle.");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function TimelineComponent_ng_timeline_visualizer_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "ng-timeline-visualizer", 7);
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("visualizationMode", ctx_r3.visualizationMode)("frame", ctx_r3.frame)("changeDetection", ctx_r3.changeDetection);
        }
    }
    var VisualizationMode;
    (function (VisualizationMode) {
        VisualizationMode[VisualizationMode["FlameGraph"] = 0] = "FlameGraph";
        VisualizationMode[VisualizationMode["TreeMap"] = 1] = "TreeMap";
        VisualizationMode[VisualizationMode["BarGraph"] = 2] = "BarGraph";
    })(VisualizationMode || (VisualizationMode = {}));
    var MAX_HEIGHT = 50;
    var TimelineComponent = /** @class */ (function () {
        function TimelineComponent() {
            this.exportProfile = new i0.EventEmitter();
            this.visualizationMode = VisualizationMode.BarGraph;
            this.changeDetection = false;
            this.frame = null;
            this._maxDuration = -Infinity;
            this._allRecords = [];
            this._graphDataSubject = new rxjs.BehaviorSubject([]);
            this.visualizing = false;
            this.graphData$ = this._graphDataSubject.asObservable().pipe(operators.share());
        }
        Object.defineProperty(TimelineComponent.prototype, "stream", {
            set: function (data) {
                var _this = this;
                if (this._subscription) {
                    this._subscription.unsubscribe();
                }
                this._allRecords = [];
                this._maxDuration = -Infinity;
                this._subscription = data.subscribe({
                    next: function (frames) {
                        _this._processFrames(frames);
                    },
                    complete: function () {
                        _this.visualizing = true;
                    },
                });
            },
            enumerable: false,
            configurable: true
        });
        TimelineComponent.prototype.selectFrames = function (_a) {
            var _this = this;
            var indexes = _a.indexes;
            this.frame = mergeFrames(indexes.map(function (index) { return _this._allRecords[index]; }));
        };
        Object.defineProperty(TimelineComponent.prototype, "hasFrames", {
            get: function () {
                return this._allRecords.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        TimelineComponent.prototype.estimateFrameRate = function (timeSpent) {
            var multiplier = Math.max(Math.ceil(timeSpent / 16) - 1, 0);
            return Math.floor(60 / Math.pow(2, multiplier));
        };
        TimelineComponent.prototype.getColorByFrameRate = function (framerate) {
            if (framerate >= 60) {
                return '#5cadd3';
            }
            else if (framerate < 60 && framerate >= 30) {
                return '#8a1882';
            }
            else if (framerate < 30 && framerate >= 15) {
                return '#9b4807';
            }
            return '#ce271e';
        };
        TimelineComponent.prototype.ngOnDestroy = function () {
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
        };
        TimelineComponent.prototype._processFrames = function (frames) {
            var e_1, _a;
            var _this = this;
            var regenerate = false;
            try {
                for (var frames_1 = __values(frames), frames_1_1 = frames_1.next(); !frames_1_1.done; frames_1_1 = frames_1.next()) {
                    var frame = frames_1_1.value;
                    if (frame.duration >= this._maxDuration) {
                        regenerate = true;
                    }
                    this._allRecords.push(frame);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (frames_1_1 && !frames_1_1.done && (_a = frames_1.return)) _a.call(frames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (regenerate) {
                this._graphDataSubject.next(this._generateBars());
                return;
            }
            var multiplicationFactor = parseFloat((MAX_HEIGHT / this._maxDuration).toFixed(2));
            frames.forEach(function (frame) { return _this._graphDataSubject.value.push(_this._getBarStyles(frame, multiplicationFactor)); });
            // We need to pass a new reference, because the CDK virtual scroll
            // has OnPush strategy, so it doesn't update the UI otherwise.
            // If this turns out ot be a bottleneck, we can easily create an immutable reference.
            this._graphDataSubject.next(this._graphDataSubject.value.slice());
        };
        TimelineComponent.prototype._generateBars = function () {
            var _this = this;
            var maxValue = this._allRecords.reduce(function (acc, frame) { return Math.max(acc, frame.duration); }, 0);
            var multiplicationFactor = parseFloat((MAX_HEIGHT / maxValue).toFixed(2));
            this._maxDuration = Math.max(this._maxDuration, maxValue);
            return this._allRecords.map(function (r) { return _this._getBarStyles(r, multiplicationFactor); });
        };
        TimelineComponent.prototype._getBarStyles = function (record, multiplicationFactor) {
            var height = record.duration * multiplicationFactor;
            var colorPercentage = Math.max(10, Math.round((height / MAX_HEIGHT) * 100));
            var backgroundColor = this.getColorByFrameRate(this.estimateFrameRate(record.duration));
            var style = {
                'background-image': "-webkit-linear-gradient(bottom, " + backgroundColor + " " + colorPercentage + "%, transparent " + colorPercentage + "%)",
                cursor: 'pointer',
                'min-width': '25px',
                width: '25px',
                height: '50px',
            };
            var toolTip = record.source + " TimeSpent: " + record.duration.toFixed(3) + "ms";
            return { style: style, toolTip: toolTip };
        };
        return TimelineComponent;
    }());
    TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
    TimelineComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TimelineComponent, selectors: [["ng-recording-timeline"]], inputs: { stream: "stream" }, outputs: { exportProfile: "exportProfile" }, decls: 7, vars: 15, consts: [[4, "ngIf"], ["class", "info", 4, "ngIf"], [2, "margin", "10px", "height", "100%"], [3, "record", "empty", "frameColor", "estimatedFrameRate", "visualizationMode", "changeDetection", "changeVisualizationMode", "exportProfile", "toggleChangeDetection"], [3, "graphData$", "selectFrames"], [3, "visualizationMode", "frame", "changeDetection", 4, "ngIf"], [1, "info"], [3, "visualizationMode", "frame", "changeDetection"]], template: function TimelineComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, TimelineComponent_ng_recording_modal_0_Template, 1, 0, "ng-recording-modal", 0);
                i0__namespace.ɵɵtemplate(1, TimelineComponent_p_1_Template, 2, 0, "p", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelementStart(3, "ng-timeline-controls", 3);
                i0__namespace.ɵɵlistener("changeVisualizationMode", function TimelineComponent_Template_ng_timeline_controls_changeVisualizationMode_3_listener($event) { return ctx.visualizationMode = $event; })("exportProfile", function TimelineComponent_Template_ng_timeline_controls_exportProfile_3_listener($event) { return ctx.exportProfile.emit($event); })("toggleChangeDetection", function TimelineComponent_Template_ng_timeline_controls_toggleChangeDetection_3_listener($event) { return ctx.changeDetection = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "ng-frame-selector", 4);
                i0__namespace.ɵɵlistener("selectFrames", function TimelineComponent_Template_ng_frame_selector_selectFrames_4_listener($event) { return ctx.selectFrames($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(5, TimelineComponent_p_5_Template, 2, 0, "p", 1);
                i0__namespace.ɵɵtemplate(6, TimelineComponent_ng_timeline_visualizer_6_Template, 1, 3, "ng-timeline-visualizer", 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", !ctx.hasFrames && !ctx.visualizing);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.hasFrames && ctx.visualizing);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵclassProp("hidden", !ctx.hasFrames);
                i0__namespace.ɵɵproperty("record", ctx.frame)("empty", !ctx.hasFrames)("frameColor", ctx.getColorByFrameRate(ctx.estimateFrameRate(ctx.frame == null ? null : ctx.frame.duration)))("estimatedFrameRate", ctx.estimateFrameRate(ctx.frame == null ? null : ctx.frame.duration))("visualizationMode", ctx.visualizationMode)("changeDetection", ctx.changeDetection);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("hidden", !ctx.hasFrames);
                i0__namespace.ɵɵproperty("graphData$", ctx.graphData$);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.hasFrames && !ctx.frame);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.hasFrames && ctx.frame);
            }
        }, styles: ["[_nghost-%COMP%]{font-size:11px;width:100%;height:100%;display:block}.info[_ngcontent-%COMP%]{margin-top:16px;font-size:1.2em;text-align:center}.hidden[_ngcontent-%COMP%]{visibility:hidden}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TimelineComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-recording-timeline',
                        templateUrl: './timeline.component.html',
                        styleUrls: ['./timeline.component.scss'],
                    }]
            }], null, { stream: [{
                    type: i0.Input
                }], exportProfile: [{
                    type: i0.Output
                }] });
    })();

    function ProfilerComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 8);
            i0__namespace.ɵɵlistener("click", function ProfilerComponent_button_2_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.startRecording(); });
            i0__namespace.ɵɵelementStart(1, "mat-icon");
            i0__namespace.ɵɵtext(2, " circle ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function ProfilerComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 9);
            i0__namespace.ɵɵlistener("click", function ProfilerComponent_button_3_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.stopRecording(); });
            i0__namespace.ɵɵelementStart(1, "mat-icon");
            i0__namespace.ɵɵtext(2, " circle ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function ProfilerComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 10);
            i0__namespace.ɵɵlistener("click", function ProfilerComponent_button_4_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r9_1); var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.discardRecording(); });
            i0__namespace.ɵɵelementStart(1, "mat-icon");
            i0__namespace.ɵɵtext(2, " not_interested ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function ProfilerComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 11);
            i0__namespace.ɵɵelementStart(1, "ng-recording-timeline", 12);
            i0__namespace.ɵɵlistener("exportProfile", function ProfilerComponent_div_16_Template_ng_recording_timeline_exportProfile_1_listener() { i0__namespace.ɵɵrestoreView(_r11_1); var ctx_r10 = i0__namespace.ɵɵnextContext(); return ctx_r10.exportProfilerResults(); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("stream", ctx_r3.stream);
        }
    }
    var SUPPORTED_VERSIONS = [1];
    var PROFILER_VERSION = 1;
    var ProfilerComponent = /** @class */ (function () {
        function ProfilerComponent(_fileApiService, _messageBus, dialog) {
            this._fileApiService = _fileApiService;
            this._messageBus = _messageBus;
            this.dialog = dialog;
            this.state = 'idle';
            this.stream = new rxjs.Subject();
            // We collect this buffer so we can have it available for export.
            this._buffer = [];
        }
        ProfilerComponent.prototype.startRecording = function () {
            this.state = 'recording';
            this._messageBus.emit('startProfiling');
        };
        ProfilerComponent.prototype.stopRecording = function () {
            this.state = 'visualizing';
            this._messageBus.emit('stopProfiling');
            this.stream.complete();
        };
        ProfilerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._messageBus.on('profilerResults', function (remainingRecords) {
                if (remainingRecords.duration > 0 && remainingRecords.source) {
                    _this.stream.next([remainingRecords]);
                    _this._buffer.push(remainingRecords);
                }
            });
            this._messageBus.on('sendProfilerChunk', function (chunkOfRecords) {
                _this.stream.next([chunkOfRecords]);
                _this._buffer.push(chunkOfRecords);
            });
            this._fileUploadSubscription = this._fileApiService.uploadedData.subscribe(function (importedFile) {
                if (importedFile.error) {
                    console.error('Could not process uploaded file');
                    console.error(importedFile.error);
                    _this.dialog.open(ProfilerImportDialogComponent, {
                        width: '600px',
                        data: { status: 'ERROR', errorMessage: importedFile.error },
                    });
                    return;
                }
                if (!SUPPORTED_VERSIONS.includes(importedFile.version)) {
                    var processDataDialog = _this.dialog.open(ProfilerImportDialogComponent, {
                        width: '600px',
                        data: { importedVersion: importedFile.version, profilerVersion: PROFILER_VERSION, status: 'INVALID_VERSION' },
                    });
                    processDataDialog.afterClosed().subscribe(function (result) {
                        if (result) {
                            _this.state = 'visualizing';
                            _this._buffer = importedFile.buffer;
                            setTimeout(function () { return _this.stream.next(importedFile.buffer); });
                        }
                    });
                }
                else {
                    _this.state = 'visualizing';
                    _this._buffer = importedFile.buffer;
                    setTimeout(function () { return _this.stream.next(importedFile.buffer); });
                }
            });
        };
        ProfilerComponent.prototype.ngOnDestroy = function () {
            this._fileUploadSubscription.unsubscribe();
        };
        ProfilerComponent.prototype.exportProfilerResults = function () {
            var fileToExport = {
                version: PROFILER_VERSION,
                buffer: this._buffer,
            };
            this._fileApiService.saveObjectAsJSON(fileToExport);
        };
        ProfilerComponent.prototype.importProfilerResults = function (event) {
            this._fileApiService.publishFileUpload(event);
        };
        ProfilerComponent.prototype.discardRecording = function () {
            this.stream = new rxjs.Subject();
            this.state = 'idle';
            this._buffer = [];
        };
        return ProfilerComponent;
    }());
    ProfilerComponent.ɵfac = function ProfilerComponent_Factory(t) { return new (t || ProfilerComponent)(i0__namespace.ɵɵdirectiveInject(FileApiService), i0__namespace.ɵɵdirectiveInject(i2__namespace.MessageBus), i0__namespace.ɵɵdirectiveInject(i1__namespace$3.MatDialog)); };
    ProfilerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ProfilerComponent, selectors: [["ng-profiler"]], decls: 17, vars: 10, consts: [[1, "profiler-wrapper"], ["mat-icon-button", "", "color", "primary", "class", "profiler-control start-recording-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "profiler-control recording-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "class", "profiler-control discard-button", 3, "click", 4, "ngIf"], [1, "instructions"], ["type", "file", "placeholder", "Upload file", "accept", ".json", 3, "change"], ["id", "profiler-content-wrapper"], ["class", "visualization", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", 1, "profiler-control", "start-recording-button", 3, "click"], ["mat-icon-button", "", 1, "profiler-control", "recording-button", 3, "click"], ["mat-icon-button", "", "color", "primary", 1, "profiler-control", "discard-button", 3, "click"], [1, "visualization"], [3, "stream", "exportProfile"]], template: function ProfilerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "mat-card");
                i0__namespace.ɵɵtemplate(2, ProfilerComponent_button_2_Template, 3, 0, "button", 1);
                i0__namespace.ɵɵtemplate(3, ProfilerComponent_button_3_Template, 3, 0, "button", 2);
                i0__namespace.ɵɵtemplate(4, ProfilerComponent_button_4_Template, 3, 0, "button", 3);
                i0__namespace.ɵɵelementStart(5, "p", 4);
                i0__namespace.ɵɵelementStart(6, "span");
                i0__namespace.ɵɵtext(7, " Click the play button to start a new recording, or upload a json file containing profiler data. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(8, "br");
                i0__namespace.ɵɵelementStart(9, "span");
                i0__namespace.ɵɵelementStart(10, "input", 5);
                i0__namespace.ɵɵlistener("change", function ProfilerComponent_Template_input_change_10_listener($event) { return ctx.importProfilerResults($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "p", 4);
                i0__namespace.ɵɵtext(12, " Interact to preview change detection. Clicking stop ends this Profiler recording. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "p", 4);
                i0__namespace.ɵɵtext(14, " Click Save Profile to save your recording or click refresh to clear the current recording. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "div", 6);
                i0__namespace.ɵɵtemplate(16, ProfilerComponent_div_16_Template, 2, 1, "div", 7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.state === "idle");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.state === "recording");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.state === "visualizing");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("hidden", ctx.state !== "idle");
                i0__namespace.ɵɵadvance(6);
                i0__namespace.ɵɵclassProp("hidden", ctx.state !== "recording");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵclassProp("hidden", ctx.state !== "visualizing");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.state !== "idle");
            }
        }, directives: [i1__namespace.MatCard, i1__namespace$1.NgIf, i3__namespace.MatButton, i2__namespace$1.MatIcon, TimelineComponent], styles: [".profiler-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{font-size:1em;width:100%;height:calc(100% - 30px)}.mat-card[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid rgba(0,0,0,.12);height:wrap-content;margin:0!important;padding:5px!important;box-shadow:none!important;border-radius:0}.mat-icon[_ngcontent-%COMP%]{font-size:18px}.profiler-control[_ngcontent-%COMP%]{cursor:pointer}.profiler-control.recording-button[_ngcontent-%COMP%]{color:#d83c34}.instructions[_ngcontent-%COMP%]{margin-bottom:0!important;align-self:center}.instructions.hidden[_ngcontent-%COMP%]{display:none}.instructions[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .instructions[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:5px;font-size:1em;cursor:pointer}#profiler-content-wrapper[_ngcontent-%COMP%]{width:100%;position:relative;overflow:hidden}#profiler-content-wrapper[_ngcontent-%COMP%], .recording[_ngcontent-%COMP%]{margin:0;height:calc(100% - 24px)}.visualization[_ngcontent-%COMP%]{margin:0;height:100%}.dark-theme[_nghost-%COMP%]   .profiler-control.recording-button[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .profiler-control.recording-button[_ngcontent-%COMP%]{color:#ff625a}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProfilerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-profiler',
                        templateUrl: './profiler.component.html',
                        styleUrls: ['./profiler.component.scss'],
                    }]
            }], function () { return [{ type: FileApiService }, { type: i2__namespace.MessageBus }, { type: i1__namespace$3.MatDialog }]; }, null);
    })();

    var _c0$4 = ["svgContainer"];
    var _c1$1 = ["mainGroup"];
    var RouterTreeComponent = /** @class */ (function () {
        function RouterTreeComponent(_messageBus) {
            this._messageBus = _messageBus;
            this._routes = [];
        }
        Object.defineProperty(RouterTreeComponent.prototype, "routes", {
            set: function (routes) {
                this._routes = routes;
                this.render();
            },
            enumerable: false,
            configurable: true
        });
        RouterTreeComponent.prototype.ngAfterViewInit = function () {
            this._messageBus.emit('getRoutes');
        };
        RouterTreeComponent.prototype.render = function () {
            var _this = this;
            var _a, _b;
            if (this._routes.length === 0 || !this.g) {
                return;
            }
            // cleanup old render
            (_b = (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.remove) === null || _b === void 0 ? void 0 : _b.call(_a);
            d3__namespace.select(this.g.nativeElement).selectAll('*').remove();
            this.tree = d3__namespace.tree();
            var svg = d3__namespace.select(this.svgContainer.nativeElement);
            svg.attr('height', 500).attr('width', 500);
            var g = d3__namespace.select(this.g.nativeElement);
            var svgPadding = 20;
            // Compute the new tree layout.
            this.tree.nodeSize([75, 200]);
            var root = this._routes[0];
            var nodes = this.tree(d3__namespace.hierarchy(root.children.length === 0 || root.children.length > 1 ? root : root.children[0], function (d) { return d.children; }));
            // Define the div for the tooltip
            this.tooltip = d3__namespace.select('body').append('div').attr('class', 'tooltip').style('opacity', 0).style('padding', '0');
            g.selectAll('.link')
                .data(nodes.descendants().slice(1))
                .enter()
                .append('path')
                .attr('class', 'link')
                .attr('d', function (d) { return "\n            M" + d.y + "," + d.x + "\n            C" + (d.y + d.parent.y) / 2 + ",\n              " + d.x + " " + (d.y + d.parent.y) / 2 + ",\n              " + d.parent.x + " " + d.parent.y + ",\n              " + d.parent.x; });
            // Declare the nodes
            var node = g
                .selectAll('g.node')
                .data(nodes.descendants())
                .enter()
                .append('g')
                .attr('class', 'node')
                .on('mouseover', function (n) {
                var content = "\n          <b>Name:</b> " + n.data.name + "<br/>\n          <b>Path:</b> " + n.data.path + "<br/>\n          <b>Auxiliary Route:</b> " + n.data.isAux + "<br/>\n          <b>Specificity:</b> " + n.data.specificity + "<br/>\n          <b>Handler:</b> " + n.data.handler + "<br/>\n        ";
                _this.tooltip.style('padding', '4px 8px').transition().style('opacity', 0.9);
                _this.tooltip
                    .html(content)
                    .style('left', d3__namespace.event.pageX + 8 + 'px')
                    .style('top', d3__namespace.event.pageY + 8 + 'px');
            })
                .on('mouseout', function () { return _this.tooltip.transition().style('opacity', 0); })
                .attr('transform', function (d) { return "translate(" + d.y + "," + d.x + ")"; });
            node
                .append('circle')
                .attr('class', function (d) { return (d.data.isAux ? 'node-aux-route' : 'node-route'); })
                .attr('r', 6);
            node
                .append('text')
                .attr('dy', function (d) { return (d.depth === 0 || !d.children ? '0.35em' : '-1.50em'); })
                .attr('dx', function (d) {
                if (d.parent && d.children) {
                    return 6;
                }
                else if (!d.parent && d.children) {
                    return -13;
                }
                else if (d.parent && !d.children) {
                    return 13;
                }
            })
                .attr('text-anchor', function (d) { return (d.children ? 'end' : 'start'); })
                .text(function (d) {
                var label = d.data.name;
                return label.length > 20 ? label.slice(0, 17) + '...' : label;
            });
            // reset transform
            g.attr('transform', 'translate(0, 0)');
            var svgRect = this.svgContainer.nativeElement.getBoundingClientRect();
            var gElRect = this.g.nativeElement.getBoundingClientRect();
            g.attr('transform', "translate(\n        " + (svgRect.left - gElRect.left + svgPadding) + ",\n        " + (svgRect.top - gElRect.top + svgPadding) + "\n      )");
            var height = gElRect.height + svgPadding * 2;
            var width = gElRect.width + svgPadding * 2;
            svg.attr('height', height).attr('width', width);
        };
        return RouterTreeComponent;
    }());
    RouterTreeComponent.ɵfac = function RouterTreeComponent_Factory(t) { return new (t || RouterTreeComponent)(i0__namespace.ɵɵdirectiveInject(i2__namespace.MessageBus)); };
    RouterTreeComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: RouterTreeComponent, selectors: [["ng-router-tree"]], viewQuery: function RouterTreeComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$4, 7);
                i0__namespace.ɵɵviewQuery(_c1$1, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.svgContainer = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.g = _t.first);
            }
        }, inputs: { routes: "routes" }, decls: 8, vars: 2, consts: [[1, "router-tree-wrapper"], [1, "no-routes", 3, "hidden"], [1, "svg-container", 3, "hidden"], ["svgContainer", ""], ["mainGroup", ""]], template: function RouterTreeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "h1");
                i0__namespace.ɵɵtext(3, " There are no routes to display. ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵnamespaceSVG();
                i0__namespace.ɵɵelementStart(4, "svg", 2, 3);
                i0__namespace.ɵɵelement(6, "g", null, 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("hidden", (ctx.routes == null ? null : ctx.routes.length) !== 0);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("hidden", (ctx.routes == null ? null : ctx.routes.length) === 0);
            }
        }, styles: [".router-tree-wrapper[_ngcontent-%COMP%]{font-size:1em;width:100%;height:100%;overflow-x:auto}.no-routes[_ngcontent-%COMP%]{padding-top:1rem;text-align:center;color:#b0b0b0}.svg-container[_ngcontent-%COMP%]{max-height:inherit}  .tooltip{position:absolute;background:#ebf1fb;border:0;border-radius:2px;pointer-events:none;font-family:Roboto,Helvetica Neue,sans-serif;font-size:.8rem;line-height:1.25rem}[_nghost-%COMP%]     .link{stroke:#9b9b9b;stroke-width:1px;fill:none}[_nghost-%COMP%]     .node{cursor:pointer}[_nghost-%COMP%]     .node-route{stroke:#f05057;fill:#fff0f0;stroke-width:1px}[_nghost-%COMP%]     .node-route.selected, [_nghost-%COMP%]     .node-route:hover{fill:#f05057}[_nghost-%COMP%]     .node-aux-route{stroke:#2828ab;fill:#ebf2fc;stroke-width:1px}[_nghost-%COMP%]     .node-aux-route.selected, [_nghost-%COMP%]     .node-aux-route:hover{fill:#2828ab}[_nghost-%COMP%]     text{fill:#000;font-weight:300}.dark-theme[_nghost-%COMP%]     .link, .dark-theme   [_nghost-%COMP%]     .link{stroke:#bcc5ce;stroke-width:1px;fill:none}.dark-theme[_nghost-%COMP%]     .node-route, .dark-theme   [_nghost-%COMP%]     .node-route{stroke:#54c9bd;fill:#202124}.dark-theme[_nghost-%COMP%]     .node-route.selected, .dark-theme   [_nghost-%COMP%]     .node-route.selected, .dark-theme[_nghost-%COMP%]     .node-route:hover, .dark-theme   [_nghost-%COMP%]     .node-route:hover{fill:#54c9bd}.dark-theme[_nghost-%COMP%]     .node-aux-route, .dark-theme   [_nghost-%COMP%]     .node-aux-route{stroke:#2828ab;fill:#ebf2fc}.dark-theme[_nghost-%COMP%]     .node-aux-route.selected, .dark-theme   [_nghost-%COMP%]     .node-aux-route.selected, .dark-theme[_nghost-%COMP%]     .node-aux-route:hover, .dark-theme   [_nghost-%COMP%]     .node-aux-route:hover{fill:#2828ab}.dark-theme[_nghost-%COMP%]     text, .dark-theme   [_nghost-%COMP%]     text{fill:#bcc5ce}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RouterTreeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-router-tree',
                        templateUrl: './router-tree.component.html',
                        styleUrls: ['./router-tree.component.scss'],
                    }]
            }], function () { return [{ type: i2__namespace.MessageBus }]; }, { svgContainer: [{
                    type: i0.ViewChild,
                    args: ['svgContainer', { static: true }]
                }], g: [{
                    type: i0.ViewChild,
                    args: ['mainGroup', { static: true }]
                }], routes: [{
                    type: i0.Input
                }] });
    })();

    var _c0$3 = ["navBar"];
    function DevToolsTabsComponent_a_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "a", 15);
            i0__namespace.ɵɵlistener("click", function DevToolsTabsComponent_a_12_Template_a_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r6_1); var tab_r4 = restoredCtx.$implicit; var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.changeTab(tab_r4); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tab_r4 = ctx.$implicit;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("active", ctx_r1.activeTab === tab_r4);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", tab_r4, " ");
        }
    }
    function DevToolsTabsComponent_section_13_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var sha_r8 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" | DevTools SHA: ", sha_r8, " ");
        }
    }
    function DevToolsTabsComponent_section_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "section", 16);
            i0__namespace.ɵɵtext(1, " Angular version: ");
            i0__namespace.ɵɵelementStart(2, "span", 17);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, DevToolsTabsComponent_section_13_ng_container_4_Template, 2, 1, "ng-container", 18);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r2.angularVersion, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.latestSHA);
        }
    }
    var _c1 = function (a0) { return { "inspector-active": a0 }; };
    var _c2 = function (a0) { return { hidden: a0 }; };
    var DevToolsTabsComponent = /** @class */ (function () {
        function DevToolsTabsComponent(tabUpdate, themeService, _messageBus, _applicationEnvironment) {
            this.tabUpdate = tabUpdate;
            this.themeService = themeService;
            this._messageBus = _messageBus;
            this._applicationEnvironment = _applicationEnvironment;
            this.angularVersion = undefined;
            this.activeTab = 'Components';
            this.inspectorRunning = false;
            this.routerTreeEnabled = false;
            this.routes = [];
        }
        DevToolsTabsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._currentThemeSubscription = this.themeService.currentTheme.subscribe(function (theme) { return (_this.currentTheme = theme); });
            this._messageBus.on('updateRouterTree', function (routes) {
                _this.routes = routes || [];
            });
        };
        Object.defineProperty(DevToolsTabsComponent.prototype, "tabs", {
            get: function () {
                var alwaysShown = ['Components', 'Profiler'];
                return this.routes.length === 0 ? alwaysShown : __spreadArray(__spreadArray([], __read(alwaysShown)), ['Router Tree']);
            },
            enumerable: false,
            configurable: true
        });
        DevToolsTabsComponent.prototype.ngAfterViewInit = function () {
            this.navbar.disablePagination = true;
        };
        DevToolsTabsComponent.prototype.ngOnDestroy = function () {
            this._currentThemeSubscription.unsubscribe();
        };
        Object.defineProperty(DevToolsTabsComponent.prototype, "latestSHA", {
            get: function () {
                return this._applicationEnvironment.environment.process.env.LATEST_SHA;
            },
            enumerable: false,
            configurable: true
        });
        DevToolsTabsComponent.prototype.changeTab = function (tab) {
            this.activeTab = tab;
            this.tabUpdate.notify();
            if (tab === 'Router Tree') {
                this._messageBus.emit('getRoutes');
            }
        };
        DevToolsTabsComponent.prototype.toggleInspector = function () {
            this.toggleInspectorState();
            this.emitInspectorEvent();
        };
        DevToolsTabsComponent.prototype.emitInspectorEvent = function () {
            if (this.inspectorRunning) {
                this._messageBus.emit('inspectorStart');
                this.changeTab('Components');
            }
            else {
                this._messageBus.emit('inspectorEnd');
                this._messageBus.emit('removeHighlightOverlay');
            }
        };
        DevToolsTabsComponent.prototype.toggleInspectorState = function () {
            this.inspectorRunning = !this.inspectorRunning;
        };
        DevToolsTabsComponent.prototype.refresh = function () {
            this.directiveExplorer.refresh();
        };
        DevToolsTabsComponent.prototype.toggleTimingAPI = function (change) {
            change.checked ? this._messageBus.emit('enableTimingAPI') : this._messageBus.emit('disableTimingAPI');
        };
        return DevToolsTabsComponent;
    }());
    DevToolsTabsComponent.ɵfac = function DevToolsTabsComponent_Factory(t) { return new (t || DevToolsTabsComponent)(i0__namespace.ɵɵdirectiveInject(TabUpdate), i0__namespace.ɵɵdirectiveInject(ThemeService), i0__namespace.ɵɵdirectiveInject(i2__namespace.MessageBus), i0__namespace.ɵɵdirectiveInject(ApplicationEnvironment)); };
    DevToolsTabsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DevToolsTabsComponent, selectors: [["ng-devtools-tabs"]], viewQuery: function DevToolsTabsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(DirectiveExplorerComponent, 5);
                i0__namespace.ɵɵviewQuery(_c0$3, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.directiveExplorer = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.navbar = _t.first);
            }
        }, inputs: { angularVersion: "angularVersion" }, decls: 26, vars: 18, consts: [["mat-tab-nav-bar", "", 3, "color"], ["navBar", ""], ["id", "nav-buttons"], ["mat-icon-button", "", "color", "primary", 3, "click"], [3, "ngClass"], ["mat-icon-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["class", "mat-tab-link", "mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["id", "app-angular-version", 4, "ngIf"], [1, "tab-content"], [3, "ngClass", "toggleInspector"], [3, "routes", "ngClass"], [1, "options-menu"], ["menu", "matMenu"], [1, "menu-toggle-button", 3, "change", "click"], [1, "menu-toggle-button", 3, "checked", "change", "click"], ["mat-tab-link", "", 1, "mat-tab-link", 3, "active", "click"], ["id", "app-angular-version"], ["id", "version-number"], [4, "ngIf"]], template: function DevToolsTabsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "nav", 0, 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelementStart(3, "button", 3);
                i0__namespace.ɵɵlistener("click", function DevToolsTabsComponent_Template_button_click_3_listener() { return ctx.toggleInspector(); });
                i0__namespace.ɵɵelementStart(4, "mat-icon", 4);
                i0__namespace.ɵɵtext(5, " pin_end ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "button", 3);
                i0__namespace.ɵɵlistener("click", function DevToolsTabsComponent_Template_button_click_6_listener() { return ctx.refresh(); });
                i0__namespace.ɵɵelementStart(7, "mat-icon");
                i0__namespace.ɵɵtext(8, " refresh ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button", 5);
                i0__namespace.ɵɵelementStart(10, "mat-icon");
                i0__namespace.ɵɵtext(11, " settings ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(12, DevToolsTabsComponent_a_12_Template, 2, 2, "a", 6);
                i0__namespace.ɵɵtemplate(13, DevToolsTabsComponent_section_13_Template, 5, 2, "section", 7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "div", 8);
                i0__namespace.ɵɵelementStart(15, "ng-directive-explorer", 9);
                i0__namespace.ɵɵlistener("toggleInspector", function DevToolsTabsComponent_Template_ng_directive_explorer_toggleInspector_15_listener() { return ctx.toggleInspector(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(16, "ng-profiler", 4);
                i0__namespace.ɵɵelement(17, "ng-router-tree", 10);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "mat-menu", 11, 12);
                i0__namespace.ɵɵelementStart(20, "mat-slide-toggle", 13);
                i0__namespace.ɵɵlistener("change", function DevToolsTabsComponent_Template_mat_slide_toggle_change_20_listener($event) { return ctx.toggleTimingAPI($event); })("click", function DevToolsTabsComponent_Template_mat_slide_toggle_click_20_listener($event) { return $event.stopPropagation(); });
                i0__namespace.ɵɵtext(21, " Enable timing API ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(22, "br");
                i0__namespace.ɵɵelement(23, "br");
                i0__namespace.ɵɵelementStart(24, "mat-slide-toggle", 14);
                i0__namespace.ɵɵlistener("change", function DevToolsTabsComponent_Template_mat_slide_toggle_change_24_listener($event) { return ctx.themeService.toggleDarkMode($event.checked); })("click", function DevToolsTabsComponent_Template_mat_slide_toggle_click_24_listener($event) { return $event.stopPropagation(); });
                i0__namespace.ɵɵtext(25, " Dark Mode ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r3 = i0__namespace.ɵɵreference(19);
                i0__namespace.ɵɵproperty("color", "accent");
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(10, _c1, ctx.inspectorRunning));
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("matMenuTriggerFor", _r3);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngForOf", ctx.tabs);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.angularVersion);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(12, _c2, ctx.activeTab !== "Components"));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(14, _c2, ctx.activeTab !== "Profiler"));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("routes", ctx.routes)("ngClass", i0__namespace.ɵɵpureFunction1(16, _c2, ctx.activeTab !== "Router Tree"));
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("checked", ctx.currentTheme === "dark-theme");
            }
        }, directives: [i5__namespace.MatTabNav, i3__namespace.MatButton, i2__namespace$1.MatIcon, i1__namespace$1.NgClass, i9__namespace.MatMenuTrigger, i1__namespace$1.NgForOf, i1__namespace$1.NgIf, DirectiveExplorerComponent, ProfilerComponent, RouterTreeComponent, i9__namespace.MatMenu, i13__namespace.MatSlideToggle, i5__namespace.MatTabLink], styles: ["[_nghost-%COMP%]{position:relative;width:100%;height:100%;display:block}.hidden[_ngcontent-%COMP%]{display:none}.tab-content[_ngcontent-%COMP%]{height:calc(100% - 31px)}#nav-buttons[_ngcontent-%COMP%]{display:flex}.inspector-active[_ngcontent-%COMP%]{color:#1a73e8!important}#app-angular-version[_ngcontent-%COMP%]{align-self:center;margin-left:auto;margin-right:8px;font-size:.8em;font-weight:700;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#version-number[_ngcontent-%COMP%]{color:#1b1aa5;cursor:text;-moz-user-select:text;-webkit-user-select:text;user-select:text}button.mat-icon-button[_ngcontent-%COMP%]{height:30px;width:30px;line-height:30px;margin-right:0}mat-icon[_ngcontent-%COMP%]{font-size:16px}.mat-tab-link[_ngcontent-%COMP%]{min-width:unset;line-height:30px;height:30px;font-size:13px;padding:0 10px;opacity:1}  .options-menu{padding:1rem 1.25rem}  body.dark-theme .menu-toggle-button{color:#fff}.menu-toggle-button[_ngcontent-%COMP%]{font-size:.7em;font-weight:500;color:#777}.dark-theme[_nghost-%COMP%]   #version-number[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   #version-number[_ngcontent-%COMP%]{color:#5caace}.dark-theme[_nghost-%COMP%]   .inspector-active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .inspector-active[_ngcontent-%COMP%]{color:#4688f1!important}.light-theme[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}@media only screen and (max-width:700px){#app-angular-version[_ngcontent-%COMP%]{max-width:135px}}@media only screen and (max-width:420px){#app-angular-version[_ngcontent-%COMP%]{display:none}}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DevToolsTabsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-devtools-tabs',
                        templateUrl: './devtools-tabs.component.html',
                        styleUrls: ['./devtools-tabs.component.scss'],
                    }]
            }], function () { return [{ type: TabUpdate }, { type: ThemeService }, { type: i2__namespace.MessageBus }, { type: ApplicationEnvironment }]; }, { angularVersion: [{
                    type: i0.Input
                }], directiveExplorer: [{
                    type: i0.ViewChild,
                    args: [DirectiveExplorerComponent]
                }], navbar: [{
                    type: i0.ViewChild,
                    args: ['navBar', { static: true }]
                }] });
    })();

    function DevToolsComponent_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 6);
            i0__namespace.ɵɵelement(1, "ng-devtools-tabs", 7);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵproperty("@enterAnimation", undefined);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("angularVersion", ctx_r6.angularVersion);
        }
    }
    function DevToolsComponent_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 8);
            i0__namespace.ɵɵtext(1, " Angular Devtools only supports Angular versions 9 and above with ");
            i0__namespace.ɵɵelementStart(2, "a", 9);
            i0__namespace.ɵɵtext(3, "ivy");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4, " enabled. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DevToolsComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, DevToolsComponent_ng_container_1_ng_container_1_div_1_Template, 2, 2, "div", 4);
            i0__namespace.ɵɵtemplate(2, DevToolsComponent_ng_container_1_ng_container_1_ng_template_2_Template, 5, 0, "ng-template", null, 5, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r7 = i0__namespace.ɵɵreference(3);
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r3.supportedVersion)("ngIfElse", _r7);
        }
    }
    function DevToolsComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p", 8);
            i0__namespace.ɵɵtext(1, " We detected an application built with production configuration. Angular DevTools only supports development builds. ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DevToolsComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, DevToolsComponent_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 1);
            i0__namespace.ɵɵtemplate(2, DevToolsComponent_ng_container_1_ng_template_2_Template, 2, 0, "ng-template", null, 3, i0__namespace.ɵɵtemplateRefExtractor);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r4 = i0__namespace.ɵɵreference(3);
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.angularIsInDevMode)("ngIfElse", _r4);
        }
    }
    function DevToolsComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "p", 8);
            i0__namespace.ɵɵtext(2, " Angular application not detected. ");
            i0__namespace.ɵɵelementStart(3, "span", 11);
            i0__namespace.ɵɵtext(4, "i");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function DevToolsComponent_ng_template_2_ng_template_1_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 13);
            i0__namespace.ɵɵelement(1, "div", 14);
            i0__namespace.ɵɵelementEnd();
        }
    }
    function DevToolsComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, DevToolsComponent_ng_template_2_ng_template_1_div_0_Template, 2, 0, "div", 12);
        }
        if (rf & 2) {
            var ctx_r11 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r11.angularExists === null);
        }
    }
    function DevToolsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtemplate(0, DevToolsComponent_ng_template_2_ng_container_0_Template, 5, 0, "ng-container", 1);
            i0__namespace.ɵɵtemplate(1, DevToolsComponent_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 10, i0__namespace.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            var _r10 = i0__namespace.ɵɵreference(2);
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.angularExists === false)("ngIfElse", _r10);
        }
    }
    var DevToolsComponent = /** @class */ (function () {
        function DevToolsComponent(_messageBus, _themeService) {
            var _this = this;
            this._messageBus = _messageBus;
            this._themeService = _themeService;
            this.angularExists = null;
            this.angularVersion = undefined;
            this.angularIsInDevMode = true;
            this._interval$ = rxjs.interval(500).subscribe(function (attempt) {
                if (attempt === 10) {
                    _this.angularExists = false;
                }
                _this._messageBus.emit('queryNgAvailability');
            });
        }
        DevToolsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._themeService.initializeThemeWatcher();
            this._messageBus.once('ngAvailability', function (_a) {
                var version = _a.version, devMode = _a.devMode, ivy = _a.ivy;
                _this.angularExists = !!version;
                _this.angularVersion = version;
                _this.angularIsInDevMode = devMode;
                _this.ivy = ivy;
                _this._interval$.unsubscribe();
            });
        };
        Object.defineProperty(DevToolsComponent.prototype, "majorAngularVersion", {
            get: function () {
                if (!this.angularVersion) {
                    return -1;
                }
                return parseInt(this.angularVersion.toString().split('.')[0], 10);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DevToolsComponent.prototype, "supportedVersion", {
            get: function () {
                return (this.majorAngularVersion >= 9 || this.majorAngularVersion === 0) && this.ivy;
            },
            enumerable: false,
            configurable: true
        });
        DevToolsComponent.prototype.ngOnDestroy = function () {
            this._interval$.unsubscribe();
        };
        return DevToolsComponent;
    }());
    DevToolsComponent.ɵfac = function DevToolsComponent_Factory(t) { return new (t || DevToolsComponent)(i0__namespace.ɵɵdirectiveInject(i2__namespace.MessageBus), i0__namespace.ɵɵdirectiveInject(ThemeService)); };
    DevToolsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DevToolsComponent, selectors: [["ng-devtools"]], decls: 4, vars: 2, consts: [[1, "mat-typography", "mat-app-background", 2, "height", "100%"], [4, "ngIf", "ngIfElse"], ["errorOrLoading", ""], ["angularIsInProdMode", ""], ["class", "devtools-wrapper noselect", 4, "ngIf", "ngIfElse"], ["notSupported", ""], [1, "devtools-wrapper", "noselect"], [3, "angularVersion"], [1, "text-message"], ["href", "https://angular.io/guide/ivy", "target", "_blank"], ["loading", ""], ["matTooltip", "You see this message because the app is still loading, or this is not an Angular application", 1, "info-icon"], ["class", "initializing", 4, "ngIf"], [1, "initializing"], [1, "loading"]], template: function DevToolsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, DevToolsComponent_ng_container_1_Template, 4, 2, "ng-container", 1);
                i0__namespace.ɵɵtemplate(2, DevToolsComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.angularExists === true)("ngIfElse", _r1);
            }
        }, directives: [i1__namespace$1.NgIf, DevToolsTabsComponent, i5__namespace$1.MatTooltip], styles: ["@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,.2)}to{box-shadow:0 0 0 35px transparent}}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,.2)}to{box-shadow:0 0 0 35px transparent}}@-webkit-keyframes darkmode-pulse{0%{box-shadow:0 0 0 0 #7e2828}to{box-shadow:0 0 0 35px transparent}}@keyframes darkmode-pulse{0%{box-shadow:0 0 0 0 #7e2828}to{box-shadow:0 0 0 35px transparent}}.devtools-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%;display:block}.dark-theme[_nghost-%COMP%]   .devtools-wrapper[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .devtools-wrapper[_ngcontent-%COMP%]{background:#202124}.dark-theme[_nghost-%COMP%]   .initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{-webkit-animation:darkmode-pulse 1s infinite;animation:darkmode-pulse 1s infinite}.noselect[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.initializing[_ngcontent-%COMP%]{margin:auto;width:125px;height:100%;display:flex;align-items:center}.initializing[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{background:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 19.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 250 250%22 style%3D%22enable-background%3Anew 0 0 250 250%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill%3A%23DD0031%3B%7D%09.st1%7Bfill%3A%23C3002F%3B%7D%09.st2%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%3E%09%3Cpolygon class%3D%22st0%22 points%3D%22125%2C30 125%2C30 125%2C30 31.9%2C63.2 46.1%2C186.3 125%2C230 125%2C230 125%2C230 203.9%2C186.3 218.1%2C63.2 %09%22%2F%3E%09%3Cpolygon class%3D%22st1%22 points%3D%22125%2C30 125%2C52.2 125%2C52.1 125%2C153.4 125%2C153.4 125%2C230 125%2C230 203.9%2C186.3 218.1%2C63.2 125%2C30 %09%22%2F%3E%09%3Cpath class%3D%22st2%22 d%3D%22M125%2C52.1L66.8%2C182.6h0h21.7h0l11.7-29.2h49.4l11.7%2C29.2h0h21.7h0L125%2C52.1L125%2C52.1L125%2C52.1L125%2C52.1%09%09L125%2C52.1z M142%2C135.4H108l17-40.9L142%2C135.4z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");border-radius:50%;width:125px;height:125px;float:left;text-align:center;-webkit-animation:pulse 1s infinite;animation:pulse 1s infinite}.text-message[_ngcontent-%COMP%]{font-weight:500;font-size:1.2em;padding:5px;text-align:center}.text-message[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{display:inline-block;font-size:1.2em;border-radius:50%;border:3px solid #111;cursor:pointer;width:16px;transform:scale(.9);height:16px;font-weight:700;text-align:center}"], data: { animation: [
                animations.trigger('enterAnimation', [
                    animations.transition(':enter', [animations.style({ opacity: 0 }), animations.animate('200ms', animations.style({ opacity: 1 }))]),
                    animations.transition(':leave', [animations.style({ opacity: 1 }), animations.animate('200ms', animations.style({ opacity: 0 }))]),
                ]),
            ] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DevToolsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-devtools',
                        templateUrl: './devtools.component.html',
                        styleUrls: ['./devtools.component.scss'],
                        animations: [
                            animations.trigger('enterAnimation', [
                                animations.transition(':enter', [animations.style({ opacity: 0 }), animations.animate('200ms', animations.style({ opacity: 1 }))]),
                                animations.transition(':leave', [animations.style({ opacity: 1 }), animations.animate('200ms', animations.style({ opacity: 0 }))]),
                            ]),
                        ],
                    }]
            }], function () { return [{ type: i2__namespace.MessageBus }, { type: ThemeService }]; }, null);
    })();

    var PropertyViewModule = /** @class */ (function () {
        function PropertyViewModule() {
        }
        return PropertyViewModule;
    }());
    PropertyViewModule.ɵfac = function PropertyViewModule_Factory(t) { return new (t || PropertyViewModule)(); };
    PropertyViewModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PropertyViewModule });
    PropertyViewModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$2.MatToolbarModule,
                i2$2.MatIconModule,
                i2$1.MatTreeModule,
                i1$1.CommonModule,
                i2$3.MatExpansionModule,
                i3$1.DragDropModule,
                i2$4.FormsModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyViewModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PropertyViewBodyComponent,
                            PropertyViewHeaderComponent,
                            PropertyViewComponent,
                            PropertyViewTreeComponent,
                            PropertyEditorComponent,
                            PropertyPreviewComponent,
                        ],
                        imports: [
                            i1$2.MatToolbarModule,
                            i2$2.MatIconModule,
                            i2$1.MatTreeModule,
                            i1$1.CommonModule,
                            i2$3.MatExpansionModule,
                            i3$1.DragDropModule,
                            i2$4.FormsModule
                        ],
                        exports: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PropertyViewModule, { declarations: [PropertyViewBodyComponent,
                PropertyViewHeaderComponent,
                PropertyViewComponent,
                PropertyViewTreeComponent,
                PropertyEditorComponent,
                PropertyPreviewComponent], imports: [i1$2.MatToolbarModule,
                i2$2.MatIconModule,
                i2$1.MatTreeModule,
                i1$1.CommonModule,
                i2$3.MatExpansionModule,
                i3$1.DragDropModule,
                i2$4.FormsModule], exports: [PropertyViewBodyComponent, PropertyViewHeaderComponent, PropertyViewComponent] });
    })();

    var PropertyTabModule = /** @class */ (function () {
        function PropertyTabModule() {
        }
        return PropertyTabModule;
    }());
    PropertyTabModule.ɵfac = function PropertyTabModule_Factory(t) { return new (t || PropertyTabModule)(); };
    PropertyTabModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PropertyTabModule });
    PropertyTabModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[PropertyViewModule, i1$1.CommonModule, i3.MatButtonModule, i2$3.MatExpansionModule, i2$2.MatIconModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PropertyTabModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PropertyTabComponent,
                            PropertyTabHeaderComponent,
                            PropertyTabBodyComponent,
                            ComponentMetadataComponent,
                        ],
                        imports: [PropertyViewModule, i1$1.CommonModule, i3.MatButtonModule, i2$3.MatExpansionModule, i2$2.MatIconModule],
                        exports: [PropertyTabComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PropertyTabModule, { declarations: [PropertyTabComponent,
                PropertyTabHeaderComponent,
                PropertyTabBodyComponent,
                ComponentMetadataComponent], imports: [PropertyViewModule, i1$1.CommonModule, i3.MatButtonModule, i2$3.MatExpansionModule, i2$2.MatIconModule], exports: [PropertyTabComponent] });
    })();

    var DirectiveForestModule = /** @class */ (function () {
        function DirectiveForestModule() {
        }
        return DirectiveForestModule;
    }());
    DirectiveForestModule.ɵfac = function DirectiveForestModule_Factory(t) { return new (t || DirectiveForestModule)(); };
    DirectiveForestModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DirectiveForestModule });
    DirectiveForestModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i1.MatCardModule, i3.MatButtonModule, i2$2.MatIconModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DirectiveForestModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [BreadcrumbsComponent],
                        imports: [i1$1.CommonModule, i1.MatCardModule, i3.MatButtonModule, i2$2.MatIconModule],
                        exports: [BreadcrumbsComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DirectiveForestModule, { declarations: [BreadcrumbsComponent], imports: [i1$1.CommonModule, i1.MatCardModule, i3.MatButtonModule, i2$2.MatIconModule], exports: [BreadcrumbsComponent] }); })();

    var DirectiveExplorerModule = /** @class */ (function () {
        function DirectiveExplorerModule() {
        }
        return DirectiveExplorerModule;
    }());
    DirectiveExplorerModule.ɵfac = function DirectiveExplorerModule_Factory(t) { return new (t || DirectiveExplorerModule)(); };
    DirectiveExplorerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DirectiveExplorerModule });
    DirectiveExplorerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2$1.MatTreeModule,
                i1.MatCardModule,
                i4.ScrollingModule,
                i2$2.MatIconModule,
                i1$1.CommonModule,
                PropertyTabModule,
                i3.MatButtonModule,
                snackBar.MatSnackBarModule,
                AngularSplitModule,
                DirectiveForestModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DirectiveExplorerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [DirectiveExplorerComponent, DirectiveForestComponent, FilterComponent],
                        exports: [DirectiveExplorerComponent],
                        imports: [
                            i2$1.MatTreeModule,
                            i1.MatCardModule,
                            i4.ScrollingModule,
                            i2$2.MatIconModule,
                            i1$1.CommonModule,
                            PropertyTabModule,
                            i3.MatButtonModule,
                            snackBar.MatSnackBarModule,
                            AngularSplitModule,
                            DirectiveForestModule,
                        ],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DirectiveExplorerModule, { declarations: [DirectiveExplorerComponent, DirectiveForestComponent, FilterComponent], imports: [i2$1.MatTreeModule,
                i1.MatCardModule,
                i4.ScrollingModule,
                i2$2.MatIconModule,
                i1$1.CommonModule,
                PropertyTabModule,
                i3.MatButtonModule,
                snackBar.MatSnackBarModule,
                AngularSplitModule,
                DirectiveForestModule], exports: [DirectiveExplorerComponent] });
    })();

    var RecordFormatter = /** @class */ (function () {
        function RecordFormatter() {
        }
        RecordFormatter.prototype.getLabel = function (element) {
            var name = element.directives
                .filter(function (d) { return d.isComponent; })
                .map(function (c) { return c.name; })
                .join(', ');
            var attributes = __spreadArray([], __read(new Set(element.directives.filter(function (d) { return !d.isComponent; }).map(function (d) { return d.name; })))).join(', ');
            return attributes === '' ? name : name + "[" + attributes + "]";
        };
        RecordFormatter.prototype.getValue = function (element) {
            var _this = this;
            var result = 0;
            element.directives.forEach(function (dir) {
                result += _this.getDirectiveValue(dir);
            });
            return result;
        };
        RecordFormatter.prototype.getDirectiveValue = function (directive) {
            var result = 0;
            var current = directive.changeDetection;
            if (current === undefined) {
                current = 0;
            }
            result += current;
            Object.keys(directive.lifecycle).forEach(function (key) {
                var value = parseFloat(directive.lifecycle[key]);
                if (!isNaN(value)) {
                    result += value;
                }
            });
            return result;
        };
        return RecordFormatter;
    }());

    var ROOT_LEVEL_ELEMENT_LABEL = 'Entire application';
    var FlamegraphFormatter = /** @class */ (function (_super) {
        __extends(FlamegraphFormatter, _super);
        function FlamegraphFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FlamegraphFormatter.prototype.formatFrame = function (frame, showChangeDetection, theme) {
            var result = {
                value: 0,
                label: ROOT_LEVEL_ELEMENT_LABEL,
                children: [],
                instances: 1,
                changeDetected: false,
                original: {
                    children: [],
                    directives: [],
                },
            };
            if (showChangeDetection) {
                result.color = theme === 'dark-theme' ? CHANGE_DETECTION_COLOR_DARK : CHANGE_DETECTION_COLOR_LIGHT;
            }
            this.addFrame(result.children, frame.directives, showChangeDetection, theme);
            return result;
        };
        FlamegraphFormatter.prototype.addFrame = function (nodes, elements, showChangeDetection, theme) {
            var _this = this;
            var timeSpent = 0;
            elements.forEach(function (element) {
                // Possibly undefined because of
                // the insertion on the backend.
                if (!element) {
                    console.error('Unable to insert undefined element');
                    return;
                }
                var changeDetected = didRunChangeDetection(element);
                var node = {
                    value: _super.prototype.getValue.call(_this, element),
                    label: _super.prototype.getLabel.call(_this, element),
                    children: [],
                    instances: 1,
                    original: element,
                    changeDetected: changeDetected,
                };
                if (showChangeDetection) {
                    var CHANGE_DETECTION_COLOR = theme === 'dark-theme' ? CHANGE_DETECTION_COLOR_DARK : CHANGE_DETECTION_COLOR_LIGHT;
                    node.color = changeDetected ? CHANGE_DETECTION_COLOR : NO_CHANGE_DETECTION_COLOR;
                }
                timeSpent += _this.addFrame(node.children, element.children, showChangeDetection, theme);
                timeSpent += node.value;
                nodes.push(node);
            });
            return timeSpent;
        };
        return FlamegraphFormatter;
    }(RecordFormatter));
    var CHANGE_DETECTION_COLOR_LIGHT = '#5cadd3';
    var CHANGE_DETECTION_COLOR_DARK = '#073d69';
    var NO_CHANGE_DETECTION_COLOR = 'transparent';
    var didRunChangeDetection = function (profile) {
        var components = profile.directives.filter(function (d) { return d.isComponent; });
        if (!components.length) {
            return false;
        }
        return components.some(function (c) { return c.changeDetection !== undefined; });
    };

    var _c0$2 = function (a0, a1) { return { data: a0, color: a1 }; };
    var FlamegraphVisualizerComponent = /** @class */ (function () {
        function FlamegraphVisualizerComponent(themeService) {
            this.themeService = themeService;
            this.profilerBars = [];
            this.view = [235, 200];
            this._formatter = new FlamegraphFormatter();
            this._showChangeDetection = false;
            this.nodeSelect = new i0.EventEmitter();
        }
        Object.defineProperty(FlamegraphVisualizerComponent.prototype, "frame", {
            set: function (frame) {
                this._frame = frame;
                this._selectFrame();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FlamegraphVisualizerComponent.prototype, "changeDetection", {
            set: function (changeDetection) {
                this._showChangeDetection = changeDetection;
                this._selectFrame();
            },
            enumerable: false,
            configurable: true
        });
        FlamegraphVisualizerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._currentThemeSubscription = this.themeService.currentTheme.subscribe(function (theme) {
                _this.currentTheme = theme;
                _this.colors =
                    theme === 'dark-theme'
                        ? {
                            hue: [210, 90],
                            saturation: [90, 90],
                            lightness: [25, 25],
                        }
                        : {
                            hue: [50, 15],
                            saturation: [100, 100],
                            lightness: [75, 75],
                        };
                _this._selectFrame();
            });
        };
        FlamegraphVisualizerComponent.prototype.ngOnDestroy = function () {
            this._currentThemeSubscription.unsubscribe();
        };
        FlamegraphVisualizerComponent.prototype.selectFrame = function (frame) {
            if (frame.label === ROOT_LEVEL_ELEMENT_LABEL) {
                return;
            }
            var flameGraphNode = frame;
            var directiveData = this.formatEntryData(flameGraphNode);
            this.nodeSelect.emit({
                entry: flameGraphNode,
                selectedDirectives: directiveData,
            });
        };
        FlamegraphVisualizerComponent.prototype.formatEntryData = function (flameGraphNode) {
            var graphData = [];
            flameGraphNode.original.directives.forEach(function (node) {
                var changeDetection = node.changeDetection;
                if (changeDetection !== undefined) {
                    graphData.push({
                        directive: node.name,
                        method: 'changes',
                        value: parseFloat(changeDetection.toFixed(2)),
                    });
                }
                Object.keys(node.lifecycle).forEach(function (key) {
                    graphData.push({
                        directive: node.name,
                        method: key,
                        value: +node.lifecycle[key].toFixed(2),
                    });
                });
            });
            return graphData;
        };
        FlamegraphVisualizerComponent.prototype._selectFrame = function () {
            this.profilerBars = [this._formatter.formatFrame(this._frame, this._showChangeDetection, this.currentTheme)];
        };
        return FlamegraphVisualizerComponent;
    }());
    FlamegraphVisualizerComponent.ɵfac = function FlamegraphVisualizerComponent_Factory(t) { return new (t || FlamegraphVisualizerComponent)(i0__namespace.ɵɵdirectiveInject(ThemeService)); };
    FlamegraphVisualizerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FlamegraphVisualizerComponent, selectors: [["ng-flamegraph-visualizer"]], inputs: { frame: "frame", changeDetection: "changeDetection" }, outputs: { nodeSelect: "nodeSelect" }, decls: 2, vars: 4, consts: [[1, "level-profile-wrapper"], ["siblingLayout", "equal", 3, "config", "frameClick"]], template: function FlamegraphVisualizerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "ngx-flamegraph", 1);
                i0__namespace.ɵɵlistener("frameClick", function FlamegraphVisualizerComponent_Template_ngx_flamegraph_frameClick_1_listener($event) { return ctx.selectFrame($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("config", i0__namespace.ɵɵpureFunction2(1, _c0$2, ctx.profilerBars, ctx.colors));
            }
        }, directives: [i2__namespace$5.NgxFlamegraphComponent], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:flex;-webkit-user-select:text;-moz-user-select:text;user-select:text}[_nghost-%COMP%]   .level-profile-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;cursor:pointer;overflow-y:auto}[_nghost-%COMP%]     .ngx-fg-label{color:rgba(0,0,0,.8705882352941177);font-weight:500;font-size:1em}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#54c9bd}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-rect, .dark-theme   [_nghost-%COMP%]     .ngx-fg-rect{stroke:#303030;transition:none}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-label, .dark-theme   [_nghost-%COMP%]     .ngx-fg-label{color:#bcc5ce}[_nghost-%COMP%]   .dark-theme[_nghost-%COMP%]     .ngx-fg-svg-g, .dark-theme   [_nghost-%COMP%]     .ngx-fg-svg-g{transition:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FlamegraphVisualizerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-flamegraph-visualizer',
                        templateUrl: './flamegraph-visualizer.component.html',
                        styleUrls: ['./flamegraph-visualizer.component.scss'],
                    }]
            }], function () { return [{ type: ThemeService }]; }, { nodeSelect: [{
                    type: i0.Output
                }], frame: [{
                    type: i0.Input
                }], changeDetection: [{
                    type: i0.Input
                }] });
    })();

    var BarGraphFormatter = /** @class */ (function (_super) {
        __extends(BarGraphFormatter, _super);
        function BarGraphFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BarGraphFormatter.prototype.formatFrame = function (frame) {
            var result = [];
            this.addFrame(result, frame.directives);
            return result.filter(function (element) { return element.value > 0; }).sort(function (a, b) { return b.value - a.value; });
        };
        BarGraphFormatter.prototype.addFrame = function (nodes, elements, parents) {
            var _this = this;
            if (parents === void 0) { parents = []; }
            var timeSpent = 0;
            elements.forEach(function (element) {
                // Possibly undefined because of
                // the insertion on the backend.
                if (!element) {
                    console.error('Unable to insert undefined element');
                    return;
                }
                timeSpent += _this.addFrame(nodes, element.children, parents.concat(element));
                timeSpent += _super.prototype.getValue.call(_this, element);
                element.directives.forEach(function (dir) {
                    var innerNode = {
                        parents: parents,
                        value: _super.prototype.getDirectiveValue.call(_this, dir),
                        label: dir.name,
                        original: element,
                    };
                    nodes.push(innerNode);
                });
            });
            return timeSpent;
        };
        return BarGraphFormatter;
    }(RecordFormatter));
    __decorate([
        memo__default['default']({ cache: new WeakMap() })
    ], BarGraphFormatter.prototype, "formatFrame", null);

    function BarChartComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵlistener("click", function BarChartComponent_div_1_Template_div_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r4_1); var i_r2 = restoredCtx.index; var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.barClick.emit(ctx_r3.originalData[i_r2]); });
            i0__namespace.ɵɵelementStart(1, "span", 3);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var bar_r1 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("background-color", ctx_r0.color)("width", bar_r1.value, "%");
            i0__namespace.ɵɵproperty("@appear", undefined);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matTooltip", bar_r1.label);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(bar_r1.label);
        }
    }
    var BarChartComponent = /** @class */ (function () {
        function BarChartComponent() {
            this.barClick = new i0.EventEmitter();
            this.internalData = [];
        }
        Object.defineProperty(BarChartComponent.prototype, "data", {
            set: function (nodes) {
                var e_1, _a;
                this.originalData = nodes;
                this.internalData = [];
                var max = nodes.reduce(function (a, c) { return Math.max(a, c.value); }, -Infinity);
                try {
                    for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                        var node = nodes_1_1.value;
                        this.internalData.push({
                            label: node.label,
                            value: (node.value / max) * 100,
                        });
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            },
            enumerable: false,
            configurable: true
        });
        return BarChartComponent;
    }());
    BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
    BarChartComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BarChartComponent, selectors: [["ng-bar-chart"]], inputs: { data: "data", color: "color" }, outputs: { barClick: "barClick" }, decls: 2, vars: 2, consts: [[1, "wrapper"], ["class", "bar", 3, "backgroundColor", "width", "click", 4, "ngFor", "ngForOf"], [1, "bar", 3, "click"], [3, "matTooltip"]], template: function BarChartComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, BarChartComponent_div_1_Template, 3, 7, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("@stagger", undefined);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.internalData);
            }
        }, directives: [i1__namespace$1.NgForOf, i5__namespace$1.MatTooltip], styles: [".bar[_ngcontent-%COMP%]{width:0;margin-bottom:7px;align-items:center;display:flex;padding-top:3px;padding-bottom:3px;opacity:.8;cursor:pointer;transition:opacity .3s ease-out,width .3s ease}.bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px;max-width:calc(100% - 20px);display:inline-block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;opacity:1}.bar[_ngcontent-%COMP%]:hover{opacity:1}.wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]{width:calc(100% - 5px);height:100%;display:block}.dark-theme[_nghost-%COMP%]   .bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#bcc5ce}"], data: { animation: [
                animations.trigger('appear', [animations.transition(':enter', [animations.style({ width: 0 }), animations.animate('.3s ease', animations.style({ width: '*' }))])]),
                animations.trigger('stagger', [animations.transition(':enter', [animations.query(':enter', animations.stagger('.1s', [animations.animateChild()]))])]),
            ] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BarChartComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-bar-chart',
                        templateUrl: './bar-chart.component.html',
                        styleUrls: ['./bar-chart.component.scss'],
                        animations: [
                            animations.trigger('appear', [animations.transition(':enter', [animations.style({ width: 0 }), animations.animate('.3s ease', animations.style({ width: '*' }))])]),
                            animations.trigger('stagger', [animations.transition(':enter', [animations.query(':enter', animations.stagger('.1s', [animations.animateChild()]))])]),
                        ],
                    }]
            }], null, { data: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], barClick: [{
                    type: i0.Output
                }] });
    })();

    var BargraphVisualizerComponent = /** @class */ (function () {
        function BargraphVisualizerComponent(themeService) {
            this.themeService = themeService;
            this.nodeSelect = new i0.EventEmitter();
            this._formatter = new BarGraphFormatter();
        }
        Object.defineProperty(BargraphVisualizerComponent.prototype, "frame", {
            set: function (data) {
                this.profileRecords = this._formatter.formatFrame(data);
            },
            enumerable: false,
            configurable: true
        });
        BargraphVisualizerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._currentThemeSubscription = this.themeService.currentTheme.subscribe(function (theme) {
                _this.currentTheme = theme;
                _this.barColor = theme === 'dark-theme' ? '#073d69' : '#cfe8fc';
            });
        };
        BargraphVisualizerComponent.prototype.ngOnDestroy = function () {
            this._currentThemeSubscription.unsubscribe();
        };
        BargraphVisualizerComponent.prototype.formatEntryData = function (bargraphNode) {
            var graphData = [];
            bargraphNode.original.directives.forEach(function (node) {
                var changeDetection = node.changeDetection;
                if (changeDetection) {
                    graphData.push({
                        directive: node.name,
                        method: 'changes',
                        value: parseFloat(changeDetection.toFixed(2)),
                    });
                }
                Object.keys(node.lifecycle).forEach(function (key) {
                    graphData.push({
                        directive: node.name,
                        method: key,
                        value: +node.lifecycle[key].toFixed(2),
                    });
                });
            });
            return graphData;
        };
        BargraphVisualizerComponent.prototype.selectNode = function (node) {
            this.nodeSelect.emit({
                entry: node,
                parentHierarchy: node.parents.map(function (element) {
                    return { name: element.directives[0].name };
                }),
                selectedDirectives: this.formatEntryData(node),
            });
        };
        return BargraphVisualizerComponent;
    }());
    BargraphVisualizerComponent.ɵfac = function BargraphVisualizerComponent_Factory(t) { return new (t || BargraphVisualizerComponent)(i0__namespace.ɵɵdirectiveInject(ThemeService)); };
    BargraphVisualizerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: BargraphVisualizerComponent, selectors: [["ng-bargraph-visualizer"]], inputs: { frame: "frame" }, outputs: { nodeSelect: "nodeSelect" }, decls: 2, vars: 2, consts: [[1, "level-profile-wrapper"], [3, "color", "data", "barClick"]], template: function BargraphVisualizerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "ng-bar-chart", 1);
                i0__namespace.ɵɵlistener("barClick", function BargraphVisualizerComponent_Template_ng_bar_chart_barClick_1_listener($event) { return ctx.selectNode($event); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("color", ctx.barColor)("data", ctx.profileRecords);
            }
        }, directives: [BarChartComponent], styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:flex;-webkit-user-select:text;-moz-user-select:text;user-select:text;overflow-y:auto}.level-profile-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;cursor:pointer}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BargraphVisualizerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-bargraph-visualizer',
                        templateUrl: './bargraph-visualizer.component.html',
                        styleUrls: ['./bargraph-visualizer.component.scss'],
                    }]
            }], function () { return [{ type: ThemeService }]; }, { nodeSelect: [{
                    type: i0.Output
                }], frame: [{
                    type: i0.Input
                }] });
    })();

    var TreeMapFormatter = /** @class */ (function (_super) {
        __extends(TreeMapFormatter, _super);
        function TreeMapFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TreeMapFormatter.prototype.formatFrame = function (record) {
            var children = [];
            this.addFrame(children, record.directives);
            var size = children.reduce(function (accum, curr) {
                return accum + curr.size;
            }, 0);
            return {
                id: 'Application',
                size: size,
                value: size,
                children: children,
                original: null,
            };
        };
        TreeMapFormatter.prototype.addFrame = function (nodes, elements, prev) {
            var _this = this;
            if (prev === void 0) { prev = null; }
            elements.forEach(function (element) {
                if (!element) {
                    console.error('Unable to insert undefined element');
                    return;
                }
                var nodeVal = _super.prototype.getValue.call(_this, element);
                var node = {
                    id: _super.prototype.getLabel.call(_this, element),
                    size: nodeVal,
                    value: nodeVal,
                    children: [],
                    original: element,
                };
                _this.addFrame(node.children, element.children, node);
                if (prev) {
                    prev.size += node.size;
                }
                nodes.push(node);
            });
        };
        return TreeMapFormatter;
    }(RecordFormatter));
    __decorate([
        memo__default['default']({ cache: new WeakMap() })
    ], TreeMapFormatter.prototype, "formatFrame", null);

    var _c0$1 = ["webTree"];
    var TreeMapVisualizerComponent = /** @class */ (function () {
        function TreeMapVisualizerComponent(_ngZone) {
            var _this = this;
            this._ngZone = _ngZone;
            this._formatter = new TreeMapFormatter();
            this.resize$ = new rxjs.Subject();
            this._resizeObserver = new ResizeObserver(function () { return _this._ngZone.run(function () { return _this.resize$.next(); }); });
        }
        Object.defineProperty(TreeMapVisualizerComponent.prototype, "frame", {
            set: function (frame) {
                // first element in data is the Application node
                this.treeMapRecords = this._formatter.formatFrame(frame);
                if (this.tree) {
                    this._renderTree();
                }
            },
            enumerable: false,
            configurable: true
        });
        TreeMapVisualizerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._throttledResizeSubscription = this.resize$.pipe(operators.debounceTime(100)).subscribe(function () { return _this._renderTree(); });
            this._resizeObserver.observe(this.tree.nativeElement);
        };
        TreeMapVisualizerComponent.prototype.ngOnDestroy = function () {
            this._throttledResizeSubscription.unsubscribe();
            this._resizeObserver.unobserve(this.tree.nativeElement);
        };
        TreeMapVisualizerComponent.prototype._renderTree = function () {
            this._removeTree();
            this._createTree();
        };
        TreeMapVisualizerComponent.prototype._removeTree = function () {
            Array.from(this.tree.nativeElement.children).forEach(function (child) { return child.remove(); });
        };
        TreeMapVisualizerComponent.prototype._createTree = function () {
            treemap__namespace.render(this.tree.nativeElement, this.treeMapRecords, {
                padding: [20, 5, 5, 5],
                caption: function (node) { return node.id + ": " + node.size.toFixed(3) + " ms"; },
                showNode: function () { return true; },
            });
        };
        return TreeMapVisualizerComponent;
    }());
    TreeMapVisualizerComponent.ɵfac = function TreeMapVisualizerComponent_Factory(t) { return new (t || TreeMapVisualizerComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone)); };
    TreeMapVisualizerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TreeMapVisualizerComponent, selectors: [["ng-tree-map-visualizer"]], viewQuery: function TreeMapVisualizerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$1, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.tree = _t.first);
            }
        }, inputs: { frame: "frame" }, decls: 2, vars: 0, consts: [[1, "web-tree"], ["webTree", ""]], template: function TreeMapVisualizerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "div", 0, 1);
            }
        }, styles: [".web-tree[_ngcontent-%COMP%]{height:calc(100% - 25px);width:calc(100% - 25px);margin:auto}[_nghost-%COMP%]     .webtreemap-caption{font-size:.9em}.dark-theme[_nghost-%COMP%]     .webtreemap-node, .dark-theme   [_nghost-%COMP%]     .webtreemap-node{background:#424242}.dark-theme[_nghost-%COMP%]     .webtreemap-node:hover, .dark-theme   [_nghost-%COMP%]     .webtreemap-node:hover{background:#303030}.dark-theme[_nghost-%COMP%]     .webtreemap-caption, .dark-theme   [_nghost-%COMP%]     .webtreemap-caption{color:#fff}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TreeMapVisualizerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-tree-map-visualizer',
                        templateUrl: './tree-map-visualizer.component.html',
                        styleUrls: ['./tree-map-visualizer.component.scss'],
                    }]
            }], function () { return [{ type: i0__namespace.NgZone }]; }, { frame: [{
                    type: i0.Input
                }], tree: [{
                    type: i0.ViewChild,
                    args: ['webTree', { static: true }]
                }] });
    })();

    function TimelineVisualizerComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "ng-flamegraph-visualizer", 5);
            i0__namespace.ɵɵlistener("nodeSelect", function TimelineVisualizerComponent_ng_container_3_Template_ng_flamegraph_visualizer_nodeSelect_1_listener($event) { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.handleNodeSelect($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("frame", ctx_r0.frame)("changeDetection", ctx_r0.changeDetection);
        }
    }
    function TimelineVisualizerComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "ng-tree-map-visualizer", 6);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("frame", ctx_r1.frame);
        }
    }
    function TimelineVisualizerComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "ng-bargraph-visualizer", 7);
            i0__namespace.ɵɵlistener("nodeSelect", function TimelineVisualizerComponent_ng_container_5_Template_ng_bargraph_visualizer_nodeSelect_1_listener($event) { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.handleNodeSelect($event); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("frame", ctx_r2.frame);
        }
    }
    function TimelineVisualizerComponent_as_split_area_6_div_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelement(1, "ng-execution-details", 13);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("data", ctx_r8.selectedDirectives);
        }
    }
    function TimelineVisualizerComponent_as_split_area_6_div_12_li_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "li");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var parent_r11 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", parent_r11.name, " ");
        }
    }
    function TimelineVisualizerComponent_as_split_area_6_div_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "div", 11);
            i0__namespace.ɵɵelementStart(2, "label");
            i0__namespace.ɵɵtext(3, "Parent Hierarchy");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "ul");
            i0__namespace.ɵɵtemplate(5, TimelineVisualizerComponent_as_split_area_6_div_12_li_5_Template, 2, 1, "li", 14);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r9.parentHierarchy);
        }
    }
    function TimelineVisualizerComponent_as_split_area_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "as-split-area", 8);
            i0__namespace.ɵɵelementStart(1, "mat-card", 9);
            i0__namespace.ɵɵelementStart(2, "mat-toolbar");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "section", 10);
            i0__namespace.ɵɵelementStart(5, "div", 11);
            i0__namespace.ɵɵelementStart(6, "label");
            i0__namespace.ɵɵtext(7, "Total time spent:");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "span");
            i0__namespace.ɵɵtext(9);
            i0__namespace.ɵɵpipe(10, "number");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(11, TimelineVisualizerComponent_as_split_area_6_div_11_Template, 2, 1, "div", 12);
            i0__namespace.ɵɵtemplate(12, TimelineVisualizerComponent_as_split_area_6_div_12_Template, 6, 1, "div", 12);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1("", ctx_r3.selectedEntry.label, " details");
            i0__namespace.ɵɵadvance(6);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(10, 4, ctx_r3.selectedEntry.value), " ms");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r3.selectedEntry.value > 0);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r3.parentHierarchy.length > 0);
        }
    }
    var TimelineVisualizerComponent = /** @class */ (function () {
        function TimelineVisualizerComponent() {
            this.cmpVisualizationModes = VisualizationMode;
            this.selectedEntry = null;
            this.selectedDirectives = [];
            this.parentHierarchy = [];
        }
        Object.defineProperty(TimelineVisualizerComponent.prototype, "visualizationMode", {
            set: function (mode) {
                this._visualizationMode = mode;
                this.selectedEntry = null;
                this.selectedDirectives = [];
                this.parentHierarchy = [];
            },
            enumerable: false,
            configurable: true
        });
        TimelineVisualizerComponent.prototype.handleNodeSelect = function (_a) {
            var entry = _a.entry, parentHierarchy = _a.parentHierarchy, selectedDirectives = _a.selectedDirectives;
            this.selectedEntry = entry;
            this.selectedDirectives = selectedDirectives;
            this.parentHierarchy = parentHierarchy !== null && parentHierarchy !== void 0 ? parentHierarchy : [];
        };
        return TimelineVisualizerComponent;
    }());
    TimelineVisualizerComponent.ɵfac = function TimelineVisualizerComponent_Factory(t) { return new (t || TimelineVisualizerComponent)(); };
    TimelineVisualizerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TimelineVisualizerComponent, selectors: [["ng-timeline-visualizer"]], inputs: { visualizationMode: "visualizationMode", frame: "frame", changeDetection: "changeDetection" }, decls: 7, vars: 6, consts: [["unit", "percent", 3, "gutterSize"], ["size", "75"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["size", "25", "minSize", "15", 4, "ngIf"], [3, "frame", "changeDetection", "nodeSelect"], [3, "frame"], [3, "frame", "nodeSelect"], ["size", "25", "minSize", "15"], [1, "selected-entry"], [1, "entry-statistics"], [1, "txt-total-time"], [4, "ngIf"], [3, "data"], [4, "ngFor", "ngForOf"]], template: function TimelineVisualizerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "as-split", 0);
                i0__namespace.ɵɵelementStart(1, "as-split-area", 1);
                i0__namespace.ɵɵelementContainerStart(2, 2);
                i0__namespace.ɵɵtemplate(3, TimelineVisualizerComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
                i0__namespace.ɵɵtemplate(4, TimelineVisualizerComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
                i0__namespace.ɵɵtemplate(5, TimelineVisualizerComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(6, TimelineVisualizerComponent_as_split_area_6_Template, 13, 6, "as-split-area", 4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("gutterSize", 9);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngSwitch", ctx._visualizationMode);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.FlameGraph);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.TreeMap);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", ctx.cmpVisualizationModes.BarGraph);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.selectedEntry);
            }
        }, styles: ["[_nghost-%COMP%]{height:calc(100% - 2 * 60px);display:block;overflow:auto}[_nghost-%COMP%]     .as-split-gutter-icon{display:none}.selected-entry[_ngcontent-%COMP%]{padding:0;height:100%}.selected-entry[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{padding-left:9px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;line-height:25px;font-size:11px;font-weight:500;display:flex;align-items:center;justify-content:space-between;height:auto}.selected-entry[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:calc(100% - 40px - 23px);width:calc(100% - 20px);overflow:auto;font-family:Roboto,Helvetica Neue,sans-serif;padding:10px}.entry-statistics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:3px}.entry-statistics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{opacity:.7}.entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8a1882}.txt-total-time[_ngcontent-%COMP%]{font-weight:700}ul[_ngcontent-%COMP%]{list-style-type:square;-webkit-margin-before:0;margin-block-start:0;-webkit-padding-start:20px;padding-inline-start:20px}.dark-theme[_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .entry-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#5cadd3}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TimelineVisualizerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-timeline-visualizer',
                        templateUrl: './timeline-visualizer.component.html',
                        styleUrls: ['./timeline-visualizer.component.scss'],
                    }]
            }], null, { visualizationMode: [{
                    type: i0.Input
                }], frame: [{
                    type: i0.Input
                }], changeDetection: [{
                    type: i0.Input
                }] });
    })();

    function ExecutionDetailsComponent_tr_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "tr");
            i0__namespace.ɵɵelementStart(1, "td", 0);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "td", 1);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "td", 2);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var entry_r1 = ctx.$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", entry_r1.directive, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", entry_r1.method, " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("", entry_r1.value, " ms");
        }
    }
    var ExecutionDetailsComponent = /** @class */ (function () {
        function ExecutionDetailsComponent() {
        }
        return ExecutionDetailsComponent;
    }());
    ExecutionDetailsComponent.ɵfac = function ExecutionDetailsComponent_Factory(t) { return new (t || ExecutionDetailsComponent)(); };
    ExecutionDetailsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ExecutionDetailsComponent, selectors: [["ng-execution-details"]], inputs: { data: "data" }, decls: 10, vars: 1, consts: [[1, "name"], [1, "method"], [1, "value"], [4, "ngFor", "ngForOf"]], template: function ExecutionDetailsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table");
                i0__namespace.ɵɵelementStart(1, "thead");
                i0__namespace.ɵɵelementStart(2, "th", 0);
                i0__namespace.ɵɵtext(3, "Directive");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "th", 1);
                i0__namespace.ɵɵtext(5, "Method");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "th", 2);
                i0__namespace.ɵɵtext(7, "Time");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "tbody");
                i0__namespace.ɵɵtemplate(9, ExecutionDetailsComponent_tr_9_Template, 7, 3, "tr", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵproperty("ngForOf", ctx.data);
            }
        }, directives: [i1__namespace$1.NgForOf], styles: ["table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;text-align:left;overflow:hidden;text-overflow:ellipsis}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border-bottom:1px solid #ddd}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ExecutionDetailsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-execution-details',
                        templateUrl: './execution-details.component.html',
                        styleUrls: ['./execution-details.component.scss'],
                    }]
            }], null, { data: [{
                    type: i0.Input
                }] });
    })();

    var RecordingVisualizerModule = /** @class */ (function () {
        function RecordingVisualizerModule() {
        }
        return RecordingVisualizerModule;
    }());
    RecordingVisualizerModule.ɵfac = function RecordingVisualizerModule_Factory(t) { return new (t || RecordingVisualizerModule)(); };
    RecordingVisualizerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: RecordingVisualizerModule });
    RecordingVisualizerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i2$5.NgxFlamegraphModule, i5$1.MatTooltipModule, i1$2.MatToolbarModule, i1.MatCardModule, AngularSplitModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RecordingVisualizerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ExecutionDetailsComponent,
                            BarChartComponent,
                            TimelineVisualizerComponent,
                            FlamegraphVisualizerComponent,
                            TreeMapVisualizerComponent,
                            BargraphVisualizerComponent,
                        ],
                        imports: [i1$1.CommonModule, i2$5.NgxFlamegraphModule, i5$1.MatTooltipModule, i1$2.MatToolbarModule, i1.MatCardModule, AngularSplitModule],
                        exports: [TimelineVisualizerComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(RecordingVisualizerModule, { declarations: [ExecutionDetailsComponent,
                BarChartComponent,
                TimelineVisualizerComponent,
                FlamegraphVisualizerComponent,
                TreeMapVisualizerComponent,
                BargraphVisualizerComponent], imports: [i1$1.CommonModule, i2$5.NgxFlamegraphModule, i5$1.MatTooltipModule, i1$2.MatToolbarModule, i1.MatCardModule, AngularSplitModule], exports: [TimelineVisualizerComponent] });
    })();
    i0__namespace.ɵɵsetComponentScope(TimelineVisualizerComponent, [SplitComponent, SplitAreaDirective, i1__namespace$1.NgSwitch, i1__namespace$1.NgSwitchCase, FlamegraphVisualizerComponent,
        TreeMapVisualizerComponent,
        BargraphVisualizerComponent, i1__namespace$1.NgIf, i1__namespace.MatCard, i1__namespace$2.MatToolbar, ExecutionDetailsComponent, i1__namespace$1.NgForOf], [i1__namespace$1.DecimalPipe]);

    var _c0 = ["barContainer"];
    function FrameSelectorComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 6);
            i0__namespace.ɵɵlistener("click", function FrameSelectorComponent_div_10_Template_div_click_0_listener($event) { var restoredCtx = i0__namespace.ɵɵrestoreView(_r5_1); var i_r3 = restoredCtx.index; var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.handleFrameSelection(i_r3, $event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var d_r2 = ctx.$implicit;
            var i_r3 = ctx.index;
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("selected", ctx_r1.selectedFrameIndexes.has(i_r3));
            i0__namespace.ɵɵproperty("ngStyle", d_r2.style);
        }
    }
    var ITEM_WIDTH = 30;
    var FrameSelectorComponent = /** @class */ (function () {
        function FrameSelectorComponent(_tabUpdate) {
            this._tabUpdate = _tabUpdate;
            this.selectFrames = new i0.EventEmitter();
            this.startFrameIndex = -1;
            this.endFrameIndex = -1;
            this.selectedFrameIndexes = new Set();
        }
        Object.defineProperty(FrameSelectorComponent.prototype, "graphData$", {
            get: function () {
                return this._graphData$;
            },
            set: function (graphData) {
                var _this = this;
                this._graphData$ = graphData;
                this._graphDataSubscription = this._graphData$.subscribe(function (items) { return setTimeout(function () {
                    _this.frameCount = items.length;
                    _this.viewport.scrollToIndex(items.length);
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameSelectorComponent.prototype, "itemWidth", {
            get: function () {
                return ITEM_WIDTH;
            },
            enumerable: false,
            configurable: true
        });
        FrameSelectorComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._tabUpdateSubscription = this._tabUpdate.tabUpdate$.subscribe(function () {
                if (_this.viewport) {
                    setTimeout(function () {
                        _this.viewport.scrollToIndex(0);
                        _this.viewport.checkViewportSize();
                    });
                }
            });
        };
        FrameSelectorComponent.prototype.ngOnDestroy = function () {
            if (this._tabUpdateSubscription) {
                this._tabUpdateSubscription.unsubscribe();
            }
            if (this._graphDataSubscription) {
                this._graphDataSubscription.unsubscribe();
            }
        };
        Object.defineProperty(FrameSelectorComponent.prototype, "selectionLabel", {
            get: function () {
                if (this.startFrameIndex === this.endFrameIndex) {
                    return "" + (this.startFrameIndex + 1);
                }
                return this._smartJoinIndexLabels(__spreadArray([], __read(this.selectedFrameIndexes)));
            },
            enumerable: false,
            configurable: true
        });
        FrameSelectorComponent.prototype._smartJoinIndexLabels = function (indexArray) {
            var e_1, _a;
            var sortedIndexes = indexArray.sort(function (a, b) { return a - b; });
            var groups = [];
            var prev = null;
            try {
                for (var sortedIndexes_1 = __values(sortedIndexes), sortedIndexes_1_1 = sortedIndexes_1.next(); !sortedIndexes_1_1.done; sortedIndexes_1_1 = sortedIndexes_1.next()) {
                    var index = sortedIndexes_1_1.value;
                    // First iteration: create initial group and set prev variable to the first index
                    if (prev === null) {
                        groups.push([index]);
                        prev = index;
                        continue;
                    }
                    // If current index is consecutive with the previous, group them, otherwise start a new group
                    if (prev + 1 === index) {
                        groups[groups.length - 1].push(index);
                    }
                    else {
                        groups.push([index]);
                    }
                    prev = index;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (sortedIndexes_1_1 && !sortedIndexes_1_1.done && (_a = sortedIndexes_1.return)) _a.call(sortedIndexes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return groups
                .filter(function (group) { return group.length > 0; })
                .map(function (group) { return (group.length === 1 ? group[0] + 1 : group[0] + 1 + "-" + (group[group.length - 1] + 1)); })
                .join(', ');
        };
        FrameSelectorComponent.prototype.move = function (value) {
            var newVal = this.startFrameIndex + value;
            this.selectedFrameIndexes = new Set([newVal]);
            if (newVal > -1 && newVal < this.frameCount) {
                this._selectFrames({ indexes: this.selectedFrameIndexes });
            }
        };
        FrameSelectorComponent.prototype._selectFrames = function (_a) {
            var indexes = _a.indexes;
            var sortedIndexes = __spreadArray([], __read(indexes)).sort(function (a, b) { return a - b; });
            this.startFrameIndex = sortedIndexes[0];
            this.endFrameIndex = sortedIndexes[sortedIndexes.length - 1];
            this._ensureVisible(this.startFrameIndex);
            this.selectFrames.emit({ indexes: sortedIndexes });
        };
        FrameSelectorComponent.prototype.handleFrameSelection = function (idx, event) {
            var shiftKey = event.shiftKey, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
            if (shiftKey) {
                var _a = __read([Math.min(this.startFrameIndex, idx), Math.max(this.endFrameIndex, idx)], 2), start_1 = _a[0], end = _a[1];
                this.selectedFrameIndexes = new Set(Array.from(Array(end - start_1 + 1), function (_, index) { return index + start_1; }));
            }
            else if (ctrlKey || metaKey) {
                if (this.selectedFrameIndexes.has(idx)) {
                    if (this.selectedFrameIndexes.size === 1) {
                        return; // prevent deselection when only one frame is selected
                    }
                    this.selectedFrameIndexes.delete(idx);
                }
                else {
                    this.selectedFrameIndexes.add(idx);
                }
            }
            else {
                this.selectedFrameIndexes = new Set([idx]);
            }
            this._selectFrames({ indexes: this.selectedFrameIndexes });
        };
        FrameSelectorComponent.prototype._ensureVisible = function (index) {
            if (!this.viewport) {
                return;
            }
            var scrollParent = this.viewport.elementRef.nativeElement;
            // The left most point we see an element
            var left = scrollParent.scrollLeft;
            // That's the right most point we currently see an element.
            var right = left + scrollParent.offsetWidth;
            var itemLeft = index * this.itemWidth;
            if (itemLeft < left) {
                scrollParent.scrollTo({ left: itemLeft });
            }
            else if (right < itemLeft + this.itemWidth) {
                scrollParent.scrollTo({ left: itemLeft - scrollParent.offsetWidth + this.itemWidth });
            }
        };
        return FrameSelectorComponent;
    }());
    FrameSelectorComponent.ɵfac = function FrameSelectorComponent_Factory(t) { return new (t || FrameSelectorComponent)(i0__namespace.ɵɵdirectiveInject(TabUpdate)); };
    FrameSelectorComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FrameSelectorComponent, selectors: [["ng-frame-selector"]], viewQuery: function FrameSelectorComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
                i0__namespace.ɵɵviewQuery(i4.CdkVirtualScrollViewport, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.barContainer = _t.first);
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.viewport = _t.first);
            }
        }, inputs: { graphData$: "graphData$" }, outputs: { selectFrames: "selectFrames" }, decls: 16, vars: 16, consts: [[1, "bar-graph-container"], [1, "txt-frames", 3, "matTooltip"], ["mat-icon-button", "", 3, "disabled", "click"], ["orientation", "horizontal", 1, "bar-container", 3, "itemSize"], ["barContainer", ""], ["class", "frame-bar", 3, "ngStyle", "selected", "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "frame-bar", 3, "ngStyle", "click"]], template: function FrameSelectorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card", 0);
                i0__namespace.ɵɵelementStart(1, "p", 1);
                i0__namespace.ɵɵpipe(2, "async");
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵpipe(4, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "button", 2);
                i0__namespace.ɵɵlistener("click", function FrameSelectorComponent_Template_button_click_5_listener() { return ctx.move(-1); });
                i0__namespace.ɵɵelementStart(6, "mat-icon");
                i0__namespace.ɵɵtext(7, "chevron_left");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "cdk-virtual-scroll-viewport", 3, 4);
                i0__namespace.ɵɵtemplate(10, FrameSelectorComponent_div_10_Template, 1, 3, "div", 5);
                i0__namespace.ɵɵpipe(11, "async");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 2);
                i0__namespace.ɵɵlistener("click", function FrameSelectorComponent_Template_button_click_12_listener() { return ctx.move(1); });
                i0__namespace.ɵɵpipe(13, "async");
                i0__namespace.ɵɵelementStart(14, "mat-icon");
                i0__namespace.ɵɵtext(15, "chevron_right");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var tmp_0_0 = null;
                var tmp_1_0 = null;
                var tmp_5_0 = null;
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵpropertyInterpolate2("matTooltip", "", ctx.selectionLabel, " / ", (tmp_0_0 = i0__namespace.ɵɵpipeBind1(2, 8, ctx.graphData$)) == null ? null : tmp_0_0.length, "");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate2(" ", ctx.selectionLabel, " / ", (tmp_1_0 = i0__namespace.ɵɵpipeBind1(4, 10, ctx.graphData$)) == null ? null : tmp_1_0.length, " ");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("disabled", ctx.startFrameIndex <= 0 || ctx.selectedFrameIndexes.size > 1);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("itemSize", ctx.itemWidth);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("cdkVirtualForOf", i0__namespace.ɵɵpipeBind1(11, 12, ctx.graphData$));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("disabled", ctx.endFrameIndex >= ((tmp_5_0 = i0__namespace.ɵɵpipeBind1(13, 14, ctx.graphData$)) == null ? null : tmp_5_0.length) - 1 || ctx.selectedFrameIndexes.size > 1);
            }
        }, directives: [i1__namespace.MatCard, i5__namespace$1.MatTooltip, i3__namespace.MatButton, i2__namespace$1.MatIcon, i4__namespace.CdkVirtualScrollViewport, i4__namespace.CdkFixedSizeVirtualScroll, i4__namespace.CdkVirtualForOf, i1__namespace$1.NgStyle], pipes: [i1__namespace$1.AsyncPipe], styles: [".bar-graph-container[_ngcontent-%COMP%]{padding:2px;height:54px;display:flex;align-items:flex-end;justify-content:center;align-items:center;margin-bottom:10px}.bar-graph-container[_ngcontent-%COMP%]   .txt-frames[_ngcontent-%COMP%]{font-weight:500;line-height:50px;padding:0;margin:0 10px;width:150px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]{max-width:calc(100vw - 150px);align-items:baseline;overflow-x:auto;width:100%;height:100%}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]     .cdk-virtual-scroll-content-wrapper{display:flex}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]{margin-left:2.5px;margin-right:2.5px;margin-top:2px}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover{background-color:#ebf1fb}.bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:0;padding-left:.5px;padding-right:.5px;background-color:#cfe8fc;border:2px solid #cfe8fc}.bar-graph-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:5px}.dark-theme[_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover, .dark-theme   [_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar[_ngcontent-%COMP%]:hover{background-color:#262d36}.dark-theme[_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .bar-graph-container[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .frame-bar.selected[_ngcontent-%COMP%]{background-color:#073d69;border:2px solid #073d69}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FrameSelectorComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-frame-selector',
                        templateUrl: './frame-selector.component.html',
                        styleUrls: ['./frame-selector.component.scss'],
                    }]
            }], function () { return [{ type: TabUpdate }]; }, { barContainer: [{
                    type: i0.ViewChild,
                    args: ['barContainer']
                }], graphData$: [{
                    type: i0.Input
                }], selectFrames: [{
                    type: i0.Output
                }], viewport: [{
                    type: i0.ViewChild,
                    args: [i4.CdkVirtualScrollViewport]
                }] });
    })();

    function TimelineControlsComponent_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-form-field");
            i0__namespace.ɵɵelementStart(1, "mat-select", 6);
            i0__namespace.ɵɵlistener("selectionChange", function TimelineControlsComponent_mat_form_field_1_Template_mat_select_selectionChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r8_1); var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.changeVisualizationMode.emit($event.value); });
            i0__namespace.ɵɵelementStart(2, "mat-option", 7);
            i0__namespace.ɵɵtext(3, " Flame graph ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-option", 7);
            i0__namespace.ɵɵtext(5, " Tree map ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "mat-option", 7);
            i0__namespace.ɵɵtext(7, " Bar chart ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("value", ctx_r0.visualizationMode);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("value", ctx_r0.flameGraphMode);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("value", ctx_r0.treeMapMode);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("value", ctx_r0.barGraphMode);
        }
    }
    function TimelineControlsComponent_label_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "label");
            i0__namespace.ɵɵtext(1, " Time spent: ");
            i0__namespace.ɵɵelementStart(2, "span", 8);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵpipe(4, "number");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1("", i0__namespace.ɵɵpipeBind1(4, 1, ctx_r1.record == null ? null : ctx_r1.record.duration), " ms");
        }
    }
    function TimelineControlsComponent_label_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "label");
            i0__namespace.ɵɵtext(1, " Time spent: ");
            i0__namespace.ɵɵelementStart(2, "span", 8);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵpipe(4, "number");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("color", ctx_r2.frameColor);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1("", i0__namespace.ɵɵpipeBind1(4, 3, ctx_r2.record == null ? null : ctx_r2.record.duration), " ms");
        }
    }
    function TimelineControlsComponent_label_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "label");
            i0__namespace.ɵɵtext(1, " Frame rate: ");
            i0__namespace.ɵɵelementStart(2, "span", 8);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("color", ctx_r3.frameColor);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1("", ctx_r3.estimatedFrameRate, " fps");
        }
    }
    function TimelineControlsComponent_label_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "label");
            i0__namespace.ɵɵtext(1, " Source: ");
            i0__namespace.ɵɵelementStart(2, "span", 8);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r4.record == null ? null : ctx_r4.record.source);
        }
    }
    function TimelineControlsComponent_mat_checkbox_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-checkbox", 9);
            i0__namespace.ɵɵlistener("change", function TimelineControlsComponent_mat_checkbox_7_Template_mat_checkbox_change_0_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(); return ctx_r9.toggleChangeDetection.emit(!ctx_r9.changeDetection); });
            i0__namespace.ɵɵtext(1, " Show only change detection ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("checked", ctx_r5.changeDetection);
        }
    }
    function TimelineControlsComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 10);
            i0__namespace.ɵɵlistener("click", function TimelineControlsComponent_button_8_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r12_1); var ctx_r11 = i0__namespace.ɵɵnextContext(); return ctx_r11.exportProfile.emit(); });
            i0__namespace.ɵɵtext(1, "Save Profile");
            i0__namespace.ɵɵelementEnd();
        }
    }
    var TimelineControlsComponent = /** @class */ (function () {
        function TimelineControlsComponent() {
            this.changeVisualizationMode = new i0.EventEmitter();
            this.exportProfile = new i0.EventEmitter();
            this.toggleChangeDetection = new i0.EventEmitter();
            this.flameGraphMode = VisualizationMode.FlameGraph;
            this.treeMapMode = VisualizationMode.TreeMap;
            this.barGraphMode = VisualizationMode.BarGraph;
        }
        return TimelineControlsComponent;
    }());
    TimelineControlsComponent.ɵfac = function TimelineControlsComponent_Factory(t) { return new (t || TimelineControlsComponent)(); };
    TimelineControlsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TimelineControlsComponent, selectors: [["ng-timeline-controls"]], inputs: { record: "record", estimatedFrameRate: "estimatedFrameRate", frameColor: "frameColor", visualizationMode: "visualizationMode", empty: "empty", changeDetection: "changeDetection" }, outputs: { changeVisualizationMode: "changeVisualizationMode", exportProfile: "exportProfile", toggleChangeDetection: "toggleChangeDetection" }, decls: 9, vars: 11, consts: [[1, "controls"], [4, "ngIf"], [1, "details"], [3, "color", 4, "ngIf"], [3, "checked", "change", 4, "ngIf"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [3, "value", "selectionChange"], [3, "value"], [1, "value"], [3, "checked", "change"], ["mat-stroked-button", "", 3, "click"]], template: function TimelineControlsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, TimelineControlsComponent_mat_form_field_1_Template, 8, 4, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵtemplate(3, TimelineControlsComponent_label_3_Template, 5, 3, "label", 1);
                i0__namespace.ɵɵtemplate(4, TimelineControlsComponent_label_4_Template, 5, 5, "label", 3);
                i0__namespace.ɵɵtemplate(5, TimelineControlsComponent_label_5_Template, 4, 3, "label", 3);
                i0__namespace.ɵɵtemplate(6, TimelineControlsComponent_label_6_Template, 4, 1, "label", 1);
                i0__namespace.ɵɵtemplate(7, TimelineControlsComponent_mat_checkbox_7_Template, 2, 1, "mat-checkbox", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, TimelineControlsComponent_button_8_Template, 2, 0, "button", 5);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.record);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵclassProp("flame-details", ctx.visualizationMode == ctx.flameGraphMode)("bar-details", ctx.visualizationMode == ctx.barGraphMode);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.estimatedFrameRate >= 60 && ctx.record);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.estimatedFrameRate < 60 && ctx.record);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.estimatedFrameRate < 60 && ctx.record);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", (ctx.record == null ? null : ctx.record.source) && ctx.record);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.visualizationMode == ctx.flameGraphMode);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.empty);
            }
        }, directives: [i1__namespace$1.NgIf, i2__namespace$6.MatFormField, i3__namespace$2.MatSelect, i4__namespace$1.MatOption, i5__namespace$2.MatCheckbox, i3__namespace.MatButton], pipes: [i1__namespace$1.DecimalPipe], styles: ["[_nghost-%COMP%]{height:60px}.controls[_ngcontent-%COMP%]{display:flex;white-space:nowrap;flex-wrap:wrap;justify-content:center;padding:5px}.controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:50px;width:75px;white-space:normal;line-height:18px}.controls[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:0 1 60px;margin-left:15px;margin-right:15px}.controls[_ngcontent-%COMP%]     .details{flex:1 1 150px;display:flex;flex-direction:column;font-weight:500;-moz-user-select:text;-webkit-user-select:text;user-select:text}.controls[_ngcontent-%COMP%]     .details, .controls[_ngcontent-%COMP%]     .details label{overflow:hidden;text-overflow:ellipsis}.controls[_ngcontent-%COMP%]     .details .value{color:#8a1882}.controls[_ngcontent-%COMP%]   .bar-details[_ngcontent-%COMP%]{min-height:60px}.controls[_ngcontent-%COMP%]   .flame-details[_ngcontent-%COMP%]{min-height:85px}.dark-theme[_nghost-%COMP%]   .details[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .details[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#5cadd3}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TimelineControlsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-timeline-controls',
                        templateUrl: './timeline-controls.component.html',
                        styleUrls: ['./timeline-controls.component.scss'],
                    }]
            }], null, { record: [{
                    type: i0.Input
                }], estimatedFrameRate: [{
                    type: i0.Input
                }], frameColor: [{
                    type: i0.Input
                }], visualizationMode: [{
                    type: i0.Input
                }], empty: [{
                    type: i0.Input
                }], changeDetection: [{
                    type: i0.Input
                }], changeVisualizationMode: [{
                    type: i0.Output
                }], exportProfile: [{
                    type: i0.Output
                }], toggleChangeDetection: [{
                    type: i0.Output
                }] });
    })();

    var RecordingDialogComponent = /** @class */ (function () {
        function RecordingDialogComponent() {
        }
        return RecordingDialogComponent;
    }());
    RecordingDialogComponent.ɵfac = function RecordingDialogComponent_Factory(t) { return new (t || RecordingDialogComponent)(); };
    RecordingDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: RecordingDialogComponent, selectors: [["ng-recording-dialog"]], decls: 2, vars: 0, consts: [[1, "main-wrapper"], ["color", "accent", "mode", "indeterminate"]], template: function RecordingDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section", 0);
                i0__namespace.ɵɵelement(1, "mat-progress-bar", 1);
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace$4.MatProgressBar], styles: [".main-wrapper[_ngcontent-%COMP%]{width:300px;margin-top:50%}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RecordingDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-recording-dialog',
                        templateUrl: './recording-dialog.component.html',
                        styleUrls: ['./recording-dialog.component.scss'],
                    }]
            }], null, null);
    })();

    var RecordingModalComponent = /** @class */ (function () {
        function RecordingModalComponent() {
        }
        return RecordingModalComponent;
    }());
    RecordingModalComponent.ɵfac = function RecordingModalComponent_Factory(t) { return new (t || RecordingModalComponent)(); };
    RecordingModalComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: RecordingModalComponent, selectors: [["ng-recording-modal"]], decls: 2, vars: 0, consts: [["id", "recorder-wrapper"]], template: function RecordingModalComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section", 0);
                i0__namespace.ɵɵelement(1, "ng-recording-dialog");
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [RecordingDialogComponent], styles: ["@import \"../../../../../../../../../node_modules/@angular/cdk/overlay-prebuilt.css\";[_nghost-%COMP%]{overflow:hidden;display:block;width:100%;height:calc(100% + 24px)}#recorder-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%;display:flex;justify-content:center}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RecordingModalComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-recording-modal',
                        templateUrl: './recording-modal.component.html',
                        styleUrls: ['./recording-modal.component.scss'],
                    }]
            }], null, null);
    })();

    var TimelineModule = /** @class */ (function () {
        function TimelineModule() {
        }
        return TimelineModule;
    }());
    TimelineModule.ɵfac = function TimelineModule_Factory(t) { return new (t || TimelineModule)(); };
    TimelineModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: TimelineModule });
    TimelineModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4.ScrollingModule,
                i1$1.CommonModule,
                i2$4.FormsModule,
                RecordingVisualizerModule,
                i5$2.MatCheckboxModule,
                i1$3.MatDialogModule,
                i1$4.MatProgressBarModule,
                i3.MatButtonModule,
                i5$1.MatTooltipModule,
                i2$2.MatIconModule,
                i1.MatCardModule,
                i2$5.NgxFlamegraphModule,
                i3$2.MatSelectModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TimelineModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TimelineComponent,
                            RecordingDialogComponent,
                            RecordingModalComponent,
                            FrameSelectorComponent,
                            TimelineControlsComponent,
                        ],
                        imports: [
                            i4.ScrollingModule,
                            i1$1.CommonModule,
                            i2$4.FormsModule,
                            RecordingVisualizerModule,
                            i5$2.MatCheckboxModule,
                            i1$3.MatDialogModule,
                            i1$4.MatProgressBarModule,
                            i3.MatButtonModule,
                            i5$1.MatTooltipModule,
                            i2$2.MatIconModule,
                            i1.MatCardModule,
                            i2$5.NgxFlamegraphModule,
                            i3$2.MatSelectModule,
                        ],
                        exports: [TimelineComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(TimelineModule, { declarations: [TimelineComponent,
                RecordingDialogComponent,
                RecordingModalComponent,
                FrameSelectorComponent,
                TimelineControlsComponent], imports: [i4.ScrollingModule,
                i1$1.CommonModule,
                i2$4.FormsModule,
                RecordingVisualizerModule,
                i5$2.MatCheckboxModule,
                i1$3.MatDialogModule,
                i1$4.MatProgressBarModule,
                i3.MatButtonModule,
                i5$1.MatTooltipModule,
                i2$2.MatIconModule,
                i1.MatCardModule,
                i2$5.NgxFlamegraphModule,
                i3$2.MatSelectModule], exports: [TimelineComponent] });
    })();
    i0__namespace.ɵɵsetComponentScope(TimelineComponent, [i1__namespace$1.NgIf, RecordingModalComponent,
        TimelineControlsComponent,
        FrameSelectorComponent, TimelineVisualizerComponent], []);

    var ProfilerModule = /** @class */ (function () {
        function ProfilerModule() {
        }
        return ProfilerModule;
    }());
    ProfilerModule.ɵfac = function ProfilerModule_Factory(t) { return new (t || ProfilerModule)(); };
    ProfilerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ProfilerModule });
    ProfilerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1$3.MatDialogModule,
                i2$2.MatIconModule,
                i3$2.MatSelectModule,
                i2$4.FormsModule,
                TimelineModule,
                i3.MatButtonModule,
                i1.MatCardModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProfilerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ProfilerComponent, ProfilerImportDialogComponent],
                        imports: [
                            i1$1.CommonModule,
                            i1$3.MatDialogModule,
                            i2$2.MatIconModule,
                            i3$2.MatSelectModule,
                            i2$4.FormsModule,
                            TimelineModule,
                            i3.MatButtonModule,
                            i1.MatCardModule,
                        ],
                        exports: [ProfilerComponent],
                        entryComponents: [ProfilerImportDialogComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ProfilerModule, { declarations: [ProfilerComponent, ProfilerImportDialogComponent], imports: [i1$1.CommonModule,
                i1$3.MatDialogModule,
                i2$2.MatIconModule,
                i3$2.MatSelectModule,
                i2$4.FormsModule,
                TimelineModule,
                i3.MatButtonModule,
                i1.MatCardModule], exports: [ProfilerComponent] });
    })();

    var RouterTreeModule = /** @class */ (function () {
        function RouterTreeModule() {
        }
        return RouterTreeModule;
    }());
    RouterTreeModule.ɵfac = function RouterTreeModule_Factory(t) { return new (t || RouterTreeModule)(); };
    RouterTreeModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: RouterTreeModule });
    RouterTreeModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i1$3.MatDialogModule, i3$2.MatSelectModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RouterTreeModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [RouterTreeComponent],
                        imports: [i1$1.CommonModule, i1$3.MatDialogModule, i3$2.MatSelectModule],
                        exports: [RouterTreeComponent],
                        entryComponents: [],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(RouterTreeModule, { declarations: [RouterTreeComponent], imports: [i1$1.CommonModule, i1$3.MatDialogModule, i3$2.MatSelectModule], exports: [RouterTreeComponent] }); })();

    var DevToolsTabModule = /** @class */ (function () {
        function DevToolsTabModule() {
        }
        return DevToolsTabModule;
    }());
    DevToolsTabModule.ɵfac = function DevToolsTabModule_Factory(t) { return new (t || DevToolsTabModule)(); };
    DevToolsTabModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DevToolsTabModule });
    DevToolsTabModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [TabUpdate], imports: [[
                i5.MatTabsModule,
                i2$2.MatIconModule,
                DirectiveExplorerModule,
                ProfilerModule,
                RouterTreeModule,
                i1$1.CommonModule,
                i9.MatMenuModule,
                i3.MatButtonModule,
                i13.MatSlideToggleModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DevToolsTabModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [DevToolsTabsComponent],
                        imports: [
                            i5.MatTabsModule,
                            i2$2.MatIconModule,
                            DirectiveExplorerModule,
                            ProfilerModule,
                            RouterTreeModule,
                            i1$1.CommonModule,
                            i9.MatMenuModule,
                            i3.MatButtonModule,
                            i13.MatSlideToggleModule,
                        ],
                        providers: [TabUpdate],
                        exports: [DevToolsTabsComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DevToolsTabModule, { declarations: [DevToolsTabsComponent], imports: [i5.MatTabsModule,
                i2$2.MatIconModule,
                DirectiveExplorerModule,
                ProfilerModule,
                RouterTreeModule,
                i1$1.CommonModule,
                i9.MatMenuModule,
                i3.MatButtonModule,
                i13.MatSlideToggleModule], exports: [DevToolsTabsComponent] });
    })();

    var DevToolsModule = /** @class */ (function () {
        function DevToolsModule() {
        }
        return DevToolsModule;
    }());
    DevToolsModule.ɵfac = function DevToolsModule_Factory(t) { return new (t || DevToolsModule)(); };
    DevToolsModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DevToolsModule });
    DevToolsModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, DevToolsTabModule, progressSpinner.MatProgressSpinnerModule, i5$1.MatTooltipModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DevToolsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [DevToolsComponent],
                        imports: [i1$1.CommonModule, DevToolsTabModule, progressSpinner.MatProgressSpinnerModule, i5$1.MatTooltipModule],
                        exports: [DevToolsComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DevToolsModule, { declarations: [DevToolsComponent], imports: [i1$1.CommonModule, DevToolsTabModule, progressSpinner.MatProgressSpinnerModule, i5$1.MatTooltipModule], exports: [DevToolsComponent] }); })();

    /*
     * Public API Surface of ng-devtools
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ApplicationEnvironment = ApplicationEnvironment;
    exports.ApplicationOperations = ApplicationOperations;
    exports.DevToolsComponent = DevToolsComponent;
    exports.DevToolsModule = DevToolsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-devtools.umd.js.map
