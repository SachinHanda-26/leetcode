/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let dp = {};

    function helper(i) {
        if (i == 0) return nums[0];

        if (i == 1) return Math.max(nums[0], nums[i]);

        if (!(i in dp)) {
            dp[i] = Math.max(helper(i - 2) + nums[i], helper(i - 1));
        }

        return dp[i];
    }

    return helper(nums.length - 1);
};