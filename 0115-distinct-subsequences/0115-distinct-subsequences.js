/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let n = s.length;
    let m = t.length;

    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

    function solve(i, j) {
        // means t exhausts and we reached end.
        if (j == m) return 1;

        // means s exhausts but t still left
        if (i == n) return 0;

        if (dp[i][j] !== -1) return dp[i][j];

        if (s[i] == t[j]) {
            dp[i][j] = solve(i + 1, j + 1) + solve(i + 1, j);
        }
        else {
            dp[i][j] = solve(i + 1, j);
        }
        return dp[i][j];
    }
    return solve(0, 0);
};