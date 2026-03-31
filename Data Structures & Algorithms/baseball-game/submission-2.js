class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scoreStack=[]

        for(let i=0;i<operations.length;i++){
            const op=operations[i]
            let stackLength=scoreStack.length
            if(op==='+'){
                let score1= +scoreStack[stackLength-1]
                let score2= +scoreStack[stackLength-2]
                let score3= score1 + score2
                scoreStack.push(score3)

            }else if(op==='D'){
                let score1= +scoreStack[stackLength-1]
                let score2= score1 * 2
                scoreStack.push(score2)

            }else if(op==='C'){
                scoreStack.pop()
            }else{
                scoreStack.push(op)
            }
        }
        

        return scoreStack.reduce((acc, curr) => {
            return acc + Number(curr);
        }, 0);
    }
}
