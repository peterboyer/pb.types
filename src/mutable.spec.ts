import type { Equal } from "./equal.js";
import type { Expect } from "./expect.js";
import type { Mutable } from "./mutable.js";

!0 as Expect<Equal<Mutable<ReadonlyArray<string[]>>, Array<string[]>>>;
!0 as Expect<Equal<Mutable<ReadonlyMap<number, string>>, Map<number, string>>>;
!0 as Expect<Equal<Mutable<ReadonlySet<number>>, Set<number>>>;
!0 as Expect<Equal<Mutable<ReadonlySetLike<number>>, Set<number>>>;

type O = { a: number; b: number; c: number };
!0 as Expect<Equal<Mutable<Readonly<O>>, O>>;
