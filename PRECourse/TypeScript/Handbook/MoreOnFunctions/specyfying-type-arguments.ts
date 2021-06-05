function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

// Type 'string' is not assignable to type 'number'.
// const arr = combine([1, 2, 3], ["hello"]);

const arr1 = combine<string | number>([1, 2, 3], ["hello"]);