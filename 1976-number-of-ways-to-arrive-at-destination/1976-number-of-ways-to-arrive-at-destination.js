/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
    // create adj list
    let graph = Array.from({ length: n }, () => []);
    for (let [u, v, w] of roads) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    // PQ, minWeight, pathCount
    let pq = new MinPriorityQueue(x => x[1]);
    let minWeight = new Array(n).fill(Infinity);
    let pathCount = new Array(n).fill(0);

    pq.enqueue([0, 0]);
    minWeight[0] = 0;
    pathCount[0] = 1;

    // Dijkstra's Algo
    while (!pq.isEmpty()) {
        let [curr, currWeight] = pq.dequeue();
        for (let [nei, neiWeight] of graph[curr]) {
            let newWeight = currWeight + neiWeight;
            // new shortest path
            if (newWeight < minWeight[nei]) {
                minWeight[nei] = newWeight;
                pq.enqueue([nei, newWeight]);
                pathCount[nei] = pathCount[curr];
            }
            // alternative shortest path
            else if (newWeight == minWeight[nei]) {
                pathCount[nei] = (pathCount[nei] + pathCount[curr]) % (1e9 + 7);
            }
        }
    }
    return pathCount[n - 1];
};