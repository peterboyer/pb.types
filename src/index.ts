/**
 * @description
 * A generic that expects to receive only `true`. This is intended for use with
 * the `Equal` or `NotEqual` generic types.
 *
 * @example
 * ```
 * const a: number = 0
 * !0 as Expect<Equal<typeof a, number>>
 * //    ^ no errors
 * !0 as Expect<Equal<typeof a, string>>
 * //    ^ error because `typeof a` is not strictly equal to `string`
 * ```
 */
export type Expect<T extends true> = T;

// prettier-ignore
/**
 * @description
 * Returns `true` if given `A` and `B` types are exactly mutually assignable.
 *
 * @example
 * ```
 * const value = !0 as Equal<any, any>
 * //    ^ true
 * const value = !0 as Equal<any, unknown>
 * //    ^ false
 * ```
 */
export type Equal<A, B> = (
	<T>() => T extends A ? 1 : 2) extends
		(<T>() => T extends B ? 1 : 2)
	? true
	: false;

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

/**
 * @description
 * Intended for tests where stub branches are needed, e.g. testing return
 * types.
 *
 * @example
 * ```
 * function example(): string | number | undefined {
 *   if (branch()) {
 *    return "abc";
 *   }
 *
 *   if (branch()) {
 *    return 12345;
 *   }
 *
 *   return undefined;
 * };
 * ```
 */
export function branch(): boolean {
	return Math.random() === 1;
}
