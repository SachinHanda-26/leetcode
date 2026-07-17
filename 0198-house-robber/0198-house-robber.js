/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    let dp = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    return dp[n - 1];
};