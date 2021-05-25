"use strict";
/** BEGIN lib1/index.ts */
/**
 * Content of this component lives in a namescape
 *
 * Its exported parts are accessed using the `lib1.` property accessor
 */
var lib1;
(function (lib1) {
    /**
     * This function is not exposed to outside the namespace.
     * It is visible only within this namespace block (i.e. namespace `lib1` in sub/sub.ts does not know about it)
     */
    const innerFunction = () => 'innerFunction';
    /**
     * This function is avaialble globally as `lib1.publicFunction()`
     */
    lib1.publicFunction = () => {
        // subInnerFunction is unreachable from here
        // console.log(`publicFunction called ${subInnerFunction()}`);
        console.log(`publicFunction called ${lib1.subPublicFunction()}`);
        return `publicFunction called ${innerFunction()}`;
    };
})(lib1 || (lib1 = {}));
/** END lib1/index.ts */
/** BEGIN sub.ts */
/**
 * Content of this component lives in a namescape
 *
 * Its exported parts are accessed using the `lib1.` property accessor
 */
var lib1;
(function (lib1) {
    /**
     * This function is not exposed to outside the namespace.
     * It is visible only within this namespace block (i.e. namespace `lib1` in index.ts does not know about it)
     */
    const subInnerFunction = () => 'innerFunction';
    /**
     * This function is avaialble globally as `lib1.subPublicFunction()`
     */
    lib1.subPublicFunction = () => `subPublicFunction called ${subInnerFunction()}`;
})(lib1 || (lib1 = {}));
/** END sub.ts */
