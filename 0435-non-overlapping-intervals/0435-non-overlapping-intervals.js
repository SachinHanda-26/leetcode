/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {

    intervals.sort((a, b) => a[1] - b[1]);
    let removeCount = 0;
    let k = -Infinity;

    for (let i = 0; i < intervals.length; i++) {

        if (intervals[i][0] < k) {
            removeCount++;
        } else{
            k = intervals[i][1];
        }
    }

    return removeCount;
};