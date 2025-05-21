# pb.types

> [!NOTE]
> Renamed from `pb.expectequal`.
>
> Combines [`pb.expectequal`](https://github.com/peterboyer/pb.expectequal),
[`pb.intersect`](https://github.com/peterboyer/pb.intersect), and
[`pb.identity`](https://github.com/peterboyer/pb.identity) into a single
[`pb.types`](https://github.com/peterboyer/pb.types) package.

## Installation

```shell
npm install pb.types
```

## Requirements

- `typescript@>=5.0.0`
- `tsconfig.json > "compilerOptions" > { "strict": true }`

## API

- More information available as jsdoc strings in linked source files below.

### `Expect,Equal,NotEqual`

- [`Expect`](./src/expect.ts)
- [`Equal`](./src/equal.ts)
- [`NotEqual`](./src/not-equal.ts)


```ts
import type { Expect, Equal, NotEqual } from "pb.types";

const result = JSON.stringify({});

!0 as Expect<Equal<typeof result, string>>;
!0 as Expect<NotEqual<typeof result, number>>;
```


### `Intersect`

- [`Intersect`](./src/intersect.ts)


```ts
import type { Intersect } from "pb.types";

type Example = { A: true } | { B: true } | { C: true };
type Result = Intersect<Example>;
//   ^ { A: true } & { B: true } & { C: true }
//   ^ { A: true; B: true; C: true }
```


### `Identity`

- [`Identity`](./src/identity.ts)


```ts
import type { Identity } from "pb.types";

const value = Object.assign({ A: true }, { B: true });
//    ^ { A: boolean } & { B: boolean }
type _Result = Identity<typeof value>;
//   ^ { A: boolean; B: boolean }
```


### `branch`

- [`branch`](./src/branch.ts)


```ts
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
```

