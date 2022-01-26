export const diff = (differ, a, b) => {
    differ.diff(a);
    differ.diff(b);
    const alreadySet = [];
    const movedItems = [];
    // We first have to set the moved items to their correct positions.
    // Keep in mind that the track by function may not guarantee
    // that we haven't changed any of the items' props.
    differ.forEachMovedItem(record => {
        if (record.currentIndex === null) {
            return;
        }
        if (record.previousIndex === null) {
            return;
        }
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
        }
        else {
            a[record.currentIndex] = {};
        }
        Object.keys(b[record.currentIndex]).forEach(prop => {
            // TypeScript's type inference didn't follow the check from above.
            if (record.currentIndex === null) {
                return;
            }
            a[record.currentIndex][prop] = b[record.currentIndex][prop];
        });
        if (!alreadySet[record.previousIndex]) {
            // tslint:disable-next-line: no-non-null-assertion
            a[record.previousIndex] = null;
        }
        alreadySet[record.currentIndex] = true;
        movedItems.push(a[record.currentIndex]);
    });
    // Now we can set the new items and remove the deleted ones.
    const newItems = [];
    const removedItems = [];
    differ.forEachAddedItem(record => {
        if (record.currentIndex !== null && record.previousIndex === null) {
            a[record.currentIndex] = record.item;
            alreadySet[record.currentIndex] = true;
            newItems.push(record.item);
        }
    });
    differ.forEachRemovedItem(record => {
        if (record.previousIndex === null) {
            return;
        }
        if (record.currentIndex === null && !alreadySet[record.previousIndex]) {
            // tslint:disable-next-line: no-non-null-assertion
            a[record.previousIndex] = null;
        }
        removedItems.push(record.item);
    });
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === null) {
            a.splice(i, 1);
        }
    }
    return { newItems, removedItems, movedItems };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL2RldnRvb2xzLXRhYnMvZGlmZmluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FDbEIsTUFBZ0MsRUFDaEMsQ0FBTSxFQUNOLENBQU0sRUFLTixFQUFFO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFZixNQUFNLFVBQVUsR0FBYyxFQUFFLENBQUM7SUFDakMsTUFBTSxVQUFVLEdBQVEsRUFBRSxDQUFDO0lBRTNCLG1FQUFtRTtJQUNuRSw0REFBNEQ7SUFDNUQsbURBQW1EO0lBQ25ELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMvQixJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ2hDLE9BQU87U0FDUjtRQUNELElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBQ0Qsc0RBQXNEO1FBQ3RELHVEQUF1RDtRQUN2RCxzREFBc0Q7UUFDdEQsc0RBQXNEO1FBQ3RELHNEQUFzRDtRQUN0RCwwREFBMEQ7UUFDMUQseURBQXlEO1FBQ3pELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNyQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEQ7YUFBTTtZQUNMLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBTyxDQUFDO1NBQ2xDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pELGtFQUFrRTtZQUNsRSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUNoQyxPQUFPO2FBQ1I7WUFDRCxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNyQyxrREFBa0Q7WUFDbEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFLLENBQUM7U0FDakM7UUFDRCxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2QyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztJQUVILDREQUE0RDtJQUM1RCxNQUFNLFFBQVEsR0FBUSxFQUFFLENBQUM7SUFDekIsTUFBTSxZQUFZLEdBQVEsRUFBRSxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMvQixJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQ2pFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNyQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2pDLElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDckUsa0RBQWtEO1lBQ2xELENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSyxDQUFDO1NBQ2pDO1FBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO0tBQ0Y7SUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUNoRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZhdWx0SXRlcmFibGVEaWZmZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlZFJlY29yZCB7XG4gIGN1cnJlbnRJbmRleDogbnVtYmVyO1xuICBwcmV2aW91c0luZGV4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBkaWZmID0gPFQ+KFxuICBkaWZmZXI6IERlZmF1bHRJdGVyYWJsZURpZmZlcjxUPixcbiAgYTogVFtdLFxuICBiOiBUW11cbik6IHtcbiAgbmV3SXRlbXM6IFRbXTtcbiAgcmVtb3ZlZEl0ZW1zOiBUW107XG4gIG1vdmVkSXRlbXM6IFRbXTtcbn0gPT4ge1xuICBkaWZmZXIuZGlmZihhKTtcbiAgZGlmZmVyLmRpZmYoYik7XG5cbiAgY29uc3QgYWxyZWFkeVNldDogYm9vbGVhbltdID0gW107XG4gIGNvbnN0IG1vdmVkSXRlbXM6IFRbXSA9IFtdO1xuXG4gIC8vIFdlIGZpcnN0IGhhdmUgdG8gc2V0IHRoZSBtb3ZlZCBpdGVtcyB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9ucy5cbiAgLy8gS2VlcCBpbiBtaW5kIHRoYXQgdGhlIHRyYWNrIGJ5IGZ1bmN0aW9uIG1heSBub3QgZ3VhcmFudGVlXG4gIC8vIHRoYXQgd2UgaGF2ZW4ndCBjaGFuZ2VkIGFueSBvZiB0aGUgaXRlbXMnIHByb3BzLlxuICBkaWZmZXIuZm9yRWFjaE1vdmVkSXRlbShyZWNvcmQgPT4ge1xuICAgIGlmIChyZWNvcmQuY3VycmVudEluZGV4ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZWNvcmQucHJldmlvdXNJbmRleCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBXZSB3YW50IHRvIHByZXNlcnZlIHRoZSByZWZlcmVuY2Ugc28gdGhhdCBhIGRlZmF1bHRcbiAgICAvLyB0cmFjayBieSBmdW5jdGlvbiB1c2VkIGJ5IHRoZSBDREssIGZvciBpbnN0YW5jZSwgY2FuXG4gICAgLy8gcmVjb2duaXplIHRoYXQgdGhpcyBpdGVtJ3MgaWRlbnRpdHkgaGFzbid0IGNoYW5nZWQuXG4gICAgLy8gQXQgdGhlIHNhbWUgdGltZSwgc2luY2Ugd2UgZG9uJ3QgaGF2ZSB0aGUgZ3VhcmFudGVlXG4gICAgLy8gdGhhdCB3ZSBoYXZlbid0IGFscmVhZHkgc2V0IHRoZSBwcmV2aW91c0luZGV4IHdoaWxlXG4gICAgLy8gaXRlcmF0aW5nLCB3ZSBuZWVkIHRvIGNoZWNrIHRoYXQuIElmIHdlIGhhdmUsIHdlIGFzc2lnblxuICAgIC8vIHRoaXMgYXJyYXkgaXRlbSB0byBhIG5ldyBvYmplY3QuIFdlIGRvbid0IHdhbnQgdG8gcmlza1xuICAgIC8vIGNoYW5naW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGFuIG9iamVjdCB3ZSdsbCB1c2UgaW4gdGhlIGZ1dHVyZS5cbiAgICBpZiAoIWFscmVhZHlTZXRbcmVjb3JkLnByZXZpb3VzSW5kZXhdKSB7XG4gICAgICBhW3JlY29yZC5jdXJyZW50SW5kZXhdID0gYVtyZWNvcmQucHJldmlvdXNJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFbcmVjb3JkLmN1cnJlbnRJbmRleF0gPSB7fSBhcyBUO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhiW3JlY29yZC5jdXJyZW50SW5kZXhdKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgLy8gVHlwZVNjcmlwdCdzIHR5cGUgaW5mZXJlbmNlIGRpZG4ndCBmb2xsb3cgdGhlIGNoZWNrIGZyb20gYWJvdmUuXG4gICAgICBpZiAocmVjb3JkLmN1cnJlbnRJbmRleCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhW3JlY29yZC5jdXJyZW50SW5kZXhdW3Byb3BdID0gYltyZWNvcmQuY3VycmVudEluZGV4XVtwcm9wXTtcbiAgICB9KTtcbiAgICBpZiAoIWFscmVhZHlTZXRbcmVjb3JkLnByZXZpb3VzSW5kZXhdKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgYVtyZWNvcmQucHJldmlvdXNJbmRleF0gPSBudWxsITtcbiAgICB9XG4gICAgYWxyZWFkeVNldFtyZWNvcmQuY3VycmVudEluZGV4XSA9IHRydWU7XG4gICAgbW92ZWRJdGVtcy5wdXNoKGFbcmVjb3JkLmN1cnJlbnRJbmRleF0pO1xuICB9KTtcblxuICAvLyBOb3cgd2UgY2FuIHNldCB0aGUgbmV3IGl0ZW1zIGFuZCByZW1vdmUgdGhlIGRlbGV0ZWQgb25lcy5cbiAgY29uc3QgbmV3SXRlbXM6IFRbXSA9IFtdO1xuICBjb25zdCByZW1vdmVkSXRlbXM6IFRbXSA9IFtdO1xuICBkaWZmZXIuZm9yRWFjaEFkZGVkSXRlbShyZWNvcmQgPT4ge1xuICAgIGlmIChyZWNvcmQuY3VycmVudEluZGV4ICE9PSBudWxsICYmIHJlY29yZC5wcmV2aW91c0luZGV4ID09PSBudWxsKSB7XG4gICAgICBhW3JlY29yZC5jdXJyZW50SW5kZXhdID0gcmVjb3JkLml0ZW07XG4gICAgICBhbHJlYWR5U2V0W3JlY29yZC5jdXJyZW50SW5kZXhdID0gdHJ1ZTtcbiAgICAgIG5ld0l0ZW1zLnB1c2gocmVjb3JkLml0ZW0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZGlmZmVyLmZvckVhY2hSZW1vdmVkSXRlbShyZWNvcmQgPT4ge1xuICAgIGlmIChyZWNvcmQucHJldmlvdXNJbmRleCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVjb3JkLmN1cnJlbnRJbmRleCA9PT0gbnVsbCAmJiAhYWxyZWFkeVNldFtyZWNvcmQucHJldmlvdXNJbmRleF0pIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICBhW3JlY29yZC5wcmV2aW91c0luZGV4XSA9IG51bGwhO1xuICAgIH1cbiAgICByZW1vdmVkSXRlbXMucHVzaChyZWNvcmQuaXRlbSk7XG4gIH0pO1xuXG4gIGZvciAobGV0IGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGFbaV0gPT09IG51bGwpIHtcbiAgICAgIGEuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG5ld0l0ZW1zLCByZW1vdmVkSXRlbXMsIG1vdmVkSXRlbXMgfTtcbn07XG4iXX0=