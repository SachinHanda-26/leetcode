/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length;
    let result = false;

    function backtrack(x, y, wordIndex) {

        if (wordIndex == word.length) {
            result = true;
        }

        let original = board[x][y];
        board[x][y] = "#";

        // top
        if (y < n - 1 && board[x][y + 1] == word[wordIndex]) {
            backtrack(x, y + 1, wordIndex + 1);
        }

        // bottom
        if (y > 0 && board[x][y - 1] == word[wordIndex]) {
            backtrack(x, y - 1, wordIndex + 1);
        }

        //left
        if (x > 0 && board[x - 1][y] == word[wordIndex]) {
            backtrack(x - 1, y, wordIndex + 1);
        }

        //right
        if (x < m - 1 && board[x + 1][y] == word[wordIndex]) {
            backtrack(x + 1, y, wordIndex + 1);
        }

        board[x][y] = original;

    }

    // First step 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0]) {
                backtrack(i, j, 1);
            }
        }
    }

    return result;
};