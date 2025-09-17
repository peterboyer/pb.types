/**
 * @description
 * Extracts the array item type from an array.
 *
 * @example
 * ```ts
 * type MyArray = Array<string>;
 * type MyArrayItem = ArrayItem<MyArray>;
 * //   ^ string
 * ```
 */
export type ArrayItem<T extends ArrayLike<any>> =
	T extends ArrayLike<infer U> ? U : never;
