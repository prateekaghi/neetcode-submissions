class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k=k%nums.length


        function reverse(arr,start,end){
            while(start<=end){
                [arr[start],arr[end]]=[arr[end],arr[start]]
                start++
                end--
            }
            return arr
        }
        //reverse everything
        reverse(nums,0,nums.length-1)
        //reverse k elements
        reverse(nums,0,k-1)
        //reverse remaining
        reverse(nums,k,nums.length-1)
    }
}
