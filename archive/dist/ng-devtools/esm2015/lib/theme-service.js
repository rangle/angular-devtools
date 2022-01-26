import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ThemeService {
    constructor(_rendererFactory) {
        this._rendererFactory = _rendererFactory;
        this.currentTheme = new ReplaySubject();
        this.renderer = this._rendererFactory.createRenderer(null, null);
        this.toggleDarkMode(this._prefersDarkMode);
    }
    toggleDarkMode(isDark) {
        const removeClass = isDark ? 'light-theme' : 'dark-theme';
        const addClass = !isDark ? 'light-theme' : 'dark-theme';
        this.renderer.removeClass(document.body, removeClass);
        this.renderer.addClass(document.body, addClass);
        this.currentTheme.next(addClass);
    }
    initializeThemeWatcher() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            this.toggleDarkMode(this._prefersDarkMode);
        });
    }
    get _prefersDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(i0.ɵɵinject(i0.RendererFactory2)); };
ThemeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i0.RendererFactory2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvdGhlbWUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQStCLE1BQU0sZUFBZSxDQUFDOztBQU94RSxNQUFNLE9BQU8sWUFBWTtJQUl2QixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZ0RCxpQkFBWSxHQUFtQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBR2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQWU7UUFDNUIsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUMxRCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2pGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBWSxnQkFBZ0I7UUFDMUIsT0FBTyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDeEYsQ0FBQzs7d0VBekJVLFlBQVk7a0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyRmFjdG9yeTIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBUaGVtZSA9ICdkYXJrLXRoZW1lJyB8ICdsaWdodC10aGVtZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIGN1cnJlbnRUaGVtZTogU3ViamVjdDxUaGVtZT4gPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLl9yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgdGhpcy50b2dnbGVEYXJrTW9kZSh0aGlzLl9wcmVmZXJzRGFya01vZGUpO1xuICB9XG5cbiAgdG9nZ2xlRGFya01vZGUoaXNEYXJrOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgcmVtb3ZlQ2xhc3MgPSBpc0RhcmsgPyAnbGlnaHQtdGhlbWUnIDogJ2RhcmstdGhlbWUnO1xuICAgIGNvbnN0IGFkZENsYXNzID0gIWlzRGFyayA/ICdsaWdodC10aGVtZScgOiAnZGFyay10aGVtZSc7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCByZW1vdmVDbGFzcyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBhZGRDbGFzcyk7XG4gICAgdGhpcy5jdXJyZW50VGhlbWUubmV4dChhZGRDbGFzcyk7XG4gIH1cblxuICBpbml0aWFsaXplVGhlbWVXYXRjaGVyKCk6IHZvaWQge1xuICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlRGFya01vZGUodGhpcy5fcHJlZmVyc0RhcmtNb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9wcmVmZXJzRGFya01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgfVxufVxuIl19