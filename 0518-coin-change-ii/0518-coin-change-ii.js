/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let n = coins.length;
    let dp = Array.from({ length: amount + 1 }, () => Array(n).fill(-1));

    function fn(remA, start) {
        if (remA == 0) return 1;
        if (remA < 0) return 0;
        if (dp[remA][start] !== -1) return dp[remA][start];

        let combinations = 0;

        for (let i = start; i < n; i++) {
            combinations += fn(remA - coins[i], i);
        }
        return dp[remA][start] = combinations;
    };

    return fn(amount, 0);
};