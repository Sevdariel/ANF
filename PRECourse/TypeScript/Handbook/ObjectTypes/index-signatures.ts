declare function getStringArray(): StringArray;

interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secodItem = myArray[1];

interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
    // [x: number]: Animal;
    // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;

    length: number;
    // name: string;
    // Property 'name' of type 'string' is not assignable to string index type 'number'.
}

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, length is a string
}

declare function getReadOnlyStringArray(): ReadonlyStringArray;

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let readonlyMyArray: ReadonlyStringArray = getReadOnlyStringArray();
// readonlyMyArray[2] = "Mallory";
// Index signature in type 'ReadonlyStringArray' only permits reading.