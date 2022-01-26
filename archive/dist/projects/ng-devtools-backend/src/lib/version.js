var _a, _b, _c;
const versionElement = document.querySelector('[ng-version]');
const versionRe = /(\d+\.\d+\.\d+(-(next|rc)\.\d+)?)/;
const defaultVersion = '0.0.0';
let version = defaultVersion;
if (versionElement) {
    version = (_a = versionElement.getAttribute('ng-version')) !== null && _a !== void 0 ? _a : defaultVersion;
    version = (_c = ((_b = version.match(versionRe)) !== null && _b !== void 0 ? _b : [''])[0]) !== null && _c !== void 0 ? _c : defaultVersion;
}
export const VERSION = version;
//# sourceMappingURL=version.js.map