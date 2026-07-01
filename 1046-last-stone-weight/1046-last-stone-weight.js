/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let pq = MaxPriorityQueue.fromArray(stones);

    while (pq.size() > 1) {
        let y = pq.dequeue();
        let x = pq.dequeue();

        if (y !== x) {
            pq.enqueue(y - x);
        }
    }

    return pq.size() ? pq.dequeue() : 0;
};