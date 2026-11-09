/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let count = new Array(101).fill(0);

    for (let n of nums) {
        count[n]++;
    }

    let sum = 0;

    for (let i = 0; i < count.length; i++) {
        if (count[i] == 1) {
            sum += i;
        }
    }
    return sum;
};