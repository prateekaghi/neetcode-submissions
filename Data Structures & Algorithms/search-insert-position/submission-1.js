class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    if (target < nums[left]) {
      return 0;
    } else if (target > nums[right]) {
      return right + 1;
    } else {
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let num = nums[mid];
        if (num === target) return mid;
        if (num < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return left
  }
  
}
