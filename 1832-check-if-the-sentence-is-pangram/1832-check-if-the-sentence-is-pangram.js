/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let arr = new Array(26).fill(false);

    for (let i = 0; i < sentence.length; i++) {
        let index = sentence[i].charCodeAt(0) - 'a'.charCodeAt(0);
        arr[index] = true;
    }

    for (let ele of arr) {
        if (!ele) return false;
    }

    return true;
};