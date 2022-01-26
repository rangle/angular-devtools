import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodosFilter } from './todos/todos.pipe';
import { TooltipDirective } from './todos/todo/tooltip.directive';
import { CommonModule } from '@angular/common';
import { SamplePipe } from './sample.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: TodosComponent,
                    pathMatch: 'full',
                },
            ]),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule.forChild([
                        {
                            path: '',
                            component: TodosComponent,
                            pathMatch: 'full',
                        },
                    ]),
                ],
                declarations: [SamplePipe, TodosComponent, TodoComponent, TodosFilter, TooltipDirective],
                exports: [TodosComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HomeModule, { declarations: [SamplePipe, TodosComponent, TodoComponent, TodosFilter, TooltipDirective], imports: [CommonModule, i1.RouterModule], exports: [TodosComponent] }); })();
//# sourceMappingURL=home.module.js.map