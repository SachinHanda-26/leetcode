/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    if (n == 1) return nums[0];

    function robHelper(start, end) {
        let p2 = 0;
        let p1 = 0;

        for (let i = start; i <= end; i++) {
            let curr = Math.max(nums[i] + p2, p1);
            let temp = p1;
            p1 = curr;
            p2 = temp;
            ++curr;
        }

        return p1;
    }

    return Math.max(robHelper(0, n - 2), robHelper(1, n - 1));
};