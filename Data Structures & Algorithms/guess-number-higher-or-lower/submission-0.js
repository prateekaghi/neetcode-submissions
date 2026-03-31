/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left=1
        let right=((2**31)-1)
        
        while(left<=right){
            let mid=Math.floor((left+right)/2)
            let check=guess(mid)
            if(check===0){
                return mid
            }
            if(check===1){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        
    }
}
