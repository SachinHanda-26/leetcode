class Solution {
    public int reverseDegree(String s) {
        int sum = 0;
        int product = 1;

        for (int i = 0; i < s.length(); i++) {
            int index = i + 1;
            int original = s.charAt(i) - 'a';
            int reversed = 26 - original;
            product = index * reversed;
            sum += product;
        }
        return sum;
    }
}