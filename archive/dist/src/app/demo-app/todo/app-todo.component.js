import { Component } from '@angular/core';
import { DialogComponent } from './dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/router";
export class AppTodoComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
AppTodoComponent.ɵfac = function AppTodoComponent_Factory(t) { return new (t || AppTodoComponent)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
AppTodoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppTodoComponent, selectors: [["app-todo-demo"]], decls: 8, vars: 0, consts: [["routerLink", "/demo-app/todos/app"], ["routerLink", "/demo-app/todos/about"], [1, "dialog-open-button", 3, "click"]], template: function AppTodoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav");
        i0.ɵɵelementStart(1, "a", 0);
        i0.ɵɵtext(2, "Todos");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "a", 1);
        i0.ɵɵtext(4, "About");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function AppTodoComponent_Template_button_click_5_listener() { return ctx.openDialog(); });
        i0.ɵɵtext(6, "Open dialog");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "router-outlet");
    } }, directives: [i2.RouterLinkWithHref, i2.RouterOutlet], styles: ["nav[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 10px;\n\n  a {\n    margin-right: 15px;\n    text-decoration: none;\n  }\n}\n\n.dialog-open-button[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin-right: 20px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppTodoComponent, [{
        type: Component,
        args: [{
                selector: 'app-todo-demo',
                templateUrl: './app-todo.component.html',
                styleUrls: ['./app-todo.component.scss'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
//# sourceMappingURL=app-todo.component.js.map