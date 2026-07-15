/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length;

    let ltr = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            ltr[i] = ltr[i - 1] + 1;
        }
    }

    let rtl = Array(n).fill(1);

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            rtl[i] = rtl[i + 1] + 1;
        }
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans = ans + Math.max(ltr[i], rtl[i]);
    }

    return ans;
};