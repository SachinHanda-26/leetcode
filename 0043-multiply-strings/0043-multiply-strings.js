/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 == "0" || num2 == "0") return "0";
    let n = num1.length;
    let m = num2.length;

    let res = new Array(n + m).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        let d1 = num1.charCodeAt(i) - '0'.charCodeAt(0);
        for (let j = m - 1; j >= 0; j--) {
            let d2 = num2.charCodeAt(j) - '0'.charCodeAt(0);
            let sum = d1 * d2 + res[i + j + 1];

            res[i + j + 1] = sum % 10;
            res[i + j] += Math.floor(sum / 10);
        }
    }

    let sb = [];

    for (let num of res) {
        if (sb.length == 0 && num == 0) continue;
        sb.push(num);
    }

    return sb.join("");
};