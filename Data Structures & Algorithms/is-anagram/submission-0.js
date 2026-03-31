class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap={}
        let tMap={}
        if(s.length !== t.length) return false
        let length =s.length
        let result= null
        for(let i=0;i <length;i++){
            let charS=s[i]
            let charT=t[i]
            sMap[charS] ? sMap[charS]++ : sMap[charS]=1
            tMap[charT] ? tMap[charT]++ : tMap[charT]=1
        }
        Object.keys(sMap).forEach((sKey)=>{
            if(result || result === null){
            sMap[sKey] === tMap[sKey] ? result = true : result= false
            }
        })
        return result
    }
}
