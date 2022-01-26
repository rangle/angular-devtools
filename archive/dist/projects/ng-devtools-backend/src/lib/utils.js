export const runOutsideAngular = (f) => {
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
export const componentMetadata = (instance) => instance.constructor.ɵcmp;
export const isCustomElement = (node) => {
    if (typeof customElements === 'undefined') {
        return false;
    }
    if (!(node instanceof HTMLElement)) {
        return false;
    }
    const tagName = node.tagName.toLowerCase();
    return !!customElements.get(tagName);
};
//# sourceMappingURL=utils.js.map