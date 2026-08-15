/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    let n = nums.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(null));

    function solve(left, right) {
        // base case
        if (left == right) {
            return nums[left];
        }
        if (dp[left][right] !== null) {
            return dp[left][right];
        }

        let leftTurn = nums[left] - solve(left + 1, right);
        let rightTurn = nums[right] - solve(left, right - 1);

        return Math.max(leftTurn, rightTurn);
    }

    return solve(0, n - 1) >= 0;
};