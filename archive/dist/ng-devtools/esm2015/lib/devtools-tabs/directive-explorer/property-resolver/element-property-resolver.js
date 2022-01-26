import { Injectable } from '@angular/core';
import { DirectivePropertyResolver } from './directive-property-resolver';
import * as i0 from "@angular/core";
import * as i1 from "protocol";
export class ElementPropertyResolver {
    constructor(_messageBus) {
        this._messageBus = _messageBus;
        this._directivePropertiesController = new Map();
    }
    clearProperties() {
        this._directivePropertiesController = new Map();
    }
    setProperties(indexedNode, data) {
        this._flushDeletedProperties(data);
        Object.keys(data).forEach((key) => {
            const controller = this._directivePropertiesController.get(key);
            if (controller) {
                controller.updateProperties(data[key]);
                return;
            }
            const position = {
                element: indexedNode.position,
                directive: undefined,
            };
            if (!indexedNode.component || indexedNode.component.name !== key) {
                position.directive = indexedNode.directives.findIndex((d) => d.name === key);
            }
            this._directivePropertiesController.set(key, new DirectivePropertyResolver(this._messageBus, data[key], position));
        });
    }
    _flushDeletedProperties(data) {
        const currentProps = [...this._directivePropertiesController.keys()];
        const incomingProps = new Set(Object.keys(data));
        for (const prop of currentProps) {
            if (!incomingProps.has(prop)) {
                this._directivePropertiesController.delete(prop);
            }
        }
    }
    getExpandedProperties() {
        const result = {};
        for (const [directive] of this._directivePropertiesController) {
            const controller = this._directivePropertiesController.get(directive);
            if (!controller) {
                console.error('Unable to find nested properties controller for', directive);
                continue;
            }
            result[directive] = controller.getExpandedProperties();
        }
        return result;
    }
    getDirectiveController(directive) {
        return this._directivePropertiesController.get(directive);
    }
}
ElementPropertyResolver.ɵfac = function ElementPropertyResolver_Factory(t) { return new (t || ElementPropertyResolver)(i0.ɵɵinject(i1.MessageBus)); };
ElementPropertyResolver.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ElementPropertyResolver, factory: ElementPropertyResolver.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementPropertyResolver, [{
        type: Injectable
    }], function () { return [{ type: i1.MessageBus }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1wcm9wZXJ0eS1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZGV2dG9vbHMtdGFicy9kaXJlY3RpdmUtZXhwbG9yZXIvcHJvcGVydHktcmVzb2x2ZXIvZWxlbWVudC1wcm9wZXJ0eS1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFlMUUsTUFBTSxPQUFPLHVCQUF1QjtJQUdsQyxZQUFvQixXQUErQjtRQUEvQixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFGM0MsbUNBQThCLEdBQUcsSUFBSSxHQUFHLEVBQXFDLENBQUM7SUFFaEMsQ0FBQztJQUV2RCxlQUFlO1FBQ2IsSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELGFBQWEsQ0FBQyxXQUF3QixFQUFFLElBQTBCO1FBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2hDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEUsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPO2FBQ1I7WUFDRCxNQUFNLFFBQVEsR0FBc0I7Z0JBQ2xDLE9BQU8sRUFBRSxXQUFXLENBQUMsUUFBUTtnQkFDN0IsU0FBUyxFQUFFLFNBQVM7YUFDckIsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDaEUsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQzthQUM5RTtZQUNELElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQ3JDLEdBQUcsRUFDSCxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUNyRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sdUJBQXVCLENBQUMsSUFBMEI7UUFDeEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sYUFBYSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRCxLQUFLLE1BQU0sSUFBSSxJQUFJLFlBQVksRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsRDtTQUNGO0lBQ0gsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixNQUFNLE1BQU0sR0FBb0MsRUFBRSxDQUFDO1FBQ25ELEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyw4QkFBOEIsRUFBRTtZQUM3RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxpREFBaUQsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDNUUsU0FBUzthQUNWO1lBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELHNCQUFzQixDQUFDLFNBQWlCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs4RkF6RFUsdUJBQXVCOzZFQUF2Qix1QkFBdUIsV0FBdkIsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FEbkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZXNQcm9wZXJ0aWVzLFxuICBDb21wb25lbnRFeHBsb3JlclZpZXdQcm9wZXJ0aWVzLFxuICBEZXNjcmlwdG9yLFxuICBNZXNzYWdlQnVzLFxuICBFdmVudHMsXG4gIERpcmVjdGl2ZVBvc2l0aW9uLFxufSBmcm9tICdwcm90b2NvbCc7XG5pbXBvcnQgeyBJbmRleGVkTm9kZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS1mb3Jlc3QvaW5kZXgtZm9yZXN0JztcbmltcG9ydCB7IERpcmVjdGl2ZVByb3BlcnR5UmVzb2x2ZXIgfSBmcm9tICcuL2RpcmVjdGl2ZS1wcm9wZXJ0eS1yZXNvbHZlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhdE5vZGUge1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xuICBwcm9wOiBQcm9wZXJ0eTtcbiAgbGV2ZWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRvcjogRGVzY3JpcHRvcjtcbiAgcGFyZW50OiBQcm9wZXJ0eSB8IG51bGw7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbGVtZW50UHJvcGVydHlSZXNvbHZlciB7XG4gIHByaXZhdGUgX2RpcmVjdGl2ZVByb3BlcnRpZXNDb250cm9sbGVyID0gbmV3IE1hcDxzdHJpbmcsIERpcmVjdGl2ZVByb3BlcnR5UmVzb2x2ZXI+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZUJ1czogTWVzc2FnZUJ1czxFdmVudHM+KSB7fVxuXG4gIGNsZWFyUHJvcGVydGllcygpOiB2b2lkIHtcbiAgICB0aGlzLl9kaXJlY3RpdmVQcm9wZXJ0aWVzQ29udHJvbGxlciA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMoaW5kZXhlZE5vZGU6IEluZGV4ZWROb2RlLCBkYXRhOiBEaXJlY3RpdmVzUHJvcGVydGllcyk6IHZvaWQge1xuICAgIHRoaXMuX2ZsdXNoRGVsZXRlZFByb3BlcnRpZXMoZGF0YSk7XG5cbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSB0aGlzLl9kaXJlY3RpdmVQcm9wZXJ0aWVzQ29udHJvbGxlci5nZXQoa2V5KTtcbiAgICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIudXBkYXRlUHJvcGVydGllcyhkYXRhW2tleV0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwb3NpdGlvbjogRGlyZWN0aXZlUG9zaXRpb24gPSB7XG4gICAgICAgIGVsZW1lbnQ6IGluZGV4ZWROb2RlLnBvc2l0aW9uLFxuICAgICAgICBkaXJlY3RpdmU6IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgICBpZiAoIWluZGV4ZWROb2RlLmNvbXBvbmVudCB8fCBpbmRleGVkTm9kZS5jb21wb25lbnQubmFtZSAhPT0ga2V5KSB7XG4gICAgICAgIHBvc2l0aW9uLmRpcmVjdGl2ZSA9IGluZGV4ZWROb2RlLmRpcmVjdGl2ZXMuZmluZEluZGV4KChkKSA9PiBkLm5hbWUgPT09IGtleSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9kaXJlY3RpdmVQcm9wZXJ0aWVzQ29udHJvbGxlci5zZXQoXG4gICAgICAgIGtleSxcbiAgICAgICAgbmV3IERpcmVjdGl2ZVByb3BlcnR5UmVzb2x2ZXIodGhpcy5fbWVzc2FnZUJ1cywgZGF0YVtrZXldLCBwb3NpdGlvbilcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9mbHVzaERlbGV0ZWRQcm9wZXJ0aWVzKGRhdGE6IERpcmVjdGl2ZXNQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFByb3BzID0gWy4uLnRoaXMuX2RpcmVjdGl2ZVByb3BlcnRpZXNDb250cm9sbGVyLmtleXMoKV07XG4gICAgY29uc3QgaW5jb21pbmdQcm9wcyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoZGF0YSkpO1xuICAgIGZvciAoY29uc3QgcHJvcCBvZiBjdXJyZW50UHJvcHMpIHtcbiAgICAgIGlmICghaW5jb21pbmdQcm9wcy5oYXMocHJvcCkpIHtcbiAgICAgICAgdGhpcy5fZGlyZWN0aXZlUHJvcGVydGllc0NvbnRyb2xsZXIuZGVsZXRlKHByb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEV4cGFuZGVkUHJvcGVydGllcygpOiBDb21wb25lbnRFeHBsb3JlclZpZXdQcm9wZXJ0aWVzIHtcbiAgICBjb25zdCByZXN1bHQ6IENvbXBvbmVudEV4cGxvcmVyVmlld1Byb3BlcnRpZXMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtkaXJlY3RpdmVdIG9mIHRoaXMuX2RpcmVjdGl2ZVByb3BlcnRpZXNDb250cm9sbGVyKSB7XG4gICAgICBjb25zdCBjb250cm9sbGVyID0gdGhpcy5fZGlyZWN0aXZlUHJvcGVydGllc0NvbnRyb2xsZXIuZ2V0KGRpcmVjdGl2ZSk7XG4gICAgICBpZiAoIWNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZpbmQgbmVzdGVkIHByb3BlcnRpZXMgY29udHJvbGxlciBmb3InLCBkaXJlY3RpdmUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtkaXJlY3RpdmVdID0gY29udHJvbGxlci5nZXRFeHBhbmRlZFByb3BlcnRpZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldERpcmVjdGl2ZUNvbnRyb2xsZXIoZGlyZWN0aXZlOiBzdHJpbmcpOiBEaXJlY3RpdmVQcm9wZXJ0eVJlc29sdmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aXZlUHJvcGVydGllc0NvbnRyb2xsZXIuZ2V0KGRpcmVjdGl2ZSk7XG4gIH1cbn1cbiJdfQ==