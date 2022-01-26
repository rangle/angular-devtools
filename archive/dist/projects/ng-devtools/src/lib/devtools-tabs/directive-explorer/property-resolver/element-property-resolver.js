import { Injectable } from '@angular/core';
import { DirectivePropertyResolver } from './directive-property-resolver';
import * as i0 from "@angular/core";
import * as i1 from "protocol";
export class ElementPropertyResolver {
    constructor(_messageBus) {
        this._messageBus = _messageBus;
        this._directivePropertiesController = new Map();
    }
    clearProperties() {
        this._directivePropertiesController = new Map();
    }
    setProperties(indexedNode, data) {
        this._flushDeletedProperties(data);
        Object.keys(data).forEach((key) => {
            const controller = this._directivePropertiesController.get(key);
            if (controller) {
                controller.updateProperties(data[key]);
                return;
            }
            const position = {
                element: indexedNode.position,
                directive: undefined,
            };
            if (!indexedNode.component || indexedNode.component.name !== key) {
                position.directive = indexedNode.directives.findIndex((d) => d.name === key);
            }
            this._directivePropertiesController.set(key, new DirectivePropertyResolver(this._messageBus, data[key], position));
        });
    }
    _flushDeletedProperties(data) {
        const currentProps = [...this._directivePropertiesController.keys()];
        const incomingProps = new Set(Object.keys(data));
        for (const prop of currentProps) {
            if (!incomingProps.has(prop)) {
                this._directivePropertiesController.delete(prop);
            }
        }
    }
    getExpandedProperties() {
        const result = {};
        for (const [directive] of this._directivePropertiesController) {
            const controller = this._directivePropertiesController.get(directive);
            if (!controller) {
                console.error('Unable to find nested properties controller for', directive);
                continue;
            }
            result[directive] = controller.getExpandedProperties();
        }
        return result;
    }
    getDirectiveController(directive) {
        return this._directivePropertiesController.get(directive);
    }
}
ElementPropertyResolver.ɵfac = function ElementPropertyResolver_Factory(t) { return new (t || ElementPropertyResolver)(i0.ɵɵinject(i1.MessageBus)); };
ElementPropertyResolver.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ElementPropertyResolver, factory: ElementPropertyResolver.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementPropertyResolver, [{
        type: Injectable
    }], function () { return [{ type: i1.MessageBus }]; }, null); })();
//# sourceMappingURL=element-property-resolver.js.map