/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let moves = 0;
    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        moves += nums[i] - min;
    }

    return moves;
};
