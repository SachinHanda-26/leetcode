/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b);

    let longest = 1;
    let current = 1;

    if (nums.length == 0) return 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) continue;

        if (nums[i] + 1 == nums[i + 1]) {
            current++;
        } else {
            longest = Math.max(longest, current);
            current = 1;
        }
    }
    return longest;
};