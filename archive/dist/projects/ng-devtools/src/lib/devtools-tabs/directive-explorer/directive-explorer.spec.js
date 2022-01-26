import { DirectiveExplorerComponent } from './directive-explorer.component';
import { PropertyQueryTypes } from 'protocol';
import { ElementPropertyResolver } from './property-resolver/element-property-resolver';
describe('DirectiveExplorerComponent', () => {
    let messageBusMock;
    let comp;
    let applicationOperationsSpy;
    let cdr;
    let ngZone;
    beforeEach(() => {
        applicationOperationsSpy = jasmine.createSpyObj('_appOperations', ['viewSource', 'selectDomElement']);
        messageBusMock = jasmine.createSpyObj('messageBus', ['on', 'once', 'emit', 'destroy']);
        cdr = jasmine.createSpyObj('_cdr', ['detectChanges']);
        ngZone = jasmine.createSpyObj('_ngZone', ['run']);
        comp = new DirectiveExplorerComponent(applicationOperationsSpy, messageBusMock, new ElementPropertyResolver(messageBusMock), cdr, ngZone);
    });
    it('should create instance from class', () => {
        expect(comp).toBeTruthy();
    });
    it('subscribe to backend events', () => {
        comp.subscribeToBackendEvents();
        expect(messageBusMock.on).toHaveBeenCalledTimes(2);
        expect(messageBusMock.on).toHaveBeenCalledWith('latestComponentExplorerView', jasmine.any(Function));
        expect(messageBusMock.on).toHaveBeenCalledWith('componentTreeDirty', jasmine.any(Function));
    });
    describe('refresh', () => {
        it('should emit getLatestComponentExplorerView event on refresh', () => {
            comp.refresh();
            expect(messageBusMock.emit).toHaveBeenCalledTimes(1);
        });
        it('should emit getLatestComponentExplorerView event with null view query', () => {
            comp.refresh();
            expect(messageBusMock.emit).toHaveBeenCalledWith('getLatestComponentExplorerView', [undefined]);
        });
        it('should emit getLatestComponentExplorerView event on refresh with view query no properties', () => {
            const currentSelectedElement = jasmine.createSpyObj('currentSelectedElement', ['position', 'children']);
            currentSelectedElement.position = [0];
            currentSelectedElement.children = [];
            comp.currentSelectedElement = currentSelectedElement;
            comp.refresh();
            expect(comp.currentSelectedElement).toBeTruthy();
            expect(messageBusMock.emit).toHaveBeenCalledWith('getLatestComponentExplorerView', [undefined]);
        });
    });
    describe('node selection event', () => {
        let nodeMock;
        beforeEach(() => {
            nodeMock = jasmine.createSpyObj('node', ['position', 'children']);
        });
        it('fires node selection events', () => {
            const position = [0];
            nodeMock.position = position;
            comp.handleNodeSelection(nodeMock);
            expect(messageBusMock.emit).toHaveBeenCalledTimes(2);
            expect(messageBusMock.emit).toHaveBeenCalledWith('setSelectedComponent', [nodeMock.position]);
            expect(messageBusMock.emit).toHaveBeenCalledWith('getLatestComponentExplorerView', [
                {
                    selectedElement: position,
                    propertyQuery: {
                        type: PropertyQueryTypes.All,
                    },
                },
            ]);
        });
    });
});
//# sourceMappingURL=directive-explorer.spec.js.map