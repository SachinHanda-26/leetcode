/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let freq = Array(26).fill(0);
    let maxFreq = 0;

    for (let i = 0; i < tasks.length; i++) {
        let curr = tasks[i].charCodeAt() - 65;
        ++freq[curr];
        maxFreq = Math.max(maxFreq, freq[curr]);
    }

    let countOfMaxFreqCharacters = 0;

    for (let i = 0; i < 26; i++) {
        if (freq[i] == maxFreq) {
            ++countOfMaxFreqCharacters;
        }
    }

    let cycles = (n + 1) * (maxFreq - 1) + countOfMaxFreqCharacters;

    return Math.max(tasks.length, cycles);
};