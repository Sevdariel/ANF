type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I1 = Person["age" | "name"];
type I2 = Person[keyof Person];
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];

// type I1Error = Person["alve"];
// Property 'alve' does not exist on type 'Person'.

const MyArray = [
    { name: "Alive", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 }
];

type NextPerson = typeof MyArray[number];
type NextAge = typeof MyArray[number]["age"];
type NextAge2 = Person["age"];

// const key = "age";
// type AgeKey = Person[key];
// Type 'any' cannot be used as an index type.
// 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?

type key = "age";
type AgeKey = Person[key];