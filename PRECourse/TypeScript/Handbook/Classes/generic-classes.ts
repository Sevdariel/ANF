class Box<Type> {
    contents: Type;
    constructor(value: Type) {
        this.contents = value;
    }
}

const b = new Box("hello!");

// class Box<Type> {
    // static defaultValue: Type;
    // Static members cannot reference class type parameters.
// }