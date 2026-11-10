class Solution {
    public int climbStairs(int n, int[] costs) {
        int[] dp = new int[n + 1];
        Arrays.fill(dp, -1);

        return solve(n, dp, costs);
    }

    public int solve(int i, int[] dp, int[] costs) {
        if (i == 0)
            return 0;

        if (dp[i] != -1)
            return dp[i];

        int ans = Integer.MAX_VALUE;

        for (int jump = 1; jump <= 3; jump++) {
            if (i - jump >= 0) {
                ans = Math.min(ans, solve(i - jump, dp, costs) + costs[i - 1] + jump * jump);
            }
        }
        return dp[i] = ans;
    };
}