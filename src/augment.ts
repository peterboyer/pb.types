import type { Identity } from "./identity.js";
import type { Mutable } from "./mutable.js";

/**
 * @description
 * Apply one or more augmentations to a type, such as marking one or more
 * properties as required, optional, mutable, and/or readonly.
 *
 * @example
 * ```ts
 * type Props = {
 *   label: string; // (required)
 *   onClick?: () => void; // (optional)
 * }
 *
 * function Component(
 *   props: Augment<Props, { required: "onClick", optional: "label" }>
 * ) {
 *   props.label;
 *   //    ^ string | undefined (optional)
 *   props.onClick;
 *   //    ^ () => void (required)
 * }
 * ```
 */
export type Augment<
	T,
	O extends {
		required?: keyof T;
		optional?: keyof T;
		mutable?: keyof T;
		readonly?: keyof T;
	},
> = AugmentReadonly<
	AugmentMutable<
		AugmentOptional<AugmentRequired<T, O["required"]>, O["optional"]>,
		O["mutable"]
	>,
	O["readonly"]
>;

type AugmentRequired<T, K> = [K] extends [keyof T]
	? Identity<Omit<T, K> & Required<Pick<T, K>>>
	: T;
type AugmentOptional<T, K> = [K] extends [keyof T]
	? Identity<Omit<T, K> & Partial<Pick<T, K>>>
	: T;
type AugmentMutable<T, K> = [K] extends [keyof T]
	? Identity<Omit<T, K> & Mutable<Pick<T, K>>>
	: T;
type AugmentReadonly<T, K> = [K] extends [keyof T]
	? Identity<Omit<T, K> & Readonly<Pick<T, K>>>
	: T;
