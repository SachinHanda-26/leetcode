/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
     const MOD = 1e9 + 7;

    let total = 0;
    let dp = new Array(26).fill(0);

    for (let c of s) {
        c = c.charCodeAt(0) - 'a'.charCodeAt(0);

        let add = (total - dp[c] + MOD) % MOD;

        dp[c] = (1 + total) % MOD;

        total = (dp[c] + add) % MOD;
    }

    return total;
};