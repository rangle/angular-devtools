import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, merge } from 'rxjs';
import { MatTreeFlattener } from '@angular/material/tree';
import { map } from 'rxjs/operators';
import { DefaultIterableDiffer } from '@angular/core';
import { indexForest } from './index-forest';
import { diff } from '../../diffing';
const expandable = (node) => !!node.children && node.children.length > 0;
const trackBy = (_, item) => `${item.id}#${item.expandable}`;
const getId = (node) => {
    let prefix = '';
    if (node.component) {
        prefix = node.component.id.toString();
    }
    const dirIds = node.directives
        .map((d) => d.id)
        .sort((a, b) => {
        return a - b;
    });
    return prefix + '-' + dirIds.join('-');
};
export class ComponentDataSource extends DataSource {
    constructor(_treeControl) {
        super();
        this._treeControl = _treeControl;
        this._differ = new DefaultIterableDiffer(trackBy);
        this._expandedData = new BehaviorSubject([]);
        this._flattenedData = new BehaviorSubject([]);
        this._nodeToFlat = new WeakMap();
        this._treeFlattener = new MatTreeFlattener((node, level) => {
            if (this._nodeToFlat.has(node)) {
                return this._nodeToFlat.get(node);
            }
            const flatNode = {
                expandable: expandable(node),
                id: getId(node),
                // We can compare the nodes in the navigation functions above
                // based on this identifier directly, since it's a reference type
                // and the reference is preserved after transformation.
                position: node.position,
                name: node.component ? node.component.name : node.element,
                directives: node.directives.map((d) => d.name).join(', '),
                original: node,
                level,
            };
            this._nodeToFlat.set(node, flatNode);
            return flatNode;
        }, (node) => (node ? node.level : -1), (node) => (node ? node.expandable : false), (node) => (node ? node.children : []));
    }
    get data() {
        return this._flattenedData.value;
    }
    get expandedDataValues() {
        return this._expandedData.value;
    }
    getFlatNodeFromIndexedNode(indexedNode) {
        return this._nodeToFlat.get(indexedNode);
    }
    update(forest) {
        if (!forest) {
            return { newItems: [], movedItems: [], removedItems: [] };
        }
        const indexedForest = indexForest(forest);
        const flattenedCollection = this._treeFlattener.flattenNodes(indexedForest);
        this.data.forEach((i) => (i.newItem = false));
        const expandedNodes = {};
        this.data.forEach((item) => {
            expandedNodes[item.id] = this._treeControl.isExpanded(item);
        });
        const { newItems, movedItems, removedItems } = diff(this._differ, this.data, flattenedCollection);
        this._treeControl.dataNodes = this.data;
        this._flattenedData.next(this.data);
        movedItems.forEach((i) => {
            this._nodeToFlat.set(i.original, i);
            if (expandedNodes[i.id]) {
                this._treeControl.expand(i);
            }
        });
        newItems.forEach((i) => (i.newItem = true));
        removedItems.forEach((i) => this._nodeToFlat.delete(i.original));
        return { newItems, movedItems, removedItems };
    }
    connect(collectionViewer) {
        const changes = [collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData];
        return merge(...changes).pipe(map(() => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this.data, this._treeControl));
            return this._expandedData.value;
        }));
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWRhdGEtc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZGV2dG9vbHMvc3JjL2xpYi9kZXZ0b29scy10YWJzL2RpcmVjdGl2ZS1leHBsb3Jlci9kaXJlY3RpdmUtZm9yZXN0L2NvbXBvbmVudC1kYXRhLXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQW9CLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFlLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjckMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFdEYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFTLEVBQUUsSUFBYyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRS9FLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBaUIsRUFBRSxFQUFFO0lBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbEIsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFB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JztcbmltcG9ydCB7IENvbGxlY3Rpb25WaWV3ZXIsIERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWF0VHJlZUZsYXR0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHsgRmxhdFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGVmYXVsdEl0ZXJhYmxlRGlmZmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkTm9kZSwgaW5kZXhGb3Jlc3QgfSBmcm9tICcuL2luZGV4LWZvcmVzdCc7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi4vLi4vZGlmZmluZyc7XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGbGF0Tm9kZSB7XG4gIGlkOiBzdHJpbmc7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgZGlyZWN0aXZlczogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyW107XG4gIGxldmVsOiBudW1iZXI7XG4gIG9yaWdpbmFsOiBJbmRleGVkTm9kZTtcbiAgbmV3SXRlbT86IGJvb2xlYW47XG59XG5cbmNvbnN0IGV4cGFuZGFibGUgPSAobm9kZTogSW5kZXhlZE5vZGUpID0+ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG5cbmNvbnN0IHRyYWNrQnkgPSAoXzogbnVtYmVyLCBpdGVtOiBGbGF0Tm9kZSkgPT4gYCR7aXRlbS5pZH0jJHtpdGVtLmV4cGFuZGFibGV9YDtcblxuY29uc3QgZ2V0SWQgPSAobm9kZTogSW5kZXhlZE5vZGUpID0+IHtcbiAgbGV0IHByZWZpeCA9ICcnO1xuICBpZiAobm9kZS5jb21wb25lbnQpIHtcbiAgICBwcmVmaXggPSBub2RlLmNvbXBvbmVudC5pZC50b1N0cmluZygpO1xuICB9XG4gIGNvbnN0IGRpcklkcyA9IG5vZGUuZGlyZWN0aXZlc1xuICAgIC5tYXAoKGQpID0+IGQuaWQpXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgcmV0dXJuIHByZWZpeCArICctJyArIGRpcklkcy5qb2luKCctJyk7XG59O1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8RmxhdE5vZGU+IHtcbiAgcHJpdmF0ZSBfZGlmZmVyID0gbmV3IERlZmF1bHRJdGVyYWJsZURpZmZlcih0cmFja0J5KTtcbiAgcHJpdmF0ZSBfZXhwYW5kZWREYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGbGF0Tm9kZVtdPihbXSk7XG4gIHByaXZhdGUgX2ZsYXR0ZW5lZERhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZsYXROb2RlW10+KFtdKTtcbiAgcHJpdmF0ZSBfbm9kZVRvRmxhdCA9IG5ldyBXZWFrTWFwPEluZGV4ZWROb2RlLCBGbGF0Tm9kZT4oKTtcblxuICBwcml2YXRlIF90cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIoXG4gICAgKG5vZGU6IEluZGV4ZWROb2RlLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5fbm9kZVRvRmxhdC5oYXMobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGVUb0ZsYXQuZ2V0KG5vZGUpO1xuICAgICAgfVxuICAgICAgY29uc3QgZmxhdE5vZGU6IEZsYXROb2RlID0ge1xuICAgICAgICBleHBhbmRhYmxlOiBleHBhbmRhYmxlKG5vZGUpLFxuICAgICAgICBpZDogZ2V0SWQobm9kZSksXG4gICAgICAgIC8vIFdlIGNhbiBjb21wYXJlIHRoZSBub2RlcyBpbiB0aGUgbmF2aWdhdGlvbiBmdW5jdGlvbnMgYWJvdmVcbiAgICAgICAgLy8gYmFzZWQgb24gdGhpcyBpZGVudGlmaWVyIGRpcmVjdGx5LCBzaW5jZSBpdCdzIGEgcmVmZXJlbmNlIHR5cGVcbiAgICAgICAgLy8gYW5kIHRoZSByZWZlcmVuY2UgaXMgcHJlc2VydmVkIGFmdGVyIHRyYW5zZm9ybWF0aW9uLlxuICAgICAgICBwb3NpdGlvbjogbm9kZS5wb3NpdGlvbixcbiAgICAgICAgbmFtZTogbm9kZS5jb21wb25lbnQgPyBub2RlLmNvbXBvbmVudC5uYW1lIDogbm9kZS5lbGVtZW50LFxuICAgICAgICBkaXJlY3RpdmVzOiBub2RlLmRpcmVjdGl2ZXMubWFwKChkKSA9PiBkLm5hbWUpLmpvaW4oJywgJyksXG4gICAgICAgIG9yaWdpbmFsOiBub2RlLFxuICAgICAgICBsZXZlbCxcbiAgICAgIH07XG4gICAgICB0aGlzLl9ub2RlVG9GbGF0LnNldChub2RlLCBmbGF0Tm9kZSk7XG4gICAgICByZXR1cm4gZmxhdE5vZGU7XG4gICAgfSxcbiAgICAobm9kZSkgPT4gKG5vZGUgPyBub2RlLmxldmVsIDogLTEpLFxuICAgIChub2RlKSA9PiAobm9kZSA/IG5vZGUuZXhwYW5kYWJsZSA6IGZhbHNlKSxcbiAgICAobm9kZSkgPT4gKG5vZGUgPyBub2RlLmNoaWxkcmVuIDogW10pXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxGbGF0Tm9kZT4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogRmxhdE5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZsYXR0ZW5lZERhdGEudmFsdWU7XG4gIH1cblxuICBnZXQgZXhwYW5kZWREYXRhVmFsdWVzKCk6IEZsYXROb2RlW10ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRlZERhdGEudmFsdWU7XG4gIH1cblxuICBnZXRGbGF0Tm9kZUZyb21JbmRleGVkTm9kZShpbmRleGVkTm9kZTogSW5kZXhlZE5vZGUpOiBGbGF0Tm9kZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVUb0ZsYXQuZ2V0KGluZGV4ZWROb2RlKTtcbiAgfVxuXG4gIHVwZGF0ZShmb3Jlc3Q6IERldlRvb2xzTm9kZVtdKTogeyBuZXdJdGVtczogRmxhdE5vZGVbXTsgbW92ZWRJdGVtczogRmxhdE5vZGVbXTsgcmVtb3ZlZEl0ZW1zOiBGbGF0Tm9kZVtdIH0ge1xuICAgIGlmICghZm9yZXN0KSB7XG4gICAgICByZXR1cm4geyBuZXdJdGVtczogW10sIG1vdmVkSXRlbXM6IFtdLCByZW1vdmVkSXRlbXM6IFtdIH07XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXhlZEZvcmVzdCA9IGluZGV4Rm9yZXN0KGZvcmVzdCk7XG4gICAgY29uc3QgZmxhdHRlbmVkQ29sbGVjdGlvbiA9IHRoaXMuX3RyZWVGbGF0dGVuZXIuZmxhdHRlbk5vZGVzKGluZGV4ZWRGb3Jlc3QpIGFzIEZsYXROb2RlW107XG5cbiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoaSkgPT4gKGkubmV3SXRlbSA9IGZhbHNlKSk7XG5cbiAgICBjb25zdCBleHBhbmRlZE5vZGVzID0ge307XG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGV4cGFuZGVkTm9kZXNbaXRlbS5pZF0gPSB0aGlzLl90cmVlQ29udHJvbC5pc0V4cGFuZGVkKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgeyBuZXdJdGVtcywgbW92ZWRJdGVtcywgcmVtb3ZlZEl0ZW1zIH0gPSBkaWZmPEZsYXROb2RlPih0aGlzLl9kaWZmZXIsIHRoaXMuZGF0YSwgZmxhdHRlbmVkQ29sbGVjdGlvbik7XG4gICAgdGhpcy5fdHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gdGhpcy5kYXRhO1xuICAgIHRoaXMuX2ZsYXR0ZW5lZERhdGEubmV4dCh0aGlzLmRhdGEpO1xuXG4gICAgbW92ZWRJdGVtcy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICB0aGlzLl9ub2RlVG9GbGF0LnNldChpLm9yaWdpbmFsLCBpKTtcbiAgICAgIGlmIChleHBhbmRlZE5vZGVzW2kuaWRdKSB7XG4gICAgICAgIHRoaXMuX3RyZWVDb250cm9sLmV4cGFuZChpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuZXdJdGVtcy5mb3JFYWNoKChpKSA9PiAoaS5uZXdJdGVtID0gdHJ1ZSkpO1xuICAgIHJlbW92ZWRJdGVtcy5mb3JFYWNoKChpKSA9PiB0aGlzLl9ub2RlVG9GbGF0LmRlbGV0ZShpLm9yaWdpbmFsKSk7XG5cbiAgICByZXR1cm4geyBuZXdJdGVtcywgbW92ZWRJdGVtcywgcmVtb3ZlZEl0ZW1zIH07XG4gIH1cblxuICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPEZsYXROb2RlW10+IHtcbiAgICBjb25zdCBjaGFuZ2VzID0gW2NvbGxlY3Rpb25WaWV3ZXIudmlld0NoYW5nZSwgdGhpcy5fdHJlZUNvbnRyb2wuZXhwYW5zaW9uTW9kZWwuY2hhbmdlZCwgdGhpcy5fZmxhdHRlbmVkRGF0YV07XG4gICAgcmV0dXJuIG1lcmdlKC4uLmNoYW5nZXMpLnBpcGUoXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICB0aGlzLl9leHBhbmRlZERhdGEubmV4dCh0aGlzLl90cmVlRmxhdHRlbmVyLmV4cGFuZEZsYXR0ZW5lZE5vZGVzKHRoaXMuZGF0YSwgdGhpcy5fdHJlZUNvbnRyb2wpIGFzIEZsYXROb2RlW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWREYXRhLnZhbHVlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHt9XG59XG4iXX0=