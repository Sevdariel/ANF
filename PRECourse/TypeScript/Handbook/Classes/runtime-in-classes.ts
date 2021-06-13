class MyClass {
    name = "MyClass";
    getName(this: MyClass) {
        return this.name;
    }
}

const c = new MyClass();
// OK
c.getName();
const g = c.getName;
// console.log(g());
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.

// Prints "MyClass" instead of crashing
// console.log(g());
const obj = {
    name: "obj",
    getName: c.getName,
};

//Prints "obj", not "MyClass"
console.log(obj.getName());

type SomeType = any;
// Typescript input with 'this' parameter
function fn(this: SomeType, x: number) {
    /* ... */
}

// Javascript output
// function fn(x) {
    /* ... */
// }

class Box {
    contents: string = "";
    set(value: string) {
        this.contents = value;
        return this;
    }

    sameAs(other: this) {
        return other.contents === this.contents;
    }
}

class ClearableBox extends Box {
    clear() {
        this.contents = "";
    }
}

const a = new ClearableBox();
const b = a.set("hello");

class DerivedBox extends Box {
    otherContent: string = "?";
}

const base = new Box();
const derived = new DerivedBox();
derived.sameAs(base);
// Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.
//   Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.