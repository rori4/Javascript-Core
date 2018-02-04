function evenPosition(arr) {
    console.log(arr.filter((el,i)=>{
       return i % 2 === 0
    }).join(' '))
}

evenPosition([1,2,3,45,6,7])
