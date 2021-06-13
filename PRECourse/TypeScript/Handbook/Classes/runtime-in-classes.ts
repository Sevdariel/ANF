class MyClass {
    name = "MyClass";
    getName = () => {
        return this.name;
    }
}

const c = new MyClass();

const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
const obj = {
    name: "obj",
    getName: c.getName,
};

//Prints "obj", not "MyClass"
console.log(obj.getName());

