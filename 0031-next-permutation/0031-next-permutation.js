/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let n = nums.length;
    let ind = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            ind = i;
            break;
        }
    }
    if (ind == -1) {
        reverse(nums, 0, n - 1);
        return;
    }

    for (let i = n - 1; i > ind; i--) {
        if (nums[i] > nums[ind]) {
            swap(nums, i, ind);
            break;
        }
    }

    reverse(nums, ind + 1, n - 1);
};

function reverse(nums, start, end) {

    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }

}

function swap(nums, s, e) {
    let temp = nums[s];
    nums[s] = nums[e];
    nums[e] = temp;
}