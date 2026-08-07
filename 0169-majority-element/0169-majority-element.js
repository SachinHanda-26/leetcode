/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // Optimal Solution (Boyer-Moore Voting Algorithm)
    // The problem guarantees that a majority element always exists (appears more than ⌊n/2⌋ times).
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count == 0) {
            candidate = num;
        }

        if (num == candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
};