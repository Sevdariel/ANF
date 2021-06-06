// class Point {
//     x: number;
//     y: number;
// }

// const pt = new Point();
// pt.x = 0;
// pt.y = 0;

class Point {
    x = 10;
    y = 10;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
    // Normal signature with defaults
    // constructor(x = 0, y = 0) {
    //     this.x = x;
    //     this.y = y;
    // }

    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
        // TBD
    }
}

const pt = new Point(0, "0");
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);

// pt.x = "0";
// Type 'string' is not assignable to type 'number'.

// ------------------------------------------------------
// --strictPropertyInitialization
// class BadGreeter {
//     name: string;
//     // Property 'name' has no initializer and is not definitely assigned in the constructor.
// }

class GoodGreeter {
    name: string;

    constructor() {
        this.name = "hello";
    }
}

class OKGreeter {
    // Not initialized, but not error
    name!: string;
}

// readonly
class Greeter {
    readonly name: string = "world";

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    err() {
        // this.name = "not ok";
        // Cannot assign to 'name' because it is a read-only property.
    }
}

const g = new Greeter();
// g.name = "also not ok";
// Cannot assign to 'name' because it is a read-only property.

class Base {
    k = 4;
}

class Derived extends Base {
    constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        // console.log(this.k);
        // 'super' must be called before accessing 'this' in the constructor of a derived class.
        super();
    }
}

let x: number = 0;

class C {
    x: string = "hello";
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }

    m() {
        // This is trying to modify  'x' from line 1, not the class property
        // x = "world";
        // Type 'string' is not assignable to type 'number'.
    }
}

class MyClass {
    [s: string]: boolean | ((s: string) => boolean);

    check(s: string) {
        return this[s] as boolean;
    }
}