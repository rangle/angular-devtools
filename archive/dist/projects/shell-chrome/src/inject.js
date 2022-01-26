export const injectScripts = (scripts, cb) => {
    let injected = 0;
    scripts.forEach(s => injectScript(chrome.runtime.getURL(s), () => {
        injected++;
        if (injected === scripts.length && cb) {
            cb();
        }
    }));
};
const injectScript = (scriptName, cb) => {
    const src = `
    (function() {
      var script = document.constructor.prototype.createElement.call(document, 'script');
      script.src = "${scriptName}";
      document.documentElement.appendChild(script);
      script.parentNode.removeChild(script);
    })()
  `;
    chrome.devtools.inspectedWindow.eval(src, (_, err) => {
        if (err) {
            console.log(err);
        }
        cb();
    });
};
//# sourceMappingURL=inject.js.map