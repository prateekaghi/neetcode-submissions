class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let output=strs[0]

        for(let i=1; i<strs.length ;i++){
            const word=strs[i]
            for(let j=0;j<output.length;j++){
                if(word[j]!==output[j]){
                    output=output.slice(0,j)
                }
            }
        }
        return output

    }
}
