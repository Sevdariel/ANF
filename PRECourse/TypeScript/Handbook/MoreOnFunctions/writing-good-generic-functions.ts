// push type parameters down
function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

// user fewer type parameters
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
    return arr.filter(func);
}

// type parameters hould appear twice
function greet<Str extends string>(s: Str) {
    console.log("Hello, " + s);
}

function greetGood(s: string) {
    console.log("Hello, " + s);
}

greet("world");