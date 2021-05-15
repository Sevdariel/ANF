function fn(x: boolean): void;
// function fn(x: string): void;
// This overload signature is not compatible with its implementation signature.
function fn() {
    // ...
}
// Exptected to be able to call with zero arguments
// fn();
// Expected 1 arguments, but got 0.

function fn1(x: string): string;
// Return type isn't right
//function fn1(x: number): boolean;
// This overload signature is not compatible with its implementation signature.
function fn1(x: string | number) {
    return "oops";
}