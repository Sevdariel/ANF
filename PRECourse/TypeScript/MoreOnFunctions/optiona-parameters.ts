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

// optional parameters in callbacks
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

function myForEach1(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        // I don't feel like providing the index today
        callback(arr[i]);
    }
}

myForEach1([1, 2, 3], (a, i) => {
    // Object is possibly 'undefined'.
    console.log(i.toFixed());
})

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));