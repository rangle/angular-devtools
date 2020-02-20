import { ProfilerFrame, ElementProfile } from 'protocol';

export interface TimelineView {
  timeline: AppEntry[];
}

export interface AppEntry {
  app: FlamegraphNode[];
  timeSpent: number;
  source: string;
}

export interface FlamegraphNode {
  value: number;
  children: FlamegraphNode[];
  label: string;
  original: ElementProfile;
}

const getLabel = (element: ElementProfile) => {
  const name = (element.directives.filter(d => d.isComponent).pop() || { name: '' }).name;
  const attributes = element.directives
    .filter(d => !d.isComponent)
    .map(d => d.name)
    .join(', ');
  return attributes === '' ? name : `${name}[${attributes}]`;
};

const addFrame = (nodes: FlamegraphNode[], elements: ElementProfile[]): number => {
  let timeSpent = 0;
  elements.forEach(element => {
    // Possibly undefined because of
    // the insertion on the backend.
    if (!element) {
      return;
    }
    const node: FlamegraphNode = {
      value: element.directives.reduce((a, c) => a + c.lifecycle + c.changeDetection, 0),
      label: getLabel(element),
      children: [],
      original: element,
    };
    timeSpent += addFrame(node.children, element.children);
    timeSpent += node.value;
    nodes.push(node);
  });
  return timeSpent;
};

const insertTimelineRecord = (result: AppEntry[], record: ProfilerFrame) => {
  const entry: AppEntry = {
    app: [],
    timeSpent: 0,
    source: record.source,
  };
  const timeSpent = addFrame(entry.app, record.directives);
  entry.timeSpent = timeSpent;
  result.push(entry);
};

export const formatFlamegraphRecords = (records: ProfilerFrame[]): TimelineView => {
  const result: TimelineView = {
    timeline: [],
  };
  records.forEach(record => {
    insertTimelineRecord(result.timeline, record);
  });
  return result;
};
