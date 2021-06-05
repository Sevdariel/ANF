function doStuff(values: ReadonlyArray<string>) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);

    // ...but we can't mutate 'values'.
    // values.push("hello!");
    // Property 'push' does not exist on type 'readonly string[]'.
}

// new ReadonlyArray("red", "green", "blue");
// 'ReadonlyArray' only refers to a type, but is being used as a value here.

const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

let x: readonly string[] = [];
let y: string[] = [];

x = y;
// y = x;
// The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.