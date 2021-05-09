function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined from the type
    if (container.value != null) {
        console.log(container.value);

        // Now we can safely multiply 'container.value'
        container.value *= factor;
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}