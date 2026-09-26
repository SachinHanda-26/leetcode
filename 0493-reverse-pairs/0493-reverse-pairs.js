/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let count = 0;

    function mergeSort(left, right) {
        if (left >= right) {
            return;
        }
        let mid = Math.floor(right + (left - right) / 2);
        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        count += merge(left, mid, right);
    }

    function merge(left, mid, right) {
        let i = left;
        let j = mid + 1;
        let reversePairs = 0;

        while (i <= mid && j <= right) {
            if (nums[i] > 2 * nums[j]) {
                reversePairs += mid - i + 1;
                j++;
            } else {
                i++;
            }
        }

        i = left;
        j = mid + 1;
        let temp = [];

        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i]);
                i++;
            }
            else {
                temp.push(nums[j]);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(nums[i]);
            i++;
        }

        while (j <= right) {
            temp.push(nums[j]);
            j++;
        }

        for (let k = left; k <= right; k++) {
            nums[k] = temp[k - left];
        }
        return reversePairs;
    }
    mergeSort(0, nums.length - 1);
    return count;
};