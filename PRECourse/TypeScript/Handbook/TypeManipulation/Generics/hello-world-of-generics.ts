function identity<Type>(arg: Type): Type {
    return arg;
}

let output = identity<string>("myString");
let output1 = identity("myString");