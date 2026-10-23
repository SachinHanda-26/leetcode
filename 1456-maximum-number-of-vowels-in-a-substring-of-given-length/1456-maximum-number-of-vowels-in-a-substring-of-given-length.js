/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let vowel = 0;
    let max = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) vowel++;
    }
    max = vowel;

    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i - k])) vowel--;
        if (isVowel(s[i])) vowel++;
        max = Math.max(max, vowel);
    }
    return max;
};

function isVowel(c) {
    return "aeiou".indexOf(c) >= 0;
}