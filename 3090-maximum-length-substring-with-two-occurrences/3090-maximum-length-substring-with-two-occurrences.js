/**
 * @param {string} s
 * @return {number}
 */
// Sliding Window and HashMap 
var maximumLengthSubstring = function (s) {
    let map = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        if (!map[s[right]]) map[s[right]] = 1;
        else {
            map[s[right]]++;
        }

        while (map[s[right]] > 2) {
            map[s[left]]--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};