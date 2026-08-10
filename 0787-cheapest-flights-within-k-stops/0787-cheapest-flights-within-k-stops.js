/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let graph = Array.from({ length: n }, () => []);

    for (let [from, to, price] of flights) {
        graph[from].push([to, price]);
    }

    let minPrice = new Array(n).fill(Infinity);
    // [node, cost, stops]
    let q = [[src, 0, 0]];

    while (q.length) {
        let [curr, currCost, stops] = q.shift();
        if (stops > k) continue;
        for (let [neighbor, neighborCost] of graph[curr]) {
            let newCost = currCost + neighborCost;
            if (newCost < minPrice[neighbor]) {
                minPrice[neighbor] = newCost;
                q.push([neighbor, newCost, stops + 1]);
            }
        }
    }
    return minPrice[dst] == Infinity ? -1 : minPrice[dst];
};