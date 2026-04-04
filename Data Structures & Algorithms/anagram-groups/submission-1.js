class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map=new Map()
        for(const str of strs){
            let count= new Array(26).fill(0)

            for(const char of str){
                count[char.charCodeAt()-97]++
            }
            const key=count.join('#')
            if(!map.has(key)){
                map.set(key,[])
            }
            map.get(key).push(str)
        }
        return Array.from(map.values())
    }
}
