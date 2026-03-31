class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map=new Set()
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i]))return true

            map.add(nums[i])
            if(map.size>k){
                map.delete(nums[i-k])
            }
        }
        return false
    }
}
