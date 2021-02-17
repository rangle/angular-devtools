import { ComponentPortal, DomPortal, DomPortalOutlet, Portal, TemplatePortal } from '@angular/cdk/portal';
import { ApplicationRef, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, Injector, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ZippyComponent } from './zippy/zippy.component';

@Component({
  templateUrl: './demo-app.component.html',
  styleUrls: ['./demo-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoAppComponent {
  @ViewChild(ZippyComponent) zippy: ZippyComponent;
  @ViewChild('elementReference') elementRef: ElementRef;

  getTitle(): '► Click to expand' | '▼ Click to collapse' {
    if (!this.zippy || !this.zippy.visible) {
      return '► Click to expand';
    }
    return '▼ Click to collapse';
  }

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<ComponentPortalExample>;
  templatePortal: TemplatePortal<any>;
  domPortal: DomPortal<any>;

  constructor(private _appRef: ApplicationRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    public _elementRef: ElementRef,
    private _injector: Injector,
    private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    // const element = document.querySelector('#dynamic')!;
    // const portalHost = new DomPortalOutlet(
    //   element, this._componentFactoryResolver, this._appRef, this._injector);
    // const examplePortal = new ComponentPortal(ComponentPortalExample, this._viewContainerRef);
    // setTimeout(() => portalHost.attach(examplePortal));
  }
}

@Component({
  selector: 'component-portal-example',
  template: `
    <app-heavy></app-heavy>
  `
})
export class ComponentPortalExample { }
