/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let n = cardPoints.length;
    let totalSum = 0;

    for (let i = 0; i < n; i++) {
        totalSum += cardPoints[i];
    }

    if (n == k) return totalSum;

    let windowSize = n - k;

    let windowSum = 0;

    for (let i = 0; i < windowSize; i++) {
        windowSum += cardPoints[i];
    }

    let minWindow = windowSum;

    let left = 0;
    for (let right = windowSize; right < n; right++) {
        windowSum += cardPoints[right];
        windowSum -= cardPoints[left];
        left++;
        minWindow = Math.min(minWindow, windowSum);
    }

    return totalSum - minWindow;
};