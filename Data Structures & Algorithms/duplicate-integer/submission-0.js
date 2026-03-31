class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsFrequency={}
        for(let i=0;i<nums.length;i++){
            let number=nums[i]
            if(!numsFrequency[number]){
                numsFrequency[number]=1
            }else{
                numsFrequency[number]=numsFrequency[number]+1
                return true
            }
        }
        return false
    }
}
