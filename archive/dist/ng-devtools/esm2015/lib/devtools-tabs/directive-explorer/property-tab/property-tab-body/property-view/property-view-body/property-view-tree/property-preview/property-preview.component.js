import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropType } from 'protocol';
import * as i0 from "@angular/core";
export class PropertyPreviewComponent {
    constructor() {
        this.inspect = new EventEmitter();
    }
    get isClickableProp() {
        return this.node.prop.descriptor.type === PropType.Function || this.node.prop.descriptor.type === PropType.HTMLNode;
    }
}
PropertyPreviewComponent.ɵfac = function PropertyPreviewComponent_Factory(t) { return new (t || PropertyPreviewComponent)(); };
PropertyPreviewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PropertyPreviewComponent, selectors: [["ng-property-preview"]], inputs: { node: "node" }, outputs: { inspect: "inspect" }, decls: 2, vars: 3, consts: [[1, "value", 3, "click"]], template: function PropertyPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function PropertyPreviewComponent_Template_span_click_0_listener() { return ctx.isClickableProp && ctx.inspect.emit(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("function", ctx.isClickableProp);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.node.prop.descriptor.preview, "\n");
    } }, styles: [".function[_ngcontent-%COMP%]:hover{background:#4da1ff;color:#fff;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PropertyPreviewComponent, [{
        type: Component,
        args: [{
                selector: 'ng-property-preview',
                templateUrl: './property-preview.component.html',
                styleUrls: ['./property-preview.component.scss'],
            }]
    }], null, { node: [{
            type: Input
        }], inspect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlyZWN0aXZlLWV4cGxvcmVyL3Byb3BlcnR5LXRhYi9wcm9wZXJ0eS10YWItYm9keS9wcm9wZXJ0eS12aWV3L3Byb3BlcnR5LXZpZXctYm9keS9wcm9wZXJ0eS12aWV3LXRyZWUvcHJvcGVydHktcHJldmlldy9wcm9wZXJ0eS1wcmV2aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktdGFiL3Byb3BlcnR5LXRhYi1ib2R5L3Byb3BlcnR5LXZpZXcvcHJvcGVydHktdmlldy1ib2R5L3Byb3BlcnR5LXZpZXctdHJlZS9wcm9wZXJ0eS1wcmV2aWV3L3Byb3BlcnR5LXByZXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQVFwQyxNQUFNLE9BQU8sd0JBQXdCO0lBTHJDO1FBT1ksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7S0FLOUM7SUFIQyxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3RILENBQUM7O2dHQU5VLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDVHJDLCtCQUFtRztRQUE1QywwSEFBNEIsa0JBQWMsSUFBQztRQUNoRyxZQUNGO1FBQUEsaUJBQU87O1FBRmEsK0NBQWtDO1FBQ3BELGVBQ0Y7UUFERSxrRUFDRjs7dUZET2Esd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDtnQkFFVSxJQUFJO2tCQUFaLEtBQUs7WUFDSSxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb3BUeXBlIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgRmxhdE5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9wcm9wZXJ0eS1yZXNvbHZlci9lbGVtZW50LXByb3BlcnR5LXJlc29sdmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcHJvcGVydHktcHJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9wZXJ0eS1wcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvcGVydHktcHJldmlldy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVByZXZpZXdDb21wb25lbnQge1xuICBASW5wdXQoKSBub2RlOiBGbGF0Tm9kZTtcbiAgQE91dHB1dCgpIGluc3BlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IGlzQ2xpY2thYmxlUHJvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlLnByb3AuZGVzY3JpcHRvci50eXBlID09PSBQcm9wVHlwZS5GdW5jdGlvbiB8fCB0aGlzLm5vZGUucHJvcC5kZXNjcmlwdG9yLnR5cGUgPT09IFByb3BUeXBlLkhUTUxOb2RlO1xuICB9XG59XG4iLCI8c3BhbiBjbGFzcz1cInZhbHVlXCIgW2NsYXNzLmZ1bmN0aW9uXT1cImlzQ2xpY2thYmxlUHJvcFwiIChjbGljayk9XCJpc0NsaWNrYWJsZVByb3AgJiYgaW5zcGVjdC5lbWl0KClcIj5cbiAge3sgbm9kZS5wcm9wLmRlc2NyaXB0b3IucHJldmlldyB9fVxuPC9zcGFuPlxuIl19