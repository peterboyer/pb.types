import type { Identity } from "./identity.js";
import type { Mutable } from "./mutable.js";

/**
 * @description
 * Modify the given type by annotating one or more properties as required,
 * optional, mutable, and/or readonly. Strictness and immutability takes
 * precedence. If the same key is passed as both `required` and `optional`, it
 * will be `required`; and/or as both `readonly` and `mutable`, it will be
 * `readonly`.
 *
 * @example
 * ```ts
 * type Props = {
 *   label: string; // (required)
 *   onClick?: () => void; // (optional)
 * }
 *
 * function Component(
 *   props: Modify<Props, { required: "onClick", optional: "label" }>
 * ) {
 *   props.label;
 *   //    ^ string | undefined (optional)
 *   props.onClick;
 *   //    ^ () => void (required)
 * }
 * ```
 */
export type Modify<
	T,
	O extends {
		required?: keyof T;
		optional?: keyof T;
		readonly?: keyof T;
		mutable?: keyof T;
	},
> = ModifyReadonly<
	ModifyMutable<
		ModifyRequired<ModifyOptional<T, O["optional"]>, O["required"]>,
		O["mutable"]
	>,
	O["readonly"]
>;

type ModifyRequired<T, K> = [K] extends [keyof T]
	? Identity<Omit<T, K> & Required<Pick<T, K>>>
	: T;
type ModifyOptional<T, K> = [K] extends [keyof T]
	? Identity<Omit<T, K> & Partial<Pick<T, K>>>
	: T;
type ModifyReadonly<T, K> = [K] extends [keyof T]
	? Identity<Omit<T, K> & Readonly<Pick<T, K>>>
	: T;
type ModifyMutable<T, K> = [K] extends [keyof T]
	? Identity<Omit<T, K> & Mutable<Pick<T, K>>>
	: T;
