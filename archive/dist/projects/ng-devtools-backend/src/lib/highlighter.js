let overlay;
let overlayContent;
export const DEV_TOOLS_HIGHLIGHT_NODE_ID = '____ngDevToolsHighlight';
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
export const findComponentAndHost = (el) => {
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
export const getDirectiveName = (dir) => {
    if (dir) {
        return dir.constructor.name;
    }
    return 'unknown';
};
export const highlight = (el) => {
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
export function unHighlight() {
    if (overlay && overlay.parentNode) {
        document.body.removeChild(overlay);
    }
}
export function inDoc(node) {
    if (!node) {
        return false;
    }
    const doc = node.ownerDocument.documentElement;
    const parent = node.parentNode;
    return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}
export function getComponentRect(el) {
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
//# sourceMappingURL=highlighter.js.map