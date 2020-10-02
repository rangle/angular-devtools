import { getDirectiveName } from '../highlighter';
import { DirectiveForestHooks } from './hooks';
import { LifecycleProfile } from 'protocol';

const markName = (s: string, method: Method) => `🅰️ ${s}#${method}`;

const supportsPerformance = globalThis.performance && typeof globalThis.performance.getEntriesByName === 'function';

type Method = keyof LifecycleProfile | 'changeDetection';

const recordMark = (s: string, method: Method) => {
  if (supportsPerformance) {
    performance.mark(`${markName(s, method)}_start`);
  }
};

const endMark = (nodeName: string, method: Method) => {
  if (supportsPerformance) {
    const name = markName(nodeName, method);
    const start = `${name}_start`;
    const end = `${name}_end`;
    if (performance.getEntriesByName(start).length > 0) {
      performance.mark(end);
      performance.measure(name, start, end);
    }
    performance.clearMarks(start);
    performance.clearMarks(end);
    performance.clearMeasures(name);
  }
};

let timingAPIFlag = false;

export const enableTimingAPI = () => (timingAPIFlag = true);
export const disableTimingAPI = () => (timingAPIFlag = false);

const timingAPIEnabled = () => timingAPIFlag;

export let directiveForestHooks: DirectiveForestHooks;
export const initializeOrGetDirectiveForestHooks = () => {
  if (directiveForestHooks) {
    return directiveForestHooks;
  }
  directiveForestHooks = new DirectiveForestHooks({
    onChangeDetectionStart(component: any): void {
      if (!timingAPIEnabled()) {
        return;
      }
      recordMark(getDirectiveName(component), 'changeDetection');
    },
    onChangeDetectionEnd(component: any): void {
      if (!timingAPIEnabled()) {
        return;
      }
      endMark(getDirectiveName(component), 'changeDetection');
    },
    onLifecycleHookStart(component: any, lifecyle: keyof LifecycleProfile): void {
      if (!timingAPIEnabled()) {
        return;
      }
      recordMark(getDirectiveName(component), lifecyle);
    },
    onLifecycleHookEnd(component: any, lifecyle: keyof LifecycleProfile): void {
      if (!timingAPIEnabled()) {
        return;
      }
      endMark(getDirectiveName(component), lifecyle);
    },
  });
  directiveForestHooks.initialize();
  return directiveForestHooks;
};
