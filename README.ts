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
### `Identity<T>`

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
