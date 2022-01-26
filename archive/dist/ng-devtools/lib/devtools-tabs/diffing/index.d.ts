import { DefaultIterableDiffer } from '@angular/core';
export interface MovedRecord {
    currentIndex: number;
    previousIndex: number;
}
export declare const diff: <T>(differ: DefaultIterableDiffer<T>, a: T[], b: T[]) => {
    newItems: T[];
    removedItems: T[];
    movedItems: T[];
};
