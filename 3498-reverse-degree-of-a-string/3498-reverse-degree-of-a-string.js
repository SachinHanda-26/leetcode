/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < s.length; i++) {
        let index = i + 1;
        let original = s[i].charCodeAt() - 'a'.charCodeAt(0);
        let reversed = 26 - original;
        product = index * reversed;
        sum += product;
    }

    return sum;
};