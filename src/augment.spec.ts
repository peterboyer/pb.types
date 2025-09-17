import type { Augment } from "./augment.js";
import type { Equal } from "./equal.js";
import type { Expect } from "./expect.js";
import type { Identity } from "./identity.js";

type T = {
	aaa: string;
	bbb?: string;
	readonly ccc: number;
	readonly ddd?: number;
};

!0 as Expect<Equal<Augment<T, {}>, T>>;
!0 as Expect<
	Equal<
		Augment<T, { required: "bbb" }>,
		Identity<Omit<T, "bbb"> & { bbb: string }>
	>
>;
!0 as Expect<
	Equal<
		Augment<T, { optional: "aaa" }>,
		Identity<Omit<T, "aaa"> & { aaa?: string }>
	>
>;
!0 as Expect<
	Equal<
		Augment<T, { mutable: "ccc" | "ddd" }>,
		Identity<Omit<T, "ccc" | "ddd"> & { ccc: number; ddd?: number }>
	>
>;
!0 as Expect<
	Equal<
		Augment<T, { readonly: "aaa" | "bbb" }>,
		Identity<
			Omit<T, "aaa" | "bbb"> & { readonly aaa: string; readonly bbb?: string }
		>
	>
>;
!0 as Expect<
	Equal<
		Augment<
			T,
			{
				optional: "aaa" | "ccc";
				required: "bbb" | "ddd";
				mutable: "ccc" | "ddd";
				readonly: "aaa" | "bbb";
			}
		>,
		Identity<{
			readonly aaa?: string;
			readonly bbb: string;
			ccc?: number;
			ddd: number;
		}>
	>
>;
