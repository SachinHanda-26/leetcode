/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;

    let freqMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!freqMap[s[i]]) {
            freqMap[s[i]] = 1;
        }
        else {
            freqMap[s[i]]++;
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!freqMap[t[j]]) return false;

        else {
            --freqMap[t[j]];
        }
    }

    return true;
};