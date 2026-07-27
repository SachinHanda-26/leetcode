/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {

    let map = {};

    for (let [x, y] of edges) {
        if (!map[x]) map[x] = [];
        if (!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }

    let visited = new Set();

    function dfs(curr) {

        if (curr == destination) return true;

        visited.add(curr);

        for (let neighbor of map[curr]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) return true;
            }
        }

        return false;
    }

    return dfs(source);
};