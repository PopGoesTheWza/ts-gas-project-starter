/** BEGIN lib1/index.ts */

// tslint:disable: no-console

/**
 * Content of this component lives in a namescape
 *
 * Its exported parts are accessed using the `lib1.` property accessor
 */
namespace lib1 {
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
  export function publicFunction() {
    // subInnerFunction is unreachable from here
    // console.log(`publicFunction called ${subInnerFunction()}`);

    console.log(`publicFunction called ${subPublicFunction()}`);

    return `publicFunction called ${innerFunction()}`;
  }
}

/** END lib1/index.ts */
