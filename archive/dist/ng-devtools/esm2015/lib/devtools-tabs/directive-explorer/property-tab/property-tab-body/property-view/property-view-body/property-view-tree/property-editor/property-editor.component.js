import { Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function PropertyEditorComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "span", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.valueToSubmit, " ");
} }
function PropertyEditorComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵlistener("mousedown", function PropertyEditorComponent_span_3_Template_input_mousedown_1_listener($event) { return $event.stopPropagation(); })("ngModelChange", function PropertyEditorComponent_span_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.valueToSubmit = $event; })("keydown.enter", function PropertyEditorComponent_span_3_Template_input_keydown_enter_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.accept(); })("keydown.escape", function PropertyEditorComponent_span_3_Template_input_keydown_escape_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.reject(); })("blur", function PropertyEditorComponent_span_3_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onBlur(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.valueToSubmit);
} }
var PropertyEditorState;
(function (PropertyEditorState) {
    PropertyEditorState[PropertyEditorState["Read"] = 0] = "Read";
    PropertyEditorState[PropertyEditorState["Write"] = 1] = "Write";
})(PropertyEditorState || (PropertyEditorState = {}));
const parseValue = (value) => {
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return value.toString();
    }
};
export class PropertyEditorComponent {
    constructor(_cd, _elementRef) {
        this._cd = _cd;
        this._elementRef = _elementRef;
        this.updateValue = new EventEmitter();
        this.readState = PropertyEditorState.Read;
        this.writeState = PropertyEditorState.Write;
        this.currentPropertyState = this.readState;
    }
    ngOnInit() {
        this.valueToSubmit = this.initialValue;
    }
    ngAfterViewChecked() {
        if (this.currentPropertyState === this.writeState) {
            this.editor.focus();
        }
    }
    accept() {
        const parsed = parseValue(this.valueToSubmit);
        this.updateValue.emit(parsed);
        this._transition(this.readState);
    }
    reject() {
        this.valueToSubmit = this.initialValue;
        this._transition(this.readState);
    }
    onClick() {
        if (this.currentPropertyState === this.readState) {
            this._transition(this.writeState);
        }
    }
    onBlur() {
        if (this.currentPropertyState === this.writeState) {
            this.accept();
        }
    }
    get editor() {
        return this._elementRef.nativeElement.querySelector('input');
    }
    _transition(state) {
        this.currentPropertyState = state;
        if (this.currentPropertyState === this.writeState) {
            this._cd.detectChanges();
            this.editor.focus();
            this.editor.select();
        }
    }
}
PropertyEditorComponent.ɵfac = function PropertyEditorComponent_Factory(t) { return new (t || PropertyEditorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
PropertyEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyEditorComponent, selectors: [["ng-property-editor"]], inputs: { key: "key", initialValue: "initialValue" }, outputs: { updateValue: "updateValue" }, decls: 4, vars: 3, consts: [[1, "editor", 3, "click"], [1, "state-container", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "editable"], ["matInput", "", "type", "text", 1, "editor-input", "editable", 3, "ngModel", "mousedown", "ngModelChange", "keydown.enter", "keydown.escape", "blur"]], template: function PropertyEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function PropertyEditorComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtemplate(2, PropertyEditorComponent_span_2_Template, 3, 1, "span", 2);
        i0.ɵɵtemplate(3, PropertyEditorComponent_span_3_Template, 2, 1, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.currentPropertyState);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.readState);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.writeState);
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".editor[_ngcontent-%COMP%]{cursor:text;border:none;outline:none;min-width:100px;white-space:pre;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.editor-input[_ngcontent-%COMP%]{background-color:#bbddfb;box-shadow:0 0 0 1px rgba(0,0,0,.05)}input[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-family:Menlo,monospace;font-weight:500;font-size:1em;border:none;outline:none}.dark-theme[_nghost-%COMP%]   input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   input[_ngcontent-%COMP%]{color:#bcc5ce;background-color:#202124}.dark-theme[_nghost-%COMP%]   .editor-input[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .editor-input[_ngcontent-%COMP%]{background-color:#454546;box-shadow:0 0 0 1px hsla(0,0%,64.7%,.05)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyEditorComponent, [{
        type: Component,
        args: [{
                templateUrl: './property-editor.component.html',
                selector: 'ng-property-editor',
                styleUrls: ['./property-editor.component.scss'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { key: [{
            type: Input
        }], initialValue: [{
            type: Input
        }], updateValue: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi1ib2R5L3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy1ib2R5L3Byb3BlcnR5LXZpZXctdHJlZS9wcm9wZXJ0eS1lZGl0b3IvcHJvcGVydHktZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi1ib2R5L3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy1ib2R5L3Byb3BlcnR5LXZpZXctdHJlZS9wcm9wZXJ0eS1lZGl0b3IvcHJvcGVydHktZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7Ozs7O0lDUG5CLDRCQUFnQztJQUM5QiwrQkFBdUI7SUFDckIsWUFDRjtJQUFBLGlCQUFPO0lBQ1QsaUJBQU87OztJQUZILGVBQ0Y7SUFERSxxREFDRjs7OztJQUVGLDRCQUFpQztJQUMvQixnQ0FTRTtJQUxBLHdIQUFhLHdCQUF3QixJQUFDLDhNQUFBLDBMQUFBLDRMQUFBLHdLQUFBO0lBSnhDLGlCQVNFO0lBQ0osaUJBQU87OztJQUxILGVBQTJCO0lBQTNCLDhDQUEyQjs7QURDbkMsSUFBSyxtQkFHSjtBQUhELFdBQUssbUJBQW1CO0lBQ3RCLDZEQUFJLENBQUE7SUFDSiwrREFB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QztnQkFDL0MsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7NkZBRVUsR0FBRztrQkFBWCxLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbnR5cGUgRWRpdG9yVHlwZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG50eXBlIEVkaXRvclJlc3VsdCA9IEVkaXRvclR5cGUgfCBBcnJheTxFZGl0b3JUeXBlPjtcblxuZW51bSBQcm9wZXJ0eUVkaXRvclN0YXRlIHtcbiAgUmVhZCxcbiAgV3JpdGUsXG59XG5cbmNvbnN0IHBhcnNlVmFsdWUgPSAodmFsdWU6IEVkaXRvclJlc3VsdCk6IEVkaXRvclJlc3VsdCA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUgYXMgYW55KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbn07XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vcHJvcGVydHktZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc2VsZWN0b3I6ICduZy1wcm9wZXJ0eS1lZGl0b3InLFxuICBzdHlsZVVybHM6IFsnLi9wcm9wZXJ0eS1lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvcGVydHlFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkLCBPbkluaXQge1xuICBASW5wdXQoKSBrZXk6IHN0cmluZztcbiAgQElucHV0KCkgaW5pdGlhbFZhbHVlOiBFZGl0b3JSZXN1bHQ7XG4gIEBPdXRwdXQoKSB1cGRhdGVWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdG9yUmVzdWx0PigpO1xuXG4gIHJlYWRTdGF0ZSA9IFByb3BlcnR5RWRpdG9yU3RhdGUuUmVhZDtcbiAgd3JpdGVTdGF0ZSA9IFByb3BlcnR5RWRpdG9yU3RhdGUuV3JpdGU7XG5cbiAgdmFsdWVUb1N1Ym1pdDogRWRpdG9yUmVzdWx0O1xuICBjdXJyZW50UHJvcGVydHlTdGF0ZSA9IHRoaXMucmVhZFN0YXRlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlVG9TdWJtaXQgPSB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UHJvcGVydHlTdGF0ZSA9PT0gdGhpcy53cml0ZVN0YXRlKSB7XG4gICAgICB0aGlzLmVkaXRvci5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGFjY2VwdCgpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVZhbHVlKHRoaXMudmFsdWVUb1N1Ym1pdCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZS5lbWl0KHBhcnNlZCk7XG4gICAgdGhpcy5fdHJhbnNpdGlvbih0aGlzLnJlYWRTdGF0ZSk7XG4gIH1cblxuICByZWplY3QoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZVRvU3VibWl0ID0gdGhpcy5pbml0aWFsVmFsdWU7XG4gICAgdGhpcy5fdHJhbnNpdGlvbih0aGlzLnJlYWRTdGF0ZSk7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQcm9wZXJ0eVN0YXRlID09PSB0aGlzLnJlYWRTdGF0ZSkge1xuICAgICAgdGhpcy5fdHJhbnNpdGlvbih0aGlzLndyaXRlU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UHJvcGVydHlTdGF0ZSA9PT0gdGhpcy53cml0ZVN0YXRlKSB7XG4gICAgICB0aGlzLmFjY2VwdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBlZGl0b3IoKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbihzdGF0ZTogUHJvcGVydHlFZGl0b3JTdGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFByb3BlcnR5U3RhdGUgPSBzdGF0ZTtcbiAgICBpZiAodGhpcy5jdXJyZW50UHJvcGVydHlTdGF0ZSA9PT0gdGhpcy53cml0ZVN0YXRlKSB7XG4gICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLmVkaXRvci5mb2N1cygpO1xuICAgICAgdGhpcy5lZGl0b3Iuc2VsZWN0KCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZWRpdG9yXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuICA8c3BhbiBbbmdTd2l0Y2hdPVwiY3VycmVudFByb3BlcnR5U3RhdGVcIiBjbGFzcz1cInN0YXRlLWNvbnRhaW5lclwiPlxuICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCJyZWFkU3RhdGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZWRpdGFibGVcIj5cbiAgICAgICAge3sgdmFsdWVUb1N1Ym1pdCB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwid3JpdGVTdGF0ZVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3M9XCJlZGl0b3ItaW5wdXQgZWRpdGFibGVcIlxuICAgICAgICAobW91c2Vkb3duKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVUb1N1Ym1pdFwiXG4gICAgICAgIChrZXlkb3duLmVudGVyKT1cImFjY2VwdCgpXCJcbiAgICAgICAgKGtleWRvd24uZXNjYXBlKT1cInJlamVjdCgpXCJcbiAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgLz5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19