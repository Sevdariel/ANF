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

