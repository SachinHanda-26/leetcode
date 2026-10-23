/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    if (Math.floor(sum / k) >= threshold) count++;

    for (let i = k; i < arr.length; i++) {
        sum = sum - arr[i - k] + arr[i];
        if (Math.floor(sum / k) >= threshold) count++;
    }
    return count;
};