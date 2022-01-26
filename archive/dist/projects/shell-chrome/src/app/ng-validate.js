window.addEventListener('message', (event) => {
    if (event.source === window && event.data) {
        chrome.runtime.sendMessage(event.data);
    }
});
function detectAngular(win) {
    var _a, _b, _c, _d;
    const isDebugMode = Boolean(win.ng);
    const ngVersionElement = document.querySelector('[ng-version]');
    let isSupportedAngularVersion = false;
    let isAngular = false;
    if (ngVersionElement) {
        isAngular = true;
        const attr = ngVersionElement.getAttribute('ng-version');
        const major = attr ? parseInt(attr.split('.')[0], 10) : -1;
        // In case of g3 apps we support major 0.
        if (attr && (major >= 9 || major === 0)) {
            isSupportedAngularVersion = true;
        }
    }
    win.postMessage({
        // Needs to be inline because we're stringifying
        // this function and executing it with eval.
        isIvy: !!((_d = (_c = (_b = (_a = window).getAllAngularRootElements) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.__ngContext__),
        isAngular,
        isDebugMode,
        isSupportedAngularVersion,
        isAngularDevTools: true,
    }, '*');
}
function installScript(fn) {
    const source = `;(${fn})(window)`;
    const script = document.createElement('script');
    script.textContent = source;
    document.documentElement.appendChild(script);
    const parentElement = script.parentElement;
    if (parentElement) {
        parentElement.removeChild(script);
    }
}
if (document instanceof HTMLDocument) {
    installScript(detectAngular.toString());
}
export {};
//# sourceMappingURL=ng-validate.js.map