function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);

// Inference
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'string'
const longerString = longest("alice", "bob");
// Error! Numbers don't have 'length' property
// Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
// const notOK = longest(10, 100);

// Working with Constrained Values
// function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
//     if (obj.length >= minimum) {
//         return obj;
//     } else {
//         // Type '{ length: number; }' is not assignable to type 'Type'.
//         // '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
//         return { length: minimum };
//     }
// }

// // 'arr' gets balue { length: 6 }
// const arr = minimumLength([1, 2, 3], 6);
// // and crashes here because arrays have
// // a 'slice' method, but not the returned object!
// console.log(arr.slice(0));