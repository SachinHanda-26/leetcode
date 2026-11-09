class Solution {
    public int sumOfUnique(int[] nums) {
        int[] count = new int[101];
        Arrays.fill(count, 0);

        for (int n : nums) {
            count[n]++;
        }

        int sum = 0;

        for (int i = 0; i < count.length; i++) {
            if (count[i] == 1) {
                sum += i;
            }
        }
        return sum;
    }
}