class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s= s.toString().toLowerCase()

         let left= 0
         let right= s.length-1 //[What would I do if s was not a string but a number]
         while(left<right){
            while (left < right && !(/[a-z0-9]/i.test(s[left]))) left++;
            while (left < right && !(/[a-z0-9]/i.test(s[right]))) right--;
            if(s[left]!==s[right]){
                return false
            }
            left++;
            right--;
         }
         return true 
    }
}
