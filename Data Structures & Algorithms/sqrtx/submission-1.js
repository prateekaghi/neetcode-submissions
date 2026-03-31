class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left=0
        let right=x
        let closest

        while(left<=right){
            let mid=Math.floor((left+right)/2)
            if(mid*mid===x)return mid
            if(mid*mid<x){
                left=mid+1
                closest=mid
            }else{
                right=mid-1
            }
        }
        return closest

        
    }
}
