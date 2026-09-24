class Solution {
    public int buyChoco(int[] prices, int money) {
        int first = Integer.MAX_VALUE;
        int second = Integer.MAX_VALUE;

        for (int p : prices) {
            if (p < first) {
                second = first;
                first = p;
            } else if (p < second) {
                second = p;
            }
        }
        int sum = first + second;
        if (sum <= money) {
            return money - sum;
        }
        return money;
    }
}