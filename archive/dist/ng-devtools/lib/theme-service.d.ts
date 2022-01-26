import { Subject } from 'rxjs';
import { RendererFactory2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare type Theme = 'dark-theme' | 'light-theme';
export declare class ThemeService {
    private _rendererFactory;
    private renderer;
    currentTheme: Subject<Theme>;
    constructor(_rendererFactory: RendererFactory2);
    toggleDarkMode(isDark: boolean): void;
    initializeThemeWatcher(): void;
    private get _prefersDarkMode();
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
