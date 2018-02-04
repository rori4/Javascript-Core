function insideVolume(arr) {
    let x1 = 10, x2 = 50;
    let y1 = 20, y2 = 80;
    let z1 = 15, z2 = 50;

    for (let i = 0; i < arr.length; i+=3) {
        let x = arr[i];
        let y = arr[i+1];
        let z = arr[i+2];

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    console.log("inside");
                    continue;
                }
            }
        }
        console.log("outside");
    }


}