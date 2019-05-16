# Typescript - Google Apps Script project starter [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

This repository aims at defining how one or more Google Apps Script (GAS) projects can be organized while satisfying the goals below.

- Modern javascript features (Typescript)
- Optional static and infered typing (Typescript)
- Code isolation and reuse (by using Typescript `namespace` statements and project references)
- Incremental builds (Typescript 3.4)
- Fine control on how source `*.ts` files get compiled into target `*.js` files (i.e. overcome the `ts2gas` library limitations)
- Code pretty printing and linting (Prettier and Tslint)

## Installation

1. clone this repository: `git clone https://github.com/PopGoesTheWza/ts-gas-project-starter.git`
1. install (globally) the **Clasp** CLI: `npm install --global @google/clasp`
1. install local dependencies: `npm install`

## NPM scripts

Several commands are available as NPM scripts: `npm run <command>`. The most commonly used are:

- `build` and  `build-clean` to compile all projects
- `format` and `lint` to normalise code and check its correcteness
- `push-all`, `push-project1` and `push-project2` to publish the GAS projects
