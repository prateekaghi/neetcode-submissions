class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
   productExceptSelf(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      let product;
      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          product = (product ?? 1) * nums[j];
        }
      }
      result[i] = product;
    }
    return result;
  }
}
