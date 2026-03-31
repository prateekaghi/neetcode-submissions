class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        for(let i=0;i<k;i++){
        let p1=0;
        let p2=1;
        while(p2<nums.length){
            [nums[p1],nums[p2]]=[nums[p2],nums[p1]]
            p2++
            }
        }
    }
}
