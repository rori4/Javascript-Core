/**
 * Created by range on 28.01.2018.
 */
function roadRadar(arr) {
    let speed = arr[0];
    let location = arr[1];

    function getLimit(zone){
        switch (zone) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0){
            return false;
        } else {
            if (overSpeed > 0 && overSpeed <=20){
                console.log("speeding");
            } else if (overSpeed > 20 && overSpeed <= 40) {
                console.log("excessive speeding");
            } else {
                console.log("reckless driving");
            }
        }
    }
    let loc = getLimit(location);
    getInfraction(speed, getLimit(location));
}

let arr = [21, 'residential'];
roadRadar(arr);

