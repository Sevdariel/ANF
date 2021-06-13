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