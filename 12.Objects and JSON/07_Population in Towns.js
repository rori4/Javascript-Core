function populationInTowns(arr) {
    let towns = new Map();
    for (let str of arr) {
        let [name, value] = str.split(/\s*<->\s*/).filter(st => st!=='');
        if (towns.has(name)){
            towns.set(name,towns.get(name) + Number(value));
        } else {
            towns.set(name, Number(value));
        }
    }
    for (let [key, value] of towns) {
        console.log(key + ' : '  + value);
    }
}

let test = ['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
];

populationInTowns(test);