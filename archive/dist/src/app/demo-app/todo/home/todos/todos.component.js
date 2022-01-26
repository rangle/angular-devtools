import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "./todo/todo.component";
import * as i4 from "./todo/tooltip.directive";
import * as i5 from "../sample.pipe";
import * as i6 from "./todos.pipe";
function TodosComponent_app_todo_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-todo", 13);
    i0.ɵɵlistener("delete", function TodosComponent_app_todo_20_Template_app_todo_delete_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onDelete($event); })("update", function TodosComponent_app_todo_20_Template_app_todo_update_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onChange($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const todo_r2 = ctx.$implicit;
    i0.ɵɵproperty("todo", todo_r2);
} }
const fib = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};
export class TodosComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.todos = [
            {
                label: 'Buy milk',
                completed: false,
                id: '42',
            },
            {
                label: 'Save the world',
                completed: false,
                id: '43',
            },
        ];
        this.update = new EventEmitter();
        this.delete = new EventEmitter();
        this.add = new EventEmitter();
    }
    ngOnInit() {
        if (typeof window !== 'undefined') {
            window.addEventListener('hashchange', (this.hashListener = () => this.cdRef.markForCheck()));
        }
    }
    ngOnDestroy() {
        fib(40);
        if (typeof window !== 'undefined') {
            window.removeEventListener('hashchange', this.hashListener);
        }
    }
    get filterValue() {
        if (typeof window !== 'undefined') {
            return window.location.hash.replace(/^#\//, '') || "all" /* All */;
        }
        return "all" /* All */;
    }
    get itemsLeft() {
        return (this.todos || []).filter((t) => !t.completed).length;
    }
    clearCompleted() {
        (this.todos || []).filter((t) => t.completed).forEach((t) => this.delete.emit(t));
    }
    addTodo(input) {
        const todo = {
            completed: false,
            label: input.value,
        };
        const result = Object.assign(Object.assign({}, todo), { id: Math.random().toString() });
        this.todos.push(result);
        input.value = '';
    }
    onChange(todo) {
        if (!todo.id) {
            return;
        }
    }
    onDelete(todo) {
        if (!todo.id) {
            return;
        }
        const idx = this.todos.findIndex((t) => t.id === todo.id);
        if (idx < 0) {
            return;
        }
        console.log('Deleting', idx);
        this.todos.splice(idx, 1);
    }
}
TodosComponent.ɵfac = function TodosComponent_Factory(t) { return new (t || TodosComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
TodosComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TodosComponent, selectors: [["app-todos"]], outputs: { update: "update", delete: "delete", add: "add" }, decls: 29, vars: 8, consts: [[3, "routerLink"], [1, "todoapp"], [1, "header"], ["placeholder", "What needs to be done?", "autofocus", "", 1, "new-todo", 3, "keydown.enter"], ["input", ""], [1, "main"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all"], ["for", "toggle-all"], [1, "todo-list"], ["appTooltip", "", 3, "todo", "delete", "update", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "todo-count"], [1, "clear-completed", 3, "click"], ["appTooltip", "", 3, "todo", "delete", "update"]], template: function TodosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵtext(1, "Home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "a", 0);
        i0.ɵɵtext(3, "Home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 0);
        i0.ɵɵtext(5, "Home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "sample");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "section", 1);
        i0.ɵɵelementStart(10, "header", 2);
        i0.ɵɵelementStart(11, "h1");
        i0.ɵɵtext(12, "todos");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "input", 3, 4);
        i0.ɵɵlistener("keydown.enter", function TodosComponent_Template_input_keydown_enter_13_listener() { i0.ɵɵrestoreView(_r6); const _r0 = i0.ɵɵreference(14); return ctx.addTodo(_r0); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "section", 5);
        i0.ɵɵelement(16, "input", 6);
        i0.ɵɵelementStart(17, "label", 7);
        i0.ɵɵtext(18, "Mark all as complete");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "ul", 8);
        i0.ɵɵtemplate(20, TodosComponent_app_todo_20_Template, 1, 1, "app-todo", 9);
        i0.ɵɵpipe(21, "todosFilter");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "footer", 10);
        i0.ɵɵelementStart(23, "span", 11);
        i0.ɵɵelementStart(24, "strong");
        i0.ɵɵtext(25);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(26, " item left");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 12);
        i0.ɵɵlistener("click", function TodosComponent_Template_button_click_27_listener() { return ctx.clearCompleted(); });
        i0.ɵɵtext(28, "Clear completed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(8, 3, "Sample text processed by a pipe"));
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(21, 5, ctx.todos, ctx.filterValue));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.itemsLeft);
    } }, directives: [i1.RouterLinkWithHref, i2.NgForOf, i3.TodoComponent, i4.TooltipDirective], pipes: [i5.SamplePipe, i6.TodosFilter], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TodosComponent, [{
        type: Component,
        args: [{
                templateUrl: 'todos.component.html',
                selector: 'app-todos',
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { update: [{
            type: Output
        }], delete: [{
            type: Output
        }], add: [{
            type: Output
        }] }); })();
//# sourceMappingURL=todos.component.js.map