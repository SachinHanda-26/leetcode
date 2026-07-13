/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let ans = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < ans[ans.length - 1][1]) {
            continue;
        }
        ans.push(intervals[i]);
    }

    return intervals.length - ans.length;
};