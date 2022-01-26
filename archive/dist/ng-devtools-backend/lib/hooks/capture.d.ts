import { ProfilerFrame } from 'protocol';
export declare const start: (onFrame: (frame: ProfilerFrame) => void) => void;
export declare const stop: () => ProfilerFrame;
