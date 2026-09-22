/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);

    let ans = [];

    for (let i = 0; i < nums.length - 3; i++) {

        // Skip duplicate first element
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length - 2; j++) {

            // Skip duplicate second element
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            twoSum(nums, i, j, ans, target);
        }
    }

    return ans;
};

function twoSum(arr, x, y, ans, target) {
    let z = y + 1;
    let j = arr.length - 1;

    while (z < j) {
        let sum = arr[x] + arr[y] + arr[z] + arr[j];

        if (sum < target) {
            z++;
        }
        else if (sum > target) {
            j--;
        }
        else {
            ans.push([arr[x], arr[y], arr[z], arr[j]]);

            z++;
            j--;

            // Skip duplicate third element
            while (z < j && arr[z] === arr[z - 1]) {
                z++;
            }

            // Skip duplicate fourth element
            while (z < j && arr[j] === arr[j + 1]) {
                j--;
            }
        }
    }
}