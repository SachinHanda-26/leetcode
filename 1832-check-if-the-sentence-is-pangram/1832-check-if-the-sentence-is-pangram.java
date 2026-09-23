class Solution {
    public boolean checkIfPangram(String sentence) {
        boolean [] arr = new boolean[26];

        for(char ch : sentence.toCharArray()){
            int index = ch - 'a';
            arr[index] = true;
        }

        for(boolean boo : arr){
            if(!boo) return false;
        }
        return true;
    }
}