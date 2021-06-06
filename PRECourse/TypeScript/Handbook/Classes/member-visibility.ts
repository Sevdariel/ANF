class GreeterMV {
    public greet() {
        console.log("hi!");
    }

    protected getName() {
        return "hi";
    }
}

class SpecialGreeter extends GreeterMV {
    public howdy() {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    }
}

const gMV = new GreeterMV();
gMV.greet();

const spGMV = new SpecialGreeter();
spGMV.greet(); // OK
// spGMV.getName();
// Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses. 

class BaseMV {
    protected m = 10;
    protected x: number = 1;
    private xPrivate = 0;
}

class DerivedMV extends BaseMV {
    // No modifier, so default is 'public'
    m = 15;
    protected x: number = 5;
    // xPrivate = 1;
//     Class 'Derived' incorrectly extends base class 'Base'.
//   Property 'x' is private in type 'Base' but not in type 'Derived'.
    showX() {
        // Can't access in subclasses
        // console.log(this.xPrivate);
        // Property 'x' is private and only accessible within class 'Base'.
    }
}

class Derived1MV extends BaseMV {
    f1(other: Derived1MV) {
        other.x = 10;
    }
    f2(other: BaseMV) {
        // other.x = 10;
        // Property 'x' is protected and only accessible through an instance of class 'Derived2'. This is an instance of class 'Base'.
    }
}

const dMV = new DerivedMV();
console.log(dMV.m);

const bMV = new BaseMV();
// Can't access from outside the class
// console.log(b.x);
// Property 'x' is private and only accessible within class 'Base'.
