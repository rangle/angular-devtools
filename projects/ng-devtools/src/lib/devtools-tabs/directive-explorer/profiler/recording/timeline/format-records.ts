import {
  AppRecord,
  DirectiveEventType,
  DirectiveRecord,
  LifeCycleEventType,
  ComponentRecord,
  ComponentEventType,
} from 'protocol';

export interface AppEntry {
  app: FlamegraphNode[];
  timeSpent: number;
  source: string;
}

export interface TimelineView {
  aggregated: AppEntry;
  timeline: AppEntry[];
}

export interface FlamegraphNode {
  value: number;
  children: FlamegraphNode[];
  label: string;
  duration: number;
  totalEvents: number;
  instances: number;
}

const processFlamegraphRecord = (record: DirectiveRecord | ComponentRecord, result: AppEntry) => {
  if (record.recordType !== 'component') {
    return;
  }
  result.timeSpent += record.duration;
  let current = result.app;
  for (let i = 0; i < record.position.length - 1; i++) {
    const position = record.position[i];
    if (!current[position]) {
      console.error(`Couldn't insert`, record, 'because parent does not exist', result.app);
      return;
    }
    current = current[position].children;
  }
  for (const node of current) {
    if (node && node.label === record.component) {
      node.value += record.duration;
      node.duration += record.duration;
      node.totalEvents++;
      if (record.event === ComponentEventType.Create) {
        node.instances++;
      }
      return;
    }
  }
  current[record.position[record.position.length - 1]] = {
    value: record.duration,
    label: record.component,
    duration: record.duration,
    totalEvents: 1,
    instances: 1,
    children: [],
  };
};

export const formatRecords = <T>(records: AppRecord[]): TimelineView => {
  const result: TimelineView = {
    aggregated: {
      app: [],
      timeSpent: 0,
      source: '',
    },
    timeline: [
      {
        app: [],
        timeSpent: 0,
        source: '',
      },
    ],
  };
  let currentSnapshot = -1;
  for (const record of records) {
    if (record.recordType === 'lifecycle' && record.event === LifeCycleEventType.ChangeDetectionStart) {
      currentSnapshot++;
      result.timeline.push({
        app: [],
        timeSpent: 0,
        source: record.source,
      });
    }
    if (record.recordType === 'component') {
      processFlamegraphRecord(record, result.aggregated);
      processFlamegraphRecord(record, result.timeline[result.timeline.length - 1]);
    }
  }
  return result;
};

export const formatFlamegraphRecords = (records: AppRecord[]): TimelineView => {
  return formatRecords(records);
};
