class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows=Array.from({length:9},()=>new Set())
        const columns=Array.from({length:9},()=>new Set())
        const box=Array.from({length:9},()=>new Set())
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                const num=board[i][j]
                if(num==='.')continue;
                const boxIdx=Math.floor(i/3)*3+Math.floor(j/3)
                if(rows[i].has(num) || columns[j].has(num) || box[boxIdx].has(num)){
                    return false
                }
                rows[i].add(num)
                columns[j].add(num)
                box[boxIdx].add(num)
        
            }
        }
        return true
    }
}
