import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
interface Data {
    label: string;
    value: number;
}
export declare class BarChartComponent {
    set data(nodes: Data[]);
    color: string;
    barClick: EventEmitter<Data>;
    originalData: Data[];
    internalData: Data[];
    static ɵfac: i0.ɵɵFactoryDeclaration<BarChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarChartComponent, "ng-bar-chart", never, { "data": "data"; "color": "color"; }, { "barClick": "barClick"; }, never, never>;
}
export {};
