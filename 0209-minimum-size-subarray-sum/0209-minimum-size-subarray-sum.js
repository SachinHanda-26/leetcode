/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (k, nums) {
    let sum = 0;
    let min = Infinity;
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        while (sum >= k) {
            min = Math.min(min, r - l + 1);
            sum -= nums[l];
            l++;
        }
    }
    return min == Infinity ? 0 : min;
};