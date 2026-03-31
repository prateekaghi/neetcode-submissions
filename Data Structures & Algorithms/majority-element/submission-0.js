class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majority=Math.ceil(nums.length/2)
        let map={}
        for(let i= 0; i<nums.length ; i++){
            map[nums[i]] = (map[nums[i]] ?? 0) + 1 
        }
        
        return Object.entries(map).find(([key,value])=> value >= majority)[0];
       
        
    }
}
