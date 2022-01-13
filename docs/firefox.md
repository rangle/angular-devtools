# Installing Angular DevTools in Firefox

To install Angular DevTools in the firefox browser. Follow below steps:-

![click on remote debugging](assets/firefox/step-1.png)
Open menu item from top bar `Tools -> Browser Tools -> Remote Debugging`.

![click on this firefox](assets/firefox/step-2.png)
After clicking `Remote Debugging` click on `This Firefox` option from left navigation. You will see the below screen with list of extensions. Temporary extensions are unreleased extensions loaded in the dev mode.

![load temporary add-on](assets/firefox/step-3.png)

Click on `Load Temporary Add-on` button to select and load Angular Devtools extension for firefox.

![select file](assets/firefox/step-4.png)
Select any file from `dist -> shell chrome` directory to load extension. If you have not build extension for firefox yet. You can do it using `yarn build:firefox` which will generate build for firefox.

![view extension](assets/firefox/step-5.png)
After selecting file and clicking open, you should be able to see Angular DevTools as a Temporary Extension in firefox.

![test extension](assets/firefox/step-6.png)
Open any angular application in dev mode and open Firefox Devtools you should see Angular Tab in there.
