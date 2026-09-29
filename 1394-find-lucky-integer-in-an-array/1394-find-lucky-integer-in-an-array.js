/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let map = new Map();
    let max = -1;

    for (let ele of arr) {
        map.set(ele, (map.get(ele) || 0) + 1);
    }
    for (let [key, value] of map) {
        if (key == value) {
            max = Math.max(max, key);
        }
    }
    return max;
};