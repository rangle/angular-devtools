import * as highlighter from './highlighter';

describe('highlighter', () => {
  describe('findComponentAndHost', () => {
    it('should return undefined when no node is provided', () => {
      expect(highlighter.findComponentAndHost(undefined)).toBeFalsy();
    });

    it('should return same component and host if component exists', () => {
      (window as any).ng = {
        getComponent: (el: any) => el,
      };
      const element = document.createElement('div');
      const data = highlighter.findComponentAndHost(element as any);
      expect(data.component).toBeTruthy();
      expect(data.host).toBeTruthy();
      expect(data.component).toEqual(data.host);
    });

    it('should return null component and host if component do not exists', () => {
      (window as any).ng = {
        getComponent: () => undefined,
      };
      const element = document.createElement('div');
      const data = highlighter.findComponentAndHost(element as any);
      expect(data.component).toBeFalsy();
      expect(data.host).toBeFalsy();
    });
  });

  describe('getComponentName', () => {
    it('should return null when called with null values', () => {
      let name = highlighter.getComponentName(null);
      expect(name).toBeFalsy();

      name = highlighter.getComponentName(undefined);
      expect(name).toBeFalsy();
    });

    it('should return correct component name', () => {
      const MOCK_COMPONENT = {
        constructor: {
          name: 'mock-component',
        },
      };

      const name = highlighter.getComponentName(MOCK_COMPONENT as any);
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
