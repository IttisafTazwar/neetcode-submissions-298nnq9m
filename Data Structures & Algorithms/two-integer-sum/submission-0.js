class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numAndIndex={}

        for(let i=0; i<nums.length; i++){
            numAndIndex[nums[i]]= i
        }

        for(let i=0; i<nums.length; i++){
            const numberNeeded = target - nums[i]

            if(numAndIndex[numberNeeded] !== undefined && numAndIndex[numberNeeded] !==i){
                return [i, numAndIndex[numberNeeded]]
            }
        }
    }
}
