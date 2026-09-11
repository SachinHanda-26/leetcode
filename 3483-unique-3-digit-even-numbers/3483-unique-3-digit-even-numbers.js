/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    let count = new Array(10).fill(0);
    let set = new Set();
    let ans = 0;

    for (let digit of digits) {
        count[digit]++;
    }

    for (let i = 1; i <= 9; i++) {
        if (count[i] === 0) continue;

        count[i]--;

        for (let j = 0; j <= 9; j++) {
            if (count[j] == 0) continue;
            count[j]--;

            for (let k = 0; k <= 9; k++) {
                if (count[k] == 0) continue;
                if (k % 2 == 0) {
                    count[k]--;

                    let num = 100 * i + 10 * j + k;

                    if (!set.has(num)) {
                        set.add(num);
                        ans++;
                    }
                    count[k]++;
                }
            }
            count[j]++
        }

        count[i]++;
    }
    return ans;
};