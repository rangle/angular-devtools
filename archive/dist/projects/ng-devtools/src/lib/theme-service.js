import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ThemeService {
    constructor(_rendererFactory) {
        this._rendererFactory = _rendererFactory;
        this.currentTheme = new ReplaySubject();
        this.renderer = this._rendererFactory.createRenderer(null, null);
        this.toggleDarkMode(this._prefersDarkMode);
    }
    toggleDarkMode(isDark) {
        const removeClass = isDark ? 'light-theme' : 'dark-theme';
        const addClass = !isDark ? 'light-theme' : 'dark-theme';
        this.renderer.removeClass(document.body, removeClass);
        this.renderer.addClass(document.body, addClass);
        this.currentTheme.next(addClass);
    }
    initializeThemeWatcher() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            this.toggleDarkMode(this._prefersDarkMode);
        });
    }
    get _prefersDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(i0.ɵɵinject(i0.RendererFactory2)); };
ThemeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i0.RendererFactory2 }]; }, null); })();
//# sourceMappingURL=theme-service.js.map