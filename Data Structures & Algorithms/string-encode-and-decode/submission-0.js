class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string=''
        for(let i=0;i<strs.length;i++){
            string +=strs[i].length+'#'+strs[i]
        }
        return string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res=[]
        let i=0

        while(i<str.length){
            let j=i
            while(str[j]!=='#'){
                j++
            }
            let length=+str.slice(i,j)
            let start=j+1
            let end=j+1+length
            res.push(str.slice(start,end))
            i=end
        }
        return res

    }
}
