import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ngTheme]',
})
export class ThemeDirective {
  @Input() set ngTheme(theme: 'dark' | 'light') {
    if (theme === 'dark') {
      this._setTheme(darkMode);
    } else {
      this._setTheme(lightMode);
    }
  }

  private _setTheme(theme: { [name: string]: string }): void {
    Object.keys(theme).forEach((name) => {
      document.documentElement.style.setProperty(name, theme[name]);
    });
  }
}

const lightMode = {
  /* General */
  '--ngd-background': '#fff',
  '--ngd-color': '#111111',
  '--ngd-header-background': '#fff',

  /* Directive explorer */
  '--ngd-directive-explorer-background': '#fff',
  '--ngd-directive-label-color': 'rgba(0 0 0 0.4)',
  '--ngd-component-label-color': '#111',
  '--ngd-component-label-hover-background': '#d4e7ff',
  '--ngd-component-label-matched-color': '#fff',
  '--ngd-component-label-matched-hover-background': '#8463be',
  '--ngd-component-label-matched-selected-background': '#6f56bb',
  '--ngd-component-label-matched-selected-color': '#fcd736',
  '--ngd-component-label-matched-highlighted-background': '#92bdff',
  '--ngd-component-new-label-animation-start': '#fff',
  '--ngd-component-new-label-animation-mid': '#fcd736',
  '--ngd-component-new-label-animation-end': '#fff',
  '--ngd-component-filter-input-background': 'rgba(0, 0, 0, 0.003)',
  '--ngd-component-label-matched-background': '#b298e4',
  '--ngd-element-label-color': 'blue',
  '--ngd-version-color': '#5128a5',
  '--ngd-breadcrumbs-bar-background': '#ddd',

  /* Properties */
  '--ngd-property-explorer-background': '#fff',
  '--ngd-property-name-color': '#b82519',
  '--ngd-property-name-disabled-color': '#333',
  '--ngd-property-arrow-color': '#6e6e6e',
  '--ngd-property-preview-arrow-background': '#4da1ff',
  '--ngd-property-preview-arrow-color': '#fff',
  '--ngd-property-view-header-background': '#eee',
  '--ngd-property-view-header-border-top-color': '#eee',
  '--ngd-property-view-header-border-bottom-color': '#eee',
  '--ngd-property-view-header-color': 'hsla(0, 0%, 32%, 1)',
  '--ngd-component-metadata-hover-background': '#eee',
  '--ngd-component-metadata-active-background': '#bcbcbc',

  /* Profiler */
  '--ngd-profiler-record-button-background': '#6e6e6e',
  '--ngd-profiler-record-button-recording-background': '#c7291c',
  '--ngd-profiler-menu-background': '#f3f3f3',
  '--ngd-profiler-menu-border-bottom-color': '#d0d0d0',
  '--ngd-profiler-version-color': '#388e3c',
  '--ngd-profiler-import-error-color': '#d32f2f',
  '--ngd-profiler-recording-modal-background': 'rgba(0, 0, 0, 0.5)',
};

const darkMode = {
  /* General */
  '--ngd-background': '#2F3440',
  '--ngd-color': '#111111',
  '--ngd-header-background': '#2F3440',

  /* Directive explorer */
  '--ngd-directive-explorer-background': '#2F3440',
  '--ngd-directive-label-color': 'rgba(0 0 0 0.4)',
  '--ngd-component-label-color': '#111',
  '--ngd-component-label-hover-background': '#d4e7ff',
  '--ngd-component-label-matched-color': '#fff',
  '--ngd-component-label-matched-hover-background': '#8463be',
  '--ngd-component-label-matched-selected-background': '#6f56bb',
  '--ngd-component-label-matched-selected-color': '#fcd736',
  '--ngd-component-label-matched-highlighted-background': '#92bdff',
  '--ngd-component-new-label-animation-start': '#fff',
  '--ngd-component-new-label-animation-mid': '#fcd736',
  '--ngd-component-new-label-animation-end': '#fff',
  '--ngd-component-filter-input-background': 'rgba(0, 0, 0, 0.003)',
  '--ngd-component-label-matched-background': '#b298e4',
  '--ngd-element-label-color': 'blue',
  '--ngd-version-color': '#5128a5',
  '--ngd-breadcrumbs-bar-background': '#ddd',

  /* Properties */
  '--ngd-property-explorer-background': '#2F3440',
  '--ngd-property-name-color': '#b82519',
  '--ngd-property-name-disabled-color': '#333',
  '--ngd-property-arrow-color': '#6e6e6e',
  '--ngd-property-preview-arrow-background': '#4da1ff',
  '--ngd-property-preview-arrow-color': '#fff',
  '--ngd-property-view-header-background': '#eee',
  '--ngd-property-view-header-border-top-color': '#eee',
  '--ngd-property-view-header-border-bottom-color': '#eee',
  '--ngd-property-view-header-color': 'hsla(0, 0%, 32%, 1)',
  '--ngd-component-metadata-hover-background': '#eee',
  '--ngd-component-metadata-active-background': '#bcbcbc',

  /* Profiler */
  '--ngd-profiler-record-button-background': '#6e6e6e',
  '--ngd-profiler-record-button-recording-background': '#c7291c',
  '--ngd-profiler-menu-background': '#f3f3f3',
  '--ngd-profiler-menu-border-bottom-color': '#d0d0d0',
  '--ngd-profiler-version-color': '#388e3c',
  '--ngd-profiler-import-error-color': '#d32f2f',
  '--ngd-profiler-recording-modal-background': 'rgba(0, 0, 0, 0.5)',
};
