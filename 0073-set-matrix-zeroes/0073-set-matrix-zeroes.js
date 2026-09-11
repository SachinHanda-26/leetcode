/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;
    // Check first row
    for (let j = 0; j < m; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }
    // Check first column
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }
    // Use first row and first column as markers
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // Set cells to zero based on markers
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            // your condition here
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out first row if originally required
    if (firstRowZero) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    // Zero out first column if originally required
    if (firstColZero) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

};