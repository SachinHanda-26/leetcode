/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // for a fixed size sliding window

    // calculate sum of first k window elements.
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    // set maxSum = sum of first elements.
    let maxSum = sum;

    // Move the window one step:
    //  -- Remove the leftmost element.
    //  -- Add the new rightmost element.
    // To do this we will use the previous sum 

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }

    // return the average of maxSum -- maxSum / k.
    return maxSum / k;
};