function firstLastNumbers(arr) {
    let n = Number(arr.shift());
    console.log(arr.slice(0,n));
    console.log(arr.slice(arr.length-n));
}

firstLastNumbers([3,-2,3,-4,5]);