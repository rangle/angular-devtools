import { OnInit, OnDestroy } from '@angular/core';
import { MessageBus, Events, ProfilerFrame } from 'protocol';
import { FileApiService } from '../../file-api-service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
declare type State = 'idle' | 'recording' | 'visualizing';
export declare class ProfilerComponent implements OnInit, OnDestroy {
    private _fileApiService;
    private _messageBus;
    dialog: MatDialog;
    state: State;
    stream: Subject<ProfilerFrame[]>;
    private _fileUploadSubscription;
    private _buffer;
    constructor(_fileApiService: FileApiService, _messageBus: MessageBus<Events>, dialog: MatDialog);
    startRecording(): void;
    stopRecording(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    exportProfilerResults(): void;
    importProfilerResults(event: InputEvent): void;
    discardRecording(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfilerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfilerComponent, "ng-profiler", never, {}, {}, never, never>;
}
export {};
