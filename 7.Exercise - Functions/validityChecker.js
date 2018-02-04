function validityChecker(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    const a = x1 - x2;
    const b = y1 - y2;

    const var1 = Math.sqrt((x1) * (x1) + (y1) * (y1));
    const var2 = Math.sqrt((x2) * (x2) + (y2) * (y2));
    const var3 = Math.sqrt(a * a + b * b);

    if (Number.isInteger(var1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(var2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(var3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}
