/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length;
    let dp = Array(n).fill(1);
    let lis = 1;

    for (let i = 1; i < n; i++) {
        // find smaller elements on left
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                lis = Math.max(lis, dp[i]);
            }
        }
    }

    return lis;
};