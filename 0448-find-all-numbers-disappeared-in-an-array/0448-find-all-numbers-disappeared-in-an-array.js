/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        let ind = Math.abs(nums[i]) - 1;
        if (nums[ind] > 0) nums[ind] = -nums[ind];
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) ans.push(i + 1);
    }
    return ans;
};