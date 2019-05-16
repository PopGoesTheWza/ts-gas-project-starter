# The `GasProject2` folder

A sample project using the  `lib1` reusable component. It is setup to output the project structure (instead of a single file like GasProject1).

## tsconfig.json

- use the default compile options `src/tsconfig-gas.json`
- reference `common-components/lib1` as available (but it will not be prepended)
- includes every *.ts files as source (no specific file ordering)
- output a single `build/gas/project1/Code.js`

## lib1 component dependancy

The compiled lib1 component copied from build/common-components to build/gas/GasProject2 after a successfull `npm run build`* command (cf. the 'postbuild' script in package.json)
