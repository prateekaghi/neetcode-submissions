class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let counts={}
        for(let i=0;i <s.length;i++){
            let charS=s[i]
            let charT=t[i]
            counts[charS]= (counts[charS] ?? 0 ) + 1
            counts[charT]= (counts[charT] ?? 0 ) - 1
        }
      return Object.values(counts).every((v)=>!v)
    }
}
