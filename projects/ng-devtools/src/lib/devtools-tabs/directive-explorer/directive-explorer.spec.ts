import { DirectiveExplorerComponent } from './directive-explorer.component';
import { ComponentExplorerViewQuery } from 'protocol';
import { IndexedNode } from './directive-forest/index-forest';
import SpyObj = jasmine.SpyObj;
import Spy = jasmine.Spy;

describe('DirectiveExplorerComponent', () => {
  let messageBusMock;
  let comp: DirectiveExplorerComponent;
  let applicationOperationsSpy;
  let snackBarSpy;

  beforeEach(() => {
    applicationOperationsSpy = jasmine.createSpyObj('_appOperations', ['viewSource', 'selectDomElement']);
    snackBarSpy = jasmine.createSpyObj('_snackBar', ['show']);
    comp = new DirectiveExplorerComponent(applicationOperationsSpy, snackBarSpy);
    messageBusMock = jasmine.createSpyObj('messageBus', ['on', 'once', 'emit', 'destroy']);
    comp.messageBus = messageBusMock;
  });

  it('should create instance from class', () => {
    expect(comp).toBeTruthy();
  });

  it('subscribe to backend events', () => {
    comp.subscribeToBackendEvents();
    expect(comp.messageBus.on).toHaveBeenCalledTimes(5);
    expect(comp.messageBus.on).toHaveBeenCalledWith('elementDirectivesProperties', jasmine.any(Function));
    expect(comp.messageBus.on).toHaveBeenCalledWith('latestComponentExplorerView', jasmine.any(Function));
    expect(comp.messageBus.on).toHaveBeenCalledWith('highlightComponentInTreeFromElement', jasmine.any(Function));
    expect(comp.messageBus.on).toHaveBeenCalledWith('removeHighlightFromComponentTree', jasmine.any(Function));
  });

  describe('refresh', () => {
    it('should emit getLatestComponentExplorerView event on refresh', () => {
      comp.refresh();
      expect(comp.messageBus.emit).toHaveBeenCalledTimes(1);
    });

    it('should emit getLatestComponentExplorerView event with null view query', () => {
      comp.refresh();
      const nullViewQuery: ComponentExplorerViewQuery = { selectedElement: null, expandedProperties: null };
      expect(comp.messageBus.emit).toHaveBeenCalledWith('getLatestComponentExplorerView', [nullViewQuery]);
    });

    it('should emit getLatestComponentExplorerView event on refresh with view query no properties', () => {
      const currentSelectedElement = {
        element: null,
        position: [],
        children: [],
        component: jasmine.createSpyObj('component', ['id']),
        directives: [],
      };
      currentSelectedElement.position = [0];
      currentSelectedElement.children = [];
      comp.currentSelectedElement = currentSelectedElement;
      const propertyTab = {
        propertyTabBody: {
          propertyViews: jasmine.createSpyObj('propertyTab', ['toArray']),
        },
      };
      comp.propertyTab = propertyTab as any;
      (comp.propertyViews.toArray as Spy).and.returnValue([]);
      comp.refresh();

      const viewQuery: ComponentExplorerViewQuery = {
        selectedElement: {
          position: comp.currentSelectedElement.position,
          componentId: comp.currentSelectedElement.component ? comp.currentSelectedElement.component.id : null,
          directiveIds: comp.currentSelectedElement.directives.map(dir => dir.id),
        },
        expandedProperties: {},
      };
      expect(comp.messageBus.emit).toHaveBeenCalledWith('getLatestComponentExplorerView', [viewQuery]);
    });
  });

  describe('node selection event', () => {
    let nodeMock: SpyObj<IndexedNode>;

    beforeEach(() => {
      nodeMock = jasmine.createSpyObj('node', ['position', 'children']);
    });

    it('sets current selected element', () => {
      comp.handleNodeSelection(nodeMock);
      expect(comp.currentSelectedElement).toBe(nodeMock);
    });

    it('fires node selection events', () => {
      nodeMock.position = [0];
      comp.handleNodeSelection(nodeMock);
      expect(comp.messageBus.emit).toHaveBeenCalledTimes(2);
      expect(comp.messageBus.emit).toHaveBeenCalledWith('getElementDirectivesProperties', [nodeMock.position]);
      expect(comp.messageBus.emit).toHaveBeenCalledWith('setSelectedComponent', [nodeMock.position]);
    });
  });
});
