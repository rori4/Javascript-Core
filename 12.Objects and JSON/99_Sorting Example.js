let obj = {
    obj1: {value: 1},
    obj2: {value: 2},
    obj3: {value: 10},
    obj4: {value: 4},
    obj5: {value: 5},
};

// for objects
let arrKeys = Object.keys(obj).sort(function (w,v) {
    if (obj[w].value > obj[v].value){
        return -1;
    } else if (obj[w].value < obj[v].value){
        return 1;
    }
    return 0;
}).forEach(key => console.log(key + ' -> ' +JSON.stringify(obj[key])));
console.log(arrKeys);