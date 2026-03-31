class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
    let pointer1 = 0;
    let pointer2 = nums.length - 1;

    while (pointer1 <= pointer2) {
      if (nums[pointer1] === val) {
        nums[pointer1] = nums[pointer2];
        nums[pointer2] = val;
        pointer2--;
      } else {
        pointer1++;
      }
    }
    return pointer1;
  }
}
