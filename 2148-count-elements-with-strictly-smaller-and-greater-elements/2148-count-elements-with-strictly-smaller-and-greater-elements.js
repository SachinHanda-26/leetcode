/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    let min = Infinity;
    let max = -Infinity;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min && nums[i] < max) {
            count++;
        }
    }
    return count;
};