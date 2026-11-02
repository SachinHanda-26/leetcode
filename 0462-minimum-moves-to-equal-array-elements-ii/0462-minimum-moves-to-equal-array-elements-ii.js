/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let median = 0;
    let moves = 0;

    if (n % 2 != 0) {
        median = nums[Math.floor(n / 2)];
    }
    else {
        median = nums[(n / 2) - 1];
    }

    for (let i = 0; i < n; i++) {
        moves += Math.abs(nums[i] - median);
    }

    return moves;
};