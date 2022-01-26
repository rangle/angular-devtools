import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SamplePipe {
    transform(val) {
        return val;
    }
    ngOnDestroy() {
        console.log('Destroying');
    }
}
SamplePipe.ɵfac = function SamplePipe_Factory(t) { return new (t || SamplePipe)(); };
SamplePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "sample", type: SamplePipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SamplePipe, [{
        type: Pipe,
        args: [{
                name: 'sample',
                pure: false,
            }]
    }], null, null); })();
//# sourceMappingURL=sample.pipe.js.map