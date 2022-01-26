export const arrayifyProps = (props, parent = null) => Object.keys(props)
    .map((name) => ({ name, descriptor: props[name], parent }))
    .sort((a, b) => {
    const parsedA = parseInt(a.name, 10);
    const parsedB = parseInt(b.name, 10);
    if (isNaN(parsedA) || isNaN(parsedB)) {
        return a.name > b.name ? 1 : -1;
    }
    return parsedA - parsedB;
});
//# sourceMappingURL=arrayify-props.js.map