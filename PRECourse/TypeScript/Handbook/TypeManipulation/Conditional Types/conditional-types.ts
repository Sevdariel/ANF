interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
    id: number // some fields
}

interface NameLabel {
    name: string
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented";
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabelGenerics<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}

let a = createLabelGenerics("typescript");
let b = createLabelGenerics(2.8);
let c = createLabelGenerics(Math.random() ? "hello" : 42);