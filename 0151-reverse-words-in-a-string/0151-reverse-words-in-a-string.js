/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = s.trim().split(" ");
    let ans = [];

    for (let word of words) {
        if (word !== "") {
            ans.push(word);
        }
    }

    return ans.reverse().join(" ");
};