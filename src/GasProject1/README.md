# The `GasProject1` folder

A sample project using the  `lib1` reusable component. It is setup to output a single *.js (including the `lib1` component)

## tsconfig.json

- use the default compile options `src/tsconfig-gas.json`
- reference `common-components/lib1` as available
- declare that `common-components/lib1` is to be prepended
- includes every *.ts files as source with `index.ts` first (though after any prepended reference)
- output a single `build/gas/project1/Code.js`
