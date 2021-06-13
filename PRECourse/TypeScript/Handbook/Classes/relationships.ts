class Point1 {
    x = 0;
    y = 0;
}

class Point2 {
    x = 0;
    y = 0;
}

const p: Point1 = new Point2();

class Person {
    name: string;
    age: number;
}

class Employee {
    name: string;
    age: number;
    salary: number;
}

const p1: Person = new Employee();

class Empty { }
function fn(x: Empty) {
    // can't do anything with 'x', so i won't
}

fn(window);
fn({});
fn(fn);