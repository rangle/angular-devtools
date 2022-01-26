import { unHighlight, highlight, findComponentAndHost } from '../highlighter';
import { findNodeInForest } from '../component-tree';
import { initializeOrGetDirectiveForestHooks } from '../hooks';
export class ComponentInspector {
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
//# sourceMappingURL=component-inspector.js.map