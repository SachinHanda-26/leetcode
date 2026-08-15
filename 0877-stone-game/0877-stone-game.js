/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    let n = piles.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(null));

    function solve(left, right) {
        if (left == right) return piles[left];

        if (dp[left][right] !== null) return dp[left][right];

        let leftTurn = piles[left] - solve(left + 1, right);
        let rightTurn = piles[right] - solve(left, right - 1);

        dp[left][right] = Math.max(leftTurn, rightTurn);

        return dp[left][right];
    }

    return solve(0, n - 1) > 0;
};