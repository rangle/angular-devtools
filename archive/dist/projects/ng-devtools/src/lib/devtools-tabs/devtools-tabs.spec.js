import { DevToolsTabsComponent } from './devtools-tabs.component';
import { TabUpdate } from './tab-update';
describe('DevtoolsTabsComponent', () => {
    let messageBusMock;
    let applicationEnvironmentMock;
    let comp;
    let mockThemeService;
    beforeEach(() => {
        messageBusMock = jasmine.createSpyObj('messageBus', ['on', 'once', 'emit', 'destroy']);
        applicationEnvironmentMock = jasmine.createSpyObj('applicationEnvironment', ['environment']);
        mockThemeService = {};
        comp = new DevToolsTabsComponent(new TabUpdate(), mockThemeService, messageBusMock, applicationEnvironmentMock);
    });
    it('should create instance from class', () => {
        expect(comp).toBeTruthy();
    });
    it('toggles inspector flag', () => {
        expect(comp.inspectorRunning).toBe(false);
        comp.toggleInspectorState();
        expect(comp.inspectorRunning).toBe(true);
        comp.toggleInspectorState();
        expect(comp.inspectorRunning).toBe(false);
    });
    it('emits inspector event', () => {
        comp.toggleInspector();
        expect(messageBusMock.emit).toHaveBeenCalledTimes(1);
        expect(messageBusMock.emit).toHaveBeenCalledWith('inspectorStart');
        comp.toggleInspector();
        expect(messageBusMock.emit).toHaveBeenCalledTimes(3);
        expect(messageBusMock.emit).toHaveBeenCalledWith('inspectorEnd');
        expect(messageBusMock.emit).toHaveBeenCalledWith('removeHighlightOverlay');
    });
    it('calls child refresh method', () => {
        comp.directiveExplorer = jasmine.createSpyObj('directiveExplorer', ['refresh']);
        comp.refresh();
        expect(comp.directiveExplorer.refresh).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=devtools-tabs.spec.js.map