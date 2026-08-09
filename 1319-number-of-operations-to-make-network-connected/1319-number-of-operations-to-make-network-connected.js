/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {

    if (connections.length < n - 1) return -1;
    let graph = Array.from({ length: n }, () => []);

    for (let [from, to] of connections) {
        graph[from].push(to);
        graph[to].push(from);
    }

    let noOfConnections = 0;
    let visited = new Array(false);

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            noOfConnections++;
            bfs(i, visited, graph);
        }
    }
    return noOfConnections - 1;
};

function bfs(src, visited, graph) {
    let q = [src];
    visited[src] = true;

    while (q.length) {
        let curr = q.shift();
        for (let neighbor of graph[curr]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}