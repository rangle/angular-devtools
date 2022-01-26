// works with arrays of string, numbers and booleans
export const arrayEquals = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    if (a.length === 0) {
        return b.length === 0;
    }
    let equal;
    for (let i = 0; i < a.length; i++) {
        equal = i === 0 ? a[i] === b[i] : a[i] === b[i] && equal;
        if (!equal) {
            break;
        }
    }
    return equal;
};
//# sourceMappingURL=shared-utils.js.map