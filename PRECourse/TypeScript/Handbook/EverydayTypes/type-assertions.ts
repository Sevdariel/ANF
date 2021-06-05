const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const myCanvasInAngleBracket = <HTMLCanvasElement>document.getElementById("main_canvas");

// const x = "hello" as number;
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
type T = {
    x: any;
}

const expr = '';

const a = (expr as any) as T;