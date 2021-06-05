type ToArray<Type> = Type extends any ? Type[] : never;

type strArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrOrNumArr' is no longer a union.
type StrOrNumArr = ToArrayNonDist<string | number>;