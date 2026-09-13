/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let s1 = [];
    let s2 = [];

    for (let ch of s) {
        if (!(ch == "#")) {
            s1.push(ch);
        } else {
            if (s1.length !== 0) {
                s1.pop();
            }
        }
    }

    for (let ch of t) {
        if (!(ch == "#")) {
            s2.push(ch);
        } else {
            if (s2.length !== 0) {
                s2.pop();
            }
        }
    }

    return s1.join("") === s2.join("");
};