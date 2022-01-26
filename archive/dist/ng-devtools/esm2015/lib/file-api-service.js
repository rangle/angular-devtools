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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1hcGktc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWRldnRvb2xzL3NyYy9saWIvZmlsZS1hcGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBS3BFLE1BQU0sT0FBTyxjQUFjO0lBSDNCO1FBSUUsaUJBQVksR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztLQXNCNUM7SUFwQkMsaUJBQWlCLENBQUMsV0FBdUI7UUFDdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEIsSUFBSTtnQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxNQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNsRTtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEM7WUFDQSxXQUFXLENBQUMsTUFBYyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxDQUFDLFVBQVUsQ0FBRSxXQUFXLENBQUMsTUFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzdCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsWUFBWSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDbEYsWUFBWSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs0RUF0QlUsY0FBYztvRUFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGYixNQUFNO3VGQUVQLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9JU084NjAxQ29tcGFjdCB9IGZyb20gJy4vdmVuZG9yL2Nocm9taXVtL2RhdGUtdXRpbGl0aWVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVBcGlTZXJ2aWNlIHtcbiAgdXBsb2FkZWREYXRhOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1Ymxpc2hGaWxlVXBsb2FkKHBhcmVudEV2ZW50OiBJbnB1dEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnVwbG9hZGVkRGF0YS5uZXh0KEpTT04ucGFyc2UoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnJlc3VsdCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLnVwbG9hZGVkRGF0YS5uZXh0KHsgZXJyb3I6IGUgfSk7XG4gICAgICB9XG4gICAgICAocGFyZW50RXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUgPSAnJztcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KChwYXJlbnRFdmVudC50YXJnZXQgYXMgYW55KS5maWxlc1swXSk7XG4gIH1cblxuICBzYXZlT2JqZWN0QXNKU09OKG9iamVjdDogb2JqZWN0KTogdm9pZCB7XG4gICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IGBOZ0RldlRvb2xzLVByb2ZpbGUtJHt0b0lTTzg2MDFDb21wYWN0KG5ldyBEYXRlKCkpfS5qc29uYDtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KG9iamVjdCldLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGRvd25sb2FkTGluay5ocmVmKSk7XG4gIH1cbn1cbiJdfQ==