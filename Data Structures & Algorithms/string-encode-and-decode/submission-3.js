class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res= ""

        
        for(let s of strs){
            res += s.length+"#"+s
        }
        return res

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i= 0

        let decodedArr= []
        while(i<str.length){
            let j= i
            let res=""
            while(str[j]!=="#"){
                j++
            }
            let length= parseInt(str.substring(i,j))
            res= str.substring(j+1,j+1+length)
            decodedArr.push(res)
            i= j+1+length
        }
        return decodedArr;
    }
}
