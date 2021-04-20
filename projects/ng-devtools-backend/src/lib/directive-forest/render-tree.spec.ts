import { RTreeStrategy } from './render-tree';

describe('render tree extraction', () => {
  let treeStrategy: RTreeStrategy;
  let directiveMap: Map<Node, any[]>;
  let componentMap: Map<Element, any>;

  beforeEach(() => {
    treeStrategy = new RTreeStrategy();
    directiveMap = new Map();
    componentMap = new Map();

    (window as any).ng = {
      getDirectiveMetadata(): void {},
      getComponent(element: Element): any {
        return componentMap.get(element);
      },
      getDirectives(node: Node): any {
        return directiveMap.get(node) || [];
      },
    };
  });

  afterEach(() => delete (window as any).ng);

  it('should detect Angular Ivy apps', () => {
    expect(treeStrategy.supports({})).toBeTrue();
  });

  it('should fail with detection of non-Ivy apps', () => {
    delete (window as any).ng.getDirectiveMetadata;
    expect(treeStrategy.supports({})).toBeFalse();
  });

  it('should extract render tree from an empty element', () => {
    expect(treeStrategy.build(document.createElement('div'))).toEqual([]);
  });

  it('should extract trees without structural directives', () => {
    const appNode = document.createElement('app');
    const childNode = document.createElement('child');
    const childDirectiveNode = document.createElement('div');
    appNode.appendChild(childNode);
    appNode.appendChild(childDirectiveNode);

    const appComponent: any = {};
    const childComponent: any = {};
    const childDirective: any = {};
    componentMap.set(appNode, appComponent);
    componentMap.set(childNode, childComponent);
    directiveMap.set(childDirectiveNode, [childDirective]);

    const rtree = treeStrategy.build(appNode);
    expect(rtree.length).toBe(1);
    expect(rtree[0].children.length).toBe(2);
    expect(rtree[0].children[0].component?.instance).toBe(childComponent);
    expect(rtree[0].children[1].component).toBe(null);
    expect(rtree[0].children[1].directives[0].instance).toBe(childDirective);
  });

  it('should skip nodes without directives', () => {
    const appNode = document.createElement('app');
    const childNode = document.createElement('div');
    const childComponentNode = document.createElement('child');
    appNode.appendChild(childNode);
    childNode.appendChild(childComponentNode);

    const appComponent: any = {};
    const childComponent: any = {};
    componentMap.set(appNode, appComponent);
    componentMap.set(childComponentNode, childComponent);

    const rtree = treeStrategy.build(appNode);
    expect(rtree[0].children.length).toBe(1);
    expect(rtree[0].children[0].children.length).toBe(0);
  });
});
