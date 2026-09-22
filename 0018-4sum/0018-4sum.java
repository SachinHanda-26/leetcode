class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);

        List<List<Integer>> ans = new ArrayList<>();

        for (int i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            for (int j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) {
                    continue;
                }
                twoSum(nums, i, j, ans, target);
            }
        }
        return ans;
    }

    public void twoSum(int[] arr, int x, int y, List<List<Integer>> ans, int target) {
        int z = y + 1;
        int j = arr.length - 1;

        while (z < j) {
            long sum = (long) arr[x] + arr[y] + arr[z] + arr[j];
            if (sum < target)
                z++;
            else if (sum > target)
                j--;
            else {
                ans.add(Arrays.asList(arr[x], arr[y], arr[z], arr[j]));
                z++;
                j--;

                while (z < j && arr[z] == arr[z - 1])
                    z++;

                while (z < j && arr[j] == arr[j + 1])
                    j--;
            }
        }
    }

}