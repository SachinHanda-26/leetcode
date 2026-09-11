/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    for (let j = 0; j < m; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }

    for (let i = 0; i < n; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            // your condition here
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if(firstRowZero){
        for(let j = 0; j < m; j++){
            matrix[0][j] = 0;
        }
    }

    if(firstColZero){
        for(let i = 0; i < n; i++){
            matrix[i][0] = 0;
        }
    }

};