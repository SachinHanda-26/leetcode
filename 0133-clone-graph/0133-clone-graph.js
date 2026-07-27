/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;
    let stack = [node];
    let visited = new Map();
    let cloneRoot = new Node(node.val)
    visited.set(node, cloneRoot);

    while (stack.length) {
        let curr = stack.pop();
        for (let n of curr.neighbors) {
            if (!visited.has(n)) {
                stack.push(n);
                visited.set(n, new Node(n.val));
            }
            let cloneCurr = visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }

    return cloneRoot;
};