import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TodosFilter {
    transform(todos, filter) {
        return (todos || []).filter(t => {
            if (filter === "all" /* All */) {
                return true;
            }
            if (filter === "active" /* Active */ && !t.completed) {
                return true;
            }
            if (filter === "completed" /* Completed */ && t.completed) {
                return true;
            }
            return false;
        });
    }
}
TodosFilter.ɵfac = function TodosFilter_Factory(t) { return new (t || TodosFilter)(); };
TodosFilter.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "todosFilter", type: TodosFilter, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TodosFilter, [{
        type: Pipe,
        args: [{
                pure: false,
                name: 'todosFilter',
            }]
    }], null, null); })();
//# sourceMappingURL=todos.pipe.js.map