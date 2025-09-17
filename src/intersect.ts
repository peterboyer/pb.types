// prettier-ignore
/**
 * @description
 * Intersects all members of a union.
 *
 * @example
 * ```ts
 * type Example = { A: true } | { B: true } | { C: true };
 * type Result = Intersect<Example>;
 * //   ^ { A: true } & { B: true } & { C: true }
 * //   ^ { A: true; B: true; C: true }
 * ```
 *
 * @link https://stackoverflow.com/a/50375286
 */
export type Intersect<T> =
	(T extends unknown ? (t: T) => void : never) extends
		(t: infer R) => void
			? R
			: never;
