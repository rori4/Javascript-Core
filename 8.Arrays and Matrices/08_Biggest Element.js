function matrixBiggestNumber(matrix) {
    console.log(
        matrix.map(arr => arr.sort((a, b) => a < b)[0])
            .sort((a, b) => a < b)[0]
    )
}

function matrixMaxNumber(matrix) {
    let min = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] > min){
                min = matrix[row][col];
            }
        }
    }
    console.log(min);
}

matrixBiggestNumber([[100, 200], [3000, 4],[1,3,5,7]]);