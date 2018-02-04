function countWords(arr) {
    let result = {};
    for (let str of arr) {
        let currentWords = str.split(/[^0-9a-zA-Z_]+/).filter(st => st !== '');
        for (let word of currentWords) {
            if (result.hasOwnProperty(word)){
                result[word]++
            } else {
                result[word] = 1
            }
        }
    }
    console.log(JSON.stringify(result));
}

let test = ['JS devs use Node.js for server-side JS.-- JS for devs'];
countWords(test);