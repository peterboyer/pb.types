/*!
# pb.types

## Installation

```shell
npm install pb.types
```

## Requirements

- `typescript@>=5.0.0`
- `tsconfig.json > "compilerOptions" > { "strict": true }`
!*/

/*!
## API

- More information available as jsdoc strings in linked source files below.
!*/

/*!
### `Expect,Equal,NotEqual`

- [`Expect`](./src/expect.ts)
- [`Equal`](./src/equal.ts)
- [`NotEqual`](./src/not-equal.ts)
!*/

//>
import type { Expect, Equal, NotEqual } from "pb.types";

const result = JSON.stringify({});

!0 as Expect<Equal<typeof result, string>>;
!0 as Expect<NotEqual<typeof result, number>>;
//<

/*!
### `Disposer`

- [`Disposer`](./src/disposer.ts)
!*/

//>
import type { Disposer } from "pb.types";

function subscribe(): Disposer {
	// Start listener/subscription.
	return () => {
		// Stop listener/subscription.
	};
}

const disposer = subscribe();
//   ^ () => void
void disposer; //-
//<

/*!
### `Modify`

- [`Modify`](./src/modify.ts)
!*/

//>
import type { Modify } from "pb.types";

type Props = {
	label: string; // (required)
	onClick?: () => void; // (optional)
};

function Component(
	props: Modify<Props, { required: "onClick"; optional: "label" }>,
) {
	props.label;
	//    ^ string | undefined (optional)
	props.onClick;
	//    ^ () => void (required)
}
void Component; //-
//<

/*!
### `ArrayItem`

- [`ArrayItem`](./src/array-item.ts)
!*/

//>
import type { ArrayItem } from "pb.types";

type Item = ArrayItem<Array<string>>;
//   ^ string
void {} as unknown as Item; //-
//<

/*!
### `Mutable`

- [`Mutable`](./src/mutable.ts)
!*/

//>
import type { Mutable } from "pb.types";

type MutableArray = Mutable<ReadonlyArray<number>>;
//   ^ Array<number>
type MutableSet = Mutable<ReadonlySet<number>>;
//   ^ Set<number>
type MutableMap = Mutable<ReadonlyMap<string, number>>;
//   ^ Map<string, number>
type MutableObject = Mutable<Readonly<{ foo: string; bar: number }>>;
//   ^ { foo: string; bar: number; }
void {} as unknown as MutableArray; //-
void {} as unknown as MutableSet; //-
void {} as unknown as MutableMap; //-
void {} as unknown as MutableObject; //-
//<

/*!
### `Intersect`

- [`Intersect`](./src/intersect.ts)
!*/

//>
import type { Intersect } from "pb.types";

type Example = { A: true } | { B: true } | { C: true };
type Result = Intersect<Example>;
//   ^ { A: true } & { B: true } & { C: true }
//   ^ { A: true; B: true; C: true }
void {} as unknown as Result; //-
//<

/*!
### `Identity`

- [`Identity`](./src/identity.ts)
!*/

//>
import type { Identity } from "pb.types";

const value = Object.assign({ A: true }, { B: true });
//    ^ { A: boolean } & { B: boolean }
type _Result = Identity<typeof value>;
//   ^ { A: boolean; B: boolean }
void {} as unknown as _Result; //-
//<

/*!
### `branch`

- [`branch`](./src/branch.ts)
!*/

//>
import { branch } from "pb.types";

void function example(): string | number | undefined {
	if (branch()) {
		return "abc";
	}

	if (branch()) {
		return 12345;
	}

	return undefined;
};
//<
