class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map={
            '(':')',
            '{':'}',
            '[':']'
        }
        let stack=[]
        for(let i=0;i<s.length;i++){
            let char=s[i]
            if(map[char]){
                stack.push(map[char])
            }else{
                let top = stack.pop()
                if (top !== char) return false
            }
        }
        return stack.length === 0
    }
}
