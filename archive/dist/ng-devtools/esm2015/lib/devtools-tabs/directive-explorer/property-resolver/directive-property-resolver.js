import { PropType } from 'protocol';
import { MatTreeFlattener } from '@angular/material/tree';
import { PropertyDataSource } from './property-data-source';
import { FlatTreeControl } from '@angular/cdk/tree';
import { getExpandedDirectiveProperties } from './property-expanded-directive-properties';
import { Observable } from 'rxjs';
import { arrayifyProps } from './arrayify-props';
const expandable = (prop) => {
    if (!prop) {
        return false;
    }
    if (!prop.expandable) {
        return false;
    }
    return !(prop.type !== PropType.Object && prop.type !== PropType.Array);
};
const getDirectiveControls = (dataSource) => {
    const treeControl = dataSource.treeControl;
    return {
        dataSource,
        treeControl,
    };
};
export const constructPathOfKeysToPropertyValue = (nodePropToGetKeysFor, keys = []) => {
    keys.unshift(nodePropToGetKeysFor.name);
    const parentNodeProp = nodePropToGetKeysFor.parent;
    if (parentNodeProp) {
        constructPathOfKeysToPropertyValue(parentNodeProp, keys);
    }
    return keys;
};
export class DirectivePropertyResolver {
    constructor(_messageBus, _props, _directivePosition) {
        this._messageBus = _messageBus;
        this._props = _props;
        this._directivePosition = _directivePosition;
        this._treeFlattener = new MatTreeFlattener((node, level) => {
            return {
                expandable: expandable(node.descriptor),
                prop: node,
                level,
            };
        }, (node) => node.level, (node) => node.expandable, (node) => this._getChildren(node));
        this._treeControl = new FlatTreeControl((node) => node.level, (node) => node.expandable);
        this._initDataSources();
    }
    get directiveInputControls() {
        return getDirectiveControls(this._inputsDataSource);
    }
    get directiveOutputControls() {
        return getDirectiveControls(this._outputsDataSource);
    }
    get directiveStateControls() {
        return getDirectiveControls(this._stateDataSource);
    }
    get directiveProperties() {
        return this._props.props;
    }
    get directivePosition() {
        return this._directivePosition;
    }
    get directiveViewEncapsulation() {
        var _a;
        return (_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.encapsulation;
    }
    get directiveHasOnPushStrategy() {
        var _a;
        return (_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.onPush;
    }
    getExpandedProperties() {
        return [
            ...getExpandedDirectiveProperties(this._inputsDataSource.data),
            ...getExpandedDirectiveProperties(this._outputsDataSource.data),
            ...getExpandedDirectiveProperties(this._stateDataSource.data),
        ];
    }
    updateProperties(newProps) {
        this._props = newProps;
        const { inputProps, outputProps, stateProps } = this._classifyProperties();
        this._inputsDataSource.update(inputProps);
        this._outputsDataSource.update(outputProps);
        this._stateDataSource.update(stateProps);
    }
    updateValue(node, newValue) {
        const directiveId = this._directivePosition;
        const keyPath = constructPathOfKeysToPropertyValue(node.prop);
        this._messageBus.emit('updateState', [{ directiveId, keyPath, newValue }]);
        node.prop.descriptor.value = newValue;
    }
    _getChildren(prop) {
        const descriptor = prop.descriptor;
        if ((descriptor.type === PropType.Object || descriptor.type === PropType.Array) &&
            !(descriptor.value instanceof Observable)) {
            return arrayifyProps(descriptor.value || {}, prop);
        }
        else {
            console.error('Unexpected data type', descriptor, 'in property', prop);
        }
    }
    _initDataSources() {
        const { inputProps, outputProps, stateProps } = this._classifyProperties();
        this._inputsDataSource = this._createDataSourceFromProps(inputProps);
        this._outputsDataSource = this._createDataSourceFromProps(outputProps);
        this._stateDataSource = this._createDataSourceFromProps(stateProps);
    }
    _createDataSourceFromProps(props) {
        return new PropertyDataSource(props, this._treeFlattener, this._treeControl, this._directivePosition, this._messageBus);
    }
    _classifyProperties() {
        var _a, _b;
        const inputLabels = new Set(Object.keys(((_a = this._props.metadata) === null || _a === void 0 ? void 0 : _a.inputs) || {}));
        const outputLabels = new Set(Object.keys(((_b = this._props.metadata) === null || _b === void 0 ? void 0 : _b.outputs) || {}));
        const inputProps = {};
        const outputProps = {};
        const stateProps = {};
        let propPointer;
        Object.keys(this.directiveProperties).forEach((propName) => {
            propPointer = inputLabels.has(propName) ? inputProps : outputLabels.has(propName) ? outputProps : stateProps;
            propPointer[propName] = this.directiveProperties[propName];
        });
        return {
            inputProps,
            outputProps,
            stateProps,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLXByb3BlcnR5LXJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9wcm9wZXJ0eS1yZXNvbHZlci9kaXJlY3RpdmUtcHJvcGVydHktcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFFBQVEsRUFBaUUsTUFBTSxVQUFVLENBQUM7QUFDL0csT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBT2pELE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBZ0IsRUFBRSxFQUFFO0lBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRSxDQUFDLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHLENBQzNCLFVBQThCLEVBQzhDLEVBQUU7SUFDOUUsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FB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Q0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3pELFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQzdHLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsVUFBVTtZQUNWLFdBQVc7WUFDWCxVQUFVO1NBQ1gsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlc2NyaXB0b3IsIFByb3BUeXBlLCBNZXNzYWdlQnVzLCBFdmVudHMsIFByb3BlcnRpZXMsIERpcmVjdGl2ZVBvc2l0aW9uLCBOZXN0ZWRQcm9wIH0gZnJvbSAncHJvdG9jb2wnO1xuaW1wb3J0IHsgTWF0VHJlZUZsYXR0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHsgUHJvcGVydHlEYXRhU291cmNlIH0gZnJvbSAnLi9wcm9wZXJ0eS1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBGbGF0VHJlZUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQgeyBnZXRFeHBhbmRlZERpcmVjdGl2ZVByb3BlcnRpZXMgfSBmcm9tICcuL3Byb3BlcnR5LWV4cGFuZGVkLWRpcmVjdGl2ZS1wcm9wZXJ0aWVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb3BlcnR5LCBGbGF0Tm9kZSB9IGZyb20gJy4vZWxlbWVudC1wcm9wZXJ0eS1yZXNvbHZlcic7XG5pbXBvcnQgeyBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYXJyYXlpZnlQcm9wcyB9IGZyb20gJy4vYXJyYXlpZnktcHJvcHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZVRyZWVEYXRhIHtcbiAgZGF0YVNvdXJjZTogUHJvcGVydHlEYXRhU291cmNlO1xuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPEZsYXROb2RlPjtcbn1cblxuY29uc3QgZXhwYW5kYWJsZSA9IChwcm9wOiBEZXNjcmlwdG9yKSA9PiB7XG4gIGlmICghcHJvcCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIXByb3AuZXhwYW5kYWJsZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gIShwcm9wLnR5cGUgIT09IFByb3BUeXBlLk9iamVjdCAmJiBwcm9wLnR5cGUgIT09IFByb3BUeXBlLkFycmF5KTtcbn07XG5cbmNvbnN0IGdldERpcmVjdGl2ZUNvbnRyb2xzID0gKFxuICBkYXRhU291cmNlOiBQcm9wZXJ0eURhdGFTb3VyY2Vcbik6IHsgZGF0YVNvdXJjZTogUHJvcGVydHlEYXRhU291cmNlOyB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPEZsYXROb2RlPiB9ID0+IHtcbiAgY29uc3QgdHJlZUNvbnRyb2wgPSBkYXRhU291cmNlLnRyZWVDb250cm9sO1xuICByZXR1cm4ge1xuICAgIGRhdGFTb3VyY2UsXG4gICAgdHJlZUNvbnRyb2wsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29uc3RydWN0UGF0aE9mS2V5c1RvUHJvcGVydHlWYWx1ZSA9IChub2RlUHJvcFRvR2V0S2V5c0ZvcjogUHJvcGVydHksIGtleXM6IHN0cmluZ1tdID0gW10pOiBzdHJpbmdbXSA9PiB7XG4gIGtleXMudW5zaGlmdChub2RlUHJvcFRvR2V0S2V5c0Zvci5uYW1lKTtcbiAgY29uc3QgcGFyZW50Tm9kZVByb3AgPSBub2RlUHJvcFRvR2V0S2V5c0Zvci5wYXJlbnQ7XG4gIGlmIChwYXJlbnROb2RlUHJvcCkge1xuICAgIGNvbnN0cnVjdFBhdGhPZktleXNUb1Byb3BlcnR5VmFsdWUocGFyZW50Tm9kZVByb3AsIGtleXMpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZVByb3BlcnR5UmVzb2x2ZXIge1xuICBwcml2YXRlIF90cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIoXG4gICAgKG5vZGU6IFByb3BlcnR5LCBsZXZlbDogbnVtYmVyKTogRmxhdE5vZGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXhwYW5kYWJsZTogZXhwYW5kYWJsZShub2RlLmRlc2NyaXB0b3IpLFxuICAgICAgICBwcm9wOiBub2RlLFxuICAgICAgICBsZXZlbCxcbiAgICAgIH07XG4gICAgfSxcbiAgICAobm9kZSkgPT4gbm9kZS5sZXZlbCxcbiAgICAobm9kZSkgPT4gbm9kZS5leHBhbmRhYmxlLFxuICAgIChub2RlKSA9PiB0aGlzLl9nZXRDaGlsZHJlbihub2RlKVxuICApO1xuXG4gIHByaXZhdGUgX3RyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxGbGF0Tm9kZT4oXG4gICAgKG5vZGUpID0+IG5vZGUubGV2ZWwsXG4gICAgKG5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZVxuICApO1xuXG4gIHByaXZhdGUgX2lucHV0c0RhdGFTb3VyY2U6IFByb3BlcnR5RGF0YVNvdXJjZTtcbiAgcHJpdmF0ZSBfb3V0cHV0c0RhdGFTb3VyY2U6IFByb3BlcnR5RGF0YVNvdXJjZTtcbiAgcHJpdmF0ZSBfc3RhdGVEYXRhU291cmNlOiBQcm9wZXJ0eURhdGFTb3VyY2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbWVzc2FnZUJ1czogTWVzc2FnZUJ1czxFdmVudHM+LFxuICAgIHByaXZhdGUgX3Byb3BzOiBQcm9wZXJ0aWVzLFxuICAgIHByaXZhdGUgX2RpcmVjdGl2ZVBvc2l0aW9uOiBEaXJlY3RpdmVQb3NpdGlvblxuICApIHtcbiAgICB0aGlzLl9pbml0RGF0YVNvdXJjZXMoKTtcbiAgfVxuXG4gIGdldCBkaXJlY3RpdmVJbnB1dENvbnRyb2xzKCk6IERpcmVjdGl2ZVRyZWVEYXRhIHtcbiAgICByZXR1cm4gZ2V0RGlyZWN0aXZlQ29udHJvbHModGhpcy5faW5wdXRzRGF0YVNvdXJjZSk7XG4gIH1cblxuICBnZXQgZGlyZWN0aXZlT3V0cHV0Q29udHJvbHMoKTogRGlyZWN0aXZlVHJlZURhdGEge1xuICAgIHJldHVybiBnZXREaXJlY3RpdmVDb250cm9scyh0aGlzLl9vdXRwdXRzRGF0YVNvdXJjZSk7XG4gIH1cblxuICBnZXQgZGlyZWN0aXZlU3RhdGVDb250cm9scygpOiBEaXJlY3RpdmVUcmVlRGF0YSB7XG4gICAgcmV0dXJuIGdldERpcmVjdGl2ZUNvbnRyb2xzKHRoaXMuX3N0YXRlRGF0YVNvdXJjZSk7XG4gIH1cblxuICBnZXQgZGlyZWN0aXZlUHJvcGVydGllcygpOiB7IFtuYW1lOiBzdHJpbmddOiBEZXNjcmlwdG9yIH0ge1xuICAgIHJldHVybiB0aGlzLl9wcm9wcy5wcm9wcztcbiAgfVxuXG4gIGdldCBkaXJlY3RpdmVQb3NpdGlvbigpOiBEaXJlY3RpdmVQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGl2ZVBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IGRpcmVjdGl2ZVZpZXdFbmNhcHN1bGF0aW9uKCk6IFZpZXdFbmNhcHN1bGF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcHMubWV0YWRhdGE/LmVuY2Fwc3VsYXRpb247XG4gIH1cblxuICBnZXQgZGlyZWN0aXZlSGFzT25QdXNoU3RyYXRlZ3koKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLm1ldGFkYXRhPy5vblB1c2g7XG4gIH1cblxuICBnZXRFeHBhbmRlZFByb3BlcnRpZXMoKTogTmVzdGVkUHJvcFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uZ2V0RXhwYW5kZWREaXJlY3RpdmVQcm9wZXJ0aWVzKHRoaXMuX2lucHV0c0RhdGFTb3VyY2UuZGF0YSksXG4gICAgICAuLi5nZXRFeHBhbmRlZERpcmVjdGl2ZVByb3BlcnRpZXModGhpcy5fb3V0cHV0c0RhdGFTb3VyY2UuZGF0YSksXG4gICAgICAuLi5nZXRFeHBhbmRlZERpcmVjdGl2ZVByb3BlcnRpZXModGhpcy5fc3RhdGVEYXRhU291cmNlLmRhdGEpLFxuICAgIF07XG4gIH1cblxuICB1cGRhdGVQcm9wZXJ0aWVzKG5ld1Byb3BzOiBQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgdGhpcy5fcHJvcHMgPSBuZXdQcm9wcztcbiAgICBjb25zdCB7IGlucHV0UHJvcHMsIG91dHB1dFByb3BzLCBzdGF0ZVByb3BzIH0gPSB0aGlzLl9jbGFzc2lmeVByb3BlcnRpZXMoKTtcblxuICAgIHRoaXMuX2lucHV0c0RhdGFTb3VyY2UudXBkYXRlKGlucHV0UHJvcHMpO1xuICAgIHRoaXMuX291dHB1dHNEYXRhU291cmNlLnVwZGF0ZShvdXRwdXRQcm9wcyk7XG4gICAgdGhpcy5fc3RhdGVEYXRhU291cmNlLnVwZGF0ZShzdGF0ZVByb3BzKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKG5vZGU6IEZsYXROb2RlLCBuZXdWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgZGlyZWN0aXZlSWQgPSB0aGlzLl9kaXJlY3RpdmVQb3NpdGlvbjtcbiAgICBjb25zdCBrZXlQYXRoID0gY29uc3RydWN0UGF0aE9mS2V5c1RvUHJvcGVydHlWYWx1ZShub2RlLnByb3ApO1xuICAgIHRoaXMuX21lc3NhZ2VCdXMuZW1pdCgndXBkYXRlU3RhdGUnLCBbeyBkaXJlY3RpdmVJZCwga2V5UGF0aCwgbmV3VmFsdWUgfV0pO1xuICAgIG5vZGUucHJvcC5kZXNjcmlwdG9yLnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDaGlsZHJlbihwcm9wOiBQcm9wZXJ0eSk6IFByb3BlcnR5W10gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBwcm9wLmRlc2NyaXB0b3I7XG4gICAgaWYgKFxuICAgICAgKGRlc2NyaXB0b3IudHlwZSA9PT0gUHJvcFR5cGUuT2JqZWN0IHx8IGRlc2NyaXB0b3IudHlwZSA9PT0gUHJvcFR5cGUuQXJyYXkpICYmXG4gICAgICAhKGRlc2NyaXB0b3IudmFsdWUgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGFycmF5aWZ5UHJvcHMoZGVzY3JpcHRvci52YWx1ZSB8fCB7fSwgcHJvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZGF0YSB0eXBlJywgZGVzY3JpcHRvciwgJ2luIHByb3BlcnR5JywgcHJvcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdERhdGFTb3VyY2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgaW5wdXRQcm9wcywgb3V0cHV0UHJvcHMsIHN0YXRlUHJvcHMgfSA9IHRoaXMuX2NsYXNzaWZ5UHJvcGVydGllcygpO1xuXG4gICAgdGhpcy5faW5wdXRzRGF0YVNvdXJjZSA9IHRoaXMuX2NyZWF0ZURhdGFTb3VyY2VGcm9tUHJvcHMoaW5wdXRQcm9wcyk7XG4gICAgdGhpcy5fb3V0cHV0c0RhdGFTb3VyY2UgPSB0aGlzLl9jcmVhdGVEYXRhU291cmNlRnJvbVByb3BzKG91dHB1dFByb3BzKTtcbiAgICB0aGlzLl9zdGF0ZURhdGFTb3VyY2UgPSB0aGlzLl9jcmVhdGVEYXRhU291cmNlRnJvbVByb3BzKHN0YXRlUHJvcHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRGF0YVNvdXJjZUZyb21Qcm9wcyhwcm9wczogeyBbbmFtZTogc3RyaW5nXTogRGVzY3JpcHRvciB9KTogUHJvcGVydHlEYXRhU291cmNlIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5RGF0YVNvdXJjZShcbiAgICAgIHByb3BzLFxuICAgICAgdGhpcy5fdHJlZUZsYXR0ZW5lcixcbiAgICAgIHRoaXMuX3RyZWVDb250cm9sLFxuICAgICAgdGhpcy5fZGlyZWN0aXZlUG9zaXRpb24sXG4gICAgICB0aGlzLl9tZXNzYWdlQnVzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsYXNzaWZ5UHJvcGVydGllcygpOiB7XG4gICAgaW5wdXRQcm9wczogeyBbbmFtZTogc3RyaW5nXTogRGVzY3JpcHRvciB9O1xuICAgIG91dHB1dFByb3BzOiB7IFtuYW1lOiBzdHJpbmddOiBEZXNjcmlwdG9yIH07XG4gICAgc3RhdGVQcm9wczogeyBbbmFtZTogc3RyaW5nXTogRGVzY3JpcHRvciB9O1xuICB9IHtcbiAgICBjb25zdCBpbnB1dExhYmVsczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KE9iamVjdC5rZXlzKHRoaXMuX3Byb3BzLm1ldGFkYXRhPy5pbnB1dHMgfHwge30pKTtcbiAgICBjb25zdCBvdXRwdXRMYWJlbHM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChPYmplY3Qua2V5cyh0aGlzLl9wcm9wcy5tZXRhZGF0YT8ub3V0cHV0cyB8fCB7fSkpO1xuXG4gICAgY29uc3QgaW5wdXRQcm9wcyA9IHt9O1xuICAgIGNvbnN0IG91dHB1dFByb3BzID0ge307XG4gICAgY29uc3Qgc3RhdGVQcm9wcyA9IHt9O1xuICAgIGxldCBwcm9wUG9pbnRlcjogeyBbbmFtZTogc3RyaW5nXTogRGVzY3JpcHRvciB9O1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5kaXJlY3RpdmVQcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgcHJvcFBvaW50ZXIgPSBpbnB1dExhYmVscy5oYXMocHJvcE5hbWUpID8gaW5wdXRQcm9wcyA6IG91dHB1dExhYmVscy5oYXMocHJvcE5hbWUpID8gb3V0cHV0UHJvcHMgOiBzdGF0ZVByb3BzO1xuICAgICAgcHJvcFBvaW50ZXJbcHJvcE5hbWVdID0gdGhpcy5kaXJlY3RpdmVQcm9wZXJ0aWVzW3Byb3BOYW1lXTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgb3V0cHV0UHJvcHMsXG4gICAgICBzdGF0ZVByb3BzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==