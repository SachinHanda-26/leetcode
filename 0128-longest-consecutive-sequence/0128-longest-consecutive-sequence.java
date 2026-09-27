class Solution {
    public int longestConsecutive(int[] nums) {
        HashSet<Integer> set = new HashSet<>();

        for (int num : nums) {
            set.add(num);
        }

        int maxLength = 0;

        for (int s : set) {
            if (!set.contains(s - 1)) {
                int current = s;
                int currentLength = 1;

                while (set.contains(current + 1)) {
                    current++;
                    currentLength++;
                }
                maxLength = Math.max(maxLength, currentLength);
            }
        }
        return maxLength;
    }
}