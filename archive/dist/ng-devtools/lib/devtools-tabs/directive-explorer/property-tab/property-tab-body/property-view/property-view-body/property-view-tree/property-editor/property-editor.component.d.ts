import { AfterViewChecked, ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
declare type EditorType = string | number | boolean;
declare type EditorResult = EditorType | Array<EditorType>;
declare enum PropertyEditorState {
    Read = 0,
    Write = 1
}
export declare class PropertyEditorComponent implements AfterViewChecked, OnInit {
    private _cd;
    private _elementRef;
    key: string;
    initialValue: EditorResult;
    updateValue: EventEmitter<EditorResult>;
    readState: PropertyEditorState;
    writeState: PropertyEditorState;
    valueToSubmit: EditorResult;
    currentPropertyState: PropertyEditorState;
    constructor(_cd: ChangeDetectorRef, _elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    accept(): void;
    reject(): void;
    onClick(): void;
    onBlur(): void;
    get editor(): HTMLInputElement;
    private _transition;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertyEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertyEditorComponent, "ng-property-editor", never, { "key": "key"; "initialValue": "initialValue"; }, { "updateValue": "updateValue"; }, never, never>;
}
export {};
