/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let n = candies.length;
    let ans = [];

    let max = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        if (extraCandies + candies[i] >= max) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    return ans;
};