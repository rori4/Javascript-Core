function addRemoveElements(arr) {
    let result=[];
    let count = 1;
    let commands = {
        add: (num) => result.push(num),
        remove: (num) => result.pop()
    }
    for (let i = 0; i < arr.length; i++) {
        const cmd = arr[i];
        commands[cmd](count)
        count++
    }
    if (result.length === 0){
        console.log("Empty");
    } else {
        console.log(result.join('\n'));
    }
}

addRemoveElements(['add','remove','add','add']);
