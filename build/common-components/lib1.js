"use strict";
/** BEGIN lib1/index.ts */
// tslint:disable: no-console
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
    function innerFunction() {
        return 'innerFunction';
    }
    /**
     * This function is avaialble globally as `lib1.publicFunction()`
     */
    function publicFunction() {
        // subInnerFunction is unreachable from here
        // console.log(`publicFunction called ${subInnerFunction()}`);
        console.log("publicFunction called " + lib1.subPublicFunction());
        return "publicFunction called " + innerFunction();
    }
    lib1.publicFunction = publicFunction;
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
    function subInnerFunction() {
        return 'innerFunction';
    }
    /**
     * This function is avaialble globally as `lib1.subPublicFunction()`
     */
    function subPublicFunction() {
        return "subPublicFunction called " + subInnerFunction();
    }
    lib1.subPublicFunction = subPublicFunction;
})(lib1 || (lib1 = {}));
/** END sub.ts */
