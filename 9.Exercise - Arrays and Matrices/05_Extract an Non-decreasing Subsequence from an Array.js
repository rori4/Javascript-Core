function extractSubsequence(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (e>=result[result.length-1] || result.length === 0){
            result.push(e);
        }
    }
    console.log(result.join('\n'));
}

let test = [1,2,3,4,5,63,2,1,2,3,4];

extractSubsequence(test);