import { __decorate } from "tslib";
import { RecordFormatter } from '../record-formatter';
import memo from 'memo-decorator';
export class TreeMapFormatter extends RecordFormatter {
    formatFrame(record) {
        const children = [];
        this.addFrame(children, record.directives);
        const size = children.reduce((accum, curr) => {
            return accum + curr.size;
        }, 0);
        return {
            id: 'Application',
            size,
            value: size,
            children,
            original: null,
        };
    }
    addFrame(nodes, elements, prev = null) {
        elements.forEach((element) => {
            if (!element) {
                console.error('Unable to insert undefined element');
                return;
            }
            const nodeVal = super.getValue(element);
            const node = {
                id: super.getLabel(element),
                size: nodeVal,
                value: nodeVal,
                children: [],
                original: element,
            };
            this.addFrame(node.children, element.children, node);
            if (prev) {
                prev.size += node.size;
            }
            nodes.push(node);
        });
    }
}
__decorate([
    memo({ cache: new WeakMap() })
], TreeMapFormatter.prototype, "formatFrame", null);
//# sourceMappingURL=tree-map-formatter.js.map