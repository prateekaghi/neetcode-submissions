class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let minCapacity=Math.max(...weights)
        let maxCapacity=weights.reduce((acc,c)=>acc+c,0)
        let answer=maxCapacity
        while(minCapacity<=maxCapacity){
            let capacity=Math.floor((minCapacity+maxCapacity)/2)
            let reqDays=1
            let currentLoad=0
            for(let weight of weights){
                if(currentLoad+weight <=capacity){
                    currentLoad+=weight
                }else{
                    reqDays++
                    currentLoad=weight
                }
            }

            if(reqDays<=days){ 
                answer=capacity
                maxCapacity=capacity-1
            }else{
                minCapacity=capacity+1
            }

        }
        return answer
    }
}
