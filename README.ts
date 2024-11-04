/*!
# expectequal

## Installation

```shell
npm install pb.expectequal
```

## Requirements

- `typescript@>=5.0.0`
- `tsconfig.json > "compilerOptions" > { "strict": true }`
!*/
//>
import type { Expect, Equal, NotEqual } from "pb.expectequal";

const result = JSON.stringify({});

!0 as Expect<Equal<typeof result, string>>;
!0 as Expect<NotEqual<typeof result, number>>;
//<

//>
import { branch } from "pb.expectequal";

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
