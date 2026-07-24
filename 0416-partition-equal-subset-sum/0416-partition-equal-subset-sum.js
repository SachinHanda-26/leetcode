/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    if (sum % 2 !== 0) return false;

    let dp = Array.from({length: sum + 1}, () => Array(nums.length).fill(null));

    function fn(remS, start) {

        if (remS == 0) {
            return true;
        }
        if (remS < 0) return false;

        if (dp[remS][start] !== null) return dp[remS][start];

        for (let i = start; i < nums.length; i++) {
            if (fn(remS - nums[i], i + 1)) {
                return dp[remS][start] = true;
            }
        }

        return dp[remS][start] = false;
    }

    return fn(sum / 2, 0);
};