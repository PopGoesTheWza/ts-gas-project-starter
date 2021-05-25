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
