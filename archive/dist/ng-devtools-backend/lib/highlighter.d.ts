import { Type } from '@angular/core';
export declare const DEV_TOOLS_HIGHLIGHT_NODE_ID = "____ngDevToolsHighlight";
export declare const findComponentAndHost: (el: Node | undefined) => {
    component: any;
    host: HTMLElement | null;
};
export declare const getDirectiveName: (dir: Type<unknown> | undefined | null) => string;
export declare const highlight: (el: HTMLElement) => void;
export declare function unHighlight(): void;
export declare function inDoc(node: any): boolean;
export declare function getComponentRect(el: Node): DOMRect | ClientRect | undefined;
