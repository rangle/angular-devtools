import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FilterComponent {
    filter: EventEmitter<string>;
    nextMatched: EventEmitter<void>;
    prevMatched: EventEmitter<void>;
    hasMatched: boolean;
    emitFilter(event: InputEvent): void;
    emitNextMatched(): void;
    emitPrevMatched(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterComponent, "ng-filter", never, { "hasMatched": "hasMatched"; }, { "filter": "filter"; "nextMatched": "nextMatched"; "prevMatched": "prevMatched"; }, never, never>;
}
