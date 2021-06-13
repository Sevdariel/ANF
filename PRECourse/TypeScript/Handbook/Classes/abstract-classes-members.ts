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