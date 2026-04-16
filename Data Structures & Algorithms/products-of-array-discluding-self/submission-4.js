class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) { //[1,2,4,6]
        let newArr=[] //{48, }
        for(let i=0; i<nums.length; i++){ //i=1<4(nums.length)
            let num=1; 
            for(let j=0; j< nums.length; j++){ //j=1<4(nums.length)
                if(j!==i){ //j=0,i=1, i!==j
                    num= num*nums[j] //num= 1*nums[0]=1*1=1
                }
            }
            newArr.push(num)
        }
        return newArr
    }
}
