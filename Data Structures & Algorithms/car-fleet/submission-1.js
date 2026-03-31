class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars=position.map((pos,idx)=>{
            return {position:pos,speed:speed[idx]}
        })
        cars.sort((a,b)=>b.position-a.position)
        let fleets=0
        let maxTime=0
        cars.forEach((car)=>{
            let time=(target-car.position)/car.speed
            if(time>maxTime){
                fleets++
                maxTime=time
            }
        })
        return fleets
    }
}
