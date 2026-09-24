/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    let first = Infinity;
    let second = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < first) {
            second = first;
            first = prices[i];
        } else if (prices[i] < second) {
            second = prices[i];
        }
    }

    let sum = first + second;

    if (sum <= money) {
        return money - sum;
    }

    return money;
};