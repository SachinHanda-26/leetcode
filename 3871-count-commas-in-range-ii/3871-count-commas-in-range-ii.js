/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    let start = 1000;
    let ans = 0;

    while (start <= n) {
        // count numbers from start to n
        let contributions = n - start + 1;
        // add that count to ans 
        ans += contributions

        start *= 1000;
    }

    return ans;
};