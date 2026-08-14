/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0;
    let leftSum = 0;
    
    for (let num of nums) {
        sum += num;
    }

    for (let i = 0; i < nums.length; i++) {
        sum = sum - nums[i];
        if (sum == leftSum) return i;
        leftSum += nums[i];
    }

    return -1;
};