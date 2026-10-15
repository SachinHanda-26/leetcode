/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
    let n = nums.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let set = new Set();
        for (let j = i; j < n; j++) {
            set.add(nums[j]);

            let d = set.size;
            sum += d * d;
        }
    }
    return sum;
};