/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (arr, target) {
    let result = [];
    arr.sort((a, b) => a - b);

    function backtrack(remainingSum, path, start) {

        if (remainingSum === 0) {
            result.push([...path]);
        }

        if (remainingSum <= 0) {
            return;
        }

        for (let i = start; i < arr.length; i++) {
            if(i > start && arr[i - 1] === arr[i]){
                continue;
            }
            path.push(arr[i]);
            backtrack(remainingSum - arr[i], path, i + 1);
            path.pop();
        }
    }

    backtrack(target, [], 0);

    return result;

};