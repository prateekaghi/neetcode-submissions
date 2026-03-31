class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function checkPalindrome(i,j){
            while(i<j){
                if(s[i]!==s[j])return false
                i++
                j--
            }
            return true
        }

        let start=0
        let end=s.length-1
        while(start<end){
            if(s[start]===s[end]){
                start++
                end--
            }else{
                return checkPalindrome(start+1,end) || checkPalindrome(start,end-1)
               
            }
        }
        return true
    }
}
