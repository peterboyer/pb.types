/**
 * @description
 * Returns a non-readonly (mutable) type of the given type.
 *
 * @example
 * ```ts
 * type MutableArray = Mutable<ReadonlyArray<number>>;
 * //   ^ Array<number>
 * type MutableSet = Mutable<ReadonlySet<number>>;
 * //   ^ Set<number>
 * type MutableMap = Mutable<ReadonlyMap<string, number>>;
 * //   ^ Map<string, number>
 * type MutableObject = Mutable<Readonly<{ foo: string; bar: number }>>;
 * //   ^ { foo: string; bar: number; }
 * ```
 */
export type Mutable<T> =
	T extends ArrayLike<infer U>
		? Array<U>
		: T extends ReadonlyMap<infer K, infer V>
			? Map<K, V>
			: T extends ReadonlySetLike<infer V>
				? Set<V>
				: T extends Record<any, any>
					? { -readonly [K in keyof T]: T[K] }
					: T;
