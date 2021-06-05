let changingString = "Hello World";
changingString = "Ola Mundo";
// Because 'changingString' can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;

const constantString = "Hello World";
// Because 'constantString' can only represent 1 possible string, it
// has a literal type representation

constantString;

let x: "hello" = "hello";
// OK
x = "hello";
// ...
// Type '"howdy"' is not assignable to type '"hello"'.
// x = "howdy";

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}

printText("Hello, world", "left");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
// printText("G'day, mate", "centre");

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
    width: number;
}

function configure(x: Options | "auto") {
    // ...
}

configure({ width: 100 });
configure("auto");
// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.
// configure("automatic");

// ----------------- Literal Inference -----------------
declare const someCondition: boolean;
const obj = { counter: 0 };
if (someCondition) {
    obj.counter = 1;
}

declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" };
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
// handleRequest(req.url, req.method);

// Option 1:
const req1 = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req1.url, req1.method as "GET");

// Option 2:
const req2 = { url: "https://example.com", method: "GET"} as const;
handleRequest(req2.url, req2.method);
