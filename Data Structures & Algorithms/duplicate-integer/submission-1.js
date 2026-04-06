class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums){
        if(nums===[]){
            return true
        }
        let num = nums.sort()
        for(let i=0; i<num.length; i++){
            if(i===num.length-1){
                return false;
            }
            if(num[i]===num[i+1]){
                return true;
            }
        }
    }
}
