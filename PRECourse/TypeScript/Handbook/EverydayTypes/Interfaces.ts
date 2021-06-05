interface IPoint {
    x: number;
    y: number;
}

function printCoordFromInterface(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoordFromInterface({ x: 100, y: 100 });