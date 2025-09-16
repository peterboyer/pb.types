/**
 * @description
 * Returns a non-readonly (mutable) type of the given type.
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
