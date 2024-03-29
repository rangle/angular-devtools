import { mergeFrames } from './frame-merger';
describe('mergeFrames', () => {
    it('should work with empty frames', () => {
        expect(mergeFrames([])).toBeNull();
    });
    it('should work with a single frame', () => {
        const frame = {
            directives: [
                {
                    children: [],
                    directives: [
                        {
                            isComponent: false,
                            isElement: false,
                            lifecycle: {},
                            name: 'Foo',
                        },
                    ],
                },
            ],
            duration: 5,
            source: 'foo',
        };
        const result = mergeFrames([frame]);
        expect(result).toEqual(frame);
        // Should be different reference
        expect(result).not.toBe(frame);
    });
    it('should merge frames when nesting matches', () => {
        const frame = {
            directives: [
                {
                    children: [],
                    directives: [
                        {
                            isComponent: false,
                            isElement: false,
                            lifecycle: {},
                            changeDetection: 10,
                            name: 'Foo',
                        },
                    ],
                },
            ],
            duration: 5,
            source: 'foo',
        };
        const result = mergeFrames([frame, frame]);
        expect(result).toEqual({
            directives: [
                {
                    children: [],
                    directives: [
                        {
                            isComponent: false,
                            isElement: false,
                            lifecycle: {},
                            changeDetection: 20,
                            name: 'Foo',
                        },
                    ],
                },
            ],
            duration: 10,
            source: '',
        });
    });
    it('should merge frames when nesting does not match', () => {
        const frame = {
            directives: [
                {
                    children: [],
                    directives: [
                        {
                            isComponent: false,
                            isElement: false,
                            lifecycle: {},
                            changeDetection: 10,
                            name: 'Foo',
                        },
                    ],
                },
            ],
            duration: 5,
            source: 'foo',
        };
        const frame2 = {
            directives: [
                {
                    children: [
                        {
                            children: [],
                            directives: [
                                {
                                    isComponent: false,
                                    isElement: false,
                                    lifecycle: {},
                                    changeDetection: 10,
                                    name: 'Foo',
                                },
                            ],
                        },
                    ],
                    directives: [
                        {
                            isComponent: false,
                            isElement: false,
                            lifecycle: {},
                            changeDetection: 10,
                            name: 'Foo',
                        },
                    ],
                },
            ],
            duration: 5,
            source: 'foo',
        };
        const result = mergeFrames([frame, frame2]);
        expect(result).toEqual({
            directives: [
                {
                    children: [
                        {
                            children: [],
                            directives: [
                                {
                                    isComponent: false,
                                    isElement: false,
                                    lifecycle: {},
                                    changeDetection: 10,
                                    name: 'Foo',
                                },
                            ],
                        },
                    ],
                    directives: [
                        {
                            isComponent: false,
                            isElement: false,
                            lifecycle: {},
                            changeDetection: 20,
                            name: 'Foo',
                        },
                    ],
                },
            ],
            duration: 10,
            source: '',
        });
    });
});
//# sourceMappingURL=frame-merger.spec.js.map