function greeter(fn: (s: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

type GreetFunction = (a: string) => void;
function greeterWithType(fn: GreetFunction) {
    // ...
}