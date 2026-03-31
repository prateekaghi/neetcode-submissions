class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice=prices[0]
        let maxProfit=0
        for(let i=0;i<prices.length;i++){
            const profit=prices[i]-buyPrice
            maxProfit=Math.max(profit,maxProfit)
            if(buyPrice>prices[i]){
                buyPrice=prices[i]
            }
        }
      return maxProfit
    }
}
