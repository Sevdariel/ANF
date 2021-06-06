interface Pingable {
    ping(): void;
}

class Sonar implements Pingable {
    ping() {
        console.log("ping!");
    }
}

// class Ball implements Pingable {
//     //     Class 'Ball' incorrectly implements interface 'Pingable'.
//     //   Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//     pong() {
//         console.log("pong!");
//     }
// }

interface Checkable {
    check(name: string): boolean;
}

class NameChecker implements Checkable {
    check(s) {
        // Parameter 's' implicitly has an 'any' type.
        // Notice no error here
        return s.toLowerCase() === "ok";
    }
}

interface A {
    x: number;
    y?: number;
}

class C1 implements A {
    x = 0;
}

const c = new C();
// c.y = 10;
// Property 'y' does not exist on type 'C'.