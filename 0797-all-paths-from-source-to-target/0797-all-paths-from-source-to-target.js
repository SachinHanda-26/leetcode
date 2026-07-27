/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let start = 0;
    let end = graph.length - 1;
    let allRes = [];

    function dfs(curr, path) {
        if (curr == end) {
            allRes.push([...path]);
        }

        for (let neighbor of graph[curr]) {
            path.push(neighbor);
            dfs(neighbor, path);
            path.pop();
        }
    }

    dfs(start, [start]);

    return allRes;
};