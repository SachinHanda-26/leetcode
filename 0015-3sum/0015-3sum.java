class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            if (i == 0 || nums[i] != nums[i - 1]) {
                twoSum(nums, i, ans);
            }
        }
        return ans;
    }

    public void twoSum(int[] arr, int x, List<List<Integer>> ans) {
        int i = x + 1;
        int j = arr.length - 1;

        while (i < j) {
            int sum = arr[x] + arr[i] + arr[j];
            if (sum > 0) {
                j--;
            } else if (sum < 0) {
                i++;
            } else {
                ans.add(Arrays.asList(arr[x], arr[i], arr[j]));
                i++;
                j--;

                while (i < j && arr[i] == arr[i - 1])
                    i++;
            }
        }
    }
}