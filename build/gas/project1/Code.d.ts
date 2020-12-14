/** BEGIN lib1/index.ts */
/**
 * Content of this component lives in a namescape
 *
 * Its exported parts are accessed using the `lib1.` property accessor
 */
declare namespace lib1 {
    /**
     * This function is avaialble globally as `lib1.publicFunction()`
     */
    const publicFunction: () => string;
}
/** END lib1/index.ts */
/** BEGIN sub.ts */
/**
 * Content of this component lives in a namescape
 *
 * Its exported parts are accessed using the `lib1.` property accessor
 */
declare namespace lib1 {
    /**
     * This function is avaialble globally as `lib1.subPublicFunction()`
     */
    const subPublicFunction: () => string;
}
/** END sub.ts */
/** BEGIN more-stuff.ts */
declare function more(): string;
/** END more-stuff.ts */
/** BEGIN Code.ts */
declare function main(): void;
/** END Code.ts */
/** BEGIN index.ts */
/**
 * Here the triple slash directives allow to specify order
 * in which files get added to the output
 */
/** END index.ts */
/** BEGIN lost/found.ts */
declare function lost(): string;
/** END lost/found.ts */
