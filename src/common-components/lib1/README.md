# The `lib1` component

A reusable component which can be added to any GAS project.

Code isolation is defined through namespaces. Exposed parts (using `export`) are available with the `lib1.` property accessor:

```ts
lib1.publicFunction();
```

## tsconfig.json

- use the default compile options `src/tsconfig-gas.json`
- includes every *.ts files as source (no specific file ordering)
- output a single `build/common-components/lib1.js`
