class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=0
        let right=Math.max(...piles)

        while(left<=right){
            let hours=0
            let mid=Math.floor((left+right)/2)

            for(let pile of piles){
                hours+=Math.ceil(pile/mid)
            }
            if(hours>h){
                left=mid+1
            }else{
                right=mid-1
            }
        }
        return left
    }
}
