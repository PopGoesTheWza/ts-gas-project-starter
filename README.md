# Typescript - Google Apps Script project starter [![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

This repository aims at defining how one or more Google Apps Script (GAS) projects can be organized while satisfying the goals below.

- Modern javascript features
- Optional static and infered typing
- Code isolation and reuse
- Incremental builds
- Fine control on how source `*.ts` files get transformed into target `*.gs` files
- Code pretty printing and linting

## Installation

1. clone this repository: `git clone https://github.com/PopGoesTheWza/ts-gas-project-starter.git`
1. install (globally) the **Clasp** CLI: `npm install --global @google/clasp`
1. install local dependencies: `npm install`

## NPM scripts

Several commands are available as NPM scripts: `npm run <command>`

- `build`
- `format`
- `lint`
