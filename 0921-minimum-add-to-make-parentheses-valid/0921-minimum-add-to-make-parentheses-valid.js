/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let openCount = 0;
    let moves = 0;

    for (let c of s) {
        if (c == "(") openCount++;
        else {
            if (openCount == 0) {
                moves++;
            } else {
                openCount--;
            }
        }
    }
    return moves + openCount;
};