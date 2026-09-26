class Solution {
    int count = 0;

    public int reversePairs(int[] nums) {
        mergeSort(nums, 0, nums.length - 1);
        return count;
    }

    public void mergeSort(int[] nums, int left, int right) {
        if (left >= right) {
            return;
        }
        int mid = left + (right - left) / 2;

        mergeSort(nums, left, mid);
        mergeSort(nums, mid + 1, right);

        count += merge(nums, left, mid, right);
    }

    public int merge(int [] nums, int l, int m, int r){
            int i = l;
            int j = m + 1;
            int reversePairs = 0;

            while(i <= m && j <= r){
                if((long)nums[i] > 2L * nums[j]){
                    reversePairs += m - i + 1;
                    j++;
                }
                else{
                    i++;
                }
            }

            i = l;
            j = m + 1;

            ArrayList<Integer> temp = new ArrayList<>();

            while(i <= m && j <= r){
                if(nums[i] <= nums[j]){
                  temp.add(nums[i]);
                  i++;
                }
                else{
                    temp.add(nums[j]);
                    j++;
                }
            }

            while(i <= m){
                temp.add(nums[i]);
                 i++;
            }

            while(j <= r){
                temp.add(nums[j]);
                 j++;
            }

            for(int k = l; k <= r; k++){
                nums[k] = temp.get(k - l);
            }
            return reversePairs;
        }
}