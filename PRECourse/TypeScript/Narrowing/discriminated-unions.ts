// interface Shape {
//     kind: "circle" | "square";
//     radius?: number;
//     sideLength?: number;
// }

function handleShape(shape: Shape) {
    // oops!
    //if (shape.kind === "rect") {
    // This condition will always return 'false' since the types '"circle" | "square"' and '"rect"' have no overlap.
    // ...
    //}
}

function getArea(shape: Shape) {
    //if (shape.kind === "circle") {
    // Property 'radius' does not exist on type 'Shape'.
    // Property 'radius' does not exist on type 'Square'.
    //return Math.PI * shape.radius! ** 2;
    //}

    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}

function getAreaWithSwitch(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        // default:
        //     Type 'Triangle' is not assignable to type 'never'.
        //     const exhaustiveCheck: never = shape;
        //     return exhaustiveCheck;
    }
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Triangle {
    kind: "triangle";
    sideLength: number;
}

type Shape = Circle | Square | Triangle;