abstract class Base {
    abstract getName(): string;

    printName() {
        console.log("Hello, " + this.getName());
    }
}

// const b = new Base();
// Cannot create an instance of an abstract class.

class Derived extends Base {
    getName() {
        return "world";
    }
}

const d = new Derived();
d.printName();

// class DerivedError extends Base {
    // Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
    //forgot to do anything
// }

function greet(ctor: new () => Base) {
    const instance = new ctor();
    instance.printName();
}

greet(Derived);
// greet(Base);
// Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
//   Cannot assign an abstract constructor type to a non-abstract constructor type.