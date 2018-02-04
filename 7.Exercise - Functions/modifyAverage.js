function modifyAverage(num) {
    let numStr = String(num);
    let getAverage = (numString) => numStr.split('').map(Number).reduce((a,b)=> a + b , 0);

    while (getAverage(numStr)/numStr.length <= 5) {
        numStr += '9';
    }
    console.log(numStr);
}

let number = 101;
modifyAverage(number);