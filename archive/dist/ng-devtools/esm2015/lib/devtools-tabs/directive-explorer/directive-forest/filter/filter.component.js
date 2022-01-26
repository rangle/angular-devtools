import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
function FilterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "button", 7);
    i0.ɵɵlistener("click", function FilterComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emitPrevMatched(); });
    i0.ɵɵelementStart(2, "mat-icon", 8);
    i0.ɵɵtext(3, " expand_less ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 7);
    i0.ɵɵlistener("click", function FilterComponent_div_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.emitNextMatched(); });
    i0.ɵɵelementStart(5, "mat-icon", 9);
    i0.ɵɵtext(6, " expand_more ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class FilterComponent {
    constructor() {
        this.filter = new EventEmitter();
        this.nextMatched = new EventEmitter();
        this.prevMatched = new EventEmitter();
        this.hasMatched = false;
    }
    emitFilter(event) {
        this.filter.emit(event.target.value);
    }
    emitNextMatched() {
        this.nextMatched.emit();
    }
    emitPrevMatched() {
        this.prevMatched.emit();
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng-filter"]], inputs: { hasMatched: "hasMatched" }, outputs: { filter: "filter", nextMatched: "nextMatched", prevMatched: "prevMatched" }, decls: 7, vars: 1, consts: [[1, "filter"], [1, "icon-outer"], ["color", "primary"], ["matInput", "", "placeholder", "Filter components", 1, "filter-input", 3, "input", "keydown.enter", "keydown.shift.enter"], ["filterInput", ""], ["class", "up-down-buttons", 4, "ngIf"], [1, "up-down-buttons"], ["mat-icon-button", "", 3, "click"], [1, "mat-icon-rtl-mirror"], [1, ""]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "mat-icon", 2);
        i0.ɵɵtext(3, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 3, 4);
        i0.ɵɵlistener("input", function FilterComponent_Template_input_input_4_listener($event) { return ctx.emitFilter($event); })("keydown.enter", function FilterComponent_Template_input_keydown_enter_4_listener() { return ctx.emitNextMatched(); })("keydown.shift.enter", function FilterComponent_Template_input_keydown_shift_enter_4_listener() { return ctx.emitPrevMatched(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, FilterComponent_div_6_Template, 7, 0, "div", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.hasMatched);
    } }, directives: [i1.MatCard, i2.MatIcon, i3.NgIf, i4.MatButton], styles: [".filter[_ngcontent-%COMP%]{display:flex;padding:0;border-radius:0;box-shadow:none!important;border-bottom:1px solid rgba(0,0,0,.12)}.filter[_ngcontent-%COMP%]   .icon-outer[_ngcontent-%COMP%]{display:flex;align-items:center;padding-right:5px;margin-left:5px}.filter[_ngcontent-%COMP%]   .icon-outer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:16px;height:16px;margin:auto;opacity:.7}.filter[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]{border:none;border-left:1px solid rgba(0,0,0,.12);padding-left:5px;width:100%;font-size:11px;font-family:inherit;font-weight:inherit;height:30px;outline:none;color:rgba(0,0,0,.87)}.up-down-buttons[_ngcontent-%COMP%]{display:flex}.up-down-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:24px;height:24px}[_nghost-%COMP%]     .up-down-buttons .mat-icon-button{line-height:25px}[_nghost-%COMP%]     .up-down-buttons button mat-icon{opacity:.5}.dark-theme[_nghost-%COMP%]   .filter-input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .filter-input[_ngcontent-%COMP%]{background-color:#202124;color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'ng-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.scss'],
            }]
    }], null, { filter: [{
            type: Output
        }], nextMatched: [{
            type: Output
        }], prevMatched: [{
            type: Output
        }], hasMatched: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvZGlyZWN0aXZlLWZvcmVzdC9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvZGlyZWN0aXZlLWZvcmVzdC9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDYXJFLDhCQUFnRDtJQUM5QyxpQ0FBb0Q7SUFBNUIsd0xBQTJCO0lBQ2pELG1DQUFzQztJQUNwQyw2QkFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxpQ0FBb0Q7SUFBNUIsd0xBQTJCO0lBQ2pELG1DQUFtQjtJQUNqQiw2QkFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDWCxpQkFBTTs7QURqQlIsTUFBTSxPQUFPLGVBQWU7SUFMNUI7UUFNWSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUQsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRELGVBQVUsR0FBRyxLQUFLLENBQUM7S0FhN0I7SUFYQyxVQUFVLENBQUMsS0FBaUI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs4RUFqQlUsZUFBZTtrRUFBZixlQUFlO1FDUDVCLG1DQUF5QjtRQUN2Qiw4QkFBd0I7UUFDdEIsbUNBQTBCO1FBQUEsc0JBQU07UUFBQSxpQkFBVztRQUM3QyxpQkFBTTtRQUNOLG1DQVFFO1FBTEEsaUdBQVMsc0JBQWtCLElBQUMsOEZBQ1gscUJBQWlCLElBRE4sMEdBRUwscUJBQWlCLElBRlo7UUFIOUIsaUJBUUU7UUFDRixnRUFXTTtRQUNSLGlCQUFXOztRQVpxQixlQUFnQjtRQUFoQixxQ0FBZ0I7O3VGRE5uQyxlQUFlO2NBTDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7Z0JBRVcsTUFBTTtrQkFBZixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFFRSxVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbHRlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQge1xuICBAT3V0cHV0KCkgZmlsdGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgbmV4dE1hdGNoZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByZXZNYXRjaGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgaGFzTWF0Y2hlZCA9IGZhbHNlO1xuXG4gIGVtaXRGaWx0ZXIoZXZlbnQ6IElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlci5lbWl0KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICB9XG5cbiAgZW1pdE5leHRNYXRjaGVkKCk6IHZvaWQge1xuICAgIHRoaXMubmV4dE1hdGNoZWQuZW1pdCgpO1xuICB9XG5cbiAgZW1pdFByZXZNYXRjaGVkKCk6IHZvaWQge1xuICAgIHRoaXMucHJldk1hdGNoZWQuZW1pdCgpO1xuICB9XG59XG4iLCI8bWF0LWNhcmQgY2xhc3M9XCJmaWx0ZXJcIj5cbiAgPGRpdiBjbGFzcz1cImljb24tb3V0ZXJcIj5cbiAgICA8bWF0LWljb24gY29sb3I9XCJwcmltYXJ5XCI+c2VhcmNoPC9tYXQtaWNvbj5cbiAgPC9kaXY+XG4gIDxpbnB1dFxuICAgIG1hdElucHV0XG4gICAgI2ZpbHRlcklucHV0XG4gICAgKGlucHV0KT1cImVtaXRGaWx0ZXIoJGV2ZW50KVwiXG4gICAgKGtleWRvd24uZW50ZXIpPVwiZW1pdE5leHRNYXRjaGVkKClcIlxuICAgIChrZXlkb3duLnNoaWZ0LmVudGVyKT1cImVtaXRQcmV2TWF0Y2hlZCgpXCJcbiAgICBjbGFzcz1cImZpbHRlci1pbnB1dFwiXG4gICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIgY29tcG9uZW50c1wiXG4gIC8+XG4gIDxkaXYgY2xhc3M9XCJ1cC1kb3duLWJ1dHRvbnNcIiAqbmdJZj1cImhhc01hdGNoZWRcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZW1pdFByZXZNYXRjaGVkKClcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAgZXhwYW5kX2xlc3NcbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImVtaXROZXh0TWF0Y2hlZCgpXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJcIj5cbiAgICAgICAgZXhwYW5kX21vcmVcbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9tYXQtY2FyZD5cbiJdfQ==