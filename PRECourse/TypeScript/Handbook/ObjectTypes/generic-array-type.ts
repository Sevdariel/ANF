function doSomethingArray(value: Array<string>) {
    // ...
}

let array: string[] = ["hello", "world"];
// either of these work!
doSomethingArray(array);
doSomethingArray(new Array("hello", "world"));

