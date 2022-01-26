import { EventEmitter } from '@angular/core';
import { DirectivePropertyResolver, DirectiveTreeData } from '../../../../property-resolver/directive-property-resolver';
import { FlatNode } from '../../../../property-resolver/element-property-resolver';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DirectivePosition } from 'protocol';
import * as i0 from "@angular/core";
export declare class PropertyViewBodyComponent {
    controller: DirectivePropertyResolver;
    directiveInputControls: DirectiveTreeData;
    directiveOutputControls: DirectiveTreeData;
    directiveStateControls: DirectiveTreeData;
    inspect: EventEmitter<{
        node: FlatNode;
        directivePosition: DirectivePosition;
    }>;
    categoryOrder: number[];
    get panels(): {
        title: string;
        hidden: boolean;
        controls: DirectiveTreeData;
    }[];
    get controlsLoaded(): boolean;
    updateValue({ node, newValue }: {
        node: FlatNode;
        newValue: any;
    }): void;
    drop(event: CdkDragDrop<any, any>): void;
    handleInspect(node: FlatNode): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PropertyViewBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PropertyViewBodyComponent, "ng-property-view-body", never, { "controller": "controller"; "directiveInputControls": "directiveInputControls"; "directiveOutputControls": "directiveOutputControls"; "directiveStateControls": "directiveStateControls"; }, { "inspect": "inspect"; }, never, never>;
}
