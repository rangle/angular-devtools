import { OnInit, OnDestroy } from '@angular/core';
import { MessageBus, Events } from 'protocol';
import { ThemeService } from './theme-service';
import * as i0 from "@angular/core";
export declare class DevToolsComponent implements OnInit, OnDestroy {
    private _messageBus;
    private _themeService;
    angularExists: boolean | null;
    angularVersion: string | boolean | undefined;
    angularIsInDevMode: boolean;
    ivy: boolean;
    constructor(_messageBus: MessageBus<Events>, _themeService: ThemeService);
    private _interval$;
    ngOnInit(): void;
    get majorAngularVersion(): number;
    get supportedVersion(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DevToolsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DevToolsComponent, "ng-devtools", never, {}, {}, never, never>;
}
