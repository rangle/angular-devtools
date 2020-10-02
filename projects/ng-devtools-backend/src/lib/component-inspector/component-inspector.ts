import { unHighlight, highlight, findComponentAndHost } from '../highlighter';
import { Type } from '@angular/core';
import { buildDirectiveForest, ComponentTreeNode, findNodeInForest } from '../component-tree';
import { ElementPosition } from 'protocol';
import { initializeOrGetDirectiveForestHooks } from '../hooks';

export interface ComponentInspectorOptions {
  onComponentEnter: (id: number) => void;
  onComponentSelect: (id: number) => void;
  onComponentLeave: () => void;
}

export class ComponentInspector {
  private _selectedComponent: { component: Type<unknown>; host: HTMLElement | null };
  private readonly _onComponentEnter;
  private readonly _onComponentSelect;
  private readonly _onComponentLeave;

  constructor(
    componentOptions: ComponentInspectorOptions = {
      onComponentEnter: () => {},
      onComponentLeave: () => {},
      onComponentSelect: () => {},
    }
  ) {
    this.bindMethods();
    this._onComponentEnter = componentOptions.onComponentEnter;
    this._onComponentSelect = componentOptions.onComponentSelect;
    this._onComponentLeave = componentOptions.onComponentLeave;
  }

  startInspecting(): void {
    window.addEventListener('mouseover', this.elementMouseOver, true);
    window.addEventListener('click', this.elementClick, true);
    window.addEventListener('mouseout', this.cancelEvent, true);
  }

  stopInspecting(): void {
    window.removeEventListener('mouseover', this.elementMouseOver, true);
    window.removeEventListener('click', this.elementClick, true);
    window.removeEventListener('mouseout', this.cancelEvent, true);
  }

  elementClick(e: MouseEvent): void {
    e.stopImmediatePropagation();
    e.preventDefault();

    if (this._selectedComponent.component && this._selectedComponent.host) {
      this._onComponentSelect(initializeOrGetDirectiveForestHooks().getDirectiveId(this._selectedComponent.component));
    }
  }

  elementMouseOver(e: MouseEvent): void {
    this.cancelEvent(e);

    const el = e.target as HTMLElement;
    if (el) {
      this._selectedComponent = findComponentAndHost(el);
    }

    unHighlight();
    if (this._selectedComponent.component && this._selectedComponent.host) {
      highlight(this._selectedComponent.host);
      this._onComponentEnter(initializeOrGetDirectiveForestHooks().getDirectiveId(this._selectedComponent.component));
    }
  }

  cancelEvent(e: MouseEvent): void {
    e.stopImmediatePropagation();
    e.preventDefault();
    this._onComponentLeave();
  }

  bindMethods(): void {
    this.startInspecting = this.startInspecting.bind(this);
    this.stopInspecting = this.stopInspecting.bind(this);
    this.elementMouseOver = this.elementMouseOver.bind(this);
    this.elementClick = this.elementClick.bind(this);
    this.cancelEvent = this.cancelEvent.bind(this);
  }

  highlightByPosition(position: ElementPosition): void {
    const forest: ComponentTreeNode[] = buildDirectiveForest();
    const elementToHighlight: HTMLElement | null = findNodeInForest(position, forest);
    if (elementToHighlight) {
      highlight(elementToHighlight);
    }
  }
}
