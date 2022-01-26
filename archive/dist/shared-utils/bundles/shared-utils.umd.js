(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('shared-utils', ['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['shared-utils'] = {}));
}(this, (function (exports) { 'use strict';

    // works with arrays of string, numbers and booleans
    var arrayEquals = function (a, b) {
        if (a.length !== b.length) {
            return false;
        }
        if (a.length === 0) {
            return b.length === 0;
        }
        var equal;
        for (var i = 0; i < a.length; i++) {
            equal = i === 0 ? a[i] === b[i] : a[i] === b[i] && equal;
            if (!equal) {
                break;
            }
        }
        return equal;
    };

    /*
     * Public API Surface of shared-utils
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.arrayEquals = arrayEquals;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shared-utils.umd.js.map
