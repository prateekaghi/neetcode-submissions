class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest=0
        let map=new Set()
        let left=0

        for(let right=0;right<s.length;right++){
            const char=s[right]
            while(map.has(char)){
                map.delete(s[left])
                left++
            }
            map.add(char)
            longest=Math.max(longest,right-left+1)

        }
        return longest
    }
}
