/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
    let map = {};
    let freq = new Array(51).fill(0);
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (!map[nums[right]]) map[nums[right]] = 1;
        else {
            map[nums[right]]++;
        }

        if (right - left + 1 == k) {
            let values = Object.values(map);
            let keys = Object.keys(map);
            for (let i = 0; i < values.length; i++) {
                let key = keys[i];
                freq[Number(key)]++;
            }
            map[nums[left]]--;
            if (map[nums[left]] === 0) {
                delete map[nums[left]];
            }
            left++;
        }

    }

    let ans = -1;
    for (let i = 50; i >= 0; i--) {
        if (freq[i] == 1) {
            ans = i;
            break;
        }
    }
    return ans;
};