type voidFunc = () => void;

const f1: voidFunc = () => {
    return true;
}

const f2: voidFunc = () => true;
const f3: voidFunc = function () {
    return true;
}

const v1 = f1();
const v2 = f2();
const v3 = f3();

const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));

function ff2(): void {
    // @ts-expect-error
    return true;
}

const ff3 = function (): void {
    // @ts-expect-error
    return true;
}