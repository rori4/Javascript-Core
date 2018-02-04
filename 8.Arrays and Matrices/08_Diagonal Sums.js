function diagonalSums(matrix) {
    let normalDiagonal = 0;
    let backDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col){
                normalDiagonal += matrix[row][col];
                backDiagonal += matrix[row][matrix.length-1-row];
            }
        }
    }
    console.log(normalDiagonal);
    console.log(backDiagonal);
}

let m = [
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7],
    [1,2,3,500,5,500,7],
    [1,2,3,500,5,6,7],
    [1,2,3,500,5,6,7]
];

diagonalSums(m);