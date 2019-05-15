# The `GasProject2` folder

A sample project using the  `lib1` reusable component. It is setup to output not a single file but the project structure

## tsconfig.json

- use the default compile options `src/tsconfig-gas.json`
- reference `common-components/lib1` as available (but it will not be prepended)
- includes every *.ts files as source (no specific file ordering)
- output a single `build/gas/project1/Code.js`
