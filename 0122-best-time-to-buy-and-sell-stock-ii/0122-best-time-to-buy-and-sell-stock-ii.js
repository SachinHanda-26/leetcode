/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let profit = 0;
    let ans = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - buy > 0) {
            profit = prices[i] - buy;
            ans += profit;
            buy = Infinity;
        }

        if (prices[i] < buy) {
            buy = prices[i];
        }
    }
    return ans;
};