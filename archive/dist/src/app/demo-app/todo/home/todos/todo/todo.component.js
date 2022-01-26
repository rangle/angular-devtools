import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./tooltip.directive";
export class TodoComponent {
    constructor() {
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
        this.editMode = false;
    }
    toggle() {
        this.todo.completed = !this.todo.completed;
        this.update.emit(this.todo);
    }
    completeEdit(label) {
        this.todo.label = label;
        this.editMode = false;
        this.update.emit(this.todo);
    }
    enableEditMode() {
        this.editMode = true;
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(); };
TodoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TodoComponent, selectors: [["app-todo"]], inputs: { todo: "todo" }, outputs: { update: "update", delete: "delete" }, decls: 7, vars: 9, consts: [["appTooltip", "", 1, "view"], ["type", "checkbox", 1, "toggle", 3, "checked", "change"], [3, "dblclick"], [1, "destroy", 3, "click"], [1, "edit", 3, "value", "keydown.enter"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "li");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "input", 1);
        i0.ɵɵlistener("change", function TodoComponent_Template_input_change_2_listener() { return ctx.toggle(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "label", 2);
        i0.ɵɵlistener("dblclick", function TodoComponent_Template_label_dblclick_3_listener() { return ctx.enableEditMode(); });
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵlistener("click", function TodoComponent_Template_button_click_5_listener() { return ctx.delete.emit(ctx.todo); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "input", 4);
        i0.ɵɵlistener("keydown.enter", function TodoComponent_Template_input_keydown_enter_6_listener($event) { return ctx.completeEdit($event.target.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("completed", ctx.todo.completed);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("checked", ctx.todo.completed);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("display", ctx.editMode ? "none" : "block");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.todo.label);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("display", ctx.editMode ? "block" : "none");
        i0.ɵɵproperty("value", ctx.todo.label);
    } }, directives: [i1.TooltipDirective], styles: [".destroy[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: unset !important;\n}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TodoComponent, [{
        type: Component,
        args: [{
                templateUrl: 'todo.component.html',
                selector: 'app-todo',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: ['./todo.component.scss'],
            }]
    }], null, { todo: [{
            type: Input
        }], update: [{
            type: Output
        }], delete: [{
            type: Output
        }] }); })();
//# sourceMappingURL=todo.component.js.map