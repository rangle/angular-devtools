import { ApplicationOperations } from 'ng-devtools';
export class ChromeApplicationOperations extends ApplicationOperations {
    viewSource(position) {
        if (chrome.devtools) {
            chrome.devtools.inspectedWindow.eval(`inspect(inspectedApplication.findConstructorByPosition('${position}'))`);
        }
    }
    selectDomElement(position) {
        if (chrome.devtools) {
            chrome.devtools.inspectedWindow.eval(`inspect(inspectedApplication.findDomElementByPosition('${position}'))`);
        }
    }
    inspect(directivePosition, objectPath) {
        if (chrome.devtools) {
            const args = {
                directivePosition,
                objectPath,
            };
            chrome.devtools.inspectedWindow.eval(`inspect(inspectedApplication.findPropertyByPosition('${JSON.stringify(args)}'))`);
        }
    }
}
//# sourceMappingURL=chrome-application-operations.js.map