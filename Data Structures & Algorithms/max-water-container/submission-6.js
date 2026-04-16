class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max=0;
        for(let i=0; i< heights.length; i++){//i=1
            for(let j=i+1; j< heights.length; j++){ //j=2
                let width = j-i //widht=2-1=1
                let height= Math.min(heights[i], heights[j]) //2,2=2
                let area= width*height //1*2=2
                max= Math.max(max,area) //2,4=4
            }
        }
        return max
    }
}
