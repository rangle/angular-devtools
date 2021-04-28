# Angular Devtools

## Table of content

- [Angular Devtools](#angular-devtools)
  - [Table of content](#table-of-content)
  - [Introduction](#introduction)
  - [Inspecting Code](#inspecting-code)
  - [Supported version](#supported-version)
  - [Working on Angular Devtools](#working-on-angular-devtools)
    - [Development environment](#development-environment)
    - [Installing and Running locally](#installing-and-running-locally)
    - [Build and Install on Chrome locally](#build-and-install-on-chrome-locally)
  - [Reporting issues](#reporting-issues)
  - [Contributing](#contributing)
    - [General guidelines](#general-guidelines)
    - [License](#license)

## Introduction

Angular Devtools is a Chrome Developer Tools extension for debugging Angular applications.

You can install the extension from: [Chrome Store](#)

## Inspecting Code

Angular DevTools is a Chrome extension that provides debugging and profiling capabilities for Angular applications. A hard requirement is that the Angular application is running in development mode. If you plan to read the original source code, it is a good idea to generate source maps. Otherwise you will be forced to work with the compiled JavaScript code.

## Supported version

Angular Devtools supports Angular v9 and above, with Ivy enabled.

## Working on Angular Devtools

### Development environment

To develop the Devtools extension, the following environment is used:

- Node
- NPM
- TypeScript

### Installing and Running locally

To install and run Devtools locally, perform the following steps:

```bash
git clone git://github.com/rangle/angular-devtools
cd angular-devtools
npm install
npm run start
```

### Build and Install on Chrome locally

1. After installation, genrate chrome build by running `npm run build:chrome`
2. Navigate to `chrome://extensions` and enable Developer mode.
3. Choose "Load unpacked extension".
4. In the dialog, select the directory `dist/shell-chrome`.

## Reporting issues

Please search to make sure your issue is not already been reported. When opening an issue, please follow the issue template provided.

## Contributing

### General guidelines

If you'd like to help out, please read our [Development Guidelines](DEVELOPING.md) and [Contributing Guidelines](CONTRIBUTING.md).

### License

[MIT](LICENSE)
