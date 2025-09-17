import type { Modify } from "./modify.js";
import type { Equal } from "./equal.js";
import type { Expect } from "./expect.js";
import type { Identity } from "./identity.js";

type T = {
	aaa: string;
	bbb?: string;
	readonly ccc: number;
	readonly ddd?: number;
};

!0 as Expect<Equal<Modify<T, {}>, T>>;

// required
!0 as Expect<
	Equal<
		Modify<T, { required: "bbb" }>,
		Identity<Omit<T, "bbb"> & { bbb: string }>
	>
>;
// optional
!0 as Expect<
	Equal<
		Modify<T, { optional: "aaa" }>,
		Identity<Omit<T, "aaa"> & { aaa?: string }>
	>
>;
// both
!0 as Expect<
	Equal<
		Modify<T, { required: "bbb"; optional: "bbb" }>,
		Identity<Omit<T, "bbb"> & { bbb: string }>
	>
>;

// readonly
!0 as Expect<
	Equal<
		Modify<T, { readonly: "aaa" | "bbb" }>,
		Identity<
			Omit<T, "aaa" | "bbb"> & { readonly aaa: string; readonly bbb?: string }
		>
	>
>;
// mutable
!0 as Expect<
	Equal<
		Modify<T, { mutable: "ccc" | "ddd" }>,
		Identity<Omit<T, "ccc" | "ddd"> & { ccc: number; ddd?: number }>
	>
>;
// both
!0 as Expect<
	Equal<
		Modify<T, { readonly: "aaa" | "bbb"; mutable: "aaa" | "bbb" }>,
		Identity<
			Omit<T, "aaa" | "bbb"> & { readonly aaa: string; readonly bbb?: string }
		>
	>
>;

// everything
!0 as Expect<
	Equal<
		Modify<
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
