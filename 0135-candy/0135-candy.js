/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length;
    let ans = n;

    let i = 1;
    while (i < n) {

        if (ratings[i] == ratings[i - 1]) {
            ++i;
            continue;
        }

        let up = 0;
        while (i < n && ratings[i] > ratings[i - 1]) {
            ++up;
            ans = ans + up;
            i++;
        }

        let down = 0;
        while (i < n && ratings[i] < ratings[i - 1]) {
            ++down;
            ans = ans + down;
            i++;
        }

        ans = ans - Math.min(up, down);
    }

    return ans;
};