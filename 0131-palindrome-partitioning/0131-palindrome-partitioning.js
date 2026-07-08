/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];

    function backtrack(path, remainingSubstring) {

        if (!remainingSubstring.length) {
            result.push([...path]);
            return;
        }

        for (let i = 1; i <= remainingSubstring.length; i++) {
            let choices = remainingSubstring.substring(0, i);

            if (!isPalindrome(choices)) continue;

            path.push(choices);
            backtrack(path, remainingSubstring.substring(i));
            path.pop();
        }
    }

    backtrack([], s);

    return result;

};

function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i++] !== s[j--]) return false;
    }

    return true;
}