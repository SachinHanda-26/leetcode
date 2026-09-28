/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if (arr[m] == target) {
            return m;
        }
        else if (arr[m] < target) {
            l = m + 1;
        }
        else {
            r = m - 1;
        }
    }
    return l;
};