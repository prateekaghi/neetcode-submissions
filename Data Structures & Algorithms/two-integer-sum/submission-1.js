class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map={}
        for(let i=0;i<nums.length;i++){
        const balance=target-nums[i]
        if(map[balance]!==undefined){
            return [map[balance],i]
        }
        map[nums[i]]=i

        }


    }
}
