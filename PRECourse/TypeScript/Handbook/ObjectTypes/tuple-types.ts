type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
    const a = pair[0];
    const b = pair[1];

    // const c = pair[2];
    // Tuple type '[string, number]' of length '2' has no element at index '2'.
}

function destructureDoSomething(stringHash: [string, number]) {
    const [inputString, hash] = stringHash;

    console.log(inputString);
    console.log(hash);
}

doSomething(["hello", 42]);

interface IStringNumberPair {
    // specialized properties
    length: 2;
    0: string;
    1: number;
}

// Other 'Array<string | number>' members...
// slice(start?: number, end?: number): Array<string | number>;

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;

    console.log(`Provided coordinates had ${coord.length} dimensions`);
}

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    // ...
}

// Equals 
// function readButtonInput(name: string, version: number, ...input: boolean[]) {
//     // ...
//   }

function readonlyDoSomething(pair: readonly [string, number]) {
    // pair[0] = "hello";
    // Cannot assign to '0' because it is a read-only property.
}

let point = [3, 4] as const;

function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
}

//distanceFromOrigin(point);
// Argument of type 'readonly [3, 4]' is not assignable to parameter of type '[number, number]'.
//   The type 'readonly [3, 4]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.