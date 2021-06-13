// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export default class RandomNumberGenerator { }

export function absolute(num: number) {
    if (num < 0)
        return num * -1;
    return num;
}

import RNGen, { pi as π } from "./maths.js";

RNGen;
console.log(π);