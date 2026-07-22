/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let totalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxSoFarCopy = maxSoFar;
        maxSoFar = Math.max(nums[i], maxSoFar * nums[i], minSoFar * nums[i]);
        minSoFar = Math.min(nums[i], maxSoFarCopy * nums[i], minSoFar * nums[i]);
        totalMax = Math.max(totalMax, maxSoFar);
    }

    return totalMax;
};