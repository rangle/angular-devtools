import { ViewEncapsulation } from '@angular/core';
export interface DirectiveType {
    name: string;
    id: number;
}
export interface ComponentType {
    name: string;
    isElement: boolean;
    id: number;
}
export interface DevToolsNode<DirType = DirectiveType, CmpType = ComponentType> {
    element: string;
    directives: DirType[];
    component: CmpType | null;
    children: DevToolsNode<DirType, CmpType>[];
    nativeElement?: Node;
}
export declare enum PropType {
    Number = 0,
    String = 1,
    Null = 2,
    Undefined = 3,
    Symbol = 4,
    HTMLNode = 5,
    Boolean = 6,
    BigInt = 7,
    Function = 8,
    Object = 9,
    Date = 10,
    Array = 11,
    Unknown = 12
}
export interface Descriptor {
    expandable: boolean;
    value?: any;
    editable: boolean;
    type: PropType;
    preview: string;
}
export interface DirectivesProperties {
    [name: string]: Properties;
}
export interface DirectiveMetadata {
    inputs: {
        [name: string]: string;
    };
    outputs: {
        [name: string]: string;
    };
    encapsulation: ViewEncapsulation;
    onPush: boolean;
}
export interface Properties {
    props: {
        [name: string]: Descriptor;
    };
    metadata?: DirectiveMetadata;
}
export declare type ElementPosition = number[];
export interface DirectivePosition {
    element: ElementPosition;
    directive?: number;
}
export interface NestedProp {
    name: string | number;
    children: NestedProp[];
}
export interface ComponentExplorerViewProperties {
    [directive: string]: NestedProp[];
}
export declare enum PropertyQueryTypes {
    All = 0,
    Specified = 1
}
export interface AllPropertiesQuery {
    type: PropertyQueryTypes.All;
}
export interface SelectedPropertiesQuery {
    type: PropertyQueryTypes.Specified;
    properties: ComponentExplorerViewProperties;
}
export declare type PropertyQuery = AllPropertiesQuery | SelectedPropertiesQuery;
export interface ComponentExplorerViewQuery {
    selectedElement: ElementPosition;
    propertyQuery: PropertyQuery;
}
export interface ComponentExplorerView {
    forest: DevToolsNode[];
    properties?: DirectivesProperties;
}
export interface LifecycleProfile {
    ngOnInit?: number;
    ngOnDestroy?: number;
    ngOnChanges?: number;
    ngDoCheck?: number;
    ngAfterContentInit?: number;
    ngAfterContentChecked?: number;
    ngAfterViewInit?: number;
    ngAfterViewChecked?: number;
}
export interface DirectiveProfile {
    name: string;
    isElement: boolean;
    isComponent: boolean;
    lifecycle: LifecycleProfile;
    changeDetection?: number;
}
export interface ElementProfile {
    directives: DirectiveProfile[];
    children: ElementProfile[];
}
export interface ProfilerFrame {
    source: string;
    duration: number;
    directives: ElementProfile[];
}
export interface UpdatedStateData {
    directiveId: DirectivePosition;
    keyPath: string[];
    newValue: any;
}
export interface Route {
    name: string;
    hash: string | null;
    path: string;
    specificity: string | null;
    handler: string;
    data: any;
    children?: Array<Route>;
    isAux: boolean;
}
export declare type Topic = keyof Events;
export interface Events {
    handshake: () => void;
    shutdown: () => void;
    queryNgAvailability: () => void;
    ngAvailability: (config: {
        version: string | undefined | boolean;
        devMode: boolean;
        ivy: boolean;
    }) => void;
    inspectorStart: () => void;
    inspectorEnd: () => void;
    getNestedProperties: (position: DirectivePosition, path: string[]) => void;
    nestedProperties: (position: DirectivePosition, data: Properties, path: string[]) => void;
    setSelectedComponent: (position: ElementPosition) => void;
    getRoutes: () => void;
    updateRouterTree: (routes: Route[]) => void;
    componentTreeDirty: () => void;
    getLatestComponentExplorerView: (query?: ComponentExplorerViewQuery) => void;
    latestComponentExplorerView: (view: ComponentExplorerView) => void;
    updateState: (value: UpdatedStateData) => void;
    startProfiling: () => void;
    stopProfiling: () => void;
    sendProfilerChunk: (results: ProfilerFrame) => void;
    profilerResults: (results: ProfilerFrame) => void;
    createHighlightOverlay: (position: ElementPosition) => void;
    removeHighlightOverlay: () => void;
    highlightComponent: (id: number) => void;
    selectComponent: (id: number) => void;
    removeComponentHighlight: () => void;
    enableTimingAPI: () => void;
    disableTimingAPI: () => void;
}