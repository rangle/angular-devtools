// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * @param date to convert to a compact ISO8601 format
 * @return date in a compact ISO8601 format
 */
export const toISO8601Compact = (date) => {
    /*
     * @param x an integer to append a leading 0 to if less than 9
     * @return x with a leading 0 appended if less than 9
     */
    function leadZero(x) {
        return (x > 9 ? '' : '0') + x;
    }
    return (date.getFullYear() +
        leadZero(date.getMonth() + 1) +
        leadZero(date.getDate()) +
        'T' +
        leadZero(date.getHours()) +
        leadZero(date.getMinutes()) +
        leadZero(date.getSeconds()));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS11dGlsaXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1kZXZ0b29scy9zcmMvbGliL3ZlbmRvci9jaHJvbWl1bS9kYXRlLXV0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRUFBZ0U7QUFDaEUseUVBQXlFO0FBQ3pFLDZCQUE2QjtBQUU3Qjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQVUsRUFBVSxFQUFFO0lBQ3JEOzs7T0FHRztJQUNILFNBQVMsUUFBUSxDQUFDLENBQVM7UUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxPQUFPLENBQ0wsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLEdBQUc7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUM1QixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuLypcbiAqIEBwYXJhbSBkYXRlIHRvIGNvbnZlcnQgdG8gYSBjb21wYWN0IElTTzg2MDEgZm9ybWF0XG4gKiBAcmV0dXJuIGRhdGUgaW4gYSBjb21wYWN0IElTTzg2MDEgZm9ybWF0XG4gKi9cbmV4cG9ydCBjb25zdCB0b0lTTzg2MDFDb21wYWN0ID0gKGRhdGU6IERhdGUpOiBzdHJpbmcgPT4ge1xuICAvKlxuICAgKiBAcGFyYW0geCBhbiBpbnRlZ2VyIHRvIGFwcGVuZCBhIGxlYWRpbmcgMCB0byBpZiBsZXNzIHRoYW4gOVxuICAgKiBAcmV0dXJuIHggd2l0aCBhIGxlYWRpbmcgMCBhcHBlbmRlZCBpZiBsZXNzIHRoYW4gOVxuICAgKi9cbiAgZnVuY3Rpb24gbGVhZFplcm8oeDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHggPiA5ID8gJycgOiAnMCcpICsgeDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpICtcbiAgICBsZWFkWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSArXG4gICAgbGVhZFplcm8oZGF0ZS5nZXREYXRlKCkpICtcbiAgICAnVCcgK1xuICAgIGxlYWRaZXJvKGRhdGUuZ2V0SG91cnMoKSkgK1xuICAgIGxlYWRaZXJvKGRhdGUuZ2V0TWludXRlcygpKSArXG4gICAgbGVhZFplcm8oZGF0ZS5nZXRTZWNvbmRzKCkpXG4gICk7XG59O1xuIl19