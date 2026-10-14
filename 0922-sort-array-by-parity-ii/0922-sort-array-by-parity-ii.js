/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let e = 0;
    let o = 1;
    let n = nums.length;

    while (e < n && o < n) {
        if (nums[e] % 2 == 0) {
            e += 2;
        }
        else if (nums[o] % 2 != 0) {
            o += 2;
        }
        else {
            let temp = nums[e];
            nums[e] = nums[o];
            nums[o] = temp;
        }
    }
    return nums;
};