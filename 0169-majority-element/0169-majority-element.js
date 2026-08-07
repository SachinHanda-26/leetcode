/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 1;
        else {
            ++map[nums[i]];
        }
    }

    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, map[nums[i]]);
    }

    let ans = 0;

    for (let key in map) {
        if (map[key] == max) {
            ans = Number(key);
            break;
        }
    }

    return ans;
};