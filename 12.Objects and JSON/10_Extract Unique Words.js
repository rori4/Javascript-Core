function extractWords(arr) {
    let uniqueWords = new Set();
    for (let set of arr) {
        let words = set.split(/[^a-zA-Z0-9_]+/).filter(a=>a!=='');
        for (let word of words) {
            uniqueWords.add(word.toLowerCase());
        }
    }
    console.log([...uniqueWords.values()].join(', '));
}