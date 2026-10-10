class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n + 1];
        Arrays.fill(ans, 0);

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0 && nums[i] <= n) {
                ans[nums[i]]++;
            }
        }

        for (int i = 1; i <= n; i++) {
            if (ans[i] == 0) {
                return i;
            }
        }
        return n + 1;
    }
}