export const SIMPLE_RECORD = [
    {
        children: [
            {
                children: [],
                directives: [
                    {
                        isComponent: false,
                        isElement: false,
                        name: 'TooltipDirective',
                        lifecycle: {},
                        changeDetection: 5,
                        changeDetected: true,
                    },
                    {
                        changeDetection: 5,
                        isElement: false,
                        isComponent: true,
                        lifecycle: {},
                        name: 'TodoComponent',
                        changeDetected: true,
                    },
                ],
            },
        ],
        directives: [
            {
                isComponent: false,
                isElement: false,
                name: 'NgForOf',
                changeDetected: false,
                lifecycle: { ngDoCheck: 7 },
                changeDetection: 0,
            },
        ],
    },
];
export const SIMPLE_FORMATTED_FLAMEGRAPH_RECORD = [
    {
        value: 7,
        label: '[NgForOf]',
        changeDetected: false,
        children: [
            {
                value: 10,
                label: 'TodoComponent[TooltipDirective]',
                children: [],
                instances: 1,
                original: SIMPLE_RECORD[0].children[0],
                changeDetected: true,
            },
        ],
        instances: 1,
        original: SIMPLE_RECORD[0],
    },
];
export const SIMPLE_FORMATTED_TREE_MAP_RECORD = [
    Object({
        id: '[NgForOf]',
        size: 17,
        value: 7,
        children: [
            Object({
                id: 'TodoComponent[TooltipDirective]',
                size: 10,
                value: 10,
                children: [],
                original: SIMPLE_RECORD[0].children[0],
            }),
        ],
        original: SIMPLE_RECORD[0],
    }),
];
export const NESTED_RECORD = [
    {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            {
                                                                children: [
                                                                    {
                                                                        children: [],
                                                                        directives: [
                                                                            {
                                                                                isComponent: false,
                                                                                isElement: false,
                                                                                name: 'TooltipDirective',
                                                                                lifecycle: {},
                                                                                changeDetection: 0,
                                                                            },
                                                                            {
                                                                                changeDetection: 0,
                                                                                isElement: false,
                                                                                isComponent: true,
                                                                                lifecycle: {},
                                                                                name: 'TodoComponent',
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        children: [],
                                                                        directives: [
                                                                            {
                                                                                isComponent: false,
                                                                                isElement: false,
                                                                                name: 'TooltipDirective',
                                                                                lifecycle: {},
                                                                                changeDetection: 0,
                                                                            },
                                                                            {
                                                                                changeDetection: 0,
                                                                                isElement: false,
                                                                                isComponent: true,
                                                                                lifecycle: {},
                                                                                name: 'TodoComponent',
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        children: [],
                                                                        directives: [
                                                                            {
                                                                                isComponent: false,
                                                                                isElement: false,
                                                                                name: 'TooltipDirective',
                                                                                lifecycle: {},
                                                                                changeDetection: 0,
                                                                            },
                                                                            {
                                                                                changeDetection: 0,
                                                                                isElement: false,
                                                                                isComponent: true,
                                                                                lifecycle: {},
                                                                                name: 'TodoComponent',
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                                directives: [
                                                                    {
                                                                        isComponent: false,
                                                                        isElement: false,
                                                                        name: 'NgForOf',
                                                                        lifecycle: { ngDoCheck: 7 },
                                                                        changeDetection: 0,
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                        directives: [
                                                            {
                                                                changeDetection: 9,
                                                                isElement: false,
                                                                isComponent: true,
                                                                lifecycle: {},
                                                                name: 'TodosComponent',
                                                            },
                                                        ],
                                                    },
                                                ],
                                                directives: [
                                                    {
                                                        isComponent: false,
                                                        isElement: false,
                                                        name: 'RouterOutlet',
                                                        lifecycle: {},
                                                        changeDetection: 0,
                                                    },
                                                ],
                                            },
                                        ],
                                        directives: [
                                            {
                                                changeDetection: 1,
                                                isElement: false,
                                                isComponent: true,
                                                lifecycle: {},
                                                name: 'AppComponent',
                                            },
                                        ],
                                    },
                                ],
                                directives: [
                                    { isComponent: false, isElement: false, name: 'RouterOutlet', lifecycle: {}, changeDetection: 0 },
                                ],
                            },
                            {
                                children: [],
                                directives: [
                                    {
                                        changeDetection: 1,
                                        isElement: false,
                                        isComponent: true,
                                        lifecycle: {},
                                        name: 'HeavyComponent',
                                    },
                                ],
                            },
                        ],
                        directives: [
                            {
                                changeDetection: 1,
                                isElement: false,
                                isComponent: true,
                                lifecycle: {},
                                name: 'DemoAppComponent',
                            },
                        ],
                    },
                ],
                directives: [{ isComponent: false, isElement: false, name: 'RouterOutlet', lifecycle: {}, changeDetection: 0 }],
            },
        ],
        directives: [
            {
                changeDetection: 1,
                isElement: false,
                isComponent: true,
                lifecycle: {},
                name: 'AppComponent',
            },
        ],
    },
    {
        children: [],
        directives: [
            {
                changeDetection: 1,
                isElement: true,
                isComponent: true,
                lifecycle: {},
                name: 'ZippyComponent',
            },
        ],
    },
];
export const NESTED_FORMATTED_FLAMEGRAPH_RECORD = [
    {
        value: 1,
        label: 'AppComponent',
        changeDetected: true,
        children: [
            {
                value: 0,
                label: '[RouterOutlet]',
                changeDetected: false,
                children: [
                    {
                        value: 1,
                        label: 'DemoAppComponent',
                        changeDetected: true,
                        children: [
                            {
                                value: 0,
                                label: '[RouterOutlet]',
                                changeDetected: false,
                                children: [
                                    {
                                        value: 1,
                                        label: 'AppComponent',
                                        changeDetected: true,
                                        children: [
                                            {
                                                value: 0,
                                                label: '[RouterOutlet]',
                                                changeDetected: false,
                                                children: [
                                                    {
                                                        value: 9,
                                                        label: 'TodosComponent',
                                                        changeDetected: true,
                                                        children: [
                                                            {
                                                                value: 7,
                                                                label: '[NgForOf]',
                                                                changeDetected: false,
                                                                children: [
                                                                    {
                                                                        value: 0,
                                                                        label: 'TodoComponent[TooltipDirective]',
                                                                        changeDetected: true,
                                                                        children: [],
                                                                        instances: 1,
                                                                        original: NESTED_RECORD[0].children[0].children[0].children[0].children[0].children[0]
                                                                            .children[0].children[0].children[0],
                                                                    },
                                                                    {
                                                                        value: 0,
                                                                        label: 'TodoComponent[TooltipDirective]',
                                                                        changeDetected: true,
                                                                        children: [],
                                                                        instances: 1,
                                                                        original: NESTED_RECORD[0].children[0].children[0].children[0].children[0].children[0]
                                                                            .children[0].children[0].children[1],
                                                                    },
                                                                    {
                                                                        value: 0,
                                                                        label: 'TodoComponent[TooltipDirective]',
                                                                        changeDetected: true,
                                                                        children: [],
                                                                        instances: 1,
                                                                        original: NESTED_RECORD[0].children[0].children[0].children[0].children[0].children[0]
                                                                            .children[0].children[0].children[2],
                                                                    },
                                                                ],
                                                                instances: 1,
                                                                original: NESTED_RECORD[0].children[0].children[0].children[0].children[0].children[0]
                                                                    .children[0].children[0],
                                                            },
                                                        ],
                                                        instances: 1,
                                                        original: NESTED_RECORD[0].children[0].children[0].children[0].children[0].children[0].children[0],
                                                    },
                                                ],
                                                instances: 1,
                                                original: NESTED_RECORD[0].children[0].children[0].children[0].children[0].children[0],
                                            },
                                        ],
                                        instances: 1,
                                        original: NESTED_RECORD[0].children[0].children[0].children[0].children[0],
                                    },
                                ],
                                instances: 1,
                                original: NESTED_RECORD[0].children[0].children[0].children[0],
                            },
                            {
                                value: 1,
                                label: 'HeavyComponent',
                                changeDetected: true,
                                children: [],
                                instances: 1,
                                original: NESTED_RECORD[0].children[0].children[0].children[1],
                            },
                        ],
                        instances: 1,
                        original: NESTED_RECORD[0].children[0].children[0],
                    },
                ],
                instances: 1,
                original: NESTED_RECORD[0].children[0],
            },
        ],
        instances: 1,
        original: NESTED_RECORD[0],
    },
    {
        value: 1,
        label: 'ZippyComponent',
        children: [],
        changeDetected: true,
        instances: 1,
        original: {
            children: [],
            directives: [
                {
                    changeDetection: 1,
                    isElement: true,
                    isComponent: true,
                    lifecycle: {},
                    name: 'ZippyComponent',
                },
            ],
        },
    },
];
//# sourceMappingURL=record-formatter-spec-constants.js.map