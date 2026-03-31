class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let output=strs[0]

        for(let i=1; i<strs.length ;i++){
            const word=strs[i]
            let j=0
            
             while(j<output.length && output[j] === word[j]){
                j++
            }
            output=output.slice(0,j)
            if(output==='')break

        }
        return output

    }
}
