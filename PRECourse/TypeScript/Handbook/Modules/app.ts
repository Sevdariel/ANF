// @filename: app.ts
import * as math from "./maths.js";
import "./maths.js";
import { Cat, Dog } from "./animal.js";
import type { createCatName } from "./animal.js";

console.log(math.pi);
const positivePhi = math.absolute(math.phi);
console.log("3.14");

type Animals = Cat | Dog;
// const name = createCatName();
// 'createCatName' cannot be used as a value because it was imported using 'import type'.