/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        if (nums[l] % 2 == 0) {
            l++;
        } else if (nums[r] % 2 != 0) {
            r--;
        }
        else {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
    }
    return nums;
};