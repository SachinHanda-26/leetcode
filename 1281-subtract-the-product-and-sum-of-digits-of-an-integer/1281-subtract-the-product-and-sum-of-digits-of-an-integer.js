/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let sum = 0;
    let product = 1;

    while (n > 0) {
        let last = n % 10;
        sum += last;
        product *= last;
        n = Math.floor(n / 10);
    }

    return product - sum;
};