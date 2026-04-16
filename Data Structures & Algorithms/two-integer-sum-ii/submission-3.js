class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i=0; i<numbers.length;i++){
            let rem= target- numbers[i]
            if(numbers.includes(rem) && numbers[i]!==rem){
                let index= numbers.indexOf(rem)
                return [i+1,index+1]
            }
        }
    }
}
