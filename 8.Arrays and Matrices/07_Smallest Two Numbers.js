function smallestTwoNumbers(arr) {
    console.log(
        arr.sort((a,b) => a-b)
            .slice(0,Math.min(2,arr.length))
    )
}

smallestTwoNumbers([100,200,3000,4,5,6,7])