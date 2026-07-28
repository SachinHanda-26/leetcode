/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    // we cannot follow greedy -> backtracking
    // sort the adj list to maintain lexical order
    // keep removing edges from my adj list to mark visited

    let graph = {};

    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    for (let node in graph) {
        graph[node].sort();
    }

    let path = [];

    function dfs(curr) {
        let destinations = graph[curr] || [];
        while (destinations.length) {
            let neighbor = graph[curr].shift();
            dfs(neighbor);
        }

        // path.unshift();
        path.push(curr);
    }

    dfs("JFK");

    // return path;
    return path.reverse();
};