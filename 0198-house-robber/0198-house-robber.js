/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    if (n == 1) return nums[0];
    let p2 = nums[0];
    let p1 = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        let curr = Math.max(nums[i] + p2, p1);
        let temp = p1;
        p1 = curr;
        p2 = temp;
        ++curr;
    }

    return p1;
};