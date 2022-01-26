import { Component, ViewChild } from '@angular/core';
import { IFrameMessageBus } from 'src/iframe-message-bus';
import { PriorityAwareMessageBus, MessageBus } from 'protocol';
import * as i0 from "@angular/core";
import * as i1 from "../../../projects/ng-devtools/src/lib/devtools.component";
const _c0 = ["ref"];
export class DevToolsComponent {
    constructor() {
        this.messageBus = null;
    }
}
DevToolsComponent.ɵfac = function DevToolsComponent_Factory(t) { return new (t || DevToolsComponent)(); };
DevToolsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DevToolsComponent, selectors: [["ng-component"]], viewQuery: function DevToolsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.iframe = _t.first);
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: MessageBus,
                useFactory() {
                    return new PriorityAwareMessageBus(new IFrameMessageBus('angular-devtools', 'angular-devtools-backend', 
                    // tslint:disable-next-line: no-non-null-assertion
                    () => document.querySelector('#sample-app').contentWindow));
                },
            },
        ])], decls: 5, vars: 0, consts: [["src", "demo-app/todos/app", "id", "sample-app"], ["ref", ""], [1, "devtools-wrapper"]], template: function DevToolsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "iframe", 0, 1);
        i0.ɵɵelement(2, "br");
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelement(4, "ng-devtools");
        i0.ɵɵelementEnd();
    } }, directives: [i1.DevToolsComponent], styles: ["iframe[_ngcontent-%COMP%] {\n  height: 339px;\n  width: 100%;\n  border: 0;\n}\n\n.devtools-wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 344px);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevToolsComponent, [{
        type: Component,
        args: [{
                templateUrl: './devtools-app.component.html',
                styleUrls: ['./devtools-app.component.scss'],
                providers: [
                    {
                        provide: MessageBus,
                        useFactory() {
                            return new PriorityAwareMessageBus(new IFrameMessageBus('angular-devtools', 'angular-devtools-backend', 
                            // tslint:disable-next-line: no-non-null-assertion
                            () => document.querySelector('#sample-app').contentWindow));
                        },
                    },
                ],
            }]
    }], null, { iframe: [{
            type: ViewChild,
            args: ['ref']
        }] }); })();
//# sourceMappingURL=devtools-app.component.js.map