/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (j > i) {
                transpose(matrix, i, j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        reverse(matrix, i);
    }
};


function transpose(matrix, i, j) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
}

function reverse(matrix, i) {
    let start = 0;
    let end = matrix.length - 1;
    while (start < end) {
        [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]];
        start++;
        end--;
    }
}