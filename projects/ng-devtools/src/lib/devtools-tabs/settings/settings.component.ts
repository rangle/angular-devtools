import { Component } from '@angular/core';
import { Theme } from 'protocol';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'ng-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  private _currentTheme: Theme = this._themeService.theme;

  constructor(private _themeService: ThemeService) {}

  toggleTheme(): void {
    this._currentTheme = this._currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    this._themeService.setMode(this._currentTheme);
  }
}
