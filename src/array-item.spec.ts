import type { ArrayItem } from "./array-item.js";
import type { Equal } from "./equal.js";
import type { Expect } from "./expect.js";

!0 as Expect<Equal<ArrayItem<Array<string>>, string>>;
!0 as Expect<Equal<ArrayItem<Array<string[]>>, string[]>>;
!0 as Expect<Equal<ArrayItem<ReadonlyArray<string[]>>, string[]>>;
