/// <reference types="resize-observer-browser" />
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Events, MessageBus, Route } from 'protocol';
import { DirectiveExplorerComponent } from './directive-explorer/directive-explorer.component';
import { ApplicationEnvironment } from '../application-environment';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TabUpdate } from './tab-update';
import { Theme, ThemeService } from '../theme-service';
import { Subscription } from 'rxjs';
import { MatTabNav } from '@angular/material/tabs';

@Component({
  selector: 'ng-devtools-tabs',
  templateUrl: './devtools-tabs.component.html',
  styleUrls: ['./devtools-tabs.component.scss'],
})
export class DevToolsTabsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() angularVersion: string | undefined = undefined;
  @ViewChild(DirectiveExplorerComponent) directiveExplorer: DirectiveExplorerComponent;
  @ViewChild('navBar', { static: true }) navbar: MatTabNav;

  activeTab: 'Components' | 'Profiler' | 'Router Tree' = 'Components';

  inspectorRunning = false;
  routerTreeEnabled = false;

  private _currentThemeSubscription: Subscription;
  currentTheme: Theme;

  routes: Route[] = [];

  constructor(
    public tabUpdate: TabUpdate,
    public themeService: ThemeService,
    private _messageBus: MessageBus<Events>,
    private _applicationEnvironment: ApplicationEnvironment
  ) {}

  ngOnInit(): void {
    this._currentThemeSubscription = this.themeService.currentTheme.subscribe((theme) => (this.currentTheme = theme));

    this._messageBus.on('updateRouterTree', (routes) => {
      this.routes = routes || [];
    });
  }

  get tabs(): string[] {
    const alwaysShown = ['Components', 'Profiler'];
    return this.routes.length === 0 ? alwaysShown : [...alwaysShown, 'Router Tree'];
  }

  ngAfterViewInit(): void {
    this.navbar.disablePagination = true;
  }

  ngOnDestroy(): void {
    this._currentThemeSubscription.unsubscribe();
  }

  get latestSHA(): string {
    return this._applicationEnvironment.environment.process.env.LATEST_SHA;
  }

  changeTab(tab: 'Profiler' | 'Components' | 'Router Tree'): void {
    this.activeTab = tab;
    this.tabUpdate.notify();
    if (tab === 'Router Tree') {
      this._messageBus.emit('getRoutes');
    }
  }

  toggleInspector(): void {
    this.toggleInspectorState();
    this.emitInspectorEvent();
  }

  emitInspectorEvent(): void {
    if (this.inspectorRunning) {
      this._messageBus.emit('inspectorStart');
      this.changeTab('Components');
    } else {
      this._messageBus.emit('inspectorEnd');
      this._messageBus.emit('removeHighlightOverlay');
    }
  }

  toggleInspectorState(): void {
    this.inspectorRunning = !this.inspectorRunning;
  }

  toggleTimingAPI(change: MatSlideToggleChange): void {
    change.checked ? this._messageBus.emit('enableTimingAPI') : this._messageBus.emit('disableTimingAPI');
  }
}
