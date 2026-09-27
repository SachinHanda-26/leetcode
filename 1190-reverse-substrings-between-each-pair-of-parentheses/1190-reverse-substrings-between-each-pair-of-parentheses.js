/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [];
    let current = "";

    for (let ch of s) {
        if (ch == "(") {
            stack.push(current);
            current = "";
        }
        else if (ch == ")") {
            current = current.split("").reverse().join("");
            current = stack.pop() + current;
        }
        else {
            current += ch;
        }
    }
    return current;
};