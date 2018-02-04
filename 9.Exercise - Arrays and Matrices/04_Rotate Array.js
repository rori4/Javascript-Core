function rotateArray(arr) {
    let rotations = arr.pop() % arr.length;
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "))
}

let test = [1, 2, 3, 4, 2];
rotateArray(test);