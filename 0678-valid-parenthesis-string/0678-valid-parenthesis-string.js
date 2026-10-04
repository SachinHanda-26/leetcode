/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let open = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '*') {
            ++open;
        }else {
            --open;
        }
        if (open < 0) return false;
    }

    let close = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == ')' || s[i] == '*') {
            ++close;
        }else {
            --close;
        }
        if (close < 0) return false;
    }

    return true;
};