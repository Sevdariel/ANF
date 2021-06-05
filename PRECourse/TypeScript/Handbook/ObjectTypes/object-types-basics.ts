function greet(person: { name: string; age: number }) {
    return "Hello " + person.age;
}

interface Person {
    name: string;
    age: number;
}

function greetWithObjectType(person: Person) {
    return "Hello " + person.age;
}

type PersonType = {
    name: string;
    age: number;
}

function greetWithTypeAlias(person: Person) {
    return "Hello " + person.age;
}