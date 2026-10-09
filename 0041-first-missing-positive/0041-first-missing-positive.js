/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let n = nums.length;
    let arr = new Array(n + 1).fill(0);
    for (let ele of nums) {
        if (ele > 0 && ele <= n)
            arr[ele]++;
    }

    for (let i = 1; i <= n; i++) {
        if (arr[i] === 0) {
            return i;
        }
    }
    return n + 1;
};