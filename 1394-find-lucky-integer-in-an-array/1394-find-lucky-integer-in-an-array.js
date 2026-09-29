/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let count = new Array(501).fill(0);
    for (let ele of arr) {
        count[ele]++;
    }
    for (let i = 501; i >= 1; i--) {
        if (i == count[i]) {
            return i;
        }
    }
    return -1;
};