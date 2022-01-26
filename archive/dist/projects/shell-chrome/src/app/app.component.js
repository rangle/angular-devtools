import { Component, NgZone } from '@angular/core';
import { injectScripts } from '../inject';
import { PriorityAwareMessageBus, MessageBus } from 'protocol';
import { ZoneAwareChromeMessageBus } from './zone-aware-chrome-message-bus';
import * as i0 from "@angular/core";
import * as i1 from "../../../ng-devtools/src/lib/devtools.component";
export class AppComponent {
    constructor(_cd) {
        this._cd = _cd;
    }
    ngOnInit() {
        console.log('Initializing Angular DevTools');
        chrome.devtools.network.onNavigated.addListener(() => {
            window.location.reload();
        });
        injectScripts(['backend.js', 'runtime.js']);
        this._cd.detectChanges();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], features: [i0.ɵɵProvidersFeature([
            {
                provide: MessageBus,
                useFactory(ngZone) {
                    const port = chrome.runtime.connect({
                        name: '' + chrome.devtools.inspectedWindow.tabId,
                    });
                    return new PriorityAwareMessageBus(new ZoneAwareChromeMessageBus(port, ngZone));
                },
                deps: [NgZone],
            },
        ])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "ng-devtools");
    } }, directives: [i1.DevToolsComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                providers: [
                    {
                        provide: MessageBus,
                        useFactory(ngZone) {
                            const port = chrome.runtime.connect({
                                name: '' + chrome.devtools.inspectedWindow.tabId,
                            });
                            return new PriorityAwareMessageBus(new ZoneAwareChromeMessageBus(port, ngZone));
                        },
                        deps: [NgZone],
                    },
                ],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=app.component.js.map