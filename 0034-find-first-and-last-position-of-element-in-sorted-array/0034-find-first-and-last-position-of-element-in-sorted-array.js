/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let first = search(nums, target, true);
    let second = search(nums, target, false);

    return [first, second];
};

function search(nums, target, findIndex) {
    let ans = -1;
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if (nums[m] < target) {
            l = m + 1;
        }
        else if (nums[m] > target) {
            r = m - 1;
        }
        else {
            ans = m;
            if (findIndex) {
                r = m - 1;
            }
            else {
                l = m + 1;
            }
        }
    }
    return ans;
};