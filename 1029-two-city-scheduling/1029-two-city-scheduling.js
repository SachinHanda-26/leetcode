/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {

    costs.sort((a, b) => ((b[1] - b[0]) - (a[1] - a[0])));

    let ans = 0;

    for (let i = 0; i < costs.length / 2; i++) {
        ans += costs[i][0];
    }

    for (let i = costs.length / 2; i < costs.length; i++) {
        ans += costs[i][1];
    }

    return ans;
};