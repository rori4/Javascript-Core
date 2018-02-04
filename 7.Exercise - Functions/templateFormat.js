function templateFormat(arr) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>`)
    console.log(`<quiz>`)
    for (let i = 0; i < arr.length; i+=2) {
        console.log(`<question>`)
        console.log(arr[i]);
        console.log(`</question>`)
        console.log(`<answer>`)
        console.log(arr[i+1]);
        console.log(`</answer>`)
    }
    console.log(`</quiz>`)
}