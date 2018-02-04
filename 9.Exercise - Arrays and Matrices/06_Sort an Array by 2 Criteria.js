function sortByTwoCriteria(arr) {
    console.log(
        arr.sort((a, b) => {
            if (a.length > b.length) {
                return 1;
            } else if (a.length < b.length) {
                return -1
            } else if (a.length === b.length) {
                if (a > b) {
                    return 1;
                } else {
                    return -1;
                }
            }
        }).join('\n')
    )
}

let test = ['alpha', 'beta', 'gamma'];

sortByTwoCriteria(test);