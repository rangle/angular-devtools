import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AppTodoComponent } from './app-todo.component';
import { DialogComponent } from './dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppTodoComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatDialogModule,
            MatFormFieldModule,
            FormsModule,
            MatInputModule,
            CommonModule,
            RouterModule.forChild([
                {
                    path: 'todos',
                    component: AppTodoComponent,
                    children: [
                        {
                            path: 'app',
                            loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
                        },
                        {
                            path: 'about',
                            loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
                        },
                        {
                            path: '**',
                            redirectTo: 'app',
                        },
                    ],
                },
                {
                    path: '**',
                    redirectTo: 'todos',
                },
            ]),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [AppTodoComponent, DialogComponent],
                imports: [
                    MatDialogModule,
                    MatFormFieldModule,
                    FormsModule,
                    MatInputModule,
                    CommonModule,
                    RouterModule.forChild([
                        {
                            path: 'todos',
                            component: AppTodoComponent,
                            children: [
                                {
                                    path: 'app',
                                    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
                                },
                                {
                                    path: 'about',
                                    loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
                                },
                                {
                                    path: '**',
                                    redirectTo: 'app',
                                },
                            ],
                        },
                        {
                            path: '**',
                            redirectTo: 'todos',
                        },
                    ]),
                ],
                exports: [AppTodoComponent],
                bootstrap: [AppTodoComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppTodoComponent, DialogComponent], imports: [MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        CommonModule, i1.RouterModule], exports: [AppTodoComponent] }); })();
//# sourceMappingURL=app.module.js.map