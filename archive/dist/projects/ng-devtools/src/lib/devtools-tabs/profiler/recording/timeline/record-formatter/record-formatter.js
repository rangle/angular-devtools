export class RecordFormatter {
    getLabel(element) {
        const name = element.directives
            .filter((d) => d.isComponent)
            .map((c) => c.name)
            .join(', ');
        const attributes = [...new Set(element.directives.filter((d) => !d.isComponent).map((d) => d.name))].join(', ');
        return attributes === '' ? name : `${name}[${attributes}]`;
    }
    getValue(element) {
        let result = 0;
        element.directives.forEach((dir) => {
            result += this.getDirectiveValue(dir);
        });
        return result;
    }
    getDirectiveValue(directive) {
        let result = 0;
        let current = directive.changeDetection;
        if (current === undefined) {
            current = 0;
        }
        result += current;
        Object.keys(directive.lifecycle).forEach((key) => {
            const value = parseFloat(directive.lifecycle[key]);
            if (!isNaN(value)) {
                result += value;
            }
        });
        return result;
    }
}
//# sourceMappingURL=record-formatter.js.map