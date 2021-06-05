// Prints "string"
console.log(typeof "Hello world");

let s = "hello";
let n: typeof s;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
    return { x: 10, y: 3 };
}
//type P = ReturnType<f>;
// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

type P = ReturnType<typeof f>;

declare const msgbox: () => boolean;
// Meant to use = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");
// ',' expected.