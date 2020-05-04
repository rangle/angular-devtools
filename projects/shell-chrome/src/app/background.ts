import { AngularDetection } from './ng-validate';

const ports: {
  [tab: string]:
    | {
        'content-script': chrome.runtime.Port | null;
        devtools: chrome.runtime.Port | null;
      }
    | undefined;
} = {};

chrome.runtime.onConnect.addListener((port) => {
  let tab: string | null = null;
  let name: string | null = null;
  console.log('Connection event in the background script');
  if (isNumeric(port.name)) {
    tab = port.name;
    console.log('Angular devtools connected, injecting the content script', port.name, ports[tab]);
    name = 'devtools';
    installContentScript(parseInt(port.name, 10));
  } else {
    if (!port.sender || !port.sender.tab) {
      console.error('Unable to access the port sender and sender tab');
      return;
    }
    if (port.sender.tab.id === undefined) {
      console.error('Sender tab id is undefined');
      return;
    }
    console.log('Content script connected', port.sender.tab.id);
    tab = port.sender.tab.id.toString();
    name = 'content-script';
  }

  let portsTab = ports[tab];
  if (!portsTab) {
    console.log('Creating a tab port');
    portsTab = ports[tab] = {
      devtools: null,
      'content-script': null,
    };
  }

  portsTab[name] = port;

  if (portsTab.devtools && portsTab['content-script']) {
    doublePipe(portsTab.devtools, portsTab['content-script'], tab);
  }
});

const isNumeric = (str: string): boolean => {
  return +str + '' === str;
};

const installContentScript = (tabId: number) => {
  console.log('Installing the content-script');
  chrome.tabs.executeScript(tabId, { file: '/content-script.js' }, () => {});
};

const doublePipe = (devtoolsPort: chrome.runtime.Port | null, contentScriptPort: chrome.runtime.Port, tab: string) => {
  if (devtoolsPort === null) {
    console.warn('DevTools port is equal to null');
    return;
  }
  console.log('Creating two-way communication channel', Date.now(), ports);

  const onDevToolsMessage = (message: chrome.runtime.Port) => {
    contentScriptPort.postMessage(message);
  };
  devtoolsPort.onMessage.addListener(onDevToolsMessage);

  const onContentScriptMessage = (message: chrome.runtime.Port) => {
    devtoolsPort.postMessage(message);
  };
  contentScriptPort.onMessage.addListener(onContentScriptMessage);

  const shutdown = (source: string) => {
    console.log('Disconnecting', source);
    devtoolsPort.onMessage.removeListener(onDevToolsMessage);
    contentScriptPort.onMessage.removeListener(onContentScriptMessage);
    devtoolsPort.disconnect();
    contentScriptPort.disconnect();
    ports[tab] = undefined;
  };
  devtoolsPort.onDisconnect.addListener(shutdown.bind(null, 'devtools'));
  contentScriptPort.onDisconnect.addListener(shutdown.bind(null, 'content-script'));
};

const getPopUpName = (ng: AngularDetection) => {
  if (!ng.isAngular) {
    return 'not-angular.html';
  }
  if (!ng.isIvy || !ng.isSupportedAngularVersion) {
    return 'unsupported.html';
  }
  if (!ng.isDebugMode) {
    return 'production.html';
  }
  return 'supported.html';
};

chrome.runtime.onMessage.addListener((req, sender) => {
  if (sender.tab && req.isAngular) {
    chrome.browserAction.setIcon({
      tabId: sender.tab.id,
      path: {
        16: `assets/favicon.ico`,
      },
    });
    chrome.browserAction.setPopup({
      tabId: sender.tab.id,
      popup: `popups/${getPopUpName(req)}`,
    });
  }
});
