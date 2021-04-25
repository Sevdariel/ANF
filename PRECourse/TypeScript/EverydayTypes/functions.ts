// Parameter type annotation
function greet(name: string) {
    console.log('Hello, ' + name.toUpperCase() + '!!');
}

// Would be a runtime error if executed!
// Runtime error: Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// greet(42);

function getFavoriteNumber(): number {
    return 26;
}

// No type annotations here, but TypeScript can spot the bug
const names = ['Alice', 'Bob', 'Eve'];

// Contextual typing for function
names.forEach(function (s) {
    // console.log(s.toUppercase());
    console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
    // console.log(s.toUppercase());
    console.log(s.toUpperCase());
});
