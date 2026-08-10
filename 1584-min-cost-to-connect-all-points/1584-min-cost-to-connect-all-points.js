/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let n = points.length;

    let pq = new MinPriorityQueue(x => x[1]);
    let visited = new Array(n).fill(false);

    pq.enqueue([0, 0]);

    let minDist = 0;
    let edgesUsed = 0;

    while (edgesUsed < n) {
        let [node, nodeDist] = pq.dequeue();

        if (visited[node]) continue;

        visited[node] = true;

        minDist += nodeDist;
        edgesUsed++;

        for (let nextNode = 0; nextNode < n; nextNode++) {
            if (!visited[nextNode]) {
                let nextDist = Math.abs(points[node][0] - points[nextNode][0]) + Math.abs(points[node][1] - points[nextNode][1])
                pq.enqueue([nextNode, nextDist]);
            }
        }
    }
    return minDist;
};