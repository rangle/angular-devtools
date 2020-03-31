import { ElementProfile, DirectiveProfile, ProfilerFrame } from 'protocol';

export interface TimelineView<T> {
  timeline: AppEntry<T>[];
}

export interface AppEntry<T> {
  app: T[];
  timeSpent: number;
  source: string;
}

export interface GraphNode {
  toolTip: string;
  style: any;
}

export abstract class RecordFormatter<T> {
  abstract formatFrame(frame: ProfilerFrame): T;
  abstract addFrame(nodes: T | T[], elements: ElementProfile[]): number | void;

  getLabel(element: ElementProfile): string {
    const name = element.directives
      .filter((d) => d.isComponent)
      .map((c) => c.name)
      .join(', ');
    const attributes = [...new Set(element.directives.filter((d) => !d.isComponent).map((d) => d.name))].join(', ');
    return attributes === '' ? name : `${name}[${attributes}]`;
  }

  getValue(element: ElementProfile): number {
    let result = 0;
    element.directives.forEach((dir) => {
      result += this.getDirectiveValue(dir);
    });
    return result;
  }

  getDirectiveValue(directive: DirectiveProfile): number {
    let result = 0;
    let current = directive.changeDetection;
    if (current === undefined) {
      current = 0;
    }
    result += current;
    Object.keys(directive.lifecycle).forEach((key) => {
      const value = parseFloat(directive.lifecycle[key]);
      if (!isNaN(value)) {
        result += value;
      }
    });
    return result;
  }
}
