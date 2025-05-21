import type { Equal } from './equal.js'

/**
 * @description
 * Returns the inverse of `Equal`.
 *
 * @example
 * ```
 * const value = !0 as NotEqual<any, any>
 * //    ^ false
 * const value = !0 as NotEqual<any, unknown>
 * //    ^ true
 * ```
 */
export type NotEqual<A, B> = Equal<A, B> extends true ? false : true;
