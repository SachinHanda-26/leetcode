/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
    let dp = new Array(n + 1).fill(-1);

    function solve(i) {
        if (i === 0) return 0;

        if (dp[i] != -1) return dp[i]

        let ans = Infinity;

        for (let jump = 1; jump <= 3; jump++) {
            if (i - jump >= 0) {
                ans = Math.min(ans, solve(i - jump) + costs[i - 1] + jump * jump);
            }
        }
        return dp[i] = ans;
    };

    return solve(n);
};