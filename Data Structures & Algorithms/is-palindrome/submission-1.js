class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNumeric(char){
            return ((char >='A' && char<='Z') || (char>='a' && char<='z')||(char>='0' && char<='9'))
        }
        let p1=0
        let p2=s.length-1
        while(p1<p2){
            if(!isAlphaNumeric(s[p1])){
                p1++
                continue
            }
            if(!isAlphaNumeric(s[p2])){
                p2--
                continue
            }
            if((s[p1]).toLowerCase()!==(s[p2]).toLowerCase())return false
            p1++
            p2--
        }
        return true
    }
}
