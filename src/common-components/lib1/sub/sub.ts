/** BEGIN sub.ts */

/**
 * Content of this component lives in a namescape
 *
 * Its exported parts are accessed using the `lib1.` property accessor
 */
namespace lib1 {
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
  export function subPublicFunction() {
    return `subPublicFunction called ${subInnerFunction()}`;
  }
}

/** END sub.ts */
