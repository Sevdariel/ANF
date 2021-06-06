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