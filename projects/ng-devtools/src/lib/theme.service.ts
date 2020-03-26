import { Injectable } from '@angular/core';
import { Theme } from 'protocol';
import { BehaviorSubject } from 'rxjs';

export interface ThemeChange {
  oldTheme?: Theme;
  newTheme: Theme;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = new BehaviorSubject<ThemeChange>({ newTheme: Theme.LIGHT });

  private themeToCssClass = {
    [Theme.LIGHT]: 'light',
    [Theme.DARK]: 'dark',
  };

  get theme(): Theme {
    return this._theme.value.newTheme;
  }

  onThemeChange(callback: (themeChange: ThemeChange) => void): void {
    this._theme.subscribe(callback);
  }

  setMode(theme: Theme): void {
    this._theme.next({ newTheme: theme, oldTheme: this.theme });
  }

  getCssClassByTheme(theme: Theme): string {
    return this.themeToCssClass[theme];
  }
}
