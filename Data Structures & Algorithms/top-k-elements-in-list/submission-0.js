class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count={}
        for(const num of nums){
            count[num]= (count[num]|| 0) + 1
        }
        console.log(count)
        const arr=Object.entries(count).map(([num,freq])=>[freq,Number(num)])
        arr.sort((a,b)=>b[0]-a[0])
        return arr.slice(0,k).map((item)=>item[1])
    }
}
