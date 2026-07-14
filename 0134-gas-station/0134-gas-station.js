/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let currGain = 0;
    let totalGain = 0;
    let ans = 0;

    for (let i = 0; i < gas.length; i++) {
        let gain = gas[i] - cost[i];
        currGain += gain;
        totalGain += gain;

        if (currGain < 0) {
            ans = i + 1;
            currGain = 0;
        }
    }

    return totalGain >= 0 ? ans : -1;
};