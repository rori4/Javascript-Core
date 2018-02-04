function arrayWithDelimiter(arr) {
    let delimiter = arr.pop();
    console.log(arr.join(delimiter));
}

arr = ['One','Two',"Three"];

arrayWithDelimiter(arr);