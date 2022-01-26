import { deeplySerializeSelectedProperties, serializeDirectiveState } from './state-serializer/state-serializer';
import { PropertyQueryTypes, } from 'protocol';
import { buildDirectiveTree, getLViewFromDirectiveOrElementInstance } from './lview-transform';
const ngDebug = () => window.ng;
export const getLatestComponentState = (query, directiveForest) => {
    // if a directive forest is passed in we don't have to build the forest again.
    directiveForest = directiveForest !== null && directiveForest !== void 0 ? directiveForest : buildDirectiveForest();
    const node = queryDirectiveForest(query.selectedElement, directiveForest);
    if (!node) {
        return;
    }
    const result = {};
    const populateResultSet = (dir) => {
        if (query.propertyQuery.type === PropertyQueryTypes.All) {
            result[dir.name] = {
                props: serializeDirectiveState(dir.instance),
                metadata: getDirectiveMetadata(dir.instance),
            };
        }
        if (query.propertyQuery.type === PropertyQueryTypes.Specified) {
            result[dir.name] = {
                props: deeplySerializeSelectedProperties(dir.instance, query.propertyQuery.properties[dir.name] || []),
                metadata: getDirectiveMetadata(dir.instance),
            };
        }
    };
    node.directives.forEach(populateResultSet);
    if (node.component) {
        populateResultSet(node.component);
    }
    return result;
};
export const getDirectiveMetadata = (dir) => {
    const safelyGrabMetadata = (key) => {
        try {
            return dir.constructor.ɵcmp ? dir.constructor.ɵcmp[key] : dir.constructor.ɵdir[key];
        }
        catch (_a) {
            console.warn(`Could not find metadata for key: ${key} in directive:`, dir);
            return undefined;
        }
    };
    return {
        inputs: safelyGrabMetadata("inputs" /* INPUTS */),
        outputs: safelyGrabMetadata("outputs" /* OUTPUTS */),
        encapsulation: safelyGrabMetadata("encapsulation" /* ENCAPSULATION */),
        onPush: safelyGrabMetadata("onPush" /* ON_PUSH */),
    };
};
const getRootLViewsHelper = (element, rootLViews = new Set()) => {
    if (!(element instanceof HTMLElement)) {
        return rootLViews;
    }
    const lView = getLViewFromDirectiveOrElementInstance(element);
    if (lView) {
        rootLViews.add(lView);
        return rootLViews;
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < element.children.length; i++) {
        getRootLViewsHelper(element.children[i], rootLViews);
    }
    return rootLViews;
};
// To get all roots, we first get all elements with ng-version attribute.
// This includes all app roots plus Angular Elements.
// We may also have overlays which are on the same level as the top-level
// app. We get these by traversing the DOM starting from the root DOM
// element and stopping once we hit a node which is not HTMLElement or
// has lView data associated with it.
const getRootLViews = (element) => {
    const roots = element.querySelectorAll('[ng-version]');
    return getRootLViewsHelper(element, new Set(Array.from(roots).map(getLViewFromDirectiveOrElementInstance)));
};
export const buildDirectiveForest = () => {
    const roots = getRootLViews(document.documentElement);
    return Array.prototype.concat.apply([], [...roots].map(buildDirectiveTree));
};
// Based on an ElementID we return a specific component node.
// If we can't find any, we return null.
export const queryDirectiveForest = (position, forest) => {
    if (!position.length) {
        return null;
    }
    let node = null;
    for (const i of position) {
        node = forest[i];
        if (!node) {
            return null;
        }
        forest = node.children;
    }
    return node;
};
export const findNodeInForest = (position, forest) => {
    const foundComponent = queryDirectiveForest(position, forest);
    return foundComponent ? foundComponent.nativeElement : null;
};
export const findNodeFromSerializedPosition = (serializedPosition) => {
    const position = serializedPosition.split(',').map((index) => parseInt(index, 10));
    return queryDirectiveForest(position, buildDirectiveForest());
};
export const updateState = (updatedStateData) => {
    const ngd = ngDebug();
    const node = queryDirectiveForest(updatedStateData.directiveId.element, buildDirectiveForest());
    if (!node) {
        console.warn('Could not update the state of component', updatedStateData, 'because the component was not found');
        return;
    }
    if (updatedStateData.directiveId.directive !== undefined) {
        const directive = node.directives[updatedStateData.directiveId.directive].instance;
        mutateComponentOrDirective(updatedStateData, directive);
        ngd.applyChanges(ngd.getOwningComponent(directive));
        return;
    }
    if (node.component) {
        const comp = node.component.instance;
        mutateComponentOrDirective(updatedStateData, comp);
        ngd.applyChanges(comp);
        return;
    }
};
const mutateComponentOrDirective = (updatedStateData, compOrDirective) => {
    const valueKey = updatedStateData.keyPath.pop();
    if (valueKey === undefined) {
        return;
    }
    let parentObjectOfValueToUpdate = compOrDirective;
    updatedStateData.keyPath.forEach((key) => {
        parentObjectOfValueToUpdate = parentObjectOfValueToUpdate[key];
    });
    parentObjectOfValueToUpdate[valueKey] = updatedStateData.newValue;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXRyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy1iYWNrZW5kL3NyYy9saWIvY29tcG9uZW50LXRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFakgsT0FBTyxFQU1MLGtCQUFrQixHQUVuQixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvRixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBRSxNQUFjLENBQUMsRUFBRSxDQUFDO0FBaUJ6QyxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxDQUNyQyxLQUFpQyxFQUNqQyxlQUFxQyxFQUNILEVBQUU7SUFDcEMsOEVBQThFO0lBQzlFLGVBQWUsR0FBRyxlQUFlLGFBQWYsZUFBZSxjQUFmLGVBQWUsR0FBSSxvQkFBb0IsRUFBRSxDQUFDO0lBRTVELE1BQU0sSUFBSSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDMUUsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU87S0FDUjtJQUVELE1BQU0sTUFBTSxHQUF5QixFQUFFLENBQUM7SUFFeEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEdBQWtELEVBQUUsRUFBRTtRQUMvRSxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLGtCQUFrQixDQUFDLEdBQUcsRUFBRTtZQUN2RCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNqQixLQUFLLEVBQUUsdUJBQXVCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDNUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENB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QUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTztLQUNSO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLGdCQUFrQyxFQUFFLGVBQW9CLEVBQUUsRUFBRTtJQUM5RixNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDaEQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1FBQzFCLE9BQU87S0FDUjtJQUVELElBQUksMkJBQTJCLEdBQUcsZUFBZSxDQUFDO0lBQ2xELGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN2QywyQkFBMkIsR0FBRywyQkFBMkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRSxDQUFDLENBQUMsQ0FBQztJQUVILDJCQUEyQixDQUFDLFFBQVEsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztBQUNwRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwbHlTZXJpYWxpemVTZWxlY3RlZFByb3BlcnRpZXMsIHNlcmlhbGl6ZURpcmVjdGl2ZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZS1zZXJpYWxpemVyL3N0YXRlLXNlcmlhbGl6ZXInO1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRFeHBsb3JlclZpZXdRdWVyeSxcbiAgRGV2VG9vbHNOb2RlLFxuICBEaXJlY3RpdmVNZXRhZGF0YSxcbiAgRGlyZWN0aXZlc1Byb3BlcnRpZXMsXG4gIEVsZW1lbnRQb3NpdGlvbixcbiAgUHJvcGVydHlRdWVyeVR5cGVzLFxuICBVcGRhdGVkU3RhdGVEYXRhLFxufSBmcm9tICdwcm90b2NvbCc7XG5pbXBvcnQgeyBidWlsZERpcmVjdGl2ZVRyZWUsIGdldExWaWV3RnJvbURpcmVjdGl2ZU9yRWxlbWVudEluc3RhbmNlIH0gZnJvbSAnLi9sdmlldy10cmFuc2Zvcm0nO1xuXG5jb25zdCBuZ0RlYnVnID0gKCkgPT4gKHdpbmRvdyBhcyBhbnkpLm5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZUluc3RhbmNlVHlwZSB7XG4gIGluc3RhbmNlOiBhbnk7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRJbnN0YW5jZVR5cGUge1xuICBpbnN0YW5jZTogYW55O1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzRWxlbWVudDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRUcmVlTm9kZSBleHRlbmRzIERldlRvb2xzTm9kZTxEaXJlY3RpdmVJbnN0YW5jZVR5cGUsIENvbXBvbmVudEluc3RhbmNlVHlwZT4ge1xuICBjaGlsZHJlbjogQ29tcG9uZW50VHJlZU5vZGVbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldExhdGVzdENvbXBvbmVudFN0YXRlID0gKFxuICBxdWVyeTogQ29tcG9uZW50RXhwbG9yZXJWaWV3UXVlcnksXG4gIGRpcmVjdGl2ZUZvcmVzdD86IENvbXBvbmVudFRyZWVOb2RlW11cbik6IERpcmVjdGl2ZXNQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkID0+IHtcbiAgLy8gaWYgYSBkaXJlY3RpdmUgZm9yZXN0IGlzIHBhc3NlZCBpbiB3ZSBkb24ndCBoYXZlIHRvIGJ1aWxkIHRoZSBmb3Jlc3QgYWdhaW4uXG4gIGRpcmVjdGl2ZUZvcmVzdCA9IGRpcmVjdGl2ZUZvcmVzdCA/PyBidWlsZERpcmVjdGl2ZUZvcmVzdCgpO1xuXG4gIGNvbnN0IG5vZGUgPSBxdWVyeURpcmVjdGl2ZUZvcmVzdChxdWVyeS5zZWxlY3RlZEVsZW1lbnQsIGRpcmVjdGl2ZUZvcmVzdCk7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdDogRGlyZWN0aXZlc1Byb3BlcnRpZXMgPSB7fTtcblxuICBjb25zdCBwb3B1bGF0ZVJlc3VsdFNldCA9IChkaXI6IERpcmVjdGl2ZUluc3RhbmNlVHlwZSB8IENvbXBvbmVudEluc3RhbmNlVHlwZSkgPT4ge1xuICAgIGlmIChxdWVyeS5wcm9wZXJ0eVF1ZXJ5LnR5cGUgPT09IFByb3BlcnR5UXVlcnlUeXBlcy5BbGwpIHtcbiAgICAgIHJlc3VsdFtkaXIubmFtZV0gPSB7XG4gICAgICAgIHByb3BzOiBzZXJpYWxpemVEaXJlY3RpdmVTdGF0ZShkaXIuaW5zdGFuY2UpLFxuICAgICAgICBtZXRhZGF0YTogZ2V0RGlyZWN0aXZlTWV0YWRhdGEoZGlyLmluc3RhbmNlKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChxdWVyeS5wcm9wZXJ0eVF1ZXJ5LnR5cGUgPT09IFByb3BlcnR5UXVlcnlUeXBlcy5TcGVjaWZpZWQpIHtcbiAgICAgIHJlc3VsdFtkaXIubmFtZV0gPSB7XG4gICAgICAgIHByb3BzOiBkZWVwbHlTZXJpYWxpemVTZWxlY3RlZFByb3BlcnRpZXMoZGlyLmluc3RhbmNlLCBxdWVyeS5wcm9wZXJ0eVF1ZXJ5LnByb3BlcnRpZXNbZGlyLm5hbWVdIHx8IFtdKSxcbiAgICAgICAgbWV0YWRhdGE6IGdldERpcmVjdGl2ZU1ldGFkYXRhKGRpci5pbnN0YW5jZSksXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBub2RlLmRpcmVjdGl2ZXMuZm9yRWFjaChwb3B1bGF0ZVJlc3VsdFNldCk7XG4gIGlmIChub2RlLmNvbXBvbmVudCkge1xuICAgIHBvcHVsYXRlUmVzdWx0U2V0KG5vZGUuY29tcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBlbnVtIERpcmVjdGl2ZU1ldGFkYXRhS2V5IHtcbiAgSU5QVVRTID0gJ2lucHV0cycsXG4gIE9VVFBVVFMgPSAnb3V0cHV0cycsXG4gIEVOQ0FQU1VMQVRJT04gPSAnZW5jYXBzdWxhdGlvbicsXG4gIE9OX1BVU0ggPSAnb25QdXNoJyxcbn1cblxuZXhwb3J0IGNvbnN0IGdldERpcmVjdGl2ZU1ldGFkYXRhID0gKGRpcjogYW55KTogRGlyZWN0aXZlTWV0YWRhdGEgPT4ge1xuICBjb25zdCBzYWZlbHlHcmFiTWV0YWRhdGEgPSAoa2V5OiBEaXJlY3RpdmVNZXRhZGF0YUtleSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZGlyLmNvbnN0cnVjdG9yLsm1Y21wID8gZGlyLmNvbnN0cnVjdG9yLsm1Y21wW2tleV0gOiBkaXIuY29uc3RydWN0b3IuybVkaXJba2V5XTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgbWV0YWRhdGEgZm9yIGtleTogJHtrZXl9IGluIGRpcmVjdGl2ZTpgLCBkaXIpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbnB1dHM6IHNhZmVseUdyYWJNZXRhZGF0YShEaXJlY3RpdmVNZXRhZGF0YUtleS5JTlBVVFMpLFxuICAgIG91dHB1dHM6IHNhZmVseUdyYWJNZXRhZGF0YShEaXJlY3RpdmVNZXRhZGF0YUtleS5PVVRQVVRTKSxcbiAgICBlbmNhcHN1bGF0aW9uOiBzYWZlbHlHcmFiTWV0YWRhdGEoRGlyZWN0aXZlTWV0YWRhdGFLZXkuRU5DQVBTVUxBVElPTiksXG4gICAgb25QdXNoOiBzYWZlbHlHcmFiTWV0YWRhdGEoRGlyZWN0aXZlTWV0YWRhdGFLZXkuT05fUFVTSCksXG4gIH07XG59O1xuXG5jb25zdCBnZXRSb290TFZpZXdzSGVscGVyID0gKGVsZW1lbnQ6IEVsZW1lbnQsIHJvb3RMVmlld3MgPSBuZXcgU2V0PGFueT4oKSk6IFNldDxhbnk+ID0+IHtcbiAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIHJldHVybiByb290TFZpZXdzO1xuICB9XG4gIGNvbnN0IGxWaWV3ID0gZ2V0TFZpZXdGcm9tRGlyZWN0aXZlT3JFbGVtZW50SW5zdGFuY2UoZWxlbWVudCk7XG4gIGlmIChsVmlldykge1xuICAgIHJvb3RMVmlld3MuYWRkKGxWaWV3KTtcbiAgICByZXR1cm4gcm9vdExWaWV3cztcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgZ2V0Um9vdExWaWV3c0hlbHBlcihlbGVtZW50LmNoaWxkcmVuW2ldLCByb290TFZpZXdzKTtcbiAgfVxuICByZXR1cm4gcm9vdExWaWV3cztcbn07XG5cbi8vIFRvIGdldCBhbGwgcm9vdHMsIHdlIGZpcnN0IGdldCBhbGwgZWxlbWVudHMgd2l0aCBuZy12ZXJzaW9uIGF0dHJpYnV0ZS5cbi8vIFRoaXMgaW5jbHVkZXMgYWxsIGFwcCByb290cyBwbHVzIEFuZ3VsYXIgRWxlbWVudHMuXG4vLyBXZSBtYXkgYWxzbyBoYXZlIG92ZXJsYXlzIHdoaWNoIGFyZSBvbiB0aGUgc2FtZSBsZXZlbCBhcyB0aGUgdG9wLWxldmVsXG4vLyBhcHAuIFdlIGdldCB0aGVzZSBieSB0cmF2ZXJzaW5nIHRoZSBET00gc3RhcnRpbmcgZnJvbSB0aGUgcm9vdCBET01cbi8vIGVsZW1lbnQgYW5kIHN0b3BwaW5nIG9uY2Ugd2UgaGl0IGEgbm9kZSB3aGljaCBpcyBub3QgSFRNTEVsZW1lbnQgb3Jcbi8vIGhhcyBsVmlldyBkYXRhIGFzc29jaWF0ZWQgd2l0aCBpdC5cbmNvbnN0IGdldFJvb3RMVmlld3MgPSAoZWxlbWVudDogRWxlbWVudCk6IFNldDxhbnk+ID0+IHtcbiAgY29uc3Qgcm9vdHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuZy12ZXJzaW9uXScpO1xuICByZXR1cm4gZ2V0Um9vdExWaWV3c0hlbHBlcihlbGVtZW50LCBuZXcgU2V0KEFycmF5LmZyb20ocm9vdHMpLm1hcChnZXRMVmlld0Zyb21EaXJlY3RpdmVPckVsZW1lbnRJbnN0YW5jZSkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBidWlsZERpcmVjdGl2ZUZvcmVzdCA9ICgpOiBDb21wb25lbnRUcmVlTm9kZVtdID0+IHtcbiAgY29uc3Qgcm9vdHMgPSBnZXRSb290TFZpZXdzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBbLi4ucm9vdHNdLm1hcChidWlsZERpcmVjdGl2ZVRyZWUpKTtcbn07XG5cbi8vIEJhc2VkIG9uIGFuIEVsZW1lbnRJRCB3ZSByZXR1cm4gYSBzcGVjaWZpYyBjb21wb25lbnQgbm9kZS5cbi8vIElmIHdlIGNhbid0IGZpbmQgYW55LCB3ZSByZXR1cm4gbnVsbC5cbmV4cG9ydCBjb25zdCBxdWVyeURpcmVjdGl2ZUZvcmVzdCA9IChcbiAgcG9zaXRpb246IEVsZW1lbnRQb3NpdGlvbixcbiAgZm9yZXN0OiBDb21wb25lbnRUcmVlTm9kZVtdXG4pOiBDb21wb25lbnRUcmVlTm9kZSB8IG51bGwgPT4ge1xuICBpZiAoIXBvc2l0aW9uLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBub2RlOiBudWxsIHwgQ29tcG9uZW50VHJlZU5vZGUgPSBudWxsO1xuICBmb3IgKGNvbnN0IGkgb2YgcG9zaXRpb24pIHtcbiAgICBub2RlID0gZm9yZXN0W2ldO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZvcmVzdCA9IG5vZGUuY2hpbGRyZW47XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZE5vZGVJbkZvcmVzdCA9IChwb3NpdGlvbjogRWxlbWVudFBvc2l0aW9uLCBmb3Jlc3Q6IENvbXBvbmVudFRyZWVOb2RlW10pOiBIVE1MRWxlbWVudCB8IG51bGwgPT4ge1xuICBjb25zdCBmb3VuZENvbXBvbmVudDogQ29tcG9uZW50VHJlZU5vZGUgfCBudWxsID0gcXVlcnlEaXJlY3RpdmVGb3Jlc3QocG9zaXRpb24sIGZvcmVzdCk7XG4gIHJldHVybiBmb3VuZENvbXBvbmVudCA/IChmb3VuZENvbXBvbmVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZE5vZGVGcm9tU2VyaWFsaXplZFBvc2l0aW9uID0gKHNlcmlhbGl6ZWRQb3NpdGlvbjogc3RyaW5nKTogQ29tcG9uZW50VHJlZU5vZGUgfCBudWxsID0+IHtcbiAgY29uc3QgcG9zaXRpb246IG51bWJlcltdID0gc2VyaWFsaXplZFBvc2l0aW9uLnNwbGl0KCcsJykubWFwKChpbmRleCkgPT4gcGFyc2VJbnQoaW5kZXgsIDEwKSk7XG4gIHJldHVybiBxdWVyeURpcmVjdGl2ZUZvcmVzdChwb3NpdGlvbiwgYnVpbGREaXJlY3RpdmVGb3Jlc3QoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU3RhdGUgPSAodXBkYXRlZFN0YXRlRGF0YTogVXBkYXRlZFN0YXRlRGF0YSk6IHZvaWQgPT4ge1xuICBjb25zdCBuZ2QgPSBuZ0RlYnVnKCk7XG4gIGNvbnN0IG5vZGUgPSBxdWVyeURpcmVjdGl2ZUZvcmVzdCh1cGRhdGVkU3RhdGVEYXRhLmRpcmVjdGl2ZUlkLmVsZW1lbnQsIGJ1aWxkRGlyZWN0aXZlRm9yZXN0KCkpO1xuICBpZiAoIW5vZGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCB1cGRhdGUgdGhlIHN0YXRlIG9mIGNvbXBvbmVudCcsIHVwZGF0ZWRTdGF0ZURhdGEsICdiZWNhdXNlIHRoZSBjb21wb25lbnQgd2FzIG5vdCBmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodXBkYXRlZFN0YXRlRGF0YS5kaXJlY3RpdmVJZC5kaXJlY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IG5vZGUuZGlyZWN0aXZlc1t1cGRhdGVkU3RhdGVEYXRhLmRpcmVjdGl2ZUlkLmRpcmVjdGl2ZV0uaW5zdGFuY2U7XG4gICAgbXV0YXRlQ29tcG9uZW50T3JEaXJlY3RpdmUodXBkYXRlZFN0YXRlRGF0YSwgZGlyZWN0aXZlKTtcbiAgICBuZ2QuYXBwbHlDaGFuZ2VzKG5nZC5nZXRPd25pbmdDb21wb25lbnQoZGlyZWN0aXZlKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChub2RlLmNvbXBvbmVudCkge1xuICAgIGNvbnN0IGNvbXAgPSBub2RlLmNvbXBvbmVudC5pbnN0YW5jZTtcbiAgICBtdXRhdGVDb21wb25lbnRPckRpcmVjdGl2ZSh1cGRhdGVkU3RhdGVEYXRhLCBjb21wKTtcbiAgICBuZ2QuYXBwbHlDaGFuZ2VzKGNvbXApO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuY29uc3QgbXV0YXRlQ29tcG9uZW50T3JEaXJlY3RpdmUgPSAodXBkYXRlZFN0YXRlRGF0YTogVXBkYXRlZFN0YXRlRGF0YSwgY29tcE9yRGlyZWN0aXZlOiBhbnkpID0+IHtcbiAgY29uc3QgdmFsdWVLZXkgPSB1cGRhdGVkU3RhdGVEYXRhLmtleVBhdGgucG9wKCk7XG4gIGlmICh2YWx1ZUtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHBhcmVudE9iamVjdE9mVmFsdWVUb1VwZGF0ZSA9IGNvbXBPckRpcmVjdGl2ZTtcbiAgdXBkYXRlZFN0YXRlRGF0YS5rZXlQYXRoLmZvckVhY2goKGtleSkgPT4ge1xuICAgIHBhcmVudE9iamVjdE9mVmFsdWVUb1VwZGF0ZSA9IHBhcmVudE9iamVjdE9mVmFsdWVUb1VwZGF0ZVtrZXldO1xuICB9KTtcblxuICBwYXJlbnRPYmplY3RPZlZhbHVlVG9VcGRhdGVbdmFsdWVLZXldID0gdXBkYXRlZFN0YXRlRGF0YS5uZXdWYWx1ZTtcbn07XG4iXX0=