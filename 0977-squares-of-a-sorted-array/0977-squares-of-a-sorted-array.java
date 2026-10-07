class Solution {
    public int[] sortedSquares(int[] nums) {
        int i = 0;
        int j = nums.length - 1;
        int k = nums.length - 1;
        int[] result = new int[nums.length];

        while (i <= j) {
            if ((nums[i] * nums[i]) < (nums[j] * nums[j])) {
                result[k] = nums[j] * nums[j];
                j--;
            } else {
                result[k] = nums[i] * nums[i];
                i++;
            }
            k--;
        }
        return result;
    }
}