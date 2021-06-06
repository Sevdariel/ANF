// class Point {
//     x: number;
//     y: number;
// }

// const pt = new Point();
// pt.x = 0;
// pt.y = 0;

class Point {
    x = 0;
    y = 0;
}

const pt = new Point();
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