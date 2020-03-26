import { Directive, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme } from 'protocol';

@Directive({
  selector: '[ngTheme]',
})
export class ThemeDirective implements OnInit {
  constructor(private _themeService: ThemeService, private _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this._themeService.onThemeChange(({ newTheme, oldTheme }: { newTheme: Theme; oldTheme: Theme }) => {
      if (oldTheme !== undefined) {
        this.disableTheme(oldTheme);
      }
      this.enableTheme(newTheme);
    });
  }

  disableTheme(theme: Theme): void {
    this._elementRef.nativeElement.classList.remove(this._themeService.getCssClassByTheme(theme));
  }

  enableTheme(theme: Theme): void {
    this._elementRef.nativeElement.classList.add(this._themeService.getCssClassByTheme(theme));
  }
}
