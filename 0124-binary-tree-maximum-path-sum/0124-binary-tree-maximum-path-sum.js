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
var maxPathSum = function (root) {

    let maxSumPath = -Infinity;

    function traverse(curr) {
        if (!curr) return 0;

        let leftMax = Math.max(0, traverse(curr.left));
        let rightMax = Math.max(0, traverse(curr.right));

        let currMax = curr.val + leftMax + rightMax;
        maxSumPath = Math.max(maxSumPath, currMax);

        return curr.val + Math.max(leftMax, rightMax);
    }

    traverse(root);

    return maxSumPath;
};