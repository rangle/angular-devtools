import * as highlighter from './highlighter';
describe('highlighter', () => {
    describe('findComponentAndHost', () => {
        it('should return undefined when no node is provided', () => {
            expect(highlighter.findComponentAndHost(undefined)).toEqual({ component: null, host: null });
        });
        it('should return same component and host if component exists', () => {
            window.ng = {
                getComponent: (el) => el,
            };
            const element = document.createElement('div');
            const data = highlighter.findComponentAndHost(element);
            expect(data.component).toBeTruthy();
            expect(data.host).toBeTruthy();
            expect(data.component).toEqual(data.host);
        });
        it('should return null component and host if component do not exists', () => {
            window.ng = {
                getComponent: () => undefined,
            };
            const element = document.createElement('div');
            const data = highlighter.findComponentAndHost(element);
            expect(data.component).toBeFalsy();
            expect(data.host).toBeFalsy();
        });
    });
    describe('getComponentName', () => {
        it('should return null when called with null values', () => {
            let name = highlighter.getDirectiveName(null);
            expect(name).toBe('unknown');
            name = highlighter.getDirectiveName(undefined);
            expect(name).toBe('unknown');
        });
        it('should return correct component name', () => {
            const MOCK_COMPONENT = {
                constructor: {
                    name: 'mock-component',
                },
            };
            const name = highlighter.getDirectiveName(MOCK_COMPONENT);
            expect(name).toBe(MOCK_COMPONENT.constructor.name);
        });
    });
    describe('inDoc', () => {
        it('should return false if no node is provided', () => {
            expect(highlighter.inDoc(undefined)).toBeFalsy();
        });
        it('should be true if doc and node are equal', () => {
            const node = {
                parentNode: {},
                ownerDocument: {
                    documentElement: {},
                },
            };
            node.ownerDocument.documentElement = node;
            expect(highlighter.inDoc(node)).toBeTruthy();
        });
        it('should be true if doc and parent are equal', () => {
            const node = {
                parentNode: 'node',
                ownerDocument: {
                    documentElement: 'node',
                },
            };
            expect(highlighter.inDoc(node)).toBeTruthy();
        });
        it('should be true if doc contains parent', () => {
            const node = {
                parentNode: {
                    nodeType: 1,
                },
                ownerDocument: {
                    documentElement: {
                        contains: () => true,
                    },
                },
            };
            expect(highlighter.inDoc(node)).toBeTruthy();
        });
    });
});
//# sourceMappingURL=highlighter.spec.js.map