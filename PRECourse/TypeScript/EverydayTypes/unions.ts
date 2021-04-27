function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342});

// function printId1(id: number | string) {
//     console.log(id.toUpperCase());
// }

function narrowPrintId(id: number | string) {
    if (typeof id === 'string') {
        // In this branch, id is of type 'string'
    } else {
        // Here, id is of type 'number'
        console.log(id);
    }
}