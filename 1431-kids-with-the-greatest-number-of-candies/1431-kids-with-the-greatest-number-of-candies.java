class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int n = candies.length;
        ArrayList<Boolean> list = new ArrayList<>();
        int max = Integer.MIN_VALUE;

        for(int i = 0; i < n; i++){
          max = Math.max(max, candies[i]);
        }

        for(int i = 0; i < n; i++){
            if(extraCandies + candies[i] >= max){
                list.add(true);
            }
            else{
                list.add(false);
            }
        }
        return list;
    }
}