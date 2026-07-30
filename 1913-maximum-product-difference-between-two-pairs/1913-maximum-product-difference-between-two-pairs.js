/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] > max2) { // && nums[i] != max1 for handling duplicates(if not allowed)
            max2 = nums[i];
        }

        if (nums[i] < min1) {
            min2 = min1;
            min1 = nums[i];
        } else if (nums[i] < min2) { // && nums[i] != min1 for handling duplicates(if not allowed)
            min2 = nums[i];
        }
    }

    return (max1 * max2 - min1 * min2);
};