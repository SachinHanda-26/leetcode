/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let nCopy = n;
    let sum = 0;
    let product = 1;

    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        product *= digit;
        n = Math.floor(n / 10);
    }

    if (nCopy % (sum + product) == 0) {
        return true;
    }

    return false;
};