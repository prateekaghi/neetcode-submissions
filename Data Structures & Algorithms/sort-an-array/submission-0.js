class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let length =nums.length
        for(let i=Math.floor(length/2)-1;i>=0;i--){
            heapify(nums,length,i)
        }

        for(let i=length-1;i>0;i--){
            [nums[0],nums[i]]=[nums[i],nums[0]]
            heapify(nums,i,0)
        }

        return nums
        function heapify(arr,arrLength,idx){
            let largest=idx
            let left=2*idx+1
            let right=2*idx+2

            if(left<arrLength && arr[left]>arr[largest]){
                largest = left
            }
            if(right<arrLength && arr[right]>arr[largest]){
                largest=right
            }

            if(largest !== idx){
                [arr[idx],arr[largest]]=[arr[largest],arr[idx]]
                heapify(arr,arrLength,largest)

            }

        }

    }
}
