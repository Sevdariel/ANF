interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

function handleShape(shape: Shape) {
    // oops!
    //if (shape.kind === "rect") {
    // This condition will always return 'false' since the types '"circle" | "square"' and '"rect"' have no overlap.
    // ...
    //}
}

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius! ** 2;
    }
}