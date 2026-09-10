/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let ans = 0;

    function check(curr) {
        if (!curr) {
            return [0, 0];
        }
        let leftTree = check(curr.left);
        let rightTree = check(curr.right);

        let [leftSum, leftCount] = leftTree;
        let [rightSum, rightCount] = rightTree;

        let currSum = leftSum + rightSum + curr.val;
        let currCount = leftCount + rightCount + 1;

        if (Math.floor(currSum / currCount) === curr.val) {
            ans++;
        }

        return [currSum, currCount];
    };

    check(root);

    return ans;
};