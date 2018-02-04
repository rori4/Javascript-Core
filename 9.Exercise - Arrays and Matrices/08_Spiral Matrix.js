function generateMatrix(n) {
    let total = n*n;
    let result = [];

    for(let i=0;i<n;i++) {
        const rs = [];
        for(let j=0; j<n; j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    let x = 0;
    let y = 0;
    let step = 0;
    for(let i=0;i<total;){
        while(y+step<n){
            i++;
            result[x][y]=i;
            y++;

        }
        y--;
        x++;

        while(x+step<n){
            i++;
            result[x][y]=i;
            x++;
        }
        x--;
        y--;

        while(y>=step){
            i++;
            result[x][y]=i;
            y--;
        }
        y++;
        x--;
        step++;

        while(x>=step){
            i++;
            result[x][y]=i;
            x--;
        }
        x++;
        y++;
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(' '));
    }
}