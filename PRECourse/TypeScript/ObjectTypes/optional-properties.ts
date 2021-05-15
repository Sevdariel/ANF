interface Shape { }
declare function getShape(): Shape;

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions) {
    // potentially undefined
    let xPos = opts.xPos;
    let yPos = opts.yPos;
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

function paintShape2({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    console.log("x coordinate at ", xPos);
    console.log("y coordinate at ", yPos);
}

interface Shape { }
declare function render(x: unknown);
function draw({ shape: Shape, xPos: number = 100 /*...*/ }) {
    //render(shape);
    // Cannot find name 'shape'. Did you mean 'Shape'?
    //render(xPos);
    // Cannot find name 'xPos'.
}