/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = {};

    function helper(i) {
        if (i <= 1) {
            return 0;
        }

        if (!(i in dp)) {
            dp[i] = Math.min((helper(i - 1) + cost[i - 1]), (helper(i - 2) + cost[i - 2]));
        }

        return dp[i];
    }

    return helper(cost.length);
};