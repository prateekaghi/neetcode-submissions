class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let p1=0
        let p2=1
        while(p1<p2 && Math.abs(p1-p2)<=k && p2<nums.length){
            console.log(p1,p2)
            if(nums[p1]===nums[p2])return true
            if(Math.abs(p1-p2)<k){
                p2++
            }else if(k===1){
                p1++
                p2++
            }else{
                p1++
            }

        }
        return false
    }
}
