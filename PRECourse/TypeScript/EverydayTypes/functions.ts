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