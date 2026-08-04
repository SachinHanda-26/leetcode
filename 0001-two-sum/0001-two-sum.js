/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        let element = target - arr[i];

        if (map[element] !== undefined && map[element] !== i) {
            return [i, map[element]];
        }
    }
};