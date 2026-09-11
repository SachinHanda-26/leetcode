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

        // use i - means digit
        count[i]--;

        for (let j = 0; j <= 9; j++) {
            if (count[j] == 0) continue;

            // use j
            count[j]--;

            for (let k = 0; k <= 9; k++) {
                if (count[k] == 0) continue;

                // checks that the last digit should be even for even num
                if (k % 2 == 0) {

                    // use k
                    count[k]--;

                    // generate a num
                    let num = 100 * i + 10 * j + k;

                    if (!set.has(num)) {
                        set.add(num);
                        ans++;
                    }
                    // restore k
                    count[k]++;
                }
            }
            // restore j
            count[j]++
        }
        // restore i
        count[i]++;
    }
    return ans;
};