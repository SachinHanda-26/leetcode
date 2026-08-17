/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let n = nums.length;
    let end = nums.length - 1;
    let dp = new Array(n).fill(-1);


    function solve(start) {
        if (start == end) return 0;
        if (dp[start] !== -1) return dp[start];

        let min = Infinity;
        let curr = nums[start];

        for (let jump = 1; jump <= curr; jump++) {
            if (start + jump < n) {
                min = Math.min(min, 1 + solve(start + jump));
            }
        }
        return dp[start] = min;
    };

    return solve(0);
};