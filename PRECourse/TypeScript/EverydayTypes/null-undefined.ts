function doSomething(x: string | undefined) {
    if (x === undefined) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}

function liveDangerously(x?: number | undefined) {
    // No error
    console.log(x!.toFixed());
}

