interface Lengthwise {
    length: number;
}

function constraintLoggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}

// constraintLoggingIdentity(3);
// Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
constraintLoggingIdentity({ length: 10, value: 3 });

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "m");
// Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.