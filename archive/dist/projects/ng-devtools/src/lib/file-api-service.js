import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { toISO8601Compact } from './vendor/chromium/date-utilities';
import * as i0 from "@angular/core";
export class FileApiService {
    constructor() {
        this.uploadedData = new Subject();
    }
    publishFileUpload(parentEvent) {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                this.uploadedData.next(JSON.parse(event.target.result));
            }
            catch (e) {
                this.uploadedData.next({ error: e });
            }
            parentEvent.target.value = '';
        };
        reader.readAsText(parentEvent.target.files[0]);
    }
    saveObjectAsJSON(object) {
        const downloadLink = document.createElement('a');
        downloadLink.download = `NgDevTools-Profile-${toISO8601Compact(new Date())}.json`;
        downloadLink.href = URL.createObjectURL(new Blob([JSON.stringify(object)], { type: 'application/json' }));
        downloadLink.click();
        setTimeout(() => URL.revokeObjectURL(downloadLink.href));
    }
}
FileApiService.ɵfac = function FileApiService_Factory(t) { return new (t || FileApiService)(); };
FileApiService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FileApiService, factory: FileApiService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=file-api-service.js.map