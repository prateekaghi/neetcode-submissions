class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b)=>a-b)
        let left=0
        let right=people.length-1
        let boats=[]
        while(left<=right){
            if(people[left]+people[right]<=limit){
                boats.push([people[left],people[right]])
                left++
                right--
            }else{
                boats.push([people[right]])
                right--
            }
        }
       return boats.length
    }
}
