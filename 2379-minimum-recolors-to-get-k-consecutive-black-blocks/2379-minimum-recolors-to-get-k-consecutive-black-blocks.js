/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let count = 0;
    let min = 0;

    for (let i = 0; i < k; i++) {
        if (blocks[i] == 'W') count++;
    }
    min = count;
    for (let i = k; i < blocks.length; i++) {
        if (blocks[i - k] == 'W') count--;
        if (blocks[i] == 'W') count++;
        min = Math.min(min, count);
    }
    return min;
};