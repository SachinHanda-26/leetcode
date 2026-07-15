/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    let loc = Array(1001).fill(0);

    for (let i = 0; i < trips.length; i++) {
        let [numPassengers, from, to] = trips[i];
        loc[from] = loc[from] + numPassengers;
        loc[to] = loc[to] - numPassengers;
    }

    let usedCapacity = 0;

    for (let i = 0; i < 1001; i++) {
        usedCapacity += loc[i];
        if (usedCapacity > capacity) {
            return false;
        }
    }

    return true;
};