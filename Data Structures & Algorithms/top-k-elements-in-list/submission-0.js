class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map= {}
                                                            // [1#,3#,1#,3#,1#,6#,6#], k=2
                                                            // {

                                                            // {[1:3],[3:2],[6:2]}
                                                            // newArr = [[1,3],[3,2],[6,2]]
                                                            //                                                                  

                                                            // }
        for(let i of nums){

            if(!map[i]){
                map[i]= []
            }

            map[i]=(map[i] || 0) + 1
        }
        let newArr = Object.entries(map).sort((a, b) => b[1] - a[1]); 
        let topX = newArr.slice(0, k);

        return topX.map(pair => Number(pair[0]));
    }
}
