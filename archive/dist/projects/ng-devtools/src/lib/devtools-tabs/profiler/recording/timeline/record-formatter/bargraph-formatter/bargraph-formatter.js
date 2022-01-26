import { __decorate } from "tslib";
import { RecordFormatter } from '../record-formatter';
import memo from 'memo-decorator';
export class BarGraphFormatter extends RecordFormatter {
    formatFrame(frame) {
        const result = [];
        this.addFrame(result, frame.directives);
        return result.filter((element) => element.value > 0).sort((a, b) => b.value - a.value);
    }
    addFrame(nodes, elements, parents = []) {
        let timeSpent = 0;
        elements.forEach((element) => {
            // Possibly undefined because of
            // the insertion on the backend.
            if (!element) {
                console.error('Unable to insert undefined element');
                return;
            }
            timeSpent += this.addFrame(nodes, element.children, parents.concat(element));
            timeSpent += super.getValue(element);
            element.directives.forEach((dir) => {
                const innerNode = {
                    parents,
                    value: super.getDirectiveValue(dir),
                    label: dir.name,
                    original: element,
                };
                nodes.push(innerNode);
            });
        });
        return timeSpent;
    }
}
__decorate([
    memo({ cache: new WeakMap() })
], BarGraphFormatter.prototype, "formatFrame", null);
//# sourceMappingURL=bargraph-formatter.js.map