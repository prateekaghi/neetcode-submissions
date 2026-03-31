class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length===0) return 0
        let i=0
        for(let j=1;j<nums.length;j++){
            if(nums[i] !== nums[j]){
            i++
            [nums[i],nums[j]]=[nums[j],nums[i]]
            }
        }
        return i + 1
    }
}
