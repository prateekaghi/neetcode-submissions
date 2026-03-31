class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let string=''
        let count=0
        while(count<word1.length || count<word2.length){
           if(word1[count]){string+=word1[count]}
           if(word2[count]){string+=word2[count]}
            count++
        }
        return string
    }
}
