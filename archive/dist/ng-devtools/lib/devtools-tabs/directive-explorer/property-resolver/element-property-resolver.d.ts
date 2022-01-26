import { DirectivesProperties, ComponentExplorerViewProperties, Descriptor, MessageBus, Events } from 'protocol';
import { IndexedNode } from '../directive-forest/index-forest';
import { DirectivePropertyResolver } from './directive-property-resolver';
import * as i0 from "@angular/core";
export interface FlatNode {
    expandable: boolean;
    prop: Property;
    level: number;
}
export interface Property {
    name: string;
    descriptor: Descriptor;
    parent: Property | null;
}
export declare class ElementPropertyResolver {
    private _messageBus;
    private _directivePropertiesController;
    constructor(_messageBus: MessageBus<Events>);
    clearProperties(): void;
    setProperties(indexedNode: IndexedNode, data: DirectivesProperties): void;
    private _flushDeletedProperties;
    getExpandedProperties(): ComponentExplorerViewProperties;
    getDirectiveController(directive: string): DirectivePropertyResolver | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElementPropertyResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ElementPropertyResolver>;
}
