import { RecordFormatter } from '../record-formatter';
import { ElementProfile, ProfilerFrame } from 'protocol';
import { Theme } from 'projects/ng-devtools/src/lib/theme-service';

export interface FlamegraphNode {
  value: number;
  color?: string;
  children: FlamegraphNode[];
  label: string;
  instances: number;
  original: ElementProfile;
  changeDetected: boolean;
}

export const ROOT_LEVEL_ELEMENT_LABEL = 'Entire application';

export class FlamegraphFormatter extends RecordFormatter<FlamegraphNode> {
  formatFrame(frame: ProfilerFrame, showChangeDetection?: boolean, theme?: Theme): FlamegraphNode {
    const result: FlamegraphNode = {
      value: 0,
      label: ROOT_LEVEL_ELEMENT_LABEL,
      children: [],
      instances: 1,
      changeDetected: false,
      original: {
        children: [],
        directives: [],
      },
    };

    if (showChangeDetection) {
      result.color = theme === 'dark-theme' ? CHANGE_DETECTION_COLOR_DARK : CHANGE_DETECTION_COLOR_LIGHT;
    }

    this.addFrame(result.children, frame.directives, showChangeDetection, theme);
    return result;
  }

  addFrame(nodes: FlamegraphNode[], elements: ElementProfile[], showChangeDetection?: boolean, theme?: Theme): number {
    let timeSpent = 0;
    elements.forEach((element) => {
      // Possibly undefined because of
      // the insertion on the backend.
      if (!element) {
        console.error('Unable to insert undefined element');
        return;
      }
      const changeDetected = didRunChangeDetection(element);
      const node: FlamegraphNode = {
        value: super.getValue(element),
        label: super.getLabel(element),
        children: [],
        instances: 1,
        original: element,
        changeDetected,
      };
      if (showChangeDetection) {
        const CHANGE_DETECTION_COLOR =
          theme === 'dark-theme' ? CHANGE_DETECTION_COLOR_DARK : CHANGE_DETECTION_COLOR_LIGHT;
        node.color = changeDetected ? CHANGE_DETECTION_COLOR : NO_CHANGE_DETECTION_COLOR;
      }
      timeSpent += this.addFrame(node.children, element.children, showChangeDetection, theme);
      timeSpent += node.value;
      nodes.push(node);
    });
    return timeSpent;
  }
}

const CHANGE_DETECTION_COLOR_LIGHT = '#5cadd3';
const CHANGE_DETECTION_COLOR_DARK = '#073d69';
const NO_CHANGE_DETECTION_COLOR = 'transparent';

const didRunChangeDetection = (profile: ElementProfile) => {
  const components = profile.directives.filter((d) => d.isComponent);
  if (!components.length) {
    return false;
  }
  return components.some((c) => c.changeDetection !== undefined);
};
