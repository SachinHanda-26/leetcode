/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    let count = 1;
    let text = a;

    while (text.length < b.length) {
        text = text + a;
        count++;
    }
    if (rabinKarp(text, b)) {
        return count;
    }

    text = text + a;
    count++;

    if (rabinKarp(text, b)) {
        return count;
    }

    return -1;

};

function rabinKarp(text, pattern) {
    let base = 256;
    let mod = 1e9 + 7;

    let n = text.length;
    let m = pattern.length;

    let windowHash = 0;
    let patternHash = 0;

    // Initial Hash of text and pattern

    for (let i = 0; i < m; i++) {
        patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
        windowHash = (windowHash * base + text.charCodeAt(i)) % mod;
    }

    // power
    let power = 1;
    for (let i = 0; i < m - 1; i++) {
        power = (power * base) % mod;
    }

    for (let i = 0; i <= (n - m); i++) {
        if (windowHash == patternHash) {
            if (pattern == text.substring(i, i + m)) {
                return true;
            }
        }
        if (i < n - m) {
            windowHash = (windowHash - (power * text.charCodeAt(i))) % mod;
            if (windowHash < 0) windowHash += mod;
            windowHash = (windowHash * base + text.charCodeAt(i + m)) % mod;
        }
    }
    return false;
};