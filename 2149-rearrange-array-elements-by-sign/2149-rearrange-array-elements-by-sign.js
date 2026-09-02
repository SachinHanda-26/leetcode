/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let ans = new Array(nums.length);
    let pos = 0;
    let neg = 1;

    for (let num of nums) {
        if (num < 0) {
            ans[neg] = num;
            neg = neg + 2;
        } else {
            ans[pos] = num;
            pos = pos + 2;
        }
    }
    return ans;
};