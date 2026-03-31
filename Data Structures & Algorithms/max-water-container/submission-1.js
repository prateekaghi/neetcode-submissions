class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let p1=0
        let p2=heights.length-1
        let maxAmount=-Infinity
        
        function totalArea(p1,p2){
            return Math.min(heights[p1],heights[p2])* (p2-p1)
        }

        while(p1<p2){
            const area=totalArea(p1,p2)
            maxAmount= Math.max(area,maxAmount)
            if(heights[p1]<heights[p2]){
                p1++
            }else{
                p2--
            }
        }


        return maxAmount
    }
}
