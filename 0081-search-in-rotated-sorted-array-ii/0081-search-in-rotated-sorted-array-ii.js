/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if (nums[m] == target) {
            return true;
        }

        // Duplicate Handle
        if (nums[l] === nums[m] && nums[m] === nums[r]) {
            l++;
            r--;
        }

        // Left side sorted
        else if (nums[l] <= nums[m]) {
            if (target < nums[m] && target >= nums[l]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        // Right side sorted
        else {
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return false;
};