class MyClass {
    static x = 0;
    static printX() {
        console.log(MyClass.x);
    }
}

console.log(MyClass.x);
MyClass.printX();

class MyClassPrivate {
    private static x = 0;
}
// console.log(MyClassPrivate.x);
// Property 'x' is private and only accessible within class 'MyClas

class Base {
    static getGreeting() {
        return "Hello world";
    }
}

class Derived extends Base {
    myGreeting = Derived.getGreeting();
}

class S {
    // static name = "S!";
    // Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
}

// Unnecessary "static" class
class MyStaticClass {
    static doSomething() {}
}

// Preferred (alternative 1)
function doSomething() { }

// Preferred (alternative 2)
const MyHelperObject = {
    doSomething() { },
};