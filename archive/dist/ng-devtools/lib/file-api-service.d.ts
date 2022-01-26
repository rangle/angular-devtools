import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FileApiService {
    uploadedData: Subject<any>;
    publishFileUpload(parentEvent: InputEvent): void;
    saveObjectAsJSON(object: object): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileApiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FileApiService>;
}
