// prettier-ignore
/**
 * @description
 * Returns `true` if given `A` and `B` types are exactly mutually assignable.
 *
 * @example
 * ```ts
 * const value = !0 as Equal<any, any>;
 * //    ^ true
 * const value = !0 as Equal<any, unknown>;
 * //    ^ false
 * ```
 */
export type Equal<A, B> = (
	<T>() => T extends A ? 1 : 2) extends
		(<T>() => T extends B ? 1 : 2)
	? true
	: false;
