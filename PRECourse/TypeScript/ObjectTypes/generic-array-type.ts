function doSomething(value: Array<string>) {
    // ...
}

let array: string[] = ["hello", "world"];
// either of these work!
doSomething(array);
doSomething(new Array("hello", "world"));

