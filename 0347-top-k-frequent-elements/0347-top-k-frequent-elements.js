/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // create a map of frequency - O(n)
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0;
        }
        ++map[nums[i]]
    }

    //Add elements to MinPQ and restrict size to k. - O(n log k)
    let pq = new MinPriorityQueue(x => x.freq);

    for (key in map) {

        pq.enqueue({ val: key, freq: map[key] }); // log k

        if (pq.size() > k) {
            pq.dequeue(); // log k
        }

    }

    // return remaining k elements in PQ
    return pq.toArray().map(x => Number(x.val));
};