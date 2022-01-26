import { AfterViewInit } from '@angular/core';
import { MessageBus, Events, Route } from 'protocol';
import * as i0 from "@angular/core";
export declare class RouterTreeComponent implements AfterViewInit {
    private _messageBus;
    private svgContainer;
    private g;
    set routes(routes: Route[]);
    private _routes;
    private tree;
    private tooltip;
    constructor(_messageBus: MessageBus<Events>);
    ngAfterViewInit(): void;
    render(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RouterTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RouterTreeComponent, "ng-router-tree", never, { "routes": "routes"; }, {}, never, never>;
}
