class Solution {
    public int totalNumbers(int[] digits) {
        int[] count = new int[10];
        HashSet<Integer> set = new HashSet<>();
        int ans = 0;

        for (int digit : digits) {
            count[digit]++;
        }

        for (int i = 1; i <= 9; i++) {
            if (count[i] == 0)
                continue;
            count[i]--;

            for (int j = 0; j <= 9; j++) {
                if (count[j] == 0)
                    continue;
                count[j]--;

                for (int k = 0; k <= 9; k++) {
                    if (count[k] == 0)
                        continue;
                    if (k % 2 == 0) {
                        count[k]--;
                        int num = 100 * i + 10 * j + k;

                        if (!set.contains(num)) {
                            set.add(num);
                            ans++;
                        }
                        count[k]++;
                    }
                }
                count[j]++;
            }
            count[i]++;
        }
        return ans;
    }
}