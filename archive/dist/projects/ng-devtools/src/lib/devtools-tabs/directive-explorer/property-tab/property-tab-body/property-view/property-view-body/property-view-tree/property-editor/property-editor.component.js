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
        if (!parsed && parsed !== false) {
            return this.reject();
        }
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
PropertyEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyEditorComponent, selectors: [["ng-property-editor"]], inputs: { key: "key", initialValue: "initialValue" }, outputs: { updateValue: "updateValue" }, decls: 4, vars: 3, consts: [[1, "editor", 3, "click"], [1, "state-container", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "editable"], ["type", "text", 1, "editor-input", "editable", 3, "ngModel", "mousedown", "ngModelChange", "keydown.enter", "keydown.escape", "blur"]], template: function PropertyEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".editor[_ngcontent-%COMP%] {\n  cursor: text;\n  border: none;\n  width: fit-content;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  width: fit-content;\n}"] });
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
//# sourceMappingURL=property-editor.component.js.map