const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

// Inferred type is number[] -- "an array with zero or more number",
// not specifically two number
const args = [8, 5];
//const angle = Math.atan2(...args);
// Expected 2 arguments, but got 0 or more

// Inferred as 2-length tuple
const argsAsConst = [8, 5] as const;
// OK
const angle = Math.atan2(...argsAsConst);