function f(n?: number) {
    console.log(n.toFixed()); // 0 arguments;
    console.log(n.toFixed(3)); // 1 arguments;
}

f(); // ok
f(10); // ok
f(undefined); // ok

function fDefault(x = 10) {
    // ...
}
