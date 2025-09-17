/**
 * @description
 * Flattens types and intersections resulting in more readable types.
 *
 * @example
 * ```ts
 * const value = Object.assign({ A: true }, { B: true })
 * //    ^ { A: boolean } & { B: boolean }
 * type Value = Identity<typeof value>
 * //   ^ { A: boolean; B: boolean }
 * ```
 *
 * @link https://stackoverflow.com/a/49683575
 * @link https://github.com/ts-essentials/ts-essentials/blob/master/lib/prettify/index.ts
 */
export type Identity<T> = T extends Function
	? T
	: Extract<
			{
				[Key in keyof T]: T[Key];
			},
			T
		>;
