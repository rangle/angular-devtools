export const appIsAngularInDevMode = () => {
    return appIsAngular() && appHasGlobalNgDebugObject();
};
export const appIsAngularIvy = () => {
    var _a, _b, _c, _d;
    return !!((_d = (_c = (_b = (_a = window).getAllAngularRootElements) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.__ngContext__);
};
export const appIsAngular = () => {
    return !!getAngularVersion();
};
export const appIsSupportedAngularVersion = () => {
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
export const getAngularVersion = () => {
    const el = document.querySelector('[ng-version]');
    if (!el) {
        return null;
    }
    return el.getAttribute('ng-version');
};
//# sourceMappingURL=angular-check.js.map