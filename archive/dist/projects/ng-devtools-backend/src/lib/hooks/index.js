import { getDirectiveName } from '../highlighter';
import { DirectiveForestHooks } from './hooks';
const markName = (s, method) => `🅰️ ${s}#${method}`;
const supportsPerformance = globalThis.performance && typeof globalThis.performance.getEntriesByName === 'function';
const recordMark = (s, method) => {
    if (supportsPerformance) {
        performance.mark(`${markName(s, method)}_start`);
    }
};
const endMark = (nodeName, method) => {
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
export let directiveForestHooks;
export const initializeOrGetDirectiveForestHooks = () => {
    if (directiveForestHooks) {
        return directiveForestHooks;
    }
    directiveForestHooks = new DirectiveForestHooks({
        onChangeDetectionStart(component) {
            if (!timingAPIEnabled()) {
                return;
            }
            recordMark(getDirectiveName(component), 'changeDetection');
        },
        onChangeDetectionEnd(component) {
            if (!timingAPIEnabled()) {
                return;
            }
            endMark(getDirectiveName(component), 'changeDetection');
        },
        onLifecycleHookStart(component, lifecyle) {
            if (!timingAPIEnabled()) {
                return;
            }
            recordMark(getDirectiveName(component), lifecyle);
        },
        onLifecycleHookEnd(component, lifecyle) {
            if (!timingAPIEnabled()) {
                return;
            }
            endMark(getDirectiveName(component), lifecyle);
        },
    });
    directiveForestHooks.initialize();
    return directiveForestHooks;
};
//# sourceMappingURL=index.js.map