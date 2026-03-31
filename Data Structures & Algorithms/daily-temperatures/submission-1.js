class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result=new Array(temperatures.length).fill(0)
        let stack=[]
        for(let i=0;i<temperatures.length;i++){
            const temp=temperatures[i]
            while(stack.length>0 && temp > temperatures[stack[stack.length-1]]){
                let prev=stack.pop()
                result[prev]=i-prev
            }
            stack.push(i)
        }

        return result

    }
}
