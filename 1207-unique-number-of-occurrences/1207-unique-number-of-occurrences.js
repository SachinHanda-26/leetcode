/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = 1;
        else map[arr[i]]++;
    }

    values = Object.values(map);

    let set = new Set(values);

    return values.length === set.size;
};