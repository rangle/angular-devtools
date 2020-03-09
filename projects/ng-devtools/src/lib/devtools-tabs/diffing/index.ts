import { DefaultIterableDiffer } from '@angular/core';

export interface MovedRecord {
  currentIndex: number;
  previousIndex: number;
}

export const diff = <T>(differ: DefaultIterableDiffer<T>, a: T[], b: T[]) => {
  differ.diff(a);
  differ.diff(b);

  const alreadySet = [];

  // We first have to set the moved items to their correct positions.
  // Keep in mind that the track by function may not guarantee
  // that we haven't changed any of the items' props.
  differ.forEachMovedItem(record => {
    // We want to preserve the reference so that a default
    // track by function used by the CDK, for instance, can
    // recognize that this item's identity hasn't changed.
    // At the same time, since we don't have the guarantee
    // that we haven't already set the previousIndex while
    // iterating, we need to check that. If we have, we assign
    // this array item to a new object. We don't want to risk
    // changing the properties of an object we'll use in the future.
    if (!alreadySet[record.previousIndex]) {
      a[record.currentIndex] = a[record.previousIndex];
    } else {
      a[record.currentIndex] = {} as T;
    }
    Object.keys(b[record.currentIndex]).forEach(prop => {
      a[record.currentIndex][prop] = b[record.currentIndex][prop];
    });
    if (!alreadySet[record.previousIndex]) {
      a[record.previousIndex] = null;
    }
    alreadySet[record.currentIndex] = true;
  });

  // Now we can set the new items and remove the deleted ones.
  const newItems: T[] = [];
  const removedItems: T[] = [];
  differ.forEachAddedItem(record => {
    if (record.currentIndex !== null && record.previousIndex === null) {
      a[record.currentIndex] = record.item;
      alreadySet[record.currentIndex] = true;
      newItems.push(record.item);
    }
  });

  differ.forEachRemovedItem(record => {
    if (record.currentIndex === null && !alreadySet[record.previousIndex]) {
      a[record.previousIndex] = null;
    }
    removedItems.push(record.item);
  });

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === null) {
      a.splice(i, 1);
    }
  }

  return { newItems, removedItems };
};
