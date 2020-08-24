import { RecordFormatter } from '../record-formatter';
import { ElementProfile, ProfilerFrame } from 'protocol';

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
  formatFrame(frame: ProfilerFrame, showChangeDetection?: boolean): FlamegraphNode {
    const result: FlamegraphNode = {
      value: 0,
      label: ROOT_LEVEL_ELEMENT_LABEL,
      children: [],
      color: '#4db6ac',
      instances: 1,
      changeDetected: false,
      original: {
        children: [],
        directives: [],
      },
    };

    this.addFrame(result.children, frame.directives, showChangeDetection);
    return result;
  }

  addFrame(nodes: FlamegraphNode[], elements: ElementProfile[], showChangeDetection?: boolean): number {
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
        node.color = changeDetected ? CHANGE_DETECTION_COLOR : NO_CHANGE_DETECTION_COLOR;
      } else {
        node.color = getNodeColor(node.value);
      }
      timeSpent += this.addFrame(node.children, element.children, showChangeDetection);
      timeSpent += node.value;
      nodes.push(node);
    });
    return timeSpent;
  }
}

const CHANGE_DETECTION_COLOR = '#4db675';
const NO_CHANGE_DETECTION_COLOR = 'transparent';

const getNodeColor = (value: any) => {
    switch (false) {
      case (value > 0):
        return '#E6EE9C'; // green
      case (value > .01):
        return '#FFE082'; // yellow
      case (value > .05):
        return '#FFCC80'; // orange
      case (value > .1):
        return '#EF9A9A'; // red
      default:
        return '#B0BEC5';
    }
};

const didRunChangeDetection = (profile: ElementProfile) => {
  const components = profile.directives.filter((d) => d.isComponent);
  if (!components.length) {
    return false;
  }
  return components.some((c) => c.changeDetection !== undefined);
};
