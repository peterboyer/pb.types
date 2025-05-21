/**
 * @description
 * Anonymises the signature of an `object` type as a "flattened" mapped type.
 *
 * @example
 * ```
 * const value = Object.assign({ A: true }, { B: true })
 * //    ^ { A: boolean } & { B: boolean }
 * type Value = Identity<typeof value>
 * //   ^ { A: boolean; B: boolean }
 * ```
 *
 * @link https://stackoverflow.com/a/49683575
 */
export type Identity<T> = T extends object ? { [K in keyof T]: T[K] } : never;
