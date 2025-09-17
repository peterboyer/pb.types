/**
 * @description
 * A generic that expects to receive only `true`. This is intended for use with
 * the `Equal` or `NotEqual` generic types.
 *
 * @example
 * ```ts
 * const a: number = 0;
 * !0 as Expect<Equal<typeof a, number>>;
 * //    ^ no errors
 * !0 as Expect<Equal<typeof a, string>>;
 * //    ^ error because `typeof a` is not strictly equal to `string`
 * ```
 */
export type Expect<T extends true> = T;
