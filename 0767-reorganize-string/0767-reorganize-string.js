/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    let freq = {};
    maxFreq = 0;

    for (let c of s) {
        if (!freq[c]) freq[c] = 1;
        else {
            freq[c]++;
        }
        maxFreq = Math.max(maxFreq, freq[c]);
    }

    let n = s.length;

    if (maxFreq > Math.ceil(n / 2)) {
        return "";
    }

    let chars = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

    let result = new Array(n);

    let i = 0;

    for (let ch of chars) {
        let count = freq[ch];

        while (count > 0) {

            if (i >= n) { i = 1; }

            result[i] = ch;
            count--;
            i = i + 2;
        }
    }
    return result.join("");
};