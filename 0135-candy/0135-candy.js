/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {

    let candy = 1;
    let ltr = [1];
    let rtl = [];
    rtl[ratings.length - 1] = 1;
    let ansArr = [];

    for (let i = 0; i < ratings.length - 1; i++) {
        if (ratings[i + 1] > ratings[i]) {
            ltr[i + 1] = ++candy;
        }
        else {
            ltr[i + 1] = 1;
            candy = 1;
        }
    }

    candy = 1;

    for (let i = ratings.length - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i]) {
            rtl[i - 1] = ++candy;
        }
        else {
            rtl[i - 1] = 1;
            candy = 1;
        }
    }

    let ans = 0;

    for (let i = 0; i < ratings.length; i++) {
        ansArr[i] = Math.max(ltr[i], rtl[i]);
        ans += ansArr[i];
    }

    return ans;
};