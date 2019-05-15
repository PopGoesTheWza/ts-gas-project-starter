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
/** BEGIN more-stuff.ts */
function more() {
    return 'stuff';
}
/** END more-stuff.ts */
/** BEGIN Code.ts */
// tslint:disable: no-console
function main() {
    console.log('Code.ts: main()');
    console.log(lib1.publicFunction());
}
main();
/** END Code.ts */
/** BEGIN index.ts */
/**
 * Here the triple slash directives allow to specify order
 * in which files get added to the output
 */
/// <reference path="Code/more-stuff.ts" />
/// <reference path="Code/Code.ts" />
// other files in tsconfig scope (`files` and `include`) will be added past this point
/** END index.ts */
/** BEGIN lost/found.ts */
// even though not referenced in index.ts, this file gets added to the output
function lost() {
    return 'found';
}
/** END lost/found.ts */
