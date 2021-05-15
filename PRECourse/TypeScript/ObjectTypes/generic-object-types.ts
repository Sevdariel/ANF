// interface Box {
//     contents: any;
// }

// interface Box {
//     contents: unknown;
// }

// let x: Box = {
//     contents: "Hello world",
// };

// we could check 'x.contents'
// if (typeof x.contents === 'string') {
//     console.log(x.contents.toLowerCase());
// }

// // or we could use a type assertion
// console.log((x.contents as string).toLowerCase());

interface NumberBox {
    contents: number;
}

interface StringBox {
    contents: string;
}

interface BooleanBox {
    contents: boolean;
}

// function setContents(box: StringBox, newContents: string): void;
// function setContents(box: NumberBox, newContents: number): void;
// function setContents(box: BooleanBox, newContents: boolean): void;
// function setContents(box: { contents: any }, newContents: any) {
//     box.contents = newContents;
// }

interface Box<Type> {
    contents: Type;
}

let box: Box<string>;

let boxA: Box<string> = { contents: "hello" };
boxA.contents;
let boxB: StringBox = { contents: "world" };
boxB.contents;

interface Apple {
    // ...
}

type AppleBox = Box<Apple>;
function setContents<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
}

type BoxType<Type> = {
    contents: Type;
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullString = OneOrManyOrNull<string>;