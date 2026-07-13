/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let first = Array(26).fill(-1);
    let last = Array(26).fill(-1);
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;

        if (first[curr] < 0) {
            first[curr] = i;
        }

        last[curr] = i;
    }

    let partitionStart = partitionEnd = 0;
    for (let i = 0; i < s.length; i++) {

        let curr = s.charCodeAt(i) - 97;

        if (partitionEnd < first[curr]) {
            ans.push(partitionEnd - partitionStart + 1);
            partitionStart = partitionEnd = i;
        }

        partitionEnd = Math.max(partitionEnd, last[curr]);
    }

    // for last partition handling
    if (partitionEnd - partitionStart + 1 > 0) {
        ans.push(partitionEnd - partitionStart + 1);
    }

    return ans;
};