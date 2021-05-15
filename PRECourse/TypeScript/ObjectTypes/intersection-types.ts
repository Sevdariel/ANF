interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle1 = Colorful & Circle

function drawint(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}

// okay
drawint({ color: "blue", radius: 42 });

  // oops
  // draw({ color: "red", raidus: 42 });
//  Argument of type '{ color: string; raidus: number; }' is not
// assignable to parameter of type 'Colorful & Circle'.
// Object literal may only specify known properties, but 'raidus'
// does not exist in type 'Colorful & Circle'.Did you mean to write 'radius' ?